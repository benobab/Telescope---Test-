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
var __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/package-i18n.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
TAPi18n.packages["telescope:embedly"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                    // 2
// define package's translation function (proxy to the i18next)                                                     // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                    // 4
// define the package's templates registrar                                                                         // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:embedly");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                    // 8
// Record the list of templates prior to package load                                                               // 9
var _ = Package.underscore._;                                                                                       // 10
non_package_templates = _.keys(Template);                                                                           // 11
                                                                                                                    // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/lib/embedly.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Posts.addField([{                                                                                                   // 1
  fieldName: 'thumbnailUrl',                                                                                        // 3
  fieldSchema: {                                                                                                    // 4
    type: String,                                                                                                   // 5
    optional: true,                                                                                                 // 6
    editableBy: ["member", "admin"],                                                                                // 7
    autoform: {                                                                                                     // 8
      type: 'bootstrap-postthumbnail',                                                                              // 9
      order: 40                                                                                                     // 10
    }                                                                                                               //
  }                                                                                                                 //
}, {                                                                                                                //
  fieldName: 'media',                                                                                               // 15
  fieldSchema: {                                                                                                    // 16
    type: Object,                                                                                                   // 17
    optional: true,                                                                                                 // 18
    blackbox: true                                                                                                  // 19
  }                                                                                                                 //
}, {                                                                                                                //
  fieldName: 'sourceName',                                                                                          // 23
  fieldSchema: {                                                                                                    // 24
    type: String,                                                                                                   // 25
    optional: true                                                                                                  // 26
  }                                                                                                                 //
}, {                                                                                                                //
  fieldName: 'sourceUrl',                                                                                           // 30
  fieldSchema: {                                                                                                    // 31
    type: String,                                                                                                   // 32
    optional: true                                                                                                  // 33
  }                                                                                                                 //
}]);                                                                                                                //
                                                                                                                    //
Telescope.modules.add("postThumbnail", {                                                                            // 38
  template: 'post_thumbnail',                                                                                       // 39
  order: 15                                                                                                         // 40
});                                                                                                                 //
                                                                                                                    //
Settings.addField([{                                                                                                // 43
  fieldName: 'embedlyKey',                                                                                          // 45
  fieldSchema: {                                                                                                    // 46
    type: String,                                                                                                   // 47
    optional: true,                                                                                                 // 48
    "private": true,                                                                                                // 49
    autoform: {                                                                                                     // 50
      group: 'embedly',                                                                                             // 51
      "class": 'private-field'                                                                                      // 52
    }                                                                                                               //
  }                                                                                                                 //
}, {                                                                                                                //
  fieldName: 'thumbnailWidth',                                                                                      // 57
  fieldSchema: {                                                                                                    // 58
    type: Number,                                                                                                   // 59
    optional: true,                                                                                                 // 60
    autoform: {                                                                                                     // 61
      group: 'embedly'                                                                                              // 62
    }                                                                                                               //
  }                                                                                                                 //
}, {                                                                                                                //
  fieldName: 'thumbnailHeight',                                                                                     // 67
  fieldSchema: {                                                                                                    // 68
    type: Number,                                                                                                   // 69
    optional: true,                                                                                                 // 70
    autoform: {                                                                                                     // 71
      group: 'embedly'                                                                                              // 72
    }                                                                                                               //
  }                                                                                                                 //
}]);                                                                                                                //
                                                                                                                    //
function addThumbnailClass(postClass, post) {                                                                       // 78
  var thumbnailClass = !!post.thumbnailUrl ? "has-thumbnail" : "no-thumbnail";                                      // 79
  return postClass + " " + thumbnailClass;                                                                          // 80
}                                                                                                                   //
// add callback that adds "has-thumbnail" or "no-thumbnail" CSS classes                                             //
Telescope.callbacks.add("postClass", addThumbnailClass);                                                            // 83
                                                                                                                    //
function checkIfPreviouslyPosted(data) {                                                                            // 85
  Meteor.call("checkForDuplicates", data.url, function (error, result) {                                            // 86
    if (error) {                                                                                                    // 87
      Messages.flash(error.reason + '. <a href="' + FlowRouter.path("postPage", { _id: error.details }) + '">' + i18n.t("go_to_post") + '</a>');
    }                                                                                                               //
  });                                                                                                               //
  return data;                                                                                                      // 91
}                                                                                                                   //
Telescope.callbacks.add("afterEmbedlyPrefill", checkIfPreviouslyPosted);                                            // 93
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/lib/client/js/jquery.fitvids.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/*jshint browser:true */                                                                                            //
/*!                                                                                                                 //
* FitVids 1.1                                                                                                       //
*                                                                                                                   //
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com                        //
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/              //
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/                                                      //
*                                                                                                                   //
*/                                                                                                                  //
                                                                                                                    //
