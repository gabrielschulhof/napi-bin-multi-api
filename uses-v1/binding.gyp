{
	"targets": [
		{
			"target_name": "uses-v1",
			"include_dirs": [
				"<!(node -p \"require( 'napi-lib' )( 'v1' );\")"
			],
			"sources": [
				"uses-v1.cc"
			],
			"conditions": [ [ "OS=='win'", {
				"libraries": [ "<!(node -p \"require( 'napi-lib' ).winLib( 'v1' );\")" ]
			} ] ]
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
