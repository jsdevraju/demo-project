window.addEventListener('scroll', function(){
    const sideBar = document.querySelector('.main_content');
    sideBar.classList.toggle('sticky', window.scrollY > 1150);
})