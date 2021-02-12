/*var health = 100;
var dogName = "Doge"
var hits = 0*/

let dog = {
    name:"Doge",
    health: 100,
    hits: 0,
    items:[]
}

let items = {
    bone: {
        name: 'bone',
        modifier: 10,
        description: 'increases health by 10'
    },
    shockCollar: {
        name: 'Shock Collar',
        modifier: 5,
        description: 'reduces health by 5',
    }



}

function giveItem(itemKey){
    let item = items[itemKey]
    dog.items.push(item)
    update()
}

function slap(){
    dog.health -= 1
    dog.hits++
    update()
}

function punch(){
    dog.health -= 5
    dog.hits++
    update()
}

function kick(){
    dog.health -= 10
    dog.hits++
    update()
}

function update(){
    if(dog.health < 0){
        dog.health = 0
    }
  document.getElementById('health').innerText = dog.health.toString()
  document.getElementById('name').innerText = dog.name
  document.getElementById('hits').innerText = dog.hits.toString()
  document.getElementById('items').innerText = getItemNames()
}

function getItemNames(){
    if(dog.items.length == 0){
        return "none"
    }
    let itemNames = ""
    for (let i = 0; i < dog.items.length; i++) {
        const item = dog.items[i];
        itemNames += item.name + ' '
    }
    return itemNames.trim()
}

update()