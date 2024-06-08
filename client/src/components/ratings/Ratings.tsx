import React, { useState } from 'react';

type RatingsProps = {
    initialRating?: number;
    rating?: number;
    onRate?: (rating: number) => void;
    readOnly?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
};

const sizeMap = {
    xs: 10,
    sm: 16,
    md: 22,
    lg: 32,
};

function Ratings({ initialRating = 0, rating, onRate, readOnly = false, size = 'sm' }: RatingsProps) {
    const totalStars = 5;
    const [internalRating, setInternalRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleClick = (ratingValue: number) => {
        if (!readOnly) {
            if (onRate) {
                onRate(ratingValue);
            }
            setInternalRating(ratingValue);
        }
    };

    const displayRating = rating !== undefined ? rating : internalRating;
    const starSize = sizeMap[size];

    return (
        <div style={{ width: 'max-content' }}>
            {[...Array(totalStars)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        {!readOnly && (
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => handleClick(ratingValue)}
                                style={{ display: 'none' }}
                            />
                        )}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={ratingValue <= (hover || displayRating) ? "black" : "white"}
                            stroke={ratingValue <= (hover || displayRating) ? "black" : "black"}
                            width={starSize}
                            height={starSize}
                            onMouseEnter={() => !readOnly && setHover(ratingValue)}
                            onMouseLeave={() => !readOnly && setHover(0)}
                            style={{ cursor: readOnly ? 'default' : 'pointer' }}
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </label>
                );
            })}
        </div>
    );
}

export default Ratings;
