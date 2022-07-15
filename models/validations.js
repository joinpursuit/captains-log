const validateURL = (req, res, next) => {
  if (req.body.url.match(/https?:\/\//)) {
    return next();
  } else {
    res
      .status(400)
      .send(`Oops, you forgot to start your url with http:// or https://`);
  }
};

module.exports = { validateURL };
