import Request from 'superagent'

const { REACT_APP_FLICKR_DEFAULT_SORT, REACT_APP_FLICKR_ENDPOINT, REACT_APP_FLICKR_API_KEY } = process.env

export const fetchResults = query => Request.get(REACT_APP_FLICKR_ENDPOINT).query({
  'api_key': REACT_APP_FLICKR_API_KEY,
  'method': 'flickr.photos.search',
  'format': 'json',
  'nojsoncallback': true,
  'per_page': 20,
  'page': 1,
  'extras': 'tags,description,machine_tags',
  'text': query,
  'sort': REACT_APP_FLICKR_DEFAULT_SORT
})
