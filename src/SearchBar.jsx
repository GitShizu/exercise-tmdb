export default ({inputValue, onSearch})=>{
    return(
        <div id="searchbar">
            <input type="text" 
            value={inputValue}
            onChange={(e)=> onSearch(e.target.value)}
            />
            <button>Search</button>
        </div>
    )
}