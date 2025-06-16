# News Aggregator API

A RESTful API that aggregates news articles from multiple sources, allowing users to fetch, search, and filter news content efficiently.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [API Routes](#api-routes)
- [Sample Request/Response](#sample-requestresponse)
- [Technologies Used](#technologies-used)

## Project Overview

The News Aggregator API collects news articles from various public sources and provides endpoints to access, search, and filter news data. It is designed for developers who want to integrate news content into their applications.

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/news-aggregator-api.git
    cd news-aggregator-api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Copy `.env.example` to `.env` and update with your API keys and configuration.

4. **Run the server:**
    ```bash
    npm start
    ```
    The API will be available at `http://localhost:3000`.

## API Routes

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | `/api/news`        | Get latest news articles       |
| GET    | `/api/news/:id`    | Get a specific news article    |
| GET    | `/api/news/search` | Search news by keyword/filter  |

### Query Parameters for `/api/news` and `/api/news/search`

- `source` (string): Filter by news source
- `category` (string): Filter by category (e.g., technology, sports)
- `q` (string): Search keyword
- `limit` (number): Number of articles to return

## Sample Request/Response

**Request:**
```http
GET /api/news/search?q=technology&limit=2
```

**Response:**
```json
[
  {
     "id": "12345",
     "title": "Latest Advances in AI",
     "source": "TechCrunch",
     "publishedAt": "2024-06-01T10:00:00Z",
     "url": "https://techcrunch.com/article",
     "summary": "A summary of the latest advances in artificial intelligence."
  },
  {
     "id": "12346",
     "title": "New Tech Trends in 2024",
     "source": "Wired",
     "publishedAt": "2024-06-01T09:30:00Z",
     "url": "https://wired.com/article",
     "summary": "An overview of technology trends to watch in 2024."
  }
]
```

## Technologies Used

- **Node.js** & **Express.js** — Backend framework
- **Axios** — HTTP client for fetching news
- **dotenv** — Environment variable management
- **Jest** — Testing framework
- **ESLint** — Code linting
