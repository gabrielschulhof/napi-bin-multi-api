{
	"targets": [
		{
			"target_name": "napi-lib",
			"type": "shared_library",
			"sources": [
				"node_jsvmapi.cc"
			]
		},
		{
			"target_name": "loader",
			"sources": [
				"loader.cc"
			]
		}
	]
}
