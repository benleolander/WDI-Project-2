# General Assembly Project 2: React Hackathon (Pair Project)

## Timeframe
48 Hours

## Technologies used
* React
* JavaScript (ES6)
* HTML 5, CSS 3 with SASS
* Axios
* Babel
* Yarn
* Open Trivia Database API (https://opentdb.com)

## App Overview
Brain Training is a take on the pub quiz format. On starting the app, the user can select a category for their questions, along with a difficulty level.

The app will then generate 10 questions fulfilling the user's criteria. These questions are presented to the user one by one, with feedback being given immediately as the user answers the questions.

Once the game is over, the user is presented with their final score, and is given the option to submit their score to a leaderboard. They are then presented with the option to play again, which restarts the app.

## Process

This project is a hackathon designed to cement knowledge of React and external APIs. Working as a pair, we have created a pub quiz style trivia game using the Open Trivia Database API.

When the user begins the game, they first select a category and a difficulty level. Their responses here are passed into the BrainTraining.js component as props. The BrainTraining component is where the main logic of the game sits. When the component mounts, it immediately uses the props to make a request to the OpenTriviaDB API to generate the questions.

![Axios API request using props](https://user-images.githubusercontent.com/44977343/55806072-8063bf80-5ad7-11e9-8ce4-7d505cccde5c.png)

Each question is returned by the API as an object, with keys of incorrect_answers (an array), and correct_answer (a string). When the question is presented to the user, we splice the correct answer into the array of incorrect answers at a random position.

![Randomise answer position function](https://user-images.githubusercontent.com/44977343/55805723-e9970300-5ad6-11e9-8f29-d6edef6d9d52.png)

## Challenges

The biggest challenge for this project was the time frame. As a 48 hour hackathon, including planning time, scoping for MVP of the project was key. We had to scale back our MVP during the development, as we realised that we would not be able to deliver on all of the features we had initially planned (See Future Features below). Additionally, some bugs remain in the app, as we did not have time to finish building out the high score table to be presented to the user at the end.

Additionally, the API from OpenTriviaDB caused us some problems. The API appears to be taken offline for maintenance every day between 10am & 11am GMT, which caused some hair-raising moments on the second morning of development.

## Wins

This project taught us a lot about how to correctly scope an MVP. Although we did have to make adjustments to the feature set of the app, I'm pleased that we were able to produce a functioning app in two days.

I'm also happy with the underlying logic of the game (bugs notwithstanding). We avoid having to repeatedly loop over the array of questions stored in State by always displaying the question at index 0. Once this question has been answered, this question is then Slice'd away, leaving the next question at index 0.

## Future features

In addition to coming back and fixing the bugs, when scoping the project, we had planned on their being two modes; a Brain Training mode where the user would answer infinite questions at their own speed, and a Quiz mode where they would answer questions against a timer and have their score recorded. I'd like to eventually come back and implement these. 
