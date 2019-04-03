function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++){
    array[i] = changeValue[i];
    if(array[i] > stopValue){
      break
    }
  }return array
}

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i<array.length; i++){
    //array[i] = changeValue[i];
    while (array[i] === skipValue)
    continue
  }
  else{
    return array
  }
}

function findBy(array, findFn){

}
