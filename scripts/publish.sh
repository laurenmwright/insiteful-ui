#!/bin/bash

read -p "Have you updated the version number? (yN): " version_confirmation

if [ "X$version_confirmation" != "Xy" ]; then
	echo 'Please go do that. Update the version number according to your change (Since we are still not full release, use `npm version minor` for breaking changes, `npm version patch` for any other changes).'
	
	exit 1
fi

npm run check
npm run build
cd dist
npm publish
