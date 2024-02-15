import { Router } from "express";
import { getUsers, createUsers, updateUsers, deleteUsers, getUserById } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUserById);
userRouter.post('/users', createUsers);
userRouter.put('/users/:id', updateUsers);
userRouter.delete('/users/:id', deleteUsers);

export default userRouter;
