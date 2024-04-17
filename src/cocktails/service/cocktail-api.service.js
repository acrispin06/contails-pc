import axios from 'axios';

const API_BASE_URL = 'https://thecocktaildb.com/api/json/v1/1';

export class CocktailApiService {
    static async fetchCocktailsByFirstLetter(letter = 'a') {
        try {
            const response = await axios.get(`${API_BASE_URL}/search.php?f=${letter}`);
            return response.data.drinks; // Make sure you are returning the data here
        } catch (error) {
            console.error("There was an error fetching the cocktails:", error);
            return []; // Return an empty array in case of error
        }
    }
}
