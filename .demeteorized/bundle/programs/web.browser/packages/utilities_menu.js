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
var WebApp = Package.webapp.WebApp;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var Session = Package.session.Session;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package.templating.Template;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var getCurrentPath, getRoute, getChildMenuItems;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/utilities_menu/lib/helpers.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
getCurrentPath = function () {                                                                                        // 1
  if (typeof Router !== "undefined") {                                                                                // 2
    return Router.current().path;                                                                                     // 3
  } else if (typeof FlowRouter !== "undefined") {                                                                     // 4
    FlowRouter.watchPathChange()                                                                                      // 5
    return FlowRouter.current().path;                                                                                 // 6
  } else {                                                                                                            // 7
    throw new Error("Please use Flow Router or Iron Router");                                                         // 8
  }                                                                                                                   // 9
};                                                                                                                    // 10
                                                                                                                      // 11
getRoute = function (item) {                                                                                          // 12
  // if route is a Function return its result, else apply Router.path() to it                                         // 13
  if (typeof item.route === "function") {                                                                             // 14
    return item.route();                                                                                              // 15
  } else {                                                                                                            // 16
    if (typeof Router !== "undefined") {                                                                              // 17
      return Router.path(item.route);                                                                                 // 18
    } else if (typeof FlowRouter !== "undefined") {                                                                   // 19
      return FlowRouter.path(item.route);                                                                             // 20
    } else {                                                                                                          // 21
      throw new Error("Please use Flow Router or Iron Router");                                                       // 22
    }                                                                                                                 // 23
  }                                                                                                                   // 24
};                                                                                                                    // 25
                                                                                                                      // 26
getChildMenuItems = function (node) {                                                                                 // 27
  // don't try to find child menu items if current element doesn't have an id                                         // 28
  if (node.item._id) {                                                                                                // 29
                                                                                                                      // 30
    var level = node.level;                                                                                           // 31
    var childLevel = level + 1;                                                                                       // 32
    var menuItems = node.menu.menuItems;                                                                              // 33
                                                                                                                      // 34
    menuItems = _.filter(menuItems, function (item) {                                                                 // 35
      // return elements with the correct parentId                                                                    // 36
      return item.parentId === node.item._id;                                                                         // 37
    });                                                                                                               // 38
                                                                                                                      // 39
    // build "node container" object                                                                                  // 40
    menuItems = _.map(menuItems, function (item) {                                                                    // 41
      return {                                                                                                        // 42
        menu: node.menu,                                                                                              // 43
        level: childLevel,                                                                                            // 44
        item: item                                                                                                    // 45
      };                                                                                                              // 46
    });                                                                                                               // 47
    return menuItems;                                                                                                 // 48
                                                                                                                      // 49
  } else {                                                                                                            // 50
    return [];                                                                                                        // 51
  }                                                                                                                   // 52
};                                                                                                                    // 53
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/utilities_menu/lib/template.menu_component.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("menuComponent");                                                                                // 2
Template["menuComponent"] = new Template("Template.menuComponent", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": function() {                                                                                             // 6
      return [ "menu-component ", Spacebars.mustache(view.lookup("menuClass")), " js-menu-container" ];               // 7
    }                                                                                                                 // 8
  }, "\n\n    ", Blaze.If(function() {                                                                                // 9
    return Spacebars.call(view.lookup("showMenuLabel"));                                                              // 10
  }, function() {                                                                                                     // 11
    return [ "\n      ", HTML.DIV({                                                                                   // 12
      "class": "menu-label-wrapper"                                                                                   // 13
    }, "\n        ", Blaze.If(function() {                                                                            // 14
      return Spacebars.call(view.lookup("menuLabelTemplate"));                                                        // 15
    }, function() {                                                                                                   // 16
      return [ "\n          ", Blaze._TemplateWith(function() {                                                       // 17
        return {                                                                                                      // 18
          template: Spacebars.call(view.lookup("menuLabelTemplate")),                                                 // 19
          data: Spacebars.call(view.lookup("menuLabelData"))                                                          // 20
        };                                                                                                            // 21
      }, function() {                                                                                                 // 22
        return Spacebars.include(function() {                                                                         // 23
          return Spacebars.call(Template.__dynamic);                                                                  // 24
        });                                                                                                           // 25
      }), "\n        " ];                                                                                             // 26
    }, function() {                                                                                                   // 27
      return [ "\n          ", Spacebars.include(view.lookupTemplate("defaultMenuLabel")), "\n        " ];            // 28
    }), "\n      "), "\n    " ];                                                                                      // 29
  }), "\n\n    ", Blaze.If(function() {                                                                               // 30
    return Spacebars.call(view.lookup("showRootMenuItems"));                                                          // 31
  }, function() {                                                                                                     // 32
    return [ "\n      ", Spacebars.With(function() {                                                                  // 33
      return Spacebars.call(view.lookup("rootMenuItems"));                                                            // 34
    }, function() {                                                                                                   // 35
      return [ "\n        ", HTML.UL({                                                                                // 36
        "class": "menu-items js-menu-items",                                                                          // 37
        role: "menu",                                                                                                 // 38
        "aria-labelledby": "dLabel"                                                                                   // 39
      }, "\n          ", Blaze.Each(function() {                                                                      // 40
        return Spacebars.call(view.lookup("."));                                                                      // 41
      }, function() {                                                                                                 // 42
        return [ "\n            ", Spacebars.include(view.lookupTemplate("menuItem")), "\n          " ];              // 43
      }), "\n        "), "\n      " ];                                                                                // 44
    }), "\n    " ];                                                                                                   // 45
  }), "\n\n  ");                                                                                                      // 46
}));                                                                                                                  // 47
                                                                                                                      // 48
