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

module.exports = {
    sortAsc,
    sortDesc,
}