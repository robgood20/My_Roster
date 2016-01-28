/* global $ */

var roster = [];
var pId = 0;


function getElem(id) {
    return document.getElementById(id);
}
function Player(name, position, number) {
    this.id = pId;
    this.name = name;
    this.position = position;
    this.number = number;
    roster.push(this);
    pId++;
}

var peyton = {
    name: 'Peyton Manning',
    id: 8,
    position: 'QB',
    jerseyNumber: 18,
    team: 'Denver Broncos'
}

var cam = {
    name: 'Cam Newton',
    id: 15,
    position: 'QB',
    jerseyNumber: 1,
    team: 'Carolina Panthers'
}

var warren = {
    name: 'Warren Moon',
    id: 2,
    position: 'QB',
    jerseyNumber: 1,
    team: 'Texas Oilers',
    retired: true
}

roster.push(peyton, cam, warren)
//fn that returns any by jersey//  
function findById(jerseyNum) {
    var out = [];
    for (var i = 0; i < roster.length; i++) {
        if (jerseyNum === roster[i].jerseyNumber) {
            out.push(roster[i]);
        }
    }
    return out;
}  
//to get index of player from their id//
function getIndex(id) {
    for (var i = 0; i < roster.length; i++) {
        if (id === roster[i].id) {
            return i;
        }
    }
    return -1;
}  

//remove//
function removePlayer(id) {
    var playerIndex = getIndex(id);
    if (playerIndex === -1) {
        return;
    }
    roster.splice(playerIndex, 1);
    draw()
}

function addPlayer(e) {
    e.preventDefault();
    var pName = $('#player-name').val();
    var pPosition = $('#player-position').val();
    var pNumber = $('#player-number').val();
    new Player(pName, pPosition, pNumber);
    draw()
}

function draw() {
    var template = '';
    var rosterElem = $('.player-roster');
    for (var i = 0; i < roster.length; i++) {
        template += `<div class="player-card">
                <style>
                border: 1px solid black;
                background: white;
                </style>
                        <button onclick=" " class="btn btn-danger ">Remove</button>----insert removeplayer fn------
                        <div class="display:inline-block">
                        <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/ " class="image-responsive " alt="Picture "></img>
                        <div class="caption ">
                            <h5>Player Name</h5>
                            <h6>Position</h6>
                            <h6>Player Number</h6>
                        </div>
                </div>
            </div>`;
        
    }

    rosterElem.empty()
    rosterElem.append(template);
}

draw();

