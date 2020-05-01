# Assignment 2 - Web API.

Name: Prajwal Shanthigrama Manjunatha

## Overview

+ Programmers connect web application.
+ Deplyoed to Heroku - https://programmers-connect.herokuapp.com/
+ Backend API with Node.js & Express
+ Protecting routes/endpoints with JSON web tokens
+ Backend API request to github repo, to be displayed in front-end.
+ React and Express integration. 
+ Single repo Heroku deployment.
+ Modified build script to generate static asset file in server, post Heroku deployment for optimized web architecture.

## Installation Requirements

Since React has been integrated with Express backend, "npm run dev" command on root directory will run both front-end server (on PORT-3000) and backend server (nodemon) (on PORT 5000) at the same time. It can be run separately too without changing the root directory, after cloning, 'npm run client' command on root folder will run the front end server and 'npm run server' on root folder will run the backend server(nodemon).


Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/PrajwalShanthigramaManjunath/programmers-connect.git
```

followed by installation

```bat
git install
```

## API Configuration
Not required as config file has been included in the git repo (default.json/production.json)

## Startup
### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

## API Design


|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/auth |Get the user | Authenticate user & get token | N/A |
| api/posts | Get all posts |Create a post  | N/A | N/A|
|  api/posts/:id| Get post by ID |  | N/A | Delete a post  |
| api/posts/like/:id | ... | ... | Like a post | ...

etc.

## Security and Authentication
All the routes where 'auth' middleware is included, file in [Programmers_Connect/middleware/auth.js], did not use Passport middleware dependency since the application was not complex. 

## Testing
Simultaneous Postman testing while coding, could not test using other tools because of time constraints.
![][image1]
![][image2]
![][image3]

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
//@route GET api/profile/me
//@desc Get current user profile
//@access Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

~~~

## Extra features

+ Authentication middleware.
+ Concurrently, dev dependency to run both front end and backend server at the same time.
+ Backend API request to git to return git repose of the username entered.
+ Front end Static assets production build in server post Heroku deployment. 
+ Single repo Heroku deployment (https://programmers-connect.herokuapp.com/)
 
## Independent learning.

Various dependencies, script buid, optimized integration of React & Express and Redux for component state management in the front-end.  


[image1]: ./testing.png
[image2]: ./testing1.png
[image3]: ./testing2.png