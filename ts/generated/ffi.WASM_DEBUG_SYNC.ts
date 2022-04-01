// This file generated by "generate.ts ffi" in the root of the repo.
import { QuickJSEmscriptenModule } from "../emscripten-types"
import { JSRuntimePointer, JSContextPointer, JSContextPointerPointer, JSModuleDefPointer, JSValuePointer, JSValueConstPointer, JSValuePointerPointer, JSValueConstPointerPointer, QTS_C_To_HostCallbackFuncPointer, QTS_C_To_HostInterruptFuncPointer, QTS_C_To_HostLoadModuleFuncPointer, BorrowedHeapCharPointer, OwnedHeapCharPointer, JSBorrowedCharPointer, JSVoidPointer, EvalFlags, EvalDetectModule } from "../types-ffi"

/**
 * Low-level FFI bindings to QuickJS's Emscripten module.
 * See instead [[QuickJSContext]], the public Javascript interface exposed by this
 * library.
 *
 * @unstable The FFI interface is considered private and may change.
 */
export class QuickJSFFI {
  private module: QuickJSEmscriptenModule;
  private getAbortWhat: () => (null | { what: string });

  constructor(module: QuickJSEmscriptenModule, getAbortWhat: () => (null | { what: string })) {
    this.module = module;
    this.getAbortWhat = getAbortWhat;
  }

  /** Set at compile time. */
  readonly DEBUG = true


