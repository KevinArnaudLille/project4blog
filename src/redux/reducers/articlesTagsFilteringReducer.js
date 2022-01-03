const INITIAL_STATE = {
    tagsListToDisplay :[]
}

function articlesTagsFilteringReducer(state = INITIAL_STATE, { type, payload }) {

    console.log(state.tagsListToDisplay);
    let newTagsList = state.tagsListToDisplay;

    switch (type) {
        case "ADDFILTERTAG":
            newTagsList.push(payload);
            break;


        case "REMOVEFILTERTAG":
            newTagsList = newTagsList.filter(item => item !== payload);
            break;


        case "RESETFILTERTAG":
            newTagsList = [];
            break;
    }
    return {
        ...state,
        tagsListToDisplay: newTagsList
    }
}

export default articlesTagsFilteringReducer;