import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // LIVE API call
    const { data } = useGoogleSearch(term);
    // console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPageHeader">
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="data:image/png;base64,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"
                        alt="google"
                    />
                </Link>
                <div className="searchPage_HeaderBody">
                    <Search hideButtons={true} />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all" >All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news" >News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/image" >Image</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping" >Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps" >Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more" >More</Link>
                            </div>
                            <div className="searchPage_optionsRight">
                                <div className="searchPage_option">
                                    <Link to="/settings" >Settings</Link>
                                </div>
                                <div className="searchPage_option">
                                    <Link to="/tools" >Tools</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {true && (
                <div className="searchPage_Results">
                    <p className="searchPage_ResultCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
                    {data?.items.map(item => (
                        <div className="searchPage_Result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage_Result_image"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt="image"
                                    />
                                )}
                                {item.displayLink}
                            </a>
                            <a href={item.link} className="searchPage_ResultTitle">
                                <h4 >
                                    {item.title}
                                </h4>
                            </a>
                            <p className="searchPage_ResultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            <div className="searchPageBody">

            </div>
        </div>
    )
};
export default SearchPage
