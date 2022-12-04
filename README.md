# NFTIZE SERVICES

- create navbar responsive
- create the body services cards
- create the footer
- add authentication using the firebase
- save data in firebase with the id

## Firebase Authentication

- create 3 pages - login/signUp/Dashboard
- Dashboard is the page that will be protected and will open for the authenticated user

## Dropdown Navbar

- We will create a drop down navbar for the large screen and for the small mobile screen we require button to open menu and cross button to close all the way.
- Dosre component mein array ko bnake hm isko show kraeinge.
- Uske ilawa hm position iski absolute kreinge relative to navbar ki services.
- When we click the dropdown menu, It should go away
- So to implement it we will apply state

- Now we will set the position inside the services in the navbar

- onMouseEnter={() => setDropdown(true)}
  onMouseLeave={() => setDropdown(false)}

- We add these two logics all the way to apply the logic for the screen to show the navbar

- main logic is of the useState hook to use things that is it all the way.

- We use eventListener onMouseEnter , onMouseLeave to show and to leave the dropdown.

### Extra information

- items-center --- vertically center krta hai
- justify-center --- horizontally center krta hai
- import { FaTree } from "react-icons/fa";
- npm install --legacy-peer-deps     --- for peer dependencies issue