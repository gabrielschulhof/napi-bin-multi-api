module.exports = function provideHeaders() {
	console.log( __dirname );
};
module.exports.loadNapiModule = function loadNapiModule(absModulePath) {
	process.env.__NAPI_MODULE_TO_LOAD = absModulePath;
	try {
		require( "build/Release/loader" );
	} catch (anError) {
		require( "build/Debug/loader" );
	}
	delete process.env.__NAPI_MODULE_TO_LOAD;
};
