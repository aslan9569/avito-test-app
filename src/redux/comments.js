const initialState = {
    items: [],
    loading: false,
};
const comments = (state = initialState, action) => {
    switch (action.type) {
        case 'comments/load/start' :
            return {
                ...state,
                loading: true
            }
        case 'comments/load/success' :
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case 'add/name/comment' :
            return {
                ...state,
                newCommentName: action.payload
            }
        case 'add/text/comment' :
            return  {
                ...state,
                newComment: action.payload
            }

        default :
            return state
    }
}
export default comments;