;(function ($) {                                                                                                    // 11
                                                                                                                    //
  'use strict';                                                                                                     // 13
                                                                                                                    //
  $.fn.fitVids = function (options) {                                                                               // 15
    var settings = {                                                                                                // 16
      customSelector: null,                                                                                         // 17
      ignore: null                                                                                                  // 18
    };                                                                                                              //
                                                                                                                    //
    if (!document.getElementById('fit-vids-style')) {                                                               // 21
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js                         //
      var head = document.head || document.getElementsByTagName('head')[0];                                         // 23
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");                                                                      // 25
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';                                     // 26
      head.appendChild(div.childNodes[1]);                                                                          // 27
    }                                                                                                               //
                                                                                                                    //
    if (options) {                                                                                                  // 30
      $.extend(settings, options);                                                                                  // 31
    }                                                                                                               //
                                                                                                                    //
    return this.each(function () {                                                                                  // 34
      var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];
                                                                                                                    //
      if (settings.customSelector) {                                                                                // 44
        selectors.push(settings.customSelector);                                                                    // 45
      }                                                                                                             //
                                                                                                                    //
      var ignoreList = '.fitvidsignore';                                                                            // 48
                                                                                                                    //
      if (settings.ignore) {                                                                                        // 50
        ignoreList = ignoreList + ', ' + settings.ignore;                                                           // 51
      }                                                                                                             //
                                                                                                                    //
      var $allVideos = $(this).find(selectors.join(','));                                                           // 54
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch                                        // 55
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.                                    // 56
                                                                                                                    //
      $allVideos.each(function (count) {                                                                            // 58
        var $this = $(this);                                                                                        // 59
        if ($this.parents(ignoreList).length > 0) {                                                                 // 60
          return; // Disable FitVids on this video.                                                                 // 61
        }                                                                                                           //
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
          return;                                                                                                   // 63
        }                                                                                                           //
        if (!$this.css('height') && !$this.css('width') && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
          $this.attr('height', 9);                                                                                  // 66
          $this.attr('width', 16);                                                                                  // 67
        }                                                                                                           //
        var height = this.tagName.toLowerCase() === 'object' || $this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),  //
            aspectRatio = height / width;                                                                           //
        if (!$this.attr('id')) {                                                                                    // 72
          var videoID = 'fitvid' + count;                                                                           // 73
          $this.attr('id', videoID);                                                                                // 74
        }                                                                                                           //
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', aspectRatio * 100 + '%');
        $this.removeAttr('height').removeAttr('width');                                                             // 77
      });                                                                                                           //
    });                                                                                                             //
  };                                                                                                                //
  // Works with either jQuery or Zepto                                                                              //
})(window.jQuery || window.Zepto);                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/lib/client/template.autoform-postthumbnail.js                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("afPostThumbnail");                                                                            // 2
Template["afPostThumbnail"] = new Template("Template.afPostThumbnail", (function() {                                // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.lookup("embedlyKeyExists"));                                                         // 6
  }, function() {                                                                                                   // 7
    return [ "\n  ", HTML.DIV({                                                                                     // 8
      "class": "post-thumbnail-outer-wrapper",                                                                      // 9
      style: function() {                                                                                           // 10
        return Spacebars.mustache(view.lookup("outerStyle"));                                                       // 11
      }                                                                                                             // 12
    }, "\n    ", HTML.DIV({                                                                                         // 13
      "class": "post-thumbnail-inner-wrapper",                                                                      // 14
      style: function() {                                                                                           // 15
        return Spacebars.mustache(view.lookup("innerStyle"));                                                       // 16
      }                                                                                                             // 17
    }, "\n      ", HTML.IMG({                                                                                       // 18
      src: function() {                                                                                             // 19
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                        // 20
      },                                                                                                            // 21
      "class": "post-thumbnail-preview",                                                                            // 22
      alt: "",                                                                                                      // 23
      style: function() {                                                                                           // 24
        return Spacebars.mustache(view.lookup("style"));                                                            // 25
      }                                                                                                             // 26
    }), "\n      ", HTML.DIV({                                                                                      // 27
      "class": "post-thumbnail-loading"                                                                             // 28
    }, Spacebars.include(view.lookupTemplate("spinner"))), "\n    "), "\n  "), "\n  ", HTML.INPUT(HTML.Attrs({      // 29
      type: "hidden",                                                                                               // 30
      value: function() {                                                                                           // 31
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                        // 32
      }                                                                                                             // 33
    }, function() {                                                                                                 // 34
      return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                       // 35
    })), "\n  ", HTML.A({                                                                                           // 36
      href: "#",                                                                                                    // 37
      "class": "regenerate-thumbnail-link"                                                                          // 38
    }, Blaze.View("lookup:_", function() {                                                                          // 39
      return Spacebars.mustache(view.lookup("_"), "regenerate_thumbnail");                                          // 40
    })), "\n  ", HTML.A({                                                                                           // 41
      href: "#",                                                                                                    // 42
      "class": "remove-thumbnail-link"                                                                              // 43
    }, Blaze.View("lookup:_", function() {                                                                          // 44
      return Spacebars.mustache(view.lookup("_"), "clear_thumbnail");                                               // 45
    })), "\n  " ];                                                                                                  // 46
  }, function() {                                                                                                   // 47
    return [ "\n    ", Blaze.If(function() {                                                                        // 48
      return Spacebars.call(view.lookup("isAdmin"));                                                                // 49
    }, function() {                                                                                                 // 50
      return [ "\n      ", HTML.P(Blaze.View("lookup:_", function() {                                               // 51
        return Spacebars.mustache(view.lookup("_"), "please_fill_in_embedly_key");                                  // 52
      })), "\n    " ];                                                                                              // 53
    }, function() {                                                                                                 // 54
      return [ "\n      ", HTML.P(Blaze.View("lookup:_", function() {                                               // 55
        return Spacebars.mustache(view.lookup("_"), "please_ask_your_admin_to_fill_in_embedly_key");                // 56
      })), "\n    " ];                                                                                              // 57
    }), "\n  " ];                                                                                                   // 58
  });                                                                                                               // 59
}));                                                                                                                // 60
                                                                                                                    // 61
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/lib/client/autoform-postthumbnail.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AutoForm.addInputType("bootstrap-postthumbnail", {                                                                  // 1
  template: "afPostThumbnail"                                                                                       // 2
});                                                                                                                 //
                                                                                                                    //
