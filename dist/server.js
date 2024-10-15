import express from 'express';
const app = express();
// We need a database of quotes
const quotes = [
    'JavaScript is the duct tape of the internet.',
    'Learning JavaScript is like learning to ride a bike: once you get it, you never forget.',
    'The best way to learn JavaScript is to build something with it.',
    'JavaScript is the language of the web, and the web is the future.',
    'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    'JavaScript is the key to unlocking the full potential of the web.',
    'The more you practice JavaScript, the better you will become.',
];
/*
Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
- Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should create a variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your random quote string
*/
app.get('/api/quote', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    responseObj.send({ quote: randomQuote });
});
// app.get('/', (_, responseObj) => {
//     responseObj.send('Hi there from the server!');
// });
// app.get('/api/data', (_, responseObj) => {
//     const data = {
//         name: 'JD',
//         age: 44
//     };
//     responseObj.send(data);
// });
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
