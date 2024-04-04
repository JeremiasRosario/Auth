import { Request, Response } from "express";
import { RegisterUserDto } from '../../domain';
import { AuthServices } from '../services/auth.services';



export class AuthController {


    constructor(
        public readonly authServices: AuthServices,
    ) { }


    registerUser = (req: Request, res: Response) => {
        const [error, RegisterDto] = RegisterUserDto.create(req.body);
        if (error) return res.status(400).json({ error })
        this.authServices.registerUser(RegisterDto!)
            .then((user) => res.json(user))
    }

    loginUser = (req: Request, res: Response) => {
        res.json('loginUser')
    }

    validateEmail = (req: Request, res: Response) => {
        res.json('validateEmail')
    }


}