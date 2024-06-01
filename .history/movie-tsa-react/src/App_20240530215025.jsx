import { useState, useEffect } from 'react'
import './App.css'
import { Link, useNavigate  } from 'react-router-dom'
import Header from './components/Header'
import Slide_1 from './components/Slide_1'
import Slide_2 from './components/Slide_2'

import disney from './assets/image/Rectangle52.png'
import marvel from './assets/image/Rectangle53.png'
import dc from './assets/image/Rectangle54.png'
import star from './assets/image/Rectangle55.png'

import Footer from './components/Footer';


function App() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [setSelectedMovie] = useState(null);

  const navigateToDetails = (movieId) => {
    navigate(`/details/${movieId}`)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/videos/', {
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
      {/* Header */}
      <div className="container-fluid  p-5 hero">

        <Header />

        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6"> </div>

          <div className="col-lg-6 px-5">
            <h4>NEWTON MOVIES</h4>

            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Unlimited <span style={{ color: "#00edb5" }}>Entertainment</span>, Movies, TV Shows , & More.</h1>

            <ul>
              <li className='li1'>Movie</li>
              <li className='li2'>HD</li>
              <li>Action, Drama</li>
              <li><i className="bi bi-calendar3"></i>  2023</li>
            </ul>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button className='mt-3' type="button"><i className="bi bi-play-fill"></i> PLAY NOW</button>
            </div>
          </div>

        </div>
      </div>
      

      <div className='container-fluid upcoming p-5'>
        <h5>Online Streaming</h5>

        <div className='tag'>
          <h2>Upcoming Movies</h2>

          <ul className='cate'>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Anime</li>
          </ul>
        </div>

        <div className="pt-5 text-light">
          <div className="row gx-5">

            {data.slice(0, 4).sort((a,b)=> b.date.localeCompare(a.date) || b.time.localeCompare(a.time)).map((item) => (
              <div className="col-3" key={item.id}>
                <div onClick={()=>navigateToDetails(item.id)} className='details'>
                  <img src={item.cover_image} className="card-img-top" alt="..." style={{ height: '390px' ,objectFit:'cover'}} />

                  <div className='title mt-3'>
                    <p ><b>{item.title}</b></p>
                    <p style={{ color: '#CCFF00' }}>{item.year_of_release}</p>
                  </div>
                </div>

                <div className='type'>
                  <i className="bi bi-badge-hd"></i>

                  <p><i className="bi bi-clock"></i> {item.minutes} mins</p>

                  <p><i className="bi bi-star-fill"></i> 7.0</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <Slide_1 /> */}

      </div>

      <div className="container-fluid px-4 text-center">
        <div className="row gx-5">
          
          <div className="col-3">
            <div className="p-3">
              <img src={disney} alt="Logo"/>
            </div>
          </div>

          <div className="col-3">
            <div className="p-3">
              <img src={marvel} alt="Logo"/>
            </div>
          </div>

          <div className="col-3">
            <div className="p-3">
              <img src={dc} alt="Logo"/>
            </div>
          </div>

          <div className="col-3">
            <div className="p-3">
              <img src={star} alt="Logo"/>
            </div>
          </div>
          
        </div>
      </div>

      {/* <Slide_2 /> */}

      <div className='container'>
        <ul className='pagination justify-content-center'>
          <li><Link>1</Link></li>
          {/* <li><Link>2</Link></li>
          <li><Link>3</Link></li>
          <li><Link>4</Link></li>
          <li><Link>5</Link></li>
          <li><Link>6</Link></li>
          <li><Link>7</Link></li>
          <li><Link>8</Link></li>
          <li><Link>...</Link></li>
          <li><Link>64</Link></li> */}
        </ul>
      </div>

      <div className='mt-5'>
        <Footer />
      </div>
    </>
  )
}

export default App





// {item.description.substring(0, 80)}