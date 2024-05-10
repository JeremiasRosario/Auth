
import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { CaterogyServices } from "../services/category.services";
import { ProductController } from "./controller";


export class ProductsRoutes {

    static get routes(): Router {
        const router = Router();
        // const categoryServices = new CaterogyServices;
        const controller = new ProductController();

        router.get('/', controller.getProduct);
        router.post('/', [AuthMiddleware.validateJWT], controller.createProduct);


        return router;

    }

}