FROM node:16.13

WORKDIR app

COPY ./frontend/package.json ./frontend/
RUN cd frontend && npm i && npm cache clean --force

COPY ./backend/package.json ./backend/
RUN cd backend && npm i && npm cache clean --force

COPY frontend ./frontend/
COPY backend ./backend/

RUN cd ./frontend && npm run build
RUN mkdir ./backend/public && cp -r ./frontend/build/* ./backend/public

EXPOSE 3001

CMD cd backend && npm run prebuild && npm run build && npm run start:prod