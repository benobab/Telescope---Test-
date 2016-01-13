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

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/telescope_datetimepicker/template.autoform-bs-datetimepicker.js                                 //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("afBootstrapDateTimePicker");                                                          // 2
Template["afBootstrapDateTimePicker"] = new Template("Template.afBootstrapDateTimePicker", (function() {    // 3
  var view = this;                                                                                          // 4
  return HTML.INPUT(HTML.Attrs({                                                                            // 5
    type: "text",                                                                                           // 6
    value: ""                                                                                               // 7
  }, function() {                                                                                           // 8
    return Spacebars.attrMustache(view.lookup("atts"));                                                     // 9
  }));                                                                                                      // 10
}));                                                                                                        // 11
                                                                                                            // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/telescope_datetimepicker/autoform-bs-datetimepicker.js                                          //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
AutoForm.addInputType("bootstrap-datetimepicker", {                                                         // 1
  template: "afBootstrapDateTimePicker",                                                                    // 2
  valueOut: function () {                                                                                   // 3
    // var val = this.datepicker('getUTCDate');                                                             //
    if (!!this.data("DateTimePicker").date()) {                                                             // 5
      var val = this.data("DateTimePicker").date().toDate();                                                // 6
      // console.log(val)                                                                                   //
      return val instanceof Date ? val : this.val();                                                        // 8
    }                                                                                                       //
  },                                                                                                        //
  valueConverters: {                                                                                        // 11
    "string": function (val) {                                                                              // 12
      return val instanceof Date ? AutoForm.Utility.dateToDateStringUTC(val) : val;                         // 13
    },                                                                                                      //
    "stringArray": function (val) {                                                                         // 15
      if (val instanceof Date) {                                                                            // 16
        return [AutoForm.Utility.dateToDateStringUTC(val)];                                                 // 17
      }                                                                                                     //
      return val;                                                                                           // 19
    },                                                                                                      //
    "number": function (val) {                                                                              // 21
      return val instanceof Date ? val.getTime() : val;                                                     // 22
    },                                                                                                      //
    "numberArray": function (val) {                                                                         // 24
      if (val instanceof Date) {                                                                            // 25
        return [val.getTime()];                                                                             // 26
      }                                                                                                     //
      return val;                                                                                           // 28
    },                                                                                                      //
    "dateArray": function (val) {                                                                           // 30
      if (val instanceof Date) {                                                                            // 31
        return [val];                                                                                       // 32
      }                                                                                                     //
      return val;                                                                                           // 34
    }                                                                                                       //
  }                                                                                                         //
});                                                                                                         //
                                                                                                            //
Template.afBootstrapDateTimePicker.helpers({                                                                // 39
  atts: (function () {                                                                                      // 40
    function addFormControlAtts() {                                                                         // 40
      var atts = _.clone(this.atts);                                                                        // 41
      // Add bootstrap class                                                                                //
      atts = AutoForm.Utility.addClass(atts, "form-control");                                               // 43
      return atts;                                                                                          // 44
    }                                                                                                       //
                                                                                                            //
    return addFormControlAtts;                                                                              //
  })()                                                                                                      //
});                                                                                                         //
                                                                                                            //
Template.afBootstrapDateTimePicker.rendered = function () {                                                 // 48
  var $input = this.$('input');                                                                             // 49
  var data = this.data;                                                                                     // 50
                                                                                                            //
  // instanciate datepicker                                                                                 //
  $input.datetimepicker(data.atts.datePickerOptions);                                                       // 53
                                                                                                            //
  // set and reactively update values                                                                       //
  this.autorun(function () {                                                                                // 56
    var data = Template.currentData();                                                                      // 57
                                                                                                            //
    // set field value                                                                                      //
    if (data.value instanceof Date) {                                                                       // 60
      // $input.datepicker('setUTCDate', data.value);                                                       //
                                                                                                            //
      $input.data("DateTimePicker").date(data.value);                                                       // 63
    } else if (typeof data.value === "string") {                                                            //
      // $input.datepicker('update', data.value);                                                           //
      $input.data("DateTimePicker").date(moment(data.value).toDate());                                      // 66
    }                                                                                                       //
                                                                                                            //
    // set start date if there's a min in the schema                                                        //
    if (data.min instanceof Date) {                                                                         // 70
      // datepicker plugin expects local Date object, so convert UTC Date object to local                   //
      var startDate = utcToLocal(data.min);                                                                 // 72
      // $input.datepicker('setStartDate', startDate);                                                      //
      $input.data("DateTimePicker").setMinDate(startDate);                                                  // 74
    }                                                                                                       //
                                                                                                            //
    // set end date if there's a max in the schema                                                          //
    if (data.max instanceof Date) {                                                                         // 78
      // datepicker plugin expects local Date object, so convert UTC Date object to local                   //
      var endDate = utcToLocal(data.max);                                                                   // 80
      // $input.datepicker('setEndDate', endDate);                                                          //
      $input.data("DateTimePicker").setMinDate(endDate);                                                    // 82
    }                                                                                                       //
  });                                                                                                       //
};                                                                                                          //
                                                                                                            //
