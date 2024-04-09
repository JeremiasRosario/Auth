


export class CreateCategoryDto {


    private constructor(
        public readonly name: string,
        public readonly avialable: boolean,
    ) { }

    static create(object: { [key: string]: any }): [string?, CreateCategoryDto?] {
        const { name, avialable = false } = object;
        let availableBoolean = avialable;

        if (!name) return ['Missing name'];
        if (typeof avialable !== 'boolean') {
            availableBoolean = (avialable === 'true')
        }

        return [undefined, new CreateCategoryDto(name, availableBoolean)];
    }

}