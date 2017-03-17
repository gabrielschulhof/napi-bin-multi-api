#include <dlfcn.h>
#include <stdlib.h>
#include <node.h>

NODE_C_CTOR(loadNAPIFirst) {
  void *lib;

  const char *napiPath = getenv("__NAPI_IMPLEMENTATION");
  if (!napiPath) {
    fprintf(stderr, "Failed to retrieve napi path from environment\n");
    return;
  }

  lib = dlopen(napiPath, RTLD_LAZY | RTLD_GLOBAL);
  if (!lib) {
    fprintf(stderr, "dlopen of \"%s\" failed with %s\n", napiPath,
		dlerror());
    return;
  }

  const char *modulePath = getenv("__NAPI_MODULE_TO_LOAD");
  if (!modulePath) {
    fprintf(stderr, "Failed to retrieve module path from environment\n");
    return;
  }

  lib = dlopen(modulePath, RTLD_LAZY | RTLD_LOCAL);
  if (!lib) {
    fprintf(stderr, "dlopen of \"%s\" failed with %s\n", modulePath,
	  dlerror());
    return;
  }
}
