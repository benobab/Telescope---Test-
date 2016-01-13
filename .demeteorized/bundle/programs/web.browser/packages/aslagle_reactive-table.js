//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var i18n = Package['anti:i18n'].i18n;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var get, oldField, sortedRows, normalizeSort, getSortedFields, getSortQuery, sortWithFunctions, getPrimarySortField, changePrimarySort, getFilterQuery, ReactiveTable, dependOnFilters, getFilterStrings, getFilterFields;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle_reactive-table/lib/template.reactive_table.js                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("reactiveTable");                                                                               // 2
Template["reactiveTable"] = new Template("Template.reactiveTable", (function() {                                     // 3
  var view = this;                                                                                                   // 4
  return Spacebars.With(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("context"));                                                                   // 6
  }, function() {                                                                                                    // 7
    return [ "\n  ", Blaze.If(function() {                                                                           // 8
      return Spacebars.call(view.lookup("ready"));                                                                   // 9
    }, function() {                                                                                                  // 10
      return [ "\n    ", HTML.DIV({                                                                                  // 11
        "class": "clearfix"                                                                                          // 12
      }, "\n      ", HTML.DIV({                                                                                      // 13
        "class": "reactive-table-options col-sm-8 pull-right"                                                        // 14
      }, "\n        ", Blaze.If(function() {                                                                         // 15
        return Spacebars.call(view.lookup("showFilter"));                                                            // 16
      }, function() {                                                                                                // 17
        return [ "\n          ", HTML.DIV({                                                                          // 18
          "class": "reactive-table-filter form-group col-sm-8 pull-right"                                            // 19
        }, "\n            ", Blaze._TemplateWith(function() {                                                        // 20
          return {                                                                                                   // 21
            id: Spacebars.call(view.lookup("getFilterId")),                                                          // 22
            useFontAwesome: Spacebars.call(view.lookup("useFontAwesome"))                                            // 23
          };                                                                                                         // 24
        }, function() {                                                                                              // 25
          return Spacebars.include(view.lookupTemplate("reactiveTableFilter"));                                      // 26
        }), "\n          "), "\n        " ];                                                                         // 27
      }), "\n        ", Blaze.If(function() {                                                                        // 28
        return Spacebars.call(view.lookup("showColumnToggles"));                                                     // 29
      }, function() {                                                                                                // 30
        return [ "\n          ", HTML.DIV({                                                                          // 31
          "class": "reactive-table-columns-dropdown col-sm-4 pull-right"                                             // 32
        }, "\n            ", HTML.BUTTON({                                                                           // 33
          "class": "btn btn-default dropdown-toggle",                                                                // 34
          id: function() {                                                                                           // 35
            return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                          // 36
          },                                                                                                         // 37
          "data-toggle": "dropdown"                                                                                  // 38
        }, "\n              ", Blaze.View("lookup:i18n", function() {                                                // 39
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.columns");                                   // 40
        }), "\n            "), "\n            ", HTML.UL({                                                           // 41
          "class": "dropdown-menu dropdown-menu-right",                                                              // 42
          role: "menu",                                                                                              // 43
          "aria-labelledby": function() {                                                                            // 44
            return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                          // 45
          }                                                                                                          // 46
        }, "\n              ", Blaze.Each(function() {                                                               // 47
          return Spacebars.call(view.lookup("fields"));                                                              // 48
        }, function() {                                                                                              // 49
          return [ "\n                ", Blaze.Unless(function() {                                                   // 50
            return Spacebars.call(view.lookup("hideToggle"));                                                        // 51
          }, function() {                                                                                            // 52
            return [ "\n                  ", HTML.LI({                                                               // 53
              role: "presentation"                                                                                   // 54
            }, HTML.A({                                                                                              // 55
              role: "menuitem",                                                                                      // 56
              tabindex: "-1",                                                                                        // 57
              "data-target": "#"                                                                                     // 58
            }, "\n                    ", Blaze.If(function() {                                                       // 59
              return Spacebars.call(view.lookup("isVisible"));                                                       // 60
            }, function() {                                                                                          // 61
              return [ "\n                      ", HTML.INPUT({                                                      // 62
                type: "checkbox",                                                                                    // 63
                checked: "",                                                                                         // 64
                "data-fieldid": function() {                                                                         // 65
                  return Spacebars.mustache(view.lookup("fieldId"));                                                 // 66
                }                                                                                                    // 67
              }), "\n                    " ];                                                                        // 68
            }, function() {                                                                                          // 69
              return [ "\n                      ", HTML.INPUT({                                                      // 70
                type: "checkbox",                                                                                    // 71
                "data-fieldid": function() {                                                                         // 72
                  return Spacebars.mustache(view.lookup("fieldId"));                                                 // 73
                }                                                                                                    // 74
              }), "\n                    " ];                                                                        // 75
            }), "\n                    ", HTML.LABEL("\n                      ", Blaze.If(function() {               // 76
              return Spacebars.call(view.lookup("labelIsTemplate"));                                                 // 77
            }, function() {                                                                                          // 78
              return Spacebars.With(function() {                                                                     // 79
                return Spacebars.call(view.lookup("labelData"));                                                     // 80
              }, function() {                                                                                        // 81
                return Spacebars.include(function() {                                                                // 82
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                                  // 83
                });                                                                                                  // 84
              }, function() {                                                                                        // 85
                return Spacebars.include(view.lookupTemplate("label"));                                              // 86
              });                                                                                                    // 87
            }, function() {                                                                                          // 88
              return Blaze.View("lookup:getLabel", function() {                                                      // 89
                return Spacebars.mustache(view.lookup("getLabel"));                                                  // 90
              });                                                                                                    // 91
            }), "\n                    "), "\n                  ")), "\n                " ];                         // 92
          }), "\n              " ];                                                                                  // 93
        }), "\n            "), "\n          "), "\n        " ];                                                      // 94
      }), "\n      "), "\n    "), "\n    ", Blaze.Unless(function() {                                                // 95
        return Spacebars.call(view.lookup("noData"));                                                                // 96
      }, function() {                                                                                                // 97
        return [ "\n      ", HTML.TABLE({                                                                            // 98
          id: function() {                                                                                           // 99
            return Spacebars.mustache(view.lookup("id"));                                                            // 100
          },                                                                                                         // 101
          "class": function() {                                                                                      // 102
            return [ Spacebars.mustache(view.lookup("class")), " reactive-table" ];                                  // 103
          }                                                                                                          // 104
        }, "\n        ", HTML.THEAD("\n          ", HTML.TR("\n            ", Blaze.Each(function() {                // 105
          return Spacebars.call(view.lookup("fields"));                                                              // 106
        }, function() {                                                                                              // 107
          return [ "\n              ", Blaze.If(function() {                                                         // 108
            return Spacebars.call(view.lookup("isVisible"));                                                         // 109
          }, function() {                                                                                            // 110
            return [ "\n                ", Blaze.If(function() {                                                     // 111
              return Spacebars.call(view.lookup("isPrimarySortField"));                                              // 112
            }, function() {                                                                                          // 113
              return [ "\n                  ", HTML.TH({                                                             // 114
                "class": function() {                                                                                // 115
                  return [ "sortable ", Spacebars.mustache(view.lookup("getHeaderClass")) ];                         // 116
                },                                                                                                   // 117
                fieldid: function() {                                                                                // 118
                  return Spacebars.mustache(view.lookup("getFieldFieldId"));                                         // 119
                }                                                                                                    // 120
              }, "\n                    ", Blaze.If(function() {                                                     // 121
                return Spacebars.call(view.lookup("labelIsTemplate"));                                               // 122
              }, function() {                                                                                        // 123
                return Spacebars.With(function() {                                                                   // 124
                  return Spacebars.call(view.lookup("labelData"));                                                   // 125
                }, function() {                                                                                      // 126
                  return Spacebars.include(function() {                                                              // 127
                    return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                                // 128
                  });                                                                                                // 129
                }, function() {                                                                                      // 130
                  return Spacebars.include(view.lookupTemplate("label"));                                            // 131
                });                                                                                                  // 132
              }, function() {                                                                                        // 133
                return Blaze.View("lookup:getLabel", function() {                                                    // 134
                  return Spacebars.mustache(view.lookup("getLabel"));                                                // 135
                });                                                                                                  // 136
              }), HTML.CharRef({                                                                                     // 137
                html: "&nbsp;",                                                                                      // 138
                str: " "                                                                                             // 139
              }), HTML.CharRef({                                                                                     // 140
                html: "&nbsp;",                                                                                      // 141
                str: " "                                                                                             // 142
              }), "\n                    ", Blaze.If(function() {                                                    // 143
                return Spacebars.call(view.lookup("isAscending"));                                                   // 144
              }, function() {                                                                                        // 145
                return [ "\n                      ", Blaze.If(function() {                                           // 146
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                         // 147
                }, function() {                                                                                      // 148
                  return [ "\n                        ", HTML.I({                                                    // 149
                    "class": "fa fa-sort-asc"                                                                        // 150
                  }), "\n                      " ];                                                                  // 151
                }, function() {                                                                                      // 152
                  return [ "\n                        ", HTML.CharRef({                                              // 153
                    html: "&#x25B2;",                                                                                // 154
                    str: "▲"                                                                                         // 155
                  }), "\n                      " ];                                                                  // 156
                }), "\n                    " ];                                                                      // 157
              }, function() {                                                                                        // 158
                return [ "\n                      ", Blaze.If(function() {                                           // 159
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                         // 160
                }, function() {                                                                                      // 161
                  return [ "\n                        ", HTML.I({                                                    // 162
                    "class": "fa fa-sort-desc"                                                                       // 163
                  }), "\n                      " ];                                                                  // 164
                }, function() {                                                                                      // 165
                  return [ "\n                        ", HTML.CharRef({                                              // 166
                    html: "&#x25BC;",                                                                                // 167
                    str: "▼"                                                                                         // 168
                  }), "\n                      " ];                                                                  // 169
                }), "\n                    " ];                                                                      // 170
              }), "\n                  "), "\n                " ];                                                   // 171
            }, function() {                                                                                          // 172
              return [ "\n                  ", Blaze.If(function() {                                                 // 173
                return Spacebars.call(view.lookup("isSortable"));                                                    // 174
              }, function() {                                                                                        // 175
                return [ "\n                    ", HTML.TH({                                                         // 176
                  "class": function() {                                                                              // 177
                    return [ Spacebars.mustache(view.lookup("getHeaderClass")), " sortable" ];                       // 178
                  },                                                                                                 // 179
                  fieldid: function() {                                                                              // 180
                    return Spacebars.mustache(view.lookup("getFieldFieldId"));                                       // 181
                  }                                                                                                  // 182
                }, Blaze.If(function() {                                                                             // 183
                  return Spacebars.call(view.lookup("labelIsTemplate"));                                             // 184
                }, function() {                                                                                      // 185
                  return Spacebars.With(function() {                                                                 // 186
                    return Spacebars.call(view.lookup("labelData"));                                                 // 187
                  }, function() {                                                                                    // 188
                    return Spacebars.include(function() {                                                            // 189
                      return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                              // 190
                    });                                                                                              // 191
                  }, function() {                                                                                    // 192
                    return Spacebars.include(view.lookupTemplate("label"));                                          // 193
                  });                                                                                                // 194
                }, function() {                                                                                      // 195
                  return Blaze.View("lookup:getLabel", function() {                                                  // 196
                    return Spacebars.mustache(view.lookup("getLabel"));                                              // 197
                  });                                                                                                // 198
                })), "\n                  " ];                                                                       // 199
              }, function() {                                                                                        // 200
                return [ "\n                    ", HTML.TH({                                                         // 201
                  "class": function() {                                                                              // 202
                    return Spacebars.mustache(view.lookup("getHeaderClass"));                                        // 203
                  },                                                                                                 // 204
                  fieldid: function() {                                                                              // 205
                    return Spacebars.mustache(view.lookup("getFieldFieldId"));                                       // 206
                  }                                                                                                  // 207
                }, Blaze.If(function() {                                                                             // 208
                  return Spacebars.call(view.lookup("labelIsTemplate"));                                             // 209
                }, function() {                                                                                      // 210
                  return Spacebars.With(function() {                                                                 // 211
                    return Spacebars.call(view.lookup("labelData"));                                                 // 212
                  }, function() {                                                                                    // 213
                    return Spacebars.include(function() {                                                            // 214
                      return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                              // 215
                    });                                                                                              // 216
                  }, function() {                                                                                    // 217
                    return Spacebars.include(view.lookupTemplate("label"));                                          // 218
                  });                                                                                                // 219
                }, function() {                                                                                      // 220
                  return Blaze.View("lookup:getLabel", function() {                                                  // 221
                    return Spacebars.mustache(view.lookup("getLabel"));                                              // 222
                  });                                                                                                // 223
                })), "\n                  " ];                                                                       // 224
              }), "\n                " ];                                                                            // 225
            }), "\n              " ];                                                                                // 226
          }), "\n            " ];                                                                                    // 227
        }), "\n          "), "\n        "), "\n        ", HTML.TBODY("\n          ", Blaze.Each(function() {         // 228
          return Spacebars.call(view.lookup("sortedRows"));                                                          // 229
        }, function() {                                                                                              // 230
          return [ "\n            ", HTML.TR({                                                                       // 231
            "class": function() {                                                                                    // 232
              return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "rowClass"), view.lookup("."));             // 233
            }                                                                                                        // 234
          }, "\n              ", Blaze.Each(function() {                                                             // 235
            return Spacebars.call(Spacebars.dot(view.lookup(".."), "fields"));                                       // 236
          }, function() {                                                                                            // 237
            return [ "\n                ", Blaze.If(function() {                                                     // 238
              return Spacebars.call(view.lookup("isVisible"));                                                       // 239
            }, function() {                                                                                          // 240
              return [ "\n                  ", HTML.TD({                                                             // 241
                "class": function() {                                                                                // 242
                  return Spacebars.mustache(view.lookup("getCellClass"), view.lookup(".."));                         // 243
                }                                                                                                    // 244
              }, Blaze.If(function() {                                                                               // 245
                return Spacebars.call(view.lookup("tmpl"));                                                          // 246
              }, function() {                                                                                        // 247
                return Spacebars.With(function() {                                                                   // 248
                  return Spacebars.call(view.lookup(".."));                                                          // 249
                }, function() {                                                                                      // 250
                  return Spacebars.include(function() {                                                              // 251
                    return Spacebars.call(Spacebars.dot(view.lookup(".."), "tmpl"));                                 // 252
                  });                                                                                                // 253
                });                                                                                                  // 254
              }, function() {                                                                                        // 255
                return Blaze.View("lookup:getField", function() {                                                    // 256
                  return Spacebars.mustache(view.lookup("getField"), view.lookup(".."));                             // 257
                });                                                                                                  // 258
              })), "\n                " ];                                                                           // 259
            }), "\n              " ];                                                                                // 260
          }), "\n            "), "\n          " ];                                                                   // 261
        }), "\n        "), "\n      "), "\n      ", Blaze.If(function() {                                            // 262
          return Spacebars.call(view.lookup("showNavigation"));                                                      // 263
        }, function() {                                                                                              // 264
          return [ "\n        ", HTML.DIV({                                                                          // 265
            "class": "reactive-table-navigation"                                                                     // 266
          }, "\n          ", Blaze.If(function() {                                                                   // 267
            return Spacebars.call(view.lookup("showNavigationRowsPerPage"));                                         // 268
          }, function() {                                                                                            // 269
            return [ "\n            ", HTML.DIV({                                                                    // 270
              "class": "form-inline form-group rows-per-page"                                                        // 271
            }, "\n              ", HTML.LABEL("\n                ", HTML.SPAN(Blaze.View("lookup:i18n", function() {
              return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.show");                                  // 273
            })), "\n                ", HTML.INPUT({                                                                  // 274
              "class": "form-control",                                                                               // 275
              type: "text",                                                                                          // 276
              value: function() {                                                                                    // 277
                return Spacebars.mustache(view.lookup("getRowsPerPage"));                                            // 278
              }                                                                                                      // 279
            }), "\n                ", Blaze.If(function() {                                                          // 280
              return Spacebars.call(view.lookup("showRowCount"));                                                    // 281
            }, function() {                                                                                          // 282
              return [ "\n                  ", HTML.SPAN(Blaze.View("lookup:i18n", function() {                      // 283
                return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.of");                                  // 284
              })), "\n                  ", HTML.SPAN({                                                               // 285
                "class": "rows-per-page-count"                                                                       // 286
              }, Blaze.View("lookup:getRowCount", function() {                                                       // 287
                return Spacebars.mustache(view.lookup("getRowCount"));                                               // 288
              })), "\n                " ];                                                                           // 289
            }), "\n                ", HTML.SPAN({                                                                    // 290
              "class": "rows-per-page-label"                                                                         // 291
            }, Blaze.View("lookup:i18n", function() {                                                                // 292
              return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.rowsPerPage");                           // 293
            })), "\n              "), "\n            "), "\n          " ];                                           // 294
          }), "\n          ", HTML.DIV({                                                                             // 295
            "class": "form-inline form-group page-number"                                                            // 296
          }, "\n            ", Blaze.If(function() {                                                                 // 297
            return Spacebars.call(view.lookup("isntFirstPage"));                                                     // 298
          }, function() {                                                                                            // 299
            return [ "\n              ", Blaze.If(function() {                                                       // 300
              return Spacebars.call(view.lookup("useFontAwesome"));                                                  // 301
            }, function() {                                                                                          // 302
              return [ "\n                ", HTML.I({                                                                // 303
                "class": "previous-page fa fa-caret-left"                                                            // 304
              }), "\n              " ];                                                                              // 305
            }, function() {                                                                                          // 306
              return [ "\n                ", HTML.LABEL({                                                            // 307
                "class": "previous-page"                                                                             // 308
              }, HTML.CharRef({                                                                                      // 309
                html: "&lt;",                                                                                        // 310
                str: "<"                                                                                             // 311
              })), "\n              " ];                                                                             // 312
            }), "\n            " ];                                                                                  // 313
          }), "\n            ", HTML.LABEL("\n              ", HTML.SPAN(Blaze.View("lookup:i18n", function() {      // 314
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.page");                                    // 315
          })), "\n              ", HTML.INPUT({                                                                      // 316
            "class": "form-control",                                                                                 // 317
            type: "text",                                                                                            // 318
            value: function() {                                                                                      // 319
              return Spacebars.mustache(view.lookup("getCurrentPage"));                                              // 320
            }                                                                                                        // 321
          }), "\n              ", HTML.SPAN(Blaze.View("lookup:i18n", function() {                                   // 322
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.of");                                      // 323
          })), "\n              ", HTML.SPAN({                                                                       // 324
            "class": "page-number-count"                                                                             // 325
          }, Blaze.View("lookup:getPageCount", function() {                                                          // 326
            return Spacebars.mustache(view.lookup("getPageCount"));                                                  // 327
          })), "\n            "), "\n            ", Blaze.If(function() {                                            // 328
            return Spacebars.call(view.lookup("isntLastPage"));                                                      // 329
          }, function() {                                                                                            // 330
            return [ "\n              ", Blaze.If(function() {                                                       // 331
              return Spacebars.call(view.lookup("useFontAwesome"));                                                  // 332
            }, function() {                                                                                          // 333
              return [ "\n                ", HTML.I({                                                                // 334
                "class": "next-page fa fa-caret-right"                                                               // 335
              }), "\n              " ];                                                                              // 336
            }, function() {                                                                                          // 337
              return [ "\n                ", HTML.LABEL({                                                            // 338
                "class": "next-page"                                                                                 // 339
              }, HTML.CharRef({                                                                                      // 340
                html: "&gt;",                                                                                        // 341
                str: ">"                                                                                             // 342
              })), "\n              " ];                                                                             // 343
            }), "\n            " ];                                                                                  // 344
          }), "\n          "), "\n        "), "\n      " ];                                                          // 345
        }), "\n    " ];                                                                                              // 346
      }, function() {                                                                                                // 347
        return [ "\n      ", Spacebars.include(view.lookupTemplate("noDataTmpl")), "\n    " ];                       // 348
      }), "\n  " ];                                                                                                  // 349
    }), "\n  " ];                                                                                                    // 350
  });                                                                                                                // 351
}));                                                                                                                 // 352
                                                                                                                     // 353
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle_reactive-table/lib/template.filter.js                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("reactiveTableFilter");                                                                         // 2
Template["reactiveTableFilter"] = new Template("Template.reactiveTableFilter", (function() {                         // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    id: function() {                                                                                                 // 6
      return Spacebars.mustache(view.lookup("id"));                                                                  // 7
    },                                                                                                               // 8
    "class": function() {                                                                                            // 9
      return Spacebars.mustache(view.lookup("class"));                                                               // 10
    }                                                                                                                // 11
  }, "\n    ", HTML.SPAN({                                                                                           // 12
    "class": "input-group-addon"                                                                                     // 13
  }, "\n      ", Blaze.If(function() {                                                                               // 14
    return Spacebars.call(view.lookup("useFontAwesome"));                                                            // 15
  }, function() {                                                                                                    // 16
    return [ "\n        ", HTML.I({                                                                                  // 17
      "class": "fa fa-filter"                                                                                        // 18
    }), "\n      " ];                                                                                                // 19
  }, function() {                                                                                                    // 20
    return [ "\n        ", Blaze.If(function() {                                                                     // 21
      return Spacebars.call(view.lookup("label"));                                                                   // 22
    }, function() {                                                                                                  // 23
      return [ "\n          ", HTML.SPAN(Blaze.View("lookup:label", function() {                                     // 24
        return Spacebars.mustache(view.lookup("label"));                                                             // 25
      })), "\n        " ];                                                                                           // 26
    }, function() {                                                                                                  // 27
      return [ "\n          ", Blaze.View("lookup:i18n", function() {                                                // 28
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                                      // 29
      }), "\n        " ];                                                                                            // 30
    }), "\n      " ];                                                                                                // 31
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                     // 32
    return Spacebars.call(view.lookup("useFontAwesome"));                                                            // 33
  }, function() {                                                                                                    // 34
    return [ "\n      ", Blaze.If(function() {                                                                       // 35
      return Spacebars.call(view.lookup("label"));                                                                   // 36
    }, function() {                                                                                                  // 37
      return [ "\n        ", HTML.INPUT({                                                                            // 38
        "class": "reactive-table-input form-control",                                                                // 39
        type: "text",                                                                                                // 40
        value: function() {                                                                                          // 41
          return Spacebars.mustache(view.lookup("filter"));                                                          // 42
        },                                                                                                           // 43
        placeholder: function() {                                                                                    // 44
          return Spacebars.mustache(view.lookup("label"));                                                           // 45
        }                                                                                                            // 46
      }), "\n      " ];                                                                                              // 47
    }, function() {                                                                                                  // 48
      return [ "\n        ", HTML.INPUT({                                                                            // 49
        "class": "reactive-table-input form-control",                                                                // 50
        type: "text",                                                                                                // 51
        value: function() {                                                                                          // 52
          return Spacebars.mustache(view.lookup("filter"));                                                          // 53
        },                                                                                                           // 54
        placeholder: function() {                                                                                    // 55
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                                    // 56
        }                                                                                                            // 57
      }), "\n      " ];                                                                                              // 58
    }), "\n    " ];                                                                                                  // 59
  }, function() {                                                                                                    // 60
    return [ "\n      ", HTML.INPUT({                                                                                // 61
      "class": "reactive-table-input form-control",                                                                  // 62
      type: "text",                                                                                                  // 63
      value: function() {                                                                                            // 64
        return Spacebars.mustache(view.lookup("filter"));                                                            // 65
      }                                                                                                              // 66
    }), "\n    " ];                                                                                                  // 67
  }), "\n  ");                                                                                                       // 68
}));                                                                                                                 // 69
                                                                                                                     // 70
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle_reactive-table/lib/reactive_table_i18n.js                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
i18n.map('en', {                                                                                                     // 1
    reactiveTable: {                                                                                                 // 2
        filter: 'Filter',                                                                                            // 3
        columns: 'Columns',                                                                                          // 4
        show: 'Show',                                                                                                // 5
        rowsPerPage: 'rows per page',                                                                                // 6
        page: 'Page',                                                                                                // 7
        of: 'of'                                                                                                     // 8
    }                                                                                                                // 9
});                                                                                                                  // 10
                                                                                                                     // 11
