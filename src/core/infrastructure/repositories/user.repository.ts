import { User } from '@/core/domain/entities/User';
import { IUserRepository } from '@/core/domain/interfaces/user-repository.interface';
import { HttpMethod } from '@/core/infrastructure/enums/http-method.enum';
import { storeApi } from '@/core/infrastructure/datasource/store.api';

export class UserRepository implements IUserRepository {

    constructor() {

    }

    async getUsers(): Promise<User[]> {
        const response: Response = await storeApi(HttpMethod.GET, 'users');
        const users: User[] =  await response.json();

        return users;
    }

    async getUserById(userId: number): Promise<User> {
        const response: Response = await storeApi(HttpMethod.GET, `users/${userId}`);
        const user: User =  await response.json();

        return user;
    }

}