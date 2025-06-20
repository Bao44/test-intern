export interface SearchData {
  query: string;
  results: string[];
}

export class SearchModel {
  private currentSearch: SearchData | null = null;

  saveSearch(query: string): SearchData {
    const searchData: SearchData = {
      query: query.trim(),
      results: [query.trim()],
    };
    this.currentSearch = searchData;
    return searchData;
  }

  getCurrentSearch(): SearchData | null {
    return this.currentSearch;
  }
}