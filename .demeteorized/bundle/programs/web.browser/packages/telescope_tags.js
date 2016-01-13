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
var Telescope = Package['telescope:lib'].Telescope;
var _ = Package.underscore._;
var getTemplate = Package['telescope:lib'].getTemplate;
var templates = Package['telescope:lib'].templates;
var themeSettings = Package['telescope:lib'].themeSettings;
var getVotePower = Package['telescope:lib'].getVotePower;
var Messages = Package['telescope:messages'].Messages;
var i18n = Package['telescope:i18n'].i18n;
var Events = Package['telescope:events'].Events;
var Settings = Package['telescope:settings'].Settings;
var Users = Package['telescope:users'].Users;
var Comments = Package['telescope:comments'].Comments;
var Posts = Package['telescope:posts'].Posts;
var Mongo = Package.mongo.Mongo;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Session = Package.session.Session;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var ECMAScript = Package.ecmascript.ECMAScript;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var Picker = Package['meteorhacks:picker'].Picker;
var DocHead = Package['kadira:dochead'].DocHead;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var marked = Package['chuangbo:marked'].marked;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var __init_fast_render = Package['meteorhacks:fast-render'].__init_fast_render;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var tinycolor = Package['aramk:tinycolor'].tinycolor;
var moment = Package['momentjs:moment'].moment;
var ReactiveTable = Package['aslagle:reactive-table'].ReactiveTable;
var Avatar = Package['utilities:avatar'].Avatar;
var Gravatar = Package['jparker:gravatar'].Gravatar;
var Cookie = Package['chuangbo:cookie'].Cookie;
var getSlug = Package['ongoworks:speakingurl'].getSlug;
var RouterAutoscroll = Package['okgrow:router-autoscroll'].RouterAutoscroll;
var Counts = Package['tmeasday:publish-counts'].Counts;
var WebApp = Package.webapp.WebApp;
var DDP = Package['ddp-client'].DDP;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package.templating.Template;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Autoupdate = Package.autoupdate.Autoupdate;
var Reload = Package.reload.Reload;
var HTML = Package.htmljs.HTML;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

/* Package-scope variables */
var Categories, __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/categories.js                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Categories = new Mongo.Collection("categories");                                                                 // 1
                                                                                                                 //
// category schema                                                                                               //
Categories.schema = new SimpleSchema({                                                                           // 4
  name: {                                                                                                        // 5
    type: String,                                                                                                // 6
    editableBy: ["admin"]                                                                                        // 7
  },                                                                                                             //
  description: {                                                                                                 // 9
    type: String,                                                                                                // 10
    optional: true,                                                                                              // 11
    editableBy: ["admin"],                                                                                       // 12
    autoform: {                                                                                                  // 13
      rows: 3                                                                                                    // 14
    }                                                                                                            //
  },                                                                                                             //
  order: {                                                                                                       // 17
    type: Number,                                                                                                // 18
    optional: true,                                                                                              // 19
    editableBy: ["admin"]                                                                                        // 20
  },                                                                                                             //
  slug: {                                                                                                        // 22
    type: String,                                                                                                // 23
    optional: true,                                                                                              // 24
    editableBy: ["admin"]                                                                                        // 25
  },                                                                                                             //
  image: {                                                                                                       // 27
    type: String,                                                                                                // 28
    optional: true,                                                                                              // 29
    editableBy: ["admin"]                                                                                        // 30
  },                                                                                                             //
  parentId: {                                                                                                    // 32
    type: String,                                                                                                // 33
    optional: true,                                                                                              // 34
    editableBy: ["admin"],                                                                                       // 35
    autoform: {                                                                                                  // 36
      options: function () {                                                                                     // 37
        var categories = Categories.find().map(function (category) {                                             // 38
          return {                                                                                               // 39
            value: category._id,                                                                                 // 40
            label: category.name                                                                                 // 41
          };                                                                                                     //
        });                                                                                                      //
        return categories;                                                                                       // 44
      }                                                                                                          //
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 50
  Categories.internationalize();                                                                                 // 51
});                                                                                                              //
                                                                                                                 //
Categories.attachSchema(Categories.schema);                                                                      // 54
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 56
  Categories.allow({                                                                                             // 57
    insert: Users.is.adminById,                                                                                  // 58
    update: Users.is.adminById,                                                                                  // 59
    remove: Users.is.adminById                                                                                   // 60
  });                                                                                                            //
});                                                                                                              //
                                                                                                                 //
Settings.addField([{                                                                                             // 65
  fieldName: 'categoriesBehavior',                                                                               // 67
  fieldSchema: {                                                                                                 // 68
    type: String,                                                                                                // 69
    optional: true,                                                                                              // 70
    autoform: {                                                                                                  // 71
      group: 'categories',                                                                                       // 72
      instructions: 'Let users filter by one or multiple categories at a time.',                                 // 73
      options: function () {                                                                                     // 74
        return [{ value: "single", label: i18n.t("categories_behavior_one_at_a_time") }, { value: "multiple", label: i18n.t("categories_behavior_multiple") }];
      }                                                                                                          //
    }                                                                                                            //
  }                                                                                                              //
}, {                                                                                                             //
  fieldName: 'hideEmptyCategories',                                                                              // 84
  fieldSchema: {                                                                                                 // 85
    type: Boolean,                                                                                               // 86
    optional: true,                                                                                              // 87
    autoform: {                                                                                                  // 88
      group: 'categories',                                                                                       // 89
      instructions: 'Hide empty categories in navigation'                                                        // 90
    }                                                                                                            //
  }                                                                                                              //
}]);                                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/helpers.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 //
/**                                                                                                              //
 * Get all of a category's parents                                                                               //
 * @param {Object} category                                                                                      //
 */                                                                                                              //
