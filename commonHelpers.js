import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l}from"./assets/vendor-2b44ac2e.js";const c=document.querySelector("button[data-start]"),m=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),f=document.querySelector("span[data-seconds]"),y=new Date;let d;const S=({days:t,hours:n,minutes:o,seconds:e})=>{m.textContent=String(t).padStart(2,"0"),h.textContent=String(n).padStart(2,"0"),p.textContent=String(o).padStart(2,"0"),f.textContent=String(e).padStart(2,"0")},D=()=>{const t=setInterval(()=>{let o=d-new Date().getTime();const{days:e,hours:s,minutes:a,seconds:r}=T(o);S({days:e,hours:s,minutes:a,seconds:r}),e===0&&s===0&&a===0&&r===0&&clearInterval(t)},1e3)};c.addEventListener("click",()=>{D(),c.disabled=!0});const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(d=t[0].getTime(),d-y.getTime()<=0){alert("Please choose a date in the future");return}}};l("input#datetime-picker",g);function T(t){const a=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:r,minutes:i,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map