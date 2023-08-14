import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Header, Form, Input, Button, Text, ButtonLabel } from './Searchbar.styled';

const Searchbar = ({submitSearch}) => {
    const [searchPhotoValue, setSearchPhotoValue] = useState('');
    const [keyword, setKeyword] = useState('keyword');

    const onChange=(event)=> {
        setSearchPhotoValue(event.target.value.toLowerCase());
        setKeyword(event.target.value);
    };

    const findPhoto=(event)=> {
        event.preventDefault();
        if (searchPhotoValue.trim() === '') {
            Notiflix.Notify.failure('Please, fill out the search form');
            return
        }
        submitSearch(searchPhotoValue);
        setSearchPhotoValue ('');
    }
        return (
            <Header>
                <Form id="search-form" onSubmit={findPhoto}>
                    <Input
                        type="text"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={onChange}
                        value={searchPhotoValue}
                    />
                    <Button type="submit">Search</Button>
                </Form>
                <Text>Image search by keyword: <ButtonLabel>{keyword}</ButtonLabel></Text>
            </Header>
        );
};

Searchbar.propTypes = {
    submitSearch: PropTypes.func,
};
export default Searchbar