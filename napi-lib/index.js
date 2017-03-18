var path = require( "path" );
var implementationName = require( "implem-name" );

module.exports = function( napiVersion ) {
	console.log( path.join( __dirname, napiVersion ) );
}

module.exports.require = function require( absLibraryPath, napiVersion ) {
	var theModule;
	var implementation =
		path.join( __dirname, "implementations", implementationName( napiVersion ) );

	process.env.__NAPI_MODULE_TO_LOAD = absLibraryPath;
	process.env.__NAPI_IMPLEMENTATION = implementation;

	theModule = require( "bindings" )( "loader" );

	delete process.env.__NAPI_IMPLEMENTATION;
	delete process.env.__NAPI_MODULE_TO_LOAD;

	return theModule;
};
