// src/Rover.ts

class Rover {
    private x: number;
    private y: number;
    private orientation: string;
    private readonly orientations: string[] = ['N', 'E', 'S', 'W'];

    constructor(x: number, y: number, orientation: string) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    public processCommands(commands: string): void {
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

    private turnLeft(): void {
        const currentIndex = this.orientations.indexOf(this.orientation);
        const newIndex = (currentIndex - 1 + this.orientations.length) % this.orientations.length;
        this.orientation = this.orientations[newIndex];
    }

    private turnRight(): void {
        const currentIndex = this.orientations.indexOf(this.orientation);
        const newIndex = (currentIndex + 1) % this.orientations.length;
        this.orientation = this.orientations[newIndex];
    }

    private move(): void {
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

    public getPosition(): string {
        return `${this.x} ${this.y} ${this.orientation}`;
    }
}

export default Rover;
