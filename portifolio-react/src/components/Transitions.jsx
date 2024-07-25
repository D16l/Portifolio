import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const TransitionHome = ({ src, alt, to, width, height }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleAnimationEnd = () => {
        document.body.classList.remove('animate__animated', 'animate__fadeOutUpBig');
        setIsAnimating(false);
        navigate(to);
    };

    const startAnimation = () => {
        document.body.classList.add('animate__animated', 'animate__fadeOutUpBig');
        setIsAnimating(true);
        setTimeout(handleAnimationEnd, 700);
    }

    return (
        <div>
            <img
                src={src}
                alt={alt}
                onClick={startAnimation}
                style={{ cursor: 'pointer', width: width, height: height }} 
            />
        </div>
    );
};

export default TransitionHome;
