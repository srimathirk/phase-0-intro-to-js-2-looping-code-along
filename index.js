let messages = [];

function writeCards(stringNames,eventNames){
   
    for(let i = 0 ; i<stringNames.length; i++){
        messages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventNames} gift!`)

    }    
    return messages;
}

console.log(messages);

function countDown(count){
   
    while(count > 0 || count ==0){
        console.log(count);
        count--;
    }
    return count;
}
