import React from 'react';

interface SearchInputProps {
    searchTerm: string;
    onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onSearchTermChange }) => {
    return (
        <input
            type='text'
            placeholder='Поиск...'
            value={searchTerm}
            onChange={onSearchTermChange}
            className='w-full p-2 mb-4 border rounded-md bg-slate-800 text-white'
        />
    );
};
