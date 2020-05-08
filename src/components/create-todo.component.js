import React, {Component} from "react"

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
        this.onChangeProductPriority = this.onChangeProductPriority.bind(this);
        this.onChangeProductDeliveryDate = this.onChangeProductDeliveryDate.bind(this);
        this.onChangeProductDeliveryStatus = this.onChangeProductDeliveryStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_category: '',
            product_price: '',
            product_quantity: '',
            product_priority: '',
            product_delivery_date: '',
            product_delivery_status: false
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

    onChangeProductPriority(e) {
        this.setState({
            product_priority: e.target.value
        });
    }

    onChangeProductDeliveryDate(e) {
        this.setState({
            product_delivery_date: e.target.value
        });
    }

    onChangeProductDeliveryStatus(e) {
        this.setState({
            product_delivery_status: e.target.value
        });
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
            product_priority: '',
            product_delivery_date: '',
            product_delivery_status: false
        })

    }
    render() {
        return (
            <div style={{marginTop: 20}}>
              <h3>Create new Product</h3>
              <form onSubmit={this.onSubmit} >
                  <div className="form-group">
                      <label>Product Name:</label>
                      <input type="text" 
                             className="form-control"
                             value={this.state.product_name}
                             onChange={this.onChangeProductName}
                             />
                  </div>
                  <div className="form-group">
                      <lael>Product Type</lael>
                      <input type="text"
                             className="form-control"
                             value={this.state.product_type}
                             onChange={this.onChangeProductType}
                             />
                  </div>
              </form>
            </div>
        )
    }
}