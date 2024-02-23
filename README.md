# Rainfall App

This application calculates potential holes on a surface that can be  can be filled by rainfall.

## How to run

### Using Docker

If Docker is installed and running, and you have Internet access, you can simply start the entire application by executing:

```
docker run -d -p 3000:3000 viepovsky/rainfall-app:latest
```

Alternatively, if you have downloaded the docker-compose.yml, you can run:

```
docker compose up -d
```

### Without Docker

If Docker is not installed, follow the instructions below:

- Download the repository
- Run the `npm install` followed by `npm start` in terminal

## How to use

To use the application, you need to make a POST request to `http://localhost:3000/api/v1/rainfall` with the following JSON object as the schema:
```json
{
    "numbers": [1, 1, 0, 1, 3, 2, 2, 4, 1, 2, 3, 0]
}
```

## Example

### Response for valid input:

![valid_request.JPG](readme-ss%2Fvalid_request.JPG)

### Response for invalid input:

![invalid_request.JPG](readme-ss%2Fbad_request.JPG)

