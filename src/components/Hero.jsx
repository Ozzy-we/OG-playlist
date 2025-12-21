function Hero() {
    return(
        <section className="flex items-center justify-center min-h-screen -mt-50">
            <div className="flex items-center flex-col  justify-center text-center">
                <img src="/Top_Album_LogoNew.svg" alt="Band Logo" className="w-64 h-64 mb-0" />
                <h1 className="text-3xl text-theme-red font-bold">
                    AVAILABLE EVERYWHERE NOW
                </h1>
                <div className="flex gap-4 mt-10">
                    <button className="bg-theme-yellow text-theme-black px-4 py-2 font-bold hover:bg-theme-yellow-hover transition duration-300" >
                        SHOP NOW
                    </button>
                    <button className="bg-theme-yellow text-theme-black px-4 py-2 font-bold hover:bg-theme-yellow-hover transition duration-300">
                        LISTEN NOW
                    </button>
                    <button className="bg-theme-yellow text-theme-black px-4 py-2 font-bold hover:bg-theme-yellow-hover transition duration-300">
                        TOUR
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero;