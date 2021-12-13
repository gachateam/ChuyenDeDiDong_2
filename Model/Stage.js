export class Stage {
  constructor({difficult, stage}) {
    this.difficult = difficult;
    this.stage = stage;
  }
  getStage(difficult, stage) {
    return this.difficult === difficult
      ? this.stage >= stage
        ? 100
        : 0
      : this.difficult < difficult
      ? 0
      : 100;
  }
  compare(stage1) {
    if (this.difficult < stage1.difficult) {
      return -1;
    } else if (this.difficult > stage1.difficult) {
      return 1;
    } else {
      return this.stage - stage1.stage;
    }
  }
  nextStage() {
    if (this.stage === 2 && this.difficult === 2) {
      return {difficult: this.difficult, stage: this.stage};
    } else if (this.difficult < 2 && this.stage === 2) {
      return {difficult: this.difficult + 1, stage: 0};
    } else if (this.stage < 2) {
      return {difficult: this.difficult, stage: this.stage + 1};
    }
  }
  getExp(currentExp = 0) {
    return {score: currentExp + this.difficult * 3 + this.stage + 1};
  }
  getTienDo() {
    return ((this.difficult * 3 + this.stage + 1) / 9) * 100;
  }
}
