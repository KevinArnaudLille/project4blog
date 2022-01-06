// Unique key generation
import { v4 as uuidv4 } from 'uuid';


import { db } from '../../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";

const INITIAL_STATE = {
  tutoArticleData: [],
  tutoArticlesTags: [],
  articlesData: [],
  articlesTags: [],
}

// Fetching firebase data
const Fetchdata = () => {
  getDocs(collection(db, "articles")).then((querySnapshot) => {

    // Loop through the data and store
    // it in array to display
    querySnapshot.forEach(element => {
      let data = element.data();
      INITIAL_STATE.articlesData = [...INITIAL_STATE.articlesData, data];
      INITIAL_STATE.articlesData.forEach(obj => {
        obj.uid = uuidv4()
      });
    });
    console.log(INITIAL_STATE.articlesData);

    // Init tags list from all articles
    let fetchAllArticleTags = [];
    for (let article of INITIAL_STATE.articlesData) {
      fetchAllArticleTags = [...fetchAllArticleTags, ...article.tags]
    }
    INITIAL_STATE.articlesTags = [...new Set(fetchAllArticleTags)];
  })
}
Fetchdata()

// Fetch local JSON and add unique id
INITIAL_STATE.tutoArticleData = require('./tutoArticleData.json');
INITIAL_STATE.tutoArticleData.forEach(obj => {
  obj.uid = uuidv4()
});

// Init tags list from all tutoarticles
let fetchAllTutoArticleTags = [];
for (let article of INITIAL_STATE.tutoArticleData) {
  fetchAllTutoArticleTags = [...fetchAllTutoArticleTags, ...article.tags]
}
INITIAL_STATE.tutoArticlesTags = [...new Set(fetchAllTutoArticleTags)];

function articlesDbReducer(state = INITIAL_STATE) {

  return state

}

export default articlesDbReducer;