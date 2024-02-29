# Mars Rover Simulation Code Explanation

This document explains the TypeScript code for simulating the movement of a rover on Mars based on a set of commands.

## Project Structure

- `src/`
  - `Rover.ts`: Contains the `Rover` class definition.
  - `index.ts`: The entry point for the simulation.

## Rover Class (Rover.ts)

The `Rover` class is designed to simulate the movement and direction control of a Mars rover.

### Properties

- `x`: The x-coordinate of the rover's current position.
- `y`: The y-coordinate of the rover's current position.
- `orientation`: The rover's current orientation (`'N'`, `'E'`, `'S'`, `'W'`).
- `orientations`: An array of possible orientations to assist in turning operations.

### Constructor

The constructor initializes the rover's position and orientation based on the provided arguments.

```typescript
constructor(x: number, y: number, orientation: string) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
}
```
## Methods

### processCommands

Takes a string of commands (`'L'`, `'R'`, `'M'`) and processes each command sequentially to adjust the rover's orientation or position on the grid.

```typescript
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
```

## How to get started

### git clone the project 


Execute the following command in a Bash/Linux or macOS terminal. If you encounter any issues, please visit https://domenicorutigliano.au and talk to my avatar. It can handle this. 

```

git clone https://github.com/wdetcetera/etrainu-etrainu-code-test-f7f04527aae7.git domenico-rutigliano-code

cd domenico-rutigliano-code

npm install 

npm run start

```

the start command will perform the following tasks :

1 Unit Testing 
2 Compiling TS to JS
3 Runing the node index.js 





