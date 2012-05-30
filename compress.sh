#!/bin/bash
#
# Compress javascript using the Google Closure API, via curl
# js_externs is a set of vars the compiler shouldn't mangle
#
ORIGINAL=lattice.js
COMPRESSED=lattice-min.js
echo "Compressing javascript..."
curl -s \
	-d compilation_level=ADVANCED_OPTIMIZATIONS \
	-d output_info=compiled_code \
	-d output_format=text \
	-d js_externs="var a,b,c;" \
	--data-urlencode "js_code@${ORIGINAL}" \
	http://closure-compiler.appspot.com/compile > $COMPRESSED
echo "Compressed size:"$(wc -c < ${COMPRESSED})" bytes"
