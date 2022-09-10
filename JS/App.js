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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Add the active class to the element
const addActiveClass = (element) => {
    element.classList.add('active');
}

//Remove active class

const removeActiveClass = (element) => {
    element.classList.remove('active')
}

//Handle click on nav

const handleClick = (event) => {
    const element = document.getElementById(event.target.dataset.nav)
    console.log(element, 'element')
    element.scrollIntoView({behavior: "smooth"})
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
        const navItem = document.createElement('li');
        navItem.innerHTML = item.getAttribute('data-nav-link');
        navItem.className = 'list-item';
        navItem.id = item.getAttribute('data-nav-link')
        navItem.dataset.nav = (item.getAttribute('id'))
        navItem.onclick = handleClick;
        navItemList.appendChild(navItem);
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
            addActiveClass(selectedSection)
        } else {
            removeActiveClass(selectedSection)
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
