function Hero() {
    return(
        <section className="flex items-center justify-center min-h-screen -mt-20 md:-mt-50 px-4">
            <div className="flex items-center flex-col justify-center text-center">
                <img src="/Top_Album_LogoNew.svg" alt="Band Logo" className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-0" />
                <h1 className="text-xl md:text-2xl lg:text-3xl text-theme-red font-bold mt-4">
                    AVAILABLE EVERYWHERE NOW
                </h1>
                <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10 justify-center">
                    <button className="bg-theme-yellow text-theme-black px-4 py-2 text-sm md:text-base font-bold hover:bg-theme-yellow-hover transition duration-300" >
                        SHOP NOW
                    </button>
                    <button className="bg-theme-yellow text-theme-black px-4 py-2 text-sm md:text-base font-bold hover:bg-theme-yellow-hover transition duration-300">
                        LISTEN NOW
                    </button>
                    <button className="bg-theme-yellow text-theme-black px-4 py-2 text-sm md:text-base font-bold hover:bg-theme-yellow-hover transition duration-300">
                        TOUR
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero;