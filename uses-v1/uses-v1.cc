#include <node_jsvmapi.h>

void exportedFunctionV1(napi_env env, napi_callback_info info){}

void Init(napi_env env, napi_value exports, napi_value module) {
  napi_value jsUndefined;
  napi_get_undefined(env, &jsUndefined);
  napi_property_descriptor desc = { "exportedFunctionV1", exportedFunctionV1 };
  napi_define_properties(env, exports, 1, &desc);
}

NODE_MODULE_ABI(usesv1, Init)
