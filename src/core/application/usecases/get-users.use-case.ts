import { IUserRepository } from "@/core/domain/interfaces/user-repository.interface";
import { UserRepository } from "@/core/infrastructure/repositories/user.repository";

export class GetUsersUseCase {
  private readonly _userRepository: IUserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  async execute() {
    return await this._userRepository.getUsers();
  }
}
