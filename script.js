'use strict'
// add button to save all to local storage

//load local storage at start
window.onload = function () {
  let budget = localStorage.getItem('budget')
  let budgetElem = document.querySelector('#amount')
  budgetElem.innerHTML = budget + ' €'

  let lainaStatic = localStorage.getItem('lainaStatic')
  let autoStatic = localStorage.getItem('autoStatic')
  let kauppaStatic = localStorage.getItem('kauppaStatic')
  let muutStatic = localStorage.getItem('muutStatic')
  let viihdeStatic = localStorage.getItem('viihdeStatic')
  let nettiStatic = localStorage.getItem('nettiStatic')
  let saastoTiliStatic = localStorage.getItem('saastoTiliStatic')
  let lainaElem = document.querySelector('#laina')
  lainaElem.innerHTML = lainaStatic + ' €'
  let autoElem = document.querySelector('#auto')
  autoElem.innerHTML = autoStatic + ' €'
  let kauppaElem = document.querySelector('#kauppa')
  kauppaElem.innerHTML = kauppaStatic + ' €'
  let muutElem = document.querySelector('#muut')
  muutElem.innerHTML = muutStatic + ' €'
  let viihdeElem = document.querySelector('#viihde')
  viihdeElem.innerHTML = viihdeStatic + ' €'
  let nettiElem = document.querySelector('#netti')
  nettiElem.innerHTML = nettiStatic + ' €'
  let saastoTiliElem = document.querySelector('#saastotili-amount')
  saastoTiliElem.innerHTML = saastoTiliStatic + ' €'
}

// if local storage empty set static values
if (localStorage.getItem('lainaStatic') === null) {
  localStorage.setItem('lainaStatic', 940)
}
if (localStorage.getItem('autoStatic') === null) {
  localStorage.setItem('autoStatic', 690)
}
if (localStorage.getItem('kauppaStatic') === null) {
  localStorage.setItem('kauppaStatic', 400)
}
if (localStorage.getItem('muutStatic') === null) {
  localStorage.setItem('muutStatic', 130)
}
if (localStorage.getItem('viihdeStatic') === null) {
  localStorage.setItem('viihdeStatic', 40)
}
if (localStorage.getItem('nettiStatic') === null) {
  localStorage.setItem('nettiStatic', 52)
}
if (localStorage.getItem('saastoTiliStatic') === null) {
  localStorage.setItem('saastoTiliStatic', 360)
}
if (localStorage.getItem('budget') === null) {
  localStorage.setItem('budget', 0)
}

// LOCAL STORAGE LOAD ABOVE

//static expenses
let lainaStatic = 940
let autoStatic = 690
let kauppaStatic = 400
let muutStatic = 130
let viihdeStatic = 40
let nettiStatic = 52
let saastoTiliStatic = 360

const lainaElem = document.querySelector('#laina')
lainaElem.innerHTML = lainaStatic + ' €'

const lainaEdit = document.querySelector('#laina-edit')
lainaEdit.innerHTML = '<i class="fas fa-edit"></i>'

// edit functionality with button and enter
lainaEdit.addEventListener('click', () => {
  let lainaEditInput = document.querySelector('#laina-edit-input')
  lainaEditInput.innerHTML =
    '<input type="number" pattern="[0-9]*" id="laina-edit-input-value" value=""><button id="laina-edit-input-button">Lisää</button>'
  let lainaEditInputButton = document.querySelector('#laina-edit-input-button')
  lainaEditInputButton.addEventListener('click', () => {
    let lainaEditInputValue = document.querySelector('#laina-edit-input-value')
      .value
    lainaStatic = lainaEditInputValue
    lainaElem.innerHTML = lainaStatic + ' €'
    lainaEditInput.innerHTML = ''
  })

  lainaEditInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      lainaEditInputButton.click()
    }
    //update budget amount from edited value
  })
})

const saastoTiliElem = document.querySelector('#saastotili-amount')
saastoTiliElem.innerHTML = saastoTiliStatic + ' €'

const autoElem = document.querySelector('#auto')
autoElem.innerHTML = autoStatic + ' €'

