# Task Manager
Personal Task Manager app that keeps track of individual tasks as well as Tasks associated with a Project.

## Front End
Built on React, this app is built out of multiple components, using react's built in methods, such as useState, useLocation, useEffect.

The user is able to create Tasks without creating an account, and have those stored in their browser's localStorage. With the creation of an account, however, a user is able to create Projects as well as individual tasks, which are seperately tracked. 

Packages used were mainly React, react-router-dom, Axios, and Yup.

## Back End
Built using NodeJs and Express, the backend server uses a PostgreSQL database along with pgAdmin.

Requests made to the backedn are routed through Express routers, which allow for the application of specific database model methods. The backend handles the creation, updating, deleting, and retrieval of various entities for the Frontend, the majority of which are the Tasks and Projects belonging to a certain user. Routers will often employ the use of Middleware functions that check request data for errors.

Packages used were mainly NodeJs, Express, Knex, Cors, Nodemon, Bcrypt
