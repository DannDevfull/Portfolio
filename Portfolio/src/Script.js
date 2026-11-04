const seletor = document.querySelector('.btn');

seletor.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    let classname = document.body.classname;
});