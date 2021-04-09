const User = require('./user')

const getUserById = (id) => User.findById(id).exec()

const getAllUsers = () => User.find({}).exec()

const createUser = (userDetails) => User.create(userDetails)
  
const removeUserById = (id) => User.findByIdAndRemove(id).exec()

const updateUserById = (id, update) => User.findByIdAndUpdate(id, update, {new: true}).exec()

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
}
