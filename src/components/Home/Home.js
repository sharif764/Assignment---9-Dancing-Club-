import React from 'react';
import './Home.css';
import useData from '../../hook/useData';
import Cart from '../DanceCart/Cart';
import { CarouselItem } from 'react-bootstrap';
const Home = () => {
    const [datas] = useData();
    return (
        <div className="home-div-container mt-5">
            <div className="carousel-div">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <CarouselItem className="carousel-item active">
                            <div>
                                <div className="details">
                                    <h2 className="my-3 fw-old">About Dance Career</h2><h5>For those looking for information on the personal experiences of a dancer, should check out Setting the Barre. The personal blog of professional ballet dancer Kirsten Evans is a diary of her experience in the dance world. She writes about her adventures both off an on the stage, from tiara and tutus to blisters to bunions. It is a really .</h5></div>
                                <img src="https://media.istockphoto.com/photos/full-length-body-size-portrait-of-two-crazy-nice-girlish-childish-picture-id1092760478?k=20&m=1092760478&s=612x612&w=0&h=mFJxEhEiNkUcwy9kdgYnVOnMWI6L42M2t9NuyRJoaRI=" className="d-block w-50" alt="..." />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="carousel-item">
                            <div>
                                <div className="details">
                                    <h2 className="my-3 fw-old">About Dance Type</h2>
                                    <h5>
                                        The Finland-based hip-hop dance blog was founded in 2017 to provide an interactive way to learn how to become a B-Boy of B-Girl. Updated regularly, the dance blog features all the facts that any aspiring breakdancer wants to know, such as how to boost recovery, dance tips, terminology, and even information on the history of Hip-hop.
                                    </h5>
                                </div>
                                <img src="https://media.istockphoto.com/photos/stylish-man-and-woman-dancing-hiphop-in-bright-clothes-on-gradient-picture-id1267332085?b=1&k=20&m=1267332085&s=170667a&w=0&h=AUxi7BgxIvMuaLtCtUZ1LpmveNH7qOpWLJvs4RQVaAk=" className="d-block w-50" alt="..." />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="carousel-item">
                            <div className="details">
                                <h2 className="my-3 fw-old">About Dance Scholarship</h2>
                                <h5>For those looking for information on the personal experiences of a dancer, should check out Setting the Barre. The personal blog of professional ballet dancer Kirsten Evans is a diary of her experience in the dance world. She writes about her adventures both off an on the stage, from tiara and tutus to blisters to bunions.
                                </h5>
                            </div>
                            <img src="https://qph.fs.quoracdn.net/main-qimg-84ebbb892ba9397fe5e861a9672e6359" className="d-block w-50" alt="..." />
                        </CarouselItem>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div>
                <h1 className="text-center my-5">Some Most Famouse Dance Type</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {datas.map(data => <Cart data={data} key={data.danceType}></Cart>)}
                </div>
            </div>
        </div>
    );
};

export default Home;
// import Carousel from 'react-bootstrap/Carousel';