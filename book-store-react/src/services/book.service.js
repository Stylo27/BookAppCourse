import { BACKEND_URL } from '../constants';

export const bookService = {
  get: async () => {
    const response = await fetch(`${BACKEND_URL}/api/v1/books`);
    return response.json();
  },
  find: async (bookId) => {
    const response = await fetch(`${BACKEND_URL}/api/v1/books/${bookId}`);
    return response.json();
  },
} 