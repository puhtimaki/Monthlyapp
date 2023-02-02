'use strict'

//statuc expenses
let lainaStatic = (document.querySelector('#laina').innerHTML = 263)
let autoStatic = (document.querySelector('#auto').innerHTML = 500)
let kauppaStatic = (document.querySelector('#kauppa').innerHTML = 350)
let muutStatic = (document.querySelector('#muut').innerHTML = 40)
let viihdeStatic = (document.querySelector('#viihde').innerHTML = 15)
let nettiStatic = (document.querySelector('#netti').innerHTML = 27)

//onclick event button
let AddbbudgetButton = document.querySelector('#total-amount-button')
AddbbudgetButton.addEventListener('click', addBudget)
// eenter input
let budgetInput = document.querySelector('#total-amount')
budgetInput.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (e.keyCode === 13) {
    AddbbudgetButton.click()
  }
})
//add budget amount
function addBudget() {
  let budget = document.querySelector('#total-amount').value
  let budgetTotal = document.querySelector('#amount')
  budgetTotal.innerHTML = budget
  document.querySelector('#total-amount').value = ''

  // decrease budget amount
  let decreaseBudget =
    parseInt(budget) -
    parseInt(lainaStatic) -
    parseInt(autoStatic) -
    parseInt(kauppaStatic) -
    parseInt(muutStatic) -
    parseInt(viihdeStatic) -
    parseInt(nettiStatic)
  let decreaseBudgetTotal = document.querySelector('#amount')
  decreaseBudgetTotal.innerHTML = decreaseBudget
}

//add expenses button
let addExpensesButton = document.querySelector('#check-amount')
addExpensesButton.addEventListener('click', addExpenses)
//enter input
let expensesInput = document.querySelector('#user-amount')
expensesInput.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (e.keyCode === 13) {
    addExpensesButton.click()
  }
})
//increase expenses

//add expenses function
function addExpenses() {
  // sum expenses to lainastatic

  let laina = document.querySelector('#laina')
  let lainaInput = document.querySelector('#user-amount').value
  let lainaTotal = parseInt(lainaStatic) + parseInt(lainaInput)
  laina.innerHTML = lainaTotal

  document.querySelector('#user-amount').value = ''
}
