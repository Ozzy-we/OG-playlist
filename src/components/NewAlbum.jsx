function NewAlbum(){
    return (
        <section className="w-full relative">
            <img 
                src="/new_album.jpg" 
                alt="New Album" 
                className="w-full block"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-4 md:pl-8 lg:pl-16">
                <div className="bg-black bg-opacity-80 p-3 md:p-4 text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-theme-red uppercase">BREACH</h2>
                    <p className="text-xs md:text-sm text-theme-red mb-3 md:mb-4 uppercase">AVAILABLE NOW</p>
                    <button className="bg-theme-red text-black px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold uppercase hover:bg-theme-yellow-hover transition duration-300">
                        LISTEN NOW
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewAlbum;