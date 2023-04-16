"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8721],{88828:(e,t,i)=>{i.r(t),i.d(t,{AssistantLabelerBar:()=>M});var o=i(97464),n=i.n(o),l=i(77094),r=i.n(l),a=i(96486),s=i.n(a),d=i(67294),c=i(480),u=i(81954),p=i(24405),v=i(94568),m=i(42875),h=i(59054),g=i(21202),y=i(70203),b=i(82990),f=i(54642),w=i(89484),k=i(98104),C=i(99417),S=i(80863),Z=i(3815),x=i(24666),I=i(52275),B=i(88359),K=i(1743),X=i(74194),F=i(84076),V=i(68785),_=i(63296),z=i(44532),E=i(14871);function M(){window.__c={n:"AssistantLabelerBar"};const e=(0,c.O7)(),t=(0,p.yK)((e=>({wrap:{padding:8,backgroundColor:e.contentBackground,width:400},samplingPicker:{display:"flex",alignItems:"center",marginBottom:8,gap:4},error:{fontSize:14,color:e.accentColors.red[600],maxHeight:150,overflow:"scroll"},observation:{fontSize:14,maxHeight:150,overflow:"scroll"},tooltip:{width:500,whiteSpace:"pre-wrap",fontFamily:b.Z.baseFontFamily.mono},input:{marginTop:5,marginBottom:5,fontFamily:b.Z.baseFontFamily.githubMono,fontSize:12},inputInner:{height:100}})),[]),i=(0,u.VK)((()=>(0,C.Gw)()),[]),o=(0,u.VK)((()=>S.Hl.state),[]),n=(0,u.VK)((()=>{const e=S.oX.state;return Boolean(e&&e.sampledSteps.length>0)}),[]),l=i||n,a=(0,u.VK)((()=>{const e=S.oX.state;return Boolean(e&&(e.sampling||e.evaluating))}),[]),s=(0,u.VK)((()=>{const e=S.oX.state;return null==e?void 0:e.previewingStepIndex}),[]),v=(0,u.VK)((()=>{const e=S.oX.state,t=null==e?void 0:e.previewingStepIndex;var i;if("number"==typeof t)return null==e||null===(i=e.sampledSteps)||void 0===i?void 0:i[t]}),[],{useDeepEqual:!0}),m=(0,u.VK)((()=>{const e=S.oX.state;return(null==e?void 0:e.previewingStepObservations)||[]}),[],{useDeepEqual:!0}),h=m.filter((e=>"error"===e.observationType)),g=m.filter((e=>"search"===e.observationType)),y=(0,d.useCallback)((()=>{w.cz({store:S.oX})}),[]),f=(0,d.useCallback)((async t=>{const i=S.oX.state;if(!v||!i)return;const o={...v,value:t.target.value};(0,S.zZ)({store:S.oX,step:o}),await w.mA({environment:e,store:S.oX,step:o,commit:!1,isStreaming:!1,preventSelection:!0})}),[e,v]),Z=(0,d.useCallback)((async t=>{const i=S.oX.state;i&&await w.mA({environment:e,store:S.oX,step:i.sampledSteps[t],commit:!1,isStreaming:!1})}),[e]),I=(0,d.useCallback)((async()=>{await w.vR({environment:e,store:S.oX})}),[e]),B=(0,d.useCallback)((async()=>{await w.f6({environment:e,store:S.oX})}),[e]),F=(0,u.VK)((()=>({top:20,left:0,right:0,bottom:0,width:e.WindowSizeStore.state.width,height:0})),[e],{useDeepEqual:!0}),[E,M]=(0,d.useState)(!1),T=(0,d.useCallback)((()=>{x.default.hasSelection()&&k.ZH(e),M(!0)}),[e,M]),A=(0,d.useCallback)((()=>{M(!1)}),[M]);return r()(z.ZP,{popupType:z.kQ.Popup,open:l,originRect:F,originGap:6,disableMouseCapture:!0,render:()=>r()(K.Z,{capture:E},void 0,r()("div",{style:t.wrap},void 0,i&&r()(R,{}),n&&d.createElement(d.Fragment,null,r()("div",{style:t.samplingPicker},void 0,r()(_.Z,{hovered:void 0===s||void 0,onClick:y},void 0,"Original"),r()(_.Z,{hovered:0===s||void 0,onClick:()=>Z(0)},void 0,"A"),r()(_.Z,{hovered:1===s||void 0,onClick:()=>Z(1)},void 0,"B"),r()("div",{style:{flexGrow:1}}),a&&r()(V.Z,{style:{marginRight:4}}),r()(_.Z,{disabled:void 0===s||a||i&&!o,disabledFeedback:!0,onClick:B},void 0,"Retry"),r()(_.Z,{disabled:void 0===s||a||i&&!o,disabledFeedback:!0,onClick:I,isBlue:!0},void 0,"Accept")),v&&r()(X.Z,{style:t.input,inputStyle:t.inputInner,value:v.value,onChange:f,onFocus:T,onBlur:A,textarea:!0,spellCheck:!1}),h.length>0&&!a&&r()("div",{style:t.error},void 0,h.map((e=>e.value)).join("\n")),g.length>0&&!a&&r()("div",{style:t.observation},void 0,"Results: ",g.map((e=>e.value)).join("\n")))))})}function R(e){var t;window.__c={n:"TaskPicker"};const i=(0,c.O7)(),o=(0,u.VK)((()=>S.Hl.state),[]),[l]=(0,h.r5)((async()=>{const e="results",t={type:"reducer",filter:{operator:"and",filters:[{property:"ouFf",filter:{operator:"status_is",value:{type:"is_group",value:"In progress"}}}]},sort:[],userTimeZone:(0,m.r)(),searchQuery:void 0,reducers:{[e]:{type:"results",limit:100}}},o=await f.queryCollection(i,{source:{type:"collection",id:"f704a995-6417-457a-8038-ca9e1cb2c65f",spaceId:v.vj},collectionView:{id:"1dee420b-aa96-4e48-8eba-c2a0613e179e",spaceId:v.vj},loader:t},void 0,{src:"queryCollectionAction"});if("failed"===o.type)return;const n=o.data.result.reducerResults.results;if(!n||"results"!==n.type)return;const{blockIds:l}=n;let r=s().compact(l.map((e=>new Z.G(i,{table:g.iU,id:e}).getValue()))).map((e=>{var t,i,o;return{id:e.id,name:(0,y.Q)(null==e||null===(t=e.properties)||void 0===t?void 0:t.title),url:(0,y.Q)(null==e||null===(i=e.properties)||void 0===i?void 0:i["}v_K"]),type:(0,y.Q)(null==e||null===(o=e.properties)||void 0===o?void 0:o.pdfW)}}));return r=s().sortBy(r,(e=>e.name.toLowerCase())),r}),[i]),a=(0,d.useCallback)((e=>{var t;const i=null===(t=l.value)||void 0===t?void 0:t.find((t=>t.id===e));i&&S.Hl.set(i)}),[l]),b={menuTitle:"",items:(null===(t=l.value)||void 0===t?void 0:t.map((e=>e.id)))??[],getKey:e=>e,selectedItem:null==o?void 0:o.id,onSelect:a,renderItem:e=>{var t;const i=null===(t=l.value)||void 0===t?void 0:t.find((t=>t.id===e.value));return d.createElement(I.Z,n()({},e,{title:null==i?void 0:i.name}))},renderOrigin:e=>d.createElement(B.Z,n()({focused:!1,title:"",right:(null==o?void 0:o.name)||r()("span",{style:{color:"red"}},void 0,"Please select a task")},e)),width:300},w=(0,p.yK)((e=>({wrap:{marginBottom:8},inner:{display:"flex",alignItems:"center",marginBottom:4,gap:4},label:{fontSize:14,flexShrink:0},link:{fontSize:14,textDecoration:"underline"}})),[]);return r()("div",{style:w.wrap},void 0,r()("div",{style:w.inner},void 0,r()("div",{style:w.label},void 0,"Current task:"),d.createElement(E.Z,b)),o&&r()(F.Z,{style:w.link,href:o.url,external:!0},void 0,"Instructions for task"))}},88359:(e,t,i)=>{i.d(t,{Z:()=>m});var o=i(97464),n=i.n(o),l=i(77094),r=i.n(l),a=i(67294),s=i(83355),d=i(3779),c=i(64921),u=i(28992),p=i(64369);class v extends s.Z{renderComponent(){const{device:e}=this.environment;return r()(c.Z,{mobileFeedback:e.isMobile,onClick:this.props.onClick,hovered:this.props.focused,disabled:this.props.disabled,style:{width:"100%",...!e.isMobile&&{width:"calc(100% - 8px)",marginLeft:4,marginRight:4,borderRadius:3},...this.props.buttonStyle}},void 0,a.createElement(u.Z,n()({},this.props,{dontShrinkTitle:!0,right:this.props.right&&r()("div",{style:{display:"flex",whiteSpace:"nowrap"}},void 0,r()(p.Z,{isSecondaryColor:!0,isMobile:e.isMobile},void 0,this.props.right),!e.isMobile&&r()("div",{style:{visibility:this.props.disabled?"hidden":void 0,flexShrink:0}},void 0,d.Z.chevronDown({width:10,marginLeft:4,fill:this.theme.lightIconColor})))})))}}v.displayName="DropdownMenuItem";const m=v}}]);