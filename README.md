## Billing System App

**Setting Up The React Application**

#### Check Node Version
```
node -v
```

#### Creating initial React Application

```
npx create-react-app billing-system
```

#### Start the Development Server

```
npm start 
```
#### Install Bootstrap 
```bash
npm install bootstrap
```

#### Adding the following line to App.js
```js
import "bootstrap/dist/css/bootstrap.min.css";
```
#### Install React Router

```bash 
npm install react-router-dom
```
#### Adding the routing configuration in App.js

```js
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

#### Next, let's embed the JSX code in a `<Router></Router>` Element
```js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Billing System</h2>
        </div>
      </Router>
    );
  }
}

export default App;
```
#### Inside the `<Router>` element we’re now ready to add the router configuration inside that element

```js
<Route path="/" exact component={ProductList} />
<Route path="/edit/:id" component={EditProduct} />
<Route path="/create" component={CreateProduct} />
```

> For each route which needs to be added to the application a new <Route> element is added
> The attributes path and component are used to add the configuration settings for each route
> By using the attribute path the routing path is set and by using the component attribute the path is connected with a component.

#### Routes

> Added three routes in our application
- /
- /create
- /edit/:id

#### Components
> For these three routes we want to connect to three components:
- ProductList
- EditProduct
- Create Product

#### Creating Components
> Let’s create a new directory src/components and create three new files:
- product-list.component.js
- edit-product.component.js
- create-product.component.js

#### Let’s add a basic React component implementation for each of those components:
> Product-list.component.js:
``` js
import React, {Component} from "react"

export default class ProductList extends Component {
    render () {
        return (
            <div>
                <p>Welcome to Product List Componentd</p>
            </div>
        )
    }
}
```