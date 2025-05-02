const AuthService = require("../services/AuthService");
const registerUserSchema = require("../utils/validations/userSchema");

class AuthController {
  static async signup(req , res) {
    const { name, email, password } = req.body;

    console.log(name , email , password)

    if (!name && !email && !password) {
      return res
        .json({
          success: false,
          message: "Data required",
        })
        .status(400);
    } else {
      const { error } = registerUserSchema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        const errorMessage = error.details.map((err) => err.message);
        return res
          .json({
            success: false,
            message: errorMessage,
          })
          .status(400);
      } else {
        return await AuthService.signup(name , email , password);
      }
    }
  }
}

module.exports = AuthController;
