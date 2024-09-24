import { IUserRepository } from "@/core/domain/interfaces/user-repository.interface";
import { UserRepository } from "@/core/infrastructure/repositories/user.repository";

export class GetUserByIdUseCase {
  private readonly _userRepository: IUserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  async execute(userId: number) {
    return await this._userRepository.getUserById(userId);
  }
}
