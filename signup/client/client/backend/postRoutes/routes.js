const userDetails  = require("../model/Schemas");

const saveUserDetails = (app) => {

  app.post("/userDetails", async (req, res) => {
    try {
      let { name, surname, email, number } = req.body;
      let userDetails = new userDetails({
        name,
        surname,
        email,
        number
      });

      const userDetailsSave = await userDetails.save();
      res.send({
        message: "Successfully Saved",
        userDetailsSave,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({ message: "Post Error" });
    }
  });

  app.get("/getdetails", async (req, res) => {
    try {
      const findUserDetails = await userDetails.find();
      res.send(findUserDetails);
    } catch (error) {
      console.log({ message: "hello world" });
    }
  });

  app.get("/getdetails/:id", async (req, res) => {
    try {
      const userDetail = await userDetail.findById(req.params.id);
      res.send(userDetail);
    } catch (error) {
      console.log({ message: "EMily" });
    }
  });

  app.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    let { name, surname, email, number } = req.body;

    try {
      const update = await UserDetails.findOneAndUpdate(
        { _id: id },
        { name, surname, email, number },
        { new: true }
      );
      res.send({ message: "Successfully Updated", update });
    } catch (error) {
      console.log({ message: "Edit Unsuccessfully" });
    }
  });

  app.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleteDetails = await UserDetails.deleteOne({ _id: id });
      res.send({ message: "Successfully Deleted", deleteDetails });
    } catch (error) {
      console.log({ message: "Deleting Unsuccessfully" });
      res.sendStatus(404);
    }
  });

};

module.exports = saveUserDetails;
