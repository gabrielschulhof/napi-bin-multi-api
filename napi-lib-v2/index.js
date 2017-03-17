var path = require( "path" );

module.exports = function provideHeaders() {
	console.log( __dirname );
};
module.exports.loadNapiModule = function loadNapiModule(absModulePath) {
	var theModule;

	process.env.__NAPI_MODULE_TO_LOAD = absModulePath;
	process.env.__NAPI_IMPLEMENTATION = path.join( __dirname, "build", "Release", "napi-lib.so" );

	theModule = require( "bindings" )( "loader" );

	delete process.env.__NAPI_IMPLEMENTATION;
	delete process.env.__NAPI_MODULE_TO_LOAD;

	return theModule;
};
