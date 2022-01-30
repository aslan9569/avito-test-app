const initialState = {
    items: [],
    comments: [
        {   id: 237,
            comment: 'Завидую белой завистью!!',
            name: 'Artur',
        },
        {   id: 238,
            comment: 'Естественно!!!',
            name: 'Иван',
        },
        {   id: 239,
            comment: 'Ну конечно!!',
            name: 'Саня',
        },
        {   id: 240,
            comment: 'Быть тупым это норма!!',
            name: 'Леха',
        },
        {   id: 241,
            comment: 'Не жизнь, а малина!',
            name: 'Игорь',
        },
        {   id: 242,
            comment: 'Окееей',
            name: 'Алексей',
        }
    ],
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
        case 'add/new/comment' :
            return {
                ...state,
                comments: [...state.comments, {id: action.id, comment: action.comment, name: action.name}]
            }

        default :
            return state
    }
}
export default comments;