const palindromes = function (inputStr) {
    /[.,\/#!$%\^&\*;:{}=\-_`~()]/

    //Remove all punctuation
    inputStr = inputStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    //Remove all spaces
    inputStr = inputStr.replace(/\s+/g, "");

    inputStr = inputStr.toLowerCase();  

    //Make an inverted 
    let invStr = inputStr.split("").reverse().join("")

    return (inputStr === invStr)
    
};

// Do not edit below this line
module.exports = palindromes;
