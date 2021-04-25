# SWEN 444 - Team 3 - Artistree

Jake Waclawski (jmw3638), 
Shane Burke (sdb5978), 
Miguel Rosario (mr2527), 
Jianyu Wang (jw3513), 
Saadman Tareq (st7941)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Public Artistree URL:

[Artistree](https://shanedonburke.github.io/Artistree)

## Executing The Program Locally

Clone project via Git to locally directory.

For first time setup, run in the project directory:

### `npm install`

Then to start, run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Artistree Navigation

### Gallery / Main Page - Task 1

The user will be presented with the main page - the gallery. From here the user will see the Artistree logo (leaf) which is clickable and will bring the user back to the main page. There are options that the user will have to choose from on this main page. Other options include the Canvas, My Submissions, A modal menu, and Filtering / Sorting options for the gallery. The Modal menu includes links to log-in, Account and EULA/Documentation. Upon clicking the Canvas tab or the “+ New Submission” button the user will be redirected to the canvas where they may create their art.




### Canvas - Task 2

The canvas is a feature that will allow users to create unique and original artworks with a selection of tools. Some of these tools include the __Brush__, __Pencil__, __Fill bucket__, __Line__, __Ellipse__, __Rectangle__, __Layers__, __Eraser__, __Text__, __Eyedropper__ and __color picker__. Along with this the ability to zoom in and out. When a user has concluded their work they may either post to the gallery or discard their work. 

### My Submissions - Task 3

The “My Submissions” is a section where a registered user may enter and view their past submissions. Once here the user is presented with the feedback for their post. It will have comments from other critics and users. 

### Leaving Feedback - Task 4

The feedback can be found upon clicking on any post within the gallery as a user has a right to report content that they feel violated the EULA or rules of Artistree. Upon clicking the report button a new window will appear that gives the users multiple options for reporting and an opportunity to discuss their reasoning as to why they wanted to report the post with a submissions button for once they want to send in their report. In the situation that a user clicks the report button on accident, they can cancel out of the menu simply by pressing cancel. 

### Reporting a Post - Task 5

Reporting a post is one of the features that users can select an inappropriate post from the gallery to report. There will be a selection of categories and a textbox of explanation for the user to report. 

### Unsupported Features

As of right now, there is only one submission viewable from the “My Submissions” link. A future release will show a list of the user’s submissions when the link is clicked. The “filter” and “sort” functions of the gallery page have not been implemented. In the canvas, the only supported tools are __Brush__, __Eraser__, and __Choose Color__. 

We have access to an account page there is no link to an account page. We have a very primitive login feature that does not actually “log” us into anything. 

## Bugs


## Fixes
1. Fixed a problem that occured on refreshing a page that would cause the website to 404.
2. Fixed the linking problem so the EULA is now accessible through the proper means.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
