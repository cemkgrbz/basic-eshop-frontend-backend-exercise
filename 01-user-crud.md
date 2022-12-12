# Record shop exercise #2

## <ins>Server side</ins>

- [ ] Create a route to handle incoming requests to list the users at `/users/list`
- [ ] Create a route to handle incoming requests to delete a user at `/users/delete`
- [ ] Create a route to handle incoming requests to edit a user at `/users/edit`

## <ins>Client side</ins>

- [ ] Add context api to the app
- [ ] Add a menu to the navbar
- [ ] Create a link that directs to the `/users` page
- [ ] Create a component that sends a `get` request to `/users/list` api and renders the users received from the server. 
- [ ] After a successful response, users should be added to the context
- [ ] Create a card to render each user
- [ ] Each card should have 2 buttons:
  - [ ] A button to delete a user
  - [ ] A button to edit a user
- [ ] When the delete button is clicked, then a `delete` request should be sent to the `/users/delete` api. 
- [ ] On successful response, the user should be removed from the context
- [ ] When the edit button is clicked, a modal containing the specific user information should be rendered. There the user should be able to change any user information (username, email or password) and press the save button at the modal. Then a `put` request should be sent to then `/users/edit` api.
- [ ] On successful response, the modal should close and the user should be updated in the context
  