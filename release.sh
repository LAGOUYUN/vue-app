#! /bin/bash

npm run build

## config
dir="./dist"


# path=/apps/yun-web-tomcat/webapps/ROOT
# receiver=http://10.1.200.207:3000
path=/apps/nginx/lance
receiver=http://10.1.200.54:3000
## config

cd $dir
tar -czf release.tar.gz static template
cd -
curl -F "file=@${dir}/release.tar.gz;"  "${receiver}?path=${path}"