Template.__checkName("defaultMenuLabel");                                                                             // 49
Template["defaultMenuLabel"] = new Template("Template.defaultMenuLabel", (function() {                                // 50
  var view = this;                                                                                                    // 51
  return HTML.A({                                                                                                     // 52
    "class": "menu-label js-menu-toggle",                                                                             // 53
    href: "#"                                                                                                         // 54
  }, "\n    ", HTML.SPAN({                                                                                            // 55
    "class": "menu-label-text"                                                                                        // 56
  }, Blaze.View("lookup:getMenuLabel", function() {                                                                   // 57
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getMenuLabel")));                                        // 58
  })), "\n    ", HTML.SPAN({                                                                                          // 59
    "class": "menu-items-toggle"                                                                                      // 60
  }, "\n      ", Spacebars.include(view.lookupTemplate("menuIconExpand")), "\n      ", Spacebars.include(view.lookupTemplate("menuIconCollapse")), "\n    "), "\n  ");
}));                                                                                                                  // 62
                                                                                                                      // 63
Template.__checkName("menuItem");                                                                                     // 64
Template["menuItem"] = new Template("Template.menuItem", (function() {                                                // 65
  var view = this;                                                                                                    // 66
  return HTML.LI({                                                                                                    // 67
    "class": function() {                                                                                             // 68
      return [ "menu-item ", Spacebars.mustache(view.lookup("itemClass")), " js-menu-container" ];                    // 69
    }                                                                                                                 // 70
  }, "\n  \n    ", HTML.DIV({                                                                                         // 71
    "class": "menu-item-label-wrapper"                                                                                // 72
  }, "\n      ", Blaze.If(function() {                                                                                // 73
    return Spacebars.call(view.lookup("getTemplate"));                                                                // 74
  }, function() {                                                                                                     // 75
    return [ "\n        ", Blaze._TemplateWith(function() {                                                           // 76
      return {                                                                                                        // 77
        template: Spacebars.call(view.lookup("getTemplate"))                                                          // 78
      };                                                                                                              // 79
    }, function() {                                                                                                   // 80
      return Spacebars.include(function() {                                                                           // 81
        return Spacebars.call(Template.__dynamic);                                                                    // 82
      });                                                                                                             // 83
    }), "\n      " ];                                                                                                 // 84
  }, function() {                                                                                                     // 85
    return [ "\n        ", Spacebars.include(view.lookupTemplate("defaultMenuItem")), "\n      " ];                   // 86
  }), "\n    "), "\n\n    ", Blaze.If(function() {                                                                    // 87
    return Spacebars.call(view.lookup("showChildMenu"));                                                              // 88
  }, function() {                                                                                                     // 89
    return [ "\n      ", Spacebars.With(function() {                                                                  // 90
      return Spacebars.call(view.lookup("childMenuItems"));                                                           // 91
    }, function() {                                                                                                   // 92
      return [ "\n        ", HTML.UL({                                                                                // 93
        "class": "menu-child-items js-menu-items"                                                                     // 94
      }, "\n          ", Blaze.Each(function() {                                                                      // 95
        return Spacebars.call(view.lookup("."));                                                                      // 96
      }, function() {                                                                                                 // 97
        return [ "\n            ", Spacebars.include(view.lookupTemplate("menuItem")), "\n          " ];              // 98
      }), "\n        "), "\n      " ];                                                                                // 99
    }), "\n    " ];                                                                                                   // 100
  }), "\n\n  ");                                                                                                      // 101
}));                                                                                                                  // 102
                                                                                                                      // 103
