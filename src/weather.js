const Weather = {
    apiKey: "cab54328bdd2485eb6965049240211",
    baseUrl: "https://api.weatherapi.com/v1/",

    generateCurrentURL(input) {
        const encodedInput = encodeURIComponent(input); // Encode input for URL
        return `${this.baseUrl}current.json?key=${this.apiKey}&q=${encodedInput}`;
    },

    generateForecastURL(input, days = 13) {
        const encodedInput = encodeURIComponent(input); // Encode input for URL
        return `${this.baseUrl}forecast.json?key=${this.apiKey}&q=${encodedInput}&days=${days}&alerts=yes`;
    },
    generateHistoryURL(input) {
        const encodedInput = encodeURIComponent(input); // Encode input for URL
        return `${this.baseUrl}timezone.json?key=${this.apiKey}&q=${encodedInput}`; // Corrected endpoint
    },
    

    async fetchCurrentWeather(input) {
        const URLSearch = this.generateCurrentURL(input); // Generate the URL with the input

        try {
            const response = await fetch(URLSearch);
            if (response.ok) {
                const data = await response.json();
                return data; // Return the fetched data
            } else {
                throw new Error("Could not fetch current weather data."); // Throw an error for better handling
            }
        } catch (error) {
            console.error("Error fetching current weather data:", error);
            return { error: error.message || "An error occurred. Please try again later." }; // Return an error object
        }
    },

    async fetchForecast(input) {
        const URLSearch = this.generateForecastURL(input); // Generate the URL with the input

        try {
            const response = await fetch(URLSearch);
            if (response.ok) {
                const data = await response.json();
                return data; // Return the fetched data
            } else {
                throw new Error("Could not fetch forecast data."); // Throw an error for better handling
            }
        } catch (error) {
            console.error("Error fetching forecast data:", error);
            return { error: error.message || "An error occurred. Please try again later." }; // Return an error object
        }
    },

    async fetchHistory(input) {
        const URLSearch = this.generateHistoryURL(input); // Generate the URL with the input

        try {
            const response = await fetch(URLSearch);
            if (response.ok) {
                const data = await response.json();
                return data; // Return the fetched data
            } else {
                throw new Error("Could not fetch forecast data."); // Throw an error for better handling
            }
        } catch (error) {
            console.error("Error fetching forecast data:", error);
            return { error: error.message || "An error occurred. Please try again later." }; // Return an error object
        }
    },

   
};

export default Weather; // Export your Weather object
