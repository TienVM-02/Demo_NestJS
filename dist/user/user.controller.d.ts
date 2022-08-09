import { User } from "./user.entity";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    insertUser(userData: User): Promise<any>;
}
