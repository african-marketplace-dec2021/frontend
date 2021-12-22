# African Marketplace: Bloom Tech Build Week, December 2021

## ☝️ **Pitch**

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.

You will build a platform to enable these business owners to create listings for items they have for sale.

## ✅  **MVP**

1. A small business `owner` can log in and see relevant prices in various categories to help them set their own prices.

2. They can also make listing for `items` they want to sell, which will show up to all `users`.

3. They add a new `item` by selecting their market `location` and typing in their item's `name`, `description`, and `price`.

(https://www.notion.so/African-Marketplace-a449bf95188440b29436334e870c8f3e)

## Vercel Deployment
https://frontend-olhgo8a8d-african-marketplace-dec-2021.vercel.app/

## Heroku API
Deployed URL: https://african-marketplace-dec-2021.herokuapp.com/

## API Endpoints

# Authentication

* **[POST]** * to `/api/auth/register`: Needs a username, password, and role. Creates a new user. If successful, returns id, username, password and role. If unsuccessful, returns the message "username [name you put here] is not available".
* **[POST]** * to `/api/auth/login`: Needs a username and password. Logs in a user who already has a username and password. If successful, returns message "welcome" and a token. If user puts in username and password that is not registered, returns the message "invalid username or password".
  * ** [GET] ** * to `/api/users`: Returns all users.
  * ** [GET] ** * to `/api/users/:id`: Returns user with id you put in.
  * ** [PUT] ** * to `/api/users/:id`: Anything that you want to change will be needed. Ex: If you want to change just the username, put in just the username, etc. Updates the user with the id you put in.
  * ** [DELETE] ** * to `/api/users/:id`: Deletes the user with the id you put in.

Each user object has the format:
```js
{
  id: 1,
  username: "thomas",
  password: "$2b$10$g0vFt8FFCklqFfYouz3WKORLBNV70WI4KFkP2FxwRKZLF56yGvneS"
  role: "seller"
}
```  


## MEET EVERYONE!!

Hannah Brog
Github: https://github.com/bugsbrog
LinkedIn: https://www.linkedin.com/in/hannah-brog/

Tim Goloshchapov
Github: https://github.com/Timbobeek
LinkedIn: https://www.linkedin.com/in/timofey-goloshchapov-b25660179/

Allison Stewart
Github: https://github.com/am-stewart
LinkedIn: https://www.linkedin.com/in/am-stewart/
