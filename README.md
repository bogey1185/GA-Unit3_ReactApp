# LeaseGuard

The LeaseGuard application provides a user friendly interface for the documentation of property damage at the beginning of a lease term. The purpose of the application is to provide a sense of transparency and fair play to residence leasing.

## About the Author

I am a student at General Assembly in its Web Development Immersive program. As a GA student, I was tasked with creating and deploying a web application that uses decoupled front and back end frameworks to deliver content quickly and efficiently. Many people have experienced the frustration of spending hours cleaning their rental apartment, only to have the landlord (wrongly) retain the security deposit due to damage allegedly caused by the tenant. With the advent of cellular phones with high quality cameras attached, the time is ripe to develop an application that makes documenting the state of a rental unit easy and efficient. 

The front end of this application is built primarily with React (including the Create-React-App module), along with some static HTML and CSS. The back end is an ExpressJS framework that utilizes Mongoose and MongoDB for database functionality. 

## Getting Started/Installation Notes/System Specifications

This application should work on all modern web browsers. A mobile application deployment for Android and iOS devices will follow in the future.

## How to Use the Application

To use the application, simply navigate to https://leaseguard.herokuapp.com/. 

## User Stories

1. At the home page, the user must either create an account or log in. In either case, user must declare if he or she is a landlord or tenant. 
2. Product flow - In its current state, a new property is initiated by the landlord. Once the landlord is logged in, he or she can enter the address of a property to instantiate it. Before the address is established in the database, it is run through the US Postal Service API, which validates and normalizes the address.
3. Once a property is created, the landlord can delete or edit the property at will (however, landlord cannot delete the property from LeaseGuard's servers entirely). Landlord can also generate a unique property code that anyone can use to access the property's details.  
4. Landlord shares the property code with tenant. Once tenant has the code, he or she can log into the website, and access the property directly. Tenant can then upload photos and text to document the physical state of the property at the start of the lease.

## Upcoming features

1. Groundwork is already laid that will allow the property to automatically lock down to prevent additional edits after the tenant finishes documenting the property. This will be implemented in the short term.
2. Landlord UI will be upgraded to notify the landlord when the tenant has finished uploading content. In this way, the landlord can review progress of the beginning lease term, and timely review the content uploaded by the tenant.
3. Zoom functionality for photographs. 
4. Multer functionality, allowing for the upload of actual photographs into the LeaseGuard database.
5. Auto-generated email notifications for tenant and landlord when activity occurs on the property.
