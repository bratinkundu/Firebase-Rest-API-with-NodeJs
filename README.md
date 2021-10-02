# Firebase-Rest-API-with-NodeJs


**GET ALL USERS**
----
  This API gets all the users from Firebase database

* **URL**

  /api/GetAllUsers

* **Method:**

  `GET`


* **Data Params**

    None

* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name: "Abc", age: 14 }`
 
* **Error Response:**

 
  * **Code:** 500 <br />
    **Content:** `{ error : "Issue with getting response." }`


**ADD USER**
----
  This API adds the users to Firebase database

* **URL**

  /api/AddUsers

* **Method:**

  `POST`
  

* **Data Params**

    {name:"XYZ",email: 'abc@xyz.com', address: 'India' ,phoneno : '123456789'}

* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ Status: 'User Added succesfully' }`
 
* **Error Response:**

 
  * **Code:** 500 <br />
    **Content:** `{ error : "Issue with getting response." }`


**UPDATE USER**
----
  This API updates the user to Firebase database

* **URL**

  /api/UpdateUser/:id

* **Method:**

  `PUT`
  

* **Data Params**

    {id:'1221544'}

* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{status: 'User updated succesfully!'}`
 
* **Error Response:**

 
  * **Code:** 500 <br />
    **Content:** `{ error : "Issue with getting response." }`

Postman Collection : https://www.getpostman.com/collections/08681ceca1ba53bb777f
