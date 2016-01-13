(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var getFilterQuery, ReactiveTable, dependOnFilters, getFilterStrings, getFilterFields;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/aslagle_reactive-table/lib/filter.js                                                               //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var parseFilterString = function (filterString) {                                                              // 1
  var startQuoteRegExp = /^[\'\"]/;                                                                            // 2
  var endQuoteRegExp = /[\'\"]$/;                                                                              // 3
  var filters = [];                                                                                            // 4
  var words = filterString.split(' ');                                                                         // 5
                                                                                                               // 6
  var inQuote = false;                                                                                         // 7
  var quotedWord = '';                                                                                         // 8
  _.each(words, function (word) {                                                                              // 9
    if (inQuote) {                                                                                             // 10
      if (endQuoteRegExp.test(word)) {                                                                         // 11
        filters.push(quotedWord + ' ' + word.slice(0, word.length - 1));                                       // 12
        inQuote = false;                                                                                       // 13
        quotedWord = '';                                                                                       // 14
      } else {                                                                                                 // 15
        quotedWord = quotedWord + ' ' + word;                                                                  // 16
      }                                                                                                        // 17
    } else if (startQuoteRegExp.test(word)) {                                                                  // 18
      if (endQuoteRegExp.test(word)) {                                                                         // 19
        filters.push(word.slice(1, word.length - 1));                                                          // 20
      } else {                                                                                                 // 21
        inQuote = true;                                                                                        // 22
        quotedWord = word.slice(1, word.length);                                                               // 23
      }                                                                                                        // 24
    } else {                                                                                                   // 25
      filters.push(word);                                                                                      // 26
    }                                                                                                          // 27
  });                                                                                                          // 28
  return filters;                                                                                              // 29
};                                                                                                             // 30
                                                                                                               // 31
var escapeRegex = function(text) {                                                                             // 32
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");                                                     // 33
};                                                                                                             // 34
                                                                                                               // 35
var getFieldMatches = function (field) {                                                                       // 36
  var fieldMatches = [];                                                                                       // 37
  var keys = field.split('.');                                                                                 // 38
  var previousKeys = '';                                                                                       // 39
  _.each(keys, function (key) {                                                                                // 40
    fieldMatches.push(previousKeys + key);                                                                     // 41
    previousKeys += key + '.';                                                                                 // 42
  });                                                                                                          // 43
  return fieldMatches;                                                                                         // 44
};                                                                                                             // 45
                                                                                                               // 46
getFilterQuery = function (filterInputs, filterFields, settings) {                                             // 47
  settings = settings || {};                                                                                   // 48
  if (settings.enableRegex === undefined) {                                                                    // 49
    settings.enableRegex = false;                                                                              // 50
  }                                                                                                            // 51
  if (settings.fields) {                                                                                       // 52
    _.each(filterInputs, function (filter, index) {                                                            // 53
      if (_.any(settings.fields, function (include) { return include; })) {                                    // 54
        filterFields[index] = _.filter(filterFields[index], function (field) {                                 // 55
          return _.any(getFieldMatches(field), function (fieldMatch) {                                         // 56
            return settings.fields[fieldMatch];                                                                // 57
          });                                                                                                  // 58
        });                                                                                                    // 59
      } else {                                                                                                 // 60
        filterFields[index] = _.filter(filterFields[index], function (field) {                                 // 61
          return _.all(getFieldMatches(field), function (fieldMatch) {                                         // 62
            return _.isUndefined(settings.fields[fieldMatch]) || settings.fields[fieldMatch];                  // 63
          });                                                                                                  // 64
        });                                                                                                    // 65
      }                                                                                                        // 66
    });                                                                                                        // 67
  }                                                                                                            // 68
  var numberRegExp = /^\d+$/;                                                                                  // 69
  var queryList = [];                                                                                          // 70
  _.each(filterInputs, function (filter, index) {                                                              // 71
    if (filter) {                                                                                              // 72
      if (_.isObject(filter)) {                                                                                // 73
        var fieldQueries = _.map(filterFields[index], function (field) {                                       // 74
          var query = {};                                                                                      // 75
          query[field] = filter;                                                                               // 76
          return query;                                                                                        // 77
        });                                                                                                    // 78
        if (fieldQueries.length) {                                                                             // 79
            queryList.push({'$or': fieldQueries});                                                             // 80
          }                                                                                                    // 81
      } else {                                                                                                 // 82
        var filters = parseFilterString(filter);                                                               // 83
        _.each(filters, function (filterWord) {                                                                // 84
          if (settings.enableRegex === false) {                                                                // 85
            filterWord = escapeRegex(filterWord);                                                              // 86
          }                                                                                                    // 87
          var filterQueryList = [];                                                                            // 88
          _.each(filterFields[index], function (field) {                                                       // 89
            var filterRegExp = new RegExp(filterWord, 'i');                                                    // 90
            var query = {};                                                                                    // 91
            query[field] = filterRegExp;                                                                       // 92
            filterQueryList.push(query);                                                                       // 93
                                                                                                               // 94
            if (numberRegExp.test(filterWord)) {                                                               // 95
              var numberQuery = {};                                                                            // 96
              numberQuery[field] = parseInt(filterWord, 10);                                                   // 97
              filterQueryList.push(numberQuery);                                                               // 98
            }                                                                                                  // 99
                                                                                                               // 100
            if (filterWord === "true") {                                                                       // 101
              var boolQuery = {};                                                                              // 102
              boolQuery[field] = true;                                                                         // 103
              filterQueryList.push(boolQuery);                                                                 // 104
            } else if (filterWord === "false") {                                                               // 105
              var boolQuery = {};                                                                              // 106
              boolQuery[field] = false;                                                                        // 107
              filterQueryList.push(boolQuery);                                                                 // 108
            }                                                                                                  // 109
          });                                                                                                  // 110
                                                                                                               // 111
          if (filterQueryList.length) {                                                                        // 112
            var filterQuery = {'$or': filterQueryList};                                                        // 113
            queryList.push(filterQuery);                                                                       // 114
          }                                                                                                    // 115
        });                                                                                                    // 116
      }                                                                                                        // 117
    }                                                                                                          // 118
  });                                                                                                          // 119
  return queryList.length ? {'$and': queryList} : {};                                                          // 120
};                                                                                                             // 121
                                                                                                               // 122
if (Meteor.isClient) {                                                                                         // 123
  ReactiveTable = ReactiveTable || {};                                                                         // 124
                                                                                                               // 125
  var reactiveTableFilters = {};                                                                               // 126
  var callbacks = {};                                                                                          // 127
                                                                                                               // 128
  ReactiveTable.Filter = function (id, fields) {                                                               // 129
    if (reactiveTableFilters[id]) {                                                                            // 130
        return reactiveTableFilters[id];                                                                       // 131
    }                                                                                                          // 132
                                                                                                               // 133
    var filter = new ReactiveVar();                                                                            // 134
                                                                                                               // 135
    this.fields = fields;                                                                                      // 136
                                                                                                               // 137
    this.get = function () {                                                                                   // 138
      return filter.get() || '';                                                                               // 139
    };                                                                                                         // 140
                                                                                                               // 141
    this.set = function (filterString) {                                                                       // 142
      filter.set(filterString);                                                                                // 143
      _.each(callbacks[id], function (callback) {                                                              // 144
        callback();                                                                                            // 145
      });                                                                                                      // 146
    };                                                                                                         // 147
                                                                                                               // 148
    reactiveTableFilters[id] = this;                                                                           // 149
  };                                                                                                           // 150
                                                                                                               // 151
  ReactiveTable.clearFilters = function (filterIds) {                                                          // 152
    _.each(filterIds, function (filterId) {                                                                    // 153
      if (reactiveTableFilters[filterId]) {                                                                    // 154
        reactiveTableFilters[filterId].set('');                                                                // 155
      }                                                                                                        // 156
    });                                                                                                        // 157
  };                                                                                                           // 158
                                                                                                               // 159
  dependOnFilters = function (filterIds, callback) {                                                           // 160
    _.each(filterIds, function (filterId) {                                                                    // 161
      if (_.isUndefined(callbacks[filterId])) {                                                                // 162
        callbacks[filterId] = [];                                                                              // 163
      }                                                                                                        // 164
      callbacks[filterId].push(callback);                                                                      // 165
    });                                                                                                        // 166
  };                                                                                                           // 167
                                                                                                               // 168
  getFilterStrings = function (filterIds) {                                                                    // 169
    return _.map(filterIds, function (filterId) {                                                              // 170
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                     // 171
        return '';                                                                                             // 172
      }                                                                                                        // 173
      return reactiveTableFilters[filterId].get();                                                             // 174
    });                                                                                                        // 175
  };                                                                                                           // 176
                                                                                                               // 177
  getFilterFields = function (filterIds, allFields) {                                                          // 178
    return _.map(filterIds, function (filterId) {                                                              // 179
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                     // 180
        return _.map(allFields, function (field) { return field.key; });                                       // 181
      } else if (_.isEmpty(reactiveTableFilters[filterId].fields)) {                                           // 182
        return _.map(allFields, function (field) { return field.key; });                                       // 183
      } else {                                                                                                 // 184
        return reactiveTableFilters[filterId].fields;                                                          // 185
      }                                                                                                        // 186
    });                                                                                                        // 187
  };                                                                                                           // 188
                                                                                                               // 189
  Template.reactiveTableFilter.helpers({                                                                       // 190
    'class': function () {                                                                                     // 191
      return this.class || 'input-group';                                                                      // 192
    },                                                                                                         // 193
                                                                                                               // 194
    'filter': function () {                                                                                    // 195
      if (_.isUndefined(reactiveTableFilters[this.id])) {                                                      // 196
        new ReactiveTable.Filter(this.id, this.fields);                                                        // 197
      }                                                                                                        // 198
      return reactiveTableFilters[this.id].get();                                                              // 199
    }                                                                                                          // 200
  });                                                                                                          // 201
                                                                                                               // 202
  var updateFilter = _.debounce(function (template, filterText) {                                              // 203
    reactiveTableFilters[template.data.id].set(filterText);                                                    // 204
  }, 200);                                                                                                     // 205
                                                                                                               // 206
  Template.reactiveTableFilter.events({                                                                        // 207
    'keyup .reactive-table-input, input .reactive-table-input': function (event) {                             // 208
      var template = Template.instance();                                                                      // 209
      var filterText = $(event.target).val();                                                                  // 210
      updateFilter(template, filterText);                                                                      // 211
    },                                                                                                         // 212
  });                                                                                                          // 213
}                                                                                                              // 214
                                                                                                               // 215
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/aslagle_reactive-table/lib/server.js                                                               //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
ReactiveTable = {};                                                                                            // 1
                                                                                                               // 2
