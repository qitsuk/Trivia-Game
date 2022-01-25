## Trivia game
Trivia website written in Vue. Should include options to login/register a user, keep a personal highscore, and answer trivia questions in different categories.

## TO DO

# Routing
prevent non-programmatic routing to /questions and /results (is this called guarding routes?)

# contact with user-api
In ResultScreen:
  post/patch username and highscore (if > previous highscore) after checking for correct answers

(optional) In StartScreen:
    get user in order to display existing highscore in TriviaHeader while playing

# contact with questions-api

In QuestionScreen:
    get question objects based on user input at startscreen.

# CSS
optional styling of components if there is time