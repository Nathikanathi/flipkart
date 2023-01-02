
function MenuPage(){
    return(
        <>
            <ul className="nav nav-pills nav-justified p-2">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Electronics</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Mobile</a>
            <a className="dropdown-item" href="#">laptops</a>
            <a className="dropdown-item" href="#">speakers</a>
            <a className="dropdown-item" href="#">camera</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mens</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Footwear</a>
            <a className="dropdown-item" href="#">clothing</a>
            <a className="dropdown-item" href="#">Wathches</a>
            <a className="dropdown-item" href="#">Mens Grooming</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Women</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Ethnic Wear </a>
            <a className="dropdown-item" href="#">Jewellery</a>
            <a className="dropdown-item" href="#">saree</a>
            <a className="dropdown-item" href="#">Sandals</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home & Furniture</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Home Lighting</a>
            <a className="dropdown-item" href="#">Kitchen & Cookwear</a>
            <a className="dropdown-item" href="#">Furnishing</a>
            <a className="dropdown-item" href="#">Cleaning Supplies</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Baby & kids</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Toys</a>
            <a className="dropdown-item" href="#">Baby Care</a>
            <a className="dropdown-item" href="#">Kids winter Wear</a>
            <a className="dropdown-item" href="#">Kids Footwear</a>
          </div>
        </li>
       
      </ul>
      {/* slide page starts here */}
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/e67643936e002679.jpg?q=50" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/2f0924d238f8248e.jpg?q=50" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/c011fb2a7a18a0d5.jpg?q=50" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* slide page ends here */}
        </>
    )
}
export default MenuPage;