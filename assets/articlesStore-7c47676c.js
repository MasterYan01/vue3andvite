import{T as o}from"./Toast-72aece92.js";import{j as i,k as r}from"./index-d3b74700.js";import{s as c}from"./statusStore-c748babb.js";const e=c(),{VITE_API:n,VITE_PATH:l}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/vue3andvite/",MODE:"production",DEV:!1,PROD:!0},u=i("articles",{state:()=>({articles:[]}),actions:{getArticles(){e.isLoading=!0,r.get(`${n}/api/${l}/articles`).then(t=>{e.isLoading=!1;const{articles:s}=t.data;this.articles=s}).catch(t=>{var a;e.isLoading=!1;const s=((a=t.data)==null?void 0:a.message)||"資料取得失敗，稍後在試";o.fire({title:`${s}`,icon:"error"})})}}});export{u as a};
