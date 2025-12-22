import { useState } from 'react';

function Newsingle(){
    const [currentVideo, setCurrentVideo] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    
    const videos = [
        "https://www.youtube.com/embed/5Ozjel72yjQ",
        "https://www.youtube.com/embed/5dA094oAy-g",
        "https://www.youtube.com/embed/QZfH7cFp3Ys"
    ];

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        setAutoplay(false);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
        setAutoplay(false);
    };

    const handleWatchNow = () => {
        setAutoplay(true);
    };

    return(
        <section className="bg-theme-black py-16">
            <div className="w-full">
                
                
                <div className="relative w-full">
                    {/* Video Container */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`${videos[currentVideo]}${autoplay ? '?autoplay=1&controls=0&modestbranding=1&rel=0' : '?controls=0&modestbranding=1&rel=0'}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <h3 className="text-2xl font-bold text-theme-red uppercase mb-2">THE NEW SINGLE</h3>
                            <h1 className="text-6xl font-bold text-theme-red uppercase mb-6">CITY WALL</h1>
                            <button 
                                onClick={handleWatchNow}
                                className="bg-theme-red text-black px-8 py-3 font-bold uppercase hover:bg-theme-yellow-hover transition duration-300 pointer-events-auto"
                            >
                                WATCH NOW
                            </button>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-6">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentVideo(index)}
                                className={`w-3 h-3 rounded-full transition duration-300 ${
                                    currentVideo === index ? 'bg-theme-red' : 'bg-gray-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsingle;