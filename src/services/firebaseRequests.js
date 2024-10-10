import { db } from './firebaseConfig';
import { collection, addDoc, getDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const requests = {
  // Create a new document
  add: async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error('Error adding document: ', error);
      throw error;
    }
  },

  // Get a document by ID
  get: async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error getting document: ', error);
      throw error;
    }
  },

  // Update a document by ID
  update: async (collectionName, id, data) => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
      return { id, ...data }; // return updated data
    } catch (error) {
      console.error('Error updating document: ', error);
      throw error;
    }
  },

  // Delete a document by ID
  delete: async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      return id; // return deleted document ID
    } catch (error) {
      console.error('Error deleting document: ', error);
      throw error;
    }
  },
};

export default requests;
