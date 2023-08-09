import {createElement} from '../render.js';

function createTaskListTemplate() {
  return `<div class="trip-events"></div>`;
}

export default class TaskListView {
  getTemplate() {
    return createTaskListTemplate();
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
