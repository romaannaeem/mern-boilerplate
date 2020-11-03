# MERN Boilerplate Project

This project is meant to be cloned and built upon. It is already set up with Passport Local authentication (log in, sign up, log out). It's set up for quick deploy through Heroku, with a postbuild script and `serve` being used on the front-end.

<hr />

#### Instructions

1. Clone this repo
2. Create a `.env` file in the root folder, and define your `MONGO_URI` and `SESSION_SECRET`. `MONGO_URI` should be a MongoDB URI, and `SESSION_SECRET` can be any string you choose
3. Run `npm install` in the root folder
4. Run `npm install` inside the client folder
5. Run `npm run dev` inside the root folder to start the app
6. Start building!

#### Technologies used

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Passport](http://www.passportjs.org/)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Redux / React Redux](https://react-redux.js.org/)
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
- [Axios](https://www.npmjs.com/package/axios)
- [Ant Design](https://ant.design/)

#### Notes

- There is a proxy set up in `client/package.json` which defines the backend as living on port 5000. If you change the port in `/index.js`, please update the proxy accordingly.
