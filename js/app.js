'user strict'

//declaring form 

let form = document.getElementById('form');

// global array 
let trips = [];

/// creat add event 
form.addEventListener('submit', addTrip);

/// function for add event 
function addTrip(event) {
    event.preventDefault();

    let addName = event.target.name.value;
    let addPlace = event.target.place.value;
    let addTransport = event.target.transport.value;


    let addTrip = new Trip(addName, addPlace, addTransport);

    /// call the functin in event 
    addTrip.render();
    /// call lacal 
    saveLocal();

}



/// creat constructer 

function Trip(name, place, transport) {

    this.name = name;
    this.place = place;
    this.transport = transport;

    trips.push(this);


}


// creat table 

/// creat table header 

let table = document.getElementById('table');
let tr = document.createElement('tr');
table.appendChild(tr);

/// table header array 

let tableHeader = ['Places name', 'Trip Place', 'Type Of Transport'];

for (let i = 0; i < tableHeader.length; i++) {

    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = tableHeader[i];


}

// to render the entrance info from the user 

Trip.prototype.render = function () {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.name;

    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerHTML = `<img src="images/${this.place.toLowerCase()}.png" alt="${this.place}" width="300px" height="300px">`;

    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = this.transport;

}

/// laocal storage .

/// save to local 
function saveLocal() {

    localStorage.setItem('trip', JSON.stringify(trips));


}

//geting from local 


function getFromLocal() {
    let data = localStorage.getItem('trip');

    let dataPares = JSON.parse(data);

    if (dataPares !== null) {
        for (let i = 0; i < dataPares.length; i++) {

            let tripParse = new Trip(dataPares[i].name, dataPares[i].place, dataPares[i].transport);

            tripParse.render();

        }
    }



}
getFromLocal();