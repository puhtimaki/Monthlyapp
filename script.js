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

//onclick event button
let AddSavingsButton = document.querySelector('#total-saastotili-button')
AddSavingsButton.addEventListener('click', addSavings)
// eenter input
let savingsInput = document.querySelector('#total-saastotili')
savingsInput.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (e.keyCode === 13) {
    AddSavingsButton.click()
  }
})

//add budget amount
function addBudget() {
  let budget = document.querySelector('#total-amount').value
  let budgetTotal = document.querySelector('#amount')
  budgetTotal.innerHTML = budget + ' €'
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

function addSavings() {
  let savings = document.querySelector('#total-saastotili').value
  let savingsTotal = document.querySelector('#saastotili-amount')
  savingsTotal.innerHTML = savings + ' €'
  document.querySelector('#total-saastotili').value = ''
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
  //select from dropdown
  let select = document.querySelector('#kategoriat')
  let selectValue = select.options[select.selectedIndex].value

  if (selectValue === 'laina') {
    let laina = document.querySelector('#laina')
    let lainaInput = document.querySelector('#user-amount').value
    let lainaTotal = parseInt(lainaStatic) + parseInt(lainaInput)
    laina.innerHTML = lainaTotal + ' €'
    document.querySelector('#user-amount').value = ''
  } else if (selectValue === 'auto') {
    let auto = document.querySelector('#auto')
    let autoInput = document.querySelector('#user-amount').value
    let autoTotal = parseInt(autoStatic) + parseInt(autoInput)
    auto.innerHTML = autoTotal + ' €'
    document.querySelector('#user-amount').value = ''
  } else if (selectValue === 'kauppa') {
    let kauppa = document.querySelector('#kauppa')
    let kauppaInput = document.querySelector('#user-amount').value
    let kauppaTotal = parseInt(kauppaStatic) + parseInt(kauppaInput)
    kauppa.innerHTML = kauppaTotal + ' €'
    document.querySelector('#user-amount').value = ''
  } else if (selectValue === 'muut') {
    let muut = document.querySelector('#muut')
    let muutInput = document.querySelector('#user-amount').value
    let muutTotal = parseInt(muutStatic) + parseInt(muutInput)
    muut.innerHTML = muutTotal + ' €'
    document.querySelector('#user-amount').value = ''
  } else if (selectValue === 'viihde') {
    let viihde = document.querySelector('#viihde')
    let viihdeInput = document.querySelector('#user-amount').value
    let viihdeTotal = parseInt(viihdeStatic) + parseInt(viihdeInput)
    viihde.innerHTML = viihdeTotal + ' €'
    document.querySelector('#user-amount').value = ''
  } else if (selectValue === 'netti') {
    let netti = document.querySelector('#netti')
    let nettiInput = document.querySelector('#user-amount').value
    let nettiTotal = parseInt(nettiStatic) + parseInt(nettiInput)
    netti.innerHTML = nettiTotal + ' €'
    document.querySelector('#user-amount').value = ''
  } else {
    alert('Täytä kentät!')
  }
}
