import{u as f,r as c,j as n,I as p,S as h,c as m,B as l,L as g,a as d,b as u,W as y,F as b,R as x,d as v}from"./vendor.db22e75d.js";const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};I();const O="https://www.welcomekit.co/api/v1/embed",L=`${O}?organization_reference=Pg4eV6k`,C=(t,e)=>fetch(t,e).then(o=>o.json()),N=()=>C(L).then(t=>t.jobs),S=(t,e)=>!e||e===""?t:t.filter(o=>o.name.includes(e)),T=()=>{const{loading:t,value:e=[]}=f(N),[o,i]=c.exports.useState(""),r=c.exports.useMemo(()=>S(e,o),[o,t]);return{query:o,setQuery:i,jobs:r,loading:t}},w=({id:t,onChange:e,ariaLabel:o,placeholder:i,value:r})=>{const s=c.exports.useCallback(a=>e(a.target.value),[e]);return n("div",{role:"searchbox",children:n(p,{id:t,"aria-label":o,placeholder:i,icon:n(h,{}),isClearable:!0,onChange:s,value:r})})},P=m(),j=({loading:t,children:e})=>n(l,{display:"flex",paddingTop:"xl",paddingBottom:"xl",children:t?n(l,{flex:1,display:"flex",role:"status",alignItems:"center",justifyContent:"center",children:n(g,{size:"md",color:"primary.500"})}):e}),A=({name:t,type:e,office:o})=>d(u,{as:"ul",role:"section",children:[n("div",{children:t}),n("div",{children:e}),n("div",{children:o})]}),J=({jobs:t})=>n(u,{as:"ul",dataTestId:"job-list",children:t.map((e,o)=>n(A,{id:e.id,"aria-rowindex":o,name:e.name,type:e.contract_type.en,office:e.office.name},e.id))}),M=({children:t})=>n(l,{display:"grid",gridTemplateRows:"min-content 1fr",padding:"xxl",h:"100vh",children:t}),E=()=>{const{query:t,setQuery:e,jobs:o,loading:i}=T();return n(y,{theme:P,children:d(M,{children:[n(b,{label:"Your dream job ?",children:n(w,{ariaLabel:"search for your dream job",onChange:e,value:t,placeholder:"Operations & Strategy, Communications Manager..."})}),n(j,{loading:i,children:n(J,{jobs:o})})]})})};x.render(n(v.StrictMode,{children:n(E,{})}),document.getElementById("root"));