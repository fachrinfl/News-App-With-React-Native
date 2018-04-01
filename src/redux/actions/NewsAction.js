import axios from 'axios'

const BASE_API_URL = 'https://newsapi.org/v2'

const API_KEY = 'd1ce30a31cf7499bb0538e08b7c4e60d'

export const FETCH_NEWS = 'FETCH_NEWS'
export const fetchNews = (page) => {
    return {
        type: FETCH_NEWS,
        payload: getNews(page)
    }
}

const getNews = (pageNews) => {
    const news_endpoint = `${BASE_API_URL}/everything?q=bitcoin&apiKey=${API_KEY}&pageSize=10&page=${pageNews}`
    return axios.get(news_endpoint)
        .then((respone) => {
            return respone
        })
        .catch((error) => {
            return error
        })
}

export const FETCH_TOP_HEADLINES = 'FETCH_TOP_HEADLINES'
export const fetchTopHeadLines = (page) => {
    return {
        type: FETCH_TOP_HEADLINES,
        payload: getTopHeadLines(page)
    }
}

const getTopHeadLines = (pageNews) => {
    const top_headlines_endpoint = `${BASE_API_URL}/top-headlines?country=us&apiKey=${API_KEY}&pageSize=5&page=${pageNews}`
    return axios.get(top_headlines_endpoint)
        .then((respone) => {
            return respone
        })
        .catch((error) => {
            return error
        })
}