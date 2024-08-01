# Animal Daycare Booking Application

This application provides an interface for booking animal daycare services. It includes a booking form where users can input details such as the owner's name, animal type, hours requested, and date of service. A pricing engine calculates the cost based on the selected options. Additionally, an admin page displays all the bookings.

## Booking Form

Collects the following information:
First Name
Last Name
Animal Name
Animal Type (Dog/Cat)
Hours Requested (min 2, max 8)
Date of Service

## Pricing Engine

Base charge: $20
Additional charges:
Dogs: $10 per hour
Cats: $5 per hour

## Admin Page

Displays all bookings with relevant details. (Password for Admin page is '12345').

# Project Structure

* src/components: Contains reusable React components.
* src/containers: Contains container components like CreateBooking and AdminPage.
* src/utils: Contains utility functions, including the pricing engine.
* src/tests: Contains unit and E2E tests.

### Ruby version
This project uses Ruby version 3.0.2. Ensure you have this version installed using a version manager like rbenv or rvm.

### Dependencies

* Rails: 7.0.2
* PostgreSQL: Database for storing and creating Bookings
* Node.js: Required for compiling JavaScript assets.
* Yarn: JavaScript package manager.

### Configuration

#### Clone the Repository:
```
git clone https://github.com/your-username/cat-and-dog-sitting
cd cat-and-dog-sitting
```

#### Install Required Gems:
```
bundle install
```

#### Setup Environment Variables:
Create a .env file in the root directory to store sensitive information like database credentials. Example:
```
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
```

### Database creation
To set up the database, run:
```
rails db:create
```

### Database initialization
To initialize the database schema and seed data, run:
```
rails db:migrate
```

### How to run the test suite
This project uses RSpec for testing rails backend application. To run the test suite:
```
bundle exec rspec
```

Also this project uses JEST for testing react frontend application.
```
npm test
```

Ensure all tests pass before deploying.

### Deployment instructions
#### Render
This application can be deployed on Render. Ensure your database and environment variables are set up on the Render dashboard.

* Build and Deploy:

```
git push render main
```

* Migrate Database:
After deploying, run the migration command via the Render dashboard or SSH.

* Netlify (Frontend):
If using Netlify for the frontend, ensure CORS settings are properly configured in the backend.

* Additional Information

### CORS Configuration
Ensure CORS is correctly set up to allow requests from your frontend domain. Modify config/initializers/cors.rb to include your frontend's URL:

```
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://your-frontend-domain.netlify.app'
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```
## Future Goals 
* Add user session and authentication system
* Bind bookings to user and options to edit or cancel bookings
* Add user dashboard to show previous records
* User can also upload images of pet and provide more details
* Admin can change status of each booking
* A customer review section

