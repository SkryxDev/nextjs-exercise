"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/api.components.jsx":
/*!*********************************************!*\
  !*** ./pages/components/api.components.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Api; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Api() {\n    _s();\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/users\").then((res)=>setData(res.data));\n    const posthandleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const data = Object.fromEntries(formData);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/users/new\", data);\n            console.log(res.data);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    const deletehandleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const data = Object.fromEntries(formData);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://localhost:3001/users/delete/\" + data.username, data);\n            console.log(res.data);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Get request\"\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row row-cols-1 row-cols-md-3 g-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card h-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card-body\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    className: \"card-title\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                        children: \"User\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 48\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"card-text\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                            children: \"Username: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                            lineNumber: 44,\n                                                            columnNumber: 46\n                                                        }, this),\n                                                        item.username\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"card-text\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                            children: \"Job: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 46\n                                                        }, this),\n                                                        item.job\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card-footer\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                className: \"text-muted\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                        children: \"ID: \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 51\n                                                    }, this),\n                                                    item._id\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, item._id, true, {\n                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Post request\"\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 56,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: posthandleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Username\",\n                            \"aria-label\": \"Username\",\n                            \"aria-describedby\": \"basic-addon1\",\n                            name: \"username\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Job\",\n                            \"aria-label\": \"Job\",\n                            \"aria-describedby\": \"basic-addon1\",\n                            name: \"job\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-outline-success\",\n                            children: \"Aggiungi\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Delete request\"\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 66,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: deletehandleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Username\",\n                            \"aria-label\": \"Username\",\n                            \"aria-describedby\": \"basic-addon1\",\n                            name: \"username\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-outline-danger\",\n                            children: \"Elimina\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 67,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Api, \"hhQqYsxLIv1exGOzUvDGOVv6fXw=\");\n_c = Api;\nvar _c;\n$RefreshReg$(_c, \"Api\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBTUMsTUFBSzs0QkFBT1gsV0FBVTs0QkFBZVksYUFBWTs0QkFBV0MsY0FBVzs0QkFBV0Msb0JBQWlCOzRCQUFlQyxNQUFLOzs7Ozs7c0NBQ2hJLDhEQUFDUjs7Ozs7c0NBQ0QsOERBQUNTOzRCQUFPTCxNQUFLOzRCQUFTWCxXQUFVO3NDQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkUsQ0FBQztHQXhFdUIzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2FwaS5jb21wb25lbnRzLmpzeD9hMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBpKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzJykudGhlbihyZXMgPT4gc2V0RGF0YShyZXMuZGF0YSkpXG4gICAgXG4gICAgY29uc3QgcG9zdGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzL25ldycsIGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZWhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnMvZGVsZXRlL2AgKyBkYXRhLnVzZXJuYW1lLCBkYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiggICAgXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPkdldCByZXF1ZXN0PC9oMT5cbiAgICAgICAge1xuICAgICAgICBkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtLl9pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLW1kLTMgZy00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxiPlVzZXI8L2I+PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PGI+VXNlcm5hbWU6IDwvYj57aXRlbS51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxiPkpvYjogPC9iPntpdGVtLmpvYn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj48Yj5JRDogPC9iPntpdGVtLl9pZH08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgICA8aDE+UG9zdCByZXF1ZXN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3RoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgbmFtZT1cInVzZXJuYW1lXCIvPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiSm9iXCIgYXJpYS1sYWJlbD1cIkpvYlwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiBuYW1lPVwiam9iXCIvPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPkFnZ2l1bmdpPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMT5EZWxldGUgcmVxdWVzdDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2RlbGV0ZWhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiBuYW1lPVwidXNlcm5hbWVcIi8+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIj5FbGltaW5hPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsIkFwaSIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwicG9zdGhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwiZGVsZXRlaGFuZGxlU3VibWl0IiwiZGVsZXRlIiwidXNlcm5hbWUiLCJkaXYiLCJoMSIsIm1hcCIsIml0ZW0iLCJjbGFzc05hbWUiLCJoNSIsImIiLCJwIiwiam9iIiwic21hbGwiLCJfaWQiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsImFyaWEtZGVzY3JpYmVkYnkiLCJuYW1lIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/api.components.jsx\n"));

/***/ })

});