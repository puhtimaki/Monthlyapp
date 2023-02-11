'use strict'

//static expenses
let lainaStatic = 519
let autoStatic = 590
let kauppaStatic = 350
let muutStatic = 64
let viihdeStatic = 26
let nettiStatic = 27
let saastoTiliStatic = 60

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
  let saastoTiliStaticInt = parseInt(saastoTiliStatic)
  let totalStatic =
    lainaStaticInt +
    autoStaticInt +
    kauppaStaticInt +
    muutStaticInt +
    viihdeStaticInt +
    saastoTiliStaticInt +
    nettiStaticInt
  let budgetLeft = budgetTotalInt - totalStatic
  let budgetLeftElem = document.querySelector('#amount')
  budgetLeftElem.innerHTML = budgetLeft + ' €'

  //split to 4 weeks
  let splitToFourWeeks = budgetLeft / 4
  let splitToFourWeeksElem = document.querySelector('#balance-amount')
  splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
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

  //split to 4 weeks
  let splitToFourWeeks = budgetLeftMinusSavings / 4
  let splitToFourWeeksElem = document.querySelector('#balance-amount')
  splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
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

//add expenses function
function addExpenses() {
  //select from dropdown
  let select = document.querySelector('#kategoriat')
  let selectValue = select.options[select.selectedIndex].value

  if (selectValue === 'Laina/Vastike') {
    //EXPENSE NAME
    let expenseName = document.querySelector('#product-title').value
    let expenseNameElem = document.querySelector('#product-title')
    expenseNameElem.innerHTML = expenseName
    document.querySelector('#product-title').value = ''

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
    budgetLeftElem.innerHTML = budgetLeftMinusLaina + ' € '

    // add to html listing
    let list = document.querySelector('#list')
    let li = document.createElement('li')
    li.innerHTML = ' 🏠:  ' + expenseName + ': ' + expenses + '€ '
    list.appendChild(li)
    // add trash icon
    let trash = document.createElement('i')
    trash.classList.add('fas', 'fa-trash-alt')
    li.appendChild(trash)
    // add eventlistener to trash icon
    trash.addEventListener('click', () => {
      li.remove()
      //update budget
      let budgetLeftElem = document.querySelector('#amount')
      let budgetLeft = budgetLeftElem.innerHTML
      let budgetLeftInt = parseInt(budgetLeft)
      let budgetLeftMinusLaina = budgetLeftInt + expensesInt
      budgetLeftElem.innerHTML = budgetLeftMinusLaina + ' € '
      //update laina to static
      let lainaStaticInt = parseInt(lainaStatic)
      let lainaStaticNew = lainaStaticInt - expensesInt
      lainaStatic = lainaStaticNew
      let lainaElem = document.querySelector('#laina')
      lainaElem.innerHTML = lainaStatic + ' €'
    })
  } else if (selectValue === 'Auto/Bensa') {
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
  } else if (selectValue === 'Kauppa') {
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
  } else if (selectValue === 'Muu') {
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
  } else if (selectValue === 'Netti') {
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
  } else if (selectValue === 'Viihde') {
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
  function divideBudget() {
    // divide budgetLeft to 4 weeks
    let budgetLeftElem = document.querySelector('#amount')
    let budgetLeft = budgetLeftElem.innerHTML
    let budgetLeftInt = parseInt(budgetLeft)
    let budgetLeftDivided = budgetLeftInt / 4
    let budgetLeftDividedRounded = Math.round(budgetLeftDivided)
    let budgetLeftDividedRoundedElem = document.querySelector('#balance-amount')
    budgetLeftDividedRoundedElem.innerHTML = budgetLeftDividedRounded + ' €'
  }
  divideBudget()
}
