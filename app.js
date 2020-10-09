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
  if (equipment[buttonClicked].count >= 20) {
    equipment[buttonClicked].castResource++
    equipment[buttonClicked].count -= 20

    drawResource()
    drawButtons()
  }
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
  if (equipment.bait.castResource >= 10 && equipment.net.castResource >= 7 && equipment.reel.castResource >= 5 && equipment.rod.castResource >= 3) {

    fishCount++
    equipment.bait.castResource -= 10
    equipment.net.castResource -= 7
    equipment.reel.castResource == 5
    equipment.rod.castResource -= 3



  }
  drawButtons()
  drawResource()
}



function drawButtons() {
  let fishCaughtElem = document.getElementById("fish-caught")
  fishCaughtElem.innerText = `${fishCount}`

  let baitElem = document.getElementById('bait')
  baitElem.innerText = `BAIT: ${equipment.bait.count}`

  let rodElem = document.getElementById('rod')
  rodElem.innerText = `RODS: ${equipment.rod.count}`

  let reelElem = document.getElementById('reel')
  reelElem.innerText = `REELS: ${equipment.reel.count}`

  let netElem = document.getElementById('net')
  netElem.innerText = `NETS: ${equipment.net.count}`

  let fishermanElem = document.getElementById('fisherman')
  fishermanElem.innerText = `Fisherman: 10 Casts`
}

function drawResource() {
  let resourceElem = document.getElementById('resources')
  resourceElem.innerText = `BAIT: ${equipment.bait.castResource}
RODS: ${equipment.rod.castResource}
REELS: ${equipment.reel.castResource}
 NETS: ${equipment.net.castResource}`
}





drawResource()
drawButtons()