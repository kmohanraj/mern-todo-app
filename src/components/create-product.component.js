import React, {Component} from "react"

export default class CreateProduct extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductStatus = this.onChangeProductStatus.bind(this);
        this.onChangeProductImage = this.onChangeProductImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_category: '',
            product_price: '',
            product_quantity: '',
            product_description: '',
            product_status: false,
            product_image: ''
        } 
    }
    onChangeProductName(e) {
        this.setState({
            product_name: e.target.value
        });
    }

    onChangeProductType(e) {
        this.setState({
            product_type: e.target.value
        });
    }
    onChangeProductPrice(e) {
        this.setState({
            product_price: e.target.value
        });
    }

    onChangeProductQuantity(e) {
        this.setState({
            product_quantity: e.target.value
        });
    }


    onChangeProductDescription(e) {
        this.setState({
            product_description: e.target.value
        });
    }

    onChangeProductStatus(e) {
        this.setState({
            product_status: e.target.value
        });
    }

    onChangeProductImage(e) {
        this.setState({
            product_image: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`From Submit:`);
        console.log(`Todo Product Name: ${this.state.product_name}`);
        console.log(`Todo Product Price: ${this.state.product_price}`);

        this.setState({
            product_name: '',
            product_type: '',
            product_price: '',
            product_quantity: '',
            product_description: '',
            product_status: false,
            product_image: ''
        })

    }
    render() {
        return (
            <div style={{marginTop: 20}}>
              <h3>Create new Product</h3>
              <form onSubmit={this.onSubmit} >
                <div className="row">
                  <div className="col-4">
                    <label>Product Name</label>
                    <input type="text" 
                           className="form-control"
                           value={this.state.product_name}
                           onChange={this.onChangeProductName}
                           />
                  </div>
                  <div className="col-4">
                    <label>Product Type</label>
                    <input type="text"
                           className="form-control"
                           value={this.state.product_type}
                           onChange={this.onChangeProductType}
                           />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label>Price</label>
                    <input type="text"
                           className="form-control"
                           value={this.state.product_price}
                           onChange={this.onChangeProductPrice}
                           />
                  </div>
                  <div className="col-4">
                    <label>Quantity</label>
                    <input type="text"
                           className="form-control"
                           value={this.state.product_quantity}
                           onChange={this.onChangeProductQuantity}
                           />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                      <label>Product Description</label>
                      <textarea name="description"
                                className="form-control"
                                value={this.state.product_description}
                                onChange={this.onChangeProductDescription}
                                />
                      {/* <input type="area"
                             className="form-control"
                             value={this.state.product_description}
                             onChange={this.onChangeProductDescription}
                             /> */}
                  </div>
                </div>
                  <div className="form-group mt-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                               type="radio"
                               name="ProductOptions"
                               id="productOpen"
                               value="Open"
                               checked={this.state.product_status==='Open'}
                               onChange={this.onChangeProductStatus}
                               />
                        <label className="form-check-label">Open</label>
                    </div>   
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                               type="radio"
                               name="ProductOptions"
                               id="productClose"
                               value="Close"
                               checked={this.state.product_status==='Close'}
                               onChange={this.onChangeProductStatus}
                               />
                        <label className="form-check-label">Close</label>
                    </div>                             
                  </div>
                  <div className="form-group">
                      <input type="file"
                             name="image"
                             onChange={this.onChangeProductImage}
                             />

                  </div>
                  <div className="form-group">
                      <input type="submit" value="Create Product" className="btn btn-primary" />
                  </div>
              </form>
            </div>
        )
    }
}