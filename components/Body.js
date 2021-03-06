import Search from "./Search"
import { useState } from "react"

function Body() {
    const [search, setSearch] = useState("")
    return (
        <section className="ml-24 bg-black py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5">
            <Search search={search} setSearch={setSearch} />
        </section>
    )
}

export default Body