var fillEmbedlyData = function (instance) {                                                                         // 5
                                                                                                                    //
  // note: the following fields are *not* in the current template                                                   //
  var $urlField = $('input[name="url"]');                                                                           // 8
  var $titleField = $('input[name="title"]');                                                                       // 9
  var $bodyField = $('textarea[name="body"]');                                                                      // 10
  var url = $urlField.val();                                                                                        // 11
                                                                                                                    //
  var $thumbnailContainer = instance.$('.post-thumbnail-container');                                                // 13
  var $img = instance.$('.post-thumbnail-preview');                                                                 // 14
  var $thumbnailUrlField = instance.$('[name="thumbnailUrl"]');                                                     // 15
                                                                                                                    //
  if (!!url) {                                                                                                      // 17
    $thumbnailContainer.addClass('loading');                                                                        // 18
    Messages.clearSeen();                                                                                           // 19
    console.log('getting embedly data for ' + url);                                                                 // 20
    Meteor.call('getEmbedlyData', url, function (error, data) {                                                     // 21
      if (error) {                                                                                                  // 22
        console.log(error);                                                                                         // 23
        Messages.flash(error.message, 'error');                                                                     // 24
        $thumbnailContainer.removeClass('loading');                                                                 // 25
        return;                                                                                                     // 26
      }                                                                                                             //
      if (data) {                                                                                                   // 28
        // set thumbnail and fill in thumbnailUrl field                                                             //
        $img.attr('src', data.thumbnailUrl);                                                                        // 30
        $thumbnailUrlField.val(data.thumbnailUrl);                                                                  // 31
                                                                                                                    //
        // remove loading class                                                                                     //
        $thumbnailContainer.removeClass('loading');                                                                 // 34
                                                                                                                    //
        if (!$titleField.val()) // if title field is empty, fill in title                                           // 36
          $titleField.val(data.title);                                                                              // 37
        if (!$bodyField.val()) // if body field is empty, fill in body                                              // 38
          $bodyField.val(data.description);                                                                         // 39
                                                                                                                    //
        data.url = url;                                                                                             // 41
                                                                                                                    //
        Telescope.callbacks.run("afterEmbedlyPrefill", data);                                                       // 43
      }                                                                                                             //
    });                                                                                                             //
  }                                                                                                                 //
};                                                                                                                  //
                                                                                                                    //
