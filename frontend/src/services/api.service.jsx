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

// storage Management
const getTokenFromStorage = () =>  JSON.parse(window.sessionStorage.getItem(JWTKey)) || "";
const removeTokenFromStorage = () =>  window.sessionStorage.removeItem(JWTKey) || "";
const setTokenToStorage = token =>  window.sessionStorage.setItem(JWTKey, JSON.stringify(token));
const getUserFromStorage = () =>  JSON.parse(window.sessionStorage.getItem(USERKEY)) || "";
const removeUserFromStorage = () =>  window.sessionStorage.removeItem(USERKEY) || "";
const setUserToStorage = user =>  window.sessionStorage.setItem(USERKEY, JSON.stringify(user));
const exitAccount = () => {removeTokenFromStorage(); removeUserFromStorage(); }

// helpers
const fixMoviesData = movies => development? movies.map(m => {return {...m,img:serverURL+ m.img }}): movies;
const getLogoImageSrc = () => ENDPOINTS.logo;

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

const jsonify = res => res.json();
// api requests
const getUsers = () => fetch(ENDPOINTS.users).then(jsonify);
const getUserData = userId => fetch(ENDPOINTS.users + userId).then(jsonify)
    .then(res => { 
        setTokenToStorage(res.token); setUserToStorage(res.user); 
        return res.user; 
    })
const getMovies = () => getData(ENDPOINTS.movies).then(jsonify).then(fixMoviesData);
const addMovieToWatchList = movieId => postData(ENDPOINTS.watchList + movieId, {data:"fake-data"}).then(jsonify);
const removeMovieFromWatchList = movieId => deleteData(ENDPOINTS.watchList + movieId);


export {
    getUsers,
    getUserData,
    getMovies,
    getUserFromStorage,
    addMovieToWatchList,
    removeMovieFromWatchList,
    getLogoImageSrc,
    exitAccount
}
