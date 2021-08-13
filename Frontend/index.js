`use strict`;

console.log("Hello i'm connected");

fetch(`http://localhost:9082/getAll`).then((response) => {
    response.json().then((data) => {
        console.log(data);
        console.log(data[0].name);
        data.forEach((data)=>{
            createOfficer(data);
        })

    });
});

let createOfficer = (data) => {

    const OfficerParent = document.querySelector('#OfficerList');
    const childOfficerBody = document.createElement('div');
    const child = document.createElement('div');
    const childOfficerShipName = document.createElement('h5');
    const childOfficerName = document.createElement('h5');
    const childOfficerRanking = document.createElement('h5');
    const childOfficerYearsAtStarfleet = document.createElement('h5');
    const childOfficerFriendOfTheRomulans = document.createElement('h5');
    const childOfficerHomePlanet = document.createElement('h5');
    const childID = document.createElement('h5');

    childOfficerShipName.textContent = "Ship Name: " + data.OfficerShipName
    childOfficerName.textContent = " Name : " + data.officerName;
    childOfficerRanking.textContent = "Ranking : " + data.officerRanking;
    childOfficerYearsAtStarfleet.textContent = "Name: " + data.officerYearsAtStarfleet;
    childOfficerFriendOfTheRomulans.textContent = "Friend of the Romulans? : " + data.officerFriendOfTheRomulans;
    childOfficerHomePlanet.textContent = "Home Planet : " + data.officerHomePlanet;
    childID.textContent = "ID : " + data.item_id;
    childBody.className = "Officer-body";
    child.className = "Officer";

    childBody.appendChild(childOfficerShipName);
    childBody.appendChild(childOfficerName);
    childBody.appendChild(childOfficerRanking);
    childBody.appendChild(childOfficerYearsAtStarfleet);
    childBody.appendChild(childOfficerFriendOfTheRomulans);
    childBody.appendChild(childOfficerHomePlanet);
    childBody.appendChild(childID);

    child.appendChild(childBody);
    OfficerParent.appendChild(child);

    const OfficerStarshipNameInput = document.querySelector('#OfficerStarshipNameInput');
    const OfficerNameInput = document.querySelector('#OfficerNameInput');
    const OfficerRankingInput = document.querySelector('#OfficerRankingInput');
    const OfficerYearsAtStarfleetInput = document.querySelector('#OfficerYearsAtStarfleetInput');
    const OfficerFriendOfTheRomulansInput = document.querySelector('#flexSwitchCheckFriend');
    const OfficerHomePlanetInput = document.querySelector('#OfficerHomePlanetInput');
    const OfficerIdInput = document.querySelector('#OfficerIdInput');

    const createButton = document.querySelector('#createBtn');
    const updateButton = document.querySelector('#updateBtn');
    const clearButton = document.querySelector('#clearBtn');

    console.log(OfficerStarshipNameInput);
    console.log(OfficerNameInput);
    console.log(OfficerRankingInput);
    console.log(OfficerYearsAtStarfleetInput);
    console.log(OfficerFriendOfTheRomulansInput);
    console.log(OfficerHomePlanetInput);
    console.log(OfficerIdInput);
    console.log(createButton);
    console.log(updateButton);
    console.log(removeButton);

    let printOutForm = () => {

        console.log(OfficerStarshipNameInput.value);
        console.log(OfficerNameInput.value);
        console.log(OfficerRankingInput.value);
        console.log(OfficerYearsAtStarfleetInput.value);
        console.log(OfficerFriendOfTheRomulansInput.value);
        console.log(OfficerHomePlanetInput.value);
        console.log(OfficerIdInput.value);

// Const officerShipName = document.querySelector(`#officerShipName`);
// Const officerName = document.querySelector(`#officerName`);
// Const officerRanking = document.querySelector(`#officerRanking`);
// Const officerYearsAtStarfleet = document.querySelector(`#officerYearsAtStarfleet`);
// Const officerFriendOfTheRomulans = document.querySelector(`#officerFriendToTheRomulans`);
// Const officerHomePlanet = document.querySelector(`#officerHomePlanet`);
// Const officerId = document.querySelector(`#officerId`);
// console.log(officerShipName);
// console.log(officerName);
// console.log(officerRanking);
// console.log(officerYearsAtStarfleet);
// console.log(officerFriendOfTheRomulans);
// console.log(officerHomePlanet);
// console.log(officerId);



// officerShipName.textContent ="Ship Name :" + data[0].officerShipName;
// officerName.textContent ="Name :" + data[0].officerName;
// officerRanking.textContent ="Ranking :" + data[0].officerRanking;
// officerYearsAtStarfleet.textContent ="Years At Starfleet :" + data[0].officerYearsAtStarfleet;
// officerfriendsOfTheRomulans.textContent ="Friends of the Romulans :" + data[0].officerFriendOfTheRomulans;
// officerHomePlanet.textContent ="Home Planet :" + data[0].officerHomePlanet;
// officerId.textContent ="officer ID :" + data[0].officerId;



    }

    let postData =(data) => {
        const Officer = {
        "starship" : OfficerStarshipNameInput.value,
        "name" : OfficerNameInput.value,
        "ranking" : OfficerRankingInput.value,
        "yearsAtStarfleet" : OfficerYearsAtStarfleetInput.value,
        "friendOfTheRomulans" : OfficerFriendOfTheRomulansInput.value,
        "homePlanet" : OfficerHomePlanetInput.value
        };

        console.log(Officer);

        fetch(`http://localhost:8082/add`, {
        method: `POST`, // Using POST Method
        headers: {
            "Content-type":"application/json" 
        },              // Needed for POST requests
        body: JSON.stringify(Officer) // What is being posted 
    }).then((response) =>{
        response.json();
    })
    .then((data) => {
        console.log(`Post request succesful`);
    });

};
    

    let raplaceData = (id) => {

        const Officer = {
            "starship" : OfficerStarshipNameInput.value,
            "name" : OfficerNameInput.value,
            "ranking" : OfficerRankingInput.value,
            "yearsAtStarfleet" : OfficerYearsAtStarfleetInput.value,
            "friendOfTheRomulans" : OfficerFriendOfTheRomulansInput.value,
            "homePlanet" : OfficerHomePlanetInput.value
            };
    

        fetch(`http://localhost:9082/replace/${id}`, {
            method: `PUT`, 
            headers: {
                "Content-type":"application/json" 
            },             
            body: JSON.stringify(Officer) 
        }).then((response) =>{
            response.json();
        })
        .then((data) => {
            console.log(`Post request succesful`);
        });
    
    };

    const removeID = document.querySelector('#deleteInput');
    const removeButton = document.querySelector('#deleteBtn');

let removeData = (id) => {

    fetch(`http://localhost:9082/delete/${id}`, {
        method: `DELETE`, 
    }).then((data) => {
        console.log(`Delete request succesful`);
    });

}
    updateButton.addEventListener('click', function() {
    updateData(idInput.value);
    })

    removeButton.addEventListener('click', function(){
        deleteData(removeID.value);
    })

    createButton.addEventListener('click', postData);

}