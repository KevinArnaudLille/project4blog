// <<<<< Data storage of articles from firebase >>>>>

// Unique key generation
import { v4 as uuidv4 } from 'uuid';

// Firebase modules importation
import { db } from '../../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";

const INITIAL_STATE = {
  articlesData: [],
  articlesTags: [],
  isDoneLoading: false
}

function articlesDbReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        articlesData: action.payload[0],
        articlesTags: action.payload[1],
        isDoneLoading: action.payload[2],
      }
    }

    case "RESETBOOL": {
      return {
        ...state,
        isDoneLoading: false
      }
    }

    default:
      return state
  }
}

export default articlesDbReducer;

// Function (using thunk) for firebase db fetching
export const fetchDbData = () => dispatch => {
  getDocs(collection(db, "articles")).then((querySnapshot) => {

    // Intermediates variables declaration
    let articlesData = [];
    let articlesTags = [];

    // Loop through the data and store it in array to display
    querySnapshot.forEach(element => {
      let data = element.data();
      articlesData = [...articlesData, data];
      articlesData.forEach(obj => {
        obj.uid = uuidv4()
      });
    });

    // Init tags list from all articles
    let fetchAllArticleTags = [];
    for (let article of articlesData) {
      fetchAllArticleTags = [...fetchAllArticleTags, ...article.tags]
    }
    articlesTags = [...new Set(fetchAllArticleTags)];

    dispatch({
      type: "LOADING",
      payload: [articlesData, articlesTags, true]
    })

  })
}