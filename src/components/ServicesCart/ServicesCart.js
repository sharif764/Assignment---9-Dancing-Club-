import React from 'react';
import './ServicesCart.css';
const ServicesCart = (props) => {
    const data = props.data;
    const { img, classTime, courseDuration, courseFee, danceType, details, requirements } = data;
    console.log(data);
    return (
        <div>
            <div>

                <div class="col">
                    <div class="card">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 class="card-title">{danceType}</h2>

                            <p class="card-text">{details}</p>
                            <br />
                            <div className="information">
                                <h5>Class Time: {classTime}</h5>
                                <h5>Course Duration: {courseDuration}</h5>
                                <h5>Requirements : {requirements}</h5>
                                <h5>Course Fee : {courseFee}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesCart;