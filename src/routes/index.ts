import { Router } from "express";
import MailController from "../controllers/MailController";

const routes = Router();

routes.post('/send', MailController.send);

export default routes;