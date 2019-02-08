# DOGGO (and cats)

Through multiple calls to all avaialble, known, animal rescue APIs, this application aggregates a list of all known adoptable dogs and cats, and makes their information accessible in the application. 

## About the Author

I am a student at General Assembly in its Web Development Immersive program. As a GA student, I was tasked with creating and deploying a web application that uses decoupled front and back end frameworks to deliver content quickly and efficiently. I chose to create this application because my wife and I have a passion for adoptable animals and I believe this application will make it easier for animals-in-need to find forever homes! The front end of this application is built primarily with React, along with some static HTML and CSS. The back end is an ExpressJS framework that utilizes Mongoose and MongoDB for database functionality. 

## Getting Started/Installation Notes/System Specifications

XX~~~~~~~~~~~~~~~~~~~~~~~~TBD~~~~~~~~~~~~~~~~~~~~~~~~XX

## How to Use the Application

XX~~~~~~~~~~~~~~~~~~~~~~~~TBD~~~~~~~~~~~~~~~~~~~~~~~~XX

## User Stories

1. User has the option of creating an account, or using the website without login.
2. Without a login:
    * user will be able to click on the "Find Dogs" or "Find Cats" tabs and enter search criteria (WF2);
    * Search criteria will be via drop down menus (unless stretch goal of search algorithm is met).
    * user will click search;
    * after search is initiated, the app will automatically query all known adoptable pet API's and respond with search results matching the query;
    * user will be able to review search results and click on an individual animal for more information (WF3);
    * additional information in animal's show page will include name, current location, name of shelter, contact information for shelter, link to shelter's website (WF4+5);
    * user can "like" an animal to increase its visibility to people--animals with more likes will appear higher in search results in the future.
3. With a login: 
    * in addition to the above functionality, user will be able to create an account (WF6);
    * within the account, user will be able to edit, update, and delete the account;
    * account will include a "save animal" feature, where user can favorite the animals he or she likes and wants to save/follow them. Followed animals will have their placards viewable in the account area. 
4. Admin login
    * Admins/shelters can create animal profiles.
    * Animal profiles created by admin will be searchable in addition to those pulled from APIs.


## Nice to Have Features

1. Multi photo display functionality, where user can click on "see more photos" link, and be taken to a carousel of photos.
2. Use React Browser Router to generate links for specific animals so that links to specific animals can be shared with other people.


## Stretch Goals

1. Google maps functionality -- shows you where the pet's shelter is located. Uses user's current location to show distance. 
2. Search filters based on user location -- ie. clicking a "find pets close to me" box before searching will automatically put the pets closest to the user at the top of the results.
3. Multer functionality to store photos, instead of using photo links (API queries to populate database would need to auto-download photos if possible).
4. Message board where registered users can communicate with one another.
5. Search algorithm for intelligently searching animals in mongoDB.


## Contributors

XX~~~~~~~~~~~~~~~~~~~~~~~~TBD~~~~~~~~~~~~~~~~~~~~~~~~XX

## Dev Documentation

XX~~~~~~~~~~~~~~~~~~~~~~~~TBD~~~~~~~~~~~~~~~~~~~~~~~~XX

## Upcoming Features/

XX~~~~~~~~~~~~~~~~~~~~~~~~TBD~~~~~~~~~~~~~~~~~~~~~~~~XX
