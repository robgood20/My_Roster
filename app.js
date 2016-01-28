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
function removePlayer(e) {
    var btn = $(e.target);
    var card = btn.closest('.player-card');
    var myId = card.attr("id")
    card.remove()
    for (var i = 0; i < roster.length; i++) {
        if (roster[i].id == myId) {
            roster.splice(i, 1)
        }
    }
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
        template += '<div class="player-card" id=' + roster[i].id + '><button onclick="removePlayer" class="btn btn-danger">Remove</button><img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/ " class="image-responsive "alt= "Picture "> </img><div class="caption " ><h5>' + roster[i].name + '</h5><h6>' + roster[i].position + '</h6><h6>' + roster[i].number + '</h6></div></div>';
    }

    rosterElem.empty()
    rosterElem.append(template);
}
$('.player-roster').on('click', '.btn-danger', removePlayer);
draw();


