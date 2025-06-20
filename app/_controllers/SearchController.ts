import { SearchModel, SearchData } from "../_models/SearchModel";

export class SearchController {
  private search: SearchModel;

  constructor() {
    this.search = new SearchModel();
  }

  handleSearch(query: string): {
    success: boolean;
    data?: SearchData;
    error?: string;
  } {
    try {
      const searchData = this.search.saveSearch(query);
      return { success: true, data: searchData };
    } catch (error) {
      return { success: false, error: "Lỗi xử lý tìm kiếm" };
    }
  }
}
