import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide_2 from "./Slide_2";

function Details() {
    const [data, setData] = useState([]);
    const { movieId } = useParams();
    const videoRef = React.useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/videos/${movieId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
                videoRef.current.msRequestFullscreen();
            }
            videoRef.current.play();
        }
    };

    return (
        <>
            <div className="container-fluid p-5 hero-details" style={{ backgroundImage: `url(${data.cover_image})` }}>
                <Header />

                <Link to={'/'}><i className="bi bi-arrow-left ps-5 back"> Back</i></Link>

                <div className="container-fluid mt-5 ps-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="">
                                <video ref={videoRef} height="400" width="100%" className="" src={data.video_file} title={data.title} frameBorder="0" allowFullScreen></video>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12 info">
                            <div className="">
                                <p className="show">Showing Now</p>

                                <h1>{data.title}</h1>

                                <ul>
                                    <li className='li1'>Movies</li>
                                    <li className='li2'>HD</li>
                                    <li>{data.genere}</li>
                                    <li><i className="bi bi-clock"></i> {data.minutes} mins</li>
                                    <li><i className="bi bi-calendar3"></i> {data.year_of_release}</li>
                                </ul>

                                <div className="play fs-6 fs-sm-6 py-">
                                    <ul className="share">
                                        <li><i className="bi bi-share-fill"></i> Share</li>
                                        {/* <li>Share</li> */}
                                    </ul>

                                    <button className='mx-3' type="button" onClick={handlePlayClick}><i className="bi bi-play-fill"></i> PLAY NOW</button>
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
                <Slide_2 />
            </div>

            <Footer />
        </>
    );
}

export default Details;