i18n.map('fr', {                                                                                                     // 12
    reactiveTable: {                                                                                                 // 13
        filter: 'Filtre',                                                                                            // 14
        columns: 'Colonnes',                                                                                         // 15
        show: 'Voir',                                                                                                // 16
        rowsPerPage: 'lignes par page',                                                                              // 17
        page: 'page',                                                                                                // 18
        of: 'sur'                                                                                                    // 19
    }                                                                                                                // 20
});                                                                                                                  // 21
                                                                                                                     // 22
i18n.map('ru', {                                                                                                     // 23
    reactiveTable: {                                                                                                 // 24
        filter: 'Фильтр',                                                                                            // 25
        columns: 'Колонка',                                                                                          // 26
        show: 'Показать',                                                                                            // 27
        rowsPerPage: 'линий на странице',                                                                            // 28
        page: 'Страница',                                                                                            // 29
        of: 'из'                                                                                                     // 30
    }                                                                                                                // 31
});                                                                                                                  // 32
                                                                                                                     // 33
i18n.map('es', {                                                                                                     // 34
    reactiveTable: {                                                                                                 // 35
        filter: 'Filtro',                                                                                            // 36
        columns: 'Columnas',                                                                                         // 37
        show:   'Mostrar',                                                                                           // 38
        rowsPerPage: 'filas por página',                                                                             // 39
        page: 'Página',                                                                                              // 40
        of: 'de'                                                                                                     // 41
    }                                                                                                                // 42
});                                                                                                                  // 43
                                                                                                                     // 44
