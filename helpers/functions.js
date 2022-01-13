////////HELPER FUNCTIONS/////////

const sortAsc = (logs) => {
    return logs.sort((a,b) => {
        if (a.captainName > b.captainName) {return 1}
        if (a.captainName < b.captainName) {return -1}
        return 0  
    })
}

const sortDesc = (logs) => {
    return logs.sort((a,b) => {
        if (a.captainName < b.captainName) {return 1}
        if (a.captainName > b.captainName) {return -1}
        return 0  
    })
}

const isValid = (log) => {
    let test = false
    if (typeof log.captainName === "string" && typeof log.title === "string" && typeof log.post === "string" && typeof log.mistakesWereMadeToday === "boolean" && typeof log.daysSinceLastCrisis === "number") {
        test = true
    }
    return test
}

module.exports = {
    sortAsc,
    sortDesc,
    isValid
}