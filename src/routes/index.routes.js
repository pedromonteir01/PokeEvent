import { Router } from "express";
import usersRouter from "./users.routes";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).send({
        message: 'server ok'
    });
});

router.use("/", usersRouter);

export default router;