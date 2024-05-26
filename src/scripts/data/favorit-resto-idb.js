import { openDB } from 'idb';
import DataCafe from './menuscafe';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = DataCafe;
console.log(DataCafe);
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoritMenuRestoIdb = {
  async getMenuResto(id) {
    if (!id) throw new Error('No valid key or key range specified.');
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllMenuResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putMenuResto(menu) {
    if (!menu.id) throw new Error('No valid key or key range specified.');
    return (await dbPromise).put(OBJECT_STORE_NAME, menu);
  },
  async deleteMenuResto(id) {
    if (!id) throw new Error('No valid key or key range specified.');
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoritMenuRestoIdb;
