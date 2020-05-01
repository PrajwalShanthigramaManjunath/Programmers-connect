# Assignment 1 - ReactJS app.

Name: Prajwal Shanthigrama Manjunatha

## Overview.

+ Programmers connect is a web application which was developed to connect programmers with the objective to interact with each other through posts, display programmers profile, like and discuss on the posts.
+ Deplyoment heroku - https://programmers-connect.herokuapp.com/

 . . . . . List of user features.
 
 + Register 
 + Login
 + Add Profile
 + Users logged in can Post
 + View other posts from programmers (Logged in user only)
 + like or comment on the post (Logged in user only)
 + List of registered Programmer profile. (Guest user and Logged in user)
 + Github repo auto pull. Users can enter their github username and the last 5 public repos will be added to their profile (API get request to git done in backend).
 + Alerts 


## Setup requirements.
Since React with Express backend has been integrated, "npm run dev" command on root directory will run both front-end server (on PORT-3000) and backend server (nodemon) (on PORT 5000) at the same time. It can be run separately too without changing the root directory, after cloning, 'npm run client' command on root folder will run the front end server and 'npm run server' on root folder will run the backend server(nodemon).

## Data Model Design.

[Custom app only]

![][model]


## Web Application architecture.

![][architecture]

### Design patterns.

+ React hooks for component state management.
+ Redux for app state management.
+ Reducers and actions for resources.
+ Container components that integrate with Redux.


## UI Design.

![][view]
![][views]

## Routing.

+ /register - 
+ /dashboard - Requires registration/Login
+ /edit-profile - Requires registration/Login
+ /add-experience - Requires registration/Login 
+ /add-education - Requires registration/Login
+ /profiles - Does not require registration/Login (Registered profile Views)
+ /login - Requires registration
+ /posts - Requires login
+/posts/id: - Requires login  

## Independent learning.

+ Redux for application state management. Redux provides us with a [`store.subscribe`](https://redux.js.org/api/store#subscribelistener) listener that runs every time a state change occurs.

We can use this listener to watch our store and set our auth token in local storage and axios headers accordingly.

- if token - store it in local storage and set the headers.
- if no token - token is null - remove it from storage and delete the headers.

The subscription can be seen in [client/src/store.js]
+ Testing with the Redux Chrome extension/React dev tools.

[model]: ./data.jpg
[view]: ./view.png
[architecture]: ./Architecture.png
[views]: ./View2.png