(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Telescope = Package['telescope:lib'].Telescope;
var _ = Package.underscore._;
var getTemplate = Package['telescope:lib'].getTemplate;
var templates = Package['telescope:lib'].templates;
var themeSettings = Package['telescope:lib'].themeSettings;
var getVotePower = Package['telescope:lib'].getVotePower;
var i18n = Package['telescope:i18n'].i18n;
var Events = Package['telescope:events'].Events;
var Settings = Package['telescope:settings'].Settings;
var Users = Package['telescope:users'].Users;
var Comments = Package['telescope:comments'].Comments;
var Posts = Package['telescope:posts'].Posts;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var AccountsServer = Package['accounts-base'].AccountsServer;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var ECMAScript = Package.ecmascript.ECMAScript;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var Picker = Package['meteorhacks:picker'].Picker;
var DocHead = Package['kadira:dochead'].DocHead;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var marked = Package['chuangbo:marked'].marked;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;
var tinycolor = Package['aramk:tinycolor'].tinycolor;
var moment = Package['momentjs:moment'].moment;
var ReactiveTable = Package['aslagle:reactive-table'].ReactiveTable;
var Avatar = Package['utilities:avatar'].Avatar;
var sanitizeHtml = Package['djedi:sanitize-html'].sanitizeHtml;
var Gravatar = Package['jparker:gravatar'].Gravatar;
var MeteorFilesHelpers = Package['sanjo:meteor-files-helpers'].MeteorFilesHelpers;
var Handlebars = Package.ui.Handlebars;
var OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
var getSlug = Package['ongoworks:speakingurl'].getSlug;
var Counts = Package['tmeasday:publish-counts'].Counts;
var publishCount = Package['tmeasday:publish-counts'].publishCount;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Spacebars = Package.spacebars.Spacebars;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Autoupdate = Package.autoupdate.Autoupdate;
var HTML = Package.htmljs.HTML;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

/* Package-scope variables */
var Categories, __, translations;

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
                                                                                                                 // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope_tags/lib/server/publications.js                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.publish('categories', function () {                                                                       // 1
  if (Users.can.viewById(this.userId)) {                                                                         // 2
    var categories = Categories.find();                                                                          // 3
    var publication = this;                                                                                      // 4
                                                                                                                 //
    categories.forEach(function (category) {                                                                     // 6
      var childrenCategories = category.getChildren();                                                           // 7
      var categoryIds = [category._id].concat(_.pluck(childrenCategories, "_id"));                               // 8
      var cursor = Posts.find({ $and: [{ categories: { $in: categoryIds } }, { status: Posts.config.STATUS_APPROVED }] });
      Counts.publish(publication, category.getCounterName(), cursor, { noReady: true });                         // 10
    });                                                                                                          //
                                                                                                                 //
    return categories;                                                                                           // 13
  }                                                                                                              //
  return [];                                                                                                     // 15
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
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                  // 8
  TAPi18n.translations["ar"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                       // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("ar", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                  // 8
  TAPi18n.translations["bg"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                       // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["bg"][namespace], {"categories":"Категории","add_and_remove_categories":"Добавяне и изтриване на категории.","all_categories":"Всички","invalid_category":"Невалидна категория","categoriesBehavior":"Позволи на потребителя да филтрира по:","categories_behavior_one_at_a_time":"само една категория наведнъж","categories_behavior_multiple":"няколко категории наведнъж","hideEmptyCategories":"Скривай празните категории"});
TAPi18n._registerServerTranslator("bg", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                  // 8
  TAPi18n.translations["cs"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                       // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["cs"][namespace], {"categories":"Kategorie","add_and_remove_categories":"Přidat a odebrat kategorie.","all_categories":"Vše","invalid_category":"Litujeme, toto není platná kategorie"});
TAPi18n._registerServerTranslator("cs", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                  // 8
  TAPi18n.translations["da"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                       // 12
  TAPi18n.translations["da"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["da"][namespace], {"all_categories":"Alle"});                                      // 16
TAPi18n._registerServerTranslator("da", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                  // 8
  TAPi18n.translations["de"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                       // 12
  TAPi18n.translations["de"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["de"][namespace], {"categories":"Kategorien"});                                    // 16
TAPi18n._registerServerTranslator("de", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                  // 8
  TAPi18n.translations["el"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                       // 12
  TAPi18n.translations["el"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("el", namespace);                                                              // 17
                                                                                                                 // 18
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
TAPi18n._registerServerTranslator("en", namespace);                                                              // 12
                                                                                                                 // 13
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
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                  // 8
  TAPi18n.translations["es"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                       // 12
  TAPi18n.translations["es"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["es"][namespace], {"categories":"Categorías","add_and_remove_categories":"Agregar y eliminar categorías","all_categories":"Todos","invalid_category":"Lo sentimos, esa no es una categoría válida"});
TAPi18n._registerServerTranslator("es", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                  // 8
  TAPi18n.translations["et"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                       // 12
  TAPi18n.translations["et"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["et"][namespace], {"categories":"Kategooriad","add_and_remove_categories":"Lisa ja eemalda kategooriaid.","all_categories":"Kõik","invalid_category":"Vabandame, see ei ole kehtiv kategooria"});
TAPi18n._registerServerTranslator("et", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                  // 8
  TAPi18n.translations["fr"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                       // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["fr"][namespace], {"categories":"Catégories","add_and_remove_categories":"Ajoutez et supprimez des catégories.","all_categories":"Tous","invalid_category":"Cette catégorie n'est pas valide"});
TAPi18n._registerServerTranslator("fr", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                  // 8
  TAPi18n.translations["hu"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                       // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                  // 8
  TAPi18n.translations["id"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                       // 12
  TAPi18n.translations["id"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["id"][namespace], {"categories":"Kategori","add_and_remove_categories":"Menambah dan menghapus kategori.","all_categories":"Semua","invalid_category":"Maaf, ini bukan kategori valid"});
TAPi18n._registerServerTranslator("id", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                  // 8
  TAPi18n.translations["it"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                       // 12
  TAPi18n.translations["it"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["it"][namespace], {"categories":"Categorie","add_and_remove_categories":"Aggiungi e rimuovi categorie.","all_categories":"Tutti","invalid_category":"Ci spiace, questa non è una categoria valida"});
TAPi18n._registerServerTranslator("it", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                  // 8
  TAPi18n.translations["ja"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                       // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                  // 8
  TAPi18n.translations["kk"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                       // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                  // 8
  TAPi18n.translations["ko"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                       // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["ko"][namespace], {"categories":"카테고리","add_and_remove_categories":"카테고리 추가/삭제"});
TAPi18n._registerServerTranslator("ko", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                  // 8
  TAPi18n.translations["nl"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                       // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("nl", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                  // 8
  TAPi18n.translations["pl"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                       // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["pl"][namespace], {"categories":"Kategorie","add_and_remove_categories":"Dodaj/Usuń kategorie."});
TAPi18n._registerServerTranslator("pl", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                               // 8
  TAPi18n.translations["pt-BR"] = {};                                                                            // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                    // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                 // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"categories":"Categorias","add_and_remove_categories":"Adicionar e remover categorias."});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                           // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                  // 8
  TAPi18n.translations["ro"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                       // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["ro"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("ro", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                  // 8
  TAPi18n.translations["ru"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                       // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("ru", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                  // 8
  TAPi18n.translations["sl"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                       // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["sl"][namespace], {"categories":"Kategorije","add_and_remove_categories":"Dodaj in odstrani kategorije.","all_categories":"Vse","invalid_category":"Žal, to ni veljavna kategorija"});
TAPi18n._registerServerTranslator("sl", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                  // 8
  TAPi18n.translations["sv"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                       // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["sv"][namespace], {"categories":"Kategorier","add_and_remove_categories":"Lägg till och ta bort kategorier.","all_categories":"Allt","invalid_category":"Tyvärr är detta inte en giltig kategori"});
TAPi18n._registerServerTranslator("sv", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                  // 8
  TAPi18n.translations["th"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                       // 12
  TAPi18n.translations["th"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("th", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                  // 8
  TAPi18n.translations["tr"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                       // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["tr"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("tr", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                  // 8
  TAPi18n.translations["vi"] = {};                                                                               // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                       // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                    // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                                             // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                              // 17
                                                                                                                 // 18
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
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                               // 8
  TAPi18n.translations["zh-CN"] = {};                                                                            // 9
}                                                                                                                // 10
                                                                                                                 // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                    // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                 // 13
}                                                                                                                // 14
                                                                                                                 // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"categories":"分类"});                                         // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                           // 17
                                                                                                                 // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:tags'] = {
  Categories: Categories
};

})();

//# sourceMappingURL=telescope_tags.js.map
