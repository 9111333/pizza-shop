import React, { useState } from 'react';
import './PizzaHovers.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const PizzaHovers = ({ image1, image2 }) => {

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    const springProps = useSpring({ filter: hovered ? 'brightnenn(1.2)' : 'brightness(1)', config: { duration: 50, easeings: 'ease' } });

    return (
        <>
            <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <animated.div style={springProps}>
                    <img src={hovered ? image2 : image1} alt="hoverable image" />
                </animated.div>
            </div>
        </>
    );
};

export default PizzaHovers;