  QTS_Throw: (ctx: JSContextPointer, error: JSValuePointer | JSValueConstPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_Throw", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewError: (ctx: JSContextPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewError", "number", ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeSetMemoryLimit: (rt: JSRuntimePointer, limit: number) => void = (() => {
    const f = this.module.cwrap("QTS_RuntimeSetMemoryLimit", null, ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeComputeMemoryUsage: (rt: JSRuntimePointer, ctx: JSContextPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_RuntimeComputeMemoryUsage", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeDumpMemoryUsage: (rt: JSRuntimePointer) => OwnedHeapCharPointer = (() => {
    const f = this.module.cwrap("QTS_RuntimeDumpMemoryUsage", "number", ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RecoverableLeakCheck: () => number = (() => {
    const f = this.module.cwrap("QTS_RecoverableLeakCheck", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_BuildIsSanitizeLeak: () => number = (() => {
    const f = this.module.cwrap("QTS_BuildIsSanitizeLeak", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeSetMaxStackSize: (rt: JSRuntimePointer, stack_size: number) => void = (() => {
    const f = this.module.cwrap("QTS_RuntimeSetMaxStackSize", null, ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetUndefined: () => JSValueConstPointer = (() => {
    const f = this.module.cwrap("QTS_GetUndefined", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetNull: () => JSValueConstPointer = (() => {
    const f = this.module.cwrap("QTS_GetNull", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetFalse: () => JSValueConstPointer = (() => {
    const f = this.module.cwrap("QTS_GetFalse", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetTrue: () => JSValueConstPointer = (() => {
    const f = this.module.cwrap("QTS_GetTrue", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewRuntime: () => JSRuntimePointer = (() => {
    const f = this.module.cwrap("QTS_NewRuntime", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_FreeRuntime: (rt: JSRuntimePointer) => void = (() => {
    const f = this.module.cwrap("QTS_FreeRuntime", null, ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewContext: (rt: JSRuntimePointer) => JSContextPointer = (() => {
    const f = this.module.cwrap("QTS_NewContext", "number", ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_FreeContext: (ctx: JSContextPointer) => void = (() => {
    const f = this.module.cwrap("QTS_FreeContext", null, ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_FreeValuePointer: (ctx: JSContextPointer, value: JSValuePointer) => void = (() => {
    const f = this.module.cwrap("QTS_FreeValuePointer", null, ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_FreeValuePointerRuntime: (rt: JSRuntimePointer, value: JSValuePointer) => void = (() => {
    const f = this.module.cwrap("QTS_FreeValuePointerRuntime", null, ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_FreeVoidPointer: (ctx: JSContextPointer, ptr: JSVoidPointer) => void = (() => {
    const f = this.module.cwrap("QTS_FreeVoidPointer", null, ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_FreeCString: (ctx: JSContextPointer, str: JSBorrowedCharPointer) => void = (() => {
    const f = this.module.cwrap("QTS_FreeCString", null, ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_DupValuePointer: (ctx: JSContextPointer, val: JSValuePointer | JSValueConstPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_DupValuePointer", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewObject: (ctx: JSContextPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewObject", "number", ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewObjectProto: (ctx: JSContextPointer, proto: JSValuePointer | JSValueConstPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewObjectProto", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewArray: (ctx: JSContextPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewArray", "number", ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewFloat64: (ctx: JSContextPointer, num: number) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewFloat64", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetFloat64: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => number = (() => {
    const f = this.module.cwrap("QTS_GetFloat64", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewString: (ctx: JSContextPointer, string: BorrowedHeapCharPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewString", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetString: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => JSBorrowedCharPointer = (() => {
    const f = this.module.cwrap("QTS_GetString", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_IsJobPending: (rt: JSRuntimePointer) => number = (() => {
    const f = this.module.cwrap("QTS_IsJobPending", "number", ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_ExecutePendingJob: (rt: JSRuntimePointer, maxJobsToExecute: number, lastJobContext: JSContextPointerPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_ExecutePendingJob", "number", ["number","number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_GetProp", "number", ["number","number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_SetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer) => void = (() => {
    const f = this.module.cwrap("QTS_SetProp", null, ["number","number","number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_DefineProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer, get: JSValuePointer | JSValueConstPointer, set: JSValuePointer | JSValueConstPointer, configurable: boolean, enumerable: boolean, has_value: boolean) => void = (() => {
    const f = this.module.cwrap("QTS_DefineProp", null, ["number","number","number","number","number","number","boolean","boolean","boolean"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_Call: (ctx: JSContextPointer, func_obj: JSValuePointer | JSValueConstPointer, this_obj: JSValuePointer | JSValueConstPointer, argc: number, argv_ptrs: JSValueConstPointerPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_Call", "number", ["number","number","number","number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_ResolveException: (ctx: JSContextPointer, maybe_exception: JSValuePointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_ResolveException", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_Dump: (ctx: JSContextPointer, obj: JSValuePointer | JSValueConstPointer) => JSBorrowedCharPointer = (() => {
    const f = this.module.cwrap("QTS_Dump", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_Eval: (ctx: JSContextPointer, js_code: BorrowedHeapCharPointer, filename: string, detectModule: EvalDetectModule, evalFlags: EvalFlags) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_Eval", "number", ["number","number","string","number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_Typeof: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => OwnedHeapCharPointer = (() => {
    const f = this.module.cwrap("QTS_Typeof", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_GetGlobalObject: (ctx: JSContextPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_GetGlobalObject", "number", ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewPromiseCapability: (ctx: JSContextPointer, resolve_funcs_out: JSValuePointerPointer) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewPromiseCapability", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_TestStringArg: (string: string) => void = (() => {
    const f = this.module.cwrap("QTS_TestStringArg", null, ["string"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_BuildIsDebug: () => number = (() => {
    const f = this.module.cwrap("QTS_BuildIsDebug", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_BuildIsAsyncify: () => number = (() => {
    const f = this.module.cwrap("QTS_BuildIsAsyncify", "number", []);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_NewFunction: (ctx: JSContextPointer, func_id: number, name: string) => JSValuePointer = (() => {
    const f = this.module.cwrap("QTS_NewFunction", "number", ["number","number","string"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_ArgvGetJSValueConstPointer: (argv: JSValuePointer | JSValueConstPointer, index: number) => JSValueConstPointer = (() => {
    const f = this.module.cwrap("QTS_ArgvGetJSValueConstPointer", "number", ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeEnableInterruptHandler: (rt: JSRuntimePointer) => void = (() => {
    const f = this.module.cwrap("QTS_RuntimeEnableInterruptHandler", null, ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeDisableInterruptHandler: (rt: JSRuntimePointer) => void = (() => {
    const f = this.module.cwrap("QTS_RuntimeDisableInterruptHandler", null, ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeEnableModuleLoader: (rt: JSRuntimePointer, use_custom_normalize: number) => void = (() => {
    const f = this.module.cwrap("QTS_RuntimeEnableModuleLoader", null, ["number","number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();


  QTS_RuntimeDisableModuleLoader: (rt: JSRuntimePointer) => void = (() => {
    const f = this.module.cwrap("QTS_RuntimeDisableModuleLoader", null, ["number"]);

    return (...args) => {
      const maybeWhat = this.getAbortWhat();

      if (maybeWhat) {
        throw new Error(`unsafe to use due to prior call abort: ${String(maybeWhat.what)}`);
      }

      return f(...args);
    };
  })();
}
