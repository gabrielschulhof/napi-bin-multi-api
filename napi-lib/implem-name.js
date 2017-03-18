module.exports = function( napiVersion ) {

	// Can look like v7.x64.linux.v1
	return process.version.substr( 0, 2 ) +
		"." + process.arch +
		"." + process.platform +
		"." + napiVersion;
};
