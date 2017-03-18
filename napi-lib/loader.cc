#include <stdlib.h>
#include <node.h>

#ifdef _WIN32

// On Windows we use libuv, ignoring (mode)
#include <uv.h>
#define LOAD_LIB(name, mode) \
  do { \
    uv_lib_t lib; \
	if (-1 == uv_dlopen((name), &lib)) { \
	  fprintf(stderr, "dlopen of \"%s\" failed with: %s\n", (name), uv_dlerror(&lib)); \
	  return; \
	} \
  } while(0) \

#else /* ndef _WIN32 */

// On Unix we use dlfcn
#include <dlfcn.h>
#define LOAD_LIB(name, mode) \
  do { \
  	void *lib = dlopen(name, RTLD_LAZY | (mode)); \
	if (!lib) { \
	  fprintf(stderr, "dlopen of \"%s\" failed with: %s\n", (name), dlerror()); \
	  return; \
	} \
  } while(0)

#endif /* def _WIN32 */

NODE_C_CTOR(loadNAPIFirst) {
  const char *napiPath = getenv("__NAPI_IMPLEMENTATION");
  if (!napiPath) {
    fprintf(stderr, "Failed to retrieve napi path from environment\n");
    return;
  }

  const char *modulePath = getenv("__NAPI_MODULE_TO_LOAD");
  if (!modulePath) {
    fprintf(stderr, "Failed to retrieve module path from environment\n");
    return;
  }

  LOAD_LIB(napiPath, RTLD_GLOBAL);
  LOAD_LIB(modulePath, RTLD_LOCAL);
}
