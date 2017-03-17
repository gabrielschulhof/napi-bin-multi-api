{
	"targets": [
		{
			"target_name": "uses-v1",
			"include_dirs": [
				"<!(node -e \"require( 'napi-lib-v1' )();\")"
			],
			"sources": [
				"uses-v1.cc"
			]
		}
	]
}
