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
        },
        metaData:[
            {
                octoberAdSeen: false
            },
            {
                novemberAdSeen: false
            }
        ]
    },
]

userData.map((eachItem,index)=>{
if(eachItem.userTransactionDetails.cancelled){
    eachItem.metaData.forEach((data)=>{
        if(data.novemberAdSeen){
            data.octoberAdSeen=true;
        }else{
            data.novemberAdSeen=true;
        }
    })
    const html=`
    <div key=${eachItem.userId}>
        <div>
            Name is ${eachItem.userName}
        </div>
        <div>
            TransactionValue is ${eachItem.userTransactionDetails.transactionValue}
        </div>
        <div>
            Data for october is
        </div>
    </div>`

    console.log(html);
}
})
