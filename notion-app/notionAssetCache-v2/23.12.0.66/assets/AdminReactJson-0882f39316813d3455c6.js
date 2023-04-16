"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3e3],{90799:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(97464),s=n.n(a),i=n(77094),r=n.n(i),o=n(96486),l=n.n(o),d=n(67294),p=n(47063),u=n(83355),c=n(27006),b=(n(90468),n(29369)),m=(n(64684),n(74487));const h=m.object({required:{id:m.string(),isBot:m.boolean()},optional:{email:m.string(),parent_table:m.string()}}),g=m.object({required:{parentId:m.string(),parentTable:m.string()},optional:{}}),v=m.object({required:{id:m.string(),table:m.string(),title:m.string()},optional:{}}),y=m.object({required:{id:m.string(),table:m.literal("space")},optional:{name:m.string(),plan_type:m.string()}}),f=m.object({required:{time:m.string(),type:m.string(),authors:m.array(h)},optional:{pageId:m.string(),blockId:m.string()}}),k=m.object({required:{type:m.literals(...c.UF)},optional:{role:m.literals(...c.Av),id:m.string(),name:m.string()}}),_=m.object({required:{before:k,after:k},optional:{}}),x=m.object({required:{id:m.string(),time:m.string(),type:m.string(),authors:m.array(h),edits:m.array(f)},optional:{page:v,addedPermissions:m.array(k),removedPermissions:m.array(k),changedPermissions:m.array(_)}}),w=m.object({required:{id:m.string(),name:m.string(),isDefault:m.boolean(),accessLevel:m.literals(...b.bx)},optional:{}});var P=n(3779),S=n(80984),C=n(97880),T=n(36054),$=n(43132),B=n(12318),R=n(73063),j=n(22346);const q={scheme:"dirtysea",author:"Kahlil (Kal) Hodgson",base00:"unset",base01:"#d0dad0",base02:"#d0d0d0",base03:"#707070",base04:"#202020",base05:"#000000",base06:"#f8f8f8",base07:"#c4d9c4",base08:"#840000",base09:"#006565",base0A:"#755B00",base0B:"#730073",base0C:"#755B00",base0D:"#007300",base0E:"#000090",base0F:"#755B00"},O={scheme:"OneDark",author:"Lalit Magant (http://github.com/tilal6991)",base00:"unset",base01:"#353b45",base02:"#3e4451",base03:"#545862",base04:"#565c64",base05:"#abb2bf",base06:"#b6bdca",base07:"#c8ccd4",base08:"#e06c75",base09:"#d19a66",base0A:"#e5c07b",base0B:"#98c379",base0C:"#56b6c2",base0D:"#61afef",base0E:"#c678dd",base0F:"#be5046"};function A(e){let{table:t,id:n}=e;window.__c={n:"LinkToRenderer"};let a=t;return"user"===a&&(a="notion_user"),S._O.includes(a)?r()("a",{style:{cursor:"pointer",textDecoration:"none",paddingLeft:6},href:`/__admin/${a}/${n}`},void 0,"🔗"):null}const I=e=>{let{data:t}=e;return(0,T.P9)(k,t)?{expanded:!1,element:r()("span",{},void 0,r()("span",{style:{fontSize:16}},void 0,L({type:t.type,name:t.name,role:t.role})))}:null};function L(e){let t,{type:n,name:a,role:s,endRole:i}=e;switch(n){case"deleted_permission":t="Permanently deleted";break;case"restricted_permission":t="Restricted";break;case"user_permission":t="User";break;case"bot_permission":t="Bot";break;case"group_permission":t="Group";break;case"team_permission":case"explicit_team_permission":t="Teamspace";break;case"team_owner_permission":case"explicit_team_owner_permission":t="Teamspace Owners";break;case"explicit_team_guest_permission":t="Teamspace Guests";break;case"space_permission":t="Space";break;case"public_permission":t="Public";break;default:(0,C.t1)(n)}const o=Boolean(a),l=`[${t}]`;let d;s&&i?d=`${s} -> ${i}`:s&&(d=s);const p=Boolean(d);return r()("span",{},void 0,o&&p?`${l}: ${a} - ${d}`:o?`${l}: ${a}`:p?`${l}: ${d}`:l)}const D=[e=>{let{data:t}=e;return(0,T.P9)(g,t)?{expanded:!1,element:r()("span",{},void 0,t.parentTable," ",t.parentId,r()(A,{table:t.parentTable,id:t.parentId}))}:null},e=>{let{data:t}=e;return(0,T.P9)(y,t)?{expanded:!1,element:r()("span",{},void 0,t.name||t.id,r()(A,{table:"space",id:t.id}))}:null},e=>{let{data:t}=e;return(0,T.P9)(h,t)?{expanded:!1,element:r()("span",{},void 0,t.isBot?`${t.id} (bot)`:t.email,r()(A,{table:t.parent_table||"notion_user",id:t.id}))}:null},e=>{let{data:t}=e;return(0,T.P9)(v,t)?{expanded:!1,element:r()("span",{},void 0,t.title,r()(A,{table:t.table||"block",id:t.id}))}:null},e=>{let{data:t}=e;return(0,T.P9)(w,t)?{expanded:!1,element:r()("span",{},void 0,t.name,r()(A,{table:b.e0,id:t.id}))}:null},e=>{var t;let{data:n}=e;if(!(0,T.P9)(x,n))return null;const a=n.authors&&0!==n.authors.length?1===n.authors.length?n.authors[0].email:`${n.authors.length} users`:"an unknown user",s=(null===(t=n.page)||void 0===t?void 0:t.title)??"Unknown page";return{expanded:!1,element:r()("span",{},void 0,r()("span",{style:{fontSize:16}},void 0,n.time,": ",r()("b",{},void 0,n.type)," on page ",r()("b",{},void 0,s)," by"," ",r()("b",{},void 0,a)),r()(A,{table:"activity",id:n.id}))}},e=>{let{data:t}=e;if(!(0,T.P9)(f,t))return null;const n=t.authors&&0!==t.authors.length?1===t.authors.length?t.authors[0].email:`${t.authors.length} users`:"an unknown user";return{expanded:!1,element:r()("span",{},void 0,r()("span",{style:{fontSize:16}},void 0,t.time,": ",r()("b",{},void 0,t.type)," by ",r()("b",{},void 0,n)))}},e=>{let{data:t}=e;return(0,T.P9)(_,t)?{expanded:!1,element:r()("span",{},void 0,r()("span",{style:{fontSize:16}},void 0,L({type:t.before.type,name:t.before.name,role:t.before.role,endRole:t.after.role})))}:null},I,e=>{let{data:t,keyPath:n}=e;return(0,T.P9)(m.array(k),t)&&1===t.length?I({data:t[0],keyPath:n}):null},e=>{let{data:t}=e;return Array.isArray(t)?t.some((e=>l().isObject(e)))||t.length>10?null:0===t.length?{element:r()("span",{},void 0,"[]"),expanded:!1}:{element:r()("span",{},void 0,t.join(", ")),expanded:!1}:null},e=>{let{data:t,keyPath:n}=e;if("billing"===n[0]){const e=t;return e.isSubscribed?{element:r()("span",{},void 0,"isSubscribed=true ",e.planType),expanded:!0}:{element:r()("span",{},void 0,"isSubscribed=false"),expanded:!1}}return null}];class Z extends u.Z{constructor(){super(...arguments),this.storeTypes={modalOpen:B.default.of(!1)},this.customCollapsedRenderers=[...this.props.customCollapsedRenderers||[],...D]}onClickHandler(e){$.Pm(this.environment,e)}getTheme(){return"dark"===this.environment.ThemeStore.state.mode?O:q}renderComponent(){var e=this;const{data:t,defaultCollapsed:n,showCopyButton:a,showModalButton:i,jsonTreeRef:o,maxLinkValueLength:l}=this.props,u=a||i;return r()("div",{style:{position:"relative",width:"100%",backgroundColor:this.getTheme().base00}},void 0,r()("div",{style:{marginRight:u?30:void 0}},void 0,d.createElement(p.L,{ref:o,data:t,hideRoot:!0,invertTheme:!1,theme:{extend:this.getTheme(),tree:{marginTop:0,marginBottom:0,marginLeft:0,paddingTop:0,userSelect:"auto"}},getItemString:(e,t,n,a,s)=>{for(const i of this.customCollapsedRenderers){const e=i({data:t,keyPath:s});if(e)return e.element}return r()("span",{},void 0,n," ",a)},shouldExpandNode:(e,t,a)=>{for(const s of this.customCollapsedRenderers){const a=s({data:t,keyPath:e});if(a)return a.expanded??!n}return!n},valueRenderer:function(t,n){for(var a=arguments.length,s=new Array(a>2?a-2:0),i=2;i<a;i++)s[i-2]=arguments[i];function o(){const e=s[0].toString();var t;if("id"===e)return r()(A,{id:n,table:null===(t=s[1])||void 0===t?void 0:t.toString()});if(e.endsWith("_id")||e.endsWith("Id")){const t=e.replace("_id","").replace("Id","");return r()(A,{id:n,table:t})}return null}const d=o();return null!=n&&n.toString().startsWith("http")?r()("a",{style:{cursor:"pointer"},href:n},void 0,l&&t.length>l?`${t.substring(0,l/2)}[...]${t.substring(t.length-l/2)}`:n):r()("span",{},void 0,r()("span",{onClick:()=>e.onClickHandler(n)},void 0,void 0!==n?n.toString():"null")," ",d)}})),a&&r()(R.Z,{caption:"small"===a?void 0:"Copy JSON",style:{position:"absolute",top:2,right:2,padding:2,width:"small"===a?14:void 0,height:"small"===a?14:void 0},iconStyle:{width:"small"===a?10:20,height:"small"===a?10:20},icon:P.Z.copy,onClick:e=>{$.Pm(this.environment,t),e.stopPropagation()}}),r()(j.Z,{open:this.stores.modalOpen.state,innerStyle:{maxHeight:"90vh",maxWidth:"90vw",height:"90vh",width:"90vw",overflow:"scroll"},onDismiss:()=>{this.stores.modalOpen.setState(!1)},render:()=>d.createElement(Z,s()({},this.props,{defaultCollapsed:!1,showModalButton:!1}))}),i&&r()(R.Z,{style:{position:"absolute",top:2,right:16,padding:2,height:14,width:14},iconStyle:{width:10,height:10},icon:P.Z.openAsPage,onClick:()=>{this.stores.modalOpen.setState(!0)}}))}}Z.displayName="AdminReactJson"}}]);