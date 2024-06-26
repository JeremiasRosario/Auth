import { Request, Response } from "express";
import { AuthService } from '../services/auth.services';
import { CustomError } from '../../domain/errors/custom.error';
import { CreateCategoryDto, PaginationDto } from "../../domain";
import { CaterogyServices } from '../services/category.services';



export class ProductController {


    constructor(

        //todo: private readonly productService: Productservices,

    ) { }

    private handlerError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(`${error}`)

        return res.status(500).json({ error: 'Internal server error' })
    }

    createProduct = async (req: Request, res: Response) => {
        const [error, createCategoryDto] = CreateCategoryDto.create(req.body)
        if (error) return res.status(400).json({ error });



        //todo:     this.productsService.createCategory(createCategoryDto!, req.body.user)
        //         .then(category => res.status(201).json(category))
        //         .catch(error => this.handlerError(error, res));
        return res.json('create product');

    }

    getProduct = async (req: Request, res: Response) => {

        const { page = 1, limit = 10 } = req.query;
        const [error, paginationDto] = PaginationDto.create(+page, +limit)
        if (error) return res.status(400).json({ error });
        // res.json(paginationDto)
        return res.json('get product');


        // this.caterogyService.getCategories()
        //     .then(categories => res.json(categories))
        //     .catch(error => this.handlerError(error, res));

    }
}