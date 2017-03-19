var fs = require( "fs" );
var path = require( "path" );

var napiModule = ( function() {
	var modulePath = path.join( __dirname, "build", "Release", "uses-v1.node" );
	if ( fs.existsSync( modulePath ) ) {
		return modulePath;
	}
	modulePath = path.join( __dirname, "build", "Debug", "uses-v1.node" );
	if ( fs.existsSync( modulePath )) {
		return modulePath;
	}
} )();

if ( !napiModule ) {
	throw "Module not found!";
}

module.exports = require( "napi-lib" ).loadAddon( napiModule, "v1" );