i18n.map('nl', {                                                                                                     // 45
    reactiveTable: {                                                                                                 // 46
        filter: 'Filter',                                                                                            // 47
        show:   'Toon',                                                                                              // 48
        rowsPerPage: 'regels per pagina',                                                                            // 49
        page: 'Pagina',                                                                                              // 50
        of: 'van'                                                                                                    // 51
    }                                                                                                                // 52
});                                                                                                                  // 53
                                                                                                                     // 54
i18n.map('pt-br', {                                                                                                  // 55
    reactiveTable: {                                                                                                 // 56
        filter: 'Filtro',                                                                                            // 57
        show: 'Mostrar',                                                                                             // 58
        rowsPerPage: 'linhas por página',                                                                            // 59
        page: 'Página',                                                                                              // 60
        of: 'de'                                                                                                     // 61
    }                                                                                                                // 62
});                                                                                                                  // 63
                                                                                                                     // 64
i18n.map('it', {                                                                                                     // 65
    reactiveTable: {                                                                                                 // 66
        filter: 'Filtra',                                                                                            // 67
        show: 'Mostra',                                                                                              // 68
        rowsPerPage: 'righe per pagina',                                                                             // 69
        page: 'Pagina',                                                                                              // 70
        of: 'di'                                                                                                     // 71
    }                                                                                                                // 72
});                                                                                                                  // 73
                                                                                                                     // 74
i18n.map('sv', {                                                                                                     // 75
    reactiveTable: {                                                                                                 // 76
        filter: 'Filter',                                                                                            // 77
        show: 'Visa',                                                                                                // 78
        rowsPerPage: 'rader per sida',                                                                               // 79
        page: 'Sida',                                                                                                // 80
        of: 'av'                                                                                                     // 81
    }                                                                                                                // 82
});                                                                                                                  // 83
                                                                                                                     // 84
i18n.map('ua', {                                                                                                     // 85
    reactiveTable: {                                                                                                 // 86
        filter: 'Фільтр',                                                                                            // 87
        show: 'Показати',                                                                                            // 88
        rowsPerPage: 'рядків на сторінці',                                                                           // 89
        page: 'Сторінка',                                                                                            // 90
        of: 'з'                                                                                                      // 91
    }                                                                                                                // 92
});                                                                                                                  // 93
                                                                                                                     // 94
i18n.map('tr', {                                                                                                     // 95
    reactiveTable: {                                                                                                 // 96
        filter: 'Süz',                                                                                               // 97
        columns: 'Sütunlar',                                                                                         // 98
        show: 'Sayfa başına',                                                                                        // 99
        rowsPerPage: 'satır göster',                                                                                 // 100
        page: 'Sayfa',                                                                                               // 101
        of: ' / '                                                                                                    // 102
    }                                                                                                                // 103
});                                                                                                                  // 104
                                                                                                                     // 105
i18n.map('sk', {                                                                                                     // 106
    reactiveTable: {                                                                                                 // 107
        filter: 'Filter',                                                                                            // 108
        show: 'Zobraz',                                                                                              // 109
        rowsPerPage: 'riadkov na stranu',                                                                            // 110
        page: 'Strana',                                                                                              // 111
        of: 'z'                                                                                                      // 112
    }                                                                                                                // 113
});                                                                                                                  // 114
                                                                                                                     // 115
i18n.map('cs', {                                                                                                     // 116
    reactiveTable: {                                                                                                 // 117
        filter: 'Filter',                                                                                            // 118
        show: 'Zobraz',                                                                                              // 119
        rowsPerPage: 'řádků na stranu',                                                                              // 120
        page: 'Strana',                                                                                              // 121
        of: 'z'                                                                                                      // 122
    }                                                                                                                // 123
});                                                                                                                  // 124
                                                                                                                     // 125
i18n.map('he', {                                                                                                     // 126
    reactiveTable: {                                                                                                 // 127
        filter: 'פילטר',                                                                                             // 128
        show: 'הצג',                                                                                                 // 129
        rowsPerPage: 'שורות לעמוד',                                                                                  // 130
        page: 'עמוד',                                                                                                // 131
        of: 'מתוך'                                                                                                   // 132
    }                                                                                                                // 133
});                                                                                                                  // 134
                                                                                                                     // 135
i18n.map('da', {                                                                                                     // 136
    reactiveTable: {                                                                                                 // 137
        filter: 'Filter',                                                                                            // 138
        columns: 'Kolonner',                                                                                         // 139
        show: 'Vis',                                                                                                 // 140
        rowsPerPage: 'rækker per side',                                                                              // 141
        page: 'Side',                                                                                                // 142
        of: 'af'                                                                                                     // 143
    }                                                                                                                // 144
});                                                                                                                  // 145
                                                                                                                     // 146
