const User = require('../Models/userModel')

exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    return res.status(200).json(users)
};

exports.getOneUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id)
    return res.status(200).json(user)
};

exports.createUser = async (req, res) => {
    const newUser = new User ({...req.body})
    const insertedUser = await newUser.save()
    return res.status(201).json(insertedUser)
};

exports.updateUser = async(req, res) => {
    const {id} = req.params
    await User.updateOne ({_id:id},{...req.body})
    const updateUser = await User.findById(id)
    return res.status(200).json(updateUser)   
};

exports.deleteUser = async (req, res) => {
    const {id} = req.params
    const UserToDelete = await User.findByIdAndDelete(id)
    return res.status(202).json(UserToDelete)
};