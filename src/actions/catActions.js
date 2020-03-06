// write and export your action creator function here
//Thunk alters the behavior of action creator functions, allowing us to return a function that takes in dispatch. Inside this function, we can execute asynchronous code, and, once resolved, we can use dispatch to update our store with the remote data.


  export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
      .then(resp => resp.json())
        .then(json => {
          dispatch({type: 'ADD_CATS', cats: json.images})
        })
      }
    }
