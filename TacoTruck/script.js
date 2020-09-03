// taco truck
//joe drives a taco truck in the booming town of squaresburo
//he uses an array of [x,y] coordinates corresponding to customer locations.
// they walk to his truck, but he wants to minimize the total distance from truck to customers.
//city blocks are perfect squares, and every street is a two way.
//he only parks by street corners.  customers only travel on streets.
//joe checks the array of customer coordinates before deciding where to parks
//given an array of coordinates, return an optinmal location where the total distance is the least.
// [[10,0],[-1,-10],[2,4]]  ==> [2,0] : total distance 25

function selectionSort(arr){
  for(var x = 0; x < arr.length; x++){
    let minIdx = x;
    for(var y = x+1; y < arr.length; y++){
      if(arr[y]<arr[minIdx]){
        minIdx = y;
      }
    }
    [arr[x], arr[minIdx] = arr[minIdx], arr[x]];
  }
  console.log(arr);
  return arr;
}

function median(arr){
  var n = Math.trunc(arr.length/2);
  if(arr.length%2===0){
    return arr[n-1];
  }
  return arr[n];
}


function tacoTruck(arr){
  if(arr.length === 2){
    let xCase = arr[0][0] + arr[1][0];
    let yCase = arr[0][1] + arr[1][1];
    xCase = Math.floor(xCase/2);
    yCase = Math.floor(yCase/2);
    return [xCase,yCase];
  }
  var x = [];
  var y = [];
  for(var i = 0; i<arr.length; i++){
    x.push(arr[i][0]);
    y.push(arr[i][1]);
  }
  x = selectionSort(x);
  y = selectionSort(y);
  x = median(x);
  y = median(y);
  console.log(x,y);
  return[x,y];
}

tacoTruck([[10,0],[-1,-10],[2,4]])