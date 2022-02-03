# Eimy Flip Board

## Demo

![Demo](https://i.imgur.com/4GpYBJy.gif)


## Installation

This project will setup by itself using the Dockerfile provided. If you do not have docker, you can still run the project by following the dockerfile commands locally

Create the image

```bash
docker build -t biggest-rectangle .
```

Run the image
```
docker run -p 3001:3001 biggest-rectangle
```

You can then visit localhost:3001 and start playing.

**Installation specific to the backend or frontend for local development are described in their specific ReadMe files**


