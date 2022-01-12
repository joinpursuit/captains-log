const validateURL = (req, res, next) => {
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = req.body;

  switch (true) {
    case !typeof captainName === "string" || captainName.length < 1:
      res
        .status(400)
        .send(
          `Oops, you did not provide a string format or missed the captain name: ${captainName}`
        );
      break;
    case !typeof title === "string" || title.length < 1:
      res
        .status(400)
        .send(
          `Oops, you did not provide a string format or missed the title: ${title}`
        );
      break;
    case !typeof post === "string" || post.length < 1:
      res
        .status(400)
        .send(
          `Oops, you did not provide a string format or missed the post: ${post}`
        );
      break;
    case !typeof mistakesWereMadeToday === "boolean":
      res
        .status(400)
        .send(
          `Oops, you did not provide a boolean format for mistakesWereMadeToday: ${mistakesWereMadeToday}`
        );
      break;
    case !typeof daysSinceLastCrisis === "number":
      res
        .status(400)
        .send(
          `Oops, you did not provide a number format for daysSinceLastCrisis: ${daysSinceLastCrisis}`
        );
      break;
    default:
      return next();
      break;
  }
};

module.exports = { validateURL };
