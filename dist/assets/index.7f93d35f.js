var z=Object.defineProperty;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var A=(e,a,l)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,N=(e,a)=>{for(var l in a||(a={}))O.call(a,l)&&A(e,l,a[l]);if(k)for(var l of k(a))P.call(a,l)&&A(e,l,a[l]);return e};import{a as J,u as I,T as M,g as H,d as K}from"./table.0953f2c7.js";import{d as q,L as Q,k as v,_ as U,r as u,o as c,x as _,w as r,b as o,c as C,v as S,F as L,f as y,t as D,j as B,C as R,a as w,D as W,G as X,E as Y}from"./index.2364200c.js";import{P as Z}from"./Plus.8a114269.js";import{S as x}from"./Search.396ee65f.js";import{D as ee}from"./Delete.ecdaf231.js";const G=[{value:1,label:"\u8FD0\u52A8"},{value:2,label:"\u5065\u8EAB"},{value:3,label:"\u8DD1\u9177"},{value:4,label:"\u8857\u821E"}],j=[{value:1,label:"\u4ECA\u5929"},{value:2,label:"\u660E\u5929"},{value:3,label:"\u540E\u5929"}],ae=q({components:{Layer:Q},props:{layer:{type:Object,default:()=>({show:!1,title:"",showButton:!0})}},setup(e,a){const l=v(null),f=v(null);let d=v({name:""});const h={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}],number:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u5B57",trigger:"blur"}],choose:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}],radio:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}]};s();function s(){e.layer.row&&(d.value=JSON.parse(JSON.stringify(e.layer.row)))}return{form:d,rules:h,layerDom:f,ruleForm:l,selectData:G,radioData:j}},methods:{submit(){this.ruleForm&&this.ruleForm.validate(e=>{if(e){let a=this.form;this.layer.row?this.updateForm(a):this.addForm(a)}else return!1})},addForm(e){J(e).then(a=>{this.$message({type:"success",message:"\u65B0\u589E\u6210\u529F"}),this.$emit("getTableData",!0),this.layerDom&&this.layerDom.close()})},updateForm(e){I(e).then(a=>{this.$message({type:"success",message:"\u7F16\u8F91\u6210\u529F"}),this.$emit("getTableData",!1),this.layerDom&&this.layerDom.close()})}}});function le(e,a,l,f,d,h){const s=u("el-input"),i=u("el-form-item"),F=u("el-option"),p=u("el-select"),$=u("el-radio"),m=u("el-radio-group"),g=u("el-form"),n=u("Layer",!0);return c(),_(n,{layer:e.layer,onConfirm:e.submit,ref:"layerDom"},{default:r(()=>[o(g,{model:e.form,rules:e.rules,ref:"ruleForm","label-width":"120px",style:{"margin-right":"30px"}},{default:r(()=>[o(i,{label:"\u540D\u79F0\uFF1A",prop:"name"},{default:r(()=>[o(s,{modelValue:e.form.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.form.name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(i,{label:"\u6570\u5B57\uFF1A",prop:"number"},{default:r(()=>[o(s,{modelValue:e.form.number,"onUpdate:modelValue":a[1]||(a[1]=t=>e.form.number=t),oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570"},null,8,["modelValue"])]),_:1}),o(i,{label:"\u9009\u62E9\u5668\uFF1A",prop:"select"},{default:r(()=>[o(p,{modelValue:e.form.choose,"onUpdate:modelValue":a[2]||(a[2]=t=>e.form.choose=t),placeholder:"\u8BF7\u9009\u62E9",clearable:""},{default:r(()=>[(c(!0),C(L,null,S(e.selectData,t=>(c(),_(F,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(i,{label:"\u5355\u9009\u6846\uFF1A",prop:"radio"},{default:r(()=>[o(m,{modelValue:e.form.radio,"onUpdate:modelValue":a[3]||(a[3]=t=>e.form.radio=t)},{default:r(()=>[(c(!0),C(L,null,S(e.radioData,t=>(c(),_($,{key:t.value,label:t.value},{default:r(()=>[y(D(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["layer","onConfirm"])}var oe=U(ae,[["render",le]]);const te=q({name:"crudTable",components:{Table:M,Layer:oe},setup(){const e=B({input:""}),a=B({show:!1,title:"\u65B0\u589E",showButton:!0}),l=B({index:1,size:20,total:0}),f=v(!0),d=v([]),h=v([]),s=m=>{h.value=m},i=m=>{f.value=!0,m&&(l.index=1);let g=N({page:l.index,pageSize:l.size},e);H(g).then(n=>{let t=n.data.list;Array.isArray(t)&&t.forEach(b=>{const T=G.find(E=>E.value===b.choose);T?b.chooseName=T.label:b.chooseName=b.choose;const V=j.find(E=>E.value===b.radio);V?b.radioName=V.label:b.radio}),d.value=n.data.list,l.total=Number(n.data.pager.total)}).catch(n=>{d.value=[],l.index=1,l.total=0}).finally(()=>{f.value=!1})},F=m=>{let g={ids:m.map(n=>n.id).join(",")};K(g).then(n=>{Y({type:"success",message:"\u5220\u9664\u6210\u529F"}),i(d.value.length===1)})},p=()=>{a.title="\u65B0\u589E\u6570\u636E",a.show=!0,delete a.row},$=m=>{a.title="\u7F16\u8F91\u6570\u636E",a.row=m,a.show=!0};return i(!0),{Plus:Z,Search:x,Delete:ee,query:e,tableData:d,chooseData:h,loading:f,page:l,layer:a,handleSelectionChange:s,handleAdd:p,handleEdit:$,handleDel:F,getTableData:i}}}),ne={class:"layout-container"},re={class:"layout-container-form flex space-between"},ue={class:"layout-container-form-handle"},se={class:"layout-container-form-search"},ie={class:"layout-container-table"};function me(e,a,l,f,d,h){const s=u("el-button"),i=u("el-popconfirm"),F=u("el-input"),p=u("el-table-column"),$=u("Table"),m=u("Layer"),g=R("loading");return c(),C("div",ne,[w("div",re,[w("div",ue,[o(s,{type:"primary",icon:e.Plus,onClick:e.handleAdd},{default:r(()=>[y(D(e.$t("message.common.add")),1)]),_:1},8,["icon","onClick"]),o(i,{title:e.$t("message.common.delTip"),onConfirm:a[0]||(a[0]=n=>e.handleDel(e.chooseData))},{reference:r(()=>[o(s,{type:"danger",icon:e.Delete,disabled:e.chooseData.length===0},{default:r(()=>[y(D(e.$t("message.common.delBat")),1)]),_:1},8,["icon","disabled"])]),_:1},8,["title"])]),w("div",se,[o(F,{modelValue:e.query.input,"onUpdate:modelValue":a[1]||(a[1]=n=>e.query.input=n),placeholder:e.$t("message.common.searchTip"),onChange:a[2]||(a[2]=n=>e.getTableData(!0))},null,8,["modelValue","placeholder"]),o(s,{type:"primary",icon:e.Search,class:"search-btn",onClick:a[3]||(a[3]=n=>e.getTableData(!0))},{default:r(()=>[y(D(e.$t("message.common.search")),1)]),_:1},8,["icon"])])]),w("div",ie,[W((c(),_($,{ref:"table",page:e.page,"onUpdate:page":a[4]||(a[4]=n=>e.page=n),showIndex:!0,showSelection:!0,data:e.tableData,onGetTableData:e.getTableData,onSelectionChange:e.handleSelectionChange},{default:r(()=>[o(p,{prop:"name",label:"\u540D\u79F0",align:"center"}),o(p,{prop:"number",label:"\u6570\u5B57",align:"center"}),o(p,{prop:"chooseName",label:"\u9009\u62E9\u5668",align:"center"}),o(p,{prop:"radioName",label:"\u5355\u9009\u6846",align:"center"}),o(p,{label:e.$t("message.common.handle"),align:"center",fixed:"right",width:"200"},{default:r(n=>[o(s,{onClick:t=>e.handleEdit(n.row)},{default:r(()=>[y(D(e.$t("message.common.update")),1)]),_:2},1032,["onClick"]),o(i,{title:e.$t("message.common.delTip"),onConfirm:t=>e.handleDel([n.row])},{reference:r(()=>[o(s,{type:"danger"},{default:r(()=>[y(D(e.$t("message.common.del")),1)]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1},8,["page","data","onGetTableData","onSelectionChange"])),[[g,e.loading]]),e.layer.show?(c(),_(m,{key:0,layer:e.layer,onGetTableData:e.getTableData},null,8,["layer","onGetTableData"])):X("",!0)])])}var he=U(te,[["render",me]]);export{he as default};
