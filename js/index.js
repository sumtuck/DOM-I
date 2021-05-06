const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Start NAV

// 1) document.querySelectorAll access all the "nav a" properties.
// 2) textContent gives access to the text inside the Nav object and siteConent changes the live document to the specified property. 
// ** need to refresh on nav a

let navItems = document.querySelectorAll('nav a');
navItems[0].textContent = (siteContent ["nav"]["nav-item-1"])
navItems[1].textContent = (siteContent ["nav"]["nav-item-2"])
navItems[2].textContent = (siteContent ["nav"]["nav-item-3"])
navItems[3].textContent = (siteContent ["nav"]["nav-item-4"])
navItems[4].textContent = (siteContent ["nav"]["nav-item-5"])
navItems[5].textContent = (siteContent ["nav"]["nav-item-6"])

//End NAV 


//Start CTA

// 1) the variable "ctaImg" references the HTML document and get the Id "cta-img". 
// 2) ctaImg.src changes the HTML document to change the image placeholder to the image titled "img-src".

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

//siteContent referes the "cta" object and the "h1" property within that object, then splits the string "DOM is Awesome" into the substring "DOM, is, Awesome" 
let ctaHeader = siteContent["cta"]["h1"].split(' ');

// 1) document. is a variable that gives the ability to access the information in the HTML code. 
// 2)getElementsbyTagName finds "h1" which is the first index in the CTA object. 
// 3) innerHTML gives the ability to change the value of the identified TagName. 
// 4) .join rejoins the substrings that were split in step 1 but includes a break between each word in the string because of <br>.
document.getElementsByTagName('h1')[0].innerHTML = ctaHeader.join('<br>');

// textContent gets the text of an object - in this case it gets the text of the first index "button" in the "cta" object.   Per Aaron, do not use innerText because it has security issues and could be an interview question. Use textContent instead. 

const button = document.getElementsByTagName('button')[0];
button.textContent = siteContent ["cta"]["button"];

//End CTA

//Start main-content

const main = document.querySelector('.main-content');
const mainItem = main.querySelectorAll('h4');
mainItem[0].textContent = siteContent['main-content']['features-h4'];
mainItem[1].textContent = siteContent['main-content']['about-h4'];
mainItem[2].textContent = siteContent['main-content']['services-h4'];
mainItem[3].textContent = siteContent['main-content']['product-h4'];
mainItem[4].textContent = siteContent['main-content']['vision-h4'];

const mainContent = main.querySelectorAll('p');
mainContent[0].textContent = siteContent['main-content']['features-content'];
mainContent[1].textContent = siteContent['main-content']['about-content'];
mainContent[2].textContent = siteContent['main-content']['services-content'];
mainContent[3].textContent = siteContent['main-content']['product-content'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];

const mainImg = document.getElementById('middle-img');
mainImg.src = siteContent["main-content"]["middle-img-src"];


//end main-content

//start contact

const contact = document.querySelector('.contact');
const contactTitle = contact.querySelector('h4');
const contactContent = contact.querySelectorAll('p');
contactTitle.textContent = siteContent['contact']['contact-h4'];
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];
//end contact

// Footer

const footer = document.querySelector('footer');
const copyright = footer.querySelector('p');
copyright.textContent = siteContent['footer']['copyright'];

//end footer
