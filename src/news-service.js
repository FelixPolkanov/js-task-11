export default class newsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;

    };

    fetchArticles() {
        console.log(this);
        return fetch(`https://pixabay.com/api/?key=31251439-64cf22bfdeb9633faeca9a5f6&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.page += 1;
                return data.hits;
            })
            .catch(error => { Notify.failure('Sorry, there are no images matching your search query. Please try again.') })  

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