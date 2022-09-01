## Netflicht


### [Live App](https://netflicht.herokuapp.com/)

### Description:

An end-to-end Netflix-clone web app, using MERN as the development framework.

### About The Project:

I wanted to do this since I`ve started to learn 'react', It was a great exercise, mainly on the frontend  UI.

As you can asume, some data was needed for the app functionality and ui, so in order to create the fake data I used the following:

- The data was generated menually by web-scrapping from number of sites, with small fixes by hand, and you can see it in `./server/generateData/` folder.
- I used Movie-Trailers from Youtube, instead of uploading real movies to server, so some of the data may not be avaialble.

In order to get right into the app, I didnt make the login/register functionality available. instead, the user will automatically get inside the and choose one of five existing profiles, and all activity in that profile will be saved and display accordingly (user 'watch-list').

The project was deployed in 'heroku'.

### Pages:
#### Sign In:
Display all 5 existing user profiles, click on on and navigate to om page.

#### Home / Movies / Searies:
Display all relevant movies and enable to watch and apply all activity by click, such as:
- Movie year / length.
- Get more/less info about the movie description.
- Add / remove movie from profile's watch-list.
- Play movie.

#### Watch List:
Display all the movies the user added to watch-list, oederd by movies / searies.

### Frameworks / Dependencies:
#### Front-end
- react.js
- bootstrap
- bootstrap icons

#### Back-end
- node.js
- express
- dotenv
- json-web-token
- mongoose

#### Database
- mongoDb


### API Docs:
Server Endpoint - https://netflicht.herokuapp.com/
![](/frontend/api-doc/1.jpg)
![](/frontend/api-doc/2.jpg)






