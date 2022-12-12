# Record shop exercise #1

## <ins>Server setup</ins>

- [+] crate a database called `recordshop` at mongodb.com
- [+] create an express server
- [+] import dotenv, mongoose, concurrently
- [+] create a .env file
  - [+] store PORT and DB connection string
- [+] listen to a port
- [+] connect to a Database
- [+] create a folder structure using routes and controllers
- [+] create middleware to route requests containing the path `/users` to the appropriate route file
- [+] create a user model that includes these fields:
  - [+] `username`
  - [+] `email`
  - [+] `password`
- [+] create a controller file to handle the `register` and the `login` requests
- [+] crate the register function that adds a user to the database

## <ins>Client setup</ins>

- [+] create `client` folder at root level inside your project
- [+] create a react client inside `client` folder
- [+] add a react router
- [+] add a navigation bar
- [+] add 2 buttons in the bar to redirect:
  - [+] to a login page
  - [+] to a register page
  - [+] the login page should be at the `/login`
  - [+] the register page should be at the `/register`
- [+] build a register component and the submit button should send a `post` request to the server at the route `/users/register`
- [+] build a login component and the submit button should send a `post` request to the server at the route `/users/login`
