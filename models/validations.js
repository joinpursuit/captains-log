const validateURL = (req, res, next) => {
    console.log("This function checks the validity of the URL entered by the user")
    //we must invoke the next() function in order to continue in the 
    next();
};
//same as writing {validateURL : validateURL}
module.exports = { validateURL }