{
	"targets": [
		{
			"target_name": "loader",
			"sources": [
				"loader.cc"
			],
		},
		{
			"target_name": "v1",
			"sources": [
				"v1/node_jsvmapi.cc",
				"v1/node_asyncapi.cc"
			]
		},
		{
			"target_name": "v2",
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
					"<(PRODUCT_DIR)/v1.node",
					"<(PRODUCT_DIR)/v2.node"
				],
				"outputs": [
					"implementations/<!@(node -p 'require( \"./implem-name\" )( \"v1\" );')",
					"implementations/<!@(node -p 'require( \"./implem-name\" )( \"v2\" );')"
				],
				"action": [ "node", "build-scripts/final-move.js", "<(PRODUCT_DIR)" ]
			} ],
			"dependencies": [ "v1", "v2" ]
		},
		{
			"target_name": "save-product-dir",
			"type": "none",
			"actions": [ {
				"action_name": "save-product-dir",
				"message": "Saving PRODUCT_DIR",
				"inputs": [ "" ],
				"outputs": [ "product-dir.json" ],
				"action": [ "node", "build-scripts/save-product-dir.js", "<(PRODUCT_DIR)" ]
			} ]
		}
	]
}
