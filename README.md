# Sentiment Analysis Web Application

[![Contributors](https://img.shields.io/github/contributors/Gotam-Dulhani/Sentiment-Analysis)](https://github.com/Gotam-Dulhani/Sentiment-Analysis/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/Gotam-Dulhani/Sentiment-Analysis)](https://github.com/Gotam-Dulhani/Sentiment-Analysis/network/members)
[![Stars](https://img.shields.io/github/stars/Gotam-Dulhani/Sentiment-Analysis)](https://github.com/Gotam-Dulhani/Sentiment-Analysis/stargazers)
[![Issues](https://img.shields.io/github/issues/Gotam-Dulhani/Sentiment-Analysis)](https://github.com/Gotam-Dulhani/Sentiment-Analysis/issues)
[![License](https://img.shields.io/github/license/Gotam-Dulhani/Sentiment-Analysis)](https://github.com/Gotam-Dulhani/Sentiment-Analysis/blob/main/LICENSE)

> A **full-stack Sentiment Analysis Web Application** with an interactive dashboard that classifies text as **Positive**, **Negative**, or **Neutral** in real-time.

---

## Table of Contents

* [About The Project](#about-the-project)
* [Key Features](#key-features)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Installation](#installation)
* [Usage](#usage)
* [Deployment](#deployment)
* [System Architecture](#system-architecture)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## About The Project

The **Sentiment Analysis Web Application** allows users to analyze the emotional tone of any text using **Natural Language Processing (NLP)**.

Users can paste **reviews, feedback, or social media posts** and instantly get:

* Sentiment category (Positive, Negative, Neutral)
* Compound polarity score
* Visual distribution via interactive pie/donut charts

**Technologies showcased in this project:**

* NLP and Machine Learning (VADER Sentiment Analyzer)
* REST API backend with FastAPI
* Interactive frontend dashboards with React & Recharts
* Real-time sentiment scoring
* Deployed on Vercel as a monorepo (Vite + FastAPI)

---

## Key Features

* **Real-Time Analysis** - Instantly classify text sentiment.
* **Interactive Charts** - Pie/Donut visualizations of Positive, Neutral, Negative distributions.
* **Modern UI** - Glassmorphism design, responsive layout, smooth animations.
* **Fast Backend** - Powered by **FastAPI** and asynchronous Python processing.
* **Error Handling** - Handles empty inputs or API failures gracefully.
* **Vercel Deployment** - Deployed as a monorepo with Vite frontend and FastAPI backend services.

---

## Built With

### Backend

| Technology | Purpose |
|---|---|
| Python 3.12+ | Core language |
| FastAPI | REST API framework |
| NLTK (VADER) | Sentiment analysis |
| Pydantic | Data validation |

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 7 | Build tool |
| Axios | HTTP client |
| Recharts | Data visualization |
| Framer Motion | Animations |
| Lucide React | Icons |

### Deployment

| Technology | Purpose |
|---|---|
| Vercel | Hosting & serverless functions |
| Vercel Services | Monorepo deployment (Vite + FastAPI) |

---

## Getting Started

### Prerequisites

* Python 3.12+
* Node.js 18+ & npm
* Git

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Gotam-Dulhani/Sentiment-Analysis.git
cd Sentiment-Analysis
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

> Backend runs at: `http://127.0.0.1:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs at: `http://localhost:5173`

---

## Usage

1. Open the frontend application in your browser.
2. Enter or paste text into the input box.
3. Click **Analyze Sentiment**.
4. View the sentiment results & interactive charts.

**Example Input:**

```
This product is amazing! I love the quality and the design.
```

**Example Output:**

```
Sentiment:       Positive
Compound Score:  0.82
Positive:        0.78
Neutral:         0.22
Negative:        0.00
```

---

## Deployment

### Deploy on Vercel

This project is configured for Vercel deployment as a monorepo using **Vercel Services**.

#### Project Structure

```
Sentiment_Analysis/
├── frontend/          # Vite + React SPA
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/           # FastAPI serverless functions
│   ├── main.py
│   ├── pyproject.toml
│   └── requirements.txt
└── vercel.json        # Vercel Services configuration
```

#### Vercel Configuration

The `vercel.json` uses Vercel Services to deploy both the frontend and backend as a single project:

```json
{
  "services": {
    "frontend": {
      "root": "frontend/",
      "framework": "vite"
    },
    "backend": {
      "root": "backend/",
      "entrypoint": "main:app"
    }
  },
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": {
        "service": "backend"
      }
    },
    {
      "source": "/(.*)",
      "destination": {
        "service": "frontend"
      }
    }
  ]
}
```

#### Deploy Steps

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect the configuration
5. Click **Deploy**

#### API Endpoints (Production)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api` | Health check |
| POST | `/api/analyze` | Analyze text sentiment |

---

## System Architecture

```
User Input (React UI)
        |
        v
Axios HTTP Request (/api/analyze)
        |
        v
Vercel Services Routing
        |
        v
FastAPI Backend (Serverless Function)
        |
        v
NLTK VADER Sentiment Analyzer
        |
        v
JSON Response
        |
        v
React Dashboard + Charts
```

### Sentiment Classification Logic

| Compound Score | Sentiment |
|---|---|
| >= 0.05 | Positive |
| <= -0.05 | Negative |
| -0.05 to 0.05 | Neutral |

---

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m "Add AmazingFeature"
```

4. Push to the branch:

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

## License

Distributed under the **MIT License**. See `LICENSE` for details.

---

## Contact

**Gotam Dulhani**
GitHub: [https://github.com/Gotam-Dulhani/Sentiment-Analysis](https://github.com/Gotam-Dulhani/Sentiment-Analysis)

---

## Acknowledgments

* [NLTK Natural Language Toolkit](https://www.nltk.org/)
* [FastAPI Documentation](https://fastapi.tiangolo.com/)
* [React Documentation](https://react.dev/)
* [Recharts Visualization Library](https://recharts.org/)
* [Vercel Documentation](https://vercel.com/docs)
* [Vercel Services](https://vercel.com/docs/services)
