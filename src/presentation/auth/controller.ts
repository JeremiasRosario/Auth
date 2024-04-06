import { Request, Response } from "express";
import { RegisterUserDto } from '../../domain';
import { AuthService } from '../services/auth.services';
import { CustomError } from '../../domain/errors/custom.error';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';



export class AuthController {


    constructor(
        public readonly authServices: AuthService,
    ) { }

    private handlerError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(`${error}`)

        return res.status(500).json({ error: 'Internal server error' })
    }

    registerUser = (req: Request, res: Response) => {
        const [error, RegisterDto] = RegisterUserDto.create(req.body);
        if (error) return res.status(400).json({ error })

        this.authServices.registerUser(RegisterDto!)
            .then((user) => res.json(user))
            .catch(error => this.handlerError(error, res));
    }

    loginUser = (req: Request, res: Response) => {

        const [error, loginUserDto] = LoginUserDto.create(req.body);
        if (error) return res.status(400).json({ error })

        this.authServices.loginUser(loginUserDto!)
            .then((user) => res.json(user))
            .catch(error => this.handlerError(error, res));

    }

    validateEmail = (req: Request, res: Response) => {
        const { token } = req.params;

        this.authServices.validateEmail(token)
            .then(() => res.json('Email was validated properly'))
            .catch((error: unknown) => this.handlerError(error, res));

    }

}