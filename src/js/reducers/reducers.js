

export const countDownReducer = (state = 3, action) => {
  switch(action.type){
    case 'DECREMENT':
      return state - 1;
    case 'RESET_COUNTDOWN':
      return 3;
    default:
      return state;
  };
};

export const userInputReducer = (state = '', action) => {
  switch(action.type){
    case 'USER_INPUT':
      return action.userInput;
    case 'CLEAR_MOVIE_NAME':
      return '';
    default:
      return state;
  }
}

export const storingMovieReducer = (state = {}, action) => {
  switch(action.type){
    case 'STORE_MOVIE':
      return {
        title: action.title,
        plot: action.plot,
        posterURL: action.posterURL
      }
    default:
      return state;
  }
}

export const fetchingStatusReducer = (state = '', action) => {
  switch(action.type){
    case 'START_FETCHING':
      return action.status;
    case 'STOP_FETCHING':
      return action.status;
    default:
      return state;
  }
}