// add edit icon
const autoEdit = document.querySelector('#auto-edit')
autoEdit.innerHTML = '<i class="fas fa-edit"></i>'
// edit functionality with button and enter
autoEdit.addEventListener('click', () => {
  let autoEditInput = document.querySelector('#auto-edit-input')
  autoEditInput.innerHTML =
    '<input type="number" pattern="[0-9]*" id="auto-edit-input-value" value=""><button id="auto-edit-input-button">Lisää</button>'
  let autoEditInputButton = document.querySelector('#auto-edit-input-button')
  autoEditInputButton.addEventListener('click', () => {
    let autoEditInputValue = document.querySelector('#auto-edit-input-value')
      .value
    autoStatic = autoEditInputValue
    autoElem.innerHTML = autoStatic + ' €'
    autoEditInput.innerHTML = ''
  })
  // add enter
  autoEditInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      autoEditInputButton.click()
    }
  })
})

const kauppaElem = document.querySelector('#kauppa')
kauppaElem.innerHTML = kauppaStatic + ' €'
// add edit icon
const kauppaEdit = document.querySelector('#kauppa-edit')
kauppaEdit.innerHTML = '<i class="fas fa-edit"></i>'
// edit functionality with button and enter
kauppaEdit.addEventListener('click', () => {
  let kauppaEditInput = document.querySelector('#kauppa-edit-input')
  kauppaEditInput.innerHTML =
    '<input type="number" pattern="[0-9]*" id="kauppa-edit-input-value" value=""><button id="kauppa-edit-input-button">Lisää</button>'
  let kauppaEditInputButton = document.querySelector(
    '#kauppa-edit-input-button',
  )
  kauppaEditInputButton.addEventListener('click', () => {
    let kauppaEditInputValue = document.querySelector(
      '#kauppa-edit-input-value',
    ).value
    kauppaStatic = kauppaEditInputValue
    kauppaElem.innerHTML = kauppaStatic + ' €'
    kauppaEditInput.innerHTML = ''
  })
  // add enter
  kauppaEditInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      kauppaEditInputButton.click()
    }
  })
})

const muutElem = document.querySelector('#muut')
muutElem.innerHTML = muutStatic + ' €'
//add edit icon
const muutEdit = document.querySelector('#muut-edit')
muutEdit.innerHTML = '<i class="fas fa-edit"></i>'
// edit functionality with button and enter
muutEdit.addEventListener('click', () => {
  let muutEditInput = document.querySelector('#muut-edit-input')
  muutEditInput.innerHTML =
    '<input type="number" pattern="[0-9]*" id="muut-edit-input-value" value=""><button id="muut-edit-input-button">Lisää</button>'
  let muutEditInputButton = document.querySelector('#muut-edit-input-button')
  muutEditInputButton.addEventListener('click', () => {
    let muutEditInputValue = document.querySelector('#muut-edit-input-value')
      .value
    muutStatic = muutEditInputValue
    muutElem.innerHTML = muutStatic + ' €'
    muutEditInput.innerHTML = ''
  })
  // add enter
  muutEditInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      muutEditInputButton.click()
    }
  })
})

const viihdeElem = document.querySelector('#viihde')
viihdeElem.innerHTML = viihdeStatic + ' €'
//add edit icon
const viihdeEdit = document.querySelector('#viihde-edit')
viihdeEdit.innerHTML = '<i class="fas fa-edit"></i>'
// edit functionality with button and enter
viihdeEdit.addEventListener('click', () => {
  let viihdeEditInput = document.querySelector('#viihde-edit-input')
  viihdeEditInput.innerHTML =
    '<input type="number" pattern="[0-9]*" id="viihde-edit-input-value" value=""><button id="viihde-edit-input-button">Lisää</button>'
  let viihdeEditInputButton = document.querySelector(
    '#viihde-edit-input-button',
  )
  viihdeEditInputButton.addEventListener('click', () => {
    let viihdeEditInputValue = document.querySelector(
      '#viihde-edit-input-value',
    ).value
    viihdeStatic = viihdeEditInputValue
    viihdeElem.innerHTML = viihdeStatic + ' €'
    viihdeEditInput.innerHTML = ''
  })
  // add enter
  viihdeEditInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      viihdeEditInputButton.click()
    }
  })
})

