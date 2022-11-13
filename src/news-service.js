export default class newsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
       
    };

    async fetchArticles() {
        console.log(this.searchQuery);
        
        const fetchData = await fetch(`https://pixabay.com/api/?key=31251439-64cf22bfdeb9633faeca9a5f6&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
        const data = await fetchData.json()
       
                console.log('data', data)
                console.log('data.hits', data.hits)
                
                this.page += 1;
                return data.hits;
            }
           

    resetPage() {
        this.page = 1;
}

    get query() {
            return this.searchQuery
    }

    
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    

}