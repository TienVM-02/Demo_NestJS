import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    // eslint-disable-next-line prettier/prettier
    constructor (private userService: UserService){}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Post()
    async insertUser(@Body() userData: User): Promise<any> {
        const createUser = await this.userService.insertUser(userData);
        return 'insert successfull!'
    }
}