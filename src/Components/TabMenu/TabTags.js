// <<<<< Tab menu of tags used to filter displayed article on Home page >>>>>

import React from 'react'

// React-redux hooks importation
import { useSelector, useDispatch } from 'react-redux';



export default function TabTags() {

    // Stored data fetching
    const { tagsListToDisplay, articlesTags } = useSelector(state => ({
        ...state.articlesTagsFilteringReducer,
        ...state.articlesDbReducer
    }))

    // Modify applied filter tags
    const dispatch = useDispatch();
    const addTag = (tag) => {
        dispatch({
            type: "ADDFILTERTAG",
            payload: tag
        })
    }
    const removeTag = (tag) => {
        dispatch({
            type: "REMOVEFILTERTAG",
            payload: tag
        })
    }

    return (
        <>
            {/* title to describe to user component utility */}
            <div className='bg-wave-2 pl-1'>
                Trier par tags:
            </div>

            {/* TAGS */}
            <div className='text-3xl bg-wave-5 overflow-x-auto flex flex-nowrap px-1'>

                {/* For all unique tag ... */}
                {articlesTags.map(tag => {

                    // ... if tag has been clicked ...
                    if (tagsListToDisplay.includes(tag)) {
                        // ... display tag in blod and make click remove tag from display list ...
                        return (
                            <button key={tag} className='m-1 order-1 text-wave-1 font-bold italic' onClick={() => removeTag(tag)}>{tag}</button>
                        )
                    } else {
                        // ... else display tag normal and make click add tag
                        return (
                            <button key={tag} className='m-1 order-2 italic' onClick={() => addTag(tag)}>{tag}</button>
                        )
                    }
                })}
            </div>
        </>
    )
}