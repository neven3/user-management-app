# User Management Demo App

## Libraries used
- **React**
- **Redux** for state management
- **React Toastify** for request error handling
- **Redux Thunk** for asynchronous operations
- **Formik** for form handling
- **Yup** for form validation
- **Cropper** for image cropping
- **React-Modal** for the create-new-user modal/form
- **prop-types**

## Functionalities

### Login screen
The login screen contains a simple login form with the e-mail and password fields. Both fields are validated when blurred. An unsuccessful login attempt displays a toast with an error message, while a successful login attempt redirects to the main page. The token received in the response is saved in `localStorage`, and state is updated with the `isLoggedIn` property set to `true`. If a user is logged in or there is a token saved in `localStorage`, attempts to get to the login screen will be automatically redirected to the main screen. Likewise, if a user is not logged in and there is not a token in `localStorage`, every attempt to access the main screen will redirect to the login screen. The `isLoggedIn` state changes when the user clicks the Logout button on the main screen, which also deletes the token from `localStorage`.

### Main screen
The list of users from https://reqres.in/ is immediately shown when entering the main screen. The search bar automatically filters the users in the list. Since the API does not allow filtering of the list, and I wanted it to mimic a real-world scenario where there would be an API call for every key change, the code fetches the entire list every time and performs the filtering on the frontend. The filtering starts with the second character as per instructions. When creating a new user the user gets added to `createdUsersList` in `localStorage`, so it doesn't get lost when filtering the list. Upon fetching the list, the created users list (from `localStorage`) then gets combined with the list of fetched users.

### Create-new-user modal
Clicking the 'Add user' button opens a modal with the create-new-users form. The 'Avatar URL' field does not required a value but, if given one, expects only valid URLs. The form also includes the image upload/resize input. The image is not stored anywhere online, nor is it used when a user is created. If a link is not provided to the 'Avatar URL' field, the user will automatically be given an avatar with the photo of a famous Croatian actor and martial artist. The form has validation and error handling (with success or error toast messages).

## Notes
- The design is responsive
- The demo was created using exclusively function components
- All or almost all input elements have their state managed locally using the `useState` hook. Here I went by what the authors of Formik and Dan Abramov say about the location of form state (https://formik.org/docs/overview#why-not-redux-form).
- I did not export/import components from a single `index.js` file because each component requires only one or two other components. And getting them from the same folder, but having to go back a step and then enter the same folder seemed unnecessary for this kind of application/demo. 
- Since there are only two bigger components holding all of the others, I decided to leave all the styling in one file - the `index.css` file. But the file is getting too big and somewhat out of hand and should be compartmentalized by components.