import Rover from './Rover';

const main = () => {
    const rover = new Rover(1, 2, 'N');
    rover.processCommands('LMLMLMLMM');
    console.log("Outputting with attitude 😂")
    console.log("");
    console.log("Here you have it -> ["+rover.getPosition()+"]  Happy?"); // Expected Output: 1 3 N
    console.log("");
};

main();