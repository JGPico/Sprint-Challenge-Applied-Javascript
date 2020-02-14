// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function createTabs(obj){
    const tabsDiv = document.createElement('div');
    tabsDiv.classList.add('tab');
    tabsDiv.textContent = obj;

    return tabsDiv;
}

const tabsEntry = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    //console.log(response);
    response.data.topics.forEach(element => {
        tabsEntry.append(createTabs(element));
    })
    }).catch(error => {
    console.log('Shit has hit the tabs fan', error);
})
