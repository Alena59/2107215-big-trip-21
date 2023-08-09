import {createElement} from '../render.js';

function createNewTaskButtonTemplate() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow">New event<button>';
}

export default class NewTaskButtonView {
  getTemplate() {
    return createNewTaskButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}