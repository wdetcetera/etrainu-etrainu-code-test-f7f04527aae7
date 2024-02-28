"use strict";
// src/Rover.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Rover {
    constructor(x, y, orientation) {
        this.orientations = ['N', 'E', 'S', 'W'];
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }
    processCommands(commands) {
        for (const command of commands) {
            switch (command) {
                case 'L':
                    this.turnLeft();
                    break;
                case 'R':
                    this.turnRight();
                    break;
                case 'M':
                    this.move();
                    break;
                default:
                    console.error(`Invalid command: ${command}`);
            }
        }
    }
    turnLeft() {
        const currentIndex = this.orientations.indexOf(this.orientation);
        const newIndex = (currentIndex - 1 + this.orientations.length) % this.orientations.length;
        this.orientation = this.orientations[newIndex];
    }
    turnRight() {
        const currentIndex = this.orientations.indexOf(this.orientation);
        const newIndex = (currentIndex + 1) % this.orientations.length;
        this.orientation = this.orientations[newIndex];
    }
    move() {
        switch (this.orientation) {
            case 'N':
                this.y += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'W':
                this.x -= 1;
                break;
        }
    }
    getPosition() {
        return `${this.x} ${this.y} ${this.orientation}`;
    }
}
exports.default = Rover;
