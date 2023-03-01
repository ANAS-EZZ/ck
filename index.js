var arr = [ 10, 0 , 14 , 18, 1 ]
 
    for (var i = 1; i < arr.length; i++) {
      var card = arr[i]
      var j =i-1;
      while (j >= 0 && arr[j-1] > card) {
        arr[j+1] = arr[j]
        j--;
      }
      arr[j+1]= card
      
    }