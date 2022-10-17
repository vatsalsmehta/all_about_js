const dataarr=[10,20,30]

//to iterate through each element in an array using foreach.
//foreach returns undefined. so never return in foreach

dataarr.forEach((value, index, array)=>{
    console.log("Index is ", index);
    console.log("Value is ", value);
    console.log("array is",array);
    array[index]=value*10;    
});

console.log(dataarr);