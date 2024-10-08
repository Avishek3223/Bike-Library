# Bike Library API

## Description

The Bike Library API is a simple RESTful API built with Nest.js to manage a bike library. It allows users to perform CRUD (Create, Read, Update, Delete) operations on bike data stored in a SQLite database. This API provides a structured way to interact with bike information through well-defined endpoints.

## Features

- **CRUD Operations**:
  - Fetch a list of bikes.
  - Add a new bike to the library.
  - Update the details of an existing bike.
  - Delete a bike from the library.

- **Data Validation**: Input data is validated using Data Transfer Objects (DTOs) to ensure data integrity.

- **Interactive Documentation**: The API is documented using Swagger, allowing developers to explore and test the endpoints easily.

## Installation

### Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/Avishek3223/Bike-Library.git
cd bike-library
 ```
### Install Dependencies
Navigate to the project directory and install the necessary dependencies:
```bash
npm install
 ```
### Set Up the SQLite Database
The API uses SQLite by default. Ensure you have SQLite set up on your system or modify the database configuration as needed.

### Start the Application
Run the application using the following command:
```bash
npm run start
 ```

## API Endpoints

### 1. Fetch All Bikes
- **Endpoint**: `GET /bikes`
- **Description**: Fetch a list of all bikes in the library.
- **Response**: Array of bike objects.
  ![image](https://github.com/user-attachments/assets/a4517c25-b41a-4dab-a452-94ad49bd6078)


### 2. Add a New Bike
- **Endpoint**: `POST /bikes`
- **Description**: Add a new bike to the library.
- **Request Body**:
  ```json
  {
    "make": "string",
    "model": "string",
    "year": "number",
    "type": "string"
  }
   ```
- **Response**: The created bike object.
  ![image](https://github.com/user-attachments/assets/836efd3d-360d-4d5b-8d2f-eb989ec7a568)


### 3.Fetch a Bike by ID
- **Endpoint**: `GET /bikes/{id}`
- **Description**: Fetch a specific bike by its ID.
- **Response**: The bike object with the specified ID or an error message if not found.
![image](https://github.com/user-attachments/assets/9de3a623-da9b-48ac-92ab-63d33df61a3e)

### 4. Update an Existing Bike
- **Endpoint**: `PUT /bikes/{id}`
- **Description**: Update the details of a bike.
- **Request Body**:
  ```json
  {
    "make": "string",
    "model": "string",
    "year": "number",
    "type": "string"
  }
   ```
  - **Response**: The updated bike object or an error message if not found.
  - ![image](https://github.com/user-attachments/assets/f3767664-2135-4df2-97db-f31bd68a5010)

 
### 5. Delete a Bike by ID
- **Endpoint**: `DELETE /bikes/{id}`
- **Description**: This endpoint allows you to delete a bike from the library using its unique ID. If the bike exists, it will be removed from the database.

- **Path Parameters**:
  - `id` (string): The unique identifier of the bike to be deleted.

  - **Response**: A confirmation message indicating that the bike was successfully deleted..
 
  ![image](https://github.com/user-attachments/assets/d65c9722-479c-4890-9b45-c8248f92eecd)


  ## Error Handling

  ### Invalid Id call
 ![image](https://github.com/user-attachments/assets/43963678-1c9d-41c7-8628-8697183063bc)


