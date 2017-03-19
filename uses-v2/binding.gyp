{
	"targets": [
		{
			"target_name": "uses-v2",
			"include_dirs": [
				"<!(node -p \"require( 'napi-lib' )( 'v2' );\")"
			],
			"sources": [
				"uses-v2.cc"
			]
		},
		{
			"target_name": "copy-loader",
			"type": "none",
			"copies": [ {
				"destination": "<(PRODUCT_DIR)",
				"files": [ "<!(node -p \"require( 'napi-lib' ).loaderPath();\")" ]
			} ]
		}
	]
}
