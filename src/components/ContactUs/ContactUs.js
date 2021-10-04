import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1 className="text-center my-3">Contact Us</h1>
            <div className="text-center">
                <h4>We have No Office .That's why you cann't talk with us in ofline. </h4>
                <p>But we Have some contact number ,Facebook Group,Messenger group, Contact number And what'sApp number</p>
            </div>

            <div className="d-flex justify-content-around">
                <div className="ms-5 mt-3">
                    <h3> Contact Number : </h3>Saddam: 018********
                    <br />
                    Rabbi: 014********  <br />
                    Shovon: 016********  <br />
                    Sharif: 017********
                </div>
                <div className=" mt-3">

                    <h3>FaceBook:https://facebook.com</h3>
                    <h3>Twitter:https://Twitter.com</h3>
                    <h3>LinkDin:https://LinkDin.com</h3>
                </div>
            </div>
            <div className="d-flex">
                <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7hsJdHP_1LkAK7o1vtVELT240Sp80HWz9mNQpZyz0RFNOOAhYtAumAXPWzlTpTxVt0Q&usqp=CAU" className="w-100" alt="" />
            </div>

        </div>
    );
};

export default ContactUs;