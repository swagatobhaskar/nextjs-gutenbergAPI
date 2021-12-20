import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fetching: false,
    error: null,
    bookData: null,
    // id: null,
    // title: null,
    // authors: [],
    // translators: [],
    // subjects: [],
    // bookshelves: [],
    // languages: [],
    // copyright: false,
    // media_type: null,
    // formats: [],
    // download_count: null,
}

export const bookDetailSlice = createSlice({
    name: 'bookDetailSlice',
    initialState,
    reducers: {
        fetchBookDetail: (state, action) => {
            // show fetching = true
            // this reducer can stay as a empty function also
            return { ...state, fetching: true };
        },
        fetchBookDetailSuccess: (state, action) => {
            // show fetching = false and populate the states
            const bookData = action.payload;
            console.log(bookData);
            return { ...state, ...bookData, fetching: false };
        },
        fetchBookDetailError: (state, action) => {
            // catch error during get request
            return { ...state, fetching: false, error: action.payload  };
        },
    },
})

export const { fetchBookDetail, fetchBookDetailSuccess, fetchBookDetailError } = bookDetailSlice.actions

export default bookDetailSlice.reducer

/**
 * https://gutendex.com/books/<id>/
*/
