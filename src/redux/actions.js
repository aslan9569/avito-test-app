export const loadPhotos = () => {
  return dispatch => {
      dispatch({ type: 'photos/load/start' })

      fetch('https://boiling-refuge-66454.herokuapp.com/images')
          .then(response => response.json())
          .then(json => {
              dispatch({
                  type: 'photos/load/success',
                  payload: json
              })
          })
  }
}
export const loadPhotosComments = (id) => {
  return dispatch => {
      dispatch({ type: 'comments/load/start' })

      fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
          .then(response => response.json())
          .then(json => {
              dispatch({
                  type: 'comments/load/success',
                  payload: json
              })
          })
  }
}
export const newComment = (id, name, text) => {
  return {
    type: 'add/new/comment',
    id: id,
    name: name,
    comment: text
  }
}