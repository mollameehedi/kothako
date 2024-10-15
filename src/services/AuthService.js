import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config'; //
// Initialize Firebase Authentication
const auth = getAuth()

const authService = {
  // Sign up a new user
  signup: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Return user information
    } catch (error) {
      throw new Error(`Signup failed: ${error.message}`); // Propagate error
    }
  },

  // Update user profile
  updateUserProfile: async (displayName, photoURL) => {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No user is currently signed in.");
    }

    try {
      await updateProfile(user, { displayName, photoURL });
      return { displayName, photoURL }; // Return updated profile info
    } catch (error) {
      throw new Error(`Profile update failed: ${error.message}`); // Propagate error
    }
  },

  // Sign in existing user
  signin: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Return user information
    } catch (error) {
      throw new Error(`Signin failed: ${error.message}`); // Propagate error
    }
  },

  // Sign out the current user
  signout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(`Signout failed: ${error.message}`); // Propagate error
    }
  },

  // Get current user
  getCurrentUser: () => {
    return auth.currentUser; // Return current user or null
  },
};

export default authService;