const nettiElem = document.querySelector('#netti')
nettiElem.innerHTML = nettiStatic + ' €'
//add edit icon
const nettiEdit = document.querySelector('#netti-edit')
nettiEdit.innerHTML = '<i class="fas fa-edit"></i>'
// edit functionality with button and enter
nettiEdit.addEventListener('click', () => {
  let nettiEditInput = document.querySelector('#netti-edit-input')
  nettiEditInput.innerHTML =
    '<input type="number" pattern="[0-9]*" id="netti-edit-input-value" value=""><button id="netti-edit-input-button">Lisää</button>'
  let nettiEditInputButton = document.querySelector('#netti-edit-input-button')
  nettiEditInputButton.addEventListener('click', () => {
    let nettiEditInputValue = document.querySelector('#netti-edit-input-value')
      .value
    nettiStatic = nettiEditInputValue
    nettiElem.innerHTML = nettiStatic + ' €'
    nettiEditInput.innerHTML = ''
  })
  // add enter
  nettiEditInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      nettiEditInputButton.click()
    }
  })
})

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

/* let saveButton = document.querySelector('#savelocal')
saveButton.addEventListener('click', SaveAll)
function SaveAll() {
  alert('Muutokset tallennettu!')
  localStorage.setItem('budget', budget)
  localStorage.setItem('saastoTiliStatic', savings) */

/*  localStorage.setItem('laina', lainaStatic)
  localStorage.setItem('ruoka', ruokaStatic)
  localStorage.setItem('muut', muutStatic)
  localStorage.setItem('netti', nettiStatic)
  localStorage.setItem('viihde', viihdeStatic)
  localStorage.setItem('budgetLeft', budgetLeft)
  localStorage.setItem('budgetLeftDividedRounded', budgetLeftDividedRounded)
  localStorage.setItem('budgetLeftMinusLaina', budgetLeftMinusLaina)
  localStorage.setItem('budgetLeftMinusRuoka', budgetLeftMinusRuoka)
  localStorage.setItem('budgetLeftMinusMuut', budgetLeftMinusMuut)
  localStorage.setItem('budgetLeftMinusNetti', budgetLeftMinusNetti)
  localStorage.setItem('budgetLeftMinusViihde', budgetLeftMinusViihde)
  localStorage.setItem('list', list)
  localStorage.setItem('li', li)
  localStorage.setItem('trash', trash)
  localStorage.setItem('budgetLeftDivided', budgetLeftDivided)
  localStorage.setItem('budgetLeftDividedRounded', budgetLeftDividedRounded) */
//}

