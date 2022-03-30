#
# ---- Base Node ----
FROM node:16-alpine AS base
# set working directory
WORKDIR /usr/src/app
# copy project file
COPY package*.json ./
#
# ---- Test ----
# run tests
FROM base AS test
RUN npm install
COPY . .
RUN  npm test checkEligibility
RUN  npm test app
# ---- Release ----
FROM base AS production
# install node packages
RUN npm ci --only=production 
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 3000
CMD npm start