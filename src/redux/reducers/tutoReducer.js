// Unique key generation
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  tutoArticleData: [],
  tutoArticlesTags:[]
}

// Fetch local JSON and add unique id
INITIAL_STATE.tutoArticleData = require('./tutoArticleData.json');
INITIAL_STATE.tutoArticleData.forEach(obj => {
  obj.uid = uuidv4()
});
console.log(INITIAL_STATE.tutoArticleData);

// Init tags list from all articles
let fetchAllArticleTags=[];
for (let article of INITIAL_STATE.tutoArticleData){
  fetchAllArticleTags=[...fetchAllArticleTags,...article.tags]
}
INITIAL_STATE.tutoArticlesTags = [...new Set(fetchAllArticleTags)];


function tutoReducer(state = INITIAL_STATE) {

  return state

}

export default tutoReducer;