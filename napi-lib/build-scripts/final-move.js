var implementationName = require( "../implem-name" );
var path = require( "path" );
var fs = require( "fs" );

var productDir = require( "../product-dir.json" ).productDir;
var implementationsDir = path.normalize( path.join( __dirname, "..", "implementations" ) );

try {
	fs.mkdirSync( implementationsDir );
} catch ( anError ) {
	if ( anError.code !== "EEXIST" ) {
		throw anError;
	}
}

fs.renameSync(
	path.join( productDir, "v1.node" ),
	path.join( implementationsDir, implementationName( "v1" ) ) );

fs.renameSync(
	path.join( productDir, "v2.node" ),
	path.join( implementationsDir, implementationName( "v2" ) ) );
