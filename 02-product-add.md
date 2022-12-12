# Record shop exercise #3

## <ins>Server side</ins>

- [ ] Create a model `Product` that contains the following properties:
  - [ ] `name` as `String`. It must be a mandatory field
  - [ ] `price` as `Number`. It must be a mandatory field
  - [ ] `image` as `String`
  - [ ] `description` as `String`
- [ ] Create a route to handle incoming requests to add a product the users at `/products/add`
- [ ] Create a route to handle incoming requests to list all products at `/products/list`
- [ ] Create a route to handle incoming requests to return one product at `/products/findone/:id`
- [ ] Create a route to handle incoming requests to edit a product at `/products/edit`

## <ins>Client side</ins>

- [ ] Add an icon to the navbar that when is clicked it redirects to `/dashboard/products`
- [ ] Add an entry at `react-router-dom` to render the component `Products` at address `/dashboard/products`
- [ ] Create a React component `Products` to render the available products 
- [ ] This component should render all products available in the database by sending a `GET` request to `/products/list` and add them to the context.
- [ ] Add a `+` button to that page. When clicked the user should be redirected to `/dashboard/products/add`
- [ ] Add an entry to `react-router-dom`  to render the component `AddProduct` at address `/dashboard/products/add`
- [ ] Create a react component called `AddProduct`
- [ ] Add the proper input fields for user's input of product `name`, `price`, `description`, `price` and `image`
- [ ] Add a `save` button which when clicked sends a request to `/products/add` with the data from the user
- [ ] On successful response, the user should be redirected to `/dashboard/products`
- [ ] Back to the `/dashboard/products` page, create a card that renders each product. The card should include the image, name and price of each product
- [ ] Each card should also have an edit button as well as a delete button
- [ ] When a user clicks at the edit button the user should be redirected to the `/dashboard/products/edit` page
- [ ] Add an entry at `react-router-dom` to render the component `EditProduct` at address `/dashboard/products/edit/productid`
- [ ] Create a React component `EditProduct` to edit a product 
- [ ] This component should get the product id from the address bar and then send a request to `/products/findone/:id` to get the data for the specific product
- [ ] Add the proper html elements and connect them with the data received from the database.
- [ ] Add a save button and when the user clicks it, you should send the updated product information to the `products/edit`
- [ ] On successful response from the server, user should be redirected to the `/dashboard/products`  and the product should be updated at the context.
- [ ] When the delete button is clicked, then a `delete` request should be sent to the `/products/delete` api. 
- [ ] On successful response from the server, product should be removed from context.

  