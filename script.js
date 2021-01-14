document.getElementById("icon-menu").addEventListener('click', function() {
        //document.getElementById("nav-menu").getAttribute('class');
        //console.log();        
        document.getElementById("nav-menu").classList.toggle('none');                
        toggleimg();
})
let toggle = false;
function toggleimg() {  
    if (toggle === true) {
        document.getElementById('icon-menu').src  = 'loopstudios-landing-page-main/images/icon-hamburger.svg';
       
    } else {
       document.getElementById('icon-menu').src = 'loopstudios-landing-page-main/images/icon-close.svg';    
       
    }
    toggle = !toggle; 
}
