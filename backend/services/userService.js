import User from '../models/User.js';

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

export const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

export const findUserById = async (id) => {
    return await User.findById(id).select('-password');
};

export const updateUserProfile = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true }).select('-password');
};