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

// Get the list of all the sections
const sectionList = document.querySelectorAll('section');
console.log(sectionList);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Add the active class to the element
const addActiveClass = (element) => {
    element.classList.add('active-class');
}








/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
    const navItemList = document.getElementById('navbar__list');
    for (item of sectionList) {
        const linkItem=document.createElement('a');
        linkItem.href=`#${item.getAttribute('id')}`;
        linkItem.className = 'link-item';
        const navItem = document.createElement('li');
        navItem.textContent = item.getAttribute('data-nav-link');
        navItem.className = 'list-item';
        linkItem.id = item.getAttribute('data-nav-link')
        linkItem.appendChild(navItem);
        navItemList.appendChild(linkItem);
    }
}

buildNav()


// Add class 'active' to section when near top of viewport

const options = {
    threshold: 0.5
}

const obCallback=(payload)=> {
    payload.forEach(item => {
        const selectedSection = document.getElementById(item.target.dataset.navLink)
        if (item.isIntersecting) {
            selectedSection.classList.add('active')
        } else {
            selectedSection.classList.remove('active')
        }
    })
}

const ob = new IntersectionObserver(obCallback, options)
for (section of sectionList) {
    ob.observe(document.getElementById(section.id))
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
