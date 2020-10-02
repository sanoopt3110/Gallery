import { galleryConstants } from '../_constants';
const initialState = {
    imageDetails: [],
    error:''
}

export function gallery(state = initialState, action) {
  switch (action.type) {
    case galleryConstants.GET_IMAGE_DETAILS:
      return {
        ...state,
          imageDetails: action.payload,
          error: ''
        };
    case galleryConstants.UPDATE_IMAGE_DETAILS:
      return {
          ...state,
          imageDetails: action.payload,
          error:''
        };
    case galleryConstants.CLEAR:
      return {};
    case galleryConstants.ERROR:
    return {
        ...state,
        imageDetails: '',
        error: action.payload 
    };
    default:
      return state
  }
}