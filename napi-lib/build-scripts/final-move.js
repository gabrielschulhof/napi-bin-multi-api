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

function moveOne( napiVersion ) {
	var dotLibFile = path.join( productDir, napiVersion + ".lib" );

	fs.renameSync(
		path.join( productDir, napiVersion + ".node" ),
		path.join( implementationsDir, implementationName( napiVersion ) ) );

	if ( fs.existsSync( dotLibFile ) ) {
		fs.renameSync( dotLibFile,
			path.join( implementationsDir, implementationName( napiVersion ) + ".lib" ) );
	}
}

moveOne( "v1" );
moveOne( "v2" );
