import { UserRepository } from "../../common/repository/UserRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllDoctors() {
    return this.userRepository.findDoctors();
  }
}
