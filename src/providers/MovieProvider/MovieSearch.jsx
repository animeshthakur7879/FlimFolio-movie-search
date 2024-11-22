const fetchSearch = async (movieName) =>{
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${movieName}`)
    const data = await res.json()
    return data.results
}

export default fetchSearch