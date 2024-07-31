/**
 * skenario test getMovies
 *
 * - getMovies
 *  - should fetch with page = 1 if no page number is passed
 *  - should handle different page numbers
 *  - should show window alert "Koneksi bermasalah, mohon ulangi!" if error
 */

import { describe, it, expect, vi } from 'vitest';
import { getMovies } from '../utils/api';


global.fetch = vi.fn();

const mockResponse = {
  Search: [],
  totalResults: '0',
  Response: 'True'
};

describe('getMovies', () => {
  afterEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should fetch with page = 1 if no page number is passed', async () => {

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockResponse)
    });

    const response = await getMovies();
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('https://www.omdbapi.com/?apikey=88c7dfa4&page=1&s=all');
  });

  it('should handle different page numbers', async () => {

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockResponse)
    });

    const response = await getMovies(7);
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('https://www.omdbapi.com/?apikey=88c7dfa4&page=7&s=all');
  });

  it('should show window alert "Koneksi bermasalah, mohon ulangi!" if error', async () => {
    const mockAlert = vi.spyOn(window, 'alert').mockImplementation(() => {});

    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    const response = await getMovies();
    expect(response).toBeUndefined();
    expect(fetch).toHaveBeenCalledWith('https://www.omdbapi.com/?apikey=88c7dfa4&page=1&s=all');
    expect(mockAlert).toHaveBeenCalledWith('Koneksi bermasalah, mohon ulangi!');

    mockAlert.mockRestore();
  });
});