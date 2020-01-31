# Code Quiz 
### Test your knowledge of front end development concepts.
https://kcbobbe.github.io/code-quiz/

## Description

This application is a timed quiz that presents a user with a series of front-end web development questions. After answering a series of questions, the user is presented with their score and the option to enter their initials to log their high score.

This web application was created using HTML, CSS, JavaScript and Bootstrap. The main goal of building this application was to build a single page web application and to use JavaScript to dynamically render elements on a page.


## Installation

1. Clone the repository to your computer
2. Open the project in a text editor of your choice
3. Open the index.html file in your browser to view

## Usage 
1. First, click on the "Click here to begin!" button to start the quiz. This will start the countdown timer and show the first question.
2. Next, read the question and each of the answers below. Click on the best answer for the question. The next question will display, and a banner at the top of the page will give you feedback on your answer.
3. After answering all of the questions, the countdown will stop and you will be presented with your score. The score is a number out of 100 that is calculated using your accuracy and speed of quiz completion.
4. You have the option of entering your initials to add your score to the high scores list. You can click the "Play Again" button to try the quiz again, or click the "View high scores" button to the a list of scores.
5. If the counter runs out before you finish the quiz, the quiz will end and you will be only given points for the questions you were able to complete.

## Key Features

One of the features of this web application is a countdown feature. Once the user starts the quiz, a countdown starts. The user can see the counter decrease by one each second. When the timer runs out, the quiz ends. If the user finishes the quiz before the timer runs out, the countdown stops.

Another feature of this application is the ability to log your score and initials. This data is stored in local storage, so that the data can be accessed even if the page is refreshed. A user can view high scores and see a list of the scores and initials of other quiz attempts. Currently I am working on arranging the scores by highest scores.

Finally, the questions and answers of the quiz are stored in an object. The questions and answers are dynamically added to the page, and not hard coded. Questions and answers can easily be adjusted and added by modifying the object. No need to change any of the other code or HTML. 

## Future Improvements
1. <del>Make the high scores list in order of high to low score</del> Already completed
2. Add a progress bar to show how much of the quiz has been completed. This will give the user an idea of how to pace themselves thoughout the quiz.
3. Add a 'skip' button that allows the user to skip the question and come back to it if they have time at the end.
4. Add the option for selecting different which types of questions to include on the quiz. For example, a user would be able to select HTML and CSS questions but leave JavaScript questions unselected.
5. <del>Change the timer based on the total number of questions. For example, allocate 10 seconds per question.</del> Already completed

## Credits
https://getbootstrap.com/

Front page photo by Danial RiCaRoS on Unsplash

https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/

## License
MIT License

Copyright (c) [2020] [Katie Bobbe]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---


