// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
     const div = document.createElement('div');
     div.classList.add('header');
 
     const span = document.createElement('span')
     span.classList.add('date');
     span.innerHTML = 'MARCH 28 , 2020';
     div.append(span);
 
     const h1 = document.createElement('h1');
     h1.innerHTML = 'Lambda Times';
     div.append(h1)
 
     const span2 = document.createElement('span')
     span.classList.add('temp');
     span.innerHTML = '98 deg';
     div.append(span2);
 
 
 return div;
 
 }
 
 const headerContainer = document.querySelector('div.header-container')
 
 headerContainer.appendChild(Header()) ;
