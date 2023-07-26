const findTheOldest = function(people) {

    return people.reduce((oldest,currentPerson) =>{
        const older= oldest.yearOfDeath - oldest.yearOfBirth;
        const current = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return older > current ? oldest : currentPerson;


    });

};

// Do not edit below this line
module.exports = findTheOldest;
