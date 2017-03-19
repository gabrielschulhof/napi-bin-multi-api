{
	"targets": [
		{
			"target_name": "loader",
			"sources": [
				"loader.cc"
			],
		},
		{
			"target_name": "save-build-config",
			"type": "none",
			"actions": [ {
				"action_name": "save-build-config",
				"message": "Saving build configuration",
				"inputs": [ "" ],
				"outputs": [ "build-config.json" ],
				"action": [ "node", "build-scripts/save-build-config.js",

					# This weird format needs to be used because on Windows arguments are
					# botched together
					'<(PRODUCT_DIR)|<(SHARED_LIB_SUFFIX)|<(STATIC_LIB_SUFFIX)'
				]
			} ]
		},
		{
			"target_name": "v1",
			"type": "shared_library",
			"sources": [
				"v1/node_jsvmapi.cc",
				"v1/node_asyncapi.cc"
			]
		},
		{
			"target_name": "v2",
			"type": "shared_library",
			"sources": [
				"v2/node_jsvmapi.cc",
				"v2/node_asyncapi.cc"
			]
		},
		{
			"target_name": "final_move",
			"type": "none",
			"actions": [ {
				"action_name": "move_implems",
				"message": "Moving implementations",
				"inputs": [
					"<(PRODUCT_DIR)/v1<(SHARED_LIB_SUFFIX)",
					"<(PRODUCT_DIR)/v2<(SHARED_LIB_SUFFIX)"
				],
				"outputs": [
					"implementations/<!(node -p \"require( './implem-name' )( 'v1' );\")",
					"implementations/<!(node -p \"require( './implem-name' )( 'v2' );\")"
				],
				"action": [ "node", "build-scripts/final-move.js" ]
			} ],
			"dependencies": [ "v1", "v2", "save-build-config" ]
		}
	]
}
