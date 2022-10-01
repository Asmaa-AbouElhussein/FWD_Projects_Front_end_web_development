/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
  //////////create section
 class nav{
   
 }
  let number = 3;
  const addNewSection = () => {
    number++;
     const sectionT = document.createElement('section'); 
     sectionT.setAttribute('id', `section${number}`);
     sectionT.setAttribute('data-nav', `section ${number}`);
     const divT = document.createElement('div');
     
     const h2T = document.createElement('h2');
     const node = document.createTextNode(`section ${number}`);
     h2T.appendChild(node);
     const p1T = document.createElement('p');
     const node1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
     p1T.appendChild(node1);
     const p2T = document.createElement('p');
     const node3 = document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");
     p2T.appendChild(node3);
     divT.appendChild(h2T);
     divT.appendChild(p1T);
     divT.appendChild(p2T);
     divT.setAttribute('class', 'landing__container');
     sectionT.appendChild(divT);
    document.querySelector('main').appendChild(sectionT);

    
  };
  let navSections1;
// build the nav
const navMenu = document.querySelector('#navbar__list');
  function navList() {
    
     
      navMenu.innerHTML ="";
      navSections1 = document.querySelectorAll('section');
     for(const navSection of navSections1){
          const liT = document.createElement('li');
          const aT = document.createElement('a');
          aT.innerText = navSection.getAttribute('data-nav');
          aT.setAttribute('class', 'menu__link');
          aT.setAttribute("href", `#${navSection.id}`);
          liT.appendChild(aT);
         
          document.querySelector('ul').appendChild(liT);
      }
      
      
  };

 
//////////////smooth scroll
const navlinks = document.querySelectorAll(".menu__link");

// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

for(let i=0; i<navlinks.length; i++) {
  navlinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

  smoothScroll(event); // Call the "smoothScroll" function

}

// Smooth-Scrolling

// APPROACH #1 - window.scrollTo() (window.scroll())
 function smoothScroll(event) {
  event.preventDefault();
   const targetId = event.currentTarget.getAttribute("href");
   console.log(targetId)
   window.scrollTo({
    top:document.querySelector(targetId).offsetTop,
     behavior: "smooth"
   });
 }

 ////////////using Element.getBoundingClientRect()
 window.addEventListener('scroll',function sectionActive() {
  for(const navSection of navSections1){
    if(navSection.getBoundingClientRect().top <= 200 && navSection.getBoundingClientRect().bottom >= 200)
    {
      addAction(navSection);
      
    }
    else{
      removeAction(navSection);
    }
  }
 });
 function addAction(section) {
   section.classList.add("your-active-class");

 }
 function removeAction(section) {
  section.classList.remove("your-active-class");

}

navList();


////Add new section 

document.getElementById("add-new-section").addEventListener("click", () => {
  addNewSection();
    navList();
  
  });
// 
var mybutton=document.getElementById('to-top');

window.onscroll =function() {
 'use strict';
 if(window.pageYOffset >= 400)
 {
   mybutton.style.display='block';
 }else{
   mybutton.style.display='none';
 }
};
mybutton.onclick=function(){
  'use strict';
  window.scrollTo(0,0);
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


