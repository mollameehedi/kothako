import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut,sendEmailVerification } from "firebase/auth";
import app from '../../firebase.config'; //
// import requests from './firebaseRequests';

// Initialize Firebase Authentication
const auth = getAuth()

const authService = {
  // Sign up a new user
  signup: async (email, password,displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      await sendEmailVerification(userCredential.user); // Send verification email

      const user = userCredential.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName
      };
      // await requests.add('users', userData);
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
