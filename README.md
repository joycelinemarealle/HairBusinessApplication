Hair Booking System

Project Overview
 This is an online booking system for a hair business, allowing customers to book appointments, view available services, and manage their bookings. The system provides both customer-facing and admin-facing functionalities to streamline business operations.

Functional Requirements
Customer Registration and Management
Customers can register with their name, email, and phone number.
Upon registration, customers receive a unique customer ID.
Customers can log in, view their profile, and see their upcoming and past appointments.
Customers can delete their profile, removing all associated appointments.

Appointment Scheduling
Customers can browse available services and select an appointment date and time.
Customers can choose a specific hairstyle and confirm their booking.
Customers can view, update, or cancel their appointments.

Service Listings and Management
The system displays a list of services (e.g., braiding, blowouts) with duration and price.
Admin (Joyceline) can add, update, or delete services.
Customers can search for services based on type and price.

Appointment History and Transactions
Customers can view their appointment history and completed bookings.
The system tracks all transactions (i.e., bookings, cancellations) for admin review.

Non-Functional Requirements
Scalability: Support increasing numbers of users and appointments.
Security: Encrypt customer data and ensure secure logins.
Persistence: Store all data in a PostgreSQL database.
Performance: Ensure responses within 2 seconds.

Technologies to Use
Backend: Python (Flask or FastAPI) with Object-Oriented Programming principles.
Frontend: React (with basic hooks and state management).
Database: PostgreSQL for storing data.
Deployment: Docker for containerization.

