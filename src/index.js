"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rover_1 = __importDefault(require("./Rover"));
const main = () => {
    const rover = new Rover_1.default(1, 2, 'N');
    rover.processCommands('LMLMLMLMM');
    console.log("Outputting with attitude 😂");
    console.log("");
    console.log("Here you have it -> [" + rover.getPosition() + "]  Happy?"); // Expected Output: 1 3 N
    console.log("");
};
main();
