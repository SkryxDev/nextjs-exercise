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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Api; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Api() {\n    _s();\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/users\").then((res)=>setData(res.data));\n    const posthandleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const data = Object.fromEntries(formData);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/users/new\", data);\n            console.log(res.data);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    const deletehandleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const data = Object.fromEntries(formData);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://localhost:3001/users/delete/\" + data.username, data);\n            console.log(res.data);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Get request\"\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-cd68ca88104def8a\",\n                    children: [\n                        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            id: \"cd68ca88104def8a\",\n                            children: \".margin-all.jsx-cd68ca88104def8a{margin-left:15px}\"\n                        }, void 0, false, void 0, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-cd68ca88104def8a\" + \" \" + \"row row-cols-1 row-cols-md-3 g-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-cd68ca88104def8a\" + \" \" + \"col paddding\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-cd68ca88104def8a\" + \" \" + \"card h-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"jsx-cd68ca88104def8a\" + \" \" + \"card-body\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    className: \"jsx-cd68ca88104def8a\" + \" \" + \"card-title\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                        className: \"jsx-cd68ca88104def8a\",\n                                                        children: \"User\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 48\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-cd68ca88104def8a\" + \" \" + \"card-text\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                            className: \"jsx-cd68ca88104def8a\",\n                                                            children: \"Username: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 46\n                                                        }, this),\n                                                        item.username\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-cd68ca88104def8a\" + \" \" + \"card-text\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                            className: \"jsx-cd68ca88104def8a\",\n                                                            children: \"Job: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 46\n                                                        }, this),\n                                                        item.job\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"jsx-cd68ca88104def8a\" + \" \" + \"card-footer\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                className: \"jsx-cd68ca88104def8a\" + \" \" + \"text-muted\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                        className: \"jsx-cd68ca88104def8a\",\n                                                        children: \"ID: \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 51\n                                                    }, this),\n                                                    item._id\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-cd68ca88104def8a\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, item._id, true, {\n                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Post request\"\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 61,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: posthandleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Username\",\n                            \"aria-label\": \"Username\",\n                            \"aria-describedby\": \"basic-addon1\",\n                            name: \"username\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Job\",\n                            \"aria-label\": \"Job\",\n                            \"aria-describedby\": \"basic-addon1\",\n                            name: \"job\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-outline-success\",\n                            children: \"Aggiungi\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Delete request\"\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 71,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: deletehandleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Username\",\n                            \"aria-label\": \"Username\",\n                            \"aria-describedby\": \"basic-addon1\",\n                            name: \"username\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-outline-danger\",\n                            children: \"Elimina\"\n                        }, void 0, false, {\n                            fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n                lineNumber: 72,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/skryxdev/Scrivania/nextjs-esercitazione/client/pages/components/api.components.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Api, \"hhQqYsxLIv1exGOzUvDGOVv6fXw=\");\n_c = Api;\nvar _c;\n$RefreshReg$(_c, \"Api\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdDLGNBQVc7NEJBQVdDLG9CQUFpQjs0QkFBZUMsTUFBSzs7Ozs7O3NDQUNoSSw4REFBQ1Q7Ozs7O3NDQUNELDhEQUFDVTs0QkFBT0wsTUFBSzs0QkFBU0osV0FBVTtzQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZFLENBQUM7R0E3RXVCbEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9hcGkuY29tcG9uZW50cy5qc3g/YTBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwaSgpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSlcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2VycycpLnRoZW4ocmVzID0+IHNldERhdGEocmVzLmRhdGEpKVxuICAgIFxuICAgIGNvbnN0IHBvc3RoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vycy9uZXcnLCBkYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBkZWxldGVoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzL2RlbGV0ZS9gICsgZGF0YS51c2VybmFtZSwgZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5HZXQgcmVxdWVzdDwvaDE+XG4gICAgICAgIHtcbiAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5faWR9PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgLm1hcmdpbi1hbGx7bWFyZ2luLWxlZnQ6MTVweDt9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH08L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1tZC0zIGctNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYWRkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48Yj5Vc2VyPC9iPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxiPlVzZXJuYW1lOiA8L2I+e2l0ZW0udXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48Yj5Kb2I6IDwvYj57aXRlbS5qb2J9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+PGI+SUQ6IDwvYj57aXRlbS5faWR9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgICAgPGgxPlBvc3QgcmVxdWVzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIG5hbWU9XCJ1c2VybmFtZVwiLz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkpvYlwiIGFyaWEtbGFiZWw9XCJKb2JcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgbmFtZT1cImpvYlwiLz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIj5BZ2dpdW5naTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDE+RGVsZXRlIHJlcXVlc3Q8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtkZWxldGVoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgbmFtZT1cInVzZXJuYW1lXCIvPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI+RWxpbWluYTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJBcGkiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiZ2V0IiwidGhlbiIsInJlcyIsInBvc3RoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhcmdldCIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImRlbGV0ZWhhbmRsZVN1Ym1pdCIsImRlbGV0ZSIsInVzZXJuYW1lIiwiZGl2IiwiaDEiLCJtYXAiLCJpdGVtIiwiaDUiLCJiIiwicCIsImpvYiIsInNtYWxsIiwiX2lkIiwiYnIiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJhcmlhLWRlc2NyaWJlZGJ5IiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/api.components.jsx\n"));

/***/ })

});