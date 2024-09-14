import Conversation from "../models/conversationModels.js";
import Message from "../models/messageModels.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
            await conversation.save();
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // This will run in parallel
        await Promise.all([
            newMessage.save(),
            conversation.save(),
        ]);

        // REAL TIME MESSAGING CORE LOGIC
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            // io.to() is used to send events to a specific client
            io.to(receiverSocketId).emit("newMessage", newMessage);
            // then -> Messages.js & useLitenMessages.js
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id :receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json({ message: "No messages found" });
        }

        res.status(200).json(conversation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}