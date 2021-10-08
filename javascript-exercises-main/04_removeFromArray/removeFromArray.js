const removeFromArray = function(dataArray, ...delArray ) {
    let newArray = [];
    
    dataArray.forEach((item) => {
        if (!delArray.includes(item)) newArray.push(item);
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
