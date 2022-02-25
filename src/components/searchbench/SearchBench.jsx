import './searchBench.css';

export default function SearchBench() {

    return(
        <div className="search">
            <div className="search-wrapper">
                <input type="search" 
                placeholder="Search here"
                />
                <button className="userSearch">Search</button>
            </div>
        </div>
        
     )
}