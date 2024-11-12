import { Link, useNavigate } from "react-router-dom"
import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
function Home(){
    return(
        <>
          <div className="container mt-3">
          <h1 align="center">Darshan University</h1>
          <h5 align="center" className="mb-5">Lorem Ipsum is a standard dummy text used in the printing and publishing industries. It's a placeholder text that's made up of scrambled Latin words, and is used to preview layouts in graphic design and typesetting. 
          <Slider/>
          </h5>
        </div>
        </>
      )
}

function Slider(){
    return(
        <>
          <div id="carouselExampleCaptions" className="carousel slide mt-3" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="Goku.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="Zebra.avif" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        </>
      )
}

function About(){
    return(
        <h1>About me</h1>
    )
}

function Contact(){
    const [count , SetCount] = useState(0);

  return (
    <>
      <div className="container mt-5" align="center">
        <button type="button" className="btn btn-success" onClick={()=>{
          SetCount(count + 1);
        }}>Click Me</button>
      </div>
      <div className="container mt-5" align="center">
        <h1 className="mt-3">Click Count : {count}</h1>
      </div>

    </>
  )
}

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-sm-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="DU.jpeg" alt="Logo" style={{ width: "60px" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">Contact</Link>
                   
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-disabled="false" to="/about">About</Link>
                    
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/students">Faculties</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      );
}
 
function Api(){

  const [data , setData] = useState([]);
  useEffect(()=>{
    fetch("https://6671937fe083e62ee43c341e.mockapi.io/Students").
    then(res=>res.json()).
    then(res=>setData(res));
  })

  const ans = data.map((stu) => (
    <div className="col-md-4 col-sm-6 mb-4 mt-2" key={stu.rollno}>
      <div className="card" style={{ width: "100%" }}>
        <img src={stu.image} className="card-img-top" alt={stu.name} />
        <div className="card-body">
        <h5 className="card-title">id: {stu.id}</h5>
          <h5 className="card-title">Name: {stu.name}</h5>
          <h5 className="card-title">Email: {stu.Email}</h5>
          <h5 className="card-title">Passion: {stu.Passion}</h5>
          <Link to={'/students/'+stu.id} className="btn btn-primary">Read More</Link>
        </div>
      </div>
    </div>
  ));

  return(
    <>
          <div className="container mt-3">
            <div className="row">{ans}</div>
          </div>
    </>
  )
}


  function DetailFaculty() {
      const[data , setData] = useState({});
      const { id } = useParams();
      const navigate = useNavigate();
      const apiUrl = "https://6671937fe083e62ee43c341e.mockapi.io/Students/"+id;
      useEffect(()=>{
        fetch(apiUrl , {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res))
      },[]);

      return(
        <>
          <h1 align="center">Name of the Faculty is: {data.name}</h1>
        </>
      )
  }
  
  

export  {Home  , Slider , About , Contact , Navbar , Api , DetailFaculty}