# UserManagement

## About application
User will be landed on the home page where user will have two options to choose
1. click here to navigate user management module
2. click here to navigate payroll management module( by default it is disabled)

when user clicking on `click here to navigate user management module` user will navigate to user details feature module which is declared as `lazy module`

## List of Modules
1. Shared Module
2. User details Module(`lazy module`)

## Shared Module
It serves shared service across application. we have created few reusable methods in user service and a shared variable which will be persisted across the application

## Model
`User` model is created for type checking. Service response will be type casted to array of users or user based on the service we invoked

## User details Module
It is declared as a lazy module which has two components
1. User List component
2. Edit user component

## User List component
Where we will display the list of users available in the system in a table and given options to edit/remove the user and also provided option to edit all the users. User will be landed on the edit user component with userId as a `route parameter` When user clicking on the edit.

Give below functionalities are implemented in this component
1. Displaying user list
2. Removing user
3. Edit all users

## Edit user component
We have configured route parameters to get know the which user is being edited.
User can see multiple input elements with user details populated by default when user landed on this page and an option is given to edit and save the changes

## Environment details
Used environment.ts files effectively to manage the environment URLS etc.




