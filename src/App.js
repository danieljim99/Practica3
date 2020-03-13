import FilmMenu from './components/FilmMenu';
import FilmInfo from './components/FilmInfo';
import React, {Component} from 'react';
import films from './assets/data.json';
import './styles/App.css';

class App extends Component {
  state = {
    selectedFilm: null,
    ratingArray: [[], [], [], [], [], [], []],
    ratingAverage : [0, 0, 0, 0, 0, 0, 0],
  };

  films = films;

  selectFilmHandler = (title) => {
    const films = this.films.slice();
    const selectedFilm = films.find(film => film.title === title);

    if(document.getElementById("FilmInfo") !== null){
      document.getElementById("FilmInfo").style.visibility = "visible";
      document.getElementById("FilmInfo").style.width = "700px";
      document.getElementById("FilmInfo").style.animation = "show 0.75s 1";
    }

    this.setState({selectedFilm});
  }

  goBackHandler = async() => {
    document.getElementById("FilmInfo").style.width = "0px";
    document.getElementById("FilmInfo").style.animation = "hide 0.75s 1";
    await new Promise(resolve => setTimeout(resolve, 750));
    document.getElementById("FilmInfo").style.visibility = "hidden";
  }

  rateHandler = (rating) => {
    let ratingArray = this.state.ratingArray.slice();
    let ratingAverage = this.state.ratingAverage.slice();

    ratingArray[this.state.selectedFilm.episode_id - 1].push(rating);
    ratingAverage[this.state.selectedFilm.episode_id - 1] = 0;

    ratingArray[this.state.selectedFilm.episode_id - 1].forEach(rating => {
      ratingAverage[this.state.selectedFilm.episode_id - 1] += rating;
    });
    ratingAverage[this.state.selectedFilm.episode_id - 1] /= ratingArray[this.state.selectedFilm.episode_id - 1].length;

    this.setState({ratingArray, ratingAverage});
  }
  
  render() {
    return (
      <div className="App">
          <FilmMenu films={this.films} selectFilm={this.selectFilmHandler} ratingAverage={this.state.ratingAverage}/>
          {this.state.selectedFilm !== null ? 
            <div>
              <FilmInfo film={this.state.selectedFilm} goBack={this.goBackHandler} ratingAverage={this.state.ratingAverage[this.state.selectedFilm.episode_id - 1]} votes={this.state.ratingArray[this.state.selectedFilm.episode_id - 1].length} rate={this.rateHandler}/>
            </div>
          :
            null
          }
      </div>
    );
  }
}

export default App;
