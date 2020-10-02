import React , {Component} from "react";
import { galleryActions } from '../../_actions';
import './Image.scss';
import './Image.css';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

class ImageGalleryEdit extends Component {

constructor(props) {
    super(props)
    
    this.state = {
        selectedImageDetails:'',
        displayModal:false,
        id:'',
        title:'',
        author:'',
        description:'',
        buttonName:'Edit Details',
        editAuthor:false
    }
    this.onHide = this.onHide.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
}

componentDidMount(){
  this.props.getImageDetails();
}

onHide = ()=>{
    this.setState({
        displayModal:false
    });
}

onImageClick = (e, imageDetail)=>{
    this.setState({
        displayModal:true,
        selectedImageDetails:imageDetail,
        id:imageDetail.id,
        title:imageDetail.title,
        author:imageDetail.author,
        description:imageDetail.description
    });
}
onChange = (e) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
onUpdate = () =>{
    let btnName = this.state.buttonName === 'Update' ? 'Edit Details' : 'Update';
    let edit = this.state.editAuthor ? false: true;
        this.setState({
            editAuthor:edit,
            buttonName:btnName
        });
    if(this.state.buttonName === 'Update'){
        let updateState = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
        }
        this.props.updateImageDetails(updateState);
    }
}

renderForm = () =>(
    <div className="form">
        <span className="p-float-label">
            <InputText id="title" name="title" value={this.state.title} onChange={this.onChange} />
            <label htmlFor="title">Title</label>
        </span>
        <span className="p-float-label">
            <InputText id="author" name="author" value={this.state.author} onChange={this.onChange} />
            <label htmlFor="author">Author</label>
        </span>
        <span className="p-float-label">
            <InputText id="description" name="description" value={this.state.description} onChange={this.onChange} style={{width:'53vw'}}/>
            <label htmlFor="description">Description</label>
        </span>
    </div>
    );

render(){
  const {imageDetails, user } = this.props;
  return(
    <div>
        <section className="section">
            <div className="header"><h3>Image Gallery Actions</h3></div>
            <div className="grid-c">
                {
                    imageDetails && imageDetails.map((image, index) => {
                        return (
                            <div className={image.className} style={{backgroundImage:`url(${image.url})`}} key={index} onClick={e => this.onImageClick(e, image)}>
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
        <Dialog header={this.state.selectedImageDetails.title} visible={this.state.displayModal} modal={true}
                style={{width: '58vw'}} onHide={this.onHide}>
            <div className="grid-c">
                <div className="item item--medium" style={{backgroundImage:`url(${this.state.selectedImageDetails.url})`}}>
                </div>
            </div>
            <div>
                {
                    this.state.editAuthor === true ? this.renderForm() : ''
                }
            </div>
            <div className="footer-el">
                <Button label="Close" icon="pi pi-times" onClick={() => this.onHide()} />
                <Button label={this.state.buttonName} icon="pi pi-check" style={{float:'right'}} onClick={() => this.onUpdate()} autoFocus disabled={user ? false : true}/>
            </div>
        </Dialog>
    </div>
  )
}
}


function mapState(state) {
  const imageDetails = state.gallery.imageDetails;
  const user = state.authentication.user;
  return { imageDetails , user};
}

const actionCreators = {
  getImageDetails: galleryActions.getImageDetails,
  updateImageDetails : galleryActions.updateImageDetails
};

const connectedApp = connect(mapState, actionCreators)(ImageGalleryEdit);
export { connectedApp as ImageGalleryEdit };