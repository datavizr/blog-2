function navHamburgerClick() {
  var x = document.querySelector('nav');

  if(x.className === 'topnav-dropdown') {
    x.className = 'topnav-inline';
  } else {
    x.className = 'topnav-dropdown';
  }
  
}

let dropdownBtn = document.querySelector('.nav-menu-button');
let menuContent = document.querySelector('.nav-menu-content');

dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})