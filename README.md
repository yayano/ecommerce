# eCommerce Website

## Overview

The eCommerce Website is a comprehensive online shopping platform designed to provide users with a seamless shopping experience. The platform supports browsing products, managing user accounts, placing orders, and handling payments. It also includes an admin dashboard for managing products, orders, and users.

![eCommerce Overview](/public/assets/overview.png)

Explore the live project at: [PROMO PHONE](https://ecommerce-one-alpha-77.vercel.app/)

Or view the source code on GitHub: [GitHub Repository](https://github.com/your-username/ecommerce-website)

## Features

- **Product Browsing:** Users can browse a wide range of products with detailed descriptions and images.
- **User Accounts:** Customers can create accounts, manage their profiles, and view order history.
- **Shopping Cart:** Add products to a cart, update quantities, and proceed to checkout.
- **Order Management:** Place orders, choose payment methods, and track order status.
- **Admin Dashboard:** Manage products, view and process orders, and manage user accounts.
- **Search and Filters:** Advanced search and filtering options to find products easily.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (React/Next js)
- **Backend:** Node.js with Express 
- **Database:** MongoDB
- **Authentication:** JWT
- **Payment Integration:** Stripe
- **Hosting:** Vercel

## Installation

### Prerequisites

- Node.js and npm (or yarn)
- MongoDB database server


### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/ecommerce-website.git
    cd ecommerce-website
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASS=your_database_password
    PORT=your_preferred_port
    JWT_SECRET=your_jwt_secret
    PAYMENT_API_KEY=your_payment_api_key
    ```



4. **Start the Development Server:**

    ```bash
    npm start
    ```

5. **Access the Application:**

    Open your browser and navigate to `http://localhost:your_preferred_port`.

## Usage

1. **Accessing the Admin Dashboard:**
   - Navigate to `/admin` and log in with admin credentials.

2. **Managing Products:**
   - Use the admin dashboard to add, update, and delete products.

3. **Processing Orders:**
   - View and manage orders from the admin dashboard.

4. **Managing Users:**
   - View and manage user accounts from the admin dashboard.

5. **Customer Interaction:**
   - Customers can browse products, manage their accounts, add items to their cart, and place orders.

## API Endpoints

- **POST /api/users**: Register a new user.
- **GET /api/users/:id**: Retrieve user information.
- **PUT /api/users/:id**: Update user information.
- **DELETE /api/users/:id**: Delete a user.

- **POST /api/products**: Add a new product.
- **GET /api/products**: Retrieve a list of products.
- **PUT /api/products/:id**: Update product information.
- **DELETE /api/products/:id**: Delete a product.

- **POST /api/orders**: Place a new order.
- **GET /api/orders**: Retrieve a list of orders.
- **GET /api/orders/:id**: Retrieve order details.
- **PUT /api/orders/:id**: Update order status.
- **DELETE /api/orders/:id**: Cancel an order.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact:

- **Name:** Yahia
- **Email:** Boussetta13yahia@gmail.com
- **GitHub:** [yayano](https://github.com/yayano)
