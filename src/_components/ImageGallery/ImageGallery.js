import React , {Component} from "react";
import { galleryActions } from '../../_actions';
import './Image.scss';
import { connect } from 'react-redux';

class ImageGallery extends Component {

componentDidMount(){
  this.props.getImageDetails();
}
  
render(){
  const imageDetails = this.props.imageDetails;
  return(
    <section className="section">
      <div className="header"><h3>Image Gallery</h3></div>
      <div className="grid-c">
        {
            imageDetails && imageDetails.map((image, index) => {
                return (
                    <div className={image.className} style={{backgroundImage:`url(${image.url})`}} key={index}>
                        <div className="item__details">
                          <span className="img-detail" style={{textTransform:'uppercase'}}>{image.title}</span>
                          <span className="img-detail" style={{textTransform:'capitalize'}}>Author: {image.author}</span>
                          <span className="img-detail"><i>{image.description}</i></span>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </section>
  )
}
}


function mapState(state) {
  const imageDetails = state.gallery.imageDetails;
  return { imageDetails };
}

const actionCreators = {
  getImageDetails: galleryActions.getImageDetails
};

const connectedApp = connect(mapState, actionCreators)(ImageGallery);
export { connectedApp as ImageGallery };