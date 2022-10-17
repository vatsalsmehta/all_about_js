const allnumbers=[35, 45, 78,  23,  66]
const oddno = allnumbers.filter((element) => (element%2!=0));
const evenno = allnumbers.filter((element) => {
    if(element%2==0){
        return element;
    }
})

console.log("Odd numbers are ", oddno);
console.log("Even numbers are ", evenno);

const userData=[
    {
        userId:"21",
        userName:"Vatsal",
        userTransactionDetails:{
            transactionValue: 5500,
            cancelled: false
        }
    },
    {
        userId:"22",
        userName:"Novin",
        userTransactionDetails:{
            transactionValue: 900,
            cancelled: true
        }
    },
    {
        userId:"23",
        userName:"klon",
        userTransactionDetails:{
            transactionValue: 400,
            cancelled: true
        }
    },
]

//get user's Name whose transaction isn't cancelled. Since .map returns exact length of array, it'll 
//return undefined for value's that don't get inside if block. so we'll filter those undefined values with .filter
const uncancelledusers2=userData.map((element)=>{
    if(element.userTransactionDetails.cancelled){
        return (element.userName);
    }
}).filter((item)=> item!=undefined);

console.log(uncancelledusers2);


