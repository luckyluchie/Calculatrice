const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')


keys.addEventListener('click', function(e){
  if (e.target.matches === 'button'){
    // do something
  }  

  const key = e.target
  const action = key.dataset.action
  
  if (!action) {
    console.log('key')
  }
  if (action === 'add' || action === 'substract' || action === 'multiply' || action === 'divide') {
    console.log('type of operator')
  }
  if (action === 'decimal') {
    console.log('decimal')
  }
  if (action === 'clear') {
    console.log('clear')
  }
  if (action === 'calculate') {
    console.log('calculate')
  } 
  
})    

 