Template.afBootstrapDateTimePicker.destroyed = function () {                                                // 88
  // this.$('input').datepicker('remove');                                                                  //
  this.$('input').data('DateTimePicker').destroy();                                                         // 90
};                                                                                                          //
                                                                                                            //
function utcToLocal(utcDate) {                                                                              // 93
  var localDateObj = new Date();                                                                            // 94
  localDateObj.setDate(utcDate.getUTCDate());                                                               // 95
  localDateObj.setMonth(utcDate.getUTCMonth());                                                             // 96
  localDateObj.setFullYear(utcDate.getUTCFullYear());                                                       // 97
  localDateObj.setHours(0);                                                                                 // 98
  localDateObj.setMinutes(0);                                                                               // 99
  localDateObj.setSeconds(0);                                                                               // 100
  localDateObj.setMilliseconds(0);                                                                          // 101
  return localDateObj;                                                                                      // 102
}                                                                                                           //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/telescope_datetimepicker/bootstrap-collapse-transitions.js                                      //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
/*!                                                                                                         //
 * Bootstrap v3.3.1 (http://getbootstrap.com)                                                               //
 * Copyright 2011-2014 Twitter, Inc.                                                                        //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                               //
 */                                                                                                         //
                                                                                                            //
/*!                                                                                                         //
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=81631ba40c2459b10edf)    //
 * Config saved to config.json and https://gist.github.com/81631ba40c2459b10edf                             //
 */                                                                                                         //
if (typeof jQuery === 'undefined') {                                                                        // 11
  throw new Error('Bootstrap\'s JavaScript requires jQuery');                                               // 12
}                                                                                                           //
+(function ($) {                                                                                            // 14
  var version = $.fn.jquery.split(' ')[0].split('.');                                                       // 15
  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {           // 16
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher');                     // 17
  }                                                                                                         //
})(jQuery);                                                                                                 //
                                                                                                            //
/* ========================================================================                                 //
 * Bootstrap: collapse.js v3.3.1                                                                            //
 * http://getbootstrap.com/javascript/#collapse                                                             //
 * ========================================================================                                 //
 * Copyright 2011-2014 Twitter, Inc.                                                                        //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                               //
 * ======================================================================== */                              //
                                                                                                            //
