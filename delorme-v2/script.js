// Header scroll + hamburger
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if(hamburger && mobileNav){
  hamburger.addEventListener('click', ()=>{
    const open = hamburger.classList.toggle('open');
    mobileNav.style.display = open ? 'flex' : 'none';
  });
  document.addEventListener('click', e=>{
    if(!hamburger.contains(e.target) && !mobileNav.contains(e.target)){
      hamburger.classList.remove('open');
      mobileNav.style.display = 'none';
    }
  });
}
// Copyright year
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
// Fade-up on scroll
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; obs.unobserve(e.target); } });
},{threshold:.08});
document.querySelectorAll('.fade').forEach(el=>{
  el.style.opacity='0'; el.style.transform='translateY(22px)';
  el.style.transition='opacity .65s ease, transform .65s ease';
  obs.observe(el);
});
