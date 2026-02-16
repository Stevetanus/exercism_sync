//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  #_schoolObj = {};
  
  roster() {
    return JSON.parse(JSON.stringify(this.#_schoolObj));
  }

  add(name, gradeKi) {
    for (let grade in this.#_schoolObj) {
      let names = this.#_schoolObj[grade];
      this.#_schoolObj[grade] = 
        this.#_schoolObj[grade].filter(student => student !== name);
    }
    if (!(gradeKi in this.#_schoolObj)) {
      this.#_schoolObj[gradeKi] = [];
    }
    this.#_schoolObj[gradeKi].push(name);
    this.#_schoolObj[gradeKi].sort();
  }

  grade(gradeKi) {
    return this.roster()[gradeKi] || [];
  }
}
