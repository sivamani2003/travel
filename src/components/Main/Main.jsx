import React,{useEffect} from 'react'
import './Main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/image1.jpg'
import img1 from '../../Assets/image2.jpg'
import img2 from '../../Assets/3.jpg'
import img3 from '../../Assets/4.jpg'
import img4 from '../../Assets/5.jpg'
import img5 from '../../Assets/6.jpg'
import img6 from '../../Assets/7.jpg'
import img7 from '../../Assets/9.jpg'
import img8 from '../../Assets/8.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data =[
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque'
  },
  {
    id:2,
    imgSrc:img1,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  },
  {
      id:3,
      imgSrc:img2,
      destTitle:'Great Brrier reef',
      location:'Australia',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  },
  {
    id:4,
    imgSrc:img3,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  },
  {
    id:5,
    imgSrc:img4,
    destTitle:'Gunjunto',
    location:'Mexico',
    grade:'CULTURAL RELAX',
    fees:'$1100',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  },
  {
    id:6,
    imgSrc:img5,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  },
  {
    id:7,
    imgSrc:img6,
    destTitle:'Angkor Wat',
    location:'Combodia',
    grade:'CULTURAL RELAX',
    fees:'$790',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  },
  {
    id:8,
    imgSrc:img7,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  },
  {
    id:9,
    imgSrc:img8,
    destTitle:'Bali islad',
    location:'indonesia',
    grade:'CULTURAL RELAX',
    fees:'$500',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis, architecto ex doloremque officia quibusdam modi, rerum eligendi, optio soluta necessitatibus facilis? Illo repudiandae, sunt iste ipsum amet maxime impedit numquam? Impedit ipsum debitis natus.'
  }
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most visited Destinations
          </h3>
        </div>
        <div className="secContent grid">
        {
            Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                return(
                  <div key={id} data-aos="fade-up" className="singleDestination">
                      <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                      </div>
                      <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex">
                            <HiOutlineLocationMarker className='icon'/>
                            <span className="name">{location}</span>
                        </span>
                        <div className="fees flex">
                          <div className="grade">
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className="price">
                            <h5>{fees}</h5>
                          </div>
                        </div>
                        <div className="desc">
                          <p>{description}</p>
                        </div>
                        <button className='btn flex'>
                          DETAILS <HiOutlineClipboardCheck className="icon"/>
                        </button>
                      </div>
                  </div>
                )
            })
          }
        </div>
    </section>
  )
}

export default Main;