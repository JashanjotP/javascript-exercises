const removeFromArray = function(arr, ...num) {
 
    const newarray = arr.filter(function(item) {
        for(let i = 0; i < num.length; i++) {
            if(item === num[i]) 
                return false;
        }
            return item;
    });

    return newarray;

};

// Do not edit below this line
module.exports = removeFromArray;
