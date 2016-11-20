#Pittsburgh Must-Do City Map
##About The App
This application is a local map of Pittsburgh Pennsylvania and a list of exciting places to visit. The user is able to click on list items or markers which displays an infwindow with more information. The infowindow contains,: a streetview, address, website and Wikipedia articles if available. A filter input exists where the user is able to type and the results are updated in real time. The user then can delete the text to bring back the original markers and list items. 

##Application Specifics
This application uses: Jquery, Knockout, Wikipedia's API and Google Map's API. Both API's run asynchronously to not interfere with the application's render time. Application Elements:

- index.html initially calls all needed scripts and external files. Elements are added with Knockout bindings. The application is primarly divided into two sides, Left (Filter and List Items) and Right (Map). Wikipedia's API is wrapped in a function and called when users click on list items or markers. 

- app.css sets the styles for the application. A media query is utilized to give the application a better look on tablets and mobile devices. 

- app.js begins with location data hard coated in the beginning. The next element is the Initmap function which draws the initial map, then it calls the allPins and filterList function. The allPins function creates markers/infowindows and sets them as hidden. The filterList function features the knockout computed function which is what draws the pins on the map. The Knockout data-bindings update the map as the filter function is used or when the marker functions are called. 