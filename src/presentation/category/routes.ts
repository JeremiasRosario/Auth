
import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { CaterogyServices } from "../services/category.services";

export class CategoryRoutes {

    static get routes(): Router {
        const router = Router();
        const categoryServices = new CaterogyServices;
        const controller = new CategoryController(categoryServices);

        router.get('/', controller.getCategories);
        router.post('/', [AuthMiddleware.validateJWT], controller.createCategory);


        return router;

    }

}