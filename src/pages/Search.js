import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";

function Search({ hideButtons = false }) {
    const [, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        console.log('You have just searched ', input);
        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="input_search" />
                <input placeholder="Search Google or type URL here" type="text" width="200" value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {(!hideButtons) ? (
                <div className="search_buttons">
                    <Button variant="outlined" onClick={search} type="submit">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lukcy</Button>
                </div>
            ) : (
                    <div className="search_buttons">
                        <Button variant="outlined" onClick={search} type="submit" className="search_buttonsHidden">Google Search</Button>
                        <Button variant="outlined" className="search_buttonsHidden">I'm Feeling Lukcy</Button>
                    </div>
                )
            }
        </form>
    )
}

export default Search
