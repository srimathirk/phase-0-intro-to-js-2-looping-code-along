

function writeCards(stringNames,eventNames){
    const msg = [];
  stringNames.forEach((name)=>msg.push(`Thank you, ${name}, for the wonderful ${eventNames} gift!`))
  return msg
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"],'surprise'));

function countDown(count){
   
    while(count > 0 || count ==0){
        console.log(count);
        count--;
    }
    return count;
}
