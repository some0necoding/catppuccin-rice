"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4436],{40394:(t,e,o)=>{o.d(e,{b:()=>m,D:()=>g});var i=o(77094),n=o.n(i),l=o(67294),r=o(24405),d=o(3779),a=o(82990),s=o(12534),c=o(75024),h=o(12508),u=o(84787),w=o(89728);function m(t){let{columnRenderInfo:e,theme:o,containerMarginTop:i}=t;return{container:{marginTop:i??17,tableLayout:"fixed",borderCollapse:"collapse",width:"100%",minWidth:e.reduce(((t,e)=>t+x(e.widthData)+v),0)},tableHeaderRow:{},paddingRowCell:{height:8},firstColumn:{}}}function g(t){let{columnRenderInfo:e,sortState:o,onSortStateChanged:i,showRowBorders:d,hideHeaderRowPadding:a,renderRowChild:s,rows:c,onRowClick:h,renderNoRowsComponent:w,styles:m,getStyleForRow:g,multiselect:C,onScrollBottom:f,allowHorizontalScroll:v,maxHeight:b,setStickyHeaderRow:x}=t;window.__c={n:"BaseTable"};const S=(0,r.yK)((t=>({horizontalScrollContainer:{position:"relative",width:"100%",display:"grid",overflow:"auto"},scrollableContainer:{maxHeight:b,position:"relative",display:"grid",overflowX:"auto",width:"100%"},table:v?{...m.container,minWidth:"100%",width:void 0}:m.container})),[m.container,v,b]),k=(0,l.useCallback)((t=>{var e;if(!o)return;const n=t.id===(null===(e=o.column)||void 0===e?void 0:e.id)&&!o.sortAscending;i&&i({sortAscending:n,column:t})}),[o,i]),R=l.createElement(l.Fragment,null,n()("table",{style:S.table},void 0,n()("tr",{style:m.tableHeaderRow},void 0,e.map(((t,e)=>n()(y,{index:e,column:t,sortState:o,handleSortableColumnClick:k,shouldShowSortIcon:0!==c.length,multiselect:C,allowHorizontalScroll:v,setStickyHeaderRow:x,style:0===e?m.firstColumn:void 0},`header_${t.id}`)))),!a&&n()("tr",{},void 0,e.map((t=>n()("td",{style:m.paddingRowCell},`padding_row_${t.id}`)))),c.map((t=>n()(p,{columns:e,onRowClick:h,rowChild:null==s?void 0:s(t),showRowBorders:d,row:t,getStyleForRow:g,multiselect:C,allowHorizontalScroll:v,firstColumnStyle:m.firstColumn},`${t.id}_row`))),!v&&f&&n()(u.Z,{loading:!1,loadMoreOffsetThreshold:100,onLoadMore:f})),0===c.length&&w());return v?n()("div",{style:S.horizontalScrollContainer},void 0,n()("div",{style:S.scrollableContainer},void 0,R,b&&f&&n()(u.Z,{loading:!1,loadMoreOffsetThreshold:100,onLoadMore:f})),!b&&f&&n()(u.Z,{loading:!1,loadMoreOffsetThreshold:100,onLoadMore:f})):n()("div",{style:{maxHeight:b}},void 0,R)}function y(t){let{column:e,index:o,sortState:i,handleSortableColumnClick:l,shouldShowSortIcon:s,multiselect:c,allowHorizontalScroll:u,setStickyHeaderRow:m,style:g}=t;window.__c={n:"HeaderCell"};const y=0===o,p=1===o,C=(0,r.yK)((t=>({th:{boxShadow:`\n\t\t\t\t\tinset 0 1px 0 ${t.tableDividerColor},\n\t\t\t\t\tinset 0 -1px 0 ${t.tableDividerColor}\n\t\t\t\t`,...m&&{position:"sticky",top:0,zIndex:3,background:t.modalBackground},...S(e),...u&&y&&{position:"sticky",zIndex:4,left:0,background:t.modalBackground,boxShadow:`\n\t\t\t\t\t\t\tinset -1px 0px 0px ${t.tableDividerColor},\n\t\t\t\t\t\t\tinset 0 1px 0 ${t.tableDividerColor},\n\t\t\t\t\t\t\tinset 0 -1px 0 ${t.tableDividerColor}\n\t\t\t\t\t\t`,paddingRight:15},...u&&p&&{paddingLeft:15},height:32,...g},innerDiv:{display:"flex",alignItems:"center",height:"100%",minWidth:x(e.widthData),maxWidth:e.widthData.maxWidth},text:{fontSize:a.Z.fontSize.UISmall.desktop,fontWeight:a.Z.fontWeight.regular,color:t.mediumTextColor,...a.Z.textOverflowStyle},sortButton:{padding:5,margin:-5},sortIcon:{color:t.mediumTextColor,width:12,height:12,marginLeft:4,fill:"currentColor"},multiselectCheckbox:{color:t.selectLightGray[300],marginRight:16,opacity:null!=c&&c.header.isDisabled?.5:1}})),[e,c,u,m,g,y,p]),f=n()("div",{style:C.text},void 0,e.headerTitle),v=e.sortable?n()(w.Z,{style:C.sortButton,onClick:()=>l(e)},void 0,f,(()=>{if(i&&s&&e.id===i.column.id)return d.Z.arrowDownSmall({...C.sortIcon,...i.sortAscending&&{transform:"rotate(180deg)"}})})()):f,b=void 0!==c&&0===o?n()(h.Z,{style:C.multiselectCheckbox,disabled:c.header.isDisabled,onClick:()=>c.header.onClick(),checked:c.header.isSelected,size:14}):null;return n()("th",{style:C.th},void 0,n()("div",{style:C.innerDiv},void 0,b,v))}function p(t){let{row:e,columns:o,onRowClick:i,rowChild:d,showRowBorders:a,getStyleForRow:s,allowHorizontalScroll:c,multiselect:h,firstColumnStyle:u}=t;const[w,m]=(0,l.useState)(!1),g=e.isClickable,y=(0,l.useCallback)((()=>m(!0)),[]),p=(0,l.useCallback)((()=>m(!1)),[]),v=(0,l.useCallback)((t=>{g&&void 0!==i&&f(t,(()=>i(e.id)))}),[g,i,e.id]),b=(0,r.yK)((t=>({row:{height:1,...g&&{cursor:"pointer"},...a&&{borderBottom:`1px solid ${t.tableDividerColor}`},...s&&s(e)}})),[g,a,s,e]);return l.createElement(l.Fragment,null,n()("tr",{onMouseLeave:p,onMouseEnter:y,style:b.row,onClick:v},void 0,o.map(((t,i)=>n()(C,{isRowHovered:w,isRowClickable:g,columnIndex:i,numColumns:o.length,data:e,column:t,multiselect:h,allowHorizontalScroll:c,cellStyle:0===i?u:void 0},`cell_${e.id}_${t.id}`)))),d&&n()("tr",{style:b.row},void 0,n()("td",{colSpan:o.length},void 0,d)))}function C(t){let{data:e,column:o,columnIndex:i,numColumns:l,isRowHovered:d,isRowClickable:s,multiselect:u,allowHorizontalScroll:w,cellStyle:m}=t;window.__c={n:"Cell"};const g=0===i,y=1===i,p=i===l-1,C=(0,r.yK)((t=>({td:{...S(o),height:"inherit",...g&&{borderRadius:(0,c.wK)({topLeft:3,bottomLeft:3})},...p&&{borderRadius:(0,c.wK)({topRight:3,bottomRight:3})},...w&&g&&{position:"sticky",zIndex:2,left:0,background:t.modalBackground,boxShadow:`inset -1px 0px 0px ${t.tableDividerColor}`,paddingRight:15},...w&&y&&{paddingLeft:15},...d&&s&&{background:t.buttonHoveredBackground},...m},innerDiv:{minWidth:x(o.widthData),maxWidth:o.widthData.maxWidth,fontSize:a.Z.fontSize.UIRegular.desktop,color:t.regularTextColor,minHeight:42,display:"flex",alignItems:"center",height:"100%"},multiselectCheckbox:{color:t.selectLightGray[300],marginRight:16,opacity:null!=u&&u.row.getDisabledState(e)?.5:1}})),[o,g,y,p,d,s,u,e,w,m]),v=Boolean(o.hasClickableContents),b=u&&g?n()(h.Z,{style:C.multiselectCheckbox,checked:u.row.getSelectedState(e),onClick:()=>u.row.onClick(e),disabled:u.row.getDisabledState(e),size:14}):null;return n()("td",{style:C.td},void 0,n()("div",{style:C.innerDiv,onClick:v?f:void 0},void 0,b,o.renderCell({...e,isRowHovered:d})))}const f=(t,e)=>{(0,s.ZP)({event:t,context:s.Af.BaseTableRowClick,callback:e})},v=10,b={paddingLeft:v/2,paddingRight:v/2};function x(t){return"minWidth"in t?t.minWidth:t.width}function S(t){let e;return e="width"in t.widthData?{width:t.widthData.width}:{width:`${t.widthData.widthPercent}%`,minWidth:t.widthData.minWidth},{...b,...e}}},53695:(t,e,o)=>{o.d(e,{N:()=>b,z:()=>S});var i=o(77094),n=o.n(i),l=o(97464),r=o.n(l),d=o(67294),a=o(81954),s=o(24405),c=o(3779),h=o(60709),u=o(61766),w=o(31945),m=o(78140),g=o(9342),y=o(89728),p=o(44532),C=o(72495),f=o(64369),v=o(69219);function b(t){let{title:e,items:o,disabled:i,hideDropdownIcon:l}=t;window.__c={n:"DropdownCell"};const c=(0,a.qz)(void 0,u.Z),y=(0,s.yK)((()=>({container:{minWidth:180}})),[]),f={key:"workspace-users-menu",render:t=>d.createElement(C.Z,t),items:o};return n()(w.Z,{popupType:p.kQ.Popup,style:y.container,buttonPopupStore:c,disabled:i,renderOrigin:t=>d.createElement(x,r()({title:e,hideDropdownIcon:l,disabled:i},t)),render:()=>n()(m.Z,{menuType:h.og.Popup,maxWidth:250},void 0,n()(g.Z,{type:g.i.Vertical,initialFocus:0,sections:[f],onAccept:()=>{c.setState({open:!1})}}))})}function x(t){let{title:e,hideDropdownIcon:o,disabled:i,...l}=t;window.__c={n:"ClickableCellBody"};const a=(0,s.yK)((t=>({container:{display:"inline-flex",flexDirection:"row",justifyContent:"center",alignItems:"center",maxWidth:"100%"},name:{fontSize:14,maxWidth:150},chevron:{width:10,height:10,marginLeft:4,color:t.lightIconColor}})),[]);return d.createElement(y.Z,r()({style:a.container,disabled:i},l),n()(f.Z,{showTooltipWhenTruncated:!0},void 0,e),o||i?null:c.Z.chevronDown(a.chevron))}function S(){window.__c={n:"LoadingDropdownCell"};const t=(0,s.yK)((()=>({title:{width:"50%"}})),[]);return n()(v.H,{titleStyles:t.title})}},69219:(t,e,o)=>{o.d(e,{i:()=>a,H:()=>s});var i=o(77094),n=o.n(i),l=(o(67294),o(24405)),r=o(36596),d=o(64369);function a(t){let{title:e,byline:o,icon:i,useThinTitle:r}=t;window.__c={n:"IconCell"};const a=i?20:0,s=(0,l.yK)((t=>({container:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",padding:"8px 0",width:"100%"},summaryContainer:{width:`calc(100% - ${a}px)`},iconContainer:{height:a,width:a,flexGrow:0,flexShrink:0,flexBasis:a,marginRight:12,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:6},name:{fontSize:14,fontWeight:r?400:500},byline:{fontSize:12,lineHeight:1.3,opacity:.5}})),[a,r]);return n()("div",{style:s.container},void 0,i?n()("div",{style:s.iconContainer},void 0,i):null,n()("div",{style:s.summaryContainer},void 0,n()(d.Z,{style:s.name,showTooltipWhenTruncated:!0},void 0,e),o?n()(d.Z,{style:s.byline},void 0,o):null))}function s(t){let{titleStyles:e,includeByline:o,bylineStyles:i,includeIcon:d,iconStyles:a}=t;window.__c={n:"LoadingIconCell"};const s=(0,l.yK)((()=>({container:{height:53,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",padding:"8px 0",width:"100%",gap:8},icon:{borderRadius:4,height:24,width:24,marginLeft:-2,...a},textContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",width:"calc(100% - 32px)",gap:4},title:{borderRadius:4,height:14,width:"80%",...e},byline:{borderRadius:4,height:12,width:"60%",...i}})),[e,i,a]);return n()("div",{style:s.container},void 0,d?n()(r.Z,{style:s.icon}):null,n()("div",{style:s.textContainer},void 0,n()(r.Z,{style:s.title}),o?n()(r.Z,{style:s.byline}):null))}}}]);