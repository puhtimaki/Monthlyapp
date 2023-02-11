'use strict'

//static expenses
let lainaStatic = 263
let autoStatic = 500
let kauppaStatic = 250
let muutStatic = 0
let viihdeStatic = 20
let nettiStatic = 27

const lainaElem = document.querySelector('#laina')
lainaElem.innerHTML = lainaStatic + ' €'

const autoElem = document.querySelector('#auto')
autoElem.innerHTML = autoStatic + ' €'

const kauppaElem = document.querySelector('#kauppa')
kauppaElem.innerHTML = kauppaStatic + ' €'

const muutElem = document.querySelector('#muut')
muutElem.innerHTML = muutStatic + ' €'
const viihdeElem = document.querySelector('#viihde')
viihdeElem.innerHTML = viihdeStatic + ' €'
const nettiElem = document.querySelector('#netti')
nettiElem.innerHTML = nettiStatic + ' €'

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

  // minus static expenses from budget
  let budgetTotalInt = parseInt(budget)
  let lainaStaticInt = parseInt(lainaStatic)
  let autoStaticInt = parseInt(autoStatic)
  let kauppaStaticInt = parseInt(kauppaStatic)
  let muutStaticInt = parseInt(muutStatic)
  let viihdeStaticInt = parseInt(viihdeStatic)
  let nettiStaticInt = parseInt(nettiStatic)
  let totalStatic =
    lainaStaticInt +
    autoStaticInt +
    kauppaStaticInt +
    muutStaticInt +
    viihdeStaticInt +
    nettiStaticInt
  let budgetLeft = budgetTotalInt - totalStatic
  let budgetLeftElem = document.querySelector('#amount')
  budgetLeftElem.innerHTML = budgetLeft + ' €'

  //divide budget to 4 weeks
  let budgetPerWeek = budgetLeft / 4
  let budgetPerWeekElem = document.querySelector('#balance-amount')
  budgetPerWeekElem.innerHTML = budgetPerWeek + ' €'
}

function addSavings() {
  let savings = document.querySelector('#total-saastotili').value
  let savingsTotal = document.querySelector('#saastotili-amount')
  savingsTotal.innerHTML = savings + ' €'
  document.querySelector('#total-saastotili').value = ''

  //minus savings from budget
  let budgetLeftElem = document.querySelector('#amount')
  let budgetLeft = budgetLeftElem.innerHTML
  let budgetLeftInt = parseInt(budgetLeft)
  let savingsInt = parseInt(savings)
  let budgetLeftMinusSavings = budgetLeftInt - savingsInt
  budgetLeftElem.innerHTML = budgetLeftMinusSavings + ' €'

  //update budget per week
  let budgetPerWeek = budgetLeftMinusSavings / 4
  let budgetPerWeekElem = document.querySelector('#balance-amount')
  budgetPerWeekElem.innerHTML = budgetPerWeek + ' €'
}

//add expenses button
let addExpenseName = document.querySelector('#product-title')

let addExpensesButton = document.querySelector('#check-amount')
addExpensesButton.addEventListener('click', addExpenses)
//enter input
let expensesInput = document.querySelector('#user-amount')
// add eventlistener to input
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
