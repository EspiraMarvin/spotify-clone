function Search({search, setSearch}) {
    return (
        <div className="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
            <div className="flex-shrink-0 w-4 h-4 border-2 rounded-full animate-pulse"></div>
            <input type="text" 
                value={search} onChange={(e) => setSearch(e.target.value)}
                className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs" 
                placeholder="Search..."
             />
        </div>
    )
}

export default Search
