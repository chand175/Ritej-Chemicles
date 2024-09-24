




const menu = document.getElementsByClassName('menu-list')[0]; 


const menuIcon = document.getElementsByClassName('menu')[0]; 
const close = document.getElementById('closeBtn')[0];

if (menu && menuIcon) {
 
    menuIcon.addEventListener('click', () => {
     
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';   
        } else {
            menu.style.display = 'flex'; 
        }
    });
} 












