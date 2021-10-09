const fibonacci = function(count) {

    if (typeof count == "string") count = parseInt(count, 10);
    
    if (count < 0) return "OOPS";

    if(count === 0) return 0;

    //return count;

    let a = 0;
    let b = 1;

    for (let i = 0; i < count; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return a;

};

// Do not edit below this line
module.exports = fibonacci;
