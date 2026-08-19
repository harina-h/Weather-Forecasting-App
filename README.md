# Weather Forecasting App

A Django-based weather forecasting application that integrates real-time weather data from the OpenWeatherMap API with historical weather data and machine learning models to provide weather insights and short-term forecasts.

## Features

- Search weather information by city name
- Display current temperature and feels-like temperature
- Show humidity and cloud coverage
- Display wind speed, atmospheric pressure, and visibility
- Dynamically change the background based on weather conditions
- Predict future temperature and humidity
- Use Random Forest models for weather prediction
- Handle invalid city names and empty searches

## Machine Learning

### Rain Prediction

A `RandomForestClassifier` is used to predict the rain-related target variable using historical weather features:

- Minimum Temperature
- Maximum Temperature
- Wind Direction
- Wind Speed
- Humidity
- Pressure
- Temperature

### Temperature and Humidity Forecasting

`RandomForestRegressor` models are used to forecast future:

- Temperature
- Humidity

The application generates five future predictions iteratively using the current weather value as the starting point.

## Project Workflow

```text
User enters city
        ↓
Django receives request
        ↓
OpenWeatherMap API
        ↓
Current weather data
        ↓
Historical weather CSV
        ↓
Data cleaning and preprocessing
        ↓
Random Forest models
        ↓
Weather predictions
        ↓
Django Template
        ↓
Interactive Weather Dashboard
```

## Technologies Used

- Python – Backend and machine learning
- Django – Web framework
- Pandas – Data processing
- NumPy – Numerical operations
- Scikit-learn – Machine learning
- Random Forest – Classification and regression
- Requests – API requests
- OpenWeatherMap API – Real-time weather data
- HTML5 – Frontend structure
- CSS3 – Styling and animations
- Bootstrap Icons – UI icons
- Chart.js – Forecast visualization
- python-dotenv – Environment variable management


## Project Structure
```text
Weather-Forecasting-App/
│
├── archive/
│   └── weather.csv
│
├── weatherPrediction/
│   ├── weatherPrediction/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
│   │
│   ├── templates/
│   │   └── weather.html
│   │
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── chartSetup.js
│   │   └── img/
│   │
│   └── views.py
│
├── requirements.txt
├── .gitignore
└── README.md
```

## Installation

**Clone the repository:**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Prediction-of-Star-Galaxy-and-Quasar
```

**Create a virtual environment:**

```bash
python -m venv .venv
```

**Activate it on Windows:**

```bash
.venv\Scripts\activate
```

**Install the required packages:**

```bash
pip install -r Requirements.txt
```

## API Configuration

The application uses an OpenWeatherMap API key through an environment variable.

**Create a .env file:**

```bash
API_KEY=your_openweathermap_api_key
```

## Run the Application

```bash
python manage.py runserver
```


## Frontend

The application uses Django Templates with HTML and CSS to display weather information.

**The interface includes:**

- City search
- Current weather information
- Weather-condition-based backgrounds
- Day/night visual effects
- Forecast cards
- Temperature and humidity forecast graph

Chart.js is used for forecast visualization.

## Key Highlights

- Integrated real-time weather API data with machine learning
- Implemented both classification and regression models
- Used Random Forest algorithms for weather prediction
- Built a Django-based interactive web application
- Added dynamic weather backgrounds and animations
- Visualized forecast results using Chart.js

## Future Improvements

- Save and load trained models instead of retraining for every search
- Improve forecasting using dedicated time-series models such as LSTM or Prophet
- Add longer-range weather forecasting
- Add historical weather visualizations
- Improve model evaluation with additional metrics
- Deploy the application to a cloud platform
