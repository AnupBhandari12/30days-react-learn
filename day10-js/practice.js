const prices = [100 , 200 , 400 , 600];

const double = prices.map((num) => {
    return num * 2;
});

console.log(double);

const findnbr = prices.filter((num)=>{
    return num > 200
});
console.log(findnbr)

const totalnbr = prices.reduce((num , total) => {
    return num + total 
} , 0);

console.log(totalnbr)

// map , reduce , filter