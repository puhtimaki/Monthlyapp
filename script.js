'use strict'

//static expenses
let lainaStatic = 263
let autoStatic = 500
let kauppaStatic = 250
let muutStatic = 0
let viihdeStatic = 20
let nettiStatic = 27
let saastoTiliStatic = 0

const lainaElem = document.querySelector('#laina')
lainaElem.innerHTML = lainaStatic + ' €'

const saastoTiliElem = document.querySelector('#saastotili-amount')
saastoTiliElem.innerHTML = saastoTiliStatic + ' €'

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
}

function addSavings() {
  //add savings amount to static
  let savings = document.querySelector('#total-saastotili').value
  let savingsInt = parseInt(savings)
  let saastoTiliStaticInt = parseInt(saastoTiliStatic)
  let saastoTiliStaticNew = saastoTiliStaticInt + savingsInt
  saastoTiliStatic = saastoTiliStaticNew
  let saastoTiliElem = document.querySelector('#saastotili-amount')
  saastoTiliElem.innerHTML = saastoTiliStatic + ' €'
  document.querySelector('#total-saastotili').value = ''
  //minus savings from budget
  let budgetLeftElem = document.querySelector('#amount')
  let budgetLeft = budgetLeftElem.innerHTML
  let budgetLeftInt = parseInt(budgetLeft)
  let budgetLeftMinusSavings = budgetLeftInt - savingsInt
  budgetLeftElem.innerHTML = budgetLeftMinusSavings + ' €'
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
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenses = document.querySelector('#user-amount').value
    let expensesInt = parseInt(expenses)
    let lainaStaticInt = parseInt(lainaStatic)
    let lainaStaticNew = lainaStaticInt + expensesInt
    lainaStatic = lainaStaticNew
    let lainaElem = document.querySelector('#laina')
    lainaElem.innerHTML = lainaStatic + ' €'
    document.querySelector('#user-amount').value = ''
    //minus expenses laina from budget
    let budgetLeftElem = document.querySelector('#amount')
    let budgetLeft = budgetLeftElem.innerHTML
    let budgetLeftInt = parseInt(budgetLeft)
    let budgetLeftMinusLaina = budgetLeftInt - expensesInt
    budgetLeftElem.innerHTML = budgetLeftMinusLaina + ' €'
  } else if (selectValue === 'auto') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenses = document.querySelector('#user-amount').value
    let expensesInt = parseInt(expenses)
    let autoStaticInt = parseInt(autoStatic)
    let autoStaticNew = autoStaticInt + expensesInt
    autoStatic = autoStaticNew
    let autoElem = document.querySelector('#auto')
    autoElem.innerHTML = autoStatic + ' €'
    document.querySelector('#user-amount').value = ''
    //minus expenses laina from budget
    let budgetLeftElem = document.querySelector('#amount')
    let budgetLeft = budgetLeftElem.innerHTML
    let budgetLeftInt = parseInt(budgetLeft)
    let budgetLeftMinusAuto = budgetLeftInt - expensesInt
    budgetLeftElem.innerHTML = budgetLeftMinusAuto + ' €'
  } else if (selectValue === 'kauppa') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenses = document.querySelector('#user-amount').value
    let expensesInt = parseInt(expenses)
    let kauppaStaticInt = parseInt(kauppaStatic)
    let kauppaStaticNew = kauppaStaticInt + expensesInt
    kauppaStatic = kauppaStaticNew
    let kauppaElem = document.querySelector('#kauppa')
    kauppaElem.innerHTML = kauppaStatic + ' €'
    document.querySelector('#user-amount').value = ''
    //minus expenses laina from budget
    let budgetLeftElem = document.querySelector('#amount')
    let budgetLeft = budgetLeftElem.innerHTML
    let budgetLeftInt = parseInt(budgetLeft)
    let budgetLeftMinusKauppa = budgetLeftInt - expensesInt
    budgetLeftElem.innerHTML = budgetLeftMinusKauppa + ' €'
  } else if (selectValue === 'muut') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenses = document.querySelector('#user-amount').value
    let expensesInt = parseInt(expenses)
    let muutStaticInt = parseInt(muutStatic)
    let muutStaticNew = muutStaticInt + expensesInt
    muutStatic = muutStaticNew
    let muutElem = document.querySelector('#muut')
    muutElem.innerHTML = muutStatic + ' €'
    document.querySelector('#user-amount').value = ''
    //minus expenses laina from budget
    let budgetLeftElem = document.querySelector('#amount')
    let budgetLeft = budgetLeftElem.innerHTML
    let budgetLeftInt = parseInt(budgetLeft)
    let budgetLeftMinusMuut = budgetLeftInt - expensesInt
    budgetLeftElem.innerHTML = budgetLeftMinusMuut + ' €'
  } else if (selectValue === 'netti') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenses = document.querySelector('#user-amount').value
    let expensesInt = parseInt(expenses)
    let nettiStaticInt = parseInt(nettiStatic)
    let nettiStaticNew = nettiStaticInt + expensesInt
    nettiStatic = nettiStaticNew
    let nettiElem = document.querySelector('#netti')
    nettiElem.innerHTML = nettiStatic + ' €'
    document.querySelector('#user-amount').value = ''
    //minus expenses laina from budget
    let budgetLeftElem = document.querySelector('#amount')
    let budgetLeft = budgetLeftElem.innerHTML
    let budgetLeftInt = parseInt(budgetLeft)
    let budgetLeftMinusNetti = budgetLeftInt - expensesInt
    budgetLeftElem.innerHTML = budgetLeftMinusNetti + ' €'
  } else if (selectValue === 'viihde') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenses = document.querySelector('#user-amount').value
    let expensesInt = parseInt(expenses)
    let viihdeStaticInt = parseInt(viihdeStatic)
    let viihdeStaticNew = viihdeStaticInt + expensesInt
    viihdeStatic = viihdeStaticNew
    let viihdeElem = document.querySelector('#viihde')
    viihdeElem.innerHTML = viihdeStatic + ' €'
    document.querySelector('#user-amount').value = ''
    //minus expenses laina from budget
    let budgetLeftElem = document.querySelector('#amount')
    let budgetLeft = budgetLeftElem.innerHTML
    let budgetLeftInt = parseInt(budgetLeft)
    let budgetLeftMinusViihde = budgetLeftInt - expensesInt
    budgetLeftElem.innerHTML = budgetLeftMinusViihde + ' €'
  } else {
    alert('Täytä kentät!')
  }
}
