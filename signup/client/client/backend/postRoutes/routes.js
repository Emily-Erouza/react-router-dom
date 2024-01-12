const UserDetails = require("../model/Schemas");

const saveUserDetails = (app) => {
  app.post("/userDetails", async (req, res) => {
    try {
      let { name, surname, email, number } = req.body;
      let userDetails = new UserDetails({
        name,
        surname,
        email,
        number,
      });

      const userDetailsSave = await userDetails.save();
      res.send({
        message: "Successfully Saved",
        userDetailsSave,
      });
    } catch (error) {
      console.error(error);
      res.status(404).send({ message: 'Error saving user details' });
    }
  });

  app.get("/userDetails", async (req, res) => {
    try {
      const findUserDetails = await UserDetails.find();
      res.send(findUserDetails);
    } catch (error) {
      console.error(error);
     
    }
  });

  app.get("/users/:id", async (req, res) => {
    try {
      const finduserDetails = await UserDetails.findById(req.body.id);
      res.send(finduserDetails);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });

}

module.exports = saveUserDetails;

