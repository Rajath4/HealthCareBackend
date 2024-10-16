// src/user/user.repository.ts

import User from "../../auth/models/User";

export class UserRepository {
    async findById(id: string) {
        return User.findById(id);
      }
    
      async findDoctors() {
        return User.find({ role: 'doctor' });
      }
    
  // Additional methods like createUser, findByEmail, etc.
}
