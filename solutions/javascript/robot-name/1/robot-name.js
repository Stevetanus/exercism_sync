// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

class RobotFactory {
  constructor() {
    this._robotsNames = new Set();
  }

  get robotsNames(){
    return this._robotsNames;
  }
  
  releaseNames() {
    this._robotsNames.clear();
  }
}

const RF = new RobotFactory();

export class Robot {
  constructor() {
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.charactersLength = this.characters.length;       
    this._name = this.createRobotName();
  }                

  get name() {
    return this._name;
  } 

  createRobotName() {
    let name = '';
    name += this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
    name += this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
    name += Math.floor(Math.random() * 10);
    name += Math.floor(Math.random() * 10);
    name += Math.floor(Math.random() * 10);

    if (RF.robotsNames.has(name)) {
      return this.createRobotName()
    } else {
      RF.robotsNames.add(name);
    }
    
    return name;
  }

  reset() {
    this._name = this.createRobotName();
  }
  
}

Robot.releaseNames = () => {
  RF.releaseNames();
};
