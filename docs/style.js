function navHamburgerClick() {
  let x = document.querySelector('nav');

  if(x.className === 'topnav-dropdown') {
    x.className = 'topnav-inline';
  } else {
    x.className = 'topnav-dropdown';
  }
  
}

function navMenuClick(menu_id) {
  let menuContent = document.querySelector(`#${menu_id}`);
  let disp = menuContent.style.display.toLowerCase();

  if( disp === "none" | disp === "") {
    menuContent.style.display = "block";
  } else {
      menuContent.style.display = "none";
  }
}

function navMenuClose(menu_id) {
  let menuContent = document.querySelector(`#${menu_id}`);
  menuContent.style.display = "none";

  // let parentClass = menuContent.parentNode.parentElement.className;
  // if( parentClass !== "topnav-dropdown") {
  //   menuContent.style.display = "none";
  // }

}