i18n.map('de', {                                                                                                     // 147
    reactiveTable: {                                                                                                 // 148
        filter: 'Filter',                                                                                            // 149
        columns: 'Spalten',                                                                                          // 150
        show: 'Zeige',                                                                                               // 151
        rowsPerPage: 'Zeilen pro Seite',                                                                             // 152
        page: 'Seite',                                                                                               // 153
        of: 'von'                                                                                                    // 154
    }                                                                                                                // 155
});                                                                                                                  // 156
                                                                                                                     // 157
i18n.map('fi', {                                                                                                     // 158
    reactiveTable: {                                                                                                 // 159
        filter: 'Suodata',                                                                                           // 160
        show: 'Näytä',                                                                                               // 161
        rowsPerPage: 'riviä sivulla',                                                                                // 162
        page: 'Sivu',                                                                                                // 163
        of: ' / '                                                                                                    // 164
    }                                                                                                                // 165
});                                                                                                                  // 166
                                                                                                                     // 167
i18n.map('no', {                                                                                                     // 168
    reactiveTable: {                                                                                                 // 169
        filter: 'Filter',                                                                                            // 170
        show: 'Vis',                                                                                                 // 171
        rowsPerPage: 'rader per side',                                                                               // 172
        page: 'Side',                                                                                                // 173
        of: 'av'                                                                                                     // 174
    }                                                                                                                // 175
});                                                                                                                  // 176
                                                                                                                     // 177
i18n.map('pl', {                                                                                                     // 178
    reactiveTable: {                                                                                                 // 179
        filter: 'Szukaj',                                                                                            // 180
        columns: 'Kolumny',                                                                                          // 181
        show: 'Pokaż',                                                                                               // 182
        rowsPerPage: 'pozycji na stronie',                                                                           // 183
        page: 'Strona',                                                                                              // 184
        of: 'z'                                                                                                      // 185
    }                                                                                                                // 186
});                                                                                                                  // 187
                                                                                                                     // 188
i18n.map('hr', {                                                                                                     // 189
    reactiveTable: {                                                                                                 // 190
        filter: 'Filter',                                                                                            // 191
        columns: 'Stupci',                                                                                           // 192
        show: 'Prikaži',                                                                                             // 193
        rowsPerPage: 'redova po stranici',                                                                           // 194
        page: 'Stranica',                                                                                            // 195
        of: 'od'                                                                                                     // 196
    }                                                                                                                // 197
});                                                                                                                  // 198
                                                                                                                     // 199
i18n.map('is', {                                                                                                     // 200
    reactiveTable: {                                                                                                 // 201
        filter: 'Sía',                                                                                               // 202
        columns: 'Dálkar',                                                                                           // 203
        show: 'Sýna',                                                                                                // 204
        rowsPerPage: 'raðir á síðu',                                                                                 // 205
        page: 'Síða',                                                                                                // 206
        of: 'af'                                                                                                     // 207
    }                                                                                                                // 208
});                                                                                                                  // 209
                                                                                                                     // 210
i18n.map('zh', {                                                                                                     // 211
    reactiveTable: {                                                                                                 // 212
        filter: '过滤',                                                                                                // 213
        columns: '列',                                                                                                // 214
        show: '显示',                                                                                                  // 215
        rowsPerPage: '每页行数',                                                                                         // 216
        page: '页数',                                                                                                  // 217
        of: '之'                                                                                                      // 218
    }                                                                                                                // 219
});                                                                                                                  // 220
                                                                                                                     // 221
i18n.map('fa', {                                                                                                     // 222
    reactiveTable: {                                                                                                 // 223
        filter: 'تزکیه',                                                                                             // 224
        columns: 'ستون',                                                                                             // 225
        show: 'ارائه',                                                                                               // 226
        rowsPerPage: 'ردیف در هر صفحه',                                                                              // 227
        page: 'صفحه',                                                                                                // 228
        of: 'از'                                                                                                     // 229
    }                                                                                                                // 230
});                                                                                                                  // 231
                                                                                                                     // 232
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle_reactive-table/lib/reactive_table.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var ReactiveTableCounts = new Mongo.Collection("reactive-table-counts");                                             // 1
                                                                                                                     // 2
get = function(obj, field) {                                                                                         // 3
  var keys = field.split('.');                                                                                       // 4
  var value = obj;                                                                                                   // 5
                                                                                                                     // 6
  _.each(keys, function (key) {                                                                                      // 7
      if (_.isObject(value) && _.isFunction(value[key])) {                                                           // 8
          value = value[key]();                                                                                      // 9
      } else if (_.isObject(value) && !_.isUndefined(value[key])) {                                                  // 10
          value = value[key];                                                                                        // 11
      } else {                                                                                                       // 12
          value = null;                                                                                              // 13
      }                                                                                                              // 14
  });                                                                                                                // 15
                                                                                                                     // 16
  return value;                                                                                                      // 17
};                                                                                                                   // 18
                                                                                                                     // 19
var updateHandle = function (set_context) {                                                                          // 20
    var context = set_context;                                                                                       // 21
    if (context.server) {                                                                                            // 22
        var newHandle;                                                                                               // 23
                                                                                                                     // 24
        // Could use the table id, but this way we can wait to change the                                            // 25
        // page until the new data is ready, so it doesn't move around                                               // 26
        // while rows are added and removed                                                                          // 27
        var publicationId = _.uniqueId();                                                                            // 28
        var newPublishedRows = new Mongo.Collection('reactive-table-rows-' + publicationId);                         // 29
        context.nextPublicationId.set(publicationId);                                                                // 30
                                                                                                                     // 31
        var rowsPerPage = context.rowsPerPage.get();                                                                 // 32
        var currentPage = context.currentPage.get();                                                                 // 33
        var currentIndex = currentPage * rowsPerPage;                                                                // 34
                                                                                                                     // 35
        var options = {                                                                                              // 36
            skip: currentIndex,                                                                                      // 37
            limit: rowsPerPage,                                                                                      // 38
            sort: getSortQuery(context.fields, context.multiColumnSort)                                              // 39
        };                                                                                                           // 40
                                                                                                                     // 41
        var filters = context.filters.get();                                                                         // 42
                                                                                                                     // 43
        var onReady = function () {                                                                                  // 44
            if (publicationId === context.nextPublicationId.get()) {                                                 // 45
                context.ready.set(true);                                                                             // 46
                context.publicationId.set(publicationId);                                                            // 47
                context.publishedRows = newPublishedRows;                                                            // 48
                var oldHandle = context.handle;                                                                      // 49
                context.handle = newHandle;                                                                          // 50
                                                                                                                     // 51
                if (oldHandle) {                                                                                     // 52
                    oldHandle.stop();                                                                                // 53
                }                                                                                                    // 54
            } else {                                                                                                 // 55
                // another handle was created after this one                                                         // 56
                newHandle.stop();                                                                                    // 57
            }                                                                                                        // 58
        };                                                                                                           // 59
        var onError = function (error) {                                                                             // 60
            console.log("ReactiveTable subscription error: " + error);                                               // 61
        };                                                                                                           // 62
        newHandle = Meteor.subscribe(                                                                                // 63
            "reactive-table-" + context.collection,                                                                  // 64
            publicationId,                                                                                           // 65
            getFilterStrings(filters),                                                                               // 66
            getFilterFields(filters, context.fields),                                                                // 67
            options,                                                                                                 // 68
            context.rowsPerPage.get(),                                                                               // 69
            {onReady: onReady, onError: onError}                                                                     // 70
        );                                                                                                           // 71
    }                                                                                                                // 72
};                                                                                                                   // 73
                                                                                                                     // 74
                                                                                                                     // 75
var getDefaultFalseSetting = function (key, templateData) {                                                          // 76
    if (!_.isUndefined(templateData[key]) &&                                                                         // 77
        templateData[key]) {                                                                                         // 78
        return true;                                                                                                 // 79
    }                                                                                                                // 80
    if (!_.isUndefined(templateData.settings) &&                                                                     // 81
        !_.isUndefined(templateData.settings[key]) &&                                                                // 82
        templateData.settings[key]) {                                                                                // 83
        return true;                                                                                                 // 84
    }                                                                                                                // 85
    return false;                                                                                                    // 86
};                                                                                                                   // 87
                                                                                                                     // 88
var getDefaultTrueSetting = function (key, templateData) {                                                           // 89
    if (!_.isUndefined(templateData[key]) &&                                                                         // 90
        !templateData[key]) {                                                                                        // 91
        return false;                                                                                                // 92
    }                                                                                                                // 93
    if (!_.isUndefined(templateData.settings) &&                                                                     // 94
        !_.isUndefined(templateData.settings[key]) &&                                                                // 95
        !templateData.settings[key]) {                                                                               // 96
        return false;                                                                                                // 97
    }                                                                                                                // 98
    return true;                                                                                                     // 99
};                                                                                                                   // 100
                                                                                                                     // 101
                                                                                                                     // 102
                                                                                                                     // 103
