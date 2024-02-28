// tests/Rover.test.ts

import Rover from '../src/Rover';

describe('Rover Class', () => {
  test('Rover turns left correctly', () => {
    const rover = new Rover(0, 0, 'N');
    rover.processCommands('L');
    expect(rover.getPosition()).toBe('0 0 W');
  });

  test('Rover turns right correctly', () => {
    const rover = new Rover(0, 0, 'N');
    rover.processCommands('R');
    expect(rover.getPosition()).toBe('0 0 E');
  });

  test('Rover moves forward correctly', () => {
    const rover = new Rover(0, 0, 'N');
    rover.processCommands('M');
    expect(rover.getPosition()).toBe('0 1 N');
  });

  test('Rover executes a complex set of commands', () => {
    const rover = new Rover(1, 2, 'N');
    rover.processCommands('LMLMLMLMM');
    expect(rover.getPosition()).toBe('1 3 N');
  });
});
