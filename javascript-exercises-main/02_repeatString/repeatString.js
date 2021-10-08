const repeatString = function(str, num) {
    let msg = "";
    
    if (num < 0) return 'ERROR';
    
    for (let i = 0; i < num; i++){
        msg += str;
    }

    return msg;
};

// Do not edit below this line
module.exports = repeatString;
