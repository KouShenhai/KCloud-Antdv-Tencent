<template>
  <a-drawer width="35%" :label-col="4" :wrapper-col="14" :visible="open" @close="onClose">
    <a-divider orientation="left">
      <b>{{ formTitle }}</b>
    </a-divider>
    <a-form-model ref="form" :model="form" :rules="rules">
      <a-form-model-item label="标题" prop="title">
        <a-input v-model="form.title" placeholder="请输入标题" />
      </a-form-model-item>
      <a-form-model-item label="资源">
        <a-input v-model="form.url" placeholder="请上传资源" style="display: none" />
        <a-upload name="file" @change="uploadFile" accept=".cda,.wav,.mp3,.aif,.aiff,.mid,.wma,.ra,.vqf,.ape,.CDA,.WAV,.MP3,.AIF,.AIFF,.MID,.WMA,.RA,.VQF,.APE" :before-upload="beforeUpload">
          <a-button :disabled="disabled">
            上传音频
          </a-button>
        </a-upload>
        <audio v-show="display" loop="loop" :src="form.url" controls="controls"><object :data="form.url" ><embed :src="form.url" /></object></audio>
      </a-form-model-item>
      <a-form-model-item label="标签" prop="tags">
        <template v-for="(tag, index) in tags">
          <a-tag
            color="#f50"
            :key="tag"
            closable
            :close="() => handleTagClose(tag)"
          >{{ tag }}</a-tag>
        </template>
        <a-input
          v-if="tagInputVisible"
          ref="tagInput"
          type="text"
          size="small"
          :style="{ width: '78px' }"
          :value="tagInputValue"
          @change="handleInputChange"
          @blur="handleTagInputConfirm"
          @keyup.enter="handleTagInputConfirm"
        />
        <a-tag v-else @click="showTagInput" style="background: #fff; borderStyle: dashed;">
          <a-icon type="plus"/>新增标签
        </a-tag>
      </a-form-model-item>
      <a-form-model-item label="备注" prop="remark">
        <a-input v-model="form.remark" placeholder="请输入备注" type="textarea" allow-clear />
      </a-form-model-item>
      <div class="bottom-control">
        <a-space>
          <a-button type="primary" :loading="submitLoading" @click="submitForm">
            保存
          </a-button>
          <a-button type="dashed" @click="cancel">
            取消
          </a-button>
        </a-space>
      </div>
    </a-form-model>
  </a-drawer>
</template>

<script>

import { getAudio, addAudio, updateAudio, uploadAudio } from '@/api/sys/audio'
import { mapActions } from 'vuex'
export default {
  name: 'CreateForm',
  components: {
  },
  data () {
    return {
      submitLoading: false,
      formTitle: '',
      tagInputVisible: false,
      tagInputValue: '',
      tags: [],
      // 表单参数
      form: {
        id: undefined,
        title: undefined,
        url: undefined,
        tags: undefined,
        code: 'audio',
        remark: undefined,
        processInstanceId: undefined
      },
      disabled: false,
      open: false,
      display: false,
      rules: {
        title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
        remark: [{ required: true, message: '备注不能为空', trigger: 'blur' }]
      }
    }
  },
  filters: {
  },
  created () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    handleTagClose (removeTag) {
      const tags = this.tags.filter(tag => tag !== removeTag)
      this.tags = tags
    },

    showTagInput () {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.tagInput.focus()
      })
    },

    handleInputChange (e) {
      this.tagInputValue = e.target.value
    },

    handleTagInputConfirm () {
      const inputValue = this.tagInputValue
      let tags = this.tags
      if (inputValue && !tags.includes(inputValue)) {
        tags = [...tags, inputValue]
      }
      Object.assign(this, {
        tags,
        tagInputVisible: false,
        tagInputValue: ''
      })
    },
    onClose () {
      this.open = false
    },
    // 取消按钮
    cancel () {
      this.open = false
      this.reset()
    },
    // 表单重置
    reset () {
      this.tags = []
      this.form = {
        id: undefined,
        title: undefined,
        url: undefined,
        tags: undefined,
        code: 'audio',
        remark: undefined,
        processInstanceId: undefined
      }
    },
    ...mapActions(['GetMD5']),
    uploadFile (data) {
      if (data.fileList.length > 0) {
        this.disabled = true
        this.GetMD5(data.file).then(result => {
          const formData = new FormData()
          formData.append('file', data.file)
          formData.append('md5', result)
          uploadAudio(formData).then(response => {
            this.form.url = response.data.url
            this.display = true
          })
        })
      } else {
        this.display = false
        this.disabled = false
        this.form.url = undefined
      }
    },
    beforeUpload () {
      return false
    },
     /** 新增按钮操作 */
    handleAdd () {
      this.reset()
      this.form.id = undefined
      this.open = true
      this.formTitle = '音频新增'
    },
    /** 修改按钮操作 */
    handleUpdate (row, ids) {
      this.reset()
      const id = row ? row.id : ids
      getAudio(id).then(response => {
        this.form.id = response.data.id
        this.tags = response.data.tags.split(',')
        this.form.url = response.data.url
        this.form.title = response.data.title
        this.form.code = 'audio'
        this.display = true
        this.form.processInstanceId = response.data.processInstanceId
        this.form.remark = response.data.remark
        this.open = true
        this.formTitle = '音频修改'
      })
    },
    /** 提交按钮 */
    submitForm: function () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitLoading = true
          this.form.tags = this.tags.join(',')
          if (this.form.id !== undefined) {
            updateAudio(this.form).then(response => {
              this.$message.success(
                '修改成功',
                3
              )
              this.open = false
              this.$emit('ok')
            }).finally(() => {
              this.submitLoading = false
            })
          } else {
            addAudio(this.form).then(response => {
              this.$message.success(
                '新增成功',
                3
              )
              this.open = false
              this.$emit('ok')
            }).finally(() => {
              this.submitLoading = false
            })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
