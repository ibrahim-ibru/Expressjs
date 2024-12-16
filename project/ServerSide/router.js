import { Router } from "express";

import * as ctrl from "../ServerSide/Controller/todo.controller.js"


const router=Router()

router.route("/addtodo").post(ctrl.addTodo)

export default router