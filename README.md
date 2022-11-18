# Fast-Food-API

A simple application where the user can make an order to a given food menu. With a backend endpoints you can also get, create, edit and delete requests.

I mainly use NodeJS too run a server-side client and for the records in my API i used MongoDB. For the front i use plain javascript with HTML and CSS.

To see the API i recommend you to use [Postman](https://www.postman.com/) to access those endpoint and see the results by yourself. I also add, one more API that can convert currencies ([Fixer](https://fixer.io/)).

## Deployment

To run the app you just simply:
- Clone this repository with **git clone https://github.com/george951/fast-food-api.git**

- Then navigate to the folder (e.x: cd C:/some_project/some_other_project/**fast-food-api**)

- When you are in the folder press **npm install** or **npm i** to install all the depedencies (if you don't have nodejs then go over here and [donwload](https://nodejs.org/en/download/) it)

- Press **npm start** and then type in your browser **localhost:3000** and you are in

## Endpoints

- GET: api/v1/items
- GET:id: api/v1/items/:id
- POST:id: api/v1/items/:id
- DELETE:id: api/v1/items/:id
- PATCH:id: api/v1/items/:id 
