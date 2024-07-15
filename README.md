## **User Management System**
  The User Management System is a Recat-based platform designed to provide system administrators with diverse options for managing users and viewing their details. 
  This README file provides detailed instructions on how to download, build, run, and view the application.

## Features
   - **User Management:** Create, update, delete, and manage user accounts.
   - **User Details:** View detailed information about users.
   - **Admin Options:** A wide range of administrative options for user management.

## Installation
1. **Clone the repository:**
  ``` bash
  git clone https://github.com/Dvora-K/Users-Management-System.git
  ```
2. **Navigate into the project directory:**
```
cd Users-Management-System
```
3. **Build the Docker image that package the project.**
Replace [IMAGE_NAME] with the desired name for your Docker image.
 
  ```bash
  docker build -t [IMAGE_NAME] .
  ```
4. **Run the application**
Replace [IMAGE_NAME] with the name of your Docker image.

 ```bash
 docker run -p 3000:3000 [IMAGE_NAME]
 ```
5. **View the application**, open your web browser and navigate to:
``` http://localhost:3000/ ```
