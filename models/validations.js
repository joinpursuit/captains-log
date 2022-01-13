// *** START bonus section - Part 2
const validateURL = (req, res, next) =>{
    // console.log("check req.body: ", typeof req.body.captainName);
    if ((typeof req.body.captainName !== "string") ||
        (typeof req.body.title !== "string") ||
        (typeof req.body.post !== "string") ||
        (typeof req.body.mistakesWereMadeToday !== "boolean") ||
        (typeof req.body.daysSinceLastCrisis !== "number")
    ){
        res.status(404).json({error: "A wrong datatype was entered."});
    }
    next();
};
// *** END bonus section - Part 2

module.exports = { validateURL };