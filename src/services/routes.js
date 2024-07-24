const API_KEY = "5dcb6bfbe78b4c5381f19cfff3babd93";
const URL = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=' + API_KEY;


const getNews = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response issue');
        }
        const data = await response.json();
        return data.articles;
    }
    catch (error) {
        console.log(error, 'Fetch error');
        return [];
    }
}

export default getNews