var setup = function () {                                                                                            // 104
    var context = {};                                                                                                // 105
    var oldContext = this.context || {};                                                                             // 106
    context.templateData = this.data;                                                                                // 107
    this.data.settings = this.data.settings || {};                                                                   // 108
    var collection = this.data.collection || this.data.settings.collection || this.data;                             // 109
                                                                                                                     // 110
    if (!(collection instanceof Mongo.Collection)) {                                                                 // 111
        if (_.isArray(collection)) {                                                                                 // 112
            // collection is an array                                                                                // 113
            // create a new collection from the data                                                                 // 114
            var data = collection;                                                                                   // 115
            collection = new Mongo.Collection(null);                                                                 // 116
            _.each(data, function (doc) {                                                                            // 117
                collection.insert(doc);                                                                              // 118
            });                                                                                                      // 119
        } else if (_.isFunction(collection.fetch)) {                                                                 // 120
            // collection is a cursor                                                                                // 121
            // create a new collection that will reactively update                                                   // 122
            var cursor = collection;                                                                                 // 123
            collection = new Mongo.Collection(null);                                                                 // 124
                                                                                                                     // 125
            // copy over transforms from collection-helper package                                                   // 126
            collection._transform = cursor._transform;                                                               // 127
            collection._name = cursor.collection._name;                                                              // 128
                                                                                                                     // 129
            var addedCallback = function (doc) {                                                                     // 130
                collection.insert(doc);                                                                              // 131
            };                                                                                                       // 132
            var changedCallback = function (doc, oldDoc) {                                                           // 133
                collection.update(oldDoc._id, doc);                                                                  // 134
            };                                                                                                       // 135
            var removedCallback = function (oldDoc) {                                                                // 136
                collection.remove(oldDoc._id);                                                                       // 137
            };                                                                                                       // 138
            cursor.observe({added: addedCallback, changed: changedCallback, removed: removedCallback});              // 139
        } else if (_.isString(collection)) {                                                                         // 140
            // server side publication                                                                               // 141
            context.server = true;                                                                                   // 142
            context.publicationId = new ReactiveVar();                                                               // 143
            context.nextPublicationId = new ReactiveVar();                                                           // 144
            context.publishedRows = new Mongo.Collection(null);                                                      // 145
        } else {                                                                                                     // 146
            console.error("reactiveTable error: argument is not an instance of Mongo.Collection, a cursor, or an array");
            collection = new Mongo.Collection(null);                                                                 // 148
        }                                                                                                            // 149
    }                                                                                                                // 150
    context.collection = collection;                                                                                 // 151
                                                                                                                     // 152
    context.multiColumnSort = getDefaultTrueSetting('multiColumnSort', this.data);                                   // 153
                                                                                                                     // 154
    var fields = this.data.fields || this.data.settings.fields || {};                                                // 155
    if (_.keys(fields).length < 1 ||                                                                                 // 156
        (_.keys(fields).length === 1 &&                                                                              // 157
         _.keys(fields)[0] === 'hash')) {                                                                            // 158
                                                                                                                     // 159
        if (context.server) {                                                                                        // 160
            console.error("reactiveTable error: fields option is required with server-side publications");           // 161
        } else {                                                                                                     // 162
            fields = _.without(_.keys(collection.findOne() || {}), '_id');                                           // 163
        }                                                                                                            // 164
    }                                                                                                                // 165
                                                                                                                     // 166
    var fieldIdsArePresentAndUnique = function (fields) {                                                            // 167
        var uniqueFieldIds = _.chain(fields)                                                                         // 168
            .filter(function (field) {                                                                               // 169
                return !_.isUndefined(field.fieldId)                                                                 // 170
            })                                                                                                       // 171
            .map(function (field) {                                                                                  // 172
                return field.fieldId;                                                                                // 173
            })                                                                                                       // 174
            .uniq()                                                                                                  // 175
            .value();                                                                                                // 176
        return uniqueFieldIds.length === fields.length;                                                              // 177
    };                                                                                                               // 178
                                                                                                                     // 179
    // If at least one field specifies a fieldId, all fields must specify a                                          // 180
    // fieldId with a unique value                                                                                   // 181
    if (_.find(fields, function (field) {                                                                            // 182
        return !_.isUndefined(field.fieldId)                                                                         // 183
        }) && !fieldIdsArePresentAndUnique(fields)) {                                                                // 184
        console.error("reactiveTable error: all fields must have a unique-valued fieldId if at least one has a fieldId attribute");
        fields = [];                                                                                                 // 186
    }                                                                                                                // 187
                                                                                                                     // 188
    var normalizeField = function (field, i) {                                                                       // 189
        if (typeof field === 'string') {                                                                             // 190
            field = {key: field, label: field};                                                                      // 191
        }                                                                                                            // 192
        if (!_.has(field, 'fieldId')) {                                                                              // 193
            // Default fieldId to index in fields array if not present                                               // 194
            field.fieldId = i.toString();                                                                            // 195
        }                                                                                                            // 196
        if (!_.has(field, 'key')) {                                                                                  // 197
            field.key = '';                                                                                          // 198
        }                                                                                                            // 199
        oldField = _.find(oldContext.fields, function (oldField) {                                                   // 200
            return oldField.fieldId === field.fieldId;                                                               // 201
        });                                                                                                          // 202
        normalizeSort(field, oldField);                                                                              // 203
        return field;                                                                                                // 204
    };                                                                                                               // 205
                                                                                                                     // 206
    fields = _.map(fields, normalizeField);                                                                          // 207
                                                                                                                     // 208
    context.fields = fields;                                                                                         // 209
                                                                                                                     // 210
    var visibleFields = [];                                                                                          // 211
    _.each(fields, function (field, i) {                                                                             // 212
        visibleFields.push({fieldId:field.fieldId, isVisible: getDefaultFieldVisibility(field)});                    // 213
    });                                                                                                              // 214
    context.visibleFields = (!_.isUndefined(oldContext.visibleFields) && !_.isEmpty(oldContext.visibleFields)) ? oldContext.visibleFields : new ReactiveVar(visibleFields);
                                                                                                                     // 216
                                                                                                                     // 217
    var rowClass = this.data.rowClass || this.data.settings.rowClass || function() {return '';};                     // 218
    if (typeof rowClass === 'string') {                                                                              // 219
        var tmp = rowClass;                                                                                          // 220
        rowClass = function(obj) { return tmp; };                                                                    // 221
    }                                                                                                                // 222
    context.rowClass = rowClass;                                                                                     // 223
                                                                                                                     // 224
    context.class = this.data.class || this.data.settings.class || 'table table-striped table-hover col-sm-12';      // 225
    context.id = this.data.id || this.data.settings.id || _.uniqueId('reactive-table-');                             // 226
                                                                                                                     // 227
    context.showNavigation = this.data.showNavigation || this.data.settings.showNavigation || 'always';              // 228
    context.showNavigationRowsPerPage = getDefaultTrueSetting('showNavigationRowsPerPage', this.data);               // 229
    context.showRowCount = getDefaultFalseSetting('showRowCount', this.data)                                         // 230
                                                                                                                     // 231
    var rowsPerPage;                                                                                                 // 232
    if (!_.isUndefined(oldContext.rowsPerPage)) {                                                                    // 233
        rowsPerPage = oldContext.rowsPerPage;                                                                        // 234
    } else if (this.data.rowsPerPage && this.data.rowsPerPage instanceof ReactiveVar) {                              // 235
        rowsPerPage = this.data.rowsPerPage;                                                                         // 236
    } else if (this.data.settings.rowsPerPage && this.data.settings.rowsPerPage instanceof ReactiveVar) {            // 237
        rowsPerPage = this.data.settings.rowsPerPage;                                                                // 238
    } else {                                                                                                         // 239
        rowsPerPage = new ReactiveVar(this.data.rowsPerPage || this.data.settings.rowsPerPage || 10);                // 240
    }                                                                                                                // 241
    context.rowsPerPage = rowsPerPage;                                                                               // 242
                                                                                                                     // 243
    var currentPage;                                                                                                 // 244
    if (!_.isUndefined(oldContext.currentPage)) {                                                                    // 245
        currentPage = oldContext.currentPage;                                                                        // 246
    } else if (this.data.currentPage && this.data.currentPage instanceof ReactiveVar) {                              // 247
        currentPage = this.data.currentPage;                                                                         // 248
    } else if (this.data.settings.currentPage && this.data.settings.currentPage instanceof ReactiveVar) {            // 249
        currentPage = this.data.settings.currentPage;                                                                // 250
    } else {                                                                                                         // 251
        currentPage = new ReactiveVar(0);                                                                            // 252
    }                                                                                                                // 253
    context.currentPage = currentPage;                                                                               // 254
                                                                                                                     // 255
    var filters = this.data.filters || this.data.settings.filters || [];                                             // 256
    if (_.isEmpty(filters)) {                                                                                        // 257
      context.showFilter = getDefaultTrueSetting('showFilter', this.data);                                           // 258
    } else {                                                                                                         // 259
      context.showFilter = getDefaultFalseSetting('showFilter', this.data);                                          // 260
    }                                                                                                                // 261
    if (context.showFilter) {                                                                                        // 262
      filters.push(context.id + '-filter');                                                                          // 263
    }                                                                                                                // 264
    context.filters = new ReactiveVar(filters);                                                                      // 265
                                                                                                                     // 266
    dependOnFilters(context.filters.get(), function () {                                                             // 267
      if (context.reactiveTableSetup) {                                                                              // 268
        context.currentPage.set(0);                                                                                  // 269
        updateHandle(context);                                                                                       // 270
      }                                                                                                              // 271
    });                                                                                                              // 272
                                                                                                                     // 273
    context.showColumnToggles = getDefaultFalseSetting('showColumnToggles', this.data);                              // 274
                                                                                                                     // 275
    if (_.isUndefined(this.data.useFontAwesome)) {                                                                   // 276
        if (!_.isUndefined(this.data.settings.useFontAwesome)) {                                                     // 277
            context.useFontAwesome = this.data.settings.useFontAwesome;                                              // 278
        } else if (!_.isUndefined(Package['fortawesome:fontawesome'])) {                                             // 279
            context.useFontAwesome = true;                                                                           // 280
        } else {                                                                                                     // 281
            context.useFontAwesome = false;                                                                          // 282
        }                                                                                                            // 283
    } else {                                                                                                         // 284
        context.useFontAwesome = this.data.useFontAwesome;                                                           // 285
    }                                                                                                                // 286
    context.noDataTmpl = this.data.noDataTmpl || this.data.settings.noDataTmpl;                                      // 287
    context.enableRegex = getDefaultFalseSetting('enableRegex', this.data);                                          // 288
                                                                                                                     // 289
    context.ready = new ReactiveVar(true);                                                                           // 290
                                                                                                                     // 291
    if (context.server) {                                                                                            // 292
        context.ready.set(false);                                                                                    // 293
        updateHandle(context);                                                                                       // 294
    }                                                                                                                // 295
                                                                                                                     // 296
    context.reactiveTableSetup = true;                                                                               // 297
                                                                                                                     // 298
    this.context = context;                                                                                          // 299
};                                                                                                                   // 300
                                                                                                                     // 301
var getDefaultFieldVisibility = function (field) {                                                                   // 302
    if (field.isVisible && field.isVisible instanceof ReactiveVar) {                                                 // 303
        return field.isVisible;                                                                                      // 304
    }                                                                                                                // 305
    return new ReactiveVar(!field.hidden || (_.isFunction(field.hidden) && !field.hidden()));                        // 306
}                                                                                                                    // 307
                                                                                                                     // 308
var getRowCount = function () {                                                                                      // 309
    if (this.server) {                                                                                               // 310
        var count = ReactiveTableCounts.findOne(this.publicationId.get());                                           // 311
        return (count ? count.count : 0);                                                                            // 312
    } else {                                                                                                         // 313
        var filterQuery = getFilterQuery(getFilterStrings(this.filters.get()), getFilterFields(this.filters.get(), this.fields), {enableRegex: this.enableRegex});
        return this.collection.find(filterQuery).count();                                                            // 315
    }                                                                                                                // 316
};                                                                                                                   // 317
                                                                                                                     // 318
