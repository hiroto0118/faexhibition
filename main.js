{let e=document.querySelector(".openbtn1"),t=document.getElementById("navi");e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active")})}{let l=document.querySelectorAll(".fade-in");window.addEventListener("scroll",()=>{for(let e=0;e<l.length;e++){let t=l[e].getBoundingClientRect().top,s=window.pageYOffset||document.documentElement.scrollTop,n=t+s,i=window.innerHeight;s>n-i+150&&l[e].classList.add("scroll-in")}})}window.addEventListener("scroll",()=>{document.getElementById("header");let e=window.pageYOffset;e>520?header.classList.add("show"):header.classList.remove("show")});{let s=document.getElementById("gallery"),n=document.getElementById("access"),i=document.getElementById("slide-btn");window.addEventListener("scroll",()=>{let e=s.getBoundingClientRect().top,t=window.pageYOffset||document.documentElement.scrollTop,l=e+t,o=window.innerHeight,c=n.getBoundingClientRect().top,d=c+t;window.innerWidth>900&&(t>l-o&&t<d-o?i.classList.add("show"):i.classList.remove("show"))})}{let o=document.getElementById("access"),c=document.getElementById("contact"),d=document.querySelector(".bg");window.addEventListener("scroll",()=>{let e=o.getBoundingClientRect().top,t=window.pageYOffset||document.documentElement.scrollTop,l=e+t,s=window.innerHeight,n=c.getBoundingClientRect().top,i=n+t;t>l-s&&t<i-s?d.classList.add("show"):d.classList.remove("show")})}{let r=document.querySelector(".item");window.addEventListener("scroll",()=>{let e=window.scrollTop();window.innerWidth>900?r.css({width:100/3+e/10+"%"}):r.css({width:100-e/10+"%"})})}