var about_me = document.getElementById('show-about');
var skill = document.getElementById('show-skill');
var about = document.getElementById('about-tab');
var skills = document.getElementById('skill-tab');

about_me.addEventListener('click',function(){
    about.style.display="block"
    skills.style.display="none"
    about_me.style.background="white"
    about_me.style.border="1px solid black"
    skill.style.background="#090e14f0"
})


skill.addEventListener('click',function(){
    about.style.display="none"
   skills.style.display="block"
   skill.style.background="white"
   skill.style.border="1px solid black"
   about_me.style.background="#090e14f0"
})