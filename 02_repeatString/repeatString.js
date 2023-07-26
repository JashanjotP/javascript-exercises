const repeatString = function(frag, howMany) {

    if(howMany < 0 ){
        return 'ERROR';
    }

    let word = '';
    for (let i = 0; i < howMany; i++) {
        word += frag;
    }

    return word;
};

// Do not edit below this line
module.exports = repeatString;