Template.__checkName("defaultMenuItem");                                                                              // 104
Template["defaultMenuItem"] = new Template("Template.defaultMenuItem", (function() {                                  // 105
  var view = this;                                                                                                    // 106
  return [ HTML.A({                                                                                                   // 107
    "class": "menu-item-label",                                                                                       // 108
    href: function() {                                                                                                // 109
      return Spacebars.mustache(view.lookup("itemRoute"));                                                            // 110
    }                                                                                                                 // 111
  }, "\n    ", HTML.SPAN({                                                                                            // 112
    "class": "menu-item-label-text"                                                                                   // 113
  }, Blaze.View("lookup:getItemLabel", function() {                                                                   // 114
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getItemLabel")));                                        // 115
  })), "\n    ", Blaze.If(function() {                                                                                // 116
    return Spacebars.call(view.lookup("getItemDescription"));                                                         // 117
  }, function() {                                                                                                     // 118
    return HTML.SPAN({                                                                                                // 119
      "class": "menu-item-label-description"                                                                          // 120
    }, Blaze.View("lookup:getItemDescription", function() {                                                           // 121
      return Spacebars.mustache(view.lookup("getItemDescription"));                                                   // 122
    }));                                                                                                              // 123
  }), "\n  "), "\n\n  ", Blaze.If(function() {                                                                        // 124
    return Spacebars.call(view.lookup("childMenuItems"));                                                             // 125
  }, function() {                                                                                                     // 126
    return [ "\n    ", HTML.A({                                                                                       // 127
      "class": "menu-items-toggle js-menu-toggle",                                                                    // 128
      href: "#"                                                                                                       // 129
    }, "\n      ", HTML.SPAN({                                                                                        // 130
      "class": "menu-icon-expand"                                                                                     // 131
    }, Spacebars.include(view.lookupTemplate("menuIconExpand"))), "\n      ", HTML.SPAN({                             // 132
      "class": "menu-icon-collapse"                                                                                   // 133
    }, Spacebars.include(view.lookupTemplate("menuIconCollapse"))), "\n    "), "\n  " ];                              // 134
  }) ];                                                                                                               // 135
}));                                                                                                                  // 136
                                                                                                                      // 137
Template.__checkName("menuIconExpand");                                                                               // 138
Template["menuIconExpand"] = new Template("Template.menuIconExpand", (function() {                                    // 139
  var view = this;                                                                                                    // 140
  return HTML.SPAN({                                                                                                  // 141
    "class": "menu-icon menu-icon-expand"                                                                             // 142
  }, "\n    ", HTML.SVG({                                                                                             // 143
    "class": "icon icon-angle-right"                                                                                  // 144
  }, HTML.USE({                                                                                                       // 145
    "xlink:href": "#icon-angle-right"                                                                                 // 146
  })), "\n    ", HTML.SYMBOL({                                                                                        // 147
    id: "icon-angle-right",                                                                                           // 148
    viewBox: "0 0 366 1024"                                                                                           // 149
  }, "\n      ", HTML.TITLE("angle-right"), "\n      ", HTML.PATH({                                                   // 150
    "class": "path1",                                                                                                 // 151
    d: "M340 548.571q0 7.429-5.714 13.143l-266.286 266.286q-5.714 5.714-13.143 5.714t-13.143-5.714l-28.571-28.571q-5.714-5.714-5.714-13.143t5.714-13.143l224.571-224.571-224.571-224.571q-5.714-5.714-5.714-13.143t5.714-13.143l28.571-28.571q5.714-5.714 13.143-5.714t13.143 5.714l266.286 266.286q5.714 5.714 5.714 13.143z"
  }), "\n    "), "\n  ");                                                                                             // 153
}));                                                                                                                  // 154
                                                                                                                      // 155
