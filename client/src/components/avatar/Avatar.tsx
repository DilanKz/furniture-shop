import React from 'react';

type AvatarProps = {
    src?: string;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
};

const sizeMap = {
    sm: 40,
    md: 60,
    lg: 80,
};

function Avatar({src, name = '', size = 'sm', color = '#ccc'}: AvatarProps) {
    const avatarSize = sizeMap[size];
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

    const sizeClasses = {
        sm: 'w-10 h-10 text-sm',
        md: 'w-16 h-16 text-base',
        lg: 'w-20 h-20 text-lg',
    };


    return (
        <div
            className={`rounded-full flex items-center justify-center overflow-hidden ${sizeClasses[size]} ${src ? '' : color} text-white font-bold uppercase`}
            style={{
                width: avatarSize,
                height: avatarSize,
                borderRadius: '50%',
                backgroundColor: src ? 'transparent' : color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                fontSize: avatarSize / 2,
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }}>
            {src ? (
                <img
                    src={src}
                    alt={name}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
            ) : (
                <span>{initials}</span>
            )}
        </div>
    );
}

export default Avatar
