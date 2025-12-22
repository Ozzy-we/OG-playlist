function Navbar(){
    return(
        <nav className="bg-theme-black px-4 md:px-8 py-4 md:py-6 flex justify-center items-center font-sans">
            <ul className="flex gap-4 md:gap-8 lg:gap-12 list-none flex-wrap justify-center">
                <li><a href="#tour" className="text-theme-red text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide uppercase">Tour</a></li>
                <li><a href="#merch" className="text-theme-red text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide uppercase">Merch</a></li>
                <li><a href="#music" className="text-theme-red text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide uppercase">Music</a></li>
                <li><a href="#video" className="text-theme-red text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide uppercase">Video</a></li>
            </ul>
            
                
        </nav>
        
        
    )
}
export default Navbar;