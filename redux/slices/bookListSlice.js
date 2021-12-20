import { createSlice } from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    fetching: false,
    error: null,
    results: null,
}

export const bookListSlice = createSlice({
    name: 'bookListSlice',
    initialState,
    reducers: {
        fetchBookList: (state) => {
            // show fetching = true
            return { ...state, fetching: true };
        },
        fetchBookListSuccess: (state, action) => {
            // console.log("result::", resultsArr);
            const results = action.payload.bookList;
            return {
                ...state,
                fetching: false,
                error: null,
                ...results
            };
        },
        fetchBookListError: (state, action) => {
            // catch error during get request
            return { ...state, fetching: false, error: action.payload };
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
})

export const { fetchBookList, fetchBookListSuccess, fetchBookListError } = bookListSlice.actions

export default bookListSlice.reducer

/**
 * https://gutendex.com/books/
 * List of books query parameters: author_year_start ,author_year_end, copyright, ids, languages, mime_type, search, topic
 * 
 */