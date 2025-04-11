(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const a=document.getElementById("country-list"),s=document.getElementById("country-info");async function l(){const t=await(await fetch("https://restcountries.com/v3.1/all")).json();u(t)}function u(r){a.innerHTML=r.sort((t,o)=>t.name.common.localeCompare(o.name.common)).map(t=>`
        <button class="country-btn" data-name="${t.name.common}">
          ${t.name.common}
        </button>
      `).join(""),document.querySelectorAll(".country-btn").forEach(t=>t.addEventListener("click",()=>{m(t.dataset.name)}))}async function m(r){const t=await fetch(`https://restcountries.com/v3.1/name/${r}`),[o]=await t.json();s.innerHTML=`
    <h2>${o.name.common}</h2>
    <img src="${o.flags.svg}" alt="Flag of ${o.name.common}" width="150" />
    <p><strong>Столица:</strong> ${o.capital?o.capital[0]:"Нет данных"}</p>
    <p><strong>Регион:</strong> ${o.region}</p>
    <p><strong>Население:</strong> ${o.population.toLocaleString()}</p>
  `,s.style.display="block",s.scrollIntoView({behavior:"smooth",block:"end"})}l();
