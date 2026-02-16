//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  #_schoolObj = {};
  
  roster() {
    return JSON.parse(JSON.stringify(this.#_schoolObj));
  }

  add(name, grade) {
    for (let grade in this.roster()) {
      let names = this.#_schoolObj[grade];
      if (names.includes(name)) {
        names.splice(names.indexOf(name), 1);
        break;
      }
    }
    
    if (this.#_schoolObj.hasOwnProperty(grade)) {
      this.#_schoolObj[grade].push(name);
      this.#_schoolObj[grade].sort();
    } else {
      this.#_schoolObj[grade] = [name];
    }
  }

  grade(grad) {
    return this.roster()[grad] || [];
  }
}
