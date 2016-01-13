(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MailChimp = Package['miro:mailchimp'].MailChimp;
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
var __, Campaigns, defaultFrequency, defaultPosts, getCampaignPosts, buildCampaign, scheduleNextCampaign, scheduleCampaign, addToMailChimpList, Handlebars, translations, resetNewsletterSchedule;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/package-i18n.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
TAPi18n.packages["telescope:newsletter"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                       // 2
// define package's translation function (proxy to the i18next)                                                        // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                       // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/newsletter.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var campaignSchema = new SimpleSchema({                                                                                // 1
  _id: {                                                                                                               // 2
    type: String,                                                                                                      // 3
    optional: true                                                                                                     // 4
  },                                                                                                                   //
  createdAt: {                                                                                                         // 6
    type: Date,                                                                                                        // 7
    optional: true                                                                                                     // 8
  },                                                                                                                   //
  sentAt: {                                                                                                            // 10
    type: String,                                                                                                      // 11
    optional: true                                                                                                     // 12
  },                                                                                                                   //
  status: {                                                                                                            // 14
    type: String,                                                                                                      // 15
    optional: true                                                                                                     // 16
  },                                                                                                                   //
  posts: {                                                                                                             // 18
    type: [String],                                                                                                    // 19
    optional: true                                                                                                     // 20
  },                                                                                                                   //
  webHits: {                                                                                                           // 22
    type: Number,                                                                                                      // 23
    optional: true                                                                                                     // 24
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Campaigns = new Meteor.Collection("campaigns", {                                                                       // 28
  schema: campaignSchema                                                                                               // 29
});                                                                                                                    //
                                                                                                                       //
Posts.addField({                                                                                                       // 32
  fieldName: 'scheduledAt',                                                                                            // 33
  fieldSchema: {                                                                                                       // 34
    type: Date,                                                                                                        // 35
    optional: true,                                                                                                    // 36
    autoform: {                                                                                                        // 37
      omit: true                                                                                                       // 38
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Users.addField([{                                                                                                      // 43
  fieldName: 'telescope.newsletter.showBanner',                                                                        // 45
  fieldSchema: {                                                                                                       // 46
    label: 'Show banner',                                                                                              // 47
    type: Boolean,                                                                                                     // 48
    optional: true,                                                                                                    // 49
    editableBy: ['admin', 'member'],                                                                                   // 50
    autoform: {                                                                                                        // 51
      omit: true                                                                                                       // 52
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'telescope.newsletter.subscribeToNewsletter',                                                             // 57
  fieldSchema: {                                                                                                       // 58
    label: 'Subscribe to newsletter',                                                                                  // 59
    type: Boolean,                                                                                                     // 60
    optional: true,                                                                                                    // 61
    editableBy: ['admin', 'member'],                                                                                   // 62
    autoform: {                                                                                                        // 63
      omit: true                                                                                                       // 64
    }                                                                                                                  //
  }                                                                                                                    //
}]);                                                                                                                   //
                                                                                                                       //
// Settings                                                                                                            //
                                                                                                                       //
Settings.addField([{                                                                                                   // 72
  fieldName: 'enableNewsletter',                                                                                       // 74
  fieldSchema: {                                                                                                       // 75
    type: Boolean,                                                                                                     // 76
    optional: true,                                                                                                    // 77
    autoform: {                                                                                                        // 78
      group: 'newsletter',                                                                                             // 79
      instructions: 'Enable newsletter (requires restart).'                                                            // 80
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'showBanner',                                                                                             // 85
  fieldSchema: {                                                                                                       // 86
    type: Boolean,                                                                                                     // 87
    optional: true,                                                                                                    // 88
    label: 'Newsletter banner',                                                                                        // 89
    autoform: {                                                                                                        // 90
      group: 'newsletter',                                                                                             // 91
      instructions: 'Show newsletter sign-up form on the front page.'                                                  // 92
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: "mailChimpAPIKey",                                                                                        // 97
  fieldSchema: {                                                                                                       // 98
    type: String,                                                                                                      // 99
    optional: true,                                                                                                    // 100
    'private': true,                                                                                                   // 101
    autoform: {                                                                                                        // 102
      group: "newsletter",                                                                                             // 103
      'class': "private-field"                                                                                         // 104
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'mailChimpListId',                                                                                        // 109
  fieldSchema: {                                                                                                       // 110
    type: String,                                                                                                      // 111
    optional: true,                                                                                                    // 112
    'private': true,                                                                                                   // 113
    autoform: {                                                                                                        // 114
      group: 'newsletter',                                                                                             // 115
      instructions: 'The ID of the list you want to send to.',                                                         // 116
      'class': "private-field"                                                                                         // 117
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'postsPerNewsletter',                                                                                     // 122
  fieldSchema: {                                                                                                       // 123
    type: Number,                                                                                                      // 124
    optional: true,                                                                                                    // 125
    autoform: {                                                                                                        // 126
      group: 'newsletter'                                                                                              // 127
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'newsletterFrequency',                                                                                    // 132
  fieldSchema: {                                                                                                       // 133
    type: [Number],                                                                                                    // 134
    optional: true,                                                                                                    // 135
    autoform: {                                                                                                        // 136
      group: 'newsletter',                                                                                             // 137
      instructions: 'Defaults to once a week on Monday. Changes require restarting your app to take effect.',          // 138
      noselect: true,                                                                                                  // 139
      options: [{                                                                                                      // 140
        value: 1,                                                                                                      // 142
        label: 'Sunday'                                                                                                // 143
      }, {                                                                                                             //
        value: 2,                                                                                                      // 146
        label: 'Monday'                                                                                                // 147
      }, {                                                                                                             //
        value: 3,                                                                                                      // 150
        label: 'Tuesday'                                                                                               // 151
      }, {                                                                                                             //
        value: 4,                                                                                                      // 154
        label: 'Wednesday'                                                                                             // 155
      }, {                                                                                                             //
        value: 5,                                                                                                      // 158
        label: 'Thursday'                                                                                              // 159
      }, {                                                                                                             //
        value: 6,                                                                                                      // 162
        label: 'Friday'                                                                                                // 163
      }, {                                                                                                             //
        value: 7,                                                                                                      // 166
        label: 'Saturday'                                                                                              // 167
      }]                                                                                                               //
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'newsletterTime',                                                                                         // 174
  fieldSchema: {                                                                                                       // 175
    type: String,                                                                                                      // 176
    optional: true,                                                                                                    // 177
    defaultValue: '00:00',                                                                                             // 178
    autoform: {                                                                                                        // 179
      group: 'newsletter',                                                                                             // 180
      instructions: 'Defaults to 00:00/12:00 AM. Time to send out newsletter if enabled.',                             // 181
      type: 'time'                                                                                                     // 182
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'autoSubscribe',                                                                                          // 187
  fieldSchema: {                                                                                                       // 188
    type: Boolean,                                                                                                     // 189
    optional: true,                                                                                                    // 190
    autoform: {                                                                                                        // 191
      group: 'newsletter',                                                                                             // 192
      instructions: 'Automatically subscribe new users on sign-up.'                                                    // 193
    }                                                                                                                  //
  }                                                                                                                    //
}]);                                                                                                                   //
                                                                                                                       //
// create new "campaign" lens for all posts from the past X days that haven't been scheduled yet                       //
Posts.views.add("campaign", function (terms) {                                                                         // 200
  return {                                                                                                             // 201
    find: {                                                                                                            // 202
      scheduledAt: { $exists: false },                                                                                 // 203
      postedAt: {                                                                                                      // 204
        $gte: terms.after                                                                                              // 205
      }                                                                                                                //
    },                                                                                                                 //
    options: { sort: { baseScore: -1 } }                                                                               // 208
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
Telescope.modules.add("contentTop", {                                                                                  // 212
  template: 'newsletter_banner',                                                                                       // 213
  order: 1,                                                                                                            // 214
  only: ["postsDefault"]                                                                                               // 215
});                                                                                                                    //
                                                                                                                       //
function subscribeUserOnProfileCompletion(user) {                                                                      // 218
  if (!!Settings.get('autoSubscribe') && !!Users.getEmail(user)) {                                                     // 219
    addToMailChimpList(user, false, function (error, result) {                                                         // 220
      console.log(error);                                                                                              // 221
      console.log(result);                                                                                             // 222
    });                                                                                                                //
  }                                                                                                                    //
  return user;                                                                                                         // 225
}                                                                                                                      //
Telescope.callbacks.add("profileCompletedAsync", subscribeUserOnProfileCompletion);                                    // 227
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/server/campaign.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
defaultFrequency = 7;                                                                                                  // 1
defaultPosts = 5;                                                                                                      // 2
                                                                                                                       //
getCampaignPosts = function (postsCount) {                                                                             // 4
                                                                                                                       //
  // look for last scheduled campaign in the database                                                                  //
  var lastCampaign = SyncedCron._collection.findOne({ name: 'scheduleNewsletter' }, { sort: { finishedAt: -1 }, limit: 1 });
                                                                                                                       //
  // if there is a last campaign use its date, else default to posts from the last 7 days                              //
  var lastWeek = moment().subtract(7, 'days').toDate();                                                                // 10
  var after = typeof lastCampaign !== 'undefined' ? lastCampaign.finishedAt : lastWeek;                                // 11
                                                                                                                       //
  var params = Posts.parameters.get({                                                                                  // 13
    view: 'campaign',                                                                                                  // 14
    limit: postsCount,                                                                                                 // 15
    after: after                                                                                                       // 16
  });                                                                                                                  //
  return Posts.find(params.find, params.options).fetch();                                                              // 18
};                                                                                                                     //
                                                                                                                       //
buildCampaign = function (postsArray) {                                                                                // 21
  var postsHTML = '',                                                                                                  // 22
      subject = '';                                                                                                    //
                                                                                                                       //
  // 1. Iterate through posts and pass each of them through a handlebars template                                      //
  postsArray.forEach(function (post, index) {                                                                          // 25
    if (index > 0) subject += ', ';                                                                                    // 26
                                                                                                                       //
    subject += post.title;                                                                                             // 29
                                                                                                                       //
    var postUser = Meteor.users.findOne(post.userId);                                                                  // 31
                                                                                                                       //
    // the naked post object as stored in the database is missing a few properties, so let's add them                  //
    var properties = _.extend(post, {                                                                                  // 34
      authorName: post.getAuthorName(),                                                                                // 35
      postLink: Posts.getLink(post, true),                                                                             // 36
      profileUrl: Users.getProfileUrl(postUser, true),                                                                 // 37
      postPageLink: Posts.getPageUrl(post, true),                                                                      // 38
      date: moment(post.postedAt).format("MMMM D YYYY"),                                                               // 39
      authorAvatarUrl: Avatar.getUrl(postUser)                                                                         // 40
    });                                                                                                                //
                                                                                                                       //
    try {                                                                                                              // 43
      HTTP.get(post.authorAvatarUrl);                                                                                  // 44
    } catch (error) {                                                                                                  //
      post.authorAvatarUrl = false;                                                                                    // 46
    }                                                                                                                  //
                                                                                                                       //
    if (post.body) {                                                                                                   // 49
      properties.body = Telescope.utils.trimHTML(post.htmlBody, 20);                                                   // 50
    }                                                                                                                  //
                                                                                                                       //
    if (post.commentCount > 0) properties.popularComments = Comments.find({ postId: post._id }, { sort: { score: -1 }, limit: 2, transform: function (comment) {
        var user = Meteor.users.findOne(comment.userId);                                                               // 55
                                                                                                                       //
        comment.body = Telescope.utils.trimHTML(comment.htmlBody, 20);                                                 // 57
        comment.authorProfileUrl = Users.getProfileUrl(user, true);                                                    // 58
        comment.authorAvatarUrl = Avatar.getUrl(user);                                                                 // 59
                                                                                                                       //
        try {                                                                                                          // 61
          HTTP.get(comment.authorAvatarUrl);                                                                           // 62
        } catch (error) {                                                                                              //
          comment.authorAvatarUrl = false;                                                                             // 64
        }                                                                                                              //
        return comment;                                                                                                // 66
      } }).fetch();                                                                                                    //
                                                                                                                       //
    if (post.url) {                                                                                                    // 69
      properties.domain = Telescope.utils.getDomain(post.url);                                                         // 70
    }                                                                                                                  //
                                                                                                                       //
    if (properties.thumbnailUrl) {                                                                                     // 73
      properties.thumbnailUrl = Telescope.utils.addHttp(properties.thumbnailUrl);                                      // 74
    }                                                                                                                  //
                                                                                                                       //
    postsHTML += Telescope.email.getTemplate('emailPostItem')(properties);                                             // 77
  });                                                                                                                  //
                                                                                                                       //
  // 2. Wrap posts HTML in digest template                                                                             //
  var digestHTML = Telescope.email.getTemplate('emailDigest')({                                                        // 81
    siteName: Settings.get('title'),                                                                                   // 82
    date: moment().format("dddd, MMMM Do YYYY"),                                                                       // 83
    content: postsHTML                                                                                                 // 84
  });                                                                                                                  //
                                                                                                                       //
  // 3. wrap digest HTML in email wrapper template                                                                     //
  var emailHTML = Telescope.email.buildTemplate(digestHTML);                                                           // 88
                                                                                                                       //
  var campaign = {                                                                                                     // 90
    postIds: _.pluck(postsArray, '_id'),                                                                               // 91
    subject: Telescope.utils.trimWords(subject, 15),                                                                   // 92
    html: emailHTML                                                                                                    // 93
  };                                                                                                                   //
                                                                                                                       //
  return campaign;                                                                                                     // 96
};                                                                                                                     //
                                                                                                                       //
scheduleNextCampaign = function (isTest) {                                                                             // 99
  isTest = !!isTest;                                                                                                   // 100
  var posts = getCampaignPosts(Settings.get('postsPerNewsletter', defaultPosts));                                      // 101
  if (!!posts.length) {                                                                                                // 102
    return scheduleCampaign(buildCampaign(posts), isTest);                                                             // 103
  } else {                                                                                                             //
    var result = 'No posts to schedule today…';                                                                        // 105
    return result;                                                                                                     // 106
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
Meteor.methods({                                                                                                       // 110
  sendCampaign: function () {                                                                                          // 111
    if (Users.is.adminById(this.userId)) return scheduleNextCampaign(false);                                           // 112
  },                                                                                                                   //
  testCampaign: function () {                                                                                          // 115
    if (Users.is.adminById(this.userId)) return scheduleNextCampaign(true);                                            // 116
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/server/cron.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
SyncedCron.options = {                                                                                                 // 1
  log: false,                                                                                                          // 2
  collectionName: 'cronHistory',                                                                                       // 3
  utc: false,                                                                                                          // 4
  collectionTTL: 172800                                                                                                // 5
};                                                                                                                     //
                                                                                                                       //
var defaultFrequency = 7; // once a week                                                                               // 8
var defaultTime = '00:00';                                                                                             // 9
                                                                                                                       //
var getSchedule = function (parser) {                                                                                  // 11
  var frequency = Settings.get('newsletterFrequency', defaultFrequency);                                               // 12
  var recur = parser.recur();                                                                                          // 13
  var schedule;                                                                                                        // 14
                                                                                                                       //
  // Default is once a week (Mondays)                                                                                  //
  if (!!frequency) {                                                                                                   // 18
    schedule = recur.on(frequency).dayOfWeek();                                                                        // 19
  } else {                                                                                                             //
    schedule = recur.on(2).dayOfWeek();                                                                                // 22
  }                                                                                                                    //
                                                                                                                       //
  return schedule.on(Settings.get('newsletterTime', defaultTime)).time();                                              // 25
};                                                                                                                     //
                                                                                                                       //
Meteor.methods({                                                                                                       // 28
  getNextJob: function () {                                                                                            // 29
    var nextJob = SyncedCron.nextScheduledAtDate('scheduleNewsletter');                                                // 30
    console.log(nextJob);                                                                                              // 31
    return nextJob;                                                                                                    // 32
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
var addJob = function () {                                                                                             // 36
  SyncedCron.add({                                                                                                     // 37
    name: 'scheduleNewsletter',                                                                                        // 38
    schedule: function (parser) {                                                                                      // 39
      // parser is a later.parse object                                                                                //
      return getSchedule(parser);                                                                                      // 41
    },                                                                                                                 //
    job: function () {                                                                                                 // 43
      // only schedule newsletter campaigns in production                                                              //
      if (process.env.NODE_ENV === "production") {                                                                     // 45
        scheduleNextCampaign();                                                                                        // 46
      }                                                                                                                //
    }                                                                                                                  //
  });                                                                                                                  //
};                                                                                                                     //
Meteor.startup(function () {                                                                                           // 51
  if (Settings.get('enableNewsletter', false)) {                                                                       // 52
    addJob();                                                                                                          // 53
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/server/mailchimp.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var htmlToText = Npm.require('html-to-text');                                                                          // 1
                                                                                                                       //
scheduleCampaign = function (campaign, isTest) {                                                                       // 3
  var isTest = typeof isTest === 'undefined' ? false : isTest;                                                         // 4
                                                                                                                       //
  var apiKey = Settings.get('mailChimpAPIKey');                                                                        // 6
  var listId = Settings.get('mailChimpListId');                                                                        // 7
                                                                                                                       //
  if (!!apiKey && !!listId) {                                                                                          // 9
                                                                                                                       //
    var wordCount = 15;                                                                                                // 11
    var subject = campaign.subject;                                                                                    // 12
    while (subject.length >= 150) {                                                                                    // 13
      subject = Telescope.utils.trimWords(subject, wordCount);                                                         // 14
      wordCount--;                                                                                                     // 15
    }                                                                                                                  //
                                                                                                                       //
    try {                                                                                                              // 18
                                                                                                                       //
      var api = new MailChimp(apiKey);                                                                                 // 20
      var text = htmlToText.fromString(campaign.html, { wordwrap: 130 });                                              // 21
      var defaultEmail = Settings.get('defaultEmail');                                                                 // 22
      var campaignOptions = {                                                                                          // 23
        type: 'regular',                                                                                               // 24
        options: {                                                                                                     // 25
          list_id: listId,                                                                                             // 26
          subject: subject,                                                                                            // 27
          from_email: defaultEmail,                                                                                    // 28
          from_name: Settings.get('title') + ' Top Posts'                                                              // 29
        },                                                                                                             //
        content: {                                                                                                     // 31
          html: campaign.html,                                                                                         // 32
          text: text                                                                                                   // 33
        }                                                                                                              //
      };                                                                                                               //
                                                                                                                       //
      console.log('// Creating campaign…');                                                                            // 37
                                                                                                                       //
      // create campaign                                                                                               //
      var mailchimpCampaign = api.call('campaigns', 'create', campaignOptions);                                        // 40
                                                                                                                       //
      console.log('// Campaign created');                                                                              // 42
      // console.log(campaign)                                                                                         //
                                                                                                                       //
      var scheduledTime = moment().utcOffset(0).add(1, 'hours').format("YYYY-MM-DD HH:mm:ss");                         // 45
                                                                                                                       //
      var scheduleOptions = {                                                                                          // 47
        cid: mailchimpCampaign.id,                                                                                     // 48
        schedule_time: scheduledTime                                                                                   // 49
      };                                                                                                               //
                                                                                                                       //
      // schedule campaign                                                                                             //
      var schedule = api.call('campaigns', 'schedule', scheduleOptions);                                               // 53
                                                                                                                       //
      console.log('// Campaign scheduled for ' + scheduledTime);                                                       // 55
      // console.log(schedule)                                                                                         //
                                                                                                                       //
      // if this is not a test, mark posts as sent                                                                     //
      if (!isTest) var updated = Posts.update({ _id: { $in: campaign.postIds } }, { $set: { scheduledAt: new Date() } }, { multi: true });
                                                                                                                       //
      // send confirmation email                                                                                       //
      var confirmationHtml = Telescope.email.getTemplate('emailDigestConfirmation')({                                  // 63
        time: scheduledTime,                                                                                           // 64
        newsletterLink: mailchimpCampaign.archive_url,                                                                 // 65
        subject: subject                                                                                               // 66
      });                                                                                                              //
      Telescope.email.send(defaultEmail, 'Newsletter scheduled', Telescope.email.buildTemplate(confirmationHtml));     // 68
    } catch (error) {                                                                                                  //
      console.log(error);                                                                                              // 71
    }                                                                                                                  //
    return subject;                                                                                                    // 73
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
addToMailChimpList = function (userOrEmail, confirm, done) {                                                           // 77
                                                                                                                       //
  var user, email;                                                                                                     // 79
                                                                                                                       //
  var confirm = typeof confirm === 'undefined' ? false : confirm; // default to no confirmation                        // 81
                                                                                                                       //
  // not sure if it's really necessary that the function take both user and email?                                     //
  if (typeof userOrEmail === "string") {                                                                               // 84
    user = null;                                                                                                       // 85
    email = userOrEmail;                                                                                               // 86
  } else if (typeof userOrEmail === "object") {                                                                        //
    user = userOrEmail;                                                                                                // 88
    email = Users.getEmail(user);                                                                                      // 89
    if (!email) throw 'User must have an email address';                                                               // 90
  }                                                                                                                    //
                                                                                                                       //
  var apiKey = Settings.get('mailChimpAPIKey');                                                                        // 94
  var listId = Settings.get('mailChimpListId');                                                                        // 95
                                                                                                                       //
  // add a user to a MailChimp list.                                                                                   //
  // called when a new user is created, or when an existing user fills in their email                                  //
  if (!!apiKey && !!listId) {                                                                                          // 99
                                                                                                                       //
    try {                                                                                                              // 101
                                                                                                                       //
      console.log('// Adding "' + email + '" to MailChimp list…');                                                     // 103
                                                                                                                       //
      var api = new MailChimp(apiKey);                                                                                 // 105
      var subscribeOptions = {                                                                                         // 106
        id: listId,                                                                                                    // 107
        email: { "email": email },                                                                                     // 108
        double_optin: confirm                                                                                          // 109
      };                                                                                                               //
                                                                                                                       //
      // subscribe user                                                                                                //
      var subscribe = api.call('lists', 'subscribe', subscribeOptions);                                                // 113
                                                                                                                       //
      // mark user as subscribed                                                                                       //
      if (!!user) {                                                                                                    // 116
        Users.setSetting(user, 'newsletter.subscribeToNewsletter', true);                                              // 117
      }                                                                                                                //
                                                                                                                       //
      console.log("// User subscribed");                                                                               // 120
                                                                                                                       //
      return subscribe;                                                                                                // 122
    } catch (error) {                                                                                                  //
      throw new Meteor.Error("subscription-failed", error.message);                                                    // 125
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
Meteor.methods({                                                                                                       // 130
  addCurrentUserToMailChimpList: function () {                                                                         // 131
    var currentUser = Meteor.users.findOne(this.userId);                                                               // 132
    try {                                                                                                              // 133
      return addToMailChimpList(currentUser, false);                                                                   // 134
    } catch (error) {                                                                                                  //
      throw new Meteor.Error(500, error.message);                                                                      // 136
    }                                                                                                                  //
  },                                                                                                                   //
  addEmailToMailChimpList: function (email) {                                                                          // 139
    try {                                                                                                              // 140
      return addToMailChimpList(email, true);                                                                          // 141
    } catch (error) {                                                                                                  //
      throw new Meteor.Error(500, error.message);                                                                      // 143
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/server/routes.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Notification email                                                                                                  //
Picker.route('/email/campaign', function (params, req, res, next) {                                                    // 2
  var campaign = buildCampaign(getCampaignPosts(Settings.get('postsPerNewsletter', 5)));                               // 3
  var campaignSubject = '<div class="campaign-subject"><strong>Subject:</strong> ' + campaign.subject + ' (note: contents might change)</div>';
  var campaignSchedule = '<div class="campaign-schedule"><strong>Scheduled for:</strong> ' + Meteor.call('getNextJob') + '</div>';
  res.end(campaignSubject + campaignSchedule + campaign.html);                                                         // 6
});                                                                                                                    //
                                                                                                                       //
// Notification email                                                                                                  //
Picker.route('/email/digest-confirmation', function (params, req, res, next) {                                         // 10
  var confirmationHtml = Telescope.email.getTemplate('emailDigestConfirmation')({                                      // 11
    time: 'January 1st, 1901',                                                                                         // 12
    newsletterLink: 'http://example.com',                                                                              // 13
    subject: 'Lorem ipsum dolor sit amet'                                                                              // 14
  });                                                                                                                  //
  res.end(Telescope.email.buildTemplate(confirmationHtml));                                                            // 16
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/server/templates/handlebars.emailDigest.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<style type=\"text/css\">\n  .email-digest{\n  }\n  .digest-date{\n    color: #999;\n    font-weight: normal;\n    font-size: 16px;\n  }\n  .post-item{\n    border-top: 1px solid #ddd;\n  }\n  .post-date{\n    font-size: 13px;\n    color: #999;\n  }\n  .post-title{\n    font-size: 18px;\n    line-height: 1.6;\n  }\n  .post-thumbnail{\n    height: 28px;\n    width: 37px;\n    vertical-align: top;\n  }\n  .post-meta{\n    font-size: 13px;\n    color: #999;\n    margin: 5px 0;\n  }\n  .post-meta a{\n    color: #333;\n  }  \n  .post-domain{\n    font-weight: bold;\n  }\n  .post-body-excerpt{\n    font-size: 14px;\n  }\n  .post-body-excerpt p{\n    margin: 0;\n  }\n  .post-comments {\n    margin-top: 10px;\n  }\n  .post-comment {\n    padding: 10px;\n    background: #efefef;\n    margin-bottom: 5px;\n  }\n  .post-comment:last-child {\n    margin-bottom: 0;\n  }\n  .post-comments-title {\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 10px;\n  }\n  .post-comment-body{\n    font-size: 14px;\n  }\n  .post-comment-author {\n    padding-bottom: 5px;\n    margin-bottom: 5px;\n    border-bottom: 1px solid #ccc;\n  }\n  .avatar {\n    height: 20px;\n    width: 20px;\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 100%;\n  }\n  .post-comment-author-name {\n    line-height: 20px;\n    vertical-align: middle;\n    font-size: 13px;\n  }\n  .post-comment-author-link {\n    color: black;\n  }\n</style>\n\n<span class=\"heading\">Recently on {{siteName}}</span>\n<span class=\"digest-date\">– {{date}}</span>\n<br><br>\n\n<div class=\"email-digest\">\n  {{{content}}}\n</div>\n<br>");Handlebars.templates["emailDigest"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailDigest"});};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/server/templates/handlebars.emailDigestConfirmation.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">Newsletter scheduled for {{time}}</span><br><br>\n\n<a href=\"{{newsletterLink}}\">{{subject}}</a><br><br>");Handlebars.templates["emailDigestConfirmation"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailDigestConfirmation"});};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/server/templates/handlebars.emailPostItem.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<div class=\"post-item\">\n<br >\n\n<span class=\"post-title\">\n  {{#if thumbnailUrl}}\n    <img class=\"post-thumbnail\" src=\"{{thumbnailUrl}}\"/>&nbsp;\n  {{/if}}\n\n  <a href=\"{{postLink}}\" target=\"_blank\">{{title}}</a>\n</span>\n\n<div class=\"post-meta\">\n  {{#if domain}}\n    <a class=\"post-domain\" href=\"\">{{domain}}</a>\n    |\n  {{/if}}\n\n  <span class=\"post-submitted\">\n    {{#if profileUrl}}\n      Submitted by <a href=\"{{profileUrl}}\" class=\"comment-link\" target=\"_blank\">{{authorName}}</a>\n    {{else}}\n      Submitted by {{authorName}}\n    {{/if}}\n  </span>\n\n  <span class=\"post-date\">on {{date}}</span>\n  |\n  <a href=\"{{postPageLink}}\" class=\"comment-link\" target=\"_blank\">{{commentCount}} Comments</a>\n</div>\n\n\n{{#if body}}\n  <div class=\"post-body-excerpt\">\n    {{body}}\n    <a href=\"{{postPageLink}}\" class=\"comment-link\" target=\"_blank\">Read more</a>\n  </div>\n{{/if}}\n\n{{#if popularComments}}\n  <div class=\"post-comments\">\n    <div class=\"post-comments-title\">Top Comments</div>\n    {{#each popularComments}}\n      <div class=\"post-comment\">\n        <div class=\"post-comment-author\">\n          {{#if authorAvatarUrl}}\n            <img class=\"post-comment-avatar avatar\" src=\"{{authorAvatarUrl}}\"/>\n          {{/if}}\n          <span class=\"post-comment-author-name\">\n            <a href=\"{{authorProfileUrl}}\" class=\"post-comment-author-link\">\n              {{author}}\n            </a>\n          </span>\n        </div>\n        <div class=\"post-comment-body\">{{body}}</div>\n      </div>\n    {{/each}}\n    <a class=\"post-comments-discuss\" href=\"{{postPageLink}}\">Discuss</a>\n  </div>\n{{/if}}\n\n<br>\n</div>\n");Handlebars.templates["emailPostItem"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailPostItem"});};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ar.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                        // 8
  TAPi18n.translations["ar"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                             // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ar", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/bg.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                        // 8
  TAPi18n.translations["bg"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                             // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["bg"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("bg", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/cs.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                        // 8
  TAPi18n.translations["cs"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                             // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["cs"][namespace], {"receive_the_best_of":"Odebírejte to nejlepší z","right_in_your_inbox":"přímo do vaší schránky.","get_newsletter":"Odebírat newsletter","thanks_for_subscribing":"Děkujeme, váš odběr je nyní aktivní!","newsletter":"newsletter","showBanner":"Zobrazit banner","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Počet příspěvků v newsletteru","newsletterFrequency":"Frekvence newsletteru","newsletterTime":"Čas newsletteru","enableNewsletter":"Aktivovat newsletter","autoSubscribe":"Automatický odběr"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/da.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                        // 8
  TAPi18n.translations["da"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                             // 12
  TAPi18n.translations["da"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("da", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/de.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                        // 8
  TAPi18n.translations["de"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                             // 12
  TAPi18n.translations["de"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["de"][namespace], {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!"});
TAPi18n._registerServerTranslator("de", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/el.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                        // 8
  TAPi18n.translations["el"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                             // 12
  TAPi18n.translations["el"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("el", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/en.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!","newsletter":"newsletter","showBanner":"Show Banner","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Posts per Newsletter","newsletterFrequency":"Newsletter Frequency","newsletterTime":"Newsletter Time","enableNewsletter":"Enable Newsletter","autoSubscribe":"Auto Subscribe"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                    // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/es.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                        // 8
  TAPi18n.translations["es"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                             // 12
  TAPi18n.translations["es"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["es"][namespace], {"receive_the_best_of":"Reciba lo mejor de","right_in_your_inbox":"directo en tu correo electrónico.","get_newsletter":"Obtén la Newsletter","thanks_for_subscribing":"¡Gracias por suscribirse!","newsletter":"newsletter"});
TAPi18n._registerServerTranslator("es", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/et.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                        // 8
  TAPi18n.translations["et"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                             // 12
  TAPi18n.translations["et"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["et"][namespace], {"receive_the_best_of":"Saa parimad","right_in_your_inbox":"otse teie postkasti.","get_newsletter":"Liitu uudiskirjaga","thanks_for_subscribing":"Täname liitumast!","newsletter":"uudiskiri","showBanner":"Näita Bännerit","mailChimpAPIKey":"MailChimp API võti","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Postitusi Uudiskirja kohta","newsletterFrequency":"Uudiskirja Sagedus-","newsletterTime":"Uudiskirja saatmise Aeg","enableNewsletter":"Luba Uudiskiri","autoSubscribe":"Automaatne Liitumine"});
TAPi18n._registerServerTranslator("et", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/fr.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                        // 8
  TAPi18n.translations["fr"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                             // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["fr"][namespace], {"receive_the_best_of":"Recevez le meilleur de","right_in_your_inbox":"par email.","get_newsletter":"S'abonner à la newsletter","thanks_for_subscribing":"Merci pour votre abonnement !","newsletter":"newsletter","showBanner":"Afficher la Bannière","mailChimpAPIKey":"Clé d'API MailChimp","mailChimpListId":"ID Liste MailChimp","postsPerNewsletter":"Posts par Newsletter","newsletterFrequency":"Fréquence de la Newsletter","newsletterTime":"Heure de la Newsletter","enableNewsletter":"Activer la Newsletter","autoSubscribe":"Auto-abonnement"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/hu.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                        // 8
  TAPi18n.translations["hu"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                             // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/id.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                        // 8
  TAPi18n.translations["id"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                             // 12
  TAPi18n.translations["id"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["id"][namespace], {"receive_the_best_of":"Mau menerima postingan terbaik\n","right_in_your_inbox":"rutin melalui Email ?","get_newsletter":"Dapatkan Newsletter","thanks_for_subscribing":"Terima kasih telah berlangganan!","newsletter":"newsletter","showBanner":"Tampilkan Banner","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Posting per Newsletter","newsletterFrequency":"Frekuensi Newsletter ","newsletterTime":"Waktu Newsletter","enableNewsletter":"Aktifkan Newsletter","autoSubscribe":"Berlangganan  Otomatis"});
TAPi18n._registerServerTranslator("id", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/it.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                        // 8
  TAPi18n.translations["it"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                             // 12
  TAPi18n.translations["it"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["it"][namespace], {"receive_the_best_of":"Ricevi il meglio di","right_in_your_inbox":"direttamente nella tua casella in arrivo.","get_newsletter":"Ottieni la Newsletter","thanks_for_subscribing":"Grazie per la sottoscrizione!","newsletter":"newsletter","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","newsletterFrequency":"Frequenza della Newsletter","enableNewsletter":"Abilita la Newsletter"});
TAPi18n._registerServerTranslator("it", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ja.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                        // 8
  TAPi18n.translations["ja"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                             // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/kk.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                        // 8
  TAPi18n.translations["kk"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                             // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ko.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                        // 8
  TAPi18n.translations["ko"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                             // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ko"][namespace], {"thanks_for_subscribing":"구독 해주셔서 감사합니다!"});                          // 16
TAPi18n._registerServerTranslator("ko", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/nl.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                        // 8
  TAPi18n.translations["nl"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                             // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("nl", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/pl.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                        // 8
  TAPi18n.translations["pl"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                             // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["pl"][namespace], {"receive_the_best_of":"Otrzymuj najlepsze z","right_in_your_inbox":"prosto do twojej skrzynki.","get_newsletter":"Zapisz się do Newslettera","thanks_for_subscribing":"Dziękujemy!","newsletter":"newsletter","showBanner":"Pokaż Baner","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Liczba postów przypadająca na jeden Newsletter","newsletterFrequency":"Częstotliwość Newslettera","newsletterTime":"Godzina, w której ma być wysłany Newsletter","enableNewsletter":"Włącz Newsletter","autoSubscribe":"Auto Subskrybcja"});
TAPi18n._registerServerTranslator("pl", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/pt-BR.i18n.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                     // 8
  TAPi18n.translations["pt-BR"] = {};                                                                                  // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                          // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                       // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"receive_the_best_of":"Receba o melhor de","right_in_your_inbox":"direto em sua caixa de emails.","get_newsletter":"Inscrever na Newsletter","thanks_for_subscribing":"Obrigado por assinar!","newsletter":"newsletter","showBanner":"Exibir Banner","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Postagens por Newsletter","newsletterFrequency":"Frequência Newsletter","newsletterTime":"Hora da Newsletter","enableNewsletter":"Habilitar Newsletter","autoSubscribe":"Auto Inscrição"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                                 // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ro.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                        // 8
  TAPi18n.translations["ro"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                             // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ro"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ro", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ru.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                        // 8
  TAPi18n.translations["ru"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                             // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ru", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/sl.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                        // 8
  TAPi18n.translations["sl"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                             // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["sl"][namespace], {"receive_the_best_of":"Prejmite najboljše","right_in_your_inbox":"naravnost v vaš poštni predal","get_newsletter":"Prejemajte E-novice","thanks_for_subscribing":"Hvala za prijavo!","newsletter":"e-novice","showBanner":"Prika","mailChimpAPIKey":"MailChimp API Ključ","mailChimpListId":"MailChimp ID Seznama","postsPerNewsletter":"Objav na E-novice","newsletterFrequency":"Pogostost E-novic","newsletterTime":"Čas pošiljanja E-novic","enableNewsletter":"Omogoči E-novice","autoSubscribe":"Samodejno Naroči"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/sv.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                        // 8
  TAPi18n.translations["sv"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                             // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["sv"][namespace], {"receive_the_best_of":"Få det bästa av","right_in_your_inbox":"direkt i din inkorg.","get_newsletter":"Få Nyhetsbrev","thanks_for_subscribing":"Tack för att du prenumererar!","newsletter":"nyhetsbrev","showBanner":"Visa Banner","mailChimpAPIKey":"MailChimp API-nyckel","mailChimpListId":"Mailchimp List-ID","postsPerNewsletter":"Inlägg per Nyhetsbrev","newsletterFrequency":"Nyhetsbrevsfrekvens","newsletterTime":"Nyhetsbrevstid","enableNewsletter":"Aktivera Nyhetsbrev","autoSubscribe":"Auto-registrera"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/th.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                        // 8
  TAPi18n.translations["th"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                             // 12
  TAPi18n.translations["th"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("th", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/tr.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                        // 8
  TAPi18n.translations["tr"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                             // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["tr"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("tr", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/vi.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                        // 8
  TAPi18n.translations["vi"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                             // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/zh-CN.i18n.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                     // 8
  TAPi18n.translations["zh-CN"] = {};                                                                                  // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                          // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                       // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!"});
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                                 // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:newsletter'] = {
  resetNewsletterSchedule: resetNewsletterSchedule
};

})();

//# sourceMappingURL=telescope_newsletter.js.map
