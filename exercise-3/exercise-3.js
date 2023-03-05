function removeFromArray(array, deleteItem) {
  return array.filter(function(item) {
    return item !== deleteItem;
  })
}
// removeFromArray([1, 2, 3, 4], 3); 
console.log(removeFromArray([1, 2, 3, 4], 3));
