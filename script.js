const numberOfFilms = +prompt ('Skolko filmov vi uje posmotreli?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Kakoy film vi posmotreli posledniy?', ''),
      b = prompt ('Na skolko vi ego ocenite?', ''),
      c = prompt ('Kakoy film vi posmotreli posledniy?', ''),
      d = prompt ('Na skolko vi ego ocenite?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);