Categories.getParents = function (category) {                                                                    // 6
  var categoriesArray = [];                                                                                      // 7
                                                                                                                 //
  var getParents = (function () {                                                                                // 9
    function recurse(category) {                                                                                 // 9
      var parent;                                                                                                // 10
      if (parent = Categories.findOne(category.parentId)) {                                                      // 11
        categoriesArray.push(parent);                                                                            // 12
        recurse(parent);                                                                                         // 13
      }                                                                                                          //
    }                                                                                                            //
                                                                                                                 //
    return recurse;                                                                                              //
  })()(category);                                                                                                //
                                                                                                                 //
  return categoriesArray;                                                                                        // 17
};                                                                                                               //
Categories.helpers({ getParents: function () {                                                                   // 19
    return Categories.getParents(this);                                                                          // 19
  } });                                                                                                          //
                                                                                                                 //
/**                                                                                                              //
 * Get all of a category's children                                                                              //
 * @param {Object} category                                                                                      //
 */                                                                                                              //
Categories.getChildren = function (category) {                                                                   // 25
  var categoriesArray = [];                                                                                      // 26
                                                                                                                 //
  var getChildren = (function () {                                                                               // 28
    function recurse(categories) {                                                                               // 28
      var children = Categories.find({ parentId: { $in: _.pluck(categories, "_id") } }).fetch();                 // 29
      if (children.length > 0) {                                                                                 // 30
        categoriesArray = categoriesArray.concat(children);                                                      // 31
        recurse(children);                                                                                       // 32
      }                                                                                                          //
    }                                                                                                            //
                                                                                                                 //
    return recurse;                                                                                              //
  })()([category]);                                                                                              //
                                                                                                                 //
  return categoriesArray;                                                                                        // 36
};                                                                                                               //
Categories.helpers({ getChildren: function () {                                                                  // 38
    return Categories.getChildren(this);                                                                         // 38
  } });                                                                                                          //
                                                                                                                 //
/**                                                                                                              //
 * Get all of a post's categories                                                                                //
 * @param {Object} post                                                                                          //
 */                                                                                                              //
Posts.getCategories = function (post) {                                                                          // 44
  return !!post.categories ? Categories.find({ _id: { $in: post.categories } }).fetch() : [];                    // 45
};                                                                                                               //
Posts.helpers({ getCategories: function () {                                                                     // 47
    return Posts.getCategories(this);                                                                            // 47
  } });                                                                                                          //
                                                                                                                 //
/**                                                                                                              //
 * Get a category's URL                                                                                          //
 * @param {Object} category                                                                                      //
 */                                                                                                              //
Categories.getUrl = function (category, isAbsolute) {                                                            // 53
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                   // 54
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                      // 55
  // return prefix + FlowRouter.path("postsCategory", category);                                                 //
  return prefix + FlowRouter.path("postsDefault", {}, { cat: [category.slug] });                                 // 57
};                                                                                                               //
Categories.helpers({ getUrl: function () {                                                                       // 59
    return Categories.getUrl(this);                                                                              // 59
  } });                                                                                                          //
                                                                                                                 //
/**                                                                                                              //
 * Get a category's counter name                                                                                 //
 * @param {Object} category                                                                                      //
 */                                                                                                              //
Categories.getCounterName = function (category) {                                                                // 65
  return category.slug + "-postsCount";                                                                          // 66
};                                                                                                               //
Categories.helpers({ getCounterName: function () {                                                               // 68
    return Categories.getCounterName(this);                                                                      // 68
  } });                                                                                                          //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/callbacks.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// generate slug on insert                                                                                       //
Categories.before.insert(function (userId, doc) {                                                                // 2
  // if no slug has been provided, generate one                                                                  //
  var slug = !!doc.slug ? doc.slug : Telescope.utils.slugify(doc.name);                                          // 4
  doc.slug = Telescope.utils.getUnusedSlug(Categories, slug);                                                    // 5
});                                                                                                              //
                                                                                                                 //
