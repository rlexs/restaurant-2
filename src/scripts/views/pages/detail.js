import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/therestodb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);

    // Map snake_case properties to camelCase
    const restaurantData = {
      id: restaurant.id,
      name: restaurant.name,
      pictureId: restaurant.pictureId,
      description: restaurant.description,
      rating: restaurant.rating,
};

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantData,
    });
  },
};

export default Detail;
