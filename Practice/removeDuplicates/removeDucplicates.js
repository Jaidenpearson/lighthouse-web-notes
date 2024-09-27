function removeDuplicates(arr){
  let newarr = []
  for(i = 0; i < arr.length; i++){
    if(!newarr.includes(arr[i])){
      newarr.push(arr[i])
    }
  }
  return newarr
}

console.log(
  removeDuplicates([1, 2, 2, 2, 3, 4, 5]),
  removeDuplicates(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
);
