import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';


class AuthService {
  static async register(data: {
    username: string;
    name: string;
    email: string;
    password: string;
  }) {
    const { username,name, email, password } = data;

    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new Error('User with this username or email already exists.');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      username,
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return { message: 'User registered successfully.' };
  }

  static async login(data: { username: string; password: string }) {
    const { username, password } = data;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid credentials.');
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials.');
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    );

    return { token };
  }

  //TODO: Implement forgotPassword and resetPassword methods
}

export default AuthService;
