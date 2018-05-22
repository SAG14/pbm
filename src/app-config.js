// Application Configuration file

// Set the environment to DEV/PROD
let isDev = true;

let currPath;

if (isDev) {
    currPath = 'http://localhost:3100';
} else {
    currPath = 'http://hs-minimag-backend.azurewebsites.net/';
}

export const path = currPath;