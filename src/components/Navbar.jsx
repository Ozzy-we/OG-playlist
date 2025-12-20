function Navbar(){
    return(
        <nav className="bg-theme-black px-8 py-6 flex justify-center items-center font-sans">
            <ul className="flex gap-12 list-none">
                <li><a href="#tour" className="text-theme-red text-3xl font-semibold tracking-wide uppercase">Tour</a></li>
                <li><a href="#merch" className="text-theme-red text-3xl font-semibold tracking-wide uppercase">Merch</a></li>
                <li><a href="#music" className="text-theme-red text-3xl font-semibold tracking-wide uppercase">Music</a></li>
                <li><a href="#video" className="text-theme-red text-3xl font-semibold tracking-wide uppercase">Video</a></li>
            </ul>
            
                
        </nav>
        
        
    )
}
export default Navbar;