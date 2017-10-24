# Georgie's Beer Favorites 

Simple CRUD Application using the LoopBack API framwork and the Create-React-App Generator

## Set-Up

### LoopBack
1. Create a new branch for this version of your app
2. Delete all folder/files
3. Install the LoopBack CLI globally
```
npm install -g loopback-cli
```
4. Create a LoopBack application
```
lb
```  
see LoopBack docs - [Getting Started](http://loopback.io/getting-started/)

5. Add your current mLab MongoDB database asa data source
```
lb datasource
```
see LoopBack docs - [Defining data sources](http://loopback.io/doc/en/lb3/Defining-data-sources.html)

6. Enter your mLab connection string in the URL question and leave all other fields blank

7. Create a model through the LoopBack CLI model generator
```
lb model
```
see LoopBack docs - [Using the model generator](http://loopback.io/doc/en/lb3/Using-the-model-generator.html)

8. Update the .json file of the created model to include to connect to the right collection
```
  "mongodb": {
    "collection": "your-collection-name"
  },
```
9. Test your API through /explorer URL

### React.js
1. Install the create-react-app globally by
```
npm install -g create-react-app
```
see React docs - [Getting Started](https://github.com/facebookincubator/create-react-app/#getting-started)

2. Create a new React app in the client folder
```
create-react-app client
```
3. Navigate into the client folder and start the React application
```
npm start
```
4. The React starter screen should open in new browser tab

### Connecting LoopBack API & React Front-End
1. Open the client/package.json file and add following code 
```
"proxy": "http://localhost:4000",
```
see React Docs - [Proxying API Requests in Development](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)

2. Open the server/config.json file and update the port to 4000
```
"port": 4000
```

## To Do

Build the front-end for your app using React. I will use my beer list example as a reference to what needs to be completed:
- App component should render a list of all beer names in the database
- Add a "Delete" button next to every beer name, which when clicked deletes the beer
- Add a form underneath the list, which when submitted adds new beer to the list
- Create a new React component for the current beer list and form code (BeerList)
- Replace the code in App.js with just the code needed for a React router (Code Along)
- Create a detail component which displayes all properties (name, brewery, alcohol content) of a beer  
- Wrap every beer item in a link, which when clicked takes the user to the designated beer detail page
- Add a "Back" button under the beer details, which when clicked takes the user back to the beer list
- Add a "Edit" button under the beer details, which when clicked takes the user to a form where the beer can be edited
- Redirect user back to beer detail page, if user updates beer

All the CRUD operations above should persist in your mLab database

- Use React Components whereever abstraction can be beneficial
- Integrate a CSS framework into your app i.e. Bootstrap, Foundation, etc.
- Integrate user authentication for creating, updating and deleting items into your app

## General Notes
Commit & push to your new branch often, especially after the first set up steps.
