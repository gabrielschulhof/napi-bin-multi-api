require( "fs" ).writeFileSync(
	require( "path" ).resolve( __dirname, "..", "product-dir.json" ),
	JSON.stringify( { productDir: process.argv[ 2 ] } ) );
