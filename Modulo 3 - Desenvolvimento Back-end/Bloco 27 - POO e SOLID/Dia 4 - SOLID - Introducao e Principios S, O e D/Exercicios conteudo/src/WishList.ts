// eslint-disable-next-line import/extensions, import/no-unresolved
import { Book } from './interfaces/Book';

export default class WishList {
  private wishlist: Book[];
  constructor() {
    this.wishlist = [];
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const wishList = new WishList();
wishList.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishList.showWishlist();
