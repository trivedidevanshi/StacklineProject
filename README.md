# Product web page

This project is a product display web page created using React to produce the view and Redux to manage the state. 

A JSON file consists the data source which is populated on the web page.
An api call is mocked using a promise which resolves in 1 sec.

Redux:
 - Actions: 
 
 FETCH_PRODUCT_FROM_ID_REQUEST - action is called when the page 1st loads.
 
 FETCH_PRODUCT_FROM_ID_SUCCESS - action is called when the mock api resolves the promise.
 
 FETCH_PRODUCT_FROM_ID_FAILURE - action is called if an error occurs.
 
 - Reducer:
 
 Sets the product data in the store on FETCH_PRODUCT_FROM_ID_SUCCESS.
 
 - Store
 
 Stores the product data.
 
 React:
 - Components:
 
 ProductsContainer: It consists of 2 child components: 
 1) Sidebar - Displays the product data.
 2) ProductsDetails - Consists of a table and graph to display product details. 
 
 Graph is created using react-c3js library.

## Available Script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
