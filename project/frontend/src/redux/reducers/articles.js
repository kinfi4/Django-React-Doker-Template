import axios from "axios";
import {BASE_URL} from "../../config";


axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


const FETCH_ARTICLES = 'FETCH_ARTICLES'

const initialState = {
    articles: []
}

export const fetchArticles = (dispatch) => {
    axios.get(BASE_URL + '/api/articles')
        .then(res => dispatch({type: FETCH_ARTICLES, payload: res.data}))
}


export const articlesReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_ARTICLES:
            return {articles: action.payload.map(el => { return {...el, preview_image: BASE_URL + el.preview_image} })}
        default:
            return state
    }
}
