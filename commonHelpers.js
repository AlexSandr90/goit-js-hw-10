import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";const f=t=>{const a=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:c,seconds:u}},d=document.querySelector("button[data-start]"),p=document.querySelector("input#datetime-picker"),h=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]"),F=new Date;let i;const D=({days:t,hours:o,minutes:n,seconds:e})=>{h.textContent=String(t).padStart(2,"0"),y.textContent=String(o).padStart(2,"0"),S.textContent=String(n).padStart(2,"0"),g.textContent=String(e).padStart(2,"0")},T=()=>{const t=setInterval(()=>{let n=i-new Date().getTime();const{days:e,hours:r,minutes:a,seconds:s}=f(n);D({days:e,hours:r,minutes:a,seconds:s}),e===0&&r===0&&a===0&&s===0&&clearInterval(t)},1e3)};d.addEventListener("click",()=>{T(),d.disabled=!0,p.disabled=!0});const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(i=t[0].getTime(),i-F.getTime()<=0){m.error({message:"Please choose a date in the future",position:"topRight",color:"#FF2E2E",messageColor:"#ffffff",backgroundColor:"#FF2E2E",timeout:5e3,close:!1});return}d.disabled=!1}};l("input#datetime-picker",C);
//# sourceMappingURL=commonHelpers.js.map