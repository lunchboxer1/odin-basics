const sumAll = function(start, end) {

    let sum = 0;

    if (typeof start != 'number' || typeof end != 'number' || start < 0 || end < 0) {
        return "ERROR"
        
    }

    //if (typeof start != 'number') return "DOIN";

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = 0; i <= end; i++) {
        sum += i;
    }

    return sum



};

// Do not edit below this line
module.exports = sumAll;
