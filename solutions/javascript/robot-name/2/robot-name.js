// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this.#name = this.createRobotName();
    console.log(Robot.robotsNames);
    console.log(Robot.#robotsNames);
  }                

  #characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  #name;
  static #robotsNames = new Set();
  
  get name() {
    return this.#name;
  } 

  static get robotsNames(){
    return this.#robotsNames;
  }

  createRobotName() {
    let name = '';
    name += this.#characters.charAt(Math.floor(Math.random() * 26));
    name += this.#characters.charAt(Math.floor(Math.random() * 26));
    name += Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    if (Robot.robotsNames.has(name)) {
      return this.createRobotName()
    } else {
      Robot.robotsNames.add(name);
    }
    
    return name;
  }

  reset() {
    this.#name = this.createRobotName();
  }

  static releaseNames() {
    Robot.robotsNames.clear();
  }
  
}
