import React , {useState ,  useRef} from "react";

function Header(){
const[menuOpen , setMenuOpen] = useState(false)
const [searchValue, setSearchValue] = useState("");
const [searchFocused, setSearchFocused] = useState(false);
const searchInputRef = useRef(null);

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log("search:", searchValue.trim());
  // call your actual search function here
};

const handleSearchClear = () => {
  setSearchValue("");
  searchInputRef.current?.focus();
};


    return(
        
              <div className="header">
                <h1 className="logo" >VELYN</h1>
                <ul  className={menuOpen ? "links-open" : "links" } >
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
	<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
	<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
</svg></a></li> 
              <li> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-category-plus">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M4 4h6v6h-6v-6" />
	<path d="M14 4h6v6h-6v-6" />
	<path d="M4 14h6v6h-6v-6" />
	<path d="M14 17h6m-3 -3v6" />
</svg></a> </li>   
                 <li className="sb-list-item">
  <form
    className={`sb-wrapper ${searchFocused ? "sb-focused" : ""}`}
    onSubmit={handleSearchSubmit}
    role="search"
  >
    <button type="submit" className="sb-icon-btn" aria-label="Search" tabIndex={-1}>
      <svg className="sb-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>

    <input
      ref={searchInputRef}
      type="text"
      className="sb-input"
      placeholder="Search products..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onFocus={() => setSearchFocused(true)}
      onBlur={() => setSearchFocused(false)}
      aria-label="Search products"
    />

    {searchValue && (
      <button type="button" className="sb-clear-btn" aria-label="Clear search" onClick={handleSearchClear}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    )}

    <span className="sb-glow" aria-hidden="true" />
  </form>
</li>    
                {/* <li>  <span className="material-symbols-outlined">search</span></li>     */}
                <li className="cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart preview-icon"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg></li>
<li><button class="button button--pan"><span>login</span></button></li>


</ul>
<button id="menu" onClick={()=>setMenuOpen(!menuOpen)}>☰</button>

                </div>
    )
};
export default Header;