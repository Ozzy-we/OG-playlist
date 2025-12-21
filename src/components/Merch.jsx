function Merch(){
    return(
        <section className="bg-theme-black py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold text-theme-red uppercase text-center mb-12">MERCH</h2>
                
                <div className="flex justify-center gap-4 my-16 flex-nowrap">
                    <img src="/merch1.png" alt="Merch Item" className="w-60 h-auto" />
                    <img src="/merch2.png" alt="Merch Item" className="w-60 h-auto" />
                    <img src="/merch3.png" alt="Merch Item" className="w-60 h-auto" />
                    <img src="/merch4.png" alt="Merch Item" className="w-60 h-auto" />
                    <img src="/merch5.png" alt="Merch Item" className="w-60 h-auto" />
                </div>
                
                <div className="flex justify-center">
                    <button className="bg-theme-red text-black px-8 py-3 font-bold uppercase hover:bg-theme-yellow-hover transition duration-300">
                        SHOPPING NOW
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Merch;