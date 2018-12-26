function checkCashRegister(price, cash, cid){
    const denom = [
        {name: 'ONE HUNDRED', val: 100.00},
        {name: 'TWENTY', val: 20.00},
        {name: 'TEN', val: 10.00},
        {name: 'FIVE', val: 5.00},
        {name: 'ONE', val: 1.00},
        {name: 'QUARTER', val: 0.25},
        {name: 'DIME', val: 0.10},
        {name: 'NICKEL', val: 0.05},
        {name: 'PENNY', val: 0.01} 
        ]
    
    let change = cash - price;

    const register = cid.reduce(function(acc, curr){
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {total: 0});
    //console.log(JSON.stringify(register));

    if(register.total < change){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    if(register.total === change){
        return {status: "CLOSED", change: cid};
    }

    let change_arr = denom.reduce(function(acc, curr){
        let value = 0;

        while(register[curr.name] > 0 && change >= curr.val){
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change*100)/100;
        }
        if(value > 0){
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);

    if(change_arr.length < 1 || change > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    console.log(change_arr);
    return {status: "OPEN", change: change_arr};
    // var sum = 0;
    // var change = JSON.stringify(cid);
    // for(var i = 0; i < cid.length; i++){
    //     sum += cid[i][1];
    // }
    // change = change.replace(/\,/g, ", ");
    // console.log(sum);
    // console.log(change);
    // console.log(cash - price);
    // if(price > sum){
    //     return {status: "INSUFFICIENT_FUNDS", change: []};
    // } else if(price == sum) {
    //     return {status: "CLOSED", change: change};  
    // }

    
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);