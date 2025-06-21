# Drive Ease

Drive Ease is an online platform that allows users to browse, order, update, and manage car listings. It offers a wide range of car entries, with functionalities to create, edit, delete, and track orders. Built with Node.js, Express, MongoDB, and Mongoose, it provides a seamless experience for managing car inventories and customer orders.

## Live Link: https://project-44.netlify.app/

## Technologies Used

- **React.js** 
- **Tailwind css** 
- **TypeScript** 
- **Redux**  
- **RTK Query** 

## Features
- CRUD operations for car entries
- Mongoose schema validation with proper error message
- Environment variable configuration
- Development and production modes
## Prerequisites



## Getting Started

Follow these steps to set up and run the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/Al-amin07/project_4_frontend.git
```

## 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

   ```bash
   cd project_4_frontend
   npm install
   ```

## 3. Set Up Environment Variables
Create a .env file in the root of the project to store environment variables, such as MongoDB URI or any secret keys. Here’s an example:
```bash
VITE_STRIPE_PUBLIC_KEY=
VITE_API_URL=https://carstore-lake.vercel.app/api
VITE_IMGBB_KEY=635aed7c10dd4b1cbf..412d2a8f21cb
```

## 4. Run the Project
- **Development Mode**
To start the project in development mode with hot reloading:
```bash
npm run dev
```
- **Production Mode**
If you prefer to run the project in production mode:
```bash
npm run build
```