var getPageCount = function () {                                                                                     // 319
    var count = getRowCount.call(this);                                                                              // 320
    var rowsPerPage = this.rowsPerPage.get();                                                                        // 321
    return Math.ceil(count / rowsPerPage);                                                                           // 322
};                                                                                                                   // 323
                                                                                                                     // 324
var getUpdateHandleForTemplate = function (template_instance) {                                                      // 325
    if (!template_instance.updateHandle) {                                                                           // 326
        template_instance.updateHandle = _.debounce(updateHandle, 200);                                              // 327
    }                                                                                                                // 328
    return template_instance.updateHandle;                                                                           // 329
};                                                                                                                   // 330
                                                                                                                     // 331
Template.reactiveTable.helpers({                                                                                     // 332
    'context': function () {                                                                                         // 333
        if (!Template.instance().context ||                                                                          // 334
            !_.isEqual(this, Template.instance().context.templateData)) {                                            // 335
            setup.call(Template.instance());                                                                         // 336
        }                                                                                                            // 337
        return Template.instance().context;                                                                          // 338
    },                                                                                                               // 339
                                                                                                                     // 340
    'ready' : function () {                                                                                          // 341
        return this.ready.get();                                                                                     // 342
    },                                                                                                               // 343
                                                                                                                     // 344
    'getFilterId': function () {                                                                                     // 345
        return this.id + '-filter';                                                                                  // 346
    },                                                                                                               // 347
                                                                                                                     // 348
    'getField': function (object) {                                                                                  // 349
        var fn = this.fn || function (value) { return value; };                                                      // 350
        var key = this.key;                                                                                          // 351
        var value = get(object, key);                                                                                // 352
        return fn(value, object);                                                                                    // 353
    },                                                                                                               // 354
                                                                                                                     // 355
    'getFieldIndex': function () {                                                                                   // 356
        return _.indexOf(Template.parentData(1).fields, this);                                                       // 357
    },                                                                                                               // 358
                                                                                                                     // 359
    'getFieldFieldId': function () {                                                                                 // 360
        return this.fieldId;                                                                                         // 361
    },                                                                                                               // 362
                                                                                                                     // 363
    'getKey': function () {                                                                                          // 364
        return this.key;                                                                                             // 365
    },                                                                                                               // 366
                                                                                                                     // 367
    'getHeaderClass': function () {                                                                                  // 368
        if (_.isUndefined(this.headerClass)) {                                                                       // 369
            return this.key;                                                                                         // 370
        }                                                                                                            // 371
        var css;                                                                                                     // 372
        if (_.isFunction(this.headerClass)) {                                                                        // 373
            css = this.headerClass();                                                                                // 374
        } else {                                                                                                     // 375
            css = this.headerClass;                                                                                  // 376
        }                                                                                                            // 377
        return css;                                                                                                  // 378
    },                                                                                                               // 379
                                                                                                                     // 380
    'getCellClass': function (object) {                                                                              // 381
        if (_.isUndefined(this.cellClass)) {                                                                         // 382
            return this.key;                                                                                         // 383
        }                                                                                                            // 384
        var css;                                                                                                     // 385
        if (_.isFunction(this.cellClass)) {                                                                          // 386
            var value = get(object, this.key);                                                                       // 387
            css = this.cellClass(value, object);                                                                     // 388
        } else {                                                                                                     // 389
            css = this.cellClass;                                                                                    // 390
        }                                                                                                            // 391
        return css;                                                                                                  // 392
    },                                                                                                               // 393
                                                                                                                     // 394
    'labelIsTemplate': function () {                                                                                 // 395
        return this.label && _.isObject(this.label) && this.label instanceof Blaze.Template;                         // 396
    },                                                                                                               // 397
                                                                                                                     // 398
    'getLabel': function () {                                                                                        // 399
        return _.isString(this.label) ? this.label : this.label();                                                   // 400
    },                                                                                                               // 401
                                                                                                                     // 402
    'isPrimarySortField': function () {                                                                              // 403
        var parentData = Template.parentData(1);                                                                     // 404
        var primarySortField = getPrimarySortField(parentData.fields, parentData.multiColumnSort);                   // 405
        return primarySortField && primarySortField.fieldId === this.fieldId;                                        // 406
    },                                                                                                               // 407
                                                                                                                     // 408
    'isSortable': function () {                                                                                      // 409
        return (this.sortable === undefined) ? true : this.sortable;                                                 // 410
    },                                                                                                               // 411
                                                                                                                     // 412
    'isVisible': function () {                                                                                       // 413
        var self = this; // is a field object                                                                        // 414
        var topLevelData;                                                                                            // 415
        if (Template.parentData(2) && Template.parentData(2).reactiveTableSetup) {                                   // 416
          topLevelData = Template.parentData(2);                                                                     // 417
        } else {                                                                                                     // 418
          topLevelData = Template.parentData(1);                                                                     // 419
        }                                                                                                            // 420
        var visibleFields = topLevelData.visibleFields.get();                                                        // 421
        var fields = topLevelData.fields;                                                                            // 422
                                                                                                                     // 423
        var visibleField = _.findWhere(visibleFields, {fieldId: self.fieldId});                                      // 424
        if (visibleField) {                                                                                          // 425
            return visibleField.isVisible.get();                                                                     // 426
        } else {                                                                                                     // 427
            // Add field to visibleFields list                                                                       // 428
            var _isVisible = getDefaultFieldVisibility(self);                                                        // 429
            visibleFields.push({fieldId:self.fieldId, isVisible:_isVisible});                                        // 430
            topLevelData.visibleFields.set(visibleFields);                                                           // 431
            return _isVisible.get();                                                                                 // 432
        }                                                                                                            // 433
    },                                                                                                               // 434
                                                                                                                     // 435
    'isAscending' : function () {                                                                                    // 436
        var sortDirection = this.sortDirection.get();                                                                // 437
        return (sortDirection === 1);                                                                                // 438
    },                                                                                                               // 439
                                                                                                                     // 440
    'sortedRows': function () {                                                                                      // 441
        if (this.server) {                                                                                           // 442
            return this.publishedRows.find({                                                                         // 443
              "reactive-table-id": this.publicationId.get()                                                          // 444
            }, {                                                                                                     // 445
              sort: {                                                                                                // 446
                "reactive-table-sort": 1                                                                             // 447
              }                                                                                                      // 448
            });                                                                                                      // 449
        } else  {                                                                                                    // 450
            var sortByValue = _.all(getSortedFields(this.fields, this.multiColumnSort), function (field) {           // 451
                return field.sortByValue || !field.fn;                                                               // 452
            });                                                                                                      // 453
            var filterQuery = getFilterQuery(getFilterStrings(this.filters.get()), getFilterFields(this.filters.get(), this.fields), {enableRegex: this.enableRegex});
                                                                                                                     // 455
            var limit = this.rowsPerPage.get();                                                                      // 456
            var currentPage = this.currentPage.get();                                                                // 457
            var skip = currentPage * limit;                                                                          // 458
                                                                                                                     // 459
            if (sortByValue) {                                                                                       // 460
                                                                                                                     // 461
                var sortQuery = getSortQuery(this.fields, this.multiColumnSort);                                     // 462
                return this.collection.find(filterQuery, {                                                           // 463
                    sort: sortQuery,                                                                                 // 464
                    skip: skip,                                                                                      // 465
                    limit: limit                                                                                     // 466
                });                                                                                                  // 467
                                                                                                                     // 468
            } else {                                                                                                 // 469
                                                                                                                     // 470
                var rows = this.collection.find(filterQuery).fetch();                                                // 471
                sortedRows = sortWithFunctions(rows, this.fields, this.multiColumnSort);                             // 472
                return sortedRows.slice(skip, skip + limit);                                                         // 473
                                                                                                                     // 474
            }                                                                                                        // 475
        }                                                                                                            // 476
    },                                                                                                               // 477
                                                                                                                     // 478
    'noData': function () {                                                                                          // 479
        var pageCount = getPageCount.call(this);                                                                     // 480
        return (pageCount === 0) && this.noDataTmpl;                                                                 // 481
    },                                                                                                               // 482
                                                                                                                     // 483
    'getPageCount' : getPageCount,                                                                                   // 484
                                                                                                                     // 485
    'getRowsPerPage' : function () {                                                                                 // 486
        return this.rowsPerPage.get();                                                                               // 487
    },                                                                                                               // 488
                                                                                                                     // 489
    'getCurrentPage' : function () {                                                                                 // 490
        return 1 + this.currentPage.get();                                                                           // 491
    },                                                                                                               // 492
                                                                                                                     // 493
    'isntFirstPage' : function () {                                                                                  // 494
        return this.currentPage.get() > 0;                                                                           // 495
    },                                                                                                               // 496
                                                                                                                     // 497
    'isntLastPage' : function () {                                                                                   // 498
        var currentPage = 1 + this.currentPage.get();                                                                // 499
        var pageCount = getPageCount.call(this);                                                                     // 500
        return currentPage < pageCount;                                                                              // 501
    },                                                                                                               // 502
                                                                                                                     // 503
    'showNavigation' : function () {                                                                                 // 504
        if (this.showNavigation === 'always') return true;                                                           // 505
        if (this.showNavigation === 'never') return false;                                                           // 506
        return getPageCount.call(this) > 1;                                                                          // 507
    },                                                                                                               // 508
    'getRowCount': getRowCount                                                                                       // 509
});                                                                                                                  // 510
                                                                                                                     // 511
