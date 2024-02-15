import { Router } from "express";
import { getEvents } from "../controllers/eventController.js";

const eventRouter = Router( );



eventRouter.get('/Events', getEvents)



export default eventRouter; 