var health = 100;
var dogName = "Doge"
var hits = 0

function slap(){
    health -= 1
    hits++
    update()
}

function punch(){
    health -= 5
    hits++
    update()
}

function kick(){
    health -= 10
    hits++
    update()
}

function update(){
    if( health < 0){
        health = 0
    }
  document.getElementById('health').innerText = health.toString()
  document.getElementById('name').innerText = dogName
  document.getElementById('hits').innerText = hits.toString()
}

update()