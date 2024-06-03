import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import axiosInstance from "../utils/Axiosinstance";
import { useQuery, useQueryClient } from 'react-query';

function Details() {
    // const [data, setData] = useState([]);
    const { movieId } = useParams();
    const videoRef = React.useRef(null);

    const fetchVideoDetail = async (movieId) => {
        const response = await axiosInstance.get(`/videos/${movieId}`);
        return response.data;
      };

      const queryClient = useQueryClient();

      // Get the initial data from the cache
      const initialData = queryClient.getQueryData('videos')?.find(video => video.id === movieId);
    
      const { data, error, isLoading } = useQuery(['videoDetail', movieId], () => fetchVideoDetail(movieId), {
        initialData,
      });
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;

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

    const handleShareClick = () => {
        if (navigator.share) {
            navigator.share({
                title: data.title,
                text: data.description,
                url: window.location.href,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            alert('Web Share API is not supported in your browser.');
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

                                <div className="play fs-6 fs-sm-6 py-2 mt-5">
                                    <ul className="share" onClick={handleShareClick}>
                                        <li><i className="bi bi-share-fill"></i> Share</li>
                                    </ul>

                                    <button className='mx-3' type="button" onClick={handlePlayClick}><i className="bi bi-play-fill"></i> PLAY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-3">{data.description}</p>
                </div>
            </div>

            {/* <div className="datail-head px-4">
                <div className="text-center">
                    <p>BEST TV SERIES</p>
                    <h1>World's Best TV Series</h1>
                </div>
                
            </div> */}

            <Footer />
        </>
    );
}

export default Details;
