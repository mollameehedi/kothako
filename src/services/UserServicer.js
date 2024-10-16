import requests from './requests'; // Import the requests module

const userService = {
  // Add a new user
  addUser: async (userData) => {
    try {
      return await requests.add('users', userData); // Use the 'users' collection
    } catch (error) {
      console.error('Error adding user: ', error);
      throw error;
    }
  },

  // Get user by ID
  getUserById: async (id) => {
    try {
      return await requests.get('users', id); // Fetch user from 'users' collection
    } catch (error) {
      console.error('Error fetching user: ', error);
      throw error;
    }
  },

  // Update user by ID
  updateUser: async (id, userData) => {
    try {
      return await requests.update('users', id, userData); // Update user in 'users' collection
    } catch (error) {
      console.error('Error updating user: ', error);
      throw error;
    }
  },

  // Delete user by ID
  deleteUser: async (id) => {
    try {
      return await requests.delete('users', id); // Delete user from 'users' collection
    } catch (error) {
      console.error('Error deleting user: ', error);
      throw error;
    }
  },
};

export default userService;
