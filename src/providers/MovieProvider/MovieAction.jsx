const fetchTrending = async() => {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1")
    const data = await res.json()
    return data.results
}


export default fetchTrending
