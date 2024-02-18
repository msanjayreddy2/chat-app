import User from "../model/user.models.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    res.status(200).json(users);
  } catch (error) {
    console.log("error in userController: ", error.message);
    res.send(500).json({ error: "Internal Server Error" });
  }
};
