// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(pelis) {
  let ListaDeDirectores = pelis.map((person) => {
    return person.director
  } )
  return ListaDeDirectores
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenpelis = arr.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return stevenpelis.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviess) {
  if(moviess == false){
    return 0
  }
  const num = moviess.reduce((result, valor) =>{
    if (valor.score) {
      return result + valor.score;
    }else {
      return result;
    }
  }, 0);
  return Math.round((num / moviess.length) * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(peliculas) {
    if (peliculas == false) {
      return 0;
    }
    let count = 0;
    const num = peliculas.reduce((result, value) =>{
      
      if (value.genre.includes('Drama') === true) {
        count++;
        return result + value.score;
      }else {
        return result;
      }
    }, 0);
    if (count == 0) {
      return 0;
    }else {
      return Math.round((num / count) * 100) / 100;
    }
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  if (!moviesArr.length) {
    return 0;
  }
  const segArr = moviesArr.sort((x, y) => {
    if (x.year === y.year) {
      return x.title.localeCompare(y.title);
    }
    return x.year - y.year;
  });
  return segArr;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
