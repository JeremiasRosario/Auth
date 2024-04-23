import { Request, Response } from "express";
import { AuthService } from '../services/auth.services';
import { CustomError } from '../../domain/errors/custom.error';
import { CreateCategoryDto } from "../../domain";
import { CaterogyServices } from '../services/category.services';



export class CategoryController {


    constructor(

        private readonly caterogyService: CaterogyServices,

    ) { }

    private handlerError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(`${error}`)

        return res.status(500).json({ error: 'Internal server error' })
    }

    createCategory = async (req: Request, res: Response) => {
        const [error, createCategoryDto] = CreateCategoryDto.create(req.body)
        if (error) return res.status(400).json({ error });



        this.caterogyService.createCategory(createCategoryDto!, req.body.user)
            .then(category => res.status(201).json(category))
            .catch(error => this.handlerError(error, res));

    }

    getCategories = async (req: Request, res: Response) => {

        res.json('Get Category')

    }
}