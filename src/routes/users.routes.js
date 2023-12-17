import { Router } from "express";
import { 
    deleteUser, 
    getAllUsers, 
    getUserById, 
    postUser, 
    putUser 
} from "../controllers/users/user.controller.js";

const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", postUser);
usersRouter.put("/:id", putUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;