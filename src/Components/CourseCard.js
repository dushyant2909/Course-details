import React, { useState } from "react";
import './CourseCard.css';
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";


function CourseCard(props) {
    const [clickReadMore, setReadMore] = useState(false);
    const [likeStatus, setlikeStatus] = useState(false);
    const courseData = props.courseData;

    function clickHandler() {
        setReadMore(!clickReadMore);
    }

    function heartClickHandler() {
        setlikeStatus(!likeStatus);
    }

    const shortDescription = `${courseData.description.substring(0, 150)}..... `;

    return (
        <div className={`card text-light course-card ${clickReadMore ? "expanded" : ""}`}>
            <div className="card-img-top">
                <img className="course-image" src={courseData.image.url} alt={courseData.title} />
            </div>
            <div>
                <button className="btn like-btn" onClick={heartClickHandler}>{likeStatus ? < FcLike /> : <AiOutlineHeart />}</button>
            </div>
            <div className="card-body">

                <div className="card-title"><h5>{courseData.title}</h5></div>
                <p className="card-text">
                    {clickReadMore ? courseData.description : shortDescription}
                    <span className="read-more" onClick={clickHandler}>
                        {clickReadMore ? "Show Less" : "Read more"}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default CourseCard;