Template.afPostThumbnail.created = function () {                                                                    // 50
  var instance = this;                                                                                              // 51
  instance.embedlyKeyExists = new ReactiveVar(false);                                                               // 52
  // embedly key is not published to client, so we need a method to test if it has been provided or not             //
  Meteor.call('embedlyKeyExists', function (error, result) {                                                        // 54
    if (result) instance.embedlyKeyExists.set(result);                                                              // 55
  });                                                                                                               //
};                                                                                                                  //
                                                                                                                    //
Template.afPostThumbnail.helpers({                                                                                  // 60
  atts: (function () {                                                                                              // 61
    function addFormControlAtts() {                                                                                 // 61
      var atts = _.clone(this.atts);                                                                                // 62
      // Add bootstrap class                                                                                        //
      atts = AutoForm.Utility.addClass(atts, "form-control");                                                       // 64
      return atts;                                                                                                  // 65
    }                                                                                                               //
                                                                                                                    //
    return addFormControlAtts;                                                                                      //
  })(),                                                                                                             //
  outerStyle: function () {                                                                                         // 67
    var thumbnailWidth = Settings.get('thumbnailWidth', 200);                                                       // 68
    var thumbnailHeight = Settings.get('thumbnailHeight', 125);                                                     // 69
    return "max-width: " + thumbnailWidth + "px; max-height: " + thumbnailHeight + "px;";                           // 70
  },                                                                                                                //
  innerStyle: function () {                                                                                         // 72
    var padding = Settings.get('thumbnailHeight', 125) * 100 / Settings.get('thumbnailWidth', 200);                 // 73
    return "padding-bottom: " + padding + "%";                                                                      // 74
  },                                                                                                                //
  embedlyKeyExists: function () {                                                                                   // 76
    // haven't found a better way to do this yet…                                                                   //
    return Template.instance().embedlyKeyExists.get();                                                              // 78
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
Template.afPostThumbnail.rendered = function () {                                                                   // 82
                                                                                                                    //
  var instance = this;                                                                                              // 84
  var $urlField = $('[name="url"]');                                                                                // 85
                                                                                                                    //
  $urlField.change(function () {                                                                                    // 87
    fillEmbedlyData(instance);                                                                                      // 88
  });                                                                                                               //
};                                                                                                                  //
                                                                                                                    //
Template.afPostThumbnail.events({                                                                                   // 93
  'click .remove-thumbnail-link': function (e, t) {                                                                 // 94
    e.preventDefault();                                                                                             // 95
    t.$('.post-thumbnail-preview').attr('src', '');                                                                 // 96
    t.$('input').val('');                                                                                           // 97
  },                                                                                                                //
  'click .regenerate-thumbnail-link': function (e, instance) {                                                      // 99
    e.preventDefault();                                                                                             // 100
    fillEmbedlyData(instance);                                                                                      // 101
  }                                                                                                                 //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/lib/client/template.post_thumbnail.js                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("post_thumbnail");                                                                             // 2
Template["post_thumbnail"] = new Template("Template.post_thumbnail", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return [ Blaze.If(function() {                                                                                    // 5
    return Spacebars.call(view.lookup("thumbnailUrl"));                                                             // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      "class": "post-thumbnail",                                                                                    // 9
      "aria-hidden": "true"                                                                                         // 10
    }, "\n      ", HTML.A({                                                                                         // 11
      "class": function() {                                                                                         // 12
        return [ "post-thumbnail-link ", Spacebars.mustache(view.lookup("playVideoClass")) ];                       // 13
      },                                                                                                            // 14
      href: function() {                                                                                            // 15
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "getLink"));                                      // 16
      },                                                                                                            // 17
      target: function() {                                                                                          // 18
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "getLinkTarget"));                                // 19
      }                                                                                                             // 20
    }, "\n        ", HTML.IMG({                                                                                     // 21
      "class": "post-thumbnail-image",                                                                              // 22
      src: function() {                                                                                             // 23
        return Spacebars.mustache(view.lookup("thumbnailUrl"));                                                     // 24
      },                                                                                                            // 25
      onerror: "this.style.display='none';",                                                                        // 26
      "aria-hidden": "true"                                                                                         // 27
    }), "\n      "), "\n    "), "\n  " ];                                                                           // 28
  }, function() {                                                                                                   // 29
    return [ "\n    ", HTML.DIV({                                                                                   // 30
      "class": "post-thumbnail-empty"                                                                               // 31
    }), "\n  " ];                                                                                                   // 32
  }), "\n  ", Spacebars.With(function() {                                                                           // 33
    return Spacebars.call(view.lookup("media"));                                                                    // 34
  }, function() {                                                                                                   // 35
    return [ "\n    ", Blaze.If(function() {                                                                        // 36
      return Spacebars.call(view.lookup("showVideo"));                                                              // 37
    }, function() {                                                                                                 // 38
      return [ "\n        ", HTML.DIV({                                                                             // 39
        "class": "post-video-lightbox"                                                                              // 40
      }, "\n          ", HTML.A({                                                                                   // 41
        "class": "post-video-lightbox-hide",                                                                        // 42
        href: "#"                                                                                                   // 43
      }, "×"), "\n          ", HTML.DIV({                                                                           // 44
        "class": "post-video-lightbox-inner js-video"                                                               // 45
      }, "\n            ", Blaze.View("lookup:html", function() {                                                   // 46
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("html")));                                          // 47
      }), "\n          "), "\n        "), "\n    " ];                                                               // 48
    }), "\n  " ];                                                                                                   // 49
  }) ];                                                                                                             // 50
}));                                                                                                                // 51
                                                                                                                    // 52
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/lib/client/post_thumbnail.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.post_thumbnail.onCreated(function () {                                                                     // 1
  var instance = this;                                                                                              // 2
  instance.showVideo = new ReactiveVar(false);                                                                      // 3
});                                                                                                                 //
                                                                                                                    //
