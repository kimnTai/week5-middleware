"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
        var _this = this;
        /**
         * @description 包裝 RequestHandler，捕捉 Promise.reject
         * @param {RequestHandler} func
         * @memberof Utils
         */
        this.catchAsync = function (func) {
            return function (req, res, next) {
                Promise.resolve(func(req, res, next)).catch(next);
            };
        };
        /**
         * @description 使用 catchAsync 包裝 Router
         * @param {Router} router
         * @memberof Utils
         */
        this.catchAsyncRouter = function (router) {
            var _loop_1 = function (key) {
                if (["get", "post", "delete", "patch"].includes(key)) {
                    var method_1 = router[key];
                    router[key] = function (path) {
                        var callbacks = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            callbacks[_i - 1] = arguments[_i];
                        }
                        method_1.call.apply(method_1, __spreadArray([router, path], callbacks.map(function (cb) { return _this.catchAsync(cb); }), false));
                    };
                }
            };
            for (var key in router) {
                _loop_1(key);
            }
            return router;
        };
    }
    return Utils;
}());
exports.default = new Utils();
