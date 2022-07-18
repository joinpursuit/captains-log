const validateURL = (req, res, next) => {
  if (req.body.url.match(/https?:\/\//)) {
    return next();
  } else {
    res
      .status(400)
      .send(`Oops, you forgot to start your url with http:// or https://`);
  }
};

const validateEmpty = (req, res, next) => {
  let value = req.body.value;
  if(value.length === 0) {
      return res.status(500).send({
          error: "empty value"
      });
  }
  // if string value is longer than 0, continue with next function in route
  next();
}
const validateData =(req,res,next)=>{
  
 const checktype = {
    captainName: 'string',
    title: 'string',
    post: 'string',
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 10,
  };
 let {body}=req.body

 isValid=true
 for (const key in body) {
  if (typeof checktype[key] !== typeof body[key]) {
    isValid = false;
    }
  }
 return isValid
}

module.exports = { validateURL,validateData, validateEmpty };
