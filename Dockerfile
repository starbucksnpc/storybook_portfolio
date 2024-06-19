# pull official base image
FROM node:lts-bookworm
 
# set working directory
WORKDIR /nam_sol_ui_garden/
 
# install app dependencies
COPY public/ /nam_sol_ui_garden/public
COPY src/ /nam_sol_ui_garden/src
COPY package.json /nam_sol_ui_garden/
COPY . /nam_sol_ui_garden
RUN npm install
 
# start app
CMD ["npm", "run", "storybook"]