Template.__checkName("menuIconCollapse");                                                                             // 156
Template["menuIconCollapse"] = new Template("Template.menuIconCollapse", (function() {                                // 157
  var view = this;                                                                                                    // 158
  return HTML.SPAN({                                                                                                  // 159
    "class": "menu-icon menu-icon-collapse"                                                                           // 160
  }, "\n    ", HTML.SVG({                                                                                             // 161
    "class": "icon icon-angle-down"                                                                                   // 162
  }, HTML.USE({                                                                                                       // 163
    "xlink:href": "#icon-angle-down"                                                                                  // 164
  })), "\n    ", HTML.SYMBOL({                                                                                        // 165
    id: "icon-angle-down",                                                                                            // 166
    viewBox: "0 0 658 1024"                                                                                           // 167
  }, "\n      ", HTML.TITLE("angle-down"), "\n      ", HTML.PATH({                                                    // 168
    "class": "path1",                                                                                                 // 169
    d: "M614.286 420.571q0 7.429-5.714 13.143l-266.286 266.286q-5.714 5.714-13.143 5.714t-13.143-5.714l-266.286-266.286q-5.714-5.714-5.714-13.143t5.714-13.143l28.571-28.571q5.714-5.714 13.143-5.714t13.143 5.714l224.571 224.571 224.571-224.571q5.714-5.714 13.143-5.714t13.143 5.714l28.571 28.571q5.714 5.714 5.714 13.143z"
  }), "\n    "), "\n  ");                                                                                             // 171
}));                                                                                                                  // 172
                                                                                                                      // 173
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/utilities_menu/lib/menu_component.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
// ------------------------------- menuComponent ------------------------------- //                                   // 2
                                                                                                                      // 3
Template.menuComponent.onCreated(function () {                                                                        // 4
                                                                                                                      // 5
  var menu = this.data;                                                                                               // 6
                                                                                                                      // 7
  // if menu has a custom item template specified, make that template inherit helpers and events from defaultMenuItem
  if (menu.itemTemplate) {                                                                                            // 9
    Template[menu.itemTemplate].inheritsHelpersFrom("defaultMenuItem");                                               // 10
    Template[menu.itemTemplate].inheritsEventsFrom("defaultMenuItem");                                                // 11
  }                                                                                                                   // 12
                                                                                                                      // 13
  var expandLevel = typeof menu.expandLevel === "undefined" ? 1 : menu.expandLevel;                                   // 14
  this.expanded = new ReactiveVar(expandLevel > 0 || expandLevel === "all");                                          // 15
                                                                                                                      // 16
});                                                                                                                   // 17
                                                                                                                      // 18
