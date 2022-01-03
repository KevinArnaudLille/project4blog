import { useEffect } from 'react';

const INITIAL_STATE = {
  tutoArticleData: {}
}

// Fetch local JSON
INITIAL_STATE.tutoArticleData = require('./tutoArticleData.json');
console.log(INITIAL_STATE.tutoArticleData);

function tutoReducer(state = INITIAL_STATE) {

  return state

}

export default tutoReducer;