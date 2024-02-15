import { getUserService, getUserByIdService, createUserService, deleteUserService, updateUserService } from '../services/userServices.js';


export const getUsers = async (req, res) => {
    try {
        const data = await getUserService();
        if (data.length === 0) {
            res.status(404).send('Users not found');
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserService();
        console.log(data);
        const user = data.find((element)=> element.UserID == id)
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        console.error('Error in getUserById:', error);
        res.status(500).json({ error: 'Server error', message: error.message });
    }
};


export const createUsers = async (req, res) => {
    try {
        const { UserID, Username, Email, Password, TagName, Location } = req.body;
        
        const newUser = await createUserService({
            UserID,Username, Email, Password, TagName, Location
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};


export const deleteUsers = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUserService(id);
        res.status(200).send('User deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        await updateUserService(id, userData);
        res.status(200).send('User updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};









