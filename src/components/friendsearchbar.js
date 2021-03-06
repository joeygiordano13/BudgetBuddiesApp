import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

export default class FriendSearchBar extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => { 
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
    

        return (
            <SearchBar
                placeholder="Search for Budget Buddies..."
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}