Template.menuComponent.helpers({                                                                                      // 19
                                                                                                                      // 20
  // generate menu's CSS class                                                                                        // 21
  menuClass: function () {                                                                                            // 22
    var classes = [this.menuName+"-menu"];                                                                            // 23
    var count = this.menuItems.length;                                                                                // 24
                                                                                                                      // 25
                                                                                                                      // 26
    if (!!this.menuType) {                                                                                            // 27
      classes.push("menu-"+this.menuType);                                                                            // 28
    } else {                                                                                                          // 29
      classes.push("menu-list");                                                                                      // 30
    }                                                                                                                 // 31
                                                                                                                      // 32
    if (!!this.menuClass) {                                                                                           // 33
      classes.push(this.menuClass);                                                                                   // 34
    }                                                                                                                 // 35
                                                                                                                      // 36
    if (count) {                                                                                                      // 37
      classes.push("menu-has-items");                                                                                 // 38
    } else {                                                                                                          // 39
      classes.push("menu-no-items");                                                                                  // 40
    }                                                                                                                 // 41
                                                                                                                      // 42
    if (Template.instance().expanded.get()) {                                                                         // 43
      classes.push("menu-expanded");                                                                                  // 44
    } else {                                                                                                          // 45
      classes.push("menu-collapsed");                                                                                 // 46
    }                                                                                                                 // 47
                                                                                                                      // 48
    return _.unique(classes).join(" ");                                                                               // 49
  },                                                                                                                  // 50
                                                                                                                      // 51
  // whether to show the menu label or not                                                                            // 52
  showMenuLabel: function () {                                                                                        // 53
    return !!this.menuLabelTemplate || !!this.menuLabel;                                                              // 54
  },                                                                                                                  // 55
                                                                                                                      // 56
  // whether to show the root menu items or not                                                                       // 57
  showRootMenuItems: function () {                                                                                    // 58
    // if this is a dropdown or list menu, always show root menu items                                                // 59
    return this.menuType === "list" || this.menuType === "dropdown" || Template.instance().expanded.get();            // 60
  },                                                                                                                  // 61
                                                                                                                      // 62
  // get the original set of root menu items                                                                          // 63
  rootMenuItems: function () {                                                                                        // 64
                                                                                                                      // 65
    var menu = this;                                                                                                  // 66
    var menuItems = menu.menuItems;                                                                                   // 67
                                                                                                                      // 68
    // get root elements                                                                                              // 69
    menuItems = _.filter(menuItems, function(item) {                                                                  // 70
      return typeof item.parentId === "undefined";                                                                    // 71
    });                                                                                                               // 72
                                                                                                                      // 73
    // build "node container" object                                                                                  // 74
    menuItems = _.map(menuItems, function (item) {                                                                    // 75
      return {                                                                                                        // 76
        menu: menu,                                                                                                   // 77
        level: 0,                                                                                                     // 78
        item: item                                                                                                    // 79
      };                                                                                                              // 80
    });                                                                                                               // 81
                                                                                                                      // 82
    return menuItems;                                                                                                 // 83
                                                                                                                      // 84
  }                                                                                                                   // 85
                                                                                                                      // 86
});                                                                                                                   // 87
                                                                                                                      // 88
Template.menuComponent.events({                                                                                       // 89
                                                                                                                      // 90
  'click .js-menu-toggle': function (e) {                                                                             // 91
    e.preventDefault();                                                                                               // 92
    e.stopImmediatePropagation();                                                                                     // 93
                                                                                                                      // 94
    var expanded = Template.instance().get("expanded");                                                               // 95
    expanded.set(!expanded.get());                                                                                    // 96
  }                                                                                                                   // 97
                                                                                                                      // 98
});                                                                                                                   // 99
                                                                                                                      // 100
// ------------------------------- defaultMenuLabel ------------------------------- //                                // 101
                                                                                                                      // 102
Template.defaultMenuLabel.helpers({                                                                                   // 103
  getMenuLabel: function () {                                                                                         // 104
    return typeof this.menuLabel === "function" ? this.menuLabel() :  this.menuLabel;                                 // 105
  }                                                                                                                   // 106
});                                                                                                                   // 107
                                                                                                                      // 108
// ------------------------------- menuItem ------------------------------- //                                        // 109
                                                                                                                      // 110
Template.menuItem.onCreated(function () {                                                                             // 111
                                                                                                                      // 112
  var template = this;                                                                                                // 113
  template.expanded = new ReactiveVar(false);                                                                         // 114
                                                                                                                      // 115
  // if menu item has a custom template specified, make that template inherit helpers from defaultMenuItem            // 116
  if (template.data.item.template) {                                                                                  // 117
    Template[template.data.item.template].inheritsHelpersFrom("defaultMenuItem");                                     // 118
    Template[template.data.item.template].inheritsEventsFrom("defaultMenuItem");                                      // 119
  }                                                                                                                   // 120
                                                                                                                      // 121
  // get menu expand level, or else default to 1                                                                      // 122
  var expandLevel = typeof template.data.menu.expandLevel === "undefined" ? 1 : template.data.menu.expandLevel;       // 123
                                                                                                                      // 124
  template.autorun(function (){                                                                                       // 125
    // expand item if:                                                                                                // 126
    // 1. item is marked as expanded in menu items (reactive)                                                         // 127
    // 2. item is at a lower level than the menu's expand level                                                       // 128
    // 3. menu's expand level is set to "all"                                                                         // 129
    var itemExpanded = Template.currentData().item.isExpanded; // ⚡ reactive ⚡                                        // 130
    template.expanded.set(itemExpanded || template.data.level < expandLevel - 1 || expandLevel === "all");            // 131
  });                                                                                                                 // 132
                                                                                                                      // 133
});                                                                                                                   // 134
                                                                                                                      // 135