+(function ($) {                                                                                            // 30
  'use strict';                                                                                             // 31
                                                                                                            //
  // COLLAPSE PUBLIC CLASS DEFINITION                                                                       //
  // ================================                                                                       //
                                                                                                            //
  var Collapse = function (element, options) {                                                              // 36
    this.$element = $(element);                                                                             // 37
    this.options = $.extend({}, Collapse.DEFAULTS, options);                                                // 38
    this.$trigger = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]');
    this.transitioning = null;                                                                              // 40
                                                                                                            //
    if (this.options.parent) {                                                                              // 42
      this.$parent = this.getParent();                                                                      // 43
    } else {                                                                                                //
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);                                          // 45
    }                                                                                                       //
                                                                                                            //
    if (this.options.toggle) this.toggle();                                                                 // 48
  };                                                                                                        //
                                                                                                            //
  Collapse.VERSION = '3.3.1';                                                                               // 51
                                                                                                            //
  Collapse.TRANSITION_DURATION = 350;                                                                       // 53
                                                                                                            //
  Collapse.DEFAULTS = {                                                                                     // 55
    toggle: true,                                                                                           // 56
    trigger: '[data-toggle="collapse"]'                                                                     // 57
  };                                                                                                        //
                                                                                                            //
  Collapse.prototype.dimension = function () {                                                              // 60
    var hasWidth = this.$element.hasClass('width');                                                         // 61
    return hasWidth ? 'width' : 'height';                                                                   // 62
  };                                                                                                        //
                                                                                                            //
  Collapse.prototype.show = function () {                                                                   // 65
    if (this.transitioning || this.$element.hasClass('in')) return;                                         // 66
                                                                                                            //
    var activesData;                                                                                        // 68
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing');               // 69
                                                                                                            //
    if (actives && actives.length) {                                                                        // 71
      activesData = actives.data('bs.collapse');                                                            // 72
      if (activesData && activesData.transitioning) return;                                                 // 73
    }                                                                                                       //
                                                                                                            //
    var startEvent = $.Event('show.bs.collapse');                                                           // 76
    this.$element.trigger(startEvent);                                                                      // 77
    if (startEvent.isDefaultPrevented()) return;                                                            // 78
                                                                                                            //
    if (actives && actives.length) {                                                                        // 80
      Plugin.call(actives, 'hide');                                                                         // 81
      activesData || actives.data('bs.collapse', null);                                                     // 82
    }                                                                                                       //
                                                                                                            //
    var dimension = this.dimension();                                                                       // 85
                                                                                                            //
    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);
                                                                                                            //
    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);                                     // 92
                                                                                                            //
    this.transitioning = 1;                                                                                 // 96
                                                                                                            //
    var complete = function () {                                                                            // 98
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');                       // 99
      this.transitioning = 0;                                                                               // 102
      this.$element.trigger('shown.bs.collapse');                                                           // 103
    };                                                                                                      //
                                                                                                            //
    if (!$.support.transition) return complete.call(this);                                                  // 107
                                                                                                            //
    var scrollSize = $.camelCase(['scroll', dimension].join('-'));                                          // 109
                                                                                                            //
    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };                                                                                                        //
                                                                                                            //
  Collapse.prototype.hide = function () {                                                                   // 116
    if (this.transitioning || !this.$element.hasClass('in')) return;                                        // 117
                                                                                                            //
    var startEvent = $.Event('hide.bs.collapse');                                                           // 119
    this.$element.trigger(startEvent);                                                                      // 120
    if (startEvent.isDefaultPrevented()) return;                                                            // 121
                                                                                                            //
    var dimension = this.dimension();                                                                       // 123
                                                                                                            //
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;                                   // 125
                                                                                                            //
    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);           // 127
                                                                                                            //
    this.$trigger.addClass('collapsed').attr('aria-expanded', false);                                       // 132
                                                                                                            //
    this.transitioning = 1;                                                                                 // 136
                                                                                                            //
    var complete = function () {                                                                            // 138
      this.transitioning = 0;                                                                               // 139
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');           // 140
    };                                                                                                      //
                                                                                                            //
    if (!$.support.transition) return complete.call(this);                                                  // 146
                                                                                                            //
    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };                                                                                                        //
                                                                                                            //
  Collapse.prototype.toggle = function () {                                                                 // 154
    this[this.$element.hasClass('in') ? 'hide' : 'show']();                                                 // 155
  };                                                                                                        //
                                                                                                            //
  Collapse.prototype.getParent = function () {                                                              // 158
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);                                                                            // 162
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);                              // 163
    }, this)).end();                                                                                        //
  };                                                                                                        //
                                                                                                            //
  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {                             // 168
    var isOpen = $element.hasClass('in');                                                                   // 169
                                                                                                            //
    $element.attr('aria-expanded', isOpen);                                                                 // 171
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);                               // 172
  };                                                                                                        //
                                                                                                            //
  function getTargetFromTrigger($trigger) {                                                                 // 177
    var href;                                                                                               // 178
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7
                                                                                                            //
    return $(target);                                                                                       // 182
  }                                                                                                         //
                                                                                                            //
  // COLLAPSE PLUGIN DEFINITION                                                                             //
  // ==========================                                                                             //
                                                                                                            //
  function Plugin(option) {                                                                                 // 189
    return this.each(function () {                                                                          // 190
      var $this = $(this);                                                                                  // 191
      var data = $this.data('bs.collapse');                                                                 // 192
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);     // 193
                                                                                                            //
      if (!data && options.toggle && option == 'show') options.toggle = false;                              // 195
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));                             // 196
      if (typeof option == 'string') data[option]();                                                        // 197
    });                                                                                                     //
  }                                                                                                         //
                                                                                                            //
  var old = $.fn.collapse;                                                                                  // 201
                                                                                                            //
  $.fn.collapse = Plugin;                                                                                   // 203
  $.fn.collapse.Constructor = Collapse;                                                                     // 204
                                                                                                            //
  // COLLAPSE NO CONFLICT                                                                                   //
  // ====================                                                                                   //
                                                                                                            //
  $.fn.collapse.noConflict = function () {                                                                  // 210
    $.fn.collapse = old;                                                                                    // 211
    return this;                                                                                            // 212
  };                                                                                                        //
                                                                                                            //
  // COLLAPSE DATA-API                                                                                      //
  // =================                                                                                      //
                                                                                                            //
  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {                   // 219
    var $this = $(this);                                                                                    // 220
                                                                                                            //
    if (!$this.attr('data-target')) e.preventDefault();                                                     // 222
                                                                                                            //
    var $target = getTargetFromTrigger($this);                                                              // 224
    var data = $target.data('bs.collapse');                                                                 // 225
    var option = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this });                           // 226
                                                                                                            //
    Plugin.call($target, option);                                                                           // 228
  });                                                                                                       //
})(jQuery);                                                                                                 //
                                                                                                            //
