(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function h(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(e){if(e.ep)return;e.ep=!0;const n=h(e);fetch(e.href,n)}})();let i,c,o=0,t=0,p;const q=document.querySelector(".question"),y=document.querySelector(".label-for-question1"),L=document.querySelector(".label-for-question2"),A=document.querySelector(".label-for-question3"),S=document.querySelector(".btn-answer1"),v=document.querySelector(".btn-answer2"),g=document.querySelector(".btn-answer3"),d=document.querySelector(".points-container"),m=document.querySelector(".scored-points"),O=document.querySelector(".answer1"),M=document.querySelector(".answer2"),T=document.querySelector(".answer3"),w=document.querySelector(".answer-label");w.checked=!0;const s=[{question:"What is a variable?",answerOptions:["A datatype","A function","A name of storage location"],correctAnswer:"A name of storage location"},{question:"What is an object?",answerOptions:["A combination of variables, functions and data structure","A combination of strings","A combination of functions"],correctAnswer:"A combination of variables, functions and data structure"},{question:"Which company developed JavaScript?",answerOptions:["Microsoft","Netscape","IBM"],correctAnswer:"Netscape"},{question:"Which one of these alternatives is not a JavaScript data type?",answerOptions:["Number","Add","Boolean"],correctAnswer:"Add"},{question:"Inside which HTML element do you put the JavaScript?",answerOptions:["Script","Scripts","JavaScript"],correctAnswer:"Script"},{question:"What is the correct JavaScript syntax to add content to an HTML element?",answerOptions:["Variable.add","Variable.innerHTML","Variable.HTMLelement"],correctAnswer:"Variable.innerHTML"},{question:"How do you call a JavaScript function?",answerOptions:["name()","function name()","call(name())"],correctAnswer:"name()"}];s.sort((a,r)=>.5-Math.random());function b(){i=document.querySelector(".start-quiz-btn"),c=document.querySelector(".question-container"),p=document.querySelector(".new-game"),i.addEventListener("click",H),i.addEventListener("click",F),y.addEventListener("click",u),L.addEventListener("click",u),A.addEventListener("click",u),p.addEventListener("click",k),d.classList.add("points-container-hidden")}function k(){i.classList.remove("btn-start-quiz-hidden"),d.classList.add("points-container-hidden"),o=0,t=0,b()}function H(){i!==void 0&&i.classList.add("btn-start-quiz-hidden"),c.classList.add("quiz-container-visible")}console.log(t);function u(a){const r=a.currentTarget.innerText;console.log(r),r!==s[o-1].correctAnswer?t-=1:t+=1,S.checked=!1,v.checked=!1,g.checked=!1,console.log(t)}function F(){c.classList.remove("quiz-container-hidden"),w.checked=!1,o>=s.length&&z(),q.innerHTML=s[o].question,O.innerHTML=s[o].answerOptions[0],M.innerHTML=s[o].answerOptions[1],T.innerHTML=s[o].answerOptions[2],o+=1}function z(){c.classList.add("quiz-container-hidden"),console.log("showPoints"),d.classList.remove("points-container-hidden"),t>1|t==0?m.innerHTML=`You scored a total amount of ${t} points`:m.innerHTML=`You scored a total amount of ${t} point`}b();
