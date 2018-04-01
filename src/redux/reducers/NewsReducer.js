import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { FETCH_NEWS, FETCH_TOP_HEADLINES } from '../actions'

const INITIAL_STATE = {
    loading: true,
    status: '',
    items: [],
    topNews: [],
    topHeadlines: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){

        case `${FETCH_NEWS}_PENDING` :
            return {
                ...state,
                loading: true
            }

        case `${FETCH_NEWS}_FULFILLED` :
            if (action.payload.status == 200){
                return {
                    ...state,
                    loading: false,
                    status: action.payload.data.status,
                    items: action.payload.data.articles,
                    topNews: action.payload.data.articles.shift()

                }
            }

        case `${FETCH_NEWS}_REJECTED` :
            return {
                ...state,
                loading: false
            }

        case `${FETCH_TOP_HEADLINES}_PENDING` :
            return {
                ...state,
                loading: true
            }

        case `${FETCH_TOP_HEADLINES}_FULFILLED` :
            if (action.payload.status == 200){
                return {
                    ...state,
                    loading: false,
                    status: action.payload.data.status,
                    topHeadlines: action.payload.data.articles

                }
            }

        case `${FETCH_TOP_HEADLINES}_REJECTED` :
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}