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
                monthNumber: 1,
                januaryAdSeen: true
            },
            {   monthNumber: 2,
                februaryAdSeen: false
            }
        ]
    },
]

var html=``;
userData.map((eachItem,index)=>{
    if(eachItem.userTransactionDetails.cancelled){
        var januarydata, februarydata;
        eachItem?.metaData?.map((monthlydata)=>{
            switch(monthlydata.monthNumber){
                case 1:
                    januarydata=monthlydata.januaryAdSeen;
                case 2:
                    februarydata=monthlydata.februaryAdSeen;
            }
        })
        
        const temp=`
        <div key=${index}>
            <div>
                Name is ${eachItem.userName}
            </div>
            <div>
                TransactionValue is ${eachItem.userTransactionDetails.transactionValue}
            </div>
            <div>
                User Saw ad for january is ${januarydata}
                User saw ad for febraury is ${februarydata}
            </div>
        </div>`

        html= html.concat(temp);
    }
})

console.log(html);
