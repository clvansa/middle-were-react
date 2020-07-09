const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  } else {
    return res.status(401).json({ msg: "Unauthration" });
  }
  jwt.verify(token, "secret text", (err, data) => {
    if (err) {
      res.status(500).json({ err: "Something went wrong" });
      throw Error("Something went wrong");
    }
    console.log(data);
    req.user = data;
    next();
  });
};
