## Netflicht Server

- Add searies to fake db.

### Cinema City movies DB Scrap Function

```
const movies = [];
    document.querySelectorAll('.col-lg-3.col-md-4.col-sm-4.col-6.movie-thumb').forEach(m => {
    movie = {
        img:m.querySelector('div .img-responsive.flip-thumb').src,
        name: m.querySelector('h2').innerHTML,
        type: "movie",
        description: m.querySelector('.flip_content').innerHTML,
        length: +m.querySelectorAll('.flipcontent .flip-link')[1].querySelector('span').innerHTML,
        year: m.querySelectorAll('.flipcontent .flip-link')[2].querySelector('span').innerHTML
    }
    movies.push(movie)
})

window.localStorage.setItem("movies", JSON.stringify(movies), null, 4)
```

### Disney searies DB Scrap Function

```
const seariesDb = [];
document.querySelectorAll('._1K_nduHspHzl7lSOnX3Q5m.tray-container').forEach(g => {
    const genre = g.querySelector('h2').innerHTML;
    g.querySelectorAll('.swiper-slide').forEach(s => {
        const searies = {
            trailer: "",
            genre: genre,
            name: s.querySelector('img').alt,
            img: s.querySelector('img').src,
            type: "searies",
            year:"",
            length:"",
            description:""
        }
        seariesDb.push(searies)
    })
})

window.localStorage.setItem("seariesDb",JSON.stringify(seariesDb), 4)
```