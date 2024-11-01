# Event Scheduler

This is a simple event scheduler. It allows users to add events within a 24-hour perion. This also ensures that no two events overlap. This is built using Angular for front-end and Node.js for backend.

## Features

- Users will be able to add event with start and end times.
- The events are displayed on a screen.
- Events are checked before for any overlapping.
- Messages for success and error states.

## Thought Process

1. The primary goal was to create a simple event scheduler with a minimal UI to add and view events. And also the users get immediate feedback about the events entry. 

2. I decided to code it in Node.js for backend as I already have a grip on it and for the frontend, I have no idea about Angular, thought I learnt on the go and implemented a simple app.

3. I have also used TailwindCSS to style the components.

4. I have added error handling, so that the users get meaningful feedbacks when they enter inputs.

## Installation

1. **clone the repository**
```bash
   git clone https://github.com/premchandellendula/event-scheduler-koach.git
```

2. Switch to frontend

```
cd frontend
```

```
npm install
```

```
ng serve --open
```

3. switch to backend

```
cd backend
```

```
npm install
```

```
node server.js
```