ReactiveTable.publish = function (name, collectionOrFunction, selectorOrFunction, settings) {                  // 3
    Meteor.publish("reactive-table-" + name, function (publicationId, filters, fields, options, rowsPerPage) {
      check(publicationId, String);                                                                            // 5
      check(filters, [Match.OneOf(String, Object)]);                                                           // 6
      check(fields, [[String]]);                                                                               // 7
      check(options, {skip: Match.Integer, limit: Match.Integer, sort: Object});                               // 8
      check(rowsPerPage, Match.Integer);                                                                       // 9
                                                                                                               // 10
      var collection;                                                                                          // 11
      var selector;                                                                                            // 12
                                                                                                               // 13
      if (_.isFunction(collectionOrFunction)) {                                                                // 14
        collection = collectionOrFunction.call(this);                                                          // 15
      } else {                                                                                                 // 16
        collection = collectionOrFunction;                                                                     // 17
      }                                                                                                        // 18
                                                                                                               // 19
      if (!(collection instanceof Mongo.Collection)) {                                                         // 20
        console.log("ReactiveTable.publish: no collection to publish");                                        // 21
        return [];                                                                                             // 22
      }                                                                                                        // 23
                                                                                                               // 24
      if (_.isFunction(selectorOrFunction)) {                                                                  // 25
        selector = selectorOrFunction.call(this);                                                              // 26
      } else {                                                                                                 // 27
        selector = selectorOrFunction;                                                                         // 28
      }                                                                                                        // 29
      var self = this;                                                                                         // 30
      var filterQuery = _.extend(getFilterQuery(filters, fields, settings), selector);                         // 31
      if (settings && settings.fields) {                                                                       // 32
        options.fields = settings.fields;                                                                      // 33
      }                                                                                                        // 34
      var cursor = collection.find(filterQuery, options);                                                      // 35
      var count = cursor.count();                                                                              // 36
                                                                                                               // 37
      var getRow = function (row, index) {                                                                     // 38
        return _.extend({                                                                                      // 39
          "reactive-table-id": publicationId,                                                                  // 40
          "reactive-table-sort": index                                                                         // 41
        }, row);                                                                                               // 42
      };                                                                                                       // 43
                                                                                                               // 44
      var getRows = function () {                                                                              // 45
        return _.map(cursor.fetch(), getRow);                                                                  // 46
      };                                                                                                       // 47
      var rows = {};                                                                                           // 48
      _.each(getRows(), function (row) {                                                                       // 49
        rows[row._id] = row;                                                                                   // 50
      });                                                                                                      // 51
                                                                                                               // 52
      var updateRows = function () {                                                                           // 53
        var newRows = getRows();                                                                               // 54
        _.each(newRows, function (row, index) {                                                                // 55
          var oldRow = rows[row._id];                                                                          // 56
          if (oldRow) {                                                                                        // 57
            if (!_.isEqual(oldRow, row)) {                                                                     // 58
              self.changed("reactive-table-rows-" + publicationId, row._id, row);                              // 59
              rows[row._id] = row;                                                                             // 60
            }                                                                                                  // 61
          } else {                                                                                             // 62
            self.added("reactive-table-rows-" + publicationId, row._id, row);                                  // 63
            rows[row._id] = row;                                                                               // 64
          }                                                                                                    // 65
        });                                                                                                    // 66
      };                                                                                                       // 67
                                                                                                               // 68
      self.added("reactive-table-counts", publicationId, {count: count});                                      // 69
      _.each(rows, function (row) {                                                                            // 70
        self.added("reactive-table-rows-" + publicationId, row._id, row);                                      // 71
      });                                                                                                      // 72
                                                                                                               // 73
      var initializing = true;                                                                                 // 74
                                                                                                               // 75
      var handle = cursor.observeChanges({                                                                     // 76
        added: function (id, fields) {                                                                         // 77
          if (!initializing) {                                                                                 // 78
            self.changed("reactive-table-counts", publicationId, {count: cursor.count()});                     // 79
            updateRows();                                                                                      // 80
          }                                                                                                    // 81
        },                                                                                                     // 82
                                                                                                               // 83
        removed: function (id, fields) {                                                                       // 84
          self.changed("reactive-table-counts", publicationId, {count: cursor.count()});                       // 85
          self.removed("reactive-table-rows-" + publicationId, id);                                            // 86
          delete rows[id];                                                                                     // 87
          updateRows();                                                                                        // 88
        },                                                                                                     // 89
                                                                                                               // 90
        changed: function (id, fields) {                                                                       // 91
          updateRows();                                                                                        // 92
        }                                                                                                      // 93
                                                                                                               // 94
      });                                                                                                      // 95
      initializing = false;                                                                                    // 96
                                                                                                               // 97
      self.ready();                                                                                            // 98
                                                                                                               // 99
      self.onStop(function () {                                                                                // 100
        handle.stop();                                                                                         // 101
      });                                                                                                      // 102
    });                                                                                                        // 103
};                                                                                                             // 104
                                                                                                               // 105
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aslagle:reactive-table'] = {
  ReactiveTable: ReactiveTable
};

})();

//# sourceMappingURL=aslagle_reactive-table.js.map
