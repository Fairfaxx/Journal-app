import { doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { collection } from 'firebase/firestore/lite';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    //uid

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    console.log({ newDoc, setDoc });

    // dispatch
    //dispatch(newNote)
    //dispatch(activarNote)
  };
};
