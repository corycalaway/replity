import kaboom from "kaboom";

//initialize context 
kaboom();

loadSprite("bean", "sprites/bean.png");

// add a game object to screen
add([

    sprite("bean"),
    pos(80,40),
    area(),
]);