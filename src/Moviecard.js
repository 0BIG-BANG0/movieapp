import { Component } from "react";


class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The BATMAN",
      plot: "Batman is the superhero protector of Gotham City, who fights evil and corruption, and always stands up for what is right",
      price: 1000,
      rating: 9.8,
      stars: 0,
      fav: false,
      cart:true
    };
    // this.addStars = this.addStars.bind(this)
  }
  addStars = () => {

    if (this.state.stars >= 5) {
        return;
      }
    //form1
    // this.setState({
    //     stars: this.state.stars + 0.5
    // })

    //form 2
    this.setState((preState) => {
      return {
        stars: preState.stars + 0.5,
      };
    }, ()=> console.log("stars inside callback: ", this.state.stars));

    console.log("stars: ", this.state.stars)
    // this.state.stars += 0.5
    // console.log('this.state.stars: ', this.state.stars)
  };
  minusStars = () => {
    //form 2
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((preState) => {
      return {
        stars: preState.stars - 0.5,
      };
    });
  };

  handleFav =()=>{
    this.setState({
        fav: !this.state.fav
    })
  }
  handleCart =()=>{
    this.setState({
        cart: !this.state.cart
    })
  }

  render() {
    const { title, plot, price, rating, stars } = this.state;//destructure to use directly
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src="peakpx.jpg" alt="Poster" />
          </div>

          <div className="right">
            <div className="title">{title}</div>

            <div className="plot">{plot}</div>

            <div className="price">${price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  onClick={this.minusStars}
                />
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>
              
              {/* {this.state.fav?  <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

              {/* Using click event one time */}
              <button className= {this.state.fav?"unfavourite-btn":"favourite-btn"} onClick={this.handleFav}>{this.state.fav?"Un-Favourite":"Favourite"}</button>
              
              


              {this.state.cart ? <button className="removecart-btn" onClick={this.handleCart}>Remove from Cart</button> : <button className="cart-btn" onClick={this.handleCart}>Add to Cart</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
