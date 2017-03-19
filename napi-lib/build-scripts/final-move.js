var implementationName = require( "../implem-name" );
var path = require( "path" );
var fs = require( "fs" );

var buildConfig = require( "../build-config.json" );
var implementationsDir = path.normalize( path.join( __dirname, "..", "implementations" ) );

try {
	fs.mkdirSync( implementationsDir );
} catch ( anError ) {
	if ( anError.code !== "EEXIST" ) {
		throw anError;
	}
}

function moveOne( napiVersion ) {
	var dotLibFile =
		path.join( buildConfig.productDir, napiVersion + buildConfig.staticLibSuffix );

	fs.renameSync(
		path.join( buildConfig.productDir, napiVersion + buildConfig.shlibSuffix ),
		path.join( implementationsDir, implementationName( napiVersion ) ) );

	if ( fs.existsSync( dotLibFile ) ) {
		fs.renameSync( dotLibFile,
			path.join( implementationsDir,
				implementationName( napiVersion ) + buildConfig.staticLibSuffix ) );
	}
}

moveOne( "v1" );
moveOne( "v2" );
