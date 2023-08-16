import { createStore } from "zustand";
export const initialState = {
   modalStatus: "close",
   listofStudents: [],
 };


 
//store
const useDataStore = createStore((set, get) => ({
   ...initialState,
   modalState: false,
   init: async () => {
     try {
      //  let configObject = {};
     } catch (err) {
       console.error("error in location-store init", err);
     }
   },
   openModal: () => {
     set((state) => ({
       ...state,
       modalState:true,
     }));
   },
   closeModal: () => {
     set((state) => ({
       ...state,
       modalState:false,
     }));
   },
fetchStudents: async () => {
  try {
    const response = await fetch("http://localhost:3000/students");
    const students = await response.json();
    set((state) => ({
      ...state,
      listofStudents: students,
    }));
  } catch (err) {
    console.error("error in location-store init", err);
  }
},

 }));
 
 export default useDataStore;
 