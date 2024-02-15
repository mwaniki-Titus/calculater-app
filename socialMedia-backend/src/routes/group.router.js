import { Router } from "express";
import { getGroups} from "../controllers/groupController.js";

const groupRouter = Router( );


groupRouter.get('/groups', getGroups);
// userRouter.post('/groups', createGroups)


export default groupRouter; 