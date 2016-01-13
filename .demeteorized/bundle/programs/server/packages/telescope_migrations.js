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
var Migrations, allMigrations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_migrations/lib/server/migrations.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// TODO: switch over to Tom's migration package.                                                                       //
                                                                                                                       //
// database migrations                                                                                                 //
// http://stackoverflow.com/questions/10365496/meteor-how-to-perform-database-migrations                               //
Migrations = new Meteor.Collection('migrations');                                                                      // 5
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 7
  allMigrations = Object.keys(migrationsList);                                                                         // 8
  _.each(allMigrations, function (migrationName) {                                                                     // 9
    runMigration(migrationName);                                                                                       // 10
  });                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
Meteor.methods({                                                                                                       // 14
  removeMigration: function (name) {                                                                                   // 15
    check(name, String);                                                                                               // 16
    if (Users.is.admin(Meteor.user())) {                                                                               // 17
      console.log('// removing migration: ' + name);                                                                   // 18
      Migrations.remove({ name: name });                                                                               // 19
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
// wrapper function for all migrations                                                                                 //
var runMigration = function (migrationName) {                                                                          // 25
  var migration = Migrations.findOne({ name: migrationName });                                                         // 26
                                                                                                                       //
  if (migration) {                                                                                                     // 28
    if (typeof migration.finishedAt === 'undefined') {                                                                 // 29
      // if migration exists but hasn't finished, remove it and start fresh                                            //
      console.log('!!! Found incomplete migration "' + migrationName + '", removing and running again.');              // 31
      Migrations.remove({ name: migrationName });                                                                      // 32
    } else {                                                                                                           //
      // do nothing                                                                                                    //
      // console.log('Migration "'+migrationName+'" already exists, doing nothing.')                                   //
      return;                                                                                                          // 36
    }                                                                                                                  //
  }                                                                                                                    //
                                                                                                                       //
  console.log("//----------------------------------------------------------------------//");                           // 40
  console.log("//------------//    Starting " + migrationName + " Migration    //-----------//");                      // 41
  console.log("//----------------------------------------------------------------------//");                           // 42
  Migrations.insert({ name: migrationName, startedAt: new Date(), completed: false });                                 // 43
                                                                                                                       //
  // execute migration function                                                                                        //
  var itemsAffected = migrationsList[migrationName]() || 0;                                                            // 46
                                                                                                                       //
  Migrations.update({ name: migrationName }, { $set: { finishedAt: new Date(), completed: true, itemsAffected: itemsAffected } });
  console.log("//----------------------------------------------------------------------//");                           // 49
  console.log("//------------//     Ending " + migrationName + " Migration     //-----------//");                      // 50
  console.log("//----------------------------------------------------------------------//");                           // 51
};                                                                                                                     //
                                                                                                                       //
var migrationsList = {                                                                                                 // 54
  updatePostStatus: function () {                                                                                      // 55
    var i = 0;                                                                                                         // 56
    Posts.find({ status: { $exists: false } }).forEach(function (post) {                                               // 57
      i++;                                                                                                             // 58
      Posts.update(post._id, { $set: { status: 2 } });                                                                 // 59
      console.log("---------------------");                                                                            // 60
      console.log("Post: " + post.title);                                                                              // 61
      console.log("Updating status to approved");                                                                      // 62
    });                                                                                                                //
    return i;                                                                                                          // 64
  },                                                                                                                   //
  updateCategories: function () {                                                                                      // 66
    if (typeof Categories === "undefined" || Categories === null) return;                                              // 67
    var i = 0;                                                                                                         // 68
    Categories.find({ slug: { $exists: false } }).forEach(function (category) {                                        // 69
      i++;                                                                                                             // 70
      var slug = Telescope.utils.slugify(category.name);                                                               // 71
      Categories.update(category._id, { $set: { slug: slug } });                                                       // 72
      console.log("---------------------");                                                                            // 73
      console.log("Category: " + category.name);                                                                       // 74
      console.log("Updating category with new slug: " + slug);                                                         // 75
    });                                                                                                                //
    return i;                                                                                                          // 77
  },                                                                                                                   //
  updatePostCategories: function () {                                                                                  // 79
    if (typeof Categories === "undefined" || Categories === null) return;                                              // 80
    var i = 0;                                                                                                         // 81
    Posts.find().forEach(function (post) {                                                                             // 82
      i++;                                                                                                             // 83
      var oldCategories = post.categories;                                                                             // 84
      var newCategories = [];                                                                                          // 85
      var category = {};                                                                                               // 86
      var updating = false; // by default, assume we're not going to do anything                                       // 87
                                                                                                                       //
      // iterate over the post.categories array                                                                        //
      // if the post has no categories then nothing will happen                                                        //
      _.each(oldCategories, function (value) {                                                                         // 91
        // make sure the categories are strings                                                                        //
        if (typeof value === "string" && (category = Categories.findOne({ name: value }))) {                           // 93
          // if value is a string, then look for the matching category object                                          //
          // and if it exists push it to the newCategories array                                                       //
          updating = true; // we're updating at least one category for this post                                       // 96
          newCategories.push(category);                                                                                // 97
        } else {                                                                                                       //
          // if category A) is already an object, or B) it's a string but a matching category object doesn't exist     //
          // just keep the current value                                                                               //
          newCategories.push(value);                                                                                   // 101
        }                                                                                                              //
      });                                                                                                              //
                                                                                                                       //
      if (updating) {                                                                                                  // 105
        // update categories property on post                                                                          //
        Posts.update(post._id, { $set: { categories: newCategories } });                                               // 107
      }                                                                                                                //
                                                                                                                       //
      // START CONSOLE LOGS                                                                                            //
      console.log("---------------------");                                                                            // 111
      console.log("Post: " + post.title);                                                                              // 112
      if (updating) {                                                                                                  // 113
        console.log(oldCategories.length + " categories: " + oldCategories);                                           // 114
        console.log("Updating categories array to: ");                                                                 // 115
        console.log(newCategories);                                                                                    // 116
      } else {                                                                                                         //
        console.log("No updates");                                                                                     // 118
      }                                                                                                                //
      // END CONSOLE LOGS                                                                                              //
    });                                                                                                                //
    return i;                                                                                                          // 122
  },                                                                                                                   //
  updateUserProfiles: function () {                                                                                    // 124
    var i = 0;                                                                                                         // 125
    var allUsers = Meteor.users.find();                                                                                // 126
    console.log('> Found ' + allUsers.count() + ' users.\n');                                                          // 127
                                                                                                                       //
    allUsers.forEach(function (user) {                                                                                 // 129
      i++;                                                                                                             // 130
      console.log('> Updating user ' + user._id + ' (' + user.username + ')');                                         // 131
                                                                                                                       //
      var properties = {};                                                                                             // 133
      properties.telescope = {};                                                                                       // 134
      // update user slug                                                                                              //
      if (Users.getUserName(user)) properties.slug = Telescope.utils.slugify(Users.getUserName(user));                 // 136
                                                                                                                       //
      // update user isAdmin flag                                                                                      //
      if (typeof user.isAdmin === 'undefined') properties.isAdmin = false;                                             // 140
                                                                                                                       //
      // update postCount                                                                                              //
      var postsByUser = Posts.find({ userId: user._id });                                                              // 144
      properties.telescope.postCount = postsByUser.count();                                                            // 145
                                                                                                                       //
      // update commentCount                                                                                           //
      var commentsByUser = Comments.find({ userId: user._id });                                                        // 148
      properties.telescope.commentCount = commentsByUser.count();                                                      // 149
                                                                                                                       //
      Meteor.users.update(user._id, { $set: properties });                                                             // 151
    });                                                                                                                //
    return i;                                                                                                          // 154
  },                                                                                                                   //
  resetUpvotesDownvotes: function () {                                                                                 // 156
    var i = 0;                                                                                                         // 157
    Posts.find().forEach(function (post) {                                                                             // 158
      i++;                                                                                                             // 159
      var upvotes = 0,                                                                                                 // 160
          downvotes = 0;                                                                                               //
      console.log("Post: " + post.title);                                                                              // 162
      if (post.upvoters) {                                                                                             // 163
        upvotes = post.upvoters.length;                                                                                // 164
        console.log("Found " + upvotes + " upvotes.");                                                                 // 165
      }                                                                                                                //
      if (post.downvoters) {                                                                                           // 167
        downvotes = post.downvoters.length;                                                                            // 168
        console.log("Found " + downvotes + " downvotes.");                                                             // 169
      }                                                                                                                //
      Posts.update(post._id, { $set: { upvotes: upvotes, downvotes: downvotes } });                                    // 171
      console.log("---------------------");                                                                            // 172
    });                                                                                                                //
    return i;                                                                                                          // 174
  },                                                                                                                   //
  resetCommentsUpvotesDownvotes: function () {                                                                         // 176
    var i = 0;                                                                                                         // 177
    Comments.find().forEach(function (comment) {                                                                       // 178
      i++;                                                                                                             // 179
      var upvotes = 0,                                                                                                 // 180
          downvotes = 0;                                                                                               //
      console.log("Comment: " + comment._id);                                                                          // 182
      if (comment.upvoters) {                                                                                          // 183
        upvotes = comment.upvoters.length;                                                                             // 184
        console.log("Found " + upvotes + " upvotes.");                                                                 // 185
      }                                                                                                                //
      if (comment.downvoters) {                                                                                        // 187
        downvotes = comment.downvoters.length;                                                                         // 188
        console.log("Found " + downvotes + " downvotes.");                                                             // 189
      }                                                                                                                //
      Comments.update(comment._id, { $set: { upvotes: upvotes, downvotes: downvotes } });                              // 191
      console.log("---------------------");                                                                            // 192
    });                                                                                                                //
    return i;                                                                                                          // 194
  },                                                                                                                   //
  headlineToTitle: function () {                                                                                       // 196
    var i = 0;                                                                                                         // 197
    Posts.find({ title: { $exists: false } }).forEach(function (post) {                                                // 198
      i++;                                                                                                             // 199
      console.log("Post: " + post.headline + " " + post.title);                                                        // 200
      Posts.update(post._id, { $rename: { 'headline': 'title' } }, { multi: true, validate: false });                  // 201
      console.log("---------------------");                                                                            // 202
    });                                                                                                                //
    return i;                                                                                                          // 204
  },                                                                                                                   //
  commentsSubmittedToCreatedAt: function () {                                                                          // 206
    var i = 0;                                                                                                         // 207
    Comments.find({ createdAt: { $exists: false } }).forEach(function (comment) {                                      // 208
      i++;                                                                                                             // 209
      console.log("Comment: " + comment._id);                                                                          // 210
      Comments.update(comment._id, { $rename: { 'submitted': 'createdAt' } }, { multi: true, validate: false });       // 211
      console.log("---------------------");                                                                            // 212
    });                                                                                                                //
    return i;                                                                                                          // 214
  },                                                                                                                   //
  commentsPostToPostId: function () {                                                                                  // 216
    var i = 0;                                                                                                         // 217
    Comments.find({ postId: { $exists: false } }).forEach(function (comment) {                                         // 218
      i++;                                                                                                             // 219
      console.log("Comment: " + comment._id);                                                                          // 220
      Comments.update(comment._id, { $rename: { 'post': 'postId' } }, { multi: true, validate: false });               // 221
      console.log("---------------------");                                                                            // 222
    });                                                                                                                //
    return i;                                                                                                          // 224
  },                                                                                                                   //
  createdAtSubmittedToDate: function () {                                                                              // 226
    var i = 0;                                                                                                         // 227
    Posts.find().forEach(function (post) {                                                                             // 228
      if (typeof post.submitted === "number" || typeof post.createdAt === "number") {                                  // 229
        i++;                                                                                                           // 230
        console.log("Posts: " + post.title);                                                                           // 231
        var createdAt = new Date(post.createdAt);                                                                      // 232
        var submitted = new Date(post.submitted);                                                                      // 233
        console.log(createdAt);                                                                                        // 234
        Posts.update(post._id, { $set: { 'createdAt': createdAt, submitted: submitted } }, { multi: true, validate: false });
        console.log("---------------------");                                                                          // 236
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 239
  },                                                                                                                   //
  commentsCreatedAtToDate: function () {                                                                               // 241
    var i = 0;                                                                                                         // 242
    Comments.find().forEach(function (comment) {                                                                       // 243
      if (typeof comment.createdAt === "number") {                                                                     // 244
        i++;                                                                                                           // 245
        console.log("Comment: " + comment._id);                                                                        // 246
        var createdAt = new Date(comment.createdAt);                                                                   // 247
        console.log(createdAt);                                                                                        // 248
        Comments.update(comment._id, { $set: { 'createdAt': createdAt } }, { multi: true, validate: false });          // 249
        console.log("---------------------");                                                                          // 250
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 253
  },                                                                                                                   //
  submittedToPostedAt: function () {                                                                                   // 255
    var i = 0;                                                                                                         // 256
    Posts.find({ postedAt: { $exists: false } }).forEach(function (post) {                                             // 257
      i++;                                                                                                             // 258
      console.log("Post: " + post._id);                                                                                // 259
      Posts.update(post._id, { $rename: { 'submitted': 'postedAt' } }, { multi: true, validate: false });              // 260
      console.log("---------------------");                                                                            // 261
    });                                                                                                                //
    return i;                                                                                                          // 263
  },                                                                                                                   //
  addPostedAtToComments: function () {                                                                                 // 265
    var i = 0;                                                                                                         // 266
    Comments.find({ postedAt: { $exists: false } }).forEach(function (comment) {                                       // 267
      i++;                                                                                                             // 268
      console.log("Comment: " + comment._id);                                                                          // 269
      Comments.update(comment._id, { $set: { 'postedAt': comment.createdAt } }, { multi: true, validate: false });     // 270
      console.log("---------------------");                                                                            // 271
    });                                                                                                                //
    return i;                                                                                                          // 273
  },                                                                                                                   //
  parentToParentCommentId: function () {                                                                               // 275
    var i = 0;                                                                                                         // 276
    Comments.find({ parent: { $exists: true }, parentCommentId: { $exists: false } }).forEach(function (comment) {     // 277
      i++;                                                                                                             // 278
      console.log("Comment: " + comment._id);                                                                          // 279
      Comments.update(comment._id, { $set: { 'parentCommentId': comment.parent } }, { multi: true, validate: false });
      console.log("---------------------");                                                                            // 281
    });                                                                                                                //
    return i;                                                                                                          // 283
  },                                                                                                                   //
  addLastCommentedAt: function () {                                                                                    // 285
    var i = 0;                                                                                                         // 286
    Posts.find({ $and: [{ $or: [{ comments: { $gt: 0 } }, { commentCount: { $gt: 0 } }] }, { lastCommentedAt: { $exists: false } }] }).forEach(function (post) {
      i++;                                                                                                             // 291
      console.log("Post: " + post._id);                                                                                // 292
      var postComments = Comments.find({ $or: [{ postId: post._id }, { post: post._id }] }, { sort: { postedAt: -1 } }).fetch();
      var lastComment;                                                                                                 // 294
      if (_.isEmpty(postComments)) {                                                                                   // 295
        console.log('postComments from post ' + post._id + ' is empty. Skipping.');                                    // 296
        return;                                                                                                        // 297
      }                                                                                                                //
      lastComment = postComments[0];                                                                                   // 299
      Posts.update(post._id, { $set: { lastCommentedAt: lastComment.postedAt } }, { multi: false, validate: false });  // 300
      console.log("---------------------");                                                                            // 301
    });                                                                                                                //
    return i;                                                                                                          // 303
  },                                                                                                                   //
  commentsToCommentCount: function () {                                                                                // 305
    var i = 0;                                                                                                         // 306
    Posts.find({ comments: { $exists: true }, commentCount: { $exists: false } }).forEach(function (post) {            // 307
      i++;                                                                                                             // 308
      console.log("Post: " + post._id);                                                                                // 309
      Posts.update(post._id, { $set: { 'commentCount': post.comments }, $unset: { 'comments': '' } }, { multi: true, validate: false });
      console.log("---------------------");                                                                            // 311
    });                                                                                                                //
    return i;                                                                                                          // 313
  },                                                                                                                   //
  addCommentersToPosts: function () {                                                                                  // 315
    var i = 0;                                                                                                         // 316
    Comments.find().forEach(function (comment) {                                                                       // 317
      i++;                                                                                                             // 318
      console.log("Comment: " + comment._id);                                                                          // 319
      console.log("Post: " + comment.postId);                                                                          // 320
      Posts.update(comment.postId, { $addToSet: { 'commenters': comment.userId } }, { multi: true, validate: false });
      console.log("---------------------");                                                                            // 322
    });                                                                                                                //
    return i;                                                                                                          // 324
  },                                                                                                                   //
  moveVotesFromProfile: function () {                                                                                  // 326
    var i = 0;                                                                                                         // 327
    Meteor.users.find().forEach(function (user) {                                                                      // 328
      i++;                                                                                                             // 329
      console.log("User: " + user._id);                                                                                // 330
      Meteor.users.update(user._id, {                                                                                  // 331
        $rename: {                                                                                                     // 332
          'profile.upvotedPosts': 'telescope.upvotedPosts',                                                            // 333
          'profile.downvotedPosts': 'telescope.downvotedPosts',                                                        // 334
          'profile.upvotedComments': 'telescope.upvotedComments',                                                      // 335
          'profile.downvotedComments': 'telescope.downvotedComments'                                                   // 336
        }                                                                                                              //
      }, { multi: true, validate: false });                                                                            //
      console.log("---------------------");                                                                            // 339
    });                                                                                                                //
    return i;                                                                                                          // 341
  },                                                                                                                   //
  addHTMLBody: function () {                                                                                           // 343
    var i = 0;                                                                                                         // 344
    Posts.find({ body: { $exists: true } }).forEach(function (post) {                                                  // 345
      i++;                                                                                                             // 346
      var htmlBody = Telescope.utils.sanitize(marked(post.body));                                                      // 347
      console.log("Post: " + post._id);                                                                                // 348
      Posts.update(post._id, { $set: { 'htmlBody': htmlBody } }, { multi: true, validate: false });                    // 349
      console.log("---------------------");                                                                            // 350
    });                                                                                                                //
    return i;                                                                                                          // 352
  },                                                                                                                   //
  addHTMLComment: function () {                                                                                        // 354
    var i = 0;                                                                                                         // 355
    Comments.find({ body: { $exists: true } }).forEach(function (comment) {                                            // 356
      i++;                                                                                                             // 357
      var htmlBody = Telescope.utils.sanitize(marked(comment.body));                                                   // 358
      console.log("Comment: " + comment._id);                                                                          // 359
      Comments.update(comment._id, { $set: { 'htmlBody': htmlBody } }, { multi: true, validate: false });              // 360
      console.log("---------------------");                                                                            // 361
    });                                                                                                                //
    return i;                                                                                                          // 363
  },                                                                                                                   //
  clicksToClickCount: function () {                                                                                    // 365
    var i = 0;                                                                                                         // 366
    Posts.find({ "clicks": { $exists: true }, "clickCount": { $exists: false } }).forEach(function (post) {            // 367
      i++;                                                                                                             // 368
      console.log("Post: " + post._id);                                                                                // 369
      Posts.update(post._id, { $set: { 'clickCount': post.clicks }, $unset: { 'clicks': '' } }, { multi: true, validate: false });
      console.log("---------------------");                                                                            // 371
    });                                                                                                                //
    return i;                                                                                                          // 373
  },                                                                                                                   //
  commentsCountToCommentCount: function () {                                                                           // 375
    var i = 0;                                                                                                         // 376
    Posts.find({ "commentCount": { $exists: false } }).forEach(function (post) {                                       // 377
      i++;                                                                                                             // 378
      console.log("Post: " + post._id);                                                                                // 379
      Posts.update({ _id: post._id }, { $set: { 'commentCount': post.commentsCount }, $unset: { 'commentsCount': "" } }, { multi: true, validate: false });
      console.log("---------------------");                                                                            // 381
    });                                                                                                                //
    return i;                                                                                                          // 383
  },                                                                                                                   //
  userDataCommentsCountToCommentCount: function () {                                                                   // 385
    var i = 0;                                                                                                         // 386
    Meteor.users.find({ 'commentCount': { $exists: false } }).forEach(function (user) {                                // 387
      i++;                                                                                                             // 388
      var commentCount = Comments.find({ userId: user._id }).count();                                                  // 389
      console.log("User: " + user._id);                                                                                // 390
      Meteor.users.update(user._id, { $set: { telescope: { 'commentCount': commentCount } } });                        // 391
      console.log("---------------------");                                                                            // 392
    });                                                                                                                //
    return i;                                                                                                          // 394
  },                                                                                                                   //
  clicksToClickCountForRealThisTime: function () {                                                                     // 396
    // since both fields might be co-existing, add to clickCount instead of overwriting it                             //
    var i = 0;                                                                                                         // 397
    Posts.find({ 'clicks': { $exists: true } }).forEach(function (post) {                                              // 398
      i++;                                                                                                             // 399
      console.log("Post: " + post._id);                                                                                // 400
      Posts.update(post._id, { $inc: { 'clickCount': post.clicks }, $unset: { 'clicks': "" } }, { multi: true, validate: false });
      console.log("---------------------");                                                                            // 402
    });                                                                                                                //
    return i;                                                                                                          // 404
  },                                                                                                                   //
  normalizeCategories: function () {                                                                                   // 406
    var i = 0;                                                                                                         // 407
    Posts.find({ 'categories': { $exists: true } }).forEach(function (post) {                                          // 408
      i++;                                                                                                             // 409
      console.log("Post: " + post._id);                                                                                // 410
      var justCategoryIds = post.categories.map(function (category) {                                                  // 411
        return category._id;                                                                                           // 412
      });                                                                                                              //
      Posts.update(post._id, { $set: { categories: justCategoryIds, oldCategories: post.categories } }, { multi: true, validate: false });
      console.log("---------------------");                                                                            // 415
    });                                                                                                                //
    return i;                                                                                                          // 417
  },                                                                                                                   //
  cleanUpStickyProperty: function () {                                                                                 // 419
    var i = 0;                                                                                                         // 420
    Posts.find({ 'sticky': { $exists: false } }).forEach(function (post) {                                             // 421
      i++;                                                                                                             // 422
      console.log("Post: " + post._id);                                                                                // 423
      Posts.update(post._id, { $set: { sticky: false } }, { multi: true, validate: false });                           // 424
      console.log("---------------------");                                                                            // 425
    });                                                                                                                //
    return i;                                                                                                          // 427
  },                                                                                                                   //
  show0112ReleaseNotes: function () {                                                                                  // 429
    var i = 0;                                                                                                         // 430
    // if this is the 0.11.2 update, the first run event will not exist yet.                                           //
    // if that's the case, make sure to still show release notes                                                       //
    if (!Events.findOne({ name: 'firstRun' })) {                                                                       // 433
      Releases.update({ number: '0.11.2' }, { $set: { read: false } });                                                // 434
    }                                                                                                                  //
    return i;                                                                                                          // 436
  },                                                                                                                   //
  removeThumbnailHTTP: function () {                                                                                   // 438
    var i = 0;                                                                                                         // 439
    Posts.find({ thumbnailUrl: { $exists: true } }).forEach(function (post) {                                          // 440
      i++;                                                                                                             // 441
      var newThumbnailUrl = post.thumbnailUrl.replace("http:", "");                                                    // 442
      console.log("Post: " + post._id);                                                                                // 443
      Posts.update(post._id, { $set: { 'thumbnailUrl': newThumbnailUrl } }, { multi: true, validate: false });         // 444
      console.log("---------------------");                                                                            // 445
    });                                                                                                                //
    return i;                                                                                                          // 447
  },                                                                                                                   //
  updateUserNames: function () {                                                                                       // 449
    var i = 0;                                                                                                         // 450
    var allUsers = Meteor.users.find({ username: { $exists: true }, profile: { $exists: true }, 'profile.isDummy': { $ne: true } });
                                                                                                                       //
    console.log('> Found ' + allUsers.count() + ' users.\n');                                                          // 453
                                                                                                                       //
    allUsers.forEach(function (user) {                                                                                 // 455
      i++;                                                                                                             // 456
                                                                                                                       //
      // Perform the same transforms done by useraccounts with `lowercaseUsernames` set to `true`                      //
      var oldUsername = user.username;                                                                                 // 459
      var username = user.username;                                                                                    // 460
      username = username.trim().replace(/\s+/gm, ' ');                                                                // 461
      user.profile.username = user.profile.name || username;                                                           // 462
      delete user.profile.name;                                                                                        // 463
      username = username.toLowerCase().replace(/\s+/gm, '');                                                          // 464
      user.username = username;                                                                                        // 465
                                                                                                                       //
      if (user.emails && user.emails.length > 0) {                                                                     // 467
        _.each(user.emails, function (email) {                                                                         // 468
          email.address = email.address.toLowerCase().replace(/\s+/gm, '');                                            // 469
        });                                                                                                            //
      }                                                                                                                //
                                                                                                                       //
      console.log('> Updating user ' + user._id + ' (' + oldUsername + ' -> ' + user.username + ')');                  // 473
                                                                                                                       //
      try {                                                                                                            // 475
        Meteor.users.update(user._id, {                                                                                // 476
          $set: {                                                                                                      // 477
            emails: user.emails,                                                                                       // 478
            profile: user.profile,                                                                                     // 479
            username: user.username                                                                                    // 480
          }                                                                                                            //
        });                                                                                                            //
      } catch (err) {                                                                                                  //
        console.warn('> Unable to convert username ' + user.username + ' to lowercase!');                              // 485
        console.warn('> Please try to fix it by hand!! :(');                                                           // 486
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 489
  },                                                                                                                   //
  changeColorNames: function () {                                                                                      // 491
    var i = 0;                                                                                                         // 492
    var settings = Settings.findOne();                                                                                 // 493
    var set = {};                                                                                                      // 494
                                                                                                                       //
    if (!!settings) {                                                                                                  // 496
                                                                                                                       //
      if (!!settings.buttonColor) set.accentColor = settings.buttonColor;                                              // 498
                                                                                                                       //
      if (!!settings.buttonTextColor) set.accentContrastColor = settings.buttonTextColor;                              // 501
                                                                                                                       //
      if (!!settings.buttonColor) set.secondaryColor = settings.headerColor;                                           // 504
                                                                                                                       //
      if (!!settings.buttonColor) set.secondaryContrastColor = settings.headerTextColor;                               // 507
                                                                                                                       //
      if (!_.isEmpty(set)) {                                                                                           // 510
        Settings.update(settings._id, { $set: set }, { validate: false });                                             // 511
      }                                                                                                                //
    }                                                                                                                  //
    return i;                                                                                                          // 515
  },                                                                                                                   //
  migrateUserProfiles: function () {                                                                                   // 517
    var i = 0;                                                                                                         // 518
    var allUsers = Meteor.users.find({ telescope: { $exists: false } });                                               // 519
    console.log('> Found ' + allUsers.count() + ' users.\n');                                                          // 520
                                                                                                                       //
    allUsers.forEach(function (user) {                                                                                 // 522
      i++;                                                                                                             // 523
                                                                                                                       //
      console.log('> Updating user ' + user._id + ' (' + user.username + ')');                                         // 525
                                                                                                                       //
      var telescopeUserData = {};                                                                                      // 527
                                                                                                                       //
      // loop over user data schema                                                                                    //
      _.each(Telescope.schemas.userData._schema, function (property, key) {                                            // 530
                                                                                                                       //
        if (!!user[key]) {                                                                                             // 532
          // look for property on root of user object                                                                  //
          telescopeUserData[key] = user[key];                                                                          // 533
        } else if (user.votes && !!user.votes[key]) {                                                                  //
          // look for it in user.votes object                                                                          //
          telescopeUserData[key] = user.votes[key];                                                                    // 535
        } else if (user.profile && user.profile[key]) {                                                                //
          // look for it in user.profile object                                                                        //
          telescopeUserData[key] = user.profile[key];                                                                  // 537
        }                                                                                                              //
      });                                                                                                              //
                                                                                                                       //
      // console.log(telescopeUserData);                                                                               //
                                                                                                                       //
      try {                                                                                                            // 544
        Meteor.users.update(user._id, {                                                                                // 545
          $set: {                                                                                                      // 546
            telescope: telescopeUserData                                                                               // 547
          }                                                                                                            //
        });                                                                                                            //
      } catch (err) {                                                                                                  //
        console.log(err);                                                                                              // 551
        console.warn('> Unable to migrate profile for user ' + user.username);                                         // 552
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 555
  },                                                                                                                   //
  migrateEmailHash: function () {                                                                                      // 557
    var i = 0;                                                                                                         // 558
    var allUsers = Meteor.users.find({ $and: [{ "email_hash": { $exists: true } }, { "telescope.emailHash": { $exists: false } }] });
    console.log('> Found ' + allUsers.count() + ' users.\n');                                                          // 560
                                                                                                                       //
    allUsers.forEach(function (user) {                                                                                 // 562
      i++;                                                                                                             // 563
                                                                                                                       //
      console.log('> Updating user ' + user._id + ' (' + user.username + ')');                                         // 565
                                                                                                                       //
      var emailHash = user.email_hash;                                                                                 // 567
      if (!!emailHash) {                                                                                               // 568
        Meteor.users.update(user._id, { $set: { "telescope.emailHash": emailHash } });                                 // 569
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 572
  },                                                                                                                   //
  // addTopLevelCommentIdToComments: function() {                                                                      //
  //   var i = 0;                                                                                                      //
                                                                                                                       //
  //   // find all root comments and set topLevelCommentId on their root children                                      //
  //   Comments.find({parentCommentId: {$exists : false}}).forEach(function (comment) {                                //
                                                                                                                       //
  //     // topLevelCommentId is the root comment._id                                                                  //
  //     var topLevelCommentId = comment._id;                                                                          //
  //     console.log("Root Comment found: " + topLevelCommentId);                                                      //
                                                                                                                       //
  //     // find childComments that have this root comment as parentCommentId                                          //
  //     Comments.find({parentCommentId: comment._id}).forEach(function (childComment) {                               //
  //       i++;                                                                                                        //
  //       updateParentAndChild(topLevelCommentId, childComment._id);                                                  //
  //     });                                                                                                           //
                                                                                                                       //
  //   });                                                                                                             //
                                                                                                                       //
  //   function updateParentAndChild(topLevelCommentId, parentId) {                                                    //
                                                                                                                       //
  //     i++;                                                                                                          //
  //     console.log("Parent Comment: " + parentId, " top level comment " + topLevelCommentId);                        //
                                                                                                                       //
  //     Comments.update(parentId, {$set: {'topLevelCommentId': topLevelCommentId}}, {multi: false, validate: false});
                                                                                                                       //
  //     var childComments = Comments.find({topLevelCommentId: {$exists : false}, parentCommentId: parentId});         //
                                                                                                                       //
  //     console.log('> Found '+childComments.count()+' child comments.\n');                                           //
                                                                                                                       //
  //     childComments.forEach(function(childComment){                                                                 //
  //       i++;                                                                                                        //
                                                                                                                       //
  //       // find all nested childComments and set topLevelCommentId                                                  //
  //       console.log("Child Comment: " + childComment._id, " top level comment " + topLevelCommentId);               //
                                                                                                                       //
  //       // set nested childComment to use parent's topLevelCommentId                                                //
  //       Comments.update(childComment._id, {$set: {'topLevelCommentId': topLevelCommentId}}, {multi: false, validate: false});
  //       updateParentAndChild(topLevelCommentId, childComment._id, true);                                            //
  //     });                                                                                                           //
                                                                                                                       //
  //   }                                                                                                               //
  //   console.log("---------------------");                                                                           //
  //   return i;                                                                                                       //
  // },                                                                                                                //
  migrateDisplayName: function () {                                                                                    // 618
    var i = 0;                                                                                                         // 619
    var displayName;                                                                                                   // 620
    var allUsers = Meteor.users.find({ "telescope.displayName": { $exists: false } });                                 // 621
    console.log('> Found ' + allUsers.count() + ' users.\n');                                                          // 622
                                                                                                                       //
    allUsers.forEach(function (user) {                                                                                 // 624
      i++;                                                                                                             // 625
                                                                                                                       //
      console.log('> Updating user ' + user._id + ' (' + user.username + ')');                                         // 627
      if (!!user.profile) {                                                                                            // 628
        displayName = user.profile.name || user.profile.username;                                                      // 629
      } else {                                                                                                         //
        displayName = user.username;                                                                                   // 631
      }                                                                                                                //
                                                                                                                       //
      console.log('name: ', displayName);                                                                              // 634
      if (!!displayName) {                                                                                             // 635
        Meteor.users.update(user._id, { $set: { "telescope.displayName": displayName } });                             // 636
      } else {                                                                                                         //
        console.log("displayName not found :(");                                                                       // 638
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 641
  },                                                                                                                   //
  migrateNewsletterSettings: function () {                                                                             // 643
    var i = 0;                                                                                                         // 644
    var allUsers = Meteor.users.find({                                                                                 // 645
      $or: [{ "profile.showBanner": { $exists: true } }, { "profile.subscribedToNewsletter": { $exists: true } }]      // 646
    });                                                                                                                //
    console.log('> Found ' + allUsers.count() + ' users.\n');                                                          // 651
                                                                                                                       //
    allUsers.forEach(function (user) {                                                                                 // 653
      i++;                                                                                                             // 654
      var displayName;                                                                                                 // 655
                                                                                                                       //
      if (!!user.profile) {                                                                                            // 657
        displayName = user.profile.name || user.profile.username;                                                      // 658
      } else {                                                                                                         //
        displayName = user.username;                                                                                   // 660
      }                                                                                                                //
                                                                                                                       //
      console.log('> Updating user ' + user._id + ' (' + displayName + ')');                                           // 663
                                                                                                                       //
      if (user.profile) {                                                                                              // 665
                                                                                                                       //
        var set = {};                                                                                                  // 667
                                                                                                                       //
        var showBanner = user.profile.showBanner;                                                                      // 669
        if (typeof showBanner !== "undefined") {                                                                       // 670
          set["telescope.newsletter.showBanner"] = showBanner;                                                         // 671
        }                                                                                                              //
                                                                                                                       //
        var subscribeToNewsletter = user.profile.subscribedToNewsletter;                                               // 674
        if (typeof subscribeToNewsletter !== "undefined") {                                                            // 675
          set["telescope.newsletter.subscribeToNewsletter"] = subscribeToNewsletter;                                   // 676
        }                                                                                                              //
        console.log(set);                                                                                              // 678
        if (!_.isEmpty(set)) {                                                                                         // 679
          Meteor.users.update(user._id, { $set: set });                                                                // 680
        }                                                                                                              //
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 686
  },                                                                                                                   //
  addSlugsToPosts: function () {                                                                                       // 688
    var i = 0;                                                                                                         // 689
    Posts.find({ slug: { $exists: false } }).forEach(function (post) {                                                 // 690
      i++;                                                                                                             // 691
      var slug = Telescope.utils.slugify(post.title);                                                                  // 692
      console.log("Post: " + post._id + " | " + slug);                                                                 // 693
      Posts.update(post._id, { $set: { 'slug': slug } });                                                              // 694
      console.log("---------------------");                                                                            // 695
    });                                                                                                                //
    return i;                                                                                                          // 697
  },                                                                                                                   //
  updateNewsletterFrequency: function () {                                                                             // 699
    var i = 0;                                                                                                         // 700
    Settings.find().forEach(function (setting) {                                                                       // 701
      if (!!setting.newsletterFrequency) {                                                                             // 702
        console.log("Migrating newsletter frequency… (" + setting.newsletterFrequency + ")");                          // 703
        i++;                                                                                                           // 704
        var days;                                                                                                      // 705
        switch (setting.newsletterFrequency) {                                                                         // 706
          case 1:                                                                                                      // 707
            days = [1, 2, 3, 4, 5, 6, 7];                                                                              // 708
            break;                                                                                                     // 709
          case 2:                                                                                                      // 709
            days = [2, 4, 6];                                                                                          // 711
            break;                                                                                                     // 712
          case 3:                                                                                                      // 712
            days = [2, 5];                                                                                             // 714
            break;                                                                                                     // 715
          default:                                                                                                     // 715
            days = [2];                                                                                                // 717
            break;                                                                                                     // 718
        }                                                                                                              // 718
        Settings.update(setting._id, { $set: { newsletterFrequency: days } });                                         // 720
      }                                                                                                                //
    });                                                                                                                //
    return i;                                                                                                          // 723
  },                                                                                                                   //
  changeOutsideLinksPointTo: function () {                                                                             // 725
    var i = 0;                                                                                                         // 726
    Settings.find({ outsideLinksPointTo: { $exists: true } }).forEach(function (setting) {                             // 727
      i++;                                                                                                             // 728
      Settings.update(setting._id, { $set: { RSSLinksPointTo: setting.outsideLinksPointTo } });                        // 729
    });                                                                                                                //
    return i;                                                                                                          // 731
  }                                                                                                                    //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:migrations'] = {
  Migrations: Migrations
};

})();

//# sourceMappingURL=telescope_migrations.js.map
