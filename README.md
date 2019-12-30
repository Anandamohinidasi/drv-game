# Derivco Slot Game

This project was developed as a job test. With all the <3 and efforts that the provided time allowed.
Checkout the [live demo in here](https://derivco-game.herokuapp.com/).
Checkout all [project (associated files and code) in here](https://github.com/Anandamohinidasi/drv-game).

This document will offer futher explanations about:
- running the project locally;
- building and deploying
 As well as provide all the information about:
- the game rules, infered rules and assumptions;
- How to use it and its debug area
- *limitations and improvements* section on the bottom.

## Run it locally
First of all `cd` to the diretory where you downloaded/cloned the project then install its dependecies `npm i`

Now you'll be ready to go. Run you development server with `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

For building run `ng build`. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

Before deploying test you application locally running  the production build `ng build --prod --aot`. If desired so you can check the running production ready application with `npm start`, it should be served at `http://localhost:4200/`.

Now that you already checked you application and saw that its all perfect and running, you can deploy it to heroku. Make sure you got your [heroku cli](https://devcenter.heroku.com/articles/heroku-cli) (in case you want to deploy to heroku, as i did) then run `git push heroku master`.

# About the game
## Playing
To start the game just click on the slot machine arm and wait for the result. Please note that you need to have balance > 0 to play, as each arm pulling will cost you 1 credit. 
You wont be able to pull the arm during the spinning.

## Winning
The slot machine has 3 visual areas. The balance on top, then the prize explanation and the reels. When you pull the slot machine arm, so starting the game, the machine will stop based on the active mode (either randomly or pre-setted). Once it stops there'll be a red border marking the suitable for prize areas. Plus the appropriate combination on prize explanation section should be blinking at this time. You will receive only one time prize per spinning, even if the same winning combination appears more than once, check bellow for more details.

## Winning Lines and Prize
As its possible to have winning positions in multiple lines, the rule is: Highest paying prize will be payed, and in case two lines show same winning combination and, for that reason having same prize price, both lines will be highlighteds but only one time prize will be payed.

## Debug area
Start by toggling the mode button (it'll say random if in random mode, so click on it to switch to debug mode).
To setup the debug area drag and drop the desired symbol to the desired position. If you want to replace a simbol just drop another one on top of it. Note that beside is the option to setup the desire line.
*Please, also note that, even thought there may be setted up simbols, if you switch to random mode those will be ignored.*
As the simbols will always keep the same sequence (because its like a fisical reel), you just need to choose one winning line and automatically all other lines will the setup in the proper sequency to accomplish your choice.
Also note that, following the upper mentioned rule, the highest prize will be always the payed one. So if you choose the center line to have i.e 7 7 7 , this position must be guaranteed, but the winning highlighting border will be shown in the bottom line, because this will contain 3 cherrys on bottom, thats the highest prize (4k credits), being that the winning line and the one to have its prize paid.


# Limitations and Improvements
- Not suitable for mobile - This game is still not suitable for mobile users
- No unit tests - This game was made in a very simple mvp manner, so there is no testing set yet.
- It can have a better UI.
- Have lights;
- Have a reel stop sound;
- Have a winning sound, diferent one based on prize;
- Have pro features like: choosing background, paying extra for double prize options, share your score with friends in social media, see online users ranking;
- We can use visual recognition (Like a pre-processed model from Intel OpenVino) to give user a more immersive game experience, asking them to pull the arm by hands (reading them from camera) instead of click by mouse. Using on edge tecniques this can be approched with good performance and would make the game funnier for the user.