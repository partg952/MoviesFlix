let search_box = document.getElementById("search-box")
let search_button = document.getElementById("search-button")
let main = document.getElementById('discover')
let logo = document.getElementById("logo")
let num=0
logo.onclick=()=>{
    window.location.reload()
}
search_button.onclick = () => {
    search()
}
search_box.onchange=()=>{
    search()
}

function search(){
    if(search_box.value.length!=0){
        fetch('https://api.themoviedb.org/3/search/movie/?api_key=e1fa13c7e6a35b25826f92b2aea94264&query=' + search_box.value)
        .then(res => res.json())
        .then(blob => {
            while(main.firstChild){
                main.removeChild(main.firstChild)
            }
            for (let i = 0; i < blob.results.length; i++) {
                let div = document.createElement("div")
                let img = document.createElement('img')
                let name = document.createElement('p')
                main.appendChild(div)
                name.innerHTML = blob.results[i].title
                div.classList.add("class")
                div.onclick = () => {
                    sessionStorage.setItem('title', blob.results[i].title)
                    sessionStorage.setItem('id',blob.results[i].id)
                    window.location.href = "info.html"
                }
                div.appendChild(img)
                div.appendChild(name)
                img.src = "https://image.tmdb.org/t/p/w500" + blob.results[i].poster_path
                console.log(blob.results)
            }
    
            console.log(blob)
        }).catch(()=>{
	   num++
	if(num<=5){
	search();
	}	
            
        })
    }
    else{
        window.location.reload()
    }
}


fetch('https://api.themoviedb.org/3/discover/movie/?api_key=e1fa13c7e6a35b25826f92b2aea94264')
    .then(res => res.json())
    .then(blob => {
        for (let i = 0; i < blob.results.length; i++) {
            let div = document.createElement("div")
            let img = document.createElement('img')
            let name = document.createElement('p')
            main.appendChild(div)
            name.innerHTML = blob.results[i].title
            div.classList.add("class")
            div.onclick = () => {
                sessionStorage.setItem('title', blob.results[i].title)
                sessionStorage.setItem('id',blob.results[i].id)
                window.location.href = "info.html"
            }
            div.appendChild(img)
            div.appendChild(name)
            img.src = "https://image.tmdb.org/t/p/w500" + blob.results[i].poster_path
            console.log(blob.results)
        }

    })
