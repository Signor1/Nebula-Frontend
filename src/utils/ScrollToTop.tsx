import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { animateScroll } from "react-scroll";

type ScrollToTopOptions = {
    duration: number;
}

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollToTopOptions: ScrollToTopOptions = {
            duration: 0,
        };
        (animateScroll as { scrollToTop: (options: ScrollToTopOptions) => void }).scrollToTop(scrollToTopOptions);
    }, [pathname]);

    return null;
}

export default ScrollToTop