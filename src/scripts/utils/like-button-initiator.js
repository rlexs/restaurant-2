import RestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    // Ensure all required fields in the restaurant object exist
    this._validateRestaurantData();

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantIdb.getRestaurant(id);
    return !!restaurant; // Returns true if restaurant exists in IndexedDB
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantIdb.putRestaurant(this._restaurant); // Ensure proper object is stored
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

  _validateRestaurantData() {
    if (!this._restaurant || !this._restaurant.id) {
      throw new Error('Restaurant data is invalid. Ensure the "id" field exists.');
    }
  },
};

export default LikeButtonInitiator;
