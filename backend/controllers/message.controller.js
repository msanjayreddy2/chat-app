import Conversation from "../model/connection.model.js";
import Message from "../model/message-model.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    // console.log(req.user);
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      //   console.log("hi creating new conversation");
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      //   console.log(conversation, newMessage);
      conversation.message.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    // await conversation.save();
    // await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage Controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res, next) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("message");
    if (!conversation) {
      res.status(200).json([]);
    }
    res.status(200).json(conversation.message);
  } catch (error) {
    console.log("error in getMessage Controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
