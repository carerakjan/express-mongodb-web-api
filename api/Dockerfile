FROM mhart/alpine-node:14

# RUN some command while build image ("-p" create intermediate directories as required) (1: create folder)
RUN mkdir -p /usr/src/app/

# specify working dir, where all commands will be launched (2: go into folder)
WORKDIR /usr/src/app/

# copy from our machine to container (3: copy current folder into container folder)
COPY . /usr/src/app/

# install npm dependencies
RUN npm i

# EXPOSE is usually used as a documentation mechanism; that is,
# hinting to the container operator about the port(s) providing services
EXPOSE 3000

# ENV specify environment variables (container is isolated and does not know about local timezone,
# TZ allow to specify it in linux based OS)
#ENV TZ Europe/Kiev

# what should we do after container will be launched (CMD is launched through shell "bin sh")
CMD ["npm", "start"]

# without shell
#ENTRYPOINT ["node", "index"]
