"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9259],{31263:(e,t,i)=>{i.r(t),i.d(t,{AppsSetup:()=>A});var o=i(77094),r=i.n(o),n=i(96486),s=i.n(n),a=i(67294),l=i(13991),d=i(480),c=i(81954),p=i(24405),u=i(66673),g=i(21202),h=i(82990),f=i(5366),m=i(54885),v=i(51127),w=i(95489),S=i(28020),b=i(93959),y=i(54258),x=i(472),k=i(79315),C=i(12768),B=i(82136),I=i(3815),P=i(42922),W=i(68785),Z=i(68705),M=i(3779),H=i(64921);function U(e){window.__c={n:"AppSelector"};const{appTemplate:t,isSelected:i}=e,[o,n]=(0,a.useState)(!1),s=(0,c.VK)((()=>(0,b.SP)(t.uri)),[t.uri]),l=(0,p.yK)((e=>({container:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},appButton:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:62,height:62,backgroundColor:e.whiteButtonBackground,boxShadow:e.lightBoxShadow,borderRadius:12,background:"dark"===e.mode?e.accentColors.gray[200]:e.whiteButtonBackground},selectedWrapper:{boxShadow:e.outlineBlueInputBoxShadow,background:"dark"===e.mode?e.accentColors.gray[200]:e.buttonBackground},logo:{width:32,height:32},logoSelected:{filter:"invert(41%) sepia(77%) saturate(2017%) hue-rotate(191deg) brightness(93%) contrast(89%)"},badge:{width:26,height:26,display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:e.invoiceGreen,borderRadius:50,position:"absolute",top:-9,right:-9,border:`2px solid ${e.sidebarBackground}`,webkitBackdropFilter:"blur(12px)",opacity:1,transform:"scale(1)",transition:"opacity 0.2s ease, transform 0.2s ease, background-color 0.1s linear"},selectBadge:{backgroundColor:e.invoiceGreen},selectedBadge:{backgroundColor:e.blueButtonBackground},deselectBadge:{backgroundColor:e.redBadgeBackground},appName:{marginTop:8,fontSize:14,fontWeight:500,textAlign:"center"},buttonBadgeIcon:{width:16,height:16,fill:"white"}})),[]),d=(0,a.useCallback)((()=>{i?e.onDeSelect(t.uri):e.onSelect(t.uri),n(!1)}),[t.uri,i,e]);return r()("div",{style:l.container,onMouseEnter:()=>{n(!0),e.onHover()},onMouseLeave:()=>{n(!1),e.onUnhover()}},void 0,r()(H.Z,{style:{...l.appButton,...i?l.selectedWrapper:{}},onClick:d,ignoreLocalHoverState:!0},void 0,r()("img",{style:{...l.logo,...i?l.logoSelected:{}},src:s?s.logo:t.icon})),r()(H.Z,{style:{...l.badge,...i?o?l.deselectBadge:l.selectedBadge:o?l.selectBadge:{opacity:0,transform:"scale(0.4)"}},onClick:d,ignoreLocalHoverState:!0},void 0,i?o?M.Z.closeSmall({width:16,height:16,fill:"white"}):M.Z.thinCheck({width:15,height:15,fill:"white"}):M.Z.plusThick({width:16,height:16,fill:"white"})),r()("div",{style:l.appName},void 0,s?s.name:t.shortName))}const _=s().compact(b.pP.map((e=>{var t;return null===(t=(0,b.SP)(e))||void 0===t?void 0:t.presets.find((t=>t.uri===e))})));function F(e){window.__c={n:"AppPreview"};const t=(0,d.O7)(),i=(0,c.VK)((()=>{const e=(0,S.ui)(t);return{left:e,right:e,bottom:Z.Z.paddingBottom(t),coverHeight:Z.Z.defaultPageCoverHeight(t)}}),[t]),o=a.useMemo((()=>{const e={};return _.forEach((i=>{var o;const r=i.uri.startsWith("notion://wiki")?(0,y.L)(i):null===(o=i.previews)||void 0===o?void 0:o.find((e=>"previewRootId"in e));r&&(e[i.uri]=new I.G(t,{id:r.previewRootId,table:g.iU,spaceId:r.spaceId}))})),e}),[t]),n=e.presetUri.startsWith("notion://wiki"),s=o[e.presetUri];return s?r()("div",{style:{minWidth:900,height:"100%",position:"relative",paddingTop:n?0:"10%"}},void 0,r()(Z.Z,{store:s,loadingContainerStore:void 0,context:B.S.InAppTemplatePreview,titleFontSize:n?void 0:28,paddingBottom:i.bottom,paddingLeft:i.left,paddingRight:i.right,pageCoverHeight:i.coverHeight,disabled:!0},s.id),r()("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:1,zIndex:999,cursor:"pointer"}})):null}function T(e){window.__c={n:"Carousel"};const t=(0,a.useCallback)(((e,t)=>(e%t+t)%t),[]),i=(0,u.Kt)(e.forceIndex,200,((e,t)=>e===t)),[o,n]=(0,a.useState)(0);(0,a.useEffect)((()=>{if(void 0===i)return;const r=t(-o,e.items.length),s=t(i-r,e.items.length);n((e=>e-s))}),[o,n,i,t,e.items.length]),(0,a.useEffect)((()=>{const t=setInterval((()=>{void 0===i&&n((e=>e-1))}),e.rotationDelayMs??2500);return()=>{clearInterval(t)}}),[n,i,e.rotationDelayMs]);const l=(0,p.yK)((e=>({item:{position:"absolute",top:0,left:0,bottom:0,right:0,background:"white",borderRadius:"8px 0 0 8px",border:"1px solid rgba(0, 0, 0, 0.05)",boxShadow:"0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",overflow:"hidden",transition:"transform 0.5s ease-in-out, opacity 0.5s ease-out"}})),[]),d=e.items.length,c=t(-o,d),g=e.items[t(c-1,d)].node,h=e.items[c].node,f=[...s().times(d,(e=>({key:`before${e}`,node:null}))),...e.items,...s().times(d,(e=>({key:`after${e}`,node:null})))],m=f.map(((i,n)=>{let{key:s}=i;const a=t(n+o,f.length),c=a>=d&&a<2*d,p=`translateX(${(a-d)*(e.offset??12)}px) translateY(${(a-d)*(e.offset??16-1.5*(a-d))}px)`,u=c?1-.15*(a-d):0;return r()("div",{style:{...l.item,zIndex:f.length-a,transform:p,opacity:u}},s,a===d?h:a===d-1?g:void 0)}));return r()("div",{style:{position:"relative",...e.style}},void 0,m)}function A(e){const[t]=(0,c.AF)(C.default),{currentUserRootStore:i,currentSpaceViewStore:o,currentSpaceStore:n,currentUserSettingsStore:u}=(0,c.VK)((()=>{const{currentUserRootStore:e,currentSpaceViewStore:t,currentSpaceStore:i,currentUserSettingsStore:o}=k.default.state;return{currentUserRootStore:e,currentSpaceViewStore:t,currentSpaceStore:i,currentUserSettingsStore:o}}),[]),g=(0,d.O7)(),[S,b]=(0,a.useState)(!1),[y,B]=(0,a.useState)(void 0),Z=(0,p.yK)((e=>({container:{backgroundColor:e.sidebarBackground,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",borderLeft:`1px solid ${e.lightDividerColor}`},left:{maxWidth:375,minWidth:320,maxHeight:"100%",flex:1,display:"flex",flexDirection:"column",alignItems:"stretch",marginLeft:"10%",marginRight:"10%",padding:"42px 16px",overflowX:"visible",overflowY:"auto"},right:{flex:1,height:"70%",overflow:"visible"},header:{position:"relative",textAlign:"left",paddingBottom:42},title:{fontWeight:h.Z.fontWeight.semibold,fontSize:28,lineHeight:1.2,color:e.regularTextColor,fontFamily:h.Z.getHeaderFontFamily({locale:l.SP}),marginBottom:16,width:"90%"},subtitle:{fontSize:18,lineHeight:1.45,paddingTop:2,color:e.mediumTextColor,fontWeight:h.Z.fontWeight.regular},apps:{marginBottom:48,display:"inline-flex",flexWrap:"wrap",justifyContent:"space-between"},previewImage:{width:"100%",height:"100%"}})),[]),M=(0,c.VK)((()=>g.device.isPhone),[g]);if(!o||!i||!u)return null;if(!t.isOnboarding||"workspace_setup"!==t.stage)return null;const H=e=>{const i=s().uniq([...t.selectedPresets,e]),o=s().sortBy(i,(e=>_.findIndex((t=>t.uri===e))));C.default.setState({...t,selectedPresets:o}),m.X3(g,{action:"select",preset:e})},A=e=>{const i=t.selectedPresets.filter((t=>t!==e));C.default.setState({...t,selectedPresets:i}),m.X3(g,{action:"deselect",preset:e})},D=t.selectedPresets.length>0?t.selectedPresets:_.map((e=>e.uri)),R=D.findIndex((e=>(null==y?void 0:y.uri)===e)),L=r()(T,{style:{width:"100%",height:"100%"},items:D.map((e=>({key:e,node:r()(F,{presetUri:e})}))),forceIndex:R>-1?R:void 0});return a.createElement(a.Fragment,null,r()("div",{style:Z.container},void 0,r()("div",{style:Z.left},void 0,r()("div",{style:{display:"flex",alignItems:"stretch",flexDirection:"column"}},void 0,r()("div",{style:Z.header},void 0,r()("div",{style:Z.title},void 0,r()(f.FormattedMessage,{id:"apps.workspacesetup.header.title",defaultMessage:"Get started with Notion",description:"Header shown during onboarding to Get Started with Notion"})),r()("div",{style:Z.subtitle},void 0,r()("div",{},void 0,r()(f.FormattedMessage,{id:"apps.workspacesetup.header.description",defaultMessage:"Add templates to your workspace, and customize them in a few simple steps."})))),r()("div",{style:Z.apps},void 0,_.map((e=>r()(U,{appTemplate:e,isSelected:t.selectedPresets.includes(e.uri),onSelect:H,onDeSelect:A,onHover:()=>B(e),onUnhover:()=>B(void 0)})))),t.selectedPresets.length>0?r()(P.Z,{isLarge:!0,style:{height:40},onClick:async()=>{var e;if(!n||!o)return;b(!0);const i=x.default.createMetric("continue_with_apps"),r=null===(e=o.getTeamsStores()[0])||void 0===e?void 0:e.id,s=I.zX.createChildStore(n,{table:"team",id:r,spaceId:n.id}),a=o.getCreatedOnboardingTemplates()?[]:await v.Xt({environment:g,presets:t.selectedPresets,spaceStore:n,spaceViewStore:o,teamStore:s});a.length>0&&(t.redirectData={type:"redirect_page",pageId:a[0].id,spaceId:n.id},C.default.setState(t)),await w.lp(g,t),x.default.emit(g,i,{appsSelected:t.selectedPresets})},disabled:S},void 0,S?r()(W.Z,{isWhite:!0}):r()(f.FormattedMessage,{id:"apps.workspacesetup.button.continueWithChosenApps",defaultMessage:"{num, plural, one {Continue with 1 template} other {Continue with {num} templates}}",values:{num:t.selectedPresets.length}})):r()(P.Z,{isLarge:!0,style:{height:40},onClick:async()=>{b(!0),await w.lp(g,t)},disabled:S},void 0,S?r()(W.Z,{isWhite:!0}):r()(f.FormattedMessage,{id:"apps.workspacesetup.button.continueWithoutChoosingApps",defaultMessage:"I'll add templates later"})))),!M&&r()("div",{style:Z.right},void 0,L)))}}}]);