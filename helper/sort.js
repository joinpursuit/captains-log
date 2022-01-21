function sortByCaptainName(arr, order){
    return arr.sort((a, b)=> {
        a = a.captainName.toLowerCase()
        b = b.captainName.toLowerCase()
        switch(order === "asc"){
            case a < b:
                return -1;
            case a > b:
                return 1;
            case a === b:
                return 0;
        }
        switch(order === "desc"){
            case a < b:
                return 1;
            case a > b:
                return -1;
            case a === b:
                return 0;
        }
    })
}

function findMistakes(arr, isBoolean){
    isBoolean = isBoolean === "true" ? true : false
    return arr.filter(({mistakesMade: isMistake}) => isMistake === isBoolean)
}

function filterLastCrisis(arr, crisis){
    const [, gtOrLt, days] = crisis.match(/(\D+)(\d+)/)
    return arr.filter(({daysSinceLastCrisis: lastCrisis})=> {
        switch(true){
            case gtOrLt === "gt":
                return lastCrisis > 1*days;
            case gtOrLt === "gte":
                return lastCrisis >= 1*days;
            case gtOrLt === "lt":
                return lastCrisis < 1*days;
            case gtOrLt === "lte":
                return lastCrisis <= 1*days;
        }
    })
}

module.exports = {
    sortByCaptainName,
    findMistakes,
    filterLastCrisis
} 