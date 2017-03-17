var fs = require( "fs" );
var path = require( "path" );

var napiModule = ( function() {
	var modulePath = path.join( __dirname, "build", "Release", "uses-v2.node" );
	console.log( "modulePath: " + modulePath );
	if ( fs.existsSync( modulePath ) ) {
		return modulePath;
	}
	modulePath = path.join( __dirname, "build", "Debug", "uses-v2.node" );
	console.log( "modulePath: " + modulePath );
	if ( fs.existsSync( modulePath )) {
		return modulePath;
	}
} )();

if ( !napiModule ) {
	throw "Module not found!";
}

module.exports = require( "napi-lib-v2" ).loadNapiModule( napiModule );
