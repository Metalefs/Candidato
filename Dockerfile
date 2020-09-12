FROM node as build
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json /app/
RUN npm install
# RUN npm install -g @angular/cli@10.0.2
COPY . /app
RUN ng build --prod

# base image
FROM nginx

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/Candidato /usr/share/nginx/html
