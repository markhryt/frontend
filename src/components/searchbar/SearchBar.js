function SearchBar(){
    return(
        <div>
            <form onSubmit={()=>(console.log('message'))}>
                <input type="text" placeholder="Search.." id="search"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchBar;