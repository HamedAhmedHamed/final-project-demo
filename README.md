# Bistro Bliss Booking CRUD Application

## Brief Description
this application was built using React & Laravel. It's a restaurant booking App. users are identified as Roles: **guest**, **user**, **admin**.

A **guest** is the one who can see the website and browse the available menu items.

If the **guest** liked a certain menu item, they should register/login to the app, so basically a logged in guest is a **user**.

A **user** can book a table whenever they want, and then have a page where they can see the status of thier bookings.

Then, there is the **admin**, how can accept, decline each of the users' bookings, and can also *CRUD* the menu items.

### Role-based Authorization

it is observed that the app's authorization (which is handled in the React App) is organized as follows:

- **Guest**
  - Login Page
  - Register Page
- **User**
  - Book a table Page
  - My bookings Page 
  - Profile Page
- **Admin**
  - Modify menu Page
  - Review bookings Page
- **Shared** 
  - Home Page
  - About Page
  - Menu Page

### To start the project:

start cloning the project into your workspace (ideally it would be in the htdocs directory of the XAMPP installation directory)

```git
git clone https://github.com/HamedAhmedHamed/final-project-demo
```

then, go to ./front-end directory and install the dependencies:

```npm
npm i
```
After that, build the React App:
```npm
npm run build
```

Go to the back-end directory to install the dependencies:
```php
composer install
```
First, generate Laravel Encription Key:
```php
php artisan key:generate
```

To the run the Backend App:
```php
php artisan serve
```
Finally, go back to the fron-end to run the React App:
```npm
npm run preview
```

Don't forget to adjust the .env file
- first, copy the .env.example
- change it to .env
- change these fields into:
```env
FRONTEND_URL=client_app #e.g. http://localhost:5173
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=local:5173
```

If you you want to seed the database:
```php
php artisan db:seed
```

## Be Aware

The update functionality on the the menu items isn't working correctly.

The App may be not that complete, some of the problems that haven't been solved yet:
- responsivity
- lagging/slow response
- not implementing Skeleton fallback for all the components
- not lazy loading all the components
- heavy focused on the frontend that the backend
- not writing tests
- not implementing toasts for interactivity

These problems would be looked for.