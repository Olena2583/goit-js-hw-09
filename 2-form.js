import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},s="feedback-form-state",a=document.getElementById("feedback-form"),o=a.elements.email,l=a.elements.message;function n(t){e[t.target.name]=t.target.value,localStorage.setItem(s,JSON.stringify(e))}function r(){const t=localStorage.getItem(s);if(t){const m=JSON.parse(t);e.email=m.email||"",e.message=m.message||"",o.value=e.email,l.value=e.message}}function i(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),a.reset(),e.email="",e.message="",localStorage.removeItem(s)}a.addEventListener("input",n);a.addEventListener("submit",i);r();
//# sourceMappingURL=2-form.js.map
