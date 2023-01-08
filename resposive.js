


let menubtn = document.getElementById('menu-btn');
let divtomove = document.getElementById('menuDiv')
menubtn.addEventListener('click' , function() {
    
    divtomove.style.display = 'block'
    divtomove.style.animationName = 'slider'
    divtomove.style.animationDuration = '.500s'
    
})


window.addEventListener('click', function(e){
    if(e.target === menubtn){
        divtomove.style.display = 'block'
    }
    else{
        // divtomove.style.animationName='backslider'
        // divtomove.style.animationDuration='.500s'
        divtomove.style.display='none'
    }
})