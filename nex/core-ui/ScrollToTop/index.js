import { ArrowUpIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const heightToHidden = 250; 

        const listenToScroll = () => {
            setIsVisible(window.scrollY > heightToHidden);
        };

        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <div>
            {isVisible && (
                <button 
                    onClick={goToTop} 
                    className="inline-flex nx-btn-primary nx-btn-primary:hover p-2 rounded-full shadow-lg group"
                >
                    <ArrowUpIcon strokeWidth={2} className="h-7 w-7 animate-bounce duration-1000 transition-all group-hover:animate-none" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
