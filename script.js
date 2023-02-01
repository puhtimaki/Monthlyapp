'use strict'

let lainaStatis = (document.querySelector('#laina').innerHTML = 263)
let autoStatic = (document.querySelector('#auto').innerHTML = 500)
let kauppaStatic = (document.querySelector('#kauppa').innerHTML = 350)
let muutStatic = (document.querySelector('#muut').innerHTML = 40)
let viihdeStatic = (document.querySelector('#viihde').innerHTML = 15)
let nettiStatic = (document.querySelector('#netti').innerHTML = 27)

//onclick event button
let AddbbudgetButton = document.querySelector('#total-amount-button')
AddbbudgetButton.addEventListener('click', addBudget)

function addBudget() {
  let budget = document.querySelector('#total-amount').value
  let budgetTotal = document.querySelector('#amount')
  budgetTotal.innerHTML = budget
  document.querySelector('#total-amount').value = ''
}
