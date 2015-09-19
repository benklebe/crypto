#!/bin/bash

TMP_FILE=/tmp/parse.tmp
if [ -e ${TMP_FILE} ]; then
  echo "Cleaning up from previous install failure"
  rm -rf ${TMP_FILE}
fi
echo "Fetching latest version ..."

case `uname` in
  "Linux" )
    export latest=`curl -X GET https://api.parse.com/1/supported?version=latest|grep -Po '(\d.\d.\d)'`
    export url="https://github.com/ParsePlatform/parse-cli/releases/download/release_${latest}/parse_linux"
   ;;
  "Darwin" )
    export latest=`curl -X GET https://api.parse.com/1/supported?version=latest|grep -Eo '(\d.\d.\d)'`
    export url="https://github.com/ParsePlatform/parse-cli/releases/download/release_${latest}/parse"
    ;;
esac

curl --progress-bar --compressed -Lo ${TMP_FILE} ${url}

if [ ! -d ~/bin ]; then
  echo "Making /bin"
  mkdir -p ~/bin
fi
echo "Installing ..."
mv /tmp/parse.tmp ~/bin/parse
chmod 755 ~/bin/parse
