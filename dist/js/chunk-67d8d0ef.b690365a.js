(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67d8d0ef"],{ca94:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));var o=n("b775");function s(t){return Object(o["b"])({url:"/admin/workflow/process/api/resource/query",method:"post",data:t})}function i(t){return Object(o["b"])({url:"/admin/workflow/process/api/resource/audit",method:"post",data:t})}},d5df:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-drawer",{attrs:{width:"35%","label-col":4,"wrapper-col":14,visible:t.open},on:{close:t.onClose}},[n("a-divider",{attrs:{orientation:"left"}},[n("b",[t._v(t._s(t.formTitle))])]),n("a-form-model",{ref:"form",attrs:{model:t.form,rules:t.rules}},[n("a-form-model-item",{attrs:{label:"审批意见",prop:"comment"}},[n("a-input",{attrs:{placeholder:"请输入审批意见",type:"textarea","allow-clear":""},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}})],1),n("div",{staticClass:"bottom-control"},[n("a-space",[n("a-button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:function(e){return t.submitForm("1")}}},[t._v(" 同意 ")]),n("a-button",{attrs:{type:"danger",loading:t.submitLoading},on:{click:function(e){return t.submitForm("0")}}},[t._v(" 驳回 ")])],1)],1)],1)],1)},s=[],i=(n("d3b7"),n("ddb0"),n("ca94")),a={name:"CreateForm",props:{},components:{},data:function(){return{submitLoading:!1,formTitle:"",form:{comment:"",taskId:"",taskName:"",instanceId:"",businessKey:"",instanceName:"",definitionId:"",values:{auditStatus:""}},open:!1,rules:{comment:[{required:!0,message:"审批意见不为空",trigger:"blur"}]}}},filters:{},created:function(){},computed:{},watch:{},methods:{onClose:function(){this.open=!1},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={comment:"",taskId:"",taskName:"",instanceId:"",businessKey:"",instanceName:"",definitionId:"",values:{auditStatus:""}}},handleAudit:function(t){this.form.taskId=t.taskId,this.form.instanceId=t.processInstanceId,this.form.taskName=t.taskName,this.form.businessKey=t.businessKey,this.form.instanceName=t.processInstanceName,this.form.definitionId=t.definitionId,this.open=!0,this.formTitle="审批"},submitForm:function(t){var e=this;this.$refs.form.validate((function(n){if(!n)return!1;e.submitLoading=!0,e.form.values.auditStatus=t,Object(i["a"])(e.form).then((function(t){e.$message.success("审批成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.reset(),e.submitLoading=!1}))}))}}},r=a,c=n("2877"),u=Object(c["a"])(r,o,s,!1,null,null,null);e["default"]=u.exports}}]);