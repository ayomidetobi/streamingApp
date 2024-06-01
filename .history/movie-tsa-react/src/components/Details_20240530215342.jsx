import React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import Slide_1 from "./Slide_1";
import Slide_2 from "./Slide_2";

// import Link from 'react-router-dom'

function Details() {

    const [data, setData] = useState([]);
    const { movieId } = useParams();
    console.log(movieId)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/videos/${movieId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
    <>
    <div className="container-fluid  p-5 hero-details" style={{backgroundImage: `url(${(data.bg_img)})`}} >
        <Header />

        <Link to={'/'}><i className="bi bi-arrow-left ps-5 back"> Back</i></Link>

        <div className="container-fluid mt-5 ps-5" >
            <div className="row">
                <div className="col-5 col-sm-">
                    <div className="">
                        <video width="500" height="300" src={data.video_file} title={data.title} frameBorder="0"   allowfullscreen></video>
                    </div>
                </div>

                <div className="col-5 info">
                    <div className="">
                        <p className="show">Showing Now</p>

                        <h1>{data.title}</h1>

                        <ul>
                            <li className='li1'>Movies</li>
                            <li className='li2'>HD</li>
                            <li>{data.genere}</li>
                            <li><i className="bi bi-clock"></i> {data.mins} mins</li>
                            <li><i className="bi bi-calendar3"></i> {data.year}</li>
                        </ul>

                        <div className="play">
                            <ul className="share">
                                <li><i className="bi bi-share-fill"></i></li>
                                <li>Share</li>
                            </ul>

                            <ul className="rate">
                                <li>Rate this Show</li>
                                <li><i className="bi bi-star-fill"></i> {data.rating}</li>
                            </ul>

                            <button className='mt-3' type="button"><i className="bi bi-play-fill"></i> PLAY NOW</button>
                        </div>

                    </div>
                </div>
            </div>

            <p className="mt-3">{data.description}</p>
        </div> 
    </div>

    <div className="datail-head px-4">
        <div className="text-center">
            <p>BEST TV SERIES</p>
            
            <h1>World's Best TV Series</h1>
        </div>

        {/* <Slide_1 /> */}

        <Slide_2 />
    </div>

    <Footer />

    </>
  )
}

export default Details;




{/* <h1>{data.description}</h1> */}