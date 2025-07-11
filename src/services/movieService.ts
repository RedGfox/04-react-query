import axios from 'axios';
import type { Movie } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const TOKEN = `Bearer ${import.meta.env.VITE_API_KEY}`;

interface FetchMoviesParams {
  query: string;
  page: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies({
  query,
  page,
}: FetchMoviesParams): Promise<MovieResponse> {
  const response = await axios.get<MovieResponse>(API_URL, {
    params: { query, page },
    headers: {
      Authorization: TOKEN,
    },
  });

  return response.data;
}
