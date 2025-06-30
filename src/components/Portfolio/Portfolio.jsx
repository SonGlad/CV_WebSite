import { PortfolioStyled } from "./Portfolio.styled";
import BackgroundImg from "../../images/images/bg_image.jpg";
import {ReactComponent as BookIcon} from "../../images/svg-icons/open-book.svg";
import { useData } from "../../hooks/useData";
import { useState } from "react";
import { openModalPortfolio, updatePortfolioModalData } from "../../redux/Modal/modal-slice";
import { useDispatch } from "react-redux";


export const PortfolioSection = () => {
    const dispatch = useDispatch();
    const {portfolioData} = useData();
    const [filterType, setFilterType] = useState('');
   

    const handleFilter = (type) => {
        setFilterType(type);
    };


    const filteredData = portfolioData.filter((item) => {
        switch (filterType) {
            case 'Individual':
                return item.type === 'individual';
            case 'Team':
                return item.type === 'team';
            case 'Commercial':
                return item.type === 'commercial';
            case 'Early':
                return true;
            default:
                return true;
        }
    }).sort((a, b) => {
        switch (filterType) {
            case '':
                return new Date(b.createdAt) - new Date(a.createdAt);
            default:
                return true;
        }
    });


    const openModal = (id) => {
        dispatch(updatePortfolioModalData(id));
        dispatch(openModalPortfolio())
    };


    return(
        <PortfolioStyled>
            <h1 className="potfolio-title"><span>My </span>Projects</h1>
            <ul className="filter-list">
                <li className="filter-item">
                    <button className="filter-button all-animation" type="button"
                        onClick={() => handleFilter('')}
                    >All
                    </button>
                </li>
                <li className="filter-item">
                    <button className="filter-button indi-animation" type="button" 
                        onClick={() => handleFilter('Individual')}
                    >Individual
                    </button>
                </li>
                <li className="filter-item">
                    <button className="filter-button team-animation" type="button" 
                    onClick={() => handleFilter('Team')}
                    >Team
                    </button>
                </li>
                <li className="filter-item">
                    <button className="filter-button team-animation" type="button" 
                    onClick={() => handleFilter('Commercial')}
                    >Commercial
                    </button>
                </li>
                <li className="filter-item">
                    <button className="filter-button early-animation" type="button" 
                        onClick={() => handleFilter('Early')}
                    >Early
                    </button>
                </li>
            </ul>
            <ul className="cols">
                {filteredData.map(({id, name, coverImage, type, description}, index) => (
                    <li key={`${id}-${index}`} className="col" style={{'--i': index + 1}}>
                        <div className="container">
                            <div className="front" style={{backgroundImage: 
                                `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                                url(${coverImage || BackgroundImg})`}}
                                >
                                <div className="inner">
                                    <p>{name}</p>
                                    <span>{type}</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>{description}</p>
                                    <button type="button" className="open-button" onClick={() => openModal(id)}>
                                        <BookIcon className="icon" width={24} height={24}/>
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
			</ul>
        </PortfolioStyled>
    )
};