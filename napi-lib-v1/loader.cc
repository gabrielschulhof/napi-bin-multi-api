#include <stdlib.h>
#include <node.h>
#include <uv.h>

NODE_C_CTOR(loadNAPIFirst) {
  int result;
  uv_lib_t lib;

  result = uv_dlopen("build/Release/napi-lib.so", &lib);
  if (result) {
    return;
  }

  const char *modulePath = getenv("__NAPI_MODULE_TO_LOAD");
  if (!modulePath) {
    return;
  }

  result = uv_dlopen(modulePath, &lib);
  if (result) {
    return;
  }
}
