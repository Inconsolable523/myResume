#!bin/bash

npm run build
tar cvfz - build | ssh root@123.207.29.39 "cd /usr/share/nginx; rm -r build.tar.gz; rm -rf resume; tar xvfz -; mv build resume"

