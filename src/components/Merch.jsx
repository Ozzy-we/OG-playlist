function Merch(){
    return(
        <section className="bg-theme-black py-8 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-theme-red uppercase text-center mb-8 md:mb-12">MERCH</h2>
                
                <div className="flex justify-center gap-2 md:gap-4 my-8 md:my-16 flex-wrap md:flex-nowrap overflow-x-auto">
                    <img src="/merch1.png" alt="Merch Item" className="w-32 md:w-44 lg:w-60 h-auto flex-shrink-0" />
                    <img src="/merch2.png" alt="Merch Item" className="w-32 md:w-44 lg:w-60 h-auto flex-shrink-0" />
                    <img src="/merch3.png" alt="Merch Item" className="w-32 md:w-44 lg:w-60 h-auto flex-shrink-0" />
                    <img src="/merch4.png" alt="Merch Item" className="w-32 md:w-44 lg:w-60 h-auto flex-shrink-0" />
                    <img src="/merch5.png" alt="Merch Item" className="w-32 md:w-44 lg:w-60 h-auto flex-shrink-0" />
                </div>
                
                <div className="flex justify-center">
                    <button className="bg-theme-red text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold uppercase hover:bg-theme-yellow-hover transition duration-300">
                        SHOPPING NOW
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Merch;