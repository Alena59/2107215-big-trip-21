import AbstractView from '../framework/view/abstract-view.js';

const createNewEventButtonTemplate = () =>
  `
    <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow">New event<button>
  `;

export default class NewEventButtonView extends AbstractView {
  #handleButtonClick = null;

  constructor({onButtonClick}) {
    super();
    this.#handleButtonClick = onButtonClick;
    this.element.addEventListener('click', this.#buttonClickHandler);
  }

  get template() {
    return createNewEventButtonTemplate();
  }

  #buttonClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleButtonClick();
  };
}
