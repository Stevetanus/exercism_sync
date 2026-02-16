export class Robot {
  constructor() {
    this.#name = this.createRobotName();
  }                
  #characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  #name = '';
  static robotsNames = new Set();
  
  get name() {
    return this.#name;
  } 
  
  createRobotName() {
    const no = Math.floor(Math.random() * 676000);
    if (Robot.robotsNames.has(no)) {
      return this.createRobotName();
    } else {
      Robot.robotsNames.add(no);
    }
    
    return `${String.fromCharCode(65 + no / 26000 | 0)
      }${String.fromCharCode(65 + ((no / 1000) % 26))
      }${(no % 1000).toString().padStart(3, '0')}`
  }
  reset() {
    this.#name = this.createRobotName();
  }
  static releaseNames() {
    Robot.robotsNames.clear();
  }
}