/* ========================================================================                                 //
 * Bootstrap: transition.js v3.3.1                                                                          //
 * http://getbootstrap.com/javascript/#transitions                                                          //
 * ========================================================================                                 //
 * Copyright 2011-2014 Twitter, Inc.                                                                        //
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                               //
 * ======================================================================== */                              //
                                                                                                            //
+(function ($) {                                                                                            // 242
  'use strict';                                                                                             // 243
                                                                                                            //
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)                                           //
  // ============================================================                                           //
                                                                                                            //
  function transitionEnd() {                                                                                // 248
    var el = document.createElement('bootstrap');                                                           // 249
                                                                                                            //
    var transEndEventNames = {                                                                              // 251
      WebkitTransition: 'webkitTransitionEnd',                                                              // 252
      MozTransition: 'transitionend',                                                                       // 253
      OTransition: 'oTransitionEnd otransitionend',                                                         // 254
      transition: 'transitionend'                                                                           // 255
    };                                                                                                      //
                                                                                                            //
    for (var name in babelHelpers.sanitizeForInObject(transEndEventNames)) {                                // 258
      if (el.style[name] !== undefined) {                                                                   // 259
        return { end: transEndEventNames[name] };                                                           // 260
      }                                                                                                     //
    }                                                                                                       //
                                                                                                            //
    return false; // explicit for ie8 (  ._.)                                                               // 264
  }                                                                                                         //
                                                                                                            //
  // http://blog.alexmaccaw.com/css-transitions                                                             //
  $.fn.emulateTransitionEnd = function (duration) {                                                         // 268
    var called = false;                                                                                     // 269
    var $el = this;                                                                                         // 270
    $(this).one('bsTransitionEnd', function () {                                                            // 271
      called = true;                                                                                        // 271
    });                                                                                                     //
    var callback = function () {                                                                            // 272
      if (!called) $($el).trigger($.support.transition.end);                                                // 272
    };                                                                                                      //
    setTimeout(callback, duration);                                                                         // 273
    return this;                                                                                            // 274
  };                                                                                                        //
                                                                                                            //
  $(function () {                                                                                           // 277
    $.support.transition = transitionEnd();                                                                 // 278
                                                                                                            //
    if (!$.support.transition) return;                                                                      // 280
                                                                                                            //
    $.event.special.bsTransitionEnd = {                                                                     // 282
      bindType: $.support.transition.end,                                                                   // 283
      delegateType: $.support.transition.end,                                                               // 284
      handle: function (e) {                                                                                // 285
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);                        // 286
      }                                                                                                     //
    };                                                                                                      //
  });                                                                                                       //
})(jQuery);                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:datetimepicker'] = {};

})();
