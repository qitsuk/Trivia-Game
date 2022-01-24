## Trivia game
Trivia website written in Vue. Should include options to login/register a user, keep a personal highscore, and answer trivia questions in different categories.

## TO DO

# Routing
prevent non-programmatic routing to /questions and /results (is this called guarding routes?)

# vue x state management
make the vue x store functional:
    getters and setters for values in state, learn to make components send to and get data from vue x store

# contact with user-api
In ResultScreen:
  post/patch username and highscore (if > previous highscore) after checking for correct answers

(optional) In StartScreen:
    get user in order to display existing highscore in TriviaHeader while playing

# contact with questions-api
In StartScreen:
    get available question categories, difficulties etc

In QuestionScreen:
    get question objects based on user input at startscreen.

# component html and logic
details in each component file

# CSS
optional styling of components if there is time