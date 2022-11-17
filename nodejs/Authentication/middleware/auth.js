const auth = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies;

  // what if token is not present

  if (!token) {
    res.status(403).send("token is missing");
  }

  // verify token token
  // if the token is present then verify the token and save the decoded data in the new req.user
  try {
    const decode = jwt.verify(token, "shhhh");
    console.log(decode);
    req.user = decode;
  } catch (err) {
    // if the token verification is not successful or the token is invalid then send the error.
    res.status(403).json({ err });
  }
  return next();
};
