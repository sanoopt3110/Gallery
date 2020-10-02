import { photos } from "../_helpers";

export const gelleryService = {
    updateImageDetails,
    getImageDetails
};

function updateImageDetails (imageDetails){
    let imgDetails = JSON.parse(localStorage.getItem('imageDetails')) || [];
    if(imgDetails.length){
        debugger
        let index = Number(imageDetails.id);
        imgDetails[index].title = imageDetails.title;
        imgDetails[index].author = imageDetails.author;
        imgDetails[index].description = imageDetails.description;
        localStorage.setItem('imageDetails', JSON.stringify(imgDetails));
        return Promise.resolve(imgDetails);
    } else {
        Promise.reject("ERROR");
    }
}

function getImageDetails() {
    let imgDetails = JSON.parse(localStorage.getItem('imageDetails')) || [];
    if(!imgDetails.length){
        localStorage.setItem('imageDetails', JSON.stringify(photos));
        imgDetails = photos;
    }
    return Promise.resolve(imgDetails);
}