
# react-netflix-clone

Complete [React](https://reactjs.org/) netflix UI build using [Firebase](https://firebase.google.com/) 
with complete sign-up, sign-in process.


## Acknowledgements

 - [React](https://reactjs.org/docs/getting-started.html)
 - [Firebase](https://firebase.google.com/)
 - [TMDB](https://www.themoviedb.org/)



## API Reference

#### Get all items

```http
https://www.themoviedb.org/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### API Requests

```http
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with_network=213`,
fetchTopRated: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`  
```



## Feedback

If you have any query or suggetions please reach me out at rushilkoundal1611@gmail.com.

