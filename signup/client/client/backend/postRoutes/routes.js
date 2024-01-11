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
      res.status(201).json({
        message: "Successfully Saved",
        userDetailsSave,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving user details' });
    }
  });

  app.get("/users", async (req, res) => {
    try {
      const findUserDetails = await UserDetails.find();
      res.status(200).json(findUserDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching user details" });
    }
  });

  app.get("/users/:id", async (req, res) => {
    try {
      const userDetail = await UserDetails.findById(req.params.id);
      if (userDetail) {
        res.status(200).json(userDetail);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching user details" });
    }
  });

  app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    let { name, surname, email, number } = req.body;

    try {
      const updatedUser = await UserDetails.findOneAndUpdate(
        { _id: id },
        { name, surname, email, number },
        { new: true }
      );

      if (updatedUser) {
        res.status(200).json({ message: "Successfully Updated", updatedUser });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating user details" });
    }
  });
};

module.exports = saveUserDetails;

