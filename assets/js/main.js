function openMenu() {
    document.querySelector('.menu').style.left = '0';
    document.querySelector('.overlay').style.width = '100%';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.menu-icon').style.display = 'none';
  }
  
  function closeMenu() {
    document.querySelector('.menu').style.left = '-250px';
    document.querySelector('.overlay').style.width = '0';
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.menu-icon').style.display = 'block';
  }
//  for scroll view fixed
window.addEventListener('scroll', function() {
  var menuHeader = document.getElementById('menuHeader');
  // Corrected the method name from 'getElementByClassName' to 'getElementsByClassName'
  var menuLink =  document.getElementsByClassName('menu-link-scroll');
  var scrollHeight = window.scrollY;
  
  // Change position of menu header when scroll height is 500 or greater
  if (scrollHeight >= 500) {
    menuHeader.classList.add('navbar-dark'); 
    menuLink.classList.add('menu-link-dark'); 
  } else {
    // Removed 'add' and replaced it with 'remove' for class removal
    menuLink.classList.add('menu-link-white'); 
  }
  
});






