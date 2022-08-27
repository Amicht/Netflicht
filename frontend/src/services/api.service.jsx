const development = true ;  // *** change to false on production ***
const serverURL = development? 'http://localhost:3001': ""; 
const JWTKey = 'JWT';
const USERKEY = "user-data";

const METHODS = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE"
}

const ENDPOINTS = {
    users: serverURL + '/api/users/',
    watchList: serverURL + '/api/users/list/',
    movies: serverURL + '/api/movies/',
    logo: serverURL + '/api/assets/logo.png'
}

const getTokenFromStorage = () =>  JSON.parse(window.localStorage.getItem(JWTKey)) || "";
const setTokenToStorage = token =>  window.localStorage.setItem(JWTKey, JSON.stringify(token));
const getUserFromStorage = () =>  JSON.parse(window.localStorage.getItem(USERKEY)) || "";
const setUserToStorage = user =>  window.localStorage.setItem(USERKEY, JSON.stringify(user));

const getData = (path) => fetch(path, {
    method:METHODS.GET,
    headers: {
        "Content-type": 'application/json',
        'Authorization': "Bearer "+ getTokenFromStorage()
    }
});
const postData = (path ,data) => fetch(path, {
    method:METHODS.POST,
    headers: {
        "Content-type": 'application/json',
        'Authorization': "Bearer "+ getTokenFromStorage()
    },
    body: JSON.stringify(data)
});
const deleteData = (path) => fetch(path, {
    method:METHODS.DELETE,
    headers: {
        "Content-type": 'application/json',
        'Authorization': "Bearer "+ getTokenFromStorage()
    }
});

const fixMoviesData = movies => development? movies.map(m => {return {...m,img:serverURL+ m.img }}): movies;

const getUsers = () => fetch(ENDPOINTS.users).then(res => res.json());
const getUserData = (userId) => fetch(ENDPOINTS.users + userId).then(res => res.json())
    .then(res => { setTokenToStorage(res.token); setUserToStorage(res.user); })
const getMovies = () => getData(ENDPOINTS.movies).then(res => res.json()).then(fixMoviesData);
const addMovieToWatchList = (movieId) => postData(ENDPOINTS.watchList + movieId, "").then(res => res.json());
const removeMovieFromWatchList = (movieId) => deleteData(ENDPOINTS.watchList + movieId, "").then(res => res.json());
const getLogoImageSrc= () => ENDPOINTS.logo;


export {
    getUsers,
    getUserData,
    getMovies,
    addMovieToWatchList,
    removeMovieFromWatchList,
    getLogoImageSrc
}
