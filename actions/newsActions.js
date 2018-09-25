import axios from 'axios'

const apiKeyGloboNews = '8f368a00d050407d94922fd2c6e2aa45'

export const FETCH_NEWS_BEGIN = 'FETCH_NEWS_BEGIN'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'

export const fetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN
})

export const fetchNewsSucess = news => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news }
})

export const fetchNewsFailure = error => ({
  type: FETCH_NEWS_FAILURE,
  paylod: { error }
})

export function fetchNews () {
  return dispatch => {
    dispatch(fetchNewsBegin())
    return axios.get(`https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${apiKeyGloboNews}`)
      .then(response =>
        dispatch(fetchNewsSucess(response))
      )
      .catch(error => dispatch(fetchNewsFailure(error)))
  }
}
