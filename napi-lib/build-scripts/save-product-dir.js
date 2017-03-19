require( "fs" ).writeFileSync(
	require( "path" ).resolve( __dirname, "..", "product-dir.json" ),
	JSON.stringify( {
		productDir: process.argv[ 2 ]

			// Bug: On Windows, productDir ends in a double quote, for some reason
			.replace( /"$/, "" )
	} ) );
