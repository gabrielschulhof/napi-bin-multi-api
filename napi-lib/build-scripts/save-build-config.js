var args = process.argv[ 2 ].split( "|" );

require( "fs" ).writeFileSync(
	require( "path" ).resolve( __dirname, "..", "build-config.json" ),
	JSON.stringify( {
		productDir: args[ 0 ],
		shlibSuffix: args[ 1 ],
		staticLibSuffix: args[ 2 ]
	}, null, 4 ) );
