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
    if (typeof log.captainName === "string" && typeof log.title === "string" && typeof log.post === "string" && typeof log.mistakesWereMadeToday === "boolean" && Number(log.daysSinceLastCrisis) >= 0) {
        return true
    }
    return false
}

const formatLog = (log) => {
    return (
        `
        <hr></hr>
        <h1>Title: ${log.title}</h1>
        <h2>By: ${log.captainName}</h2>
        <p style="color:red">Any mistakes today? ${log.mistakesWereMadeToday ? "Yes" : "No"}</p>
        <p style="color:blue">Last Crisis: ${log.daysSinceLastCrisis} days ago</p>
        <p>Post: ${log.post}</p>
        <a href="/logs"><button>Back</button></a>
        <hr></hr>
        `
    )
}

const formatLinks = (logs) => {
    return (
        `<ul>
            ${logs.map((log,i) => {
                return (
                    `
                    <li><a href="/logs/${i}">${log.title}</a></li>
                    `
                )
            }).join("")}
        </ul>`
    )
}

module.exports = {
    sortAsc,
    sortDesc,
    isValid, 
    formatLog,
    formatLinks
}