Template.reactiveTable.events({                                                                                      // 512
    'click .reactive-table .sortable': function (event) {                                                            // 513
        var template = Template.instance();                                                                          // 514
        var target = $(event.target).is('i') ? $(event.target).parent() : $(event.target);                           // 515
        var sortFieldId = target.attr('fieldid');                                                                    // 516
        changePrimarySort(sortFieldId, template.context.fields, template.multiColumnSort);                           // 517
        getUpdateHandleForTemplate(template)(template.context);                                                      // 518
    },                                                                                                               // 519
                                                                                                                     // 520
    'click .reactive-table-columns-dropdown li': function (event) {                                                  // 521
        var template = Template.instance();                                                                          // 522
        var target = $(event.currentTarget);                                                                         // 523
        var fieldId = target.find('input').attr('data-fieldid');                                                     // 524
        var visibleFields = template.context.visibleFields.get();                                                    // 525
        var visibleField = _.findWhere(visibleFields, {fieldId: fieldId});                                           // 526
        if (visibleField) {                                                                                          // 527
            // Toggle visibility                                                                                     // 528
            visibleField.isVisible.set(!visibleField.isVisible.get());                                               // 529
            template.context.visibleFields.set(visibleFields);                                                       // 530
        }                                                                                                            // 531
    },                                                                                                               // 532
                                                                                                                     // 533
    'change .reactive-table-navigation .rows-per-page input': function (event) {                                     // 534
        var rowsPerPage = Math.max(~~$(event.target).val(), 1);                                                      // 535
        var template = Template.instance();                                                                          // 536
        template.context.rowsPerPage.set(rowsPerPage);                                                               // 537
        $(event.target).val(rowsPerPage);                                                                            // 538
                                                                                                                     // 539
        var currentPage = template.context.currentPage.get() + 1;                                                    // 540
        var pageCount = getPageCount.call(this);                                                                     // 541
        if (currentPage > pageCount) {                                                                               // 542
          template.context.currentPage.set(pageCount - 1);                                                           // 543
        }                                                                                                            // 544
        getUpdateHandleForTemplate(template)(template.context);                                                      // 545
    },                                                                                                               // 546
                                                                                                                     // 547
    'change .reactive-table-navigation .page-number input': function (event) {                                       // 548
        var currentPage = Math.max(~~$(event.target).val(), 1);                                                      // 549
        var pageCount = getPageCount.call(this);                                                                     // 550
        if (currentPage > pageCount) {                                                                               // 551
          currentPage = pageCount;                                                                                   // 552
        }                                                                                                            // 553
        if (currentPage < 0) {                                                                                       // 554
          currentPage = 1;                                                                                           // 555
        }                                                                                                            // 556
        var template = Template.instance();                                                                          // 557
        template.context.currentPage.set(currentPage - 1);                                                           // 558
        $(event.target).val(currentPage);                                                                            // 559
        getUpdateHandleForTemplate(template)(template.context);                                                      // 560
    },                                                                                                               // 561
                                                                                                                     // 562
    'click .reactive-table-navigation .previous-page': function (event) {                                            // 563
        var template = Template.instance();                                                                          // 564
        var currentPage = template.context.currentPage.get();                                                        // 565
        template.context.currentPage.set(currentPage - 1);                                                           // 566
        getUpdateHandleForTemplate(template)(template.context);                                                      // 567
    },                                                                                                               // 568
                                                                                                                     // 569
    'click .reactive-table-navigation .next-page': function (event) {                                                // 570
        var template = Template.instance();                                                                          // 571
        var currentPage = template.context.currentPage.get();                                                        // 572
        template.context.currentPage.set(currentPage + 1);                                                           // 573
        getUpdateHandleForTemplate(template)(template.context);                                                      // 574
    }                                                                                                                // 575
});                                                                                                                  // 576
                                                                                                                     // 577
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle_reactive-table/lib/sort.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
normalizeSort = function (field, oldField) {                                                                         // 1
  // preserve user sort settings                                                                                     // 2
  if (oldField && _.has(oldField, 'sortOrder')) {                                                                    // 3
    field.sortOrder = oldField.sortOrder;                                                                            // 4
  }                                                                                                                  // 5
  if (oldField && _.has(oldField, 'sortDirection')) {                                                                // 6
    field.sortDirection = oldField.sortDirection;                                                                    // 7
  }                                                                                                                  // 8
                                                                                                                     // 9
  // backwards-compatibility                                                                                         // 10
  if (!_.has(field, 'sortOrder') && _.has(field, 'sort')) {                                                          // 11
    console.warn('reactiveTable warning: The "sort" option for fields is deprecated');                               // 12
    field.sortOrder = 0;                                                                                             // 13
    field.sortDirection = field.sort;                                                                                // 14
  }                                                                                                                  // 15
                                                                                                                     // 16
                                                                                                                     // 17
  var sortOrder;                                                                                                     // 18
                                                                                                                     // 19
  if (!_.has(field, 'sortOrder')) {                                                                                  // 20
    sortOrder = Infinity;                                                                                            // 21
    field.sortOrder = new ReactiveVar();                                                                             // 22
  } else if (field.sortOrder instanceof ReactiveVar) {                                                               // 23
    sortOrder = field.sortOrder.get()                                                                                // 24
  } else {                                                                                                           // 25
    sortOrder = field.sortOrder;                                                                                     // 26
    field.sortOrder = new ReactiveVar();                                                                             // 27
  }                                                                                                                  // 28
                                                                                                                     // 29
  if (!_.isNumber(sortOrder) || sortOrder < 0) {                                                                     // 30
    console.error('reactiveTable error - sortOrder must be a postive number: ' + sortOrder);                         // 31
    sortOrder = Infinity;                                                                                            // 32
  }                                                                                                                  // 33
  field.sortOrder.set(sortOrder);                                                                                    // 34
                                                                                                                     // 35
  var sortDirection;                                                                                                 // 36
                                                                                                                     // 37
  if (!_.has(field, 'sortDirection')) {                                                                              // 38
    sortDirection = 1;                                                                                               // 39
    field.sortDirection = new ReactiveVar()                                                                          // 40
  } else if (field.sortDirection instanceof ReactiveVar) {                                                           // 41
    sortDirection = field.sortDirection.get();                                                                       // 42
  } else {                                                                                                           // 43
    sortDirection = field.sortDirection;                                                                             // 44
    field.sortDirection = new ReactiveVar();                                                                         // 45
  }                                                                                                                  // 46
                                                                                                                     // 47
  if (sortDirection === 'desc' || sortDirection === 'descending' || sortDirection === -1) {                          // 48
    sortDirection = -1;                                                                                              // 49
  } else if (sortDirection) {                                                                                        // 50
    sortDirection = 1;                                                                                               // 51
  }                                                                                                                  // 52
  field.sortDirection.set(sortDirection);                                                                            // 53
};                                                                                                                   // 54
                                                                                                                     // 55
getSortedFields = function (fields, multiColumnSort) {                                                               // 56
  var filteredFields = _.filter(fields, function (field) {                                                           // 57
    return field.sortOrder.get() < Infinity;                                                                         // 58
  });                                                                                                                // 59
  if (!filteredFields.length) {                                                                                      // 60
    var firstSortableField = _.find(fields, function (field) {                                                       // 61
      return _.isUndefined(field.sortable) || field.sortable !== false;                                              // 62
    });                                                                                                              // 63
    if (firstSortableField) {                                                                                        // 64
      filteredFields = [firstSortableField];                                                                         // 65
    }                                                                                                                // 66
  }                                                                                                                  // 67
  var sortedFields = _.sortBy(filteredFields, function (field) {                                                     // 68
    return field.sortOrder.get();                                                                                    // 69
  });                                                                                                                // 70
  return multiColumnSort ? sortedFields : sortedFields.slice(0, 1);                                                  // 71
}                                                                                                                    // 72
                                                                                                                     // 73
getSortQuery = function (fields, multiColumnSort) {                                                                  // 74
  var sortedFields = getSortedFields(fields, multiColumnSort);                                                       // 75
  var sortQuery = {};                                                                                                // 76
  _.each(sortedFields, function (field) {                                                                            // 77
    sortQuery[field.key] = field.sortDirection.get();                                                                // 78
  });                                                                                                                // 79
  return sortQuery;                                                                                                  // 80
};                                                                                                                   // 81
                                                                                                                     // 82
sortWithFunctions = function (rows, fields, multiColumnSort) {                                                       // 83
  var sortedFields = getSortedFields(fields, multiColumnSort);                                                       // 84
  var sortedRows = rows;                                                                                             // 85
                                                                                                                     // 86
  _.each(sortedFields.reverse(), function (field) {                                                                  // 87
    if (field.sortByValue || !field.fn) {                                                                            // 88
      sortedRows = _.sortBy(sortedRows, field.key);                                                                  // 89
    } else {                                                                                                         // 90
      sortedRows = _.sortBy(sortedRows, function (row) {                                                             // 91
        return field.fn( get( row, field.key ), row );                                                               // 92
      });                                                                                                            // 93
    }                                                                                                                // 94
    if (field.sortDirection.get() === -1) {                                                                          // 95
      sortedRows.reverse();                                                                                          // 96
    }                                                                                                                // 97
  });                                                                                                                // 98
  return sortedRows;                                                                                                 // 99
};                                                                                                                   // 100
                                                                                                                     // 101
getPrimarySortField = function (fields, multiColumnSort) {                                                           // 102
  return getSortedFields(fields, multiColumnSort)[0];                                                                // 103
};                                                                                                                   // 104
                                                                                                                     // 105
