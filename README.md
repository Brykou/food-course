# Order food

Front-end for an app allowing to select food on a menu.

## Stack

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Redux](https://redux.js.org/) is used for global state management.
- [MaterialUI](https://material-ui.com/) is used for the design.

## How to run ?


    npm install
    npm run start
    

Access to http://localhost:3000 to use the app.

## Technical explanations

### Project structure

##### Files

**src** folder is organized as follow:

- **reducers** : Contains Redux reducers
- **actions**: Contains Redux actions and constants
- **containers**: Contains HoC to connect component to the state
- **components** Contains visual components
- **data**: Contains a stub for the data set, and helper for data loading

##### Components explanations

- **Menu**: Simple component that renders a list of MenuCourse, and control buttons
- **MenuCourse**: A specific course of the Menu, renders a list of MenuCard
- **MenuCard**: A Menu element that can be selected by the user
- **Breadcrumb**: Shows menu courses
- **Summary**: Final page, shows a summary of user's order

##### Components hierarchy

App.js

↳ Breadcrumb

↳ Summary

↳↳ Menu

↳↳↳ MenuCourse

↳↳↳ MenuCard

### Specific behavior

- Each component has its own container used to map state and action. See [Redux doc](https://redux.js.org/introduction/examples) for more informations
- There is no routing. Switch between pages is manage using data `currentCourse` stored in global state. An nice improvment would be to add routing with [React-router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) and to bind the state to the routing
- Even if those data don't change, total number of course (`numberOfCourse`) and list of menu dishes (`dishes`) are a part of the initial global state, because they are used in almost all components
- Navigation can be done either using buttons at the bottom, or using breadcrumb
- Once the final step is reached, it's impossible to come back
- The user can reach the final step only if he has selected items
