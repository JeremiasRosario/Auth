import { bcryptAdapter, JwtAdapter } from '../../config';
import { UserModel } from '../../data';
import { CustomError, LoginUserDto, RegisterUserDto } from '../../domain/';
import { UserEntity } from '../../domain/entities/user.entity';


export class AuthServices {

    constructor() { }



    public async registerUser(registerUserDto: RegisterUserDto) {

        const existUser = await UserModel.findOne({ email: registerUserDto.email });
        if (existUser) throw CustomError.badRequest('Email already exist');

        try {

            const user = new UserModel(registerUserDto);

            //Escritar la contraseña

            user.password = bcryptAdapter.hash(registerUserDto.password)
            await user.save();

            return user;


            //JWT


            //Email de confirmacion

        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

    }

    public async loginUser(loginUserDto: LoginUserDto) {

        const user = await UserModel.findOne({ email: loginUserDto.email });
        if (!user) throw CustomError.badRequest('Email not found');

        const isMaching = bcryptAdapter.compare(loginUserDto.password, user.password);
        if (!isMaching) throw CustomError.badRequest('Password is not valid')

        const { password, ...userEntity } = UserEntity.fromObject(user);

        const token = await JwtAdapter.generateToken({ id: user.id });
        if (!token) throw CustomError.internalServer('Error while creating JWT');

        return {
            user: userEntity,
            token
        }



    }
}