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

function addPlayer(e){
    e.preventDefault();
    var pName = $('#player-name').val();
    var pPosition = $('#player-position').val();
    var pNumber = $('#player-number').val();
    new Player(pName, pPosition, pNumber);
    draw()
}

function draw(){
   var template = '';
   var rosterElem = $('.player-roster')
    
    for(var i = 0; i < roster.length; i++){
        template += '<div class="player-card"><h1>' + roster[i].name + '</h1>';
    }
    
    rosterElem.empty()
    rosterElem.append(template);
}

draw();

