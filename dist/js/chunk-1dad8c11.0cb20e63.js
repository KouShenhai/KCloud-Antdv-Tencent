(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dad8c11","chunk-1d23c311"],{3962:function(e,t,i){"use strict";i.d(t,"e",(function(){return r})),i.d(t,"d",(function(){return s})),i.d(t,"a",(function(){return n})),i.d(t,"g",(function(){return o})),i.d(t,"b",(function(){return d})),i.d(t,"i",(function(){return u})),i.d(t,"h",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"f",(function(){return m}));var a=i("b775");function r(e){return Object(a["b"])({url:"/admin/sys/resource/video/api/query",method:"post",data:e})}function s(e){return Object(a["b"])({url:"/admin/sys/resource/video/api/detail?id="+e,method:"get"})}function n(e){return Object(a["b"])({url:"/admin/sys/resource/video/api/insert",method:"post",data:e})}function o(e){return Object(a["b"])({url:"/admin/sys/resource/video/api/update",method:"put",data:e})}function d(e){return Object(a["b"])({url:"/admin/sys/resource/video/api/delete?id="+e,method:"delete"})}function u(e){return Object(a["b"])({url:"/admin/sys/resource/video/api/upload",method:"post",data:e})}function l(e){return Object(a["b"])({url:"/admin/oss/api/upload",method:"post",data:e})}function c(e){return Object(a["b"])({url:"/admin/sys/resource/video/api/auditLog?resourceId="+e,method:"get"})}function m(){return Object(a["b"])({url:"/admin/sys/resource/video/api/sync?code=video",method:"post"})}},"766a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("page-header-wrapper",[i("a-card",{attrs:{bordered:!1}},[i("div",{staticClass:"table-page-search-wrapper"},[i("a-form",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:query"],expression:"['sys:resource:video:query']"}],attrs:{layout:"inline"}},[i("a-row",{attrs:{gutter:48}},[i("a-col",{attrs:{md:8,sm:24}},[i("a-form-item",{attrs:{label:"视频编号"}},[i("a-input",{attrs:{placeholder:"请输入视频编号","allow-clear":""},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1)],1),i("a-col",{attrs:{md:8,sm:24}},[i("a-form-item",{attrs:{label:"视频名称"}},[i("a-input",{attrs:{placeholder:"请输入视频名称","allow-clear":""},model:{value:e.queryParam.title,callback:function(t){e.$set(e.queryParam,"title",t)},expression:"queryParam.title"}})],1)],1),i("a-col",{attrs:{md:8,sm:24}},[i("span",{staticClass:"table-page-search-submitButtons"},[i("a-button",{attrs:{type:"primary"},on:{click:e.handleQuery}},[i("a-icon",{attrs:{type:"search"}}),e._v("查询")],1),i("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.resetQuery}},[i("a-icon",{attrs:{type:"redo"}}),e._v("重置")],1)],1)])],1)],1)],1),i("div",{staticClass:"table-operations"},[i("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:insert"],expression:"['sys:resource:video:insert']"}],attrs:{type:"primary"},on:{click:function(t){return e.$refs.createForm.handleAdd()}}},[i("a-icon",{attrs:{type:"plus"}}),e._v("新增 ")],1),i("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:sync"],expression:"['sys:resource:video:sync']"}],attrs:{loading:e.syncLoading,type:"danger"},on:{click:function(t){return e.syncVideo()}}},[i("a-icon",{attrs:{type:"reload"}}),e._v("同步 ")],1)],1),i("create-form",{ref:"createForm",attrs:{statusOptions:e.statusOptions},on:{ok:e.getList}}),i("a-table",{attrs:{loading:e.loading,size:e.tableSize,rowKey:"id",columns:e.columns,"data-source":e.list,pagination:!1,bordered:e.tableBordered},scopedSlots:e._u([{key:"status",fn:function(t,a){return i("span",{},[e._v(" "+e._s(e.statusFormat(a))+" ")])}},{key:"operation",fn:function(t,a){return i("span",{},[i("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:insert"],expression:"['sys:resource:video:insert']"}],on:{click:function(t){return e.$refs.createForm.handleAdd()}}},[i("a-icon",{attrs:{type:"plus"}}),e._v("新增 ")],1),3==a.status||2==a.status?i("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:update"],expression:"['sys:resource:video:update']"}],attrs:{type:"vertical"}}):e._e(),3==a.status||2==a.status?i("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:update"],expression:"['sys:resource:video:update']"}],on:{click:function(t){return e.$refs.createForm.handleUpdate(a,void 0)}}},[i("a-icon",{attrs:{type:"edit"}}),e._v("修改 ")],1):e._e(),3==a.status||2==a.status?i("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:delete"],expression:"['sys:resource:video:delete']"}],attrs:{type:"vertical"}}):e._e(),3==a.status||2==a.status?i("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:delete"],expression:"['sys:resource:video:delete']"}],on:{click:function(t){return e.handleDelete(a)}}},[i("a-icon",{attrs:{type:"delete"}}),e._v("删除 ")],1):e._e(),3==a.status?i("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:detail"],expression:"['sys:resource:video:detail']"}],attrs:{type:"vertical"}}):e._e(),3==a.status?i("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:detail"],expression:"['sys:resource:video:detail']"}],on:{click:function(t){return e.handleQuery1(a)}}},[i("a-icon",{attrs:{type:"eye"}}),e._v("查看 ")],1):e._e(),3!=a.status?i("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:diagram"],expression:"['sys:resource:video:diagram']"}],attrs:{type:"vertical"}}):e._e(),3!=a.status?i("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:video:diagram"],expression:"['sys:resource:video:diagram']"}],on:{click:function(t){return e.handleQuery2(a)}}},[i("a-icon",{attrs:{type:"gold"}}),e._v("查看 ")],1):e._e(),i("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:audio:auditLog"],expression:"['sys:resource:audio:auditLog']"}],attrs:{type:"vertical"}}),i("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:resource:audio:auditLog"],expression:"['sys:resource:audio:auditLog']"}],on:{click:function(t){return e.handleQuery3(a)}}},[i("a-icon",{attrs:{type:"file"}}),e._v("审批日志 ")],1)],1)}}])}),i("a-pagination",{staticClass:"ant-table-pagination",attrs:{"show-size-changer":"","show-quick-jumper":"",current:e.queryParam.pageNum,total:e.total,"page-size":e.queryParam.pageSize,showTotal:function(e){return"共 "+e+" 条"}},on:{showSizeChange:e.onShowSizeChange,change:e.changeSize}})],1),i("a-modal",{ref:"noticeDetail",attrs:{width:900,visible:e.visible,footer:null},on:{cancel:e.close}},[i("template",{slot:"title"},[i("center",[i("a-tag",{attrs:{color:"blue"}},[e._v("视频")]),e._v(e._s(e.videoTitle))],1)],1),i("a-table",{directives:[{name:"show",rawName:"v-show",value:e.visible3,expression:"visible3"}],attrs:{rowKey:"id",columns:e.columns1,"data-source":e.list1,pagination:!1,bordered:e.tableBordered},scopedSlots:e._u([{key:"auditStatus",fn:function(t,a){return i("span",{},[e._v(" "+e._s(e.auditStatusFormat(a))+" ")])}}])}),i("img",{directives:[{name:"show",rawName:"v-show",value:e.visible2,expression:"visible2"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:e.diagramUri}}),i("video",{directives:[{name:"show",rawName:"v-show",value:e.visible1,expression:"visible1"}],attrs:{src:e.videoUri,loop:"loop",width:"200",height:"100",controls:"controls"}},[i("source",{attrs:{src:e.videoUri,type:"video/mp4"}}),i("object",{attrs:{data:e.videoUri,width:"200",height:"100"}},[i("embed",{attrs:{src:e.videoUri,width:"200",height:"100"}})])])],2)],1)},r=[],s=i("9fb0"),n=i("8ded"),o=i.n(n),d=i("3962"),u=i("7f8c"),l=i("435a"),c=(i("aa9c"),{name:"Resource-Video",components:{CreateForm:u["default"]},mixins:[l["a"]],data:function(){return{diagramUri:"",videoTitle:"",videoUri:"",list:[],selectedRowKeys:[],selectedRows:[],syncLoading:!1,advanced:!1,visible1:!1,visible2:!1,visible3:!1,single:!0,multiple:!0,ids:[],loading:!1,refreshing:!1,total:0,visible:!1,statusOptions:[],dateRange:[],queryParam:{pageNum:1,pageSize:10,title:void 0,code:"video",id:""},columns:[{title:"标题",dataIndex:"title",ellipsis:!0,align:"center"},{title:"作者",dataIndex:"author",ellipsis:!0,align:"center"},{title:"状态",dataIndex:"status",ellipsis:!0,scopedSlots:{customRender:"status"},align:"center"},{title:"标签",dataIndex:"tags",ellipsis:!0,align:"center"},{title:"备注",dataIndex:"remark",ellipsis:!0,align:"center"},{title:"操作",dataIndex:"operation",width:"26%",scopedSlots:{customRender:"operation"},align:"center"}],columns1:[{title:"审核人",dataIndex:"auditName",ellipsis:!0,align:"center"},{title:"审核时间",dataIndex:"auditDate",ellipsis:!0,align:"center"},{title:"审核状态",dataIndex:"auditStatus",ellipsis:!0,scopedSlots:{customRender:"auditStatus"},align:"center"},{title:"审核意见",dataIndex:"comment",ellipsis:!0,align:"center"}],list1:[]}},filters:{},created:function(){this.linkQuery()},computed:{},watch:{$route:function(e,t){this.linkQuery()}},methods:{linkQuery:function(){var e=this.$route.query;"{}"!=JSON.stringify(e)&&(this.queryParam.id=e.id),this.getList()},syncVideo:function(){var e=this;e.loading=!0,e.syncLoading=!0,Object(d["f"])().then((function(t){e.loading=!1,e.syncLoading=!1,e.$message.success("同步成功",3)}))},auditStatusFormat:function(e){return 0==e.auditStatus?"审批驳回":1==e.auditStatus?"审批通过":void 0},close:function(){this.visible=!1,this.diagramUri="",this.videoUri="",this.videoTitle="",this.visible3=!1,this.list1=[],this.visible1=!1,this.visible2=!1},handleQuery3:function(e){var t=this;this.videoTitle="审批日志",this.visible=!0,this.visible2=!1,this.visible1=!1,this.visible3=!0;var i=e.id;Object(d["c"])(i).then((function(e){t.list1=e.data}))},getList:function(){var e=this;this.loading=!0,Object(d["e"])(this.queryParam).then((function(t){e.list=t.data.records,e.total=t.data.total-0,e.loading=!1}))},handleQuery1:function(e){var t=this;this.visible=!0,this.visible1=!0,this.visible2=!1;var i=e.id;Object(d["d"])(i).then((function(e){t.videoUri=e.data.uri,t.videoTitle=e.data.title}))},handleQuery2:function(e){this.visible=!0,this.visible2=!0,this.visible1=!1,this.videoTitle="流程图",this.diagramUri="http://175.178.69.253/laokou/admin/sys/resource/video/api/diagram?processInstanceId="+e.processInstanceId+"&Authorization="+o.a.get(s["a"])},handleQuery:function(){this.queryParam.pageNum=1,this.getList()},statusFormat:function(e){return 0==e.status?"待审批":1==e.status?"审批中":2==e.status?"审批拒绝":"审批通过"},resetQuery:function(){this.dateRange=[],this.queryParam={pageNum:1,pageSize:10,title:void 0,code:"video",id:""},this.handleQuery()},onShowSizeChange:function(e,t){this.queryParam.pageSize=t,this.getList()},changeSize:function(e,t){this.queryParam.pageNum=e,this.queryParam.pageSize=t,this.getList()},toggleAdvanced:function(){this.advanced=!this.advanced},handleDelete:function(e){var t=this,i=e.id;this.$confirm({title:"确认删除所选中数据?",content:"当前选中视频编号为"+i+"的数据",onOk:function(){return Object(d["b"])(i).then((function(){t.getList(),t.$message.success("删除成功",3)}))},onCancel:function(){}})}}}),m=c,p=i("2877"),h=Object(p["a"])(m,a,r,!1,null,null,null);t["default"]=h.exports},"7f8c":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{width:"35%","label-col":4,"wrapper-col":14,visible:e.open},on:{close:e.onClose}},[i("a-divider",{attrs:{orientation:"left"}},[i("b",[e._v(e._s(e.formTitle))])]),i("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[i("a-form-model-item",{attrs:{label:"标题",prop:"title"}},[i("a-input",{attrs:{placeholder:"请输入标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("a-form-model-item",{attrs:{label:"资源"}},[i("a-input",{staticStyle:{display:"none"},attrs:{placeholder:"请上传资源"},model:{value:e.form.uri,callback:function(t){e.$set(e.form,"uri",t)},expression:"form.uri"}}),i("a-upload",{attrs:{name:"file",accept:".mp4,.MP4,.AVI,.mov,.rmvb,.rm,.FLV,.mp4,.3GP,.flv","before-upload":e.beforeUpload},on:{change:e.uploadFile}},[i("a-button",{attrs:{disabled:e.disabled}},[e._v(" 上传视频 ")])],1),i("video",{directives:[{name:"show",rawName:"v-show",value:e.display,expression:"display"}],attrs:{src:e.form.uri,loop:"loop",width:"200",height:"100",controls:"controls"}},[i("source",{attrs:{src:e.form.uri,type:"video/mp4"}}),i("object",{attrs:{data:e.form.uri,width:"200",height:"100"}},[i("embed",{attrs:{src:e.form.uri,width:"200",height:"100"}})])])],1),i("a-form-model-item",{attrs:{label:"标签",prop:"tags"}},[e._l(e.tags,(function(t,a){return[i("a-tag",{key:t,attrs:{color:"#f50",closable:"",close:function(){return e.handleTagClose(t)}}},[e._v(e._s(t))])]})),e.tagInputVisible?i("a-input",{ref:"tagInput",style:{width:"78px"},attrs:{type:"text",size:"small",value:e.tagInputValue},on:{change:e.handleInputChange,blur:e.handleTagInputConfirm,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleTagInputConfirm.apply(null,arguments)}}}):i("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:e.showTagInput}},[i("a-icon",{attrs:{type:"plus"}}),e._v("新增标签 ")],1)],2),i("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[i("a-input",{attrs:{placeholder:"请输入备注",type:"textarea","allow-clear":""},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),i("div",{staticClass:"bottom-control"},[i("a-space",[i("a-button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitForm}},[e._v(" 保存 ")]),i("a-button",{attrs:{type:"dashed"},on:{click:e.cancel}},[e._v(" 取消 ")])],1)],1)],1)],1)},r=[],s=i("2909"),n=(i("4de4"),i("d3b7"),i("caad"),i("2532"),i("99af"),i("ac1f"),i("1276"),i("a15b"),i("3962")),o={name:"CreateForm",components:{},data:function(){return{submitLoading:!1,formTitle:"",tagInputVisible:!1,tagInputValue:"",tags:[],form:{id:void 0,title:void 0,uri:void 0,md5:void 0,tags:void 0,code:"video",remark:void 0,processInstanceId:void 0},disabled:!1,open:!1,display:!1,rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}],remark:[{required:!0,message:"备注不能为空",trigger:"blur"}]}}},filters:{},created:function(){},computed:{},watch:{},methods:{handleTagClose:function(e){var t=this.tags.filter((function(t){return t!==e}));this.tags=t},showTagInput:function(){var e=this;this.tagInputVisible=!0,this.$nextTick((function(){e.$refs.tagInput.focus()}))},handleInputChange:function(e){this.tagInputValue=e.target.value},handleTagInputConfirm:function(){var e=this.tagInputValue,t=this.tags;e&&!t.includes(e)&&(t=[].concat(Object(s["a"])(t),[e])),Object.assign(this,{tags:t,tagInputVisible:!1,tagInputValue:""})},onClose:function(){this.open=!1},cancel:function(){this.open=!1,this.reset()},reset:function(){this.tags=[],this.form={id:void 0,title:void 0,uri:void 0,md5:void 0,tags:void 0,code:"video",remark:void 0,processInstanceId:void 0}},uploadFile:function(e){var t=this;if(e.fileList.length>0){this.disabled=!0;var i=new FormData;i.append("file",e.file),Object(n["i"])(i).then((function(e){t.form.uri=e.data.url,t.form.md5=e.data.md5,null==t.form.uri?Object(n["h"])(i).then((function(e){t.form.uri=e.data.url,t.display=!0})):t.display=!0}))}else this.display=!1,this.disabled=!1,this.form.uri=void 0,this.form.md5=void 0},beforeUpload:function(){return!1},handleAdd:function(){this.reset(),this.form.id=void 0,this.open=!0,this.formTitle="视频新增"},handleUpdate:function(e,t){var i=this;this.reset();var a=e?e.id:t;Object(n["d"])(a).then((function(e){i.form.id=e.data.id,i.tags=e.data.tags.split(","),i.form.uri=e.data.uri,i.form.md5=e.data.md5,i.form.title=e.data.title,i.form.code="video",i.display=!0,i.form.processInstanceId=e.data.processInstanceId,i.form.remark=e.data.remark,i.open=!0,i.formTitle="视频修改"}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.submitLoading=!0,e.form.tags=e.tags.join(","),void 0!==e.form.id?Object(n["g"])(e.form).then((function(t){e.$message.success("修改成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1})):Object(n["a"])(e.form).then((function(t){e.$message.success("新增成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1}))}))}}},d=o,u=i("2877"),l=Object(u["a"])(d,a,r,!1,null,null,null);t["default"]=l.exports},aa9c:function(e,t,i){"use strict";i.d(t,"e",(function(){return r})),i.d(t,"d",(function(){return s})),i.d(t,"a",(function(){return n})),i.d(t,"g",(function(){return o})),i.d(t,"b",(function(){return d})),i.d(t,"i",(function(){return u})),i.d(t,"h",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"f",(function(){return m}));var a=i("b775");function r(e){return Object(a["b"])({url:"/admin/sys/resource/image/api/query",method:"post",data:e})}function s(e){return Object(a["b"])({url:"/admin/sys/resource/image/api/detail?id="+e,method:"get"})}function n(e){return Object(a["b"])({url:"/admin/sys/resource/image/api/insert",method:"post",data:e})}function o(e){return Object(a["b"])({url:"/admin/sys/resource/image/api/update",method:"put",data:e})}function d(e){return Object(a["b"])({url:"/admin/sys/resource/image/api/delete?id="+e,method:"delete"})}function u(e){return Object(a["b"])({url:"/admin/sys/resource/image/api/upload",method:"post",data:e})}function l(e){return Object(a["b"])({url:"/admin/oss/api/upload",method:"post",data:e})}function c(e){return Object(a["b"])({url:"/admin/sys/resource/image/api/auditLog?resourceId="+e,method:"get"})}function m(){return Object(a["b"])({url:"/admin/sys/resource/image/api/sync?code=image",method:"post"})}}}]);