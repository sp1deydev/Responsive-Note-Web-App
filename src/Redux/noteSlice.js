import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { formatDisplayDate } from "../Common/formatDate";
import { handleLocalStorage } from "../Common/handleLocalStorage";
export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        allNotes: [],
        filterNotes: [],
    },
    reducers: {
        loadData: (state, action) => {
            state.allNotes = action.payload;
            state.filterNotes = [...state.allNotes]
        },
        loadFilterData: (state, action) => {
            const { search, marked } = action.payload;
            let filterData = JSON.parse(JSON.stringify(state.allNotes));
            console.log(action.payload);
            if(marked) {
                filterData = JSON.parse(JSON.stringify(state.allNotes)).filter((note) => note.isMarked === marked);
            }
            console.log(filterData);
            if (search) {
                alert(search);
            }
            state.filterNotes = filterData;
        },
        add: (state, action) => {
            const date = new Date();
            const newNote = {
                id: uuidv4(),
                content: action.payload,
                date: formatDisplayDate(date),
                isMarked: false,
            }
            state.allNotes.push(newNote);
            handleLocalStorage.set('notes', state.allNotes)
        },
        edit: (state, action) => {
            const {id, content} = action.payload;
            const index = state.allNotes.findIndex(note => note.id === id)
            state.allNotes[index].content = content;
            handleLocalStorage.set('notes', state.allNotes)
        },
        delete: (state, action) => {
            const index = state.allNotes.findIndex(note => note.id === action.payload)
            state.allNotes.splice(index, 1);
            handleLocalStorage.set('notes', state.allNotes)
        },
        toggleMark: (state, action) => {
            const index = state.allNotes.findIndex(note => note.id === action.payload)
            state.allNotes[index].isMarked =  !state.allNotes[index].isMarked;
            handleLocalStorage.set('notes', state.allNotes)
        },
    },
})