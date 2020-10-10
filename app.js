// NOTE //
//make buttons increase by 1 clickCount per click of boat//
//make clickCount go down by x amount when button is cliked. //
// increase casting resources when buttons are clicked//
// make cast button randomly catch fish when clicked and decrease cast resource on click.//
// when fish is caught increase fish amount counter//
let fishCount = 0
let equipment = {

  bait: {
    name: "bait",
    count: 0,
    castResource: 0,
    cost: 2,
  },
  reel: {
    name: "reel",
    count: 0,
    castResource: 0,
    cost: 2,
  },
  rod: {
    name: "rod",
    count: 0,
    castResource: 0,
    cost: 2,
  },
  net: {
    name: "net",
    count: 0,
    castResource: 0,
    cost: 2,
  },
  fisherman: {
    name: "fisherman",
    count: 0,
    castResource: 0,
    cost: 200,
  }
}

function buttons(buttonClicked) {
  if (equipment[buttonClicked].count >= equipment[buttonClicked].cost) {
    equipment[buttonClicked].castResource++
    equipment[buttonClicked].count -= equipment[buttonClicked].cost

    equipment[buttonClicked].cost *= 2
    // if (equipment[buttonClicked].name == equipment.fisherman.name) {
    //   setInterval(function fisherman() {
    //     equipment.bait.castResource++
    //     equipment.net.castResource++
    //     equipment.reel.castResource++
    //     equipment.rod.castResource++
    //     drawResource()
    //   }, 3000)

  }
  drawResource()
  drawButtons()
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
  if (equipment.bait.castResource >= 2 && equipment.net.castResource >= 2 && equipment.reel.castResource >= 1 && equipment.rod.castResource >= 1) {

    fishCount++
    equipment.bait.castResource -= 2
    equipment.net.castResource -= 2
    equipment.reel.castResource -= 1
    equipment.rod.castResource -= 1



  }
  drawButtons()
  drawResource()
}

// function fisherman() {

//   equipment.bait.castResource++
//   equipment.net.castResource++
//   equipment.reel.castResource++
//   equipment.rod.castResource++
//   drawResource()
// }


function drawButtons() {


  let baitElem = document.getElementById('bait')
  baitElem.innerText = `BAIT: ${equipment.bait.count}`

  let rodElem = document.getElementById('rod')
  rodElem.innerText = `RODS: ${equipment.rod.count}`

  let reelElem = document.getElementById('reel')
  reelElem.innerText = `REELS: ${equipment.reel.count}`

  let netElem = document.getElementById('net')
  netElem.innerText = `NETS: ${equipment.net.count}`

  let fishermanElem = document.getElementById('fisherman')
  fishermanElem.innerText = `Fisherman: Cost 200`

  let fishTotalElem = document.getElementById('fish-total')
  fishTotalElem.innerText = `Fish Caught: ${fishCount}`
}

function drawResource() {
  let resourceElem = document.getElementById('resources')
  resourceElem.innerText = `Resources Available:
  BAIT: ${equipment.bait.castResource}
RODS: ${equipment.rod.castResource}
REELS: ${equipment.reel.castResource}
 NETS: ${equipment.net.castResource}
 Fisherman: ${equipment.fisherman.castResource}`
}





drawResource()
drawButtons()