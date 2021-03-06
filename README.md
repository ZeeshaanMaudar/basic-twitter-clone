# Basic Twitter Clone with React, Redux and Typescript using Json Server as a fake API

This Single Page Application assumes that you are already signed in as `userId=1`. It showcases a basic CRUD app where you can:

- Create new tweets
- Read a list of tweets which are paginated (default limit is 5),
- Update the number of claps for each tweet (except for your own),
- Delete your own tweets.

It also allows to view an individual's profile page, with that user's list of tweets and his/statistics details which displays number of tweets per day for the last 10 days.

If on your own profile page, you can post new tweets as well.

## Technologies
This project makes use of:
- create-react-app
- Typescript
- Styled Components
- Json Server
## How to start the project

 1. Make sure you have the latest LTS version of [NodeJS](https://nodejs.org/en/) installed.

 2. Clone this project

 3. Run `cd basic-twitter-clone` to navigate to the root folder of the project.

 4. Ensure you have Json Server installed globally or run `npm install -g json-server` or `sudo npm install -g json-server` if on a mac.

 5. In a different terminal, at the same path as the root folder, run `json-server --watch data/bs-react-redux-test-db.json --port 8000` to run the server on port 8000. Read more on json-server here: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

- You can now access [http://localhost:8000](http://localhost:8000) for the server api requests.

 6. Add a `.env` file in the root project of the app and add the following line inside of it: `REACT_APP_API=http://localhost:8000`

 7. Run `npm install` in the root folder of the repository to install all dependancies.

 8. Finally run `npm start` in the root folder. This command will launch the app in the development mode on [http://localhost:3000](http://localhost:3000).

### Routes used in this app:
- `GET` /users/`${userId}`
- `GET` /usersDetails/`${userDetailsId}`
- `GET` /tweets?_sort=date&_order=desc&_page=`${page}`&_limit=`${limit}`
- `POST` /tweets
- `PUT` /tweets/`${id}`
- `DELETE` /tweets/`${id}`
- `GET` /tweets?userId=`${userId}`&_sort=date&_order=desc&_page=`${page}`&_limit=`${limit}`
- `GET` /tweets?userId=`${userId`}&_sort=date&_order=desc`
- `GET` /users
- `GET` /usersDetails


## Assumptions
Worked under the assumption that userId from `/tweets` matches to `id` in `/users` and that `userDetailsId` from `/users` matches to `id` in `/usersDetails`

## Limitations of the app

#### On mount of the app
3 requests are being made to fetch all tweets, all users and all userDetails, as I could not find a route to call all 3 of them in only one api call. Since working with Json Server, I could not request for these 3 data to be joined on the backend which I would do in a real world application. Hence the reason for storing the data on the fron-end, and manipulating the results to create tweet cards with matching users and userDetails.
#### Pagination
I am refetching data 5 items (depending on the limit set) even after deleting an item from the list which causes re-render to ensure that 5 items are always being displayed.
However, if that's not suppose to work like that, that is if it is okay to show only 4 items in the list of 5 on successful deletion of an item, then we can simply remove the item on the front end first, and don't refetch list of 5 items on successful deletion of item but rather only when going to the next page and on refresh.

### statistics
I could not find a route to call only the number of tweets where date is `less than or equal to` 10 days ago. As a result, I had to call for all tweets on the front end, and then manipulate the data to get what I need.
