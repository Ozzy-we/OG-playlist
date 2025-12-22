import { useState } from 'react';

function Newsingle(){
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const videos = [
        "https://www.youtube.com/embed/5Ozjel72yjQ",
        "https://www.youtube.com/embed/5dA094oAy-g",
        "https://www.youtube.com/embed/QZfH7cFp3Ys"
    ];

    const videoTitles = [
        "CITY WALL",
        "DRUM SHOW",
        "THE CONTRACT"
    ];

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        setIsPlaying(false);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
        setIsPlaying(false);
    };

    const handleWatchNow = () => {
        setIsPlaying(true);
    };

    return(
        <section className="bg-theme-black py-8 md:py-16">
            <div className="w-full px-4">
                
                
                <div className="relative w-full">
                    {/* Video Container */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`${videos[currentVideo]}${isPlaying ? '?autoplay=1&controls=1' : '?controls=0&modestbranding=1&rel=0'}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        
                        {/* Text Overlay */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                                <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-theme-red uppercase mb-2">THE NEW SINGLE</h3>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-theme-red uppercase mb-4 md:mb-6">{videoTitles[currentVideo]}</h1>
                                <button 
                                    onClick={handleWatchNow}
                                    className="bg-theme-red text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold uppercase hover:bg-theme-yellow-hover transition duration-300 pointer-events-auto"
                                >
                                    WATCH NOW
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-6">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => { setCurrentVideo(index); setIsPlaying(false); }}
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