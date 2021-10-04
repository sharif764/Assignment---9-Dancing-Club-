import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const data = props.data;
    const { danceType, classTime, courseFee, details, courseDuration, img, requirements } = data;
    return (

        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top img-fluid w-75" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{danceType}</h5>
                        <p className="card-text">{details}</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );

};

export default Cart;