// NOTE //
//make buttons increase by 1 clickCount per click of boat//
//make clickCount go down by x amount when button is cliked. //
// increase casting resources when buttons are clicked//
// make cast button randomly catch fish when clicked and decrease cast resource on click.//
// when fish is caught increase fish amount counter//
let equipment = {

  bait: {
    name: "bait",
    count: 0,
    castResource: 0,
  },
  reel: {
    name: "reel",
    count: 0,
    castResource: 0,
  },
  rod: {
    name: "rod",
    count: 0,
    castResource: 0,
  },
  net: {
    name: "net",
    count: 0,
    castResource: 0,
  },
  fisherman: {
    name: "fisherman",
    count: 0,
    castResource: 0,
  }
}

function buttons(buttonClicked) {
  if (equipment[buttonClicked].count >= 20)
    equipment[buttonClicked].castResource++
}

function boatClick() {
  for (const key in equipment) {
    const element = equipment[key];
    element.count++
    console.log(element)
    drawButtons()
  }
}

function castClick() {
  if (equipment.bait.count == 20 && equipment.net.count == 10 && equipment.reel.count == 20 && equipment.rod.count == 15) {
    Math.floor(Math.random())
  }

}

function drawButtons() {
  let baitElem = document.getElementById('bait')

  baitElem.innerText = `BAIT: ${equipment.bait.count}`

  let rodElem = document.getElementById('rod')
  rodElem.innerText = `ROD: ${equipment.rod.count}`

  let reelElem = document.getElementById('reel')
  reelElem.innerText = `REEL: ${equipment.reel.count}`

  let netElem = document.getElementById('net')
  netElem.innerText = `NET: ${equipment.net.count}`

  let fishermanElem = document.getElementById('fisherman')
  fishermanElem.innerText = `FISHERMAN: ${equipment.fisherman.count}`
}



drawButtons()