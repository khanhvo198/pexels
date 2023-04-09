import { Photo } from './pexels.model';

export interface PhotoPagination {
  page: number;
  per_page: number;
  total_results: number;
}

export interface Pagination {
  page: number;
  total: number;
  photos: Photo[];
  query: string;
  defaultQuery: string;
}
