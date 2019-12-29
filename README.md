# Derivco Slot Game

This project was developed as a job test. With all the <3 and efforts that the provided time allowed.
Checkout the [live demo in here](https://derivco-game.herokuapp.com/).
Checkout all [project (associated files and code) in here](https://github.com/Anandamohinidasi/drv-game).

This document will offer futter explanations about:
- running the project locally;
- building and deploying
 As well as provide all the information about:
- the game rules, infered rules and assumptions;
- How to use it and its debug area
Plus you will find a *limitations and improvements* section on the bottom.

## Run it locally
First of all cd to the download/clone dir then install the package dependecies `npm i`

Now you are ready to go. Run you development server by running `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

For building run `ng build`. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

Before deploying test you application locally running  the production buiild `ng build --prod --aot`. If desired you can check the running production ready by running `npm start`, your application should be served at `http://localhost:4200/`.

Now that you already checked you application and see all is perfect running. Make sure you got your [heroku cli](https://devcenter.heroku.com/articles/heroku-cli) (in case you want to deploy to heroku, as i did) then run `git push heroku master`.

## About the game
# Playing
To start you game just click on the slot machine arm and wait for the result. Please note that you need to have balance > 0 to play, as each arm pulling in the slot machine will cost you 1 credit. 
You wont be able to pull the arm during the spinning.

# Winning
The slot machine has 3 visual areas. The balance on top, then the prize explanation, and the reels. When you pull the slot machine arm, so starting the game, the machine will stop based on the active mode (either randomly or pre-setted). Once it stops there'll be a red border marking the suitable or prize payiment areas. Plus the appropriate combination on prize explanation section should be blinking at this time. You will receive only one time prize per spinning, even if the same winning combination appears more than once, check bellow for more details.

# Winning Lines and Prize
As its possible to have winning positions in multiple lines, the rule is: highest paying prize will be payed, and in case two lines show same winning combination and for that reason having same prize price, both lines will be highlighteds but only one time prize will be payed.

# Debug area
To setup the debug area drag and drop the desired symbol to the desired position. Note that beside is the option to setup the desire line. As the simbols will always keep the same sequence (cause its like a fisical reel), you just need to choose the winning line and automatically all other lines will the setup in the proper sequency to accomplish what you choose.
Please note that following the upper mentioned rule, the highest prize will be always the payed one. So if you choose the center line to have i.e 7 7 7 , this position must be guaranteed, but the winning highlighting border will be shown in the bottom line, because this will contain 3 cherrys on bottom, thats the highest prize (4k credits), bein that the winning line.


## Limitations and Improvements
- Not suitable for mobile - This game is still not suitable for mobile users
- It can have a better UI.
- Have lights;
- Have a reel stop sound;
- Have a winning sound, diferent one based on prize;
- Have pro features like: choosing background, paying extra for double prize options, share your score with friends in social media, see online users ranking;