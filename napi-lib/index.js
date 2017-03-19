var path = require( "path" );
var implementationName = require( "./implem-name" );
var productDir = require( "./product-dir.json" ).productDir;

module.exports = function( napiVersion ) {
	return path.join( __dirname, napiVersion );
}

module.exports.loadAddon = function loadAddon( absLibraryPath, napiVersion ) {
	var theModule;
	var implementation =
		path.join( __dirname, "implementations", implementationName( napiVersion ) );
	var loaderAddon = path.join( path.dirname( absLibraryPath ), "loader.node" );

	process.env.__NAPI_MODULE_TO_LOAD = absLibraryPath;
	process.env.__NAPI_IMPLEMENTATION = implementation;

	theModule = require( loaderAddon );

	delete process.env.__NAPI_IMPLEMENTATION;
	delete process.env.__NAPI_MODULE_TO_LOAD;

	return theModule;
};

module.exports.loaderPath = function loaderPath() {
	return path.join( productDir, "loader.node" );
};

module.exports.winLib = function( napiVersion ) {
	return path.join( __dirname, "implementations", implementationName( napiVersion ) + ".lib" );
};
