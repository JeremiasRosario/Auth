import { create } from "domain";
import { CategoryModel } from "../../data";
import { CreateCategoryDto, CustomError } from "../../domain";
import { UserEntity } from '../../domain/entities/user.entity';
import { CategoryRoutes } from "../category/routes";


export class CaterogyServices {


    constructor() { }

    async createCategory(createCategoryDto: CreateCategoryDto, user: UserEntity) {


        const categoryExist = await CategoryModel.findOne({ name: createCategoryDto.name });
        if (categoryExist) throw CustomError.badRequest('Categpry already exist');

        try {

            const category = new CategoryModel({
                ...createCategoryDto,
                user: user.id,
            })


            await category.save();

            return {
                id: category.id,
                name: category.name,
                available: category.avaliable,

            }



        } catch (error) {
            throw CustomError.internalServer(`${error}`);

        }

    }

    async getCategories() {

        try {

            const categories = await CategoryModel.find();

            return categories.map(category => ({
                id: category.id,
                name: category.name,
                available: category.avaliable,
            }))


        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }


    }

}