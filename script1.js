function counter() {
  let counter = 0;

  this.inc = function () {
      return ++counter;
  }    
  
  this.dec = function() {
      return --counter;
  }

}

const iterator = new counter();

const c1 = iterator.inc(); 
const c2 = iterator.inc(); 
const c3 = iterator.dec(); 

console.log('Пример инкремента:', c1, c2, c3)