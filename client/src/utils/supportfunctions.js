import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Hip Hop", value: "hip-hop" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Melody", value: "melody" },
  { id: 5, name: "Karoke", value: "karoke" },
  { id: 6, name: "Reggae", value: "reggae" },
];

export const filterByLanguage = [
  { id: 1, name: "Amharic", value: "amahric" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "Afan oromo", value: "afan-oromo" },
  { id: 4, name: "Tigrigna", value: "tigrigna" },
  { id: 5, name: "Latin", value: "latin" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
