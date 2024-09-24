import { User } from '@/core/domain/entities/User';

export interface IUserRepository {
    getUsers(): Promise<User[]>;
    getUserById(userId: number): Promise<User>;
};