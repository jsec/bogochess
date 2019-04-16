import Color from './enum/color';

export default class Player {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }
}
