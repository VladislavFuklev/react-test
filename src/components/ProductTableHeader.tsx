import React from 'react';

export const ProductTableHeader: React.FC = () => {
    return (
        <thead>
            <tr>
                <th className='font-bold text-left px-4 py-2 text-white'>ID</th>
                <th className='font-bold text-center px-4 py-2 text-white'>Название</th>
                <th className='font-bold text-left px-4 py-2 text-white'>Цена</th>
                <th className='font-bold text-right px-4 py-2 text-white'>Изображение</th>
            </tr>
        </thead>
    );
};
