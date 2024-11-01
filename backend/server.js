const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Scheduler = require('./scheduler');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const scheduler = new Scheduler();

app.post('/events', (req, res) => {
    const { start_time, end_time } = req.body;
    const result = scheduler.addEvent(start_time, end_time);
    console.log(result);

    if(result.success){
        res.status(201).json({
            result
        })
    }else{
        res.status(400).json({
            result
        })
    }
})

app.get('/events', (req, res) => {
    res.json(scheduler.getEvents());
})

app.listen(PORT, () => {
    console.log(`Server in running on localhost:${PORT}`)
})