import C from "./config.js";
export const API=C.API_BASE_URL.replace(/\/+$/,"");
export async function api(p){const r=await fetch(API+p);const d=await r.json();if(!r.ok||d.success===false)throw Error(d.error||"API error");return d}
export const esc=s=>String(s??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[x]));
export const hist=()=>JSON.parse(localStorage.getItem("af_hist")||"[]");
export function addHist(x){let a=hist().filter(y=>y.episodeId!==x.episodeId);a.unshift({...x,watchedAt:Date.now()});localStorage.setItem("af_hist",JSON.stringify(a.slice(0,100)))}
export const favs=()=>JSON.parse(localStorage.getItem("af_fav")||"[]");
export function fav(x){let a=favs(),i=a.findIndex(y=>y.id===x.id);if(i>=0){a.splice(i,1);localStorage.setItem("af_fav",JSON.stringify(a));return false}a.unshift(x);localStorage.setItem("af_fav",JSON.stringify(a));return true}
export function card(x){let id=x.seriesId||x.movieId||x.episodeId||x.id,href=x.movieId?`watch.html?movieId=${encodeURIComponent(x.movieId)}`:x.episodeId?`watch.html?episodeId=${encodeURIComponent(x.episodeId)}`:`anime.html?id=${encodeURIComponent(x.seriesId||id)}`;return `<article class=card><a href="${href}"><img src="${esc(x.image||"assets/placeholder.svg")}"><b>${esc(x.title||"Unknown")}</b><small>${esc(x.year||x.type||"Anime")}</small></a></article>`}
export function cards(a,e){e.innerHTML=(a||[]).map(card).join("")||"<div class=empty>No results found.</div>"}
export function nav(){document.querySelector("[data-q]")?.addEventListener("keydown",e=>{if(e.key==="Enter")location.href="search.html?q="+encodeURIComponent(e.target.value)})}
