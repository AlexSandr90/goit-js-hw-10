import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as l}from"./assets/vendor-77e16229.js";const u=document.querySelector(".form"),o=document.querySelector('input[name="delay"]'),r=document.querySelector('input[value="fulfilled"]'),c=document.querySelector('input[value="rejected"]'),n=()=>Promise.reject(),d=()=>Promise.resolve(),s=(e,t)=>{const i=setTimeout(()=>{t==="fulfilled"&&d().then(()=>{l.success({message:`Fulfilled promise in ${e}ms`,position:"topRight",timeout:5e3}),console.log("Fulfilled!!!")}).finally(()=>clearTimeout(i)),t==="rejected"&&n().catch(()=>{l.error({message:`Rejected promise in ${e}ms`,position:"topRight",timeout:5e3}),console.log("rejected!!!!")}).finally(()=>clearTimeout(i))},e)},m=e=>{e.preventDefault();const t=e.target;console.log({fulfilledRadio:r.checked,rejectedRadio:c.checked,delay:Number(o.value)}),r.checked&&s(Number(o.value),"fulfilled"),c.checked&&s(Number(o.value),"rejected"),t.reset()};u.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
