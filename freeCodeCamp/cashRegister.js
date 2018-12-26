function checkCashRegister(price, cash, cid){
    var sum = 0;
    var change = JSON.stringify(cid);
    for(var i = 0; i < cid.length; i++){
        sum += cid[i][1];
    }
    change = change.replace(/\,/g, ", ");
    console.log(sum);
    console.log(change);
    console.log(cash - price);
    if(price > sum){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if(price == sum) {
        return {status: "CLOSED", change: change};  
    }

    
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);