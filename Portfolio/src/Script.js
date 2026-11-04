const seletor = document.querySelector('.btn-theme');
const icons = document.querySelector('i')



seletor.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
  
    if(document.body.classList.contains('dark-theme')){
        icons.classList = 'fa-solid fa-sun'
    } else{        

        icons.classList = 'fa-solid fa-moon'
    }

});