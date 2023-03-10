# shortly

A URL shortening web app

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

## Run Locally

To run this project locally, follow these steps:

1. Clone the project

```bash
  git clone https://github.com/alvyynm/shortly.git
```

2. Go to the project directory

```bash
  cd shortly
```

3. Navigate to the frontend directory

```bash
  cd frontend
```

4. Install dependencies

```bash
  npm install
```

5. Navigate to the backend directory

```bash
  cd .. ; cd server
```

6. Install server-side dependencies

```bash
  npm install
```

7. Start the server

> NB: _You'll need to create a .env file in the root directory on the server side then set environment variables to run the server successfully. Check [Environment Variables](##environment-variables) section for more details_.

```bash
  npm start
```

8. On a separate terminal tab, navigate to the frontend directory and start the server:

```bash
  npm run dev
```

Frontend runs at http://localhost:5173/
Backend runs at http://localhost:3000/

## Demo

Insert gif or link to demo [ NEXT]

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT: 8080`

`BASE_API_URL=https://api.shrtco.de/v2`

## API Reference

Coming next after creating an inhouse API
