import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/prisma/generated/client';
import { parse, serialize } from 'cookie'; // Import cookie functions
import * as bcrypt from 'bcrypt'; // Import bcrypt

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Find a user by email in the database
      const user = await prisma.registration.findUnique({
        where: { email },
      });

      if (!user) {
        // If the user is not found, return an error response
        return res.status(404).json({ error: 'User not found' });
      }

      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        // If the passwords do not match, return an error response
        return res.status(401).json({ error: 'Incorrect password' });
      } else {
        // If the user is found and the password is correct, set a 'user' cookie
        res.setHeader('Set-Cookie', serialize('user', email, { path: '/' }));

        // Return a success response with the user data
        return res.status(200).json({ message: 'Login successful', user });
      }
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
