import { galleryConstants } from '../_constants';
import { gelleryService } from '../_services';
import { alertActions } from '../_actions';

export const galleryActions = {
    updateImageDetails,
    getImageDetails,
    clear
};

function updateImageDetails(details) {
    return dispatch => {
        gelleryService.updateImageDetails(details)
            .then(
                imageDetails => { 
                    dispatch(success(imageDetails));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(imageDetails) { return { type: galleryConstants.UPDATE_IMAGE_DETAILS, payload: imageDetails }};
    function failure(error) { return { type: galleryConstants.ERROR, payload: error }};
}

function getImageDetails() {
    return dispatch => {
        gelleryService.getImageDetails()
            .then(
                imageDetails => { 
                    dispatch(success(imageDetails));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(imageDetails) { return { type: galleryConstants.GET_IMAGE_DETAILS, payload: imageDetails }};
    function failure(error) { return { type: galleryConstants.ERROR, payload: error }};
}

function clear() {
    return { type: galleryConstants.CLEAR };
}