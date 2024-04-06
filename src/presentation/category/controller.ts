import { Request, Response } from "express";
import { AuthService } from '../services/auth.services';
import { CustomError } from '../../domain/errors/custom.error';



export class CategoryController {


    constructor(
    ) { }

    private handlerError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(`${error}`)

        return res.status(500).json({ error: 'Internal server error' })
    }

    createCategory = async (req: Request, res: Response) => {

        res.json('Created Category')

    }

    getCategories = async (req: Request, res: Response) => {

        res.json('Get Category')

    }
}