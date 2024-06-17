import jwt from "jsonwebtoken"
import usermodel from "../modal/user-model.js"

let userdataMiddleware = async (req, res, next) => {
  try {
    let usertoken = req.header('Authorization') || req.header('authorization');


    if (usertoken) {
      let data = jwt.verify(usertoken, 'secerat');
      // Assign the decoded data to req.user
      req.user = data;
    
      //expection
      // Fetch user details using the decoded email
      let fullDetail = await usermodel.findOne({ email: req.user.email });
      console.log(fullDetail);
      
      // Assign user details to req.user
      req.user = fullDetail;
      next()
      // Call the next middleware or route handler
    
    } else {
      res.send('User token not found')
      console.log("User token not found");
    
      // Handle the case where user token is not found
    }
  } catch (err) {
    next(err)
    // Handle errors, such as token verification failure
  }
}

export default userdataMiddleware;
