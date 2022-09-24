(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24edbb4a","chunk-79af7cf5"],{"343c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{width:"35%","label-col":4,"wrapper-col":14,visible:e.open},on:{close:e.onClose}},[a("a-divider",{attrs:{orientation:"left"}},[a("b",[e._v(e._s(e.formTitle))])]),a("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("a-form-model-item",{attrs:{label:"应用id",prop:"clientId"}},[a("a-input",{attrs:{placeholder:"请输入应用id"},model:{value:e.form.clientId,callback:function(t){e.$set(e.form,"clientId",t)},expression:"form.clientId"}})],1),a("a-form-model-item",{attrs:{label:"应用密钥",prop:"clientSecret"}},[a("a-input",{attrs:{placeholder:"请输入应用密钥"},model:{value:e.form.clientSecret,callback:function(t){e.$set(e.form,"clientSecret",t)},expression:"form.clientSecret"}})],1),a("a-form-model-item",{attrs:{label:"授权类型",prop:"types"}},[a("a-checkbox-group",{model:{value:e.form.types,callback:function(t){e.$set(e.form,"types",t)},expression:"form.types"}},[a("a-checkbox",{attrs:{value:"authorization_code"}},[e._v("authorization_code")]),a("a-checkbox",{attrs:{value:"refresh_token"}},[e._v("refresh_token")]),a("a-checkbox",{attrs:{value:"password"}},[e._v("password")]),a("br"),a("a-checkbox",{attrs:{value:"implicit"}},[e._v("implicit")]),a("a-checkbox",{attrs:{value:"client_credentials"}},[e._v("client_credentials")])],1)],1),a("a-form-model-item",{attrs:{label:"授权范围",prop:"scope"}},[a("a-input",{attrs:{placeholder:"请输入授权范围"},model:{value:e.form.scope,callback:function(t){e.$set(e.form,"scope",t)},expression:"form.scope"}})],1),a("a-form-model-item",{attrs:{label:"令牌秒数",prop:"accessTokenValidity"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:3600,placeholder:"请输入令牌秒数"},model:{value:e.form.accessTokenValidity,callback:function(t){e.$set(e.form,"accessTokenValidity",t)},expression:"form.accessTokenValidity"}})],1),a("a-form-model-item",{attrs:{label:"刷新秒数",prop:"refreshTokenValidity"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:7200,placeholder:"请输入刷新秒数"},model:{value:e.form.refreshTokenValidity,callback:function(t){e.$set(e.form,"refreshTokenValidity",t)},expression:"form.refreshTokenValidity"}})],1),a("a-form-model-item",{attrs:{label:"回调地址",prop:"webServerRedirectUri"}},[a("a-input",{attrs:{placeholder:"请输入回调地址",type:"textarea","allow-clear":""},model:{value:e.form.webServerRedirectUri,callback:function(t){e.$set(e.form,"webServerRedirectUri",t)},expression:"form.webServerRedirectUri"}})],1),a("a-form-model-item",{attrs:{label:"自动授权",prop:"autoapprove"}},[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:e.form.autoapprove,callback:function(t){e.$set(e.form,"autoapprove",t)},expression:"form.autoapprove"}},[a("a-radio-button",{attrs:{value:"true"}},[e._v("是")]),a("a-radio-button",{attrs:{value:"false"}},[e._v("否")])],1)],1),a("a-form-model-item",{attrs:{label:"排序",prop:"sort"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入排序",min:0},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),a("a-form-model-item",{attrs:{label:"资源集合",prop:"resourceIds"}},[a("a-input",{attrs:{placeholder:"请输入资源集合"},model:{value:e.form.resourceIds,callback:function(t){e.$set(e.form,"resourceIds",t)},expression:"form.resourceIds"}})],1),a("a-form-model-item",{attrs:{label:"权限",prop:"authorities"}},[a("a-input",{attrs:{placeholder:"请输入权限"},model:{value:e.form.authorities,callback:function(t){e.$set(e.form,"authorities",t)},expression:"form.authorities"}})],1),a("a-form-model-item",{attrs:{label:"附加说明",prop:"additionalInformation"}},[a("a-input",{attrs:{placeholder:"请输入附加说明"},model:{value:e.form.additionalInformation,callback:function(t){e.$set(e.form,"additionalInformation",t)},expression:"form.additionalInformation"}})],1),a("div",{staticClass:"bottom-control"},[a("a-space",[a("a-button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitForm}},[e._v(" 保存 ")]),a("a-button",{attrs:{type:"dashed"},on:{click:e.cancel}},[e._v(" 取消 ")])],1)],1)],1)],1)},i=[],o=(a("4e82"),a("ac1f"),a("1276"),a("a15b"),a("d3b7"),a("eddb")),s={name:"CreateForm",components:{},data:function(){return{submitLoading:!1,formTitle:"",form:{id:void 0,sort:1,accessTokenValidity:"",additionalInformation:"",authorities:"",authorizedGrantTypes:null,types:[],autoapprove:"",clientId:"",clientSecret:"",refreshTokenValidity:"",resourceIds:"",scope:"",webServerRedirectUri:""},open:!1,rules:{clientId:[{required:!0,message:"应用id不能为空",trigger:"blur"}],clientSecret:[{required:!0,message:"应用密钥不能为空",trigger:"blur"}],types:[{required:!0,message:"授权类型不能为空",trigger:"blur"}],scope:[{required:!0,message:"授权范围不能为空",trigger:"blur"}],accessTokenValidity:[{required:!0,message:"令牌秒数不能为空",trigger:"blur"}],refreshTokenValidity:[{required:!0,message:"刷新秒数不能为空",trigger:"blur"}],webServerRedirectUri:[{required:!0,message:"回调地址不能为空",trigger:"blur"}],autoapprove:[{required:!0,message:"自动授权不能为空",trigger:"blur"}],sort:[{required:!0,message:"排序不能为空",trigger:"blur"}]}}},filters:{},created:function(){},computed:{},watch:{},methods:{onClose:function(){this.open=!1},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:void 0,sort:1,accessTokenValidity:"",additionalInformation:"",authorities:"",authorizedGrantTypes:"",types:[],autoapprove:"",clientId:"",clientSecret:"",refreshTokenValidity:"",resourceIds:"",scope:"",webServerRedirectUri:""}},handleAdd:function(){this.reset(),this.form.id=void 0,this.open=!0,this.formTitle="认证新增"},handleUpdate:function(e,t){var a=this;this.reset();var r=e?e.id:t;Object(o["c"])(r).then((function(e){a.form.id=e.data.id,a.form.sort=e.data.sort,a.form.accessTokenValidity=e.data.accessTokenValidity-0,a.form.additionalInformation=e.data.additionalInformation,a.form.authorities=e.data.authorities,a.form.types=e.data.authorizedGrantTypes.split(","),a.form.autoapprove=e.data.autoapprove,a.form.clientId=e.data.clientId,a.form.clientSecret=e.data.clientSecret,a.form.refreshTokenValidity=e.data.refreshTokenValidity-0,a.form.resourceIds=e.data.resourceIds,a.form.scope=e.data.scope,a.form.webServerRedirectUri=e.data.webServerRedirectUri,a.open=!0,a.formTitle="认证修改"}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.submitLoading=!0;var a=e.form.types;e.form.authorizedGrantTypes=a.join(","),void 0!==e.form.id?Object(o["e"])(e.form).then((function(t){e.$message.success("修改成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1})):Object(o["a"])(e.form).then((function(t){e.$message.success("新增成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1}))}))}}},n=s,l=a("2877"),c=Object(l["a"])(n,r,i,!1,null,null,null);t["default"]=c.exports},af04:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-header-wrapper",[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:oauth:query"],expression:"['sys:oauth:query']"}],attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"应用id"}},[a("a-input",{attrs:{placeholder:"请输入应用id","allow-clear":""},model:{value:e.queryParam.clientId,callback:function(t){e.$set(e.queryParam,"clientId",t)},expression:"queryParam.clientId"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"应用密钥"}},[a("a-input",{attrs:{placeholder:"请输入应用密钥","allow-clear":""},model:{value:e.queryParam.clientSecret,callback:function(t){e.$set(e.queryParam,"clientSecret",t)},expression:"queryParam.clientSecret"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleQuery}},[a("a-icon",{attrs:{type:"search"}}),e._v("查询")],1),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.resetQuery}},[a("a-icon",{attrs:{type:"redo"}}),e._v("重置")],1)],1)])],1)],1)],1),a("div",{staticClass:"table-operations"},[a("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:oauth:insert"],expression:"['sys:oauth:insert']"}],attrs:{type:"primary"},on:{click:function(t){return e.$refs.createForm.handleAdd()}}},[a("a-icon",{attrs:{type:"plus"}}),e._v("新增 ")],1)],1),a("create-form",{ref:"createForm",attrs:{statusOptions:e.statusOptions},on:{ok:e.getList}}),a("a-table",{attrs:{loading:e.loading,size:e.tableSize,rowKey:"id",columns:e.columns,"data-source":e.list,pagination:!1,bordered:e.tableBordered},scopedSlots:e._u([{key:"operation",fn:function(t,r){return a("span",{},[a("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:oauth:update"],expression:"['sys:oauth:update']"}],on:{click:function(t){return e.$refs.createForm.handleUpdate(r,void 0)}}},[a("a-icon",{attrs:{type:"edit"}}),e._v("修改 ")],1),a("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:oauth:insert"],expression:"['sys:oauth:insert']"}],attrs:{type:"vertical"}}),a("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:oauth:insert"],expression:"['sys:oauth:insert']"}],on:{click:function(t){return e.$refs.createForm.handleAdd()}}},[a("a-icon",{attrs:{type:"plus"}}),e._v("新增 ")],1),a("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:oauth:delete"],expression:"['sys:oauth:delete']"}],attrs:{type:"vertical"}}),a("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["sys:oauth:delete"],expression:"['sys:oauth:delete']"}],on:{click:function(t){return e.handleDelete(r)}}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除 ")],1)],1)}}])}),a("a-pagination",{staticClass:"ant-table-pagination",attrs:{"show-size-changer":"","show-quick-jumper":"",current:e.queryParam.pageNum,total:e.total,"page-size":e.queryParam.pageSize,showTotal:function(e){return"共 "+e+" 条"}},on:{showSizeChange:e.onShowSizeChange,change:e.changeSize}})],1)],1)},i=[],o=a("eddb"),s=a("343c"),n=a("435a"),l={name:"Oauth",components:{CreateForm:s["default"]},mixins:[n["a"]],data:function(){return{list:[],selectedRowKeys:[],selectedRows:[],advanced:!1,single:!0,multiple:!0,ids:[],loading:!1,refreshing:!1,total:0,statusOptions:[],dateRange:[],queryParam:{pageNum:1,pageSize:10,clientId:void 0,clientSecret:void 0},columns:[{title:"应用id",dataIndex:"clientId",ellipsis:!0,align:"center"},{title:"应用密钥",dataIndex:"clientSecret",ellipsis:!0,align:"center"},{title:"授权范围",dataIndex:"scope",ellipsis:!0,align:"center"},{title:"授权类型",dataIndex:"authorizedGrantTypes",ellipsis:!0,align:"center"},{title:"令牌秒数",dataIndex:"accessTokenValidity",align:"center"},{title:"回调地址",dataIndex:"webServerRedirectUri",ellipsis:!0,align:"center"},{title:"排序",dataIndex:"sort",align:"center"},{title:"操作",dataIndex:"operation",width:"15%",scopedSlots:{customRender:"operation"},align:"center"}]}},filters:{},created:function(){this.getList()},computed:{},watch:{},methods:{getList:function(){var e=this;this.loading=!0,Object(o["d"])(this.queryParam).then((function(t){e.list=t.data.records,e.total=t.data.total-0,e.loading=!1}))},handleQuery:function(){this.queryParam.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.queryParam={pageNum:1,pageSize:10,clientId:void 0,clientSecret:void 0},this.handleQuery()},onShowSizeChange:function(e,t){this.queryParam.pageSize=t,this.getList()},changeSize:function(e,t){this.queryParam.pageNum=e,this.queryParam.pageSize=t,this.getList()},toggleAdvanced:function(){this.advanced=!this.advanced},handleDelete:function(e){var t=this,a=e.id;this.$confirm({title:"确认删除所选中数据?",content:"当前选中认证编号为"+a+"的数据",onOk:function(){return Object(o["b"])(a).then((function(){t.getList(),t.$message.success("删除成功",3)}))},onCancel:function(){}})}}},c=l,d=a("2877"),u=Object(d["a"])(c,r,i,!1,null,null,null);t["default"]=u.exports},eddb:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return l}));var r=a("b775");function i(e){return Object(r["b"])({url:"/admin/sys/oauth/api/query",method:"post",data:e})}function o(e){return Object(r["b"])({url:"/admin/sys/oauth/api/detail?id="+e,method:"get"})}function s(e){return Object(r["b"])({url:"/admin/sys/oauth/api/insert",method:"post",data:e})}function n(e){return Object(r["b"])({url:"/admin/sys/oauth/api/update",method:"put",data:e})}function l(e){return Object(r["b"])({url:"/admin/sys/oauth/api/delete?id="+e,method:"delete"})}}}]);