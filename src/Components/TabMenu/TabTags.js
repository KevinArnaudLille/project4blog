import React from 'react'

// React-redux methods importation
import { useSelector, useDispatch } from 'react-redux';

export default function TabTags() {

    // Stored data fetching
    const { tagsListToDisplay, tutoArticlesTags } = useSelector(state => ({
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
        <div className='bg-wave-2 pl-1'>
            Refine by tags:
        </div>
            <div className='text-3xl bg-wave-5 overflow-x-auto flex flex-nowrap px-1'>
                {tutoArticlesTags.map(tag => {

                    if (tagsListToDisplay.includes(tag)) {
                        return (
                            <button key={tag} className='m-1 text-wave-1 font-bold italic' onClick={() => removeTag(tag)}>{tag}</button>
                        )
                    } else {
                        return (
                            <button key={tag} className='m-1 italic' onClick={() => addTag(tag)}>{tag}</button>
                        )
                    }
                })}
            </div>
        </>
    )
}
