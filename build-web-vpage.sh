#/bin/sh
DATE=`date '+%Y%m%d_%H%M'`
WEBPACK_REPO=webapp-web
API_TIER_REPO=.

THIS_PATH=`pwd`

echo 'Build process...' $DATE

cd $WEBPACK_REPO
yarn build
cd ..
rsync -avp $(printf "./%s/dist/js/" "$WEBPACK_REPO") $(printf "./%s/public/js/" "$API_TIER_REPO")
rsync -avp $(printf "./%s/dist/css/" "$WEBPACK_REPO") $(printf "./%s/public/css/" "$API_TIER_REPO")
#cp $(printf "./%s/dist/index.html" "$WEBPACK_REPO") $(printf "./%s/resources/views/welcome.blade.php" "$API_TIER_REPO")

cd $THIS_PATH
pwd

echo 'Build Version = ' $DATE