function addSavings() {
  //add savings amount to static
  let savings = document.querySelector('#total-saastotili').value
  let savingsInt = parseInt(savings)
  //local storage

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
      // split to 4 weeks
      let splitToFourWeeks = budgetLeftMinusLaina / 4
      let splitToFourWeeksElem = document.querySelector('#balance-amount')
      splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
    })
  } else if (selectValue === 'Auto/Bensa') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenseName = document.querySelector('#product-title').value
    let expenseNameElem = document.querySelector('#product-title')
    expenseNameElem.innerHTML = expenseName
    document.querySelector('#product-title').value = ''

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

    // add to html listing
    let list = document.querySelector('#list')
    let li = document.createElement('li')
    li.innerHTML = ' 🚗:  ' + expenseName + ': ' + expenses + '€ '
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
      let budgetLeftMinusAuto = budgetLeftInt + expensesInt
      budgetLeftElem.innerHTML = budgetLeftMinusAuto + ' € '
      //update laina to static
      let autoStaticInt = parseInt(autoStatic)
      let autoStaticNew = autoStaticInt - expensesInt
      autoStatic = autoStaticNew
      let autoElem = document.querySelector('#auto')
      autoElem.innerHTML = autoStatic + ' €'
      // split to 4 weeks
      let splitToFourWeeks = budgetLeftMinusAuto / 4
      let splitToFourWeeksElem = document.querySelector('#balance-amount')
      splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
    })
  } else if (selectValue === 'Kauppa') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenseName = document.querySelector('#product-title').value
    let expenseNameElem = document.querySelector('#product-title')
    expenseNameElem.innerHTML = expenseName
    document.querySelector('#product-title').value = ''
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

    // add to html listing
    let list = document.querySelector('#list')
    let li = document.createElement('li')
    li.innerHTML = ' 🥩:  ' + expenseName + ': ' + expenses + '€ '
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
      let budgetLeftMinusKauppa = budgetLeftInt + expensesInt
      budgetLeftElem.innerHTML = budgetLeftMinusKauppa + ' € '
      //update laina to static
      let kauppaStaticInt = parseInt(kauppaStatic)
      let kauppaStaticNew = kauppaStaticInt - expensesInt
      kauppaStatic = kauppaStaticNew
      let kauppaElem = document.querySelector('#kauppa')
      kauppaElem.innerHTML = kauppaStatic + ' €'
      // split to 4 weeks
      let splitToFourWeeks = budgetLeftMinusKauppa / 4
      let splitToFourWeeksElem = document.querySelector('#balance-amount')
      splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
    })
  } else if (selectValue === 'Muu') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenseName = document.querySelector('#product-title').value
    let expenseNameElem = document.querySelector('#product-title')
    expenseNameElem.innerHTML = expenseName
    document.querySelector('#product-title').value = ''
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

    // add to html listing
    let list = document.querySelector('#list')
    let li = document.createElement('li')
    li.innerHTML = ' 😮:  ' + expenseName + ': ' + expenses + '€ '
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
      let budgetLeftMinusMuut = budgetLeftInt + expensesInt
      budgetLeftElem.innerHTML = budgetLeftMinusMuut + ' € '
      //update laina to static
      let muutStaticInt = parseInt(muutStatic)
      let muutStaticNew = muutStaticInt - expensesInt
      muutStatic = muutStaticNew
      let muutElem = document.querySelector('#muut')
      muutElem.innerHTML = muutStatic + ' €'
      // split to 4 weeks
      let splitToFourWeeks = budgetLeftMinusMuut / 4
      let splitToFourWeeksElem = document.querySelector('#balance-amount')
      splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
    })
  } else if (selectValue === 'Netti') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenseName = document.querySelector('#product-title').value
    let expenseNameElem = document.querySelector('#product-title')
    expenseNameElem.innerHTML = expenseName
    document.querySelector('#product-title').value = ''
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

    // add to html listing
    let list = document.querySelector('#list')
    let li = document.createElement('li')
    li.innerHTML = ' 💻:  ' + expenseName + ': ' + expenses + '€ '
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
      let budgetLeftMinusNetti = budgetLeftInt + expensesInt
      budgetLeftElem.innerHTML = budgetLeftMinusNetti + ' € '
      //update laina to static
      let nettiStaticInt = parseInt(nettiStatic)
      let nettiStaticNew = nettiStaticInt - expensesInt
      nettiStatic = nettiStaticNew
      let nettiElem = document.querySelector('#netti')
      nettiElem.innerHTML = nettiStatic + ' €'
      // split to 4 weeks
      let splitToFourWeeks = budgetLeftMinusNetti / 4
      let splitToFourWeeksElem = document.querySelector('#balance-amount')
      splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
    })
  } else if (selectValue === 'Viihde') {
    // get value from input and add to static expenses and update html element with new value and clear input field and minus the amount from budget
    let expenseName = document.querySelector('#product-title').value
    let expenseNameElem = document.querySelector('#product-title')
    expenseNameElem.innerHTML = expenseName
    document.querySelector('#product-title').value = ''
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

    // add to html listing
    let list = document.querySelector('#list')
    let li = document.createElement('li')
    li.innerHTML = ' 📺:  ' + expenseName + ': ' + expenses + '€ '
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
      let budgetLeftMinusViihde = budgetLeftInt + expensesInt
      budgetLeftElem.innerHTML = budgetLeftMinusViihde + ' € '
      //update laina to static
      let viihdeStaticInt = parseInt(viihdeStatic)
      let viihdeStaticNew = viihdeStaticInt - expensesInt
      viihdeStatic = viihdeStaticNew
      let viihdeElem = document.querySelector('#viihde')
      viihdeElem.innerHTML = viihdeStatic + ' €'
      // split to 4 weeks
      let splitToFourWeeks = budgetLeftMinusViihde / 4
      let splitToFourWeeksElem = document.querySelector('#balance-amount')
      splitToFourWeeksElem.innerHTML = splitToFourWeeks + ' €'
    })
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
