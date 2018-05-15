// Set the environment to DEV/PROD
let isDev = true;

let currPath;

if (isDev) {
    currPath = 'http://localhost:3100';
} else {
    currPath = 'http://hs-pbm.azurewebsites.net';
}

export const path = currPath;