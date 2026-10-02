const bg=document.querySelector('.hero-bg');let clean=false;document.querySelector('#menu').addEventListener('click',()=>{clean=!clean;bg.style.opacity=clean?'.12':'.45';});
