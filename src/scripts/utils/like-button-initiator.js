import FavoritMenuRestoIdb from '../data/favorit-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/pages/teplatecreator/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, detailMenucafe }) {
    this._likeButtonContainer = likeButtonContainer;
    this._menuscafe = detailMenucafe;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._menuscafe;
    if (!id) {
      console.error('ID menu cafe tidak valid!', this._menuscafe);
      return;
    }

    if (await this._isMenuExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMenuExist(id) {
    const menu = await FavoritMenuRestoIdb.getMenuResto(id);
    return !!menu;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const LikeButton = document.querySelector('#likeButton');
    LikeButton.addEventListener('click', async () => {
      await FavoritMenuRestoIdb.putMenuResto(this._menuscafe);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const LikeButton = document.querySelector('#likeButton');
    LikeButton.addEventListener('click', async () => {
      await FavoritMenuRestoIdb.deleteMenuResto(this._menuscafe.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
