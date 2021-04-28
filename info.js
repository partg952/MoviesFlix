// const { Http2ServerRequest } = require("node:http2")

// const { Http2ServerRequest } = require("node:http2")

let title = sessionStorage.getItem('title')
let id = sessionStorage.getItem('id')
console.log(id)
let array = []
console.log(title)
document.title = title
let image_div = document.getElementById('image')
let image = document.getElementById('poster')
let about = document.getElementById('about')




fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=e1fa13c7e6a35b25826f92b2aea94264")
    .then(res => res.json())
    .then(blob => {
        console.log(blob)

        let header = document.createElement('h1')
        header.style.marginTop = "200px"
        header.style.marginLeft = "100px"


        about.appendChild(header)

        header.textContent = blob.title + "(" + blob.release_date + ")"
        let br = document.createElement('br')
        let overview = document.createElement('h2')
        about.appendChild(br)
        overview.textContent = "Overview: " + blob.overview
        let tagline = document.createElement('h2')
        about.appendChild(tagline)
        tagline.textContent = "Tagline: " + blob.tagline
        let link = document.createElement("a")
        link.style.color='blue'
        link.innerHTML = "https://imdb.com/title/" + blob.imdb_id
        link.href = "https://imdb.com/title/" + blob.imdb_id
        about.appendChild(link)
        let genre_div = document.createElement('div')
        genre_div.style.marginTop="10px"
        genre_div.style.display="flex"
        about.appendChild(genre_div)
        for(let i=0;i<blob.genres.length;i++){
            let p=document.createElement('p')
            genre_div.appendChild(p)
            p.innerHTML=blob.genres[i].name
            p.style.backgroundColor="yellow"
            p.style.width="120px"
            p.style.color="black"
            p.style.borderRadius="5px"
            p.style.margin="5px"
            p.style.display="flex"
            p.style.textAlign="center"
            p.style.alignItems="center"
            p.style.justifyContent="center"

        }
        let runtime = document.createElement('h2')
        runtime.textContent="Runtime: "+Math.round(blob.runtime/60)+" hours"
        about.appendChild(runtime)
        if(blob.backdrop_path == null){
            about.style.color = "black"
        }
        console.log(array)
        overview.style.marginLeft = "100px"
        tagline.style.marginLeft = "100px"
        link.style.marginLeft = "100px"
        genre_div.style.marginLeft = "100px"
        runtime.style.marginLeft="100px"
        about.appendChild(overview)
        image.src = "https://image.tmdb.org/t/p/w500" + blob.poster_path
        document.body.style.backgroundImage = "url(https://image.tmdb.org/t/p/w500" + blob.backdrop_path
    })