Template.post_thumbnail.helpers({                                                                                   // 6
  playVideoClass: function () {                                                                                     // 7
    var url = this.url;                                                                                             // 8
    var isVideoSite = url && _.some(["youtube", "vimeo"], function (site) {                                         // 9
      return url.indexOf(site) !== -1;                                                                              // 10
    });                                                                                                             //
    return this.media && this.media.type === "video" && isVideoSite ? 'post-thumbnail-has-video' : '';              // 12
  },                                                                                                                //
  showVideo: function () {                                                                                          // 14
    return Template.instance().showVideo.get();                                                                     // 15
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
Template.post_thumbnail.events({                                                                                    // 19
  'click .post-thumbnail-has-video': function (e, instance) {                                                       // 20
                                                                                                                    //
    e.preventDefault();                                                                                             // 22
    instance.showVideo.set(true);                                                                                   // 23
                                                                                                                    //
    // use Meteor.defer to make sure the elements are rendered by Blaze                                             //
    Meteor.defer(function () {                                                                                      // 26
      $('body').addClass('showing-lightbox');                                                                       // 27
      $(e.target).parents('.post').find('.post-video-lightbox').fadeIn('fast');                                     // 28
      $(".js-video").fitVids();                                                                                     // 29
    });                                                                                                             //
  },                                                                                                                //
  'click .post-video-lightbox-hide, click .post-video-lightbox': function (e, instance) {                           // 33
                                                                                                                    //
    e.preventDefault();                                                                                             // 35
    $(e.target).parents('.post').find('.post-video-lightbox').fadeOut('fast');                                      // 36
    $('body').removeClass('showing-lightbox');                                                                      // 37
                                                                                                                    //
    Meteor.defer(function () {                                                                                      // 39
      instance.showVideo.set(false);                                                                                // 40
    });                                                                                                             //
  }                                                                                                                 //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ar.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                      // 8
                                                                                                                    // 9
for (var i = 0; i < package_templates.length; i++) {                                                                // 10
  var package_template = package_templates[i];                                                                      // 11
                                                                                                                    // 12
  registerI18nTemplate(package_template);                                                                           // 13
}                                                                                                                   // 14
                                                                                                                    // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/bg.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/cs.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/da.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/de.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/el.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/en.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
// integrate the fallback language translations                                                                     // 8
translations = {};                                                                                                  // 9
translations[namespace] = {"thumbnail":"Thumbnail","thumbnailUrl":"Thumbnail","regenerate_thumbnail":"Regenerate Thumbnail","clear_thumbnail":"Clear Thumbnail","please_fill_in_embedly_key":"Please fill in your Embedly API key to enable thumbnails.","please_ask_your_admin_to_fill_in_embedly_key":"Please ask your site admin to fill in an Embedly API key to enable thumbnails.","embedlyKey":"Embedly API Key","thumbnailWidth":"Thumbnail Width","thumbnailHeight":"Thumbnail Height"};
TAPi18n._loadLangFileObject("en", translations);                                                                    // 11
                                                                                                                    // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/es.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/et.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/fr.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/hu.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/id.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/it.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ja.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/kk.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ko.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/nl.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/pl.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/pt-BR.i18n.js                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ro.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ru.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/sl.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/sv.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/th.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/tr.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/vi.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_embedly/packages/telescope_embedlyi18n/zh-CN.i18n.js                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:embedly",                                                                             // 2
    namespace = "telescope:embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:embedly'] = {};

})();
