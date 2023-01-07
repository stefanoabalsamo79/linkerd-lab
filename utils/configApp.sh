
#!/bin/sh
set -e

APP=$1

YQ=`which yq`
JQ=`which jq`
KUBECTL=`which kubectl`
INFO_FILE="./infra/info.yaml"
NAMESPACE=`$YQ e ".app.$APP.namespace" $INFO_FILE` 
APP_NAME=`$YQ e ".app.$APP.name" $INFO_FILE` 
VERSION=`$YQ e ".app.$APP.version" $INFO_FILE`
DEPLOYMENT_FILE="./containers/${APP}/deploy/deployment.yaml"

$YQ e ".spec.template.spec.containers[0].image=\"$APP_NAME:$VERSION\"" \
$DEPLOYMENT_FILE > "${DEPLOYMENT_FILE}.tmp" && \
mv "${DEPLOYMENT_FILE}.tmp" $DEPLOYMENT_FILE




