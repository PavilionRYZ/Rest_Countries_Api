# REST Countries API Integration

## Overview
This project integrates the [REST Countries API](https://restcountries.com/) to fetch and display country data. The application is built using **JavaScript**, **HTML**, and **TailwindCSS** for styling. The goal of this project was to create a fully responsive and user-friendly interface to explore country information with features like searching, filtering, and detailed views.

## Features

- **Homepage**: Display all countries fetched from the API.
- **Search Functionality**: Search for countries by name using an input field.
- **Region Filtering**: Filter countries by their region.
- **Detailed Country Page**: View detailed information about a selected country on a separate page.
- **Border Navigation**: Navigate to border countries directly from the detailed country page.
- **Responsive Design**: Ensure optimal layout for various screen sizes.
- **Interactive Elements**: Hover and focus states for all interactive elements.
- **Dark Mode Toggle**: Switch between light and dark themes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rest-countries-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rest-countries-app
   ```

3. Open the `index.html` file in your browser to view the application.

## Technologies Used

- **JavaScript**: For application logic and dynamic content rendering.
- **HTML**: Markup structure of the application.
- **TailwindCSS**: Utility-first CSS framework for styling.

## Project Structure

```plaintext
.
├── index.html        # Main HTML file
├── styles.css        # TailwindCSS setup and custom styles
├── app.js            # JavaScript logic for fetching and displaying data
├── assets/           # Images and other assets (if any)
└── README.md         # Project documentation
```

## How to Use

1. **Homepage**:
   - All countries are displayed on the homepage.
   - Use the search bar to find a specific country by name.
   - Filter countries by region using the dropdown menu.

2. **Country Details**:
   - Click on a country card to view more details about it.
   - Detailed information includes the country's flag, name, native name, population, region, subregion, capital, top-level domain, currencies, and languages.
   - Click on any border country to navigate to its details.

3. **Dark Mode**:
   - Toggle between light and dark modes using the button at the top of the page.

## Responsive Design

The application is designed to work seamlessly on devices of all sizes:
- **Desktop**: Full-width grid layout for better visualization.
- **Tablet**: Compact grid layout with optimized text size.
- **Mobile**: Single-column layout for easier scrolling and navigation.

## Screenshots

### Homepage
![Homepage](assets/homepage.png)

### Country Details
![Country Details](assets/details.png)

## Challenges Faced

- **API Integration**: Parsing and displaying nested data (e.g., currencies, languages) required careful handling.
- **Dark Mode**: Ensuring consistency of dark and light themes across all elements.
- **Responsiveness**: Tailoring layouts for different screen sizes while maintaining usability.

## Future Enhancements

- Add a loading spinner for better user experience during API calls.
- Improve accessibility (ARIA roles, focus management).
- Implement caching to reduce API calls and improve performance.

## Contributing

Contributions are welcome! If you'd like to contribute, please:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [REST Countries API](https://restcountries.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

---

Feel free to open an issue for suggestions or feature requests!

