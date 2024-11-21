import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}, ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menus">
    <h3>Menus</h3>
    <h4>Foods</h4>
    <ul>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    <h4>Drinks</h4>
    <ul>
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img 
        class="restaurant-item__header__image" 
        alt="${restaurant.name || 'Restaurant'}" 
        src="${
  restaurant.pictureId
    ? `https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`
    : 'https://via.placeholder.com/300x200?text=No+Image'
}" />
      <div class="restaurant-item__header__rating">
        <p>⭐️ <span>${restaurant.rating || 'N/A'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__title">
        <a href="#/detail/${restaurant.id}">${restaurant.name || 'No Name Available'}</a>
      </h3>
      <p>${restaurant.description || 'No description available.'}</p>
    </div>
  </div>
`;


const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export { createRestaurantItemTemplate, createRestaurantDetailTemplate,  createLikeButtonTemplate, createLikedButtonTemplate, };
