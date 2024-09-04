1. We are goona build the food ordering App like swiggy or zomato
2. We need to plan what we are planning to build in the website.
3. If you plan you can write the code easily.
4. Then start looking into what components our app have?
5. 


We can pass the dynamic date to the resturant card by using props.

Config Driven UI - Website is driven by data or Ex : The UI looks different in different region based on the data. Like swiggy might have different offer in Hyderabad, Delhi, Banglore and mumbai

array.join(", "); comma seperated array will be printed

Each child is a list should have a unique key property- This error is asking to create a unique component. So we need to pass a unique key when you are doing `map`. becuase when new data comes in react does not know what needs to be updated . so it renders all the data, instead of that one new data, so we need to add key.
Never use Index as key is a bad practice. Index will generate 0..N numbers for keys. It will cause an issue if order of data changes
