const keysValid = (a, b, c, d, e) => {
  if (
    typeof a == "string" &&
    typeof b == "string" &&
    typeof c == "string" &&
    typeof d == "boolean" &&
    typeof e == "number"
  )
    return true;
  return false;
};

module.exports = keysValid;