changePrimarySort = function(fieldId, fields, multiColumnSort) {                                                     // 106
  var primarySortField = getPrimarySortField(fields, multiColumnSort);                                               // 107
  if (primarySortField && primarySortField.fieldId === fieldId) {                                                    // 108
    var sortDirection = -1 * primarySortField.sortDirection.get();                                                   // 109
    primarySortField.sortDirection.set(sortDirection);                                                               // 110
    primarySortField.sortOrder.set(0);                                                                               // 111
  } else {                                                                                                           // 112
    _.each(fields, function (field) {                                                                                // 113
      if (field.fieldId === fieldId) {                                                                               // 114
        field.sortOrder.set(0);                                                                                      // 115
        if (primarySortField) {                                                                                      // 116
          field.sortDirection.set(primarySortField.sortDirection.get());                                             // 117
        }                                                                                                            // 118
      } else {                                                                                                       // 119
        var sortOrder = 1 + field.sortOrder.get();                                                                   // 120
        field.sortOrder.set(sortOrder);                                                                              // 121
      }                                                                                                              // 122
    });                                                                                                              // 123
  }                                                                                                                  // 124
};                                                                                                                   // 125
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle_reactive-table/lib/filter.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var parseFilterString = function (filterString) {                                                                    // 1
  var startQuoteRegExp = /^[\'\"]/;                                                                                  // 2
  var endQuoteRegExp = /[\'\"]$/;                                                                                    // 3
  var filters = [];                                                                                                  // 4
  var words = filterString.split(' ');                                                                               // 5
                                                                                                                     // 6
  var inQuote = false;                                                                                               // 7
  var quotedWord = '';                                                                                               // 8
  _.each(words, function (word) {                                                                                    // 9
    if (inQuote) {                                                                                                   // 10
      if (endQuoteRegExp.test(word)) {                                                                               // 11
        filters.push(quotedWord + ' ' + word.slice(0, word.length - 1));                                             // 12
        inQuote = false;                                                                                             // 13
        quotedWord = '';                                                                                             // 14
      } else {                                                                                                       // 15
        quotedWord = quotedWord + ' ' + word;                                                                        // 16
      }                                                                                                              // 17
    } else if (startQuoteRegExp.test(word)) {                                                                        // 18
      if (endQuoteRegExp.test(word)) {                                                                               // 19
        filters.push(word.slice(1, word.length - 1));                                                                // 20
      } else {                                                                                                       // 21
        inQuote = true;                                                                                              // 22
        quotedWord = word.slice(1, word.length);                                                                     // 23
      }                                                                                                              // 24
    } else {                                                                                                         // 25
      filters.push(word);                                                                                            // 26
    }                                                                                                                // 27
  });                                                                                                                // 28
  return filters;                                                                                                    // 29
};                                                                                                                   // 30
                                                                                                                     // 31
var escapeRegex = function(text) {                                                                                   // 32
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");                                                           // 33
};                                                                                                                   // 34
                                                                                                                     // 35
var getFieldMatches = function (field) {                                                                             // 36
  var fieldMatches = [];                                                                                             // 37
  var keys = field.split('.');                                                                                       // 38
  var previousKeys = '';                                                                                             // 39
  _.each(keys, function (key) {                                                                                      // 40
    fieldMatches.push(previousKeys + key);                                                                           // 41
    previousKeys += key + '.';                                                                                       // 42
  });                                                                                                                // 43
  return fieldMatches;                                                                                               // 44
};                                                                                                                   // 45
                                                                                                                     // 46
getFilterQuery = function (filterInputs, filterFields, settings) {                                                   // 47
  settings = settings || {};                                                                                         // 48
  if (settings.enableRegex === undefined) {                                                                          // 49
    settings.enableRegex = false;                                                                                    // 50
  }                                                                                                                  // 51
  if (settings.fields) {                                                                                             // 52
    _.each(filterInputs, function (filter, index) {                                                                  // 53
      if (_.any(settings.fields, function (include) { return include; })) {                                          // 54
        filterFields[index] = _.filter(filterFields[index], function (field) {                                       // 55
          return _.any(getFieldMatches(field), function (fieldMatch) {                                               // 56
            return settings.fields[fieldMatch];                                                                      // 57
          });                                                                                                        // 58
        });                                                                                                          // 59
      } else {                                                                                                       // 60
        filterFields[index] = _.filter(filterFields[index], function (field) {                                       // 61
          return _.all(getFieldMatches(field), function (fieldMatch) {                                               // 62
            return _.isUndefined(settings.fields[fieldMatch]) || settings.fields[fieldMatch];                        // 63
          });                                                                                                        // 64
        });                                                                                                          // 65
      }                                                                                                              // 66
    });                                                                                                              // 67
  }                                                                                                                  // 68
  var numberRegExp = /^\d+$/;                                                                                        // 69
  var queryList = [];                                                                                                // 70
  _.each(filterInputs, function (filter, index) {                                                                    // 71
    if (filter) {                                                                                                    // 72
      if (_.isObject(filter)) {                                                                                      // 73
        var fieldQueries = _.map(filterFields[index], function (field) {                                             // 74
          var query = {};                                                                                            // 75
          query[field] = filter;                                                                                     // 76
          return query;                                                                                              // 77
        });                                                                                                          // 78
        if (fieldQueries.length) {                                                                                   // 79
            queryList.push({'$or': fieldQueries});                                                                   // 80
          }                                                                                                          // 81
      } else {                                                                                                       // 82
        var filters = parseFilterString(filter);                                                                     // 83
        _.each(filters, function (filterWord) {                                                                      // 84
          if (settings.enableRegex === false) {                                                                      // 85
            filterWord = escapeRegex(filterWord);                                                                    // 86
          }                                                                                                          // 87
          var filterQueryList = [];                                                                                  // 88
          _.each(filterFields[index], function (field) {                                                             // 89
            var filterRegExp = new RegExp(filterWord, 'i');                                                          // 90
            var query = {};                                                                                          // 91
            query[field] = filterRegExp;                                                                             // 92
            filterQueryList.push(query);                                                                             // 93
                                                                                                                     // 94
            if (numberRegExp.test(filterWord)) {                                                                     // 95
              var numberQuery = {};                                                                                  // 96
              numberQuery[field] = parseInt(filterWord, 10);                                                         // 97
              filterQueryList.push(numberQuery);                                                                     // 98
            }                                                                                                        // 99
                                                                                                                     // 100
            if (filterWord === "true") {                                                                             // 101
              var boolQuery = {};                                                                                    // 102
              boolQuery[field] = true;                                                                               // 103
              filterQueryList.push(boolQuery);                                                                       // 104
            } else if (filterWord === "false") {                                                                     // 105
              var boolQuery = {};                                                                                    // 106
              boolQuery[field] = false;                                                                              // 107
              filterQueryList.push(boolQuery);                                                                       // 108
            }                                                                                                        // 109
          });                                                                                                        // 110
                                                                                                                     // 111
          if (filterQueryList.length) {                                                                              // 112
            var filterQuery = {'$or': filterQueryList};                                                              // 113
            queryList.push(filterQuery);                                                                             // 114
          }                                                                                                          // 115
        });                                                                                                          // 116
      }                                                                                                              // 117
    }                                                                                                                // 118
  });                                                                                                                // 119
  return queryList.length ? {'$and': queryList} : {};                                                                // 120
};                                                                                                                   // 121
                                                                                                                     // 122
if (Meteor.isClient) {                                                                                               // 123
  ReactiveTable = ReactiveTable || {};                                                                               // 124
                                                                                                                     // 125
  var reactiveTableFilters = {};                                                                                     // 126
  var callbacks = {};                                                                                                // 127
                                                                                                                     // 128
  ReactiveTable.Filter = function (id, fields) {                                                                     // 129
    if (reactiveTableFilters[id]) {                                                                                  // 130
        return reactiveTableFilters[id];                                                                             // 131
    }                                                                                                                // 132
                                                                                                                     // 133
    var filter = new ReactiveVar();                                                                                  // 134
                                                                                                                     // 135
    this.fields = fields;                                                                                            // 136
                                                                                                                     // 137
    this.get = function () {                                                                                         // 138
      return filter.get() || '';                                                                                     // 139
    };                                                                                                               // 140
                                                                                                                     // 141
    this.set = function (filterString) {                                                                             // 142
      filter.set(filterString);                                                                                      // 143
      _.each(callbacks[id], function (callback) {                                                                    // 144
        callback();                                                                                                  // 145
      });                                                                                                            // 146
    };                                                                                                               // 147
                                                                                                                     // 148
    reactiveTableFilters[id] = this;                                                                                 // 149
  };                                                                                                                 // 150
                                                                                                                     // 151
  ReactiveTable.clearFilters = function (filterIds) {                                                                // 152
    _.each(filterIds, function (filterId) {                                                                          // 153
      if (reactiveTableFilters[filterId]) {                                                                          // 154
        reactiveTableFilters[filterId].set('');                                                                      // 155
      }                                                                                                              // 156
    });                                                                                                              // 157
  };                                                                                                                 // 158
                                                                                                                     // 159
  dependOnFilters = function (filterIds, callback) {                                                                 // 160
    _.each(filterIds, function (filterId) {                                                                          // 161
      if (_.isUndefined(callbacks[filterId])) {                                                                      // 162
        callbacks[filterId] = [];                                                                                    // 163
      }                                                                                                              // 164
      callbacks[filterId].push(callback);                                                                            // 165
    });                                                                                                              // 166
  };                                                                                                                 // 167
                                                                                                                     // 168
  getFilterStrings = function (filterIds) {                                                                          // 169
    return _.map(filterIds, function (filterId) {                                                                    // 170
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                           // 171
        return '';                                                                                                   // 172
      }                                                                                                              // 173
      return reactiveTableFilters[filterId].get();                                                                   // 174
    });                                                                                                              // 175
  };                                                                                                                 // 176
                                                                                                                     // 177
  getFilterFields = function (filterIds, allFields) {                                                                // 178
    return _.map(filterIds, function (filterId) {                                                                    // 179
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                           // 180
        return _.map(allFields, function (field) { return field.key; });                                             // 181
      } else if (_.isEmpty(reactiveTableFilters[filterId].fields)) {                                                 // 182
        return _.map(allFields, function (field) { return field.key; });                                             // 183
      } else {                                                                                                       // 184
        return reactiveTableFilters[filterId].fields;                                                                // 185
      }                                                                                                              // 186
    });                                                                                                              // 187
  };                                                                                                                 // 188
                                                                                                                     // 189
  Template.reactiveTableFilter.helpers({                                                                             // 190
    'class': function () {                                                                                           // 191
      return this.class || 'input-group';                                                                            // 192
    },                                                                                                               // 193
                                                                                                                     // 194
    'filter': function () {                                                                                          // 195
      if (_.isUndefined(reactiveTableFilters[this.id])) {                                                            // 196
        new ReactiveTable.Filter(this.id, this.fields);                                                              // 197
      }                                                                                                              // 198
      return reactiveTableFilters[this.id].get();                                                                    // 199
    }                                                                                                                // 200
  });                                                                                                                // 201
                                                                                                                     // 202
  var updateFilter = _.debounce(function (template, filterText) {                                                    // 203
    reactiveTableFilters[template.data.id].set(filterText);                                                          // 204
  }, 200);                                                                                                           // 205
                                                                                                                     // 206
  Template.reactiveTableFilter.events({                                                                              // 207
    'keyup .reactive-table-input, input .reactive-table-input': function (event) {                                   // 208
      var template = Template.instance();                                                                            // 209
      var filterText = $(event.target).val();                                                                        // 210
      updateFilter(template, filterText);                                                                            // 211
    },                                                                                                               // 212
  });                                                                                                                // 213
}                                                                                                                    // 214
                                                                                                                     // 215
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aslagle:reactive-table'] = {
  ReactiveTable: ReactiveTable
};

})();
