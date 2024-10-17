import { Router } from 'express';
import axios from 'axios';
const router = Router();
const people = [
    {
        id: 1,
        name: 'JD'
    },
    {
        id: 2,
        name: 'Sarah'
    },
    {
        id: 3,
        name: 'Bob'
    }
];
// Get Person By ID
router.get('/api/person/:personId', (requestObj, responseObj) => {
    const person = people.find((personObj) => {
        if (personObj.id == +requestObj.params.personId) {
            return personObj;
        }
        return false;
    });
    responseObj.json(person || {
        message: 'A person with that ID could not be found.'
    });
});
// Random quote GET route
router.get('/api/quote', async (requestObj, responseObj) => {
    if (!requestObj.query.cat) {
        return responseObj.json({
            message: 'You must provide a cat parameter with the category that you would like'
        });
    }
    const url = `https://api.api-ninjas.com/v1/quotes?category=${requestObj.query.cat}`;
    try {
        const res = await axios.get(url, {
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        responseObj.json({
            quote: res.data[0].quote
        });
    }
    catch (error) {
        responseObj.json({
            message: 'You must type an existing category'
        });
    }
});
export default router;
