(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function b(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(e){if(e.ep)return;e.ep=!0;const n=b(e);fetch(e.href,n)}})();let s,c,t=0,o=0,p;const A=document.querySelector(".question"),h=document.querySelector(".btn-answer1"),w=document.querySelector(".btn-answer2"),q=document.querySelector(".btn-answer3"),d=document.querySelector(".points-container"),m=document.querySelector(".scored-points"),i=[{question:"What is a variable?",answerOptions:["A datatype","A function","A name of storage location"],correctAnswer:"A name of storage location"},{question:"What is an object?",answerOptions:["A combination of variables, functions and data structure","A combination of strings","A combination of functions"],correctAnswer:"A combination of variables, functions and data structure"},{question:"Which company developed JavaScript?",answerOptions:["Microsoft","Netscape","IBM"],correctAnswer:"Netscape"},{question:"Which one of these alternatives is not a JavaScript data type?",answerOptions:["Number","Add","Boolean"],correctAnswer:"Add"}];function v(){s=document.querySelector(".start-quiz-btn"),c=document.querySelector(".question-container"),p=document.querySelector(".new-game"),s.addEventListener("click",L),s.addEventListener("click",y),h.addEventListener("click",u),w.addEventListener("click",u),q.addEventListener("click",u),p.addEventListener("click",g),d.classList.add("points-container-hidden")}function g(){s.classList.remove("btn-start-quiz-hidden"),d.classList.add("points-container-hidden"),t=0,o=0,L()}function L(){s!==void 0&&s.classList.add("btn-start-quiz-hidden"),c.classList.add("quiz-container-visible")}console.log(o);function u(l){l.currentTarget.innerText==i[t-1].correctAnswer&&o++,console.log(o),y()}function y(){c.classList.remove("quiz-container-hidden"),t>=i.length&&S(),A.innerHTML=i[t].question,h.innerHTML=i[t].answerOptions[0],w.innerHTML=i[t].answerOptions[1],q.innerHTML=i[t].answerOptions[2],t+=1}function S(){c.classList.add("quiz-container-hidden"),console.log("showPoints"),d.classList.remove("points-container-hidden"),o>1|o==0?m.innerHTML=`You scored a total amount of ${o} points`:m.innerHTML=`You scored a total amount of ${o} point`}v();
