// function timer() {
//   setTimeout(function () (console.log('done')), seconds * 1000)

// }

// timer(5)


const heroes = [
  {
    name: 'link',
    type: 'dwarf',
    damage: 5,
    health: 100,
  },
  {
    name: 'newguy',
    type: 'elf',
    damage: 10,
    health: 50
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}


let gold = 0

function drawHealth() {
  //get heros health and put it on the page
  let heroHp = document.getElementById('hp')
  let heroLink = heroes.find(h => h.name == 'link')
  heroHp.innerText = 'HP: ' + heroLink.health
  if (heroLink.health <= 0) {
    window.alert('GAMEOVER')
    heroLink.health = 100
    drawHealth()
  }
  if (heroLink.health > 100) {
    heroLink.health = 100
    drawHealth()
  }
}

function drawBossHealth() {
  //boss health
  let bossHealthElm = document.getElementById('bossBar')
  bossHealthElm.style.width = boss.health + '%'
  if (boss.health <= 0) {
    boss.health = 0
    window.alert('you beat him')
    boss.health = 100
    let heroLink = heroes.find(h => h.name == 'link')
    heroLink.health = 100
    drawHealth()
  }
}

function attack() {
  // boss health down by 5 each cllick
  let bossHealthElm = document.getElementById('bossBar')
  let heroLink = heroes.find(h => h.name == 'link')
  bossHealthElm = boss.health -= 5
  drawBossHealth()
  getGold()
  drawGold()
}

function bossAttack() {
  let heroHp = document.getElementById('hp')
  let heroHealth = heroes.find(h => h.name == 'link')
  heroHp.innerText = 'HP: ' + (heroHealth.health -= 10)
  console.log('boss attack');
  drawHealth()
}

function getGold() {
  gold += 2
  console.log(gold)
}
function drawGold() {
  let goldElm = document.getElementById('gold')
  goldElm.innerText = 'Gold: ' + gold
}

function buyPotion() {
  let heroLink = heroes.find(h => h.name = 'link')
  if (gold >= 20) {
    gold -= 20
    heroLink.health += 20
  }
  drawHealth()
  drawGold()
}

function bossLevelUp() {
  if (boss.health = 0) {
    boss.damage += 5
    boss.maxHealth += 100
  }
}

setInterval(bossAttack, 5000)
drawHealth()