// generate slug on edit                                                                                         //
Categories.before.update(function (userId, doc, fieldNames, modifier) {                                          // 9
  if (modifier.$set && modifier.$set.slug) {                                                                     // 10
    modifier.$set.slug = Telescope.utils.getUnusedSlug(Categories, modifier.$set.slug);                          // 11
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
// add callback that adds categories CSS classes                                                                 //
function addCategoryClass(postClass, post) {                                                                     // 16
  var classArray = _.map(Posts.getCategories(post), function (category) {                                        // 17
    return "category-" + category.slug;                                                                          // 17
  });                                                                                                            //
  return postClass + " " + classArray.join(' ');                                                                 // 18
}                                                                                                                //
Telescope.callbacks.add("postClass", addCategoryClass);                                                          // 20
                                                                                                                 //
// ------- Categories Check -------- //                                                                          //
                                                                                                                 //
// make sure all categories in the post.categories array exist in the db                                         //
var checkCategories = function (post) {                                                                          // 25
                                                                                                                 //
  // if there are not categories, stop here                                                                      //
  if (!post.categories || post.categories.length === 0) {                                                        // 28
    return;                                                                                                      // 29
  }                                                                                                              //
                                                                                                                 //
  // check how many of the categories given also exist in the db                                                 //
  var categoryCount = Categories.find({ _id: { $in: post.categories } }).count();                                // 33
                                                                                                                 //
  if (post.categories.length !== categoryCount) {                                                                // 35
    throw new Meteor.Error('invalid_category', i18n.t('invalid_category'));                                      // 36
  }                                                                                                              //
};                                                                                                               //
                                                                                                                 //
function postSubmitCheckCategories(post) {                                                                       // 40
  checkCategories(post);                                                                                         // 41
  return post;                                                                                                   // 42
}                                                                                                                //
Telescope.callbacks.add("postSubmit", postSubmitCheckCategories);                                                // 44
                                                                                                                 //
function postEditCheckCategories(post) {                                                                         // 46
  checkCategories(post);                                                                                         // 47
  return post;                                                                                                   // 48
}                                                                                                                //
Telescope.callbacks.add("postEdit", postEditCheckCategories);                                                    // 50
                                                                                                                 //
function addParentCategoriesOnSubmit(post) {                                                                     // 52
  var categories = post.categories;                                                                              // 53
  var newCategories = [];                                                                                        // 54
  if (categories) {                                                                                              // 55
    categories.forEach(function (categoryId) {                                                                   // 56
      var category = Categories.findOne(categoryId);                                                             // 57
      newCategories = newCategories.concat(_.pluck(category.getParents().reverse(), "_id"));                     // 58
      newCategories.push(category._id);                                                                          // 59
    });                                                                                                          //
  }                                                                                                              //
  post.categories = _.unique(newCategories);                                                                     // 62
  return post;                                                                                                   // 63
}                                                                                                                //
Telescope.callbacks.add("postSubmit", addParentCategoriesOnSubmit);                                              // 65
                                                                                                                 //
function addParentCategoriesOnEdit(modifier, post) {                                                             // 67
  if (modifier.$unset && modifier.$unset.categories !== undefined) {                                             // 68
    return modifier;                                                                                             // 69
  }                                                                                                              //
                                                                                                                 //
  var categories = modifier.$set.categories;                                                                     // 72
  var newCategories = [];                                                                                        // 73
  if (categories) {                                                                                              // 74
    categories.forEach(function (categoryId) {                                                                   // 75
      var category = Categories.findOne(categoryId);                                                             // 76
      newCategories = newCategories.concat(_.pluck(category.getParents().reverse(), "_id"));                     // 77
      newCategories.push(category._id);                                                                          // 78
    });                                                                                                          //
  }                                                                                                              //
  modifier.$set.categories = _.unique(newCategories);                                                            // 81
  return modifier;                                                                                               // 82
}                                                                                                                //
Telescope.callbacks.add("postEdit", addParentCategoriesOnEdit);                                                  // 84
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/parameters.js                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Category Parameter                                                                                            //
// Add a "categories" property to terms which can be used to filter *all* existing Posts views.                  //
function addCategoryParameter(parameters, terms) {                                                               // 3
                                                                                                                 //
  var cat = terms.cat || terms["cat[]"];                                                                         // 5
                                                                                                                 //
  // filter by category if category slugs are provided                                                           //
  if (cat) {                                                                                                     // 8
                                                                                                                 //
    var categoriesIds = [];                                                                                      // 10
    var find = {};                                                                                               // 11
                                                                                                                 //
    if (typeof cat === "string") {                                                                               // 13
      // cat is a string                                                                                         //
      find = { slug: cat };                                                                                      // 14
    } else if (Array.isArray(cat)) {                                                                             //
      // cat is an array                                                                                         //
      find = { slug: { $in: cat } };                                                                             // 16
    }                                                                                                            //
                                                                                                                 //
    // get all categories passed in terms                                                                        //
    var categories = Categories.find(find).fetch();                                                              // 20
                                                                                                                 //
    // for each category, add its ID and the IDs of its children to categoriesId array                           //
    categories.forEach(function (category) {                                                                     // 23
      categoriesIds.push(category._id);                                                                          // 24
      categoriesIds = categoriesIds.concat(_.pluck(category.getChildren(), "_id"));                              // 25
    });                                                                                                          //
                                                                                                                 //
    parameters.find.categories = { $in: categoriesIds };                                                         // 28
  }                                                                                                              //
  return parameters;                                                                                             // 30
}                                                                                                                //
Telescope.callbacks.add("postsParameters", addCategoryParameter);                                                // 32
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/custom_fields.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Posts.addField({                                                                                                 // 1
  fieldName: 'categories',                                                                                       // 3
  fieldSchema: {                                                                                                 // 4
    type: [String],                                                                                              // 5
    optional: true,                                                                                              // 6
    editableBy: ["member", "admin"],                                                                             // 7
    autoform: {                                                                                                  // 8
      noselect: true,                                                                                            // 9
      type: "bootstrap-category",                                                                                // 10
      order: 50,                                                                                                 // 11
      options: function () {                                                                                     // 12
        var categories = Categories.find().map(function (category) {                                             // 13
          return {                                                                                               // 14
            value: category._id,                                                                                 // 15
            label: category.name                                                                                 // 16
          };                                                                                                     //
        });                                                                                                      //
        return categories;                                                                                       // 19
      }                                                                                                          //
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/methods.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.methods({                                                                                                 // 1
  removeCategory: function (categoryId) {                                                                        // 2
                                                                                                                 //
    check(categoryId, String);                                                                                   // 4
                                                                                                                 //
    if (Users.is.admin(this.userId)) {                                                                           // 6
                                                                                                                 //
      var category = Categories.findOne(categoryId);                                                             // 8
                                                                                                                 //
      // delete category                                                                                         //
      Categories.remove(categoryId);                                                                             // 11
                                                                                                                 //
      // find any direct children of this category and make them root categories                                 //
      Categories.find({ parentId: categoryId }).forEach(function (category) {                                    // 14
        Categories.update(category._id, { $unset: { parentId: "" } });                                           // 15
      });                                                                                                        //
                                                                                                                 //
      // find any post with this category and remove it                                                          //
      var postsUpdated = Posts.update({ categories: { $in: [categoryId] } }, { $pull: { categories: categoryId } }, { multi: true });
                                                                                                                 //
      return postsUpdated;                                                                                       // 21
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/modules.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Telescope.menuItems.add("adminMenu", {                                                                           // 1
  route: 'adminCategories',                                                                                      // 2
  label: _.partial(i18n.t, 'categories'),                                                                        // 3
  description: _.partial(i18n.t, 'add_and_remove_categories')                                                    // 4
});                                                                                                              //
                                                                                                                 //
// push "categories" modules to postHeading                                                                      //
Telescope.modules.add("postHeading", {                                                                           // 8
  template: 'post_categories',                                                                                   // 9
  order: 30                                                                                                      // 10
});                                                                                                              //
                                                                                                                 //
// push "categories_menu" template to primaryNav                                                                 //
Telescope.modules.add("primaryNav", {                                                                            // 14
  template: 'categories_menu',                                                                                   // 15
  order: 50                                                                                                      // 16
});                                                                                                              //
                                                                                                                 //
Telescope.modules.add("mobileNav", {                                                                             // 19
  template: 'categories_menu',                                                                                   // 20
  order: 10                                                                                                      // 21
});                                                                                                              //
                                                                                                                 //
Telescope.modules.add("postsListTop", {                                                                          // 24
  template: 'category_title',                                                                                    // 25
  order: 10,                                                                                                     // 26
  only: ["postsDefault"]                                                                                         // 27
});                                                                                                              //
                                                                                                                 //
// we want to wait until categories are all loaded to load the rest of the app                                   //
Telescope.subscriptions.preload('categories');                                                                   // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/routes.js                                                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Telescope.adminRoutes.route('/categories', {                                                                     // 1
  name: "adminCategories",                                                                                       // 2
  action: function (params, queryParams) {                                                                       // 3
    BlazeLayout.render("layout", { main: "admin_wrapper", admin: "categories_admin" });                          // 4
  }                                                                                                              //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/package-i18n.js                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
TAPi18n.packages["telescope:tags"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                 // 2
// define package's translation function (proxy to the i18next)                                                  // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                 // 4
// define the package's templates registrar                                                                      // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:tags");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                 // 8
// Record the list of templates prior to package load                                                            // 9
var _ = Package.underscore._;                                                                                    // 10
non_package_templates = _.keys(Template);                                                                        // 11
                                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.categories_admin.js                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("categories_admin");                                                                        // 2
Template["categories_admin"] = new Template("Template.categories_admin", (function() {                           // 3
  var view = this;                                                                                               // 4
  return [ HTML.DIV({                                                                                            // 5
    "class": "form-well add-category"                                                                            // 6
  }, "\n    ", HTML.Raw("<h3>Add new category:</h3>"), "\n    ", Blaze._TemplateWith(function() {                // 7
    return {                                                                                                     // 8
      collection: Spacebars.call("Categories"),                                                                  // 9
      id: Spacebars.call("insertCategoryForm"),                                                                  // 10
      type: Spacebars.call("insert"),                                                                            // 11
      "label-class": Spacebars.call("control-label"),                                                            // 12
      "input-col-class": Spacebars.call("controls"),                                                             // 13
      template: Spacebars.call("bootstrap3-horizontal")                                                          // 14
    };                                                                                                           // 15
  }, function() {                                                                                                // 16
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                  // 17
  }), "\n  "), "\n  ", HTML.DIV({                                                                                // 18
    "class": "categories-list"                                                                                   // 19
  }, "\n    ", Blaze._TemplateWith(function() {                                                                  // 20
    return {                                                                                                     // 21
      menuName: Spacebars.call("categoriesAdmin"),                                                               // 22
      menuItems: Spacebars.call(view.lookup("menuItems")),                                                       // 23
      menuType: Spacebars.call("list")                                                                           // 24
    };                                                                                                           // 25
  }, function() {                                                                                                // 26
    return Spacebars.include(view.lookupTemplate("menuComponent"));                                              // 27
  }), "\n  ") ];                                                                                                 // 28
}));                                                                                                             // 29
                                                                                                                 // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/categories_admin.js                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.categories_admin.helpers({                                                                              // 1
  categories: function () {                                                                                      // 2
    return Categories.find({}, { sort: { order: 1, name: 1 } });                                                 // 3
  },                                                                                                             //
  menuItems: function () {                                                                                       // 5
    var menuItems = _.map(Categories.find({}, { sort: { order: 1, name: 1 } }).fetch(), function (category) {    // 6
      return {                                                                                                   // 7
        _id: category._id,                                                                                       // 8
        parentId: category.parentId,                                                                             // 9
        template: "category_item",                                                                               // 10
        data: category                                                                                           // 11
      };                                                                                                         //
    });                                                                                                          //
    return menuItems;                                                                                            // 14
  }                                                                                                              //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.category_item.js                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("category_item");                                                                           // 2
Template["category_item"] = new Template("Template.category_item", (function() {                                 // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "form-module"                                                                                       // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                  // 7
    return {                                                                                                     // 8
      collection: Spacebars.call("Categories"),                                                                  // 9
      id: Spacebars.call(view.lookup("formId")),                                                                 // 10
      type: Spacebars.call("update"),                                                                            // 11
      doc: Spacebars.call(view.lookup("category")),                                                              // 12
      "label-class": Spacebars.call("control-label"),                                                            // 13
      "input-col-class": Spacebars.call("controls"),                                                             // 14
      template: Spacebars.call("bootstrap3-horizontal")                                                          // 15
    };                                                                                                           // 16
  }, function() {                                                                                                // 17
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                  // 18
  }), HTML.Raw('\n    <a href="#" class="delete-link">Delete</a>\n  '));                                         // 19
}));                                                                                                             // 20
                                                                                                                 // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/category_item.js                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template.category_item.helpers({                                                                               // 2
    category: function () {                                                                                      // 3
      return this.item.data;                                                                                     // 4
    },                                                                                                           //
    formId: function () {                                                                                        // 6
      return 'updateCategory-' + this.item.data._id;                                                             // 7
    }                                                                                                            //
  });                                                                                                            //
                                                                                                                 //
  Template.category_item.events({                                                                                // 11
    'click .delete-link': function (e, instance) {                                                               // 12
      e.preventDefault();                                                                                        // 13
                                                                                                                 //
      var category = instance.data.item.data;                                                                    // 15
                                                                                                                 //
      if (confirm("Delete category “" + category.name + "”?")) {                                                 // 17
        Meteor.call("removeCategory", category._id, function (error, result) {                                   // 18
          Messages.flash("Deleted category “" + category.name + "” and removed it from " + result + " posts");   // 19
        });                                                                                                      //
      }                                                                                                          //
    }                                                                                                            //
  });                                                                                                            //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.categories_menu.js                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("categories_menu");                                                                         // 2
Template["categories_menu"] = new Template("Template.categories_menu", (function() {                             // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": function() {                                                                                        // 6
      return [ "categories-menu-wrapper ", Spacebars.mustache(view.lookup("moduleClass")) ];                     // 7
    }                                                                                                            // 8
  }, "\n    ", Blaze.If(function() {                                                                             // 9
    return Spacebars.call(view.lookup("hasCategories"));                                                         // 10
  }, function() {                                                                                                // 11
    return [ "\n      ", Blaze._TemplateWith(function() {                                                        // 12
      return {                                                                                                   // 13
        menuName: Spacebars.call("categories"),                                                                  // 14
        menuLabel: Spacebars.call(view.lookup("menuLabel")),                                                     // 15
        itemTemplate: Spacebars.call("categories_menu_item"),                                                    // 16
        menuItems: Spacebars.call(view.lookup("menuItems")),                                                     // 17
        menuType: Spacebars.call(view.lookup("menuType")),                                                       // 18
        expandLevel: Spacebars.call(view.lookup("expandLevel"))                                                  // 19
      };                                                                                                         // 20
    }, function() {                                                                                              // 21
      return Spacebars.include(view.lookupTemplate("menuComponent"));                                            // 22
    }), "\n    " ];                                                                                              // 23
  }), "\n  ");                                                                                                   // 24
}));                                                                                                             // 25
                                                                                                                 // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/categories_menu.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var getRoute = function () {                                                                                     // 1
  FlowRouter.watchPathChange();                                                                                  // 2
  var categoryName = this.data.slug;                                                                             // 3
  var currentQuery = _.clone(FlowRouter.current().queryParams);                                                  // 4
  var newQuery = _.extend(currentQuery, { cat: categoryName });                                                  // 5
  return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);                                 // 6
};                                                                                                               //
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 9
  Template.categories_menu.helpers({                                                                             // 10
    hasCategories: function () {                                                                                 // 11
      return Categories.find().count();                                                                          // 12
    },                                                                                                           //
    menuLabel: function () {                                                                                     // 14
      return i18n.t("categories");                                                                               // 15
    },                                                                                                           //
    menuItems: function () {                                                                                     // 17
                                                                                                                 //
      var activeCategories = FlowRouter.getQueryParam("cat");                                                    // 19
                                                                                                                 //
      var defaultItem = [{                                                                                       // 21
        route: "postsDefault",                                                                                   // 22
        label: i18n.t("all_categories"),                                                                         // 23
        itemClass: "item-never-active",                                                                          // 24
        template: "defaultMenuItem"                                                                              // 25
      }];                                                                                                        //
                                                                                                                 //
      var menuItems = Categories.find({}, { sort: { order: 1, name: 1 } }).fetch();                              // 28
                                                                                                                 //
      // filter out categories with no items                                                                     //
      if (Settings.get("hideEmptyCategories", false)) {                                                          // 31
        menuItems = _.filter(menuItems, function (category) {                                                    // 32
          return !!Counts.get(category.getCounterName());                                                        // 33
        });                                                                                                      //
      }                                                                                                          //
                                                                                                                 //
      menuItems = _.map(menuItems, function (category) {                                                         // 37
                                                                                                                 //
        // if any of this category's children are included in the active categories, expand it                   //
        var isExpanded = _.intersection(activeCategories, _.pluck(category.getChildren(), "slug")).length > 0;   // 40
                                                                                                                 //
        // is this category active?                                                                              //
        var isActive = _.contains(activeCategories, category.slug);                                              // 43
                                                                                                                 //
        return {                                                                                                 // 45
          route: getRoute,                                                                                       // 46
          label: category.name += " <span class=\"category-posts-count\">(" + Counts.get(category.getCounterName()) + ")</span>",
          description: category.description,                                                                     // 48
          _id: category._id,                                                                                     // 49
          parentId: category.parentId,                                                                           // 50
          isExpanded: isExpanded,                                                                                // 51
          isActive: isActive,                                                                                    // 52
          itemClass: "category-" + category.slug,                                                                // 53
          data: category                                                                                         // 54
        };                                                                                                       //
      });                                                                                                        //
                                                                                                                 //
      return defaultItem.concat(menuItems);                                                                      // 58
    },                                                                                                           //
    expandLevel: function () {                                                                                   // 60
      if (this.zone === "mobileNav") {                                                                           // 61
        return 0;                                                                                                // 62
      } else {                                                                                                   //
        return 1;                                                                                                // 64
      }                                                                                                          //
    },                                                                                                           //
    menuType: function () {                                                                                      // 67
      if (this.zone === "mobileNav") {                                                                           // 68
        return 'collapsible';                                                                                    // 69
      } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {                                           //
        return 'dropdown';                                                                                       // 71
      } else {                                                                                                   //
        return 'collapsible';                                                                                    // 73
      }                                                                                                          //
    }                                                                                                            //
  });                                                                                                            //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.categories_menu_item.js                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("categories_menu_item");                                                                    // 2
Template["categories_menu_item"] = new Template("Template.categories_menu_item", (function() {                   // 3
  var view = this;                                                                                               // 4
  return [ Blaze.If(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("showMultiple"));                                                          // 6
  }, function() {                                                                                                // 7
    return [ "\n\n    ", HTML.SPAN({                                                                             // 8
      "class": "menu-item-label"                                                                                 // 9
    }, "\n      ", HTML.SPAN({                                                                                   // 10
      "class": "menu-item-label-text js-category-toggle"                                                         // 11
    }, "\n        ", HTML.LABEL({                                                                                // 12
      "class": "category-label"                                                                                  // 13
    }, "\n          ", HTML.INPUT(HTML.Attrs({                                                                   // 14
      type: "checkbox",                                                                                          // 15
      "class": "category-checkbox",                                                                              // 16
      name: function() {                                                                                         // 17
        return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "data", "_id"));                            // 18
      }                                                                                                          // 19
    }, function() {                                                                                              // 20
      return Spacebars.attrMustache(view.lookup("isChecked"));                                                   // 21
    })), " \n          ", Blaze.View("lookup:getItemLabel", function() {                                         // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getItemLabel")));                                 // 23
    }), "\n        "), "\n      "), "\n      ", Blaze.If(function() {                                            // 24
      return Spacebars.call(view.lookup("description"));                                                         // 25
    }, function() {                                                                                              // 26
      return HTML.SPAN({                                                                                         // 27
        "class": "menu-item-label-description"                                                                   // 28
      }, Blaze.View("lookup:getDescription", function() {                                                        // 29
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getDescription")));                             // 30
      }));                                                                                                       // 31
    }), "\n    "), "\n\n  " ];                                                                                   // 32
  }, function() {                                                                                                // 33
    return [ "\n\n    ", HTML.A({                                                                                // 34
      "class": "menu-item-label",                                                                                // 35
      href: function() {                                                                                         // 36
        return Spacebars.mustache(view.lookup("itemRoute"));                                                     // 37
      }                                                                                                          // 38
    }, "\n      ", HTML.SPAN({                                                                                   // 39
      "class": "menu-item-label-text"                                                                            // 40
    }, Blaze.View("lookup:getItemLabel", function() {                                                            // 41
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getItemLabel")));                                 // 42
    })), "\n      ", Blaze.If(function() {                                                                       // 43
      return Spacebars.call(view.lookup("description"));                                                         // 44
    }, function() {                                                                                              // 45
      return HTML.SPAN({                                                                                         // 46
        "class": "menu-item-label-description"                                                                   // 47
      }, Blaze.View("lookup:getDescription", function() {                                                        // 48
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getDescription")));                             // 49
      }));                                                                                                       // 50
    }), "\n    "), "\n\n  " ];                                                                                   // 51
  }), "\n\n  ", Blaze.If(function() {                                                                            // 52
    return Spacebars.call(view.lookup("childMenuItems"));                                                        // 53
  }, function() {                                                                                                // 54
    return [ "\n    ", HTML.A({                                                                                  // 55
      "class": "menu-items-toggle js-menu-toggle",                                                               // 56
      href: "#"                                                                                                  // 57
    }, "\n      ", Spacebars.include(view.lookupTemplate("menuIconExpand")), "\n      ", Spacebars.include(view.lookupTemplate("menuIconCollapse")), "\n    "), "\n  " ];
  }) ];                                                                                                          // 59
}));                                                                                                             // 60
                                                                                                                 // 61
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/categories_menu_item.js                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.categories_menu_item.helpers({                                                                          // 1
  showMultiple: function () {                                                                                    // 2
    return Settings.get("categoriesBehavior", "single") === "multiple";                                          // 3
  },                                                                                                             //
  isChecked: function () {                                                                                       // 5
    return this.item.isActive ? "checked" : "";                                                                  // 6
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
Template.categories_menu_item.events({                                                                           // 10
  "change .js-category-toggle": function (event, instance) {                                                     // 11
                                                                                                                 //
    var slug = instance.data.item.data.slug;                                                                     // 13
    var input = instance.$(":checkbox");                                                                         // 14
                                                                                                                 //
    // use defer to make UI more responsive                                                                      //
    Meteor.defer(function () {                                                                                   // 17
                                                                                                                 //
      if (FlowRouter.getRouteName() !== "postsDefault") {                                                        // 19
                                                                                                                 //
        FlowRouter.go("postsDefault", {}, { cat: [slug] });                                                      // 21
      } else {                                                                                                   //
                                                                                                                 //
        if (input.prop("checked")) {                                                                             // 25
          FlowRouter.addToQueryArray('cat', slug);                                                               // 26
        } else {                                                                                                 //
          FlowRouter.removeFromQueryArray('cat', slug);                                                          // 29
        }                                                                                                        //
      }                                                                                                          //
    });                                                                                                          //
  }                                                                                                              //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.category_title.js                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("category_title");                                                                          // 2
Template["category_title"] = new Template("Template.category_title", (function() {                               // 3
  var view = this;                                                                                               // 4
  return Blaze.If(function() {                                                                                   // 5
    return Spacebars.call(view.lookup("categories"));                                                            // 6
  }, function() {                                                                                                // 7
    return [ "\n    ", HTML.DIV({                                                                                // 8
      "class": "category-heading-wrapper post-list-title"                                                        // 9
    }, "\n      ", Blaze.Each(function() {                                                                       // 10
      return Spacebars.call(view.lookup("categories"));                                                          // 11
    }, function() {                                                                                              // 12
      return [ "\n        ", HTML.DIV({                                                                          // 13
        "class": "category-heading"                                                                              // 14
      }, "\n          ", HTML.DIV({                                                                              // 15
        "class": "category-title"                                                                                // 16
      }, "\n            ", Spacebars.With(function() {                                                           // 17
        return Spacebars.call(view.lookup("categoryParents"));                                                   // 18
      }, function() {                                                                                            // 19
        return [ "\n              ", HTML.DIV({                                                                  // 20
          "class": "category-parents"                                                                            // 21
        }, "\n                ", Blaze.Each(function() {                                                         // 22
          return Spacebars.call(view.lookup("."));                                                               // 23
        }, function() {                                                                                          // 24
          return [ "\n                  ", HTML.A({                                                              // 25
            href: function() {                                                                                   // 26
              return Spacebars.mustache(Spacebars.dot(view.lookup("."), "getUrl"));                              // 27
            }                                                                                                    // 28
          }, Blaze.View("lookup:title", function() {                                                             // 29
            return Spacebars.mustache(view.lookup("title"));                                                     // 30
          })), " ", Blaze.View("lookup:icon", function() {                                                       // 31
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "next"));                           // 32
          }), "\n                " ];                                                                            // 33
        }), "\n              "), "\n            " ];                                                             // 34
      }), "\n            ", HTML.H2({                                                                            // 35
        "class": "main-category-title"                                                                           // 36
      }, Blaze.View("lookup:title", function() {                                                                 // 37
        return Spacebars.mustache(view.lookup("title"));                                                         // 38
      })), "\n          "), "\n          ", Blaze.If(function() {                                                // 39
        return Spacebars.call(view.lookup("description"));                                                       // 40
      }, function() {                                                                                            // 41
        return [ "\n            ", HTML.H3({                                                                     // 42
          "class": "category-description"                                                                        // 43
        }, Blaze.View("lookup:description", function() {                                                         // 44
          return Spacebars.mustache(view.lookup("description"));                                                 // 45
        })), "\n          " ];                                                                                   // 46
      }), "\n        "), "\n      " ];                                                                           // 47
    }), "\n    "), "\n  " ];                                                                                     // 48
  });                                                                                                            // 49
}));                                                                                                             // 50
                                                                                                                 // 51
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/category_title.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.category_title.helpers({                                                                                // 1
  categories: function () {                                                                                      // 2
    var slugs = FlowRouter.getQueryParam("cat");                                                                 // 3
    if (typeof slugs !== "undefined") {                                                                          // 4
      if (typeof slugs === "string") {                                                                           // 5
        slugs = [slugs];                                                                                         // 6
      }                                                                                                          //
      return Categories.find({ slug: { $in: slugs } });                                                          // 8
    }                                                                                                            //
  },                                                                                                             //
  categoryParents: function () {                                                                                 // 11
    var category = this;                                                                                         // 12
    var parents = category.getParents().reverse();                                                               // 13
    return parents;                                                                                              // 14
  },                                                                                                             //
  title: function () {                                                                                           // 16
    var category = this;                                                                                         // 17
    return category && category.name;                                                                            // 18
  }                                                                                                              //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.posts_category.js                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("posts_category");                                                                          // 2
Template["posts_category"] = new Template("Template.posts_category", (function() {                               // 3
  var view = this;                                                                                               // 4
  return Spacebars.include(view.lookupTemplate("posts_list_controller"));                                        // 5
}));                                                                                                             // 6
                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.post_categories.js                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("post_categories");                                                                         // 2
Template["post_categories"] = new Template("Template.post_categories", (function() {                             // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": function() {                                                                                        // 6
      return [ "post-categories ", Spacebars.mustache(view.lookup("moduleClass")) ];                             // 7
    }                                                                                                            // 8
  }, "\n    ", Blaze.Each(function() {                                                                           // 9
    return Spacebars.call(view.lookup("categoriesArray"));                                                       // 10
  }, function() {                                                                                                // 11
    return [ "\n      ", HTML.A({                                                                                // 12
      href: function() {                                                                                         // 13
        return Spacebars.mustache(view.lookup("categoryLink"));                                                  // 14
      },                                                                                                         // 15
      "class": function() {                                                                                      // 16
        return [ "post-category category-", Spacebars.mustache(view.lookup("slug")) ];                           // 17
      }                                                                                                          // 18
    }, Blaze.View("lookup:name", function() {                                                                    // 19
      return Spacebars.mustache(view.lookup("name"));                                                            // 20
    })), "\n    " ];                                                                                             // 21
  }), "\n  ");                                                                                                   // 22
}));                                                                                                             // 23
                                                                                                                 // 24
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/post_categories.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template.post_categories.helpers({                                                                             // 2
    categoriesArray: function () {                                                                               // 3
      return _.map(this.categories, function (categoryId) {                                                      // 4
        // note: this.categories maybe be undefined                                                              //
        return Categories.findOne(categoryId);                                                                   // 5
      });                                                                                                        //
    },                                                                                                           //
    categoryLink: function () {                                                                                  // 8
      return Categories.getUrl(this);                                                                            // 9
    }                                                                                                            //
  });                                                                                                            //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/template.autoform_category.js                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("afCategory_bootstrap3");                                                                   // 2
Template["afCategory_bootstrap3"] = new Template("Template.afCategory_bootstrap3", (function() {                 // 3
  var view = this;                                                                                               // 4
  return HTML.DIV(HTML.Attrs({                                                                                   // 5
    "class": "category-input"                                                                                    // 6
  }, function() {                                                                                                // 7
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                      // 8
  }), "\n    ", Blaze._TemplateWith(function() {                                                                 // 9
    return {                                                                                                     // 10
      menuName: Spacebars.call("categories"),                                                                    // 11
      menuItems: Spacebars.call(view.lookup("menuItems")),                                                       // 12
      menuType: Spacebars.call("collapsible")                                                                    // 13
    };                                                                                                           // 14
  }, function() {                                                                                                // 15
    return Spacebars.include(view.lookupTemplate("menuComponent"));                                              // 16
  }), "\n  ");                                                                                                   // 17
}));                                                                                                             // 18
                                                                                                                 // 19
Template.__checkName("category_input_item");                                                                     // 20
Template["category_input_item"] = new Template("Template.category_input_item", (function() {                     // 21
  var view = this;                                                                                               // 22
  return [ HTML.DIV({                                                                                            // 23
    "class": "menu-item-label category-input-item",                                                              // 24
    id: function() {                                                                                             // 25
      return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "_id"));                                      // 26
    }                                                                                                            // 27
  }, "\n    ", HTML.LABEL("\n      ", HTML.INPUT(HTML.Attrs({                                                    // 28
    "class": "category-checkbox",                                                                                // 29
    type: "checkbox",                                                                                            // 30
    value: function() {                                                                                          // 31
      return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "_id"));                                      // 32
    }                                                                                                            // 33
  }, function() {                                                                                                // 34
    return Spacebars.attrMustache(view.lookup("atts"));                                                          // 35
  })), " ", Blaze.View("lookup:getItemLabel", function() {                                                       // 36
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getItemLabel")));                                   // 37
  }), "\n    "), "\n  "), "\n  ", Blaze.If(function() {                                                          // 38
    return Spacebars.call(view.lookup("childMenuItems"));                                                        // 39
  }, function() {                                                                                                // 40
    return [ "\n    ", HTML.A({                                                                                  // 41
      "class": "menu-items-toggle js-menu-toggle",                                                               // 42
      href: "#"                                                                                                  // 43
    }, "\n      ", HTML.SPAN({                                                                                   // 44
      "class": "menu-icon-expand"                                                                                // 45
    }, Spacebars.include(view.lookupTemplate("menuIconExpand"))), "\n      ", HTML.SPAN({                        // 46
      "class": "menu-icon-collapse"                                                                              // 47
    }, Spacebars.include(view.lookupTemplate("menuIconCollapse"))), "\n    "), "\n  " ];                         // 48
  }) ];                                                                                                          // 49
}));                                                                                                             // 50
                                                                                                                 // 51
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/client/templates/autoform_category.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
AutoForm.addInputType("bootstrap-category", {                                                                    // 1
  template: "afCategory",                                                                                        // 2
  valueOut: function () {                                                                                        // 3
    var categories = [];                                                                                         // 4
    this.find(":checked").each(function () {                                                                     // 5
      categories.push($(this).val());                                                                            // 6
    });                                                                                                          //
    return categories;                                                                                           // 8
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
Template.afCategory_bootstrap3.helpers({                                                                         // 12
  menuItems: function () {                                                                                       // 13
                                                                                                                 //
    var selectedCategoriesIds = this.value;                                                                      // 15
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");                             // 16
                                                                                                                 //
    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));                     // 18
                                                                                                                 //
    var menuItems = _.map(Categories.find({}, { sort: { order: 1, name: 1 } }).fetch(), function (category) {    // 20
      var isSelected = _.contains(selectedCategoriesIds, category._id);                                          // 21
      return {                                                                                                   // 22
        _id: category._id,                                                                                       // 23
        parentId: category.parentId,                                                                             // 24
        template: "category_input_item",                                                                         // 25
        label: category.name,                                                                                    // 26
        isSelected: isSelected,                                                                                  // 27
        isExpanded: isSelected,                                                                                  // 28
        itemClass: "category-" + category.slug,                                                                  // 29
        data: category                                                                                           // 30
      };                                                                                                         //
    });                                                                                                          //
    return menuItems;                                                                                            // 33
  },                                                                                                             //
  atts: (function () {                                                                                           // 35
    function addFormControlAtts() {                                                                              // 35
      var atts = _.clone(this.atts);                                                                             // 36
      // Add bootstrap class                                                                                     //
      atts = AutoForm.Utility.addClass(atts, "form-control");                                                    // 38
      return atts;                                                                                               // 39
    }                                                                                                            //
                                                                                                                 //
    return addFormControlAtts;                                                                                   //
  })()                                                                                                           //
});                                                                                                              //
                                                                                                                 //
Template.afCategory_bootstrap3.onDestroyed(function () {                                                         // 43
  Session.set("prefilledCategories", null);                                                                      // 44
});                                                                                                              //
                                                                                                                 //
Template.afCategory_bootstrap3.events({                                                                          // 47
  "click .category-input-item label": function (e) {                                                             // 48
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked                   //
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {                                          // 50
      // when marking a category as checked, check all checkboxes of all parent nodes as well                    //
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
Template.category_input_item.helpers({                                                                           // 57
  atts: function () {                                                                                            // 58
    if (this.item.isSelected) {                                                                                  // 59
      return "checked";                                                                                          // 60
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/ar.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                   // 8
                                                                                                                 // 9
for (var i = 0; i < package_templates.length; i++) {                                                             // 10
  var package_template = package_templates[i];                                                                   // 11
                                                                                                                 // 12
  registerI18nTemplate(package_template);                                                                        // 13
}                                                                                                                // 14
                                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/bg.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/cs.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/da.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/de.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/el.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/en.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
// integrate the fallback language translations                                                                  // 8
translations = {};                                                                                               // 9
translations[namespace] = {"categories":"Categories","add_and_remove_categories":"Add and remove categories.","all_categories":"All","invalid_category":"Sorry, this is not a valid category","categoriesBehavior":"Categories Behavior","categories_behavior_one_at_a_time":"Select one category at a time","categories_behavior_multiple":"Combine multiple categories","hideEmptyCategories":"Hide empty categories"};
TAPi18n._loadLangFileObject("en", translations);                                                                 // 11
                                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/es.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/et.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/fr.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/hu.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/id.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/it.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/ja.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/kk.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/ko.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/nl.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/pl.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/pt-BR.i18n.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/ro.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/ru.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/sl.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/sv.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/th.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/tr.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/vi.i18n.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/packages/telescope_tagsi18n/zh-CN.i18n.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope:tags",                                                                             // 2
    namespace = "telescope:tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:tags'] = {
  Categories: Categories
};

})();
