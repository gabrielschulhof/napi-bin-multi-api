{
	"targets": [
		{
			"target_name": "uses-v2",
			"include_dirs": [
				"<!(node -e \"require( 'napi-lib-v2' )();\")"
			],
			"sources": [
				"uses-v2.cc"
			]
		}
	]
}