Template.menuItem.helpers({                                                                                           // 136
                                                                                                                      // 137
  // custom templates can be specified at the menu or menu item level                                                 // 138
  getTemplate: function () {                                                                                          // 139
    return this.item.template || this.menu.itemTemplate;                                                              // 140
  },                                                                                                                  // 141
                                                                                                                      // 142
  // generate item's CSS class                                                                                        // 143
  itemClass: function () {                                                                                            // 144
    var classes = [];                                                                                                 // 145
    var currentPath = getCurrentPath();                                                                               // 146
    var isActive = this.item.route && (getRoute(this.item) === currentPath || getRoute(this.item) === Meteor.absoluteUrl() + currentPath.substr(1));
                                                                                                                      // 148
    if (isActive) {                                                                                                   // 149
      // substr(1) is to avoid having two "/" in the URL                                                              // 150
      classes.push("item-active");                                                                                    // 151
    }                                                                                                                 // 152
                                                                                                                      // 153
    if (getChildMenuItems(this).length) {                                                                             // 154
      classes.push("menu-item-has-children");                                                                         // 155
    } else {                                                                                                          // 156
      classes.push("menu-item-no-children");                                                                          // 157
    }                                                                                                                 // 158
                                                                                                                      // 159
    if (Template.instance().expanded.get()) {                                                                         // 160
      classes.push("menu-expanded");                                                                                  // 161
    } else {                                                                                                          // 162
      classes.push("menu-collapsed");                                                                                 // 163
    }                                                                                                                 // 164
                                                                                                                      // 165
    if (this.item.itemClass) {                                                                                        // 166
      classes.push(this.item.itemClass);                                                                              // 167
    }                                                                                                                 // 168
                                                                                                                      // 169
    classes.push("menu-level-" + this.level);                                                                         // 170
                                                                                                                      // 171
    return _.unique(classes).join(" ");;                                                                              // 172
  },                                                                                                                  // 173
                                                                                                                      // 174
  showChildMenu: function () {                                                                                        // 175
    // if this is a dropdown or list menu, always show children                                                       // 176
    return this.menu.menuType === "list" || this.menu.menuType === "dropdown" || Template.instance().expanded.get();  // 177
  },                                                                                                                  // 178
                                                                                                                      // 179
  // generate array of child menu items                                                                               // 180
  childMenuItems: function () {                                                                                       // 181
    return getChildMenuItems(this);                                                                                   // 182
  }                                                                                                                   // 183
                                                                                                                      // 184
});                                                                                                                   // 185
                                                                                                                      // 186
// ------------------------------- defaultMenuItem ------------------------------- //                                 // 187
                                                                                                                      // 188
Template.defaultMenuItem.helpers({                                                                                    // 189
                                                                                                                      // 190
  // the item's label                                                                                                 // 191
  getItemLabel: function () {                                                                                         // 192
    return typeof this.item.label === "function" ? this.item.label() :  this.item.label;                              // 193
  },                                                                                                                  // 194
                                                                                                                      // 195
  // the item's description                                                                                           // 196
  getItemDescription: function () {                                                                                   // 197
    return typeof this.item.description === "function" ? this.item.description() :  this.item.description;            // 198
  },                                                                                                                  // 199
                                                                                                                      // 200
  // the item's route                                                                                                 // 201
  itemRoute: function () {                                                                                            // 202
    return getRoute(this.item);                                                                                       // 203
  },                                                                                                                  // 204
                                                                                                                      // 205
  // generate array of child menu items                                                                               // 206
  childMenuItems: function () {                                                                                       // 207
    return getChildMenuItems(this);                                                                                   // 208
  }                                                                                                                   // 209
});                                                                                                                   // 210
                                                                                                                      // 211
Template.defaultMenuItem.events({                                                                                     // 212
                                                                                                                      // 213
  'click .js-menu-toggle': function (e) {                                                                             // 214
    e.preventDefault();                                                                                               // 215
    e.stopImmediatePropagation();                                                                                     // 216
                                                                                                                      // 217
    var expanded = Template.instance().get("expanded");                                                               // 218
    expanded.set(!expanded.get());                                                                                    // 219
  }                                                                                                                   // 220
                                                                                                                      // 221
});                                                                                                                   // 222
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['utilities:menu'] = {};

})();
