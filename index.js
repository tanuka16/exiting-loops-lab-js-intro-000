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
    if (array[i] === skipValue){                        //continue will skip the perticular value and move to the next iteration
    continue
  }
  else{
    return array
  }
}
}

function findBy(array, findFn){

}
