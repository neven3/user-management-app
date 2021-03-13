import { OPEN_MODAL, CLOSE_MODAL } from './modalTypes';

const initialModalState = {
    isModalOpen: false
};

function modalReducer(state = initialModalState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            };
        default:
            return {
                ...state
            };
    }
}

export default modalReducer;