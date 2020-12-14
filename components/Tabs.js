import axios from 'axios';


// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res =>{
        res.data.topics.forEach(e => {
            divTopics.appendChild(tabs(e))
        });
        console.log(res.data)
    })

    .catch((err) =>{
        console.log(err)
    })





    function tabs(data) {
        const Tab = document.createElement('div')
        Tab.classList.add('tab')
        Tab.innerHTML = data

        return Tab
    }

    const divTopics = document.querySelector('div.topics') 
