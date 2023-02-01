import React from "react";
import { useEffect, useState } from "react";
import {ReactComponent as Star} from '../assets/icons/star.svg';
import './Reviews.css';

function Reviews(){

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
        .then(response => response.json())
        .then(data => setReviews(data.reviews))
        .catch(error => console.error(error));
    }, [])

    const RatingStars = (props) => {
        return(
            <span>
                {[...new Array(Math.floor(props.count))].map((a) => {
                    return (
                        <Star key={a}/>
                    );
                })}
                {!Number.isInteger(props.count) && <Star /> }
            </span>
        )
    };

    const cards = reviews.filter((review, index) => {
        return review.rating > 4.5 && review.comment !== "" && index < 4;
    }).map((topReview) => {
         return (
                <article key={topReview.username}>
                    <RatingStars count={topReview.rating} />
                    <div>
                        <img src={topReview.userImg} alt={topReview.username} />
                        <p>{topReview.username}</p>
                    </div>
                    <h5>{topReview.comment}</h5>
                </article>
            );
    })

    return(
        <section id="reviews" className="bg-primary-light">
            <h1>Testemonials</h1>
            <div>{cards}</div>
        </section>
    );
}

export default Reviews;