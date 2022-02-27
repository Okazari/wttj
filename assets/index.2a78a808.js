import{u as C,r as d,f as y,j as r,I as J,S as O,c as w,B as l,L as B,C as m,a as c,b as u,T as h,d as I,W as A,F as b,e as L,A as T,R as j,g as S}from"./vendor.dadb0183.js";const _=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}};_();const N="https://www.welcomekit.co/api/v1/embed",P=`${N}?organization_reference=Pg4eV6k`,R=(t,e)=>fetch(t,e).then(o=>o.json()),k=()=>R(P).then(t=>t.jobs),M=(t,e)=>!e||e===""?t:t.filter(o=>o.name.toLowerCase().includes(e.toLowerCase())),f=[{value:"department.name",label:"Department name"},{value:"office.name",label:"Office name"},{value:"contract_type.en",label:"Job type"}],D=()=>{const{loading:t,value:e=[]}=C(k),[o,s]=d.exports.useState(f[0]),n=d.exports.useCallback(p=>{s(f.find(v=>v.value===p))},[f]),[a,i]=d.exports.useState(""),x=d.exports.useMemo(()=>{const p=M(e,a);return o?y.groupBy(o.value,p):p},[a,t,o,y.groupBy]);return{query:a,setQuery:i,jobs:x,loading:t,groupedJobsBy:o,groupJobsBy:n,groupJobsByOptions:f}},E=t=>t.websites_urls.find(e=>e.website_reference==="wttj_fr").url,F=({id:t,onChange:e,ariaLabel:o,placeholder:s,value:n})=>{const a=d.exports.useCallback(i=>e(i.target.value),[e]);return r("div",{role:"searchbox",children:r(J,{id:t,"aria-label":o,placeholder:s,icon:r(O,{}),isClearable:!0,onChange:a,value:n})})},G=w(),U=({loading:t,children:e})=>r(l,{display:"flex",paddingTop:"xl",paddingBottom:"xl",children:t?r(l,{flex:1,display:"flex",role:"status",alignItems:"center",justifyContent:"center",children:r(B,{size:"md",color:"primary.500"})}):e}),z=({name:t,type:e,office:o,applyUrl:s})=>r("div",{"data-aos":"fade-up","data-aos-duration":"200","data-aos-offset":"0",children:r(m,{role:"section",children:r(m.Body,{children:c(u,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[c(u,{children:[r(h,{variant:"h4",as:"span",children:t}),r(h,{variant:"body1",as:"span",children:e}),r(h,{variant:"body1",as:"span",children:o})]}),r(I,{as:"a",href:s,target:"_blank",children:"Apply"})]})})})}),g=({jobs:t})=>r(u,{dataTestId:"job-list",flex:1,children:t.map((e,o)=>r(z,{id:e.id,"aria-rowindex":o,name:e.name,type:e.contract_type.en,office:e.office.name,applyUrl:E(e)},e.id))}),Q=({jobsGroups:t})=>r(u,{dataTestId:"grouped-job-list",flex:1,children:Object.entries(t).map(([e,o])=>c(u,{role:"section",dataTestId:"job-group",children:[r(h,{variant:"h2",children:e}),r(g,{jobs:o})]},e))}),W=({children:t})=>r(l,{display:"grid",gridTemplateRows:"min-content 1fr",gridTemplateColumns:"1fr",padding:"xxl",h:"100vh",children:t}),q=()=>{const{query:t,setQuery:e,jobs:o,loading:s,groupedJobsBy:n,groupJobsBy:a,groupJobsByOptions:i}=D();return r(A,{theme:G,children:c(W,{children:[c(l,{display:"flex",children:[r(l,{flex:2,marginRight:"sm",children:r(b,{label:"Your dream job ?",children:r(F,{ariaLabel:"search for your dream job",onChange:e,value:t,placeholder:"Operations & Strategy, Communications Manager..."})})}),r(l,{flex:1,children:r(b,{label:"Group results by",children:r(L,{name:"group-by",id:"group-by",placeholder:"None",value:n,onChange:a,options:i,isClearable:!0})})})]}),c(U,{loading:s,children:[Array.isArray(o)&&r(g,{jobs:o}),!Array.isArray(o)&&r(Q,{jobsGroups:o})]})]})})};T.init();j.render(r(S.StrictMode,{children:r(q,{})}),document.getElementById("root"));
