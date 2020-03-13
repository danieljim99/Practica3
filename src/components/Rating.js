import '../styles/Rating.css';
import React from 'react';

const rating = (props) => {
    return (
        <div className="Rating">
            <img className="RatingStar" src={props.ratingAverage >= 1 ? "https://clipartart.com/images/all-star-clip-clipart.png" : "https://lh3.googleusercontent.com/proxy/oZ3ZNcotMtV4FTDc2aRtcF49pKHGmY-RoJDaPBLjzslYA9LD1b4O7aZeTwv_By06y8EYnsdFArnWqDMN4cS-BRWaKwuy609WnzulY1idG8MZlVo"} alt="Rating Star" onClick={props.rate ? props.rate.bind(this, 1) : null}/>
            <img className="RatingStar" src={props.ratingAverage >= 2 ? "https://clipartart.com/images/all-star-clip-clipart.png" : "https://lh3.googleusercontent.com/proxy/oZ3ZNcotMtV4FTDc2aRtcF49pKHGmY-RoJDaPBLjzslYA9LD1b4O7aZeTwv_By06y8EYnsdFArnWqDMN4cS-BRWaKwuy609WnzulY1idG8MZlVo"} alt="Rating Star" onClick={props.rate ? props.rate.bind(this, 2) : null}/> 
            <img className="RatingStar" src={props.ratingAverage >= 3 ? "https://clipartart.com/images/all-star-clip-clipart.png" : "https://lh3.googleusercontent.com/proxy/oZ3ZNcotMtV4FTDc2aRtcF49pKHGmY-RoJDaPBLjzslYA9LD1b4O7aZeTwv_By06y8EYnsdFArnWqDMN4cS-BRWaKwuy609WnzulY1idG8MZlVo"} alt="Rating Star" onClick={props.rate ? props.rate.bind(this, 3) : null}/> 
            <img className="RatingStar" src={props.ratingAverage >= 4 ? "https://clipartart.com/images/all-star-clip-clipart.png" : "https://lh3.googleusercontent.com/proxy/oZ3ZNcotMtV4FTDc2aRtcF49pKHGmY-RoJDaPBLjzslYA9LD1b4O7aZeTwv_By06y8EYnsdFArnWqDMN4cS-BRWaKwuy609WnzulY1idG8MZlVo"} alt="Rating Star" onClick={props.rate ? props.rate.bind(this, 4) : null}/> 
            <img className="RatingStar" src={props.ratingAverage === 5 ? "https://clipartart.com/images/all-star-clip-clipart.png" : "https://lh3.googleusercontent.com/proxy/oZ3ZNcotMtV4FTDc2aRtcF49pKHGmY-RoJDaPBLjzslYA9LD1b4O7aZeTwv_By06y8EYnsdFArnWqDMN4cS-BRWaKwuy609WnzulY1idG8MZlVo"} alt="Rating Star" onClick={props.rate ? props.rate.bind(this, 5) : null}/>  
        </div>
    );
};

export default rating;