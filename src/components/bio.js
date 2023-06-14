import React from 'react';

const Bio = ({ author, description, avatar }) => {
    return (
        <div className="flex items-center">
            {avatar && (
                <img
                    src={avatar}
                    alt={author}
                    className="w-12 h-12 rounded-full mr-4"
                />
            )}
            <div>
                <h3 className="text-lg font-bold">{author}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
};



export default Bio;
