# Fate 'n Dice

A vanilla JS two-player game that'll keep you guessing and trying and maybe you'll win - that is, if you can find a healthy balance between greed and luck. :)

> To understand the logic of this game, you might need to look at the flowchart first [here](https://github.com/airykka/Fate-n-Dice/blob/main/fate-n-dice-flowchart.png)

## Quick Start/Installation

<!-- prettier-ignore -->
* Clone the repo

  ```shell
  git clone https://github.com/airykka/Fate-n-Dice.git
  ```
* Then enter the folder ```Fate-n-Dice```

    ```shell
  cd Fate-n-Dice
  ```

* Then open the ```index.html``` file in your web browser on your local machine.

* ...and voila! You can now play the game with a friend as many times as you'd like to.

## Game Rules

1. The game can only be played on a desktop or tablet screen.
2. It is a game designed for two players but you can play alone by assuming the role of the two players.
3. Players take turn to roll the dice and each turn terminates when a player either `holds` or rolls a 1.
4. During a player's turn he can roll the dice the many times as he wishes to and with each roll fo the dice, the number rolled is added to the score for that turn. If the player `holds`, the current score is added to their overall score but if they rolls a `1` before they `hold`, all the scores accumulated in that turn is lost and their turn is terminated.
5. The first player to get an overall score of 100 points or more, wins the game.
6. The `New Game` button resets the game.

> Happy Playing and I hope you enjoy the game as much as I did :)
