# Employee Management System



https://github.com/user-attachments/assets/b5ff720f-acf2-44aa-a3a0-2bdee4c2ebaa



This repository contains the backend and frontend code for an Employee Management System.

## Features

* **Add Employee:** Create new employee records with Name, Salary, Company, and Job Title.
* **View Employees:** Display a list of all employees with their details.
* **Delete Employee:** Remove existing employee records.
* **Edit Employee:** Update employee information such as Name, Salary, Company, and Job Title.

## Technologies Used

* **Backend:**
    * **Node.js:** JavaScript runtime environment.
    * **Express.js:** Web application framework for Node.js.
    * **MongoDB:** NoSQL database.
    * **Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.
    * **dotenv:** Load environment variables from a `.env` file.
    * **Postman:** API client for testing and interacting with the backend.
* **Frontend:**
    * **HTML:** Structure of the web pages.
    * **CSS:** Styling of the web pages.
    * **JavaScript:** Client-side scripting for interactive elements.

## Installation

1. **Clone the repository:**
```bash
  git clone https://github.com/MajdIssa34/Employee-Management-System
```
2. **Install dependencies:**
```bash
  cd employee-management-system
  npm install
```

3. **Create a .env file:**
Create a .env file in the project root directory and add the following environment variables:

MONGODB_URI={your-mongodb-connection-string}

5. **Run the development server:**

```bash

npm run dev

```
## Usage
* Use Postman to send a POST request to the /employees endpoint with the employee data in the request body.
View Employees:

* Send a GET request to the /employees endpoint to retrieve a list of all employees.
Delete Employee:

* Send a DELETE request to the /employees/:id endpoint, replacing :id with the ID of the employee to be deleted.
Edit Employee:

* Send a PUT request to the /employees/:id endpoint with the updated employee data in the request body.

## Frontend
The frontend code is located in the client directory. You can open the index.html file in a web browser to interact with the application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.   

