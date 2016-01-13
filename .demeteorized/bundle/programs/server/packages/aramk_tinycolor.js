(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var tinycolor;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aramk_tinycolor/packages/aramk_tinycolor.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
(function () {                                                                                                       // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 3
//                                                                                                           //      // 4
// packages/aramk:tinycolor/tinycolor.js                                                                     //      // 5
//                                                                                                           //      // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 7
                                                                                                             //      // 8
// TinyColor v1.1.0                                                                                          // 1    // 9
// https://github.com/bgrins/TinyColor                                                                       // 2    // 10
// Brian Grinstead, MIT License                                                                              // 3    // 11
                                                                                                             // 4    // 12
(function () {                                                                                               // 5    // 13
                                                                                                             // 6    // 14
    // global on the server, window in the browser                                                           // 7    // 15
    var root = this;                                                                                         // 8    // 16
                                                                                                             // 9    // 17
    var _tinycolor = (function() {                                                                           // 10   // 18
                                                                                                             // 11   // 19
////////////////////////////////////////////////////////////////////////////////                             // 12   // 20
// BEGIN LIBRARY CODE                                                                                        // 13   // 21
////////////////////////////////////////////////////////////////////////////////                             // 14   // 22
                                                                                                             // 15   // 23
var trimLeft = /^[\s,#]+/,                                                                                   // 16   // 24
    trimRight = /\s+$/,                                                                                      // 17   // 25
    tinyCounter = 0,                                                                                         // 18   // 26
    math = Math,                                                                                             // 19   // 27
    mathRound = math.round,                                                                                  // 20   // 28
    mathMin = math.min,                                                                                      // 21   // 29
    mathMax = math.max,                                                                                      // 22   // 30
    mathRandom = math.random;                                                                                // 23   // 31
                                                                                                             // 24   // 32
var tinycolor = function tinycolor (color, opts) {                                                           // 25   // 33
                                                                                                             // 26   // 34
    color = (color) ? color : '';                                                                            // 27   // 35
    opts = opts || { };                                                                                      // 28   // 36
                                                                                                             // 29   // 37
    // If input is already a tinycolor, return itself                                                        // 30   // 38
    if (color instanceof tinycolor) {                                                                        // 31   // 39
       return color;                                                                                         // 32   // 40
    }                                                                                                        // 33   // 41
    // If we are called as a function, call using new instead                                                // 34   // 42
    if (!(this instanceof tinycolor)) {                                                                      // 35   // 43
        return new tinycolor(color, opts);                                                                   // 36   // 44
    }                                                                                                        // 37   // 45
                                                                                                             // 38   // 46
    var rgb = inputToRGB(color);                                                                             // 39   // 47
    this._originalInput = color,                                                                             // 40   // 48
    this._r = rgb.r,                                                                                         // 41   // 49
    this._g = rgb.g,                                                                                         // 42   // 50
    this._b = rgb.b,                                                                                         // 43   // 51
    this._a = rgb.a,                                                                                         // 44   // 52
    this._roundA = mathRound(100*this._a) / 100,                                                             // 45   // 53
    this._format = opts.format || rgb.format;                                                                // 46   // 54
    this._gradientType = opts.gradientType;                                                                  // 47   // 55
                                                                                                             // 48   // 56
    // Don't let the range of [0,255] come back in [0,1].                                                    // 49   // 57
    // Potentially lose a little bit of precision here, but will fix issues where                            // 50   // 58
    // .5 gets interpreted as half of the total, instead of half of 1                                        // 51   // 59
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`                          // 52   // 60
    if (this._r < 1) { this._r = mathRound(this._r); }                                                       // 53   // 61
    if (this._g < 1) { this._g = mathRound(this._g); }                                                       // 54   // 62
    if (this._b < 1) { this._b = mathRound(this._b); }                                                       // 55   // 63
                                                                                                             // 56   // 64
    this._ok = rgb.ok;                                                                                       // 57   // 65
    this._tc_id = tinyCounter++;                                                                             // 58   // 66
};                                                                                                           // 59   // 67
                                                                                                             // 60   // 68
tinycolor.prototype = {                                                                                      // 61   // 69
    isDark: function() {                                                                                     // 62   // 70
        return this.getBrightness() < 128;                                                                   // 63   // 71
    },                                                                                                       // 64   // 72
    isLight: function() {                                                                                    // 65   // 73
        return !this.isDark();                                                                               // 66   // 74
    },                                                                                                       // 67   // 75
    isValid: function() {                                                                                    // 68   // 76
        return this._ok;                                                                                     // 69   // 77
    },                                                                                                       // 70   // 78
    getOriginalInput: function() {                                                                           // 71   // 79
      return this._originalInput;                                                                            // 72   // 80
    },                                                                                                       // 73   // 81
    getFormat: function() {                                                                                  // 74   // 82
        return this._format;                                                                                 // 75   // 83
    },                                                                                                       // 76   // 84
    getAlpha: function() {                                                                                   // 77   // 85
        return this._a;                                                                                      // 78   // 86
    },                                                                                                       // 79   // 87
    getBrightness: function() {                                                                              // 80   // 88
        var rgb = this.toRgb();                                                                              // 81   // 89
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;                                             // 82   // 90
    },                                                                                                       // 83   // 91
    setAlpha: function(value) {                                                                              // 84   // 92
        this._a = boundAlpha(value);                                                                         // 85   // 93
        this._roundA = mathRound(100*this._a) / 100;                                                         // 86   // 94
        return this;                                                                                         // 87   // 95
    },                                                                                                       // 88   // 96
    toHsv: function() {                                                                                      // 89   // 97
        var hsv = rgbToHsv(this._r, this._g, this._b);                                                       // 90   // 98
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };                                           // 91   // 99
    },                                                                                                       // 92   // 100
    toHsvString: function() {                                                                                // 93   // 101
        var hsv = rgbToHsv(this._r, this._g, this._b);                                                       // 94   // 102
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);              // 95   // 103
        return (this._a == 1) ?                                                                              // 96   // 104
          "hsv("  + h + ", " + s + "%, " + v + "%)" :                                                        // 97   // 105
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";                                    // 98   // 106
    },                                                                                                       // 99   // 107
    toHsl: function() {                                                                                      // 100  // 108
        var hsl = rgbToHsl(this._r, this._g, this._b);                                                       // 101  // 109
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };                                           // 102  // 110
    },                                                                                                       // 103  // 111
    toHslString: function() {                                                                                // 104  // 112
        var hsl = rgbToHsl(this._r, this._g, this._b);                                                       // 105  // 113
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);              // 106  // 114
        return (this._a == 1) ?                                                                              // 107  // 115
          "hsl("  + h + ", " + s + "%, " + l + "%)" :                                                        // 108  // 116
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";                                    // 109  // 117
    },                                                                                                       // 110  // 118
    toHex: function(allow3Char) {                                                                            // 111  // 119
        return rgbToHex(this._r, this._g, this._b, allow3Char);                                              // 112  // 120
    },                                                                                                       // 113  // 121
    toHexString: function(allow3Char) {                                                                      // 114  // 122
        return '#' + this.toHex(allow3Char);                                                                 // 115  // 123
    },                                                                                                       // 116  // 124
    toHex8: function() {                                                                                     // 117  // 125
        return rgbaToHex(this._r, this._g, this._b, this._a);                                                // 118  // 126
    },                                                                                                       // 119  // 127
    toHex8String: function() {                                                                               // 120  // 128
        return '#' + this.toHex8();                                                                          // 121  // 129
    },                                                                                                       // 122  // 130
    toRgb: function() {                                                                                      // 123  // 131
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };          // 124  // 132
    },                                                                                                       // 125  // 133
    toRgbString: function() {                                                                                // 126  // 134
        return (this._a == 1) ?                                                                              // 127  // 135
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :       // 128  // 136
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },                                                                                                       // 130  // 138
    toPercentageRgb: function() {                                                                            // 131  // 139
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },                                                                                                       // 133  // 141
    toPercentageRgbString: function() {                                                                      // 134  // 142
        return (this._a == 1) ?                                                                              // 135  // 143
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },                                                                                                       // 138  // 146
    toName: function() {                                                                                     // 139  // 147
        if (this._a === 0) {                                                                                 // 140  // 148
            return "transparent";                                                                            // 141  // 149
        }                                                                                                    // 142  // 150
                                                                                                             // 143  // 151
        if (this._a < 1) {                                                                                   // 144  // 152
            return false;                                                                                    // 145  // 153
        }                                                                                                    // 146  // 154
                                                                                                             // 147  // 155
        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;                                 // 148  // 156
    },                                                                                                       // 149  // 157
    toFilter: function(secondColor) {                                                                        // 150  // 158
        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);                                // 151  // 159
        var secondHex8String = hex8String;                                                                   // 152  // 160
        var gradientType = this._gradientType ? "GradientType = 1, " : "";                                   // 153  // 161
                                                                                                             // 154  // 162
        if (secondColor) {                                                                                   // 155  // 163
            var s = tinycolor(secondColor);                                                                  // 156  // 164
            secondHex8String = s.toHex8String();                                                             // 157  // 165
        }                                                                                                    // 158  // 166
                                                                                                             // 159  // 167
        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },                                                                                                       // 161  // 169
    toString: function(format) {                                                                             // 162  // 170
        var formatSet = !!format;                                                                            // 163  // 171
        format = format || this._format;                                                                     // 164  // 172
                                                                                                             // 165  // 173
        var formattedString = false;                                                                         // 166  // 174
        var hasAlpha = this._a < 1 && this._a >= 0;                                                          // 167  // 175
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");
                                                                                                             // 169  // 177
        if (needsAlphaFormat) {                                                                              // 170  // 178
            // Special case for "transparent", all other non-alpha formats                                   // 171  // 179
            // will return rgba when there is transparency.                                                  // 172  // 180
            if (format === "name" && this._a === 0) {                                                        // 173  // 181
                return this.toName();                                                                        // 174  // 182
            }                                                                                                // 175  // 183
            return this.toRgbString();                                                                       // 176  // 184
        }                                                                                                    // 177  // 185
        if (format === "rgb") {                                                                              // 178  // 186
            formattedString = this.toRgbString();                                                            // 179  // 187
        }                                                                                                    // 180  // 188
        if (format === "prgb") {                                                                             // 181  // 189
            formattedString = this.toPercentageRgbString();                                                  // 182  // 190
        }                                                                                                    // 183  // 191
        if (format === "hex" || format === "hex6") {                                                         // 184  // 192
            formattedString = this.toHexString();                                                            // 185  // 193
        }                                                                                                    // 186  // 194
        if (format === "hex3") {                                                                             // 187  // 195
            formattedString = this.toHexString(true);                                                        // 188  // 196
        }                                                                                                    // 189  // 197
        if (format === "hex8") {                                                                             // 190  // 198
            formattedString = this.toHex8String();                                                           // 191  // 199
        }                                                                                                    // 192  // 200
        if (format === "name") {                                                                             // 193  // 201
            formattedString = this.toName();                                                                 // 194  // 202
        }                                                                                                    // 195  // 203
        if (format === "hsl") {                                                                              // 196  // 204
            formattedString = this.toHslString();                                                            // 197  // 205
        }                                                                                                    // 198  // 206
        if (format === "hsv") {                                                                              // 199  // 207
            formattedString = this.toHsvString();                                                            // 200  // 208
        }                                                                                                    // 201  // 209
                                                                                                             // 202  // 210
        return formattedString || this.toHexString();                                                        // 203  // 211
    },                                                                                                       // 204  // 212
                                                                                                             // 205  // 213
    _applyModification: function(fn, args) {                                                                 // 206  // 214
        var color = fn.apply(null, [this].concat([].slice.call(args)));                                      // 207  // 215
        this._r = color._r;                                                                                  // 208  // 216
        this._g = color._g;                                                                                  // 209  // 217
        this._b = color._b;                                                                                  // 210  // 218
        this.setAlpha(color._a);                                                                             // 211  // 219
        return this;                                                                                         // 212  // 220
    },                                                                                                       // 213  // 221
    lighten: function() {                                                                                    // 214  // 222
        return this._applyModification(lighten, arguments);                                                  // 215  // 223
    },                                                                                                       // 216  // 224
    brighten: function() {                                                                                   // 217  // 225
        return this._applyModification(brighten, arguments);                                                 // 218  // 226
    },                                                                                                       // 219  // 227
    darken: function() {                                                                                     // 220  // 228
        return this._applyModification(darken, arguments);                                                   // 221  // 229
    },                                                                                                       // 222  // 230
    desaturate: function() {                                                                                 // 223  // 231
        return this._applyModification(desaturate, arguments);                                               // 224  // 232
    },                                                                                                       // 225  // 233
    saturate: function() {                                                                                   // 226  // 234
        return this._applyModification(saturate, arguments);                                                 // 227  // 235
    },                                                                                                       // 228  // 236
    greyscale: function() {                                                                                  // 229  // 237
        return this._applyModification(greyscale, arguments);                                                // 230  // 238
    },                                                                                                       // 231  // 239
    spin: function() {                                                                                       // 232  // 240
        return this._applyModification(spin, arguments);                                                     // 233  // 241
    },                                                                                                       // 234  // 242
                                                                                                             // 235  // 243
    _applyCombination: function(fn, args) {                                                                  // 236  // 244
        return fn.apply(null, [this].concat([].slice.call(args)));                                           // 237  // 245
    },                                                                                                       // 238  // 246
    analogous: function() {                                                                                  // 239  // 247
        return this._applyCombination(analogous, arguments);                                                 // 240  // 248
    },                                                                                                       // 241  // 249
    complement: function() {                                                                                 // 242  // 250
        return this._applyCombination(complement, arguments);                                                // 243  // 251
    },                                                                                                       // 244  // 252
    monochromatic: function() {                                                                              // 245  // 253
        return this._applyCombination(monochromatic, arguments);                                             // 246  // 254
    },                                                                                                       // 247  // 255
    splitcomplement: function() {                                                                            // 248  // 256
        return this._applyCombination(splitcomplement, arguments);                                           // 249  // 257
    },                                                                                                       // 250  // 258
    triad: function() {                                                                                      // 251  // 259
        return this._applyCombination(triad, arguments);                                                     // 252  // 260
    },                                                                                                       // 253  // 261
    tetrad: function() {                                                                                     // 254  // 262
        return this._applyCombination(tetrad, arguments);                                                    // 255  // 263
    }                                                                                                        // 256  // 264
};                                                                                                           // 257  // 265
                                                                                                             // 258  // 266
// If input is an object, force 1 into "1.0" to handle ratios properly                                       // 259  // 267
// String input requires "1.0" as input, so 1 will be treated as 1                                           // 260  // 268
tinycolor.fromRatio = function(color, opts) {                                                                // 261  // 269
    if (typeof color == "object") {                                                                          // 262  // 270
        var newColor = {};                                                                                   // 263  // 271
        for (var i in color) {                                                                               // 264  // 272
            if (color.hasOwnProperty(i)) {                                                                   // 265  // 273
                if (i === "a") {                                                                             // 266  // 274
                    newColor[i] = color[i];                                                                  // 267  // 275
                }                                                                                            // 268  // 276
                else {                                                                                       // 269  // 277
                    newColor[i] = convertToPercentage(color[i]);                                             // 270  // 278
                }                                                                                            // 271  // 279
            }                                                                                                // 272  // 280
        }                                                                                                    // 273  // 281
        color = newColor;                                                                                    // 274  // 282
    }                                                                                                        // 275  // 283
                                                                                                             // 276  // 284
    return tinycolor(color, opts);                                                                           // 277  // 285
};                                                                                                           // 278  // 286
                                                                                                             // 279  // 287
// Given a string or object, convert that input to RGB                                                       // 280  // 288
// Possible string inputs:                                                                                   // 281  // 289
//                                                                                                           // 282  // 290
//     "red"                                                                                                 // 283  // 291
//     "#f00" or "f00"                                                                                       // 284  // 292
//     "#ff0000" or "ff0000"                                                                                 // 285  // 293
//     "#ff000000" or "ff000000"                                                                             // 286  // 294
//     "rgb 255 0 0" or "rgb (255, 0, 0)"                                                                    // 287  // 295
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"                                                                      // 288  // 296
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"                                                          // 289  // 297
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"                                                          // 290  // 298
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"                                                               // 291  // 299
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"                                                       // 292  // 300
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"                                                             // 293  // 301
//                                                                                                           // 294  // 302
function inputToRGB(color) {                                                                                 // 295  // 303
                                                                                                             // 296  // 304
    var rgb = { r: 0, g: 0, b: 0 };                                                                          // 297  // 305
    var a = 1;                                                                                               // 298  // 306
    var ok = false;                                                                                          // 299  // 307
    var format = false;                                                                                      // 300  // 308
                                                                                                             // 301  // 309
    if (typeof color == "string") {                                                                          // 302  // 310
        color = stringInputToObject(color);                                                                  // 303  // 311
    }                                                                                                        // 304  // 312
                                                                                                             // 305  // 313
    if (typeof color == "object") {                                                                          // 306  // 314
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {           // 307  // 315
            rgb = rgbToRgb(color.r, color.g, color.b);                                                       // 308  // 316
            ok = true;                                                                                       // 309  // 317
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";                                    // 310  // 318
        }                                                                                                    // 311  // 319
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {      // 312  // 320
            color.s = convertToPercentage(color.s);                                                          // 313  // 321
            color.v = convertToPercentage(color.v);                                                          // 314  // 322
            rgb = hsvToRgb(color.h, color.s, color.v);                                                       // 315  // 323
            ok = true;                                                                                       // 316  // 324
            format = "hsv";                                                                                  // 317  // 325
        }                                                                                                    // 318  // 326
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {      // 319  // 327
            color.s = convertToPercentage(color.s);                                                          // 320  // 328
            color.l = convertToPercentage(color.l);                                                          // 321  // 329
            rgb = hslToRgb(color.h, color.s, color.l);                                                       // 322  // 330
            ok = true;                                                                                       // 323  // 331
            format = "hsl";                                                                                  // 324  // 332
        }                                                                                                    // 325  // 333
                                                                                                             // 326  // 334
        if (color.hasOwnProperty("a")) {                                                                     // 327  // 335
            a = color.a;                                                                                     // 328  // 336
        }                                                                                                    // 329  // 337
    }                                                                                                        // 330  // 338
                                                                                                             // 331  // 339
    a = boundAlpha(a);                                                                                       // 332  // 340
                                                                                                             // 333  // 341
    return {                                                                                                 // 334  // 342
        ok: ok,                                                                                              // 335  // 343
        format: color.format || format,                                                                      // 336  // 344
        r: mathMin(255, mathMax(rgb.r, 0)),                                                                  // 337  // 345
        g: mathMin(255, mathMax(rgb.g, 0)),                                                                  // 338  // 346
        b: mathMin(255, mathMax(rgb.b, 0)),                                                                  // 339  // 347
        a: a                                                                                                 // 340  // 348
    };                                                                                                       // 341  // 349
}                                                                                                            // 342  // 350
                                                                                                             // 343  // 351
                                                                                                             // 344  // 352
// Conversion Functions                                                                                      // 345  // 353
// --------------------                                                                                      // 346  // 354
                                                                                                             // 347  // 355
// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:                                             // 348  // 356
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript> // 349  // 357
                                                                                                             // 350  // 358
// `rgbToRgb`                                                                                                // 351  // 359
// Handle bounds / percentage checking to conform to CSS color spec                                          // 352  // 360
// <http://www.w3.org/TR/css3-color/>                                                                        // 353  // 361
// *Assumes:* r, g, b in [0, 255] or [0, 1]                                                                  // 354  // 362
// *Returns:* { r, g, b } in [0, 255]                                                                        // 355  // 363
function rgbToRgb(r, g, b){                                                                                  // 356  // 364
    return {                                                                                                 // 357  // 365
        r: bound01(r, 255) * 255,                                                                            // 358  // 366
        g: bound01(g, 255) * 255,                                                                            // 359  // 367
        b: bound01(b, 255) * 255                                                                             // 360  // 368
    };                                                                                                       // 361  // 369
}                                                                                                            // 362  // 370
                                                                                                             // 363  // 371
// `rgbToHsl`                                                                                                // 364  // 372
// Converts an RGB color value to HSL.                                                                       // 365  // 373
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]                                                // 366  // 374
// *Returns:* { h, s, l } in [0,1]                                                                           // 367  // 375
function rgbToHsl(r, g, b) {                                                                                 // 368  // 376
                                                                                                             // 369  // 377
    r = bound01(r, 255);                                                                                     // 370  // 378
    g = bound01(g, 255);                                                                                     // 371  // 379
    b = bound01(b, 255);                                                                                     // 372  // 380
                                                                                                             // 373  // 381
    var max = mathMax(r, g, b), min = mathMin(r, g, b);                                                      // 374  // 382
    var h, s, l = (max + min) / 2;                                                                           // 375  // 383
                                                                                                             // 376  // 384
    if(max == min) {                                                                                         // 377  // 385
        h = s = 0; // achromatic                                                                             // 378  // 386
    }                                                                                                        // 379  // 387
    else {                                                                                                   // 380  // 388
        var d = max - min;                                                                                   // 381  // 389
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);                                                 // 382  // 390
        switch(max) {                                                                                        // 383  // 391
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;                                                // 384  // 392
            case g: h = (b - r) / d + 2; break;                                                              // 385  // 393
            case b: h = (r - g) / d + 4; break;                                                              // 386  // 394
        }                                                                                                    // 387  // 395
                                                                                                             // 388  // 396
        h /= 6;                                                                                              // 389  // 397
    }                                                                                                        // 390  // 398
                                                                                                             // 391  // 399
    return { h: h, s: s, l: l };                                                                             // 392  // 400
}                                                                                                            // 393  // 401
                                                                                                             // 394  // 402
// `hslToRgb`                                                                                                // 395  // 403
// Converts an HSL color value to RGB.                                                                       // 396  // 404
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]              // 397  // 405
// *Returns:* { r, g, b } in the set [0, 255]                                                                // 398  // 406
function hslToRgb(h, s, l) {                                                                                 // 399  // 407
    var r, g, b;                                                                                             // 400  // 408
                                                                                                             // 401  // 409
    h = bound01(h, 360);                                                                                     // 402  // 410
    s = bound01(s, 100);                                                                                     // 403  // 411
    l = bound01(l, 100);                                                                                     // 404  // 412
                                                                                                             // 405  // 413
    function hue2rgb(p, q, t) {                                                                              // 406  // 414
        if(t < 0) t += 1;                                                                                    // 407  // 415
        if(t > 1) t -= 1;                                                                                    // 408  // 416
        if(t < 1/6) return p + (q - p) * 6 * t;                                                              // 409  // 417
        if(t < 1/2) return q;                                                                                // 410  // 418
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;                                                      // 411  // 419
        return p;                                                                                            // 412  // 420
    }                                                                                                        // 413  // 421
                                                                                                             // 414  // 422
    if(s === 0) {                                                                                            // 415  // 423
        r = g = b = l; // achromatic                                                                         // 416  // 424
    }                                                                                                        // 417  // 425
    else {                                                                                                   // 418  // 426
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;                                                       // 419  // 427
        var p = 2 * l - q;                                                                                   // 420  // 428
        r = hue2rgb(p, q, h + 1/3);                                                                          // 421  // 429
        g = hue2rgb(p, q, h);                                                                                // 422  // 430
        b = hue2rgb(p, q, h - 1/3);                                                                          // 423  // 431
    }                                                                                                        // 424  // 432
                                                                                                             // 425  // 433
    return { r: r * 255, g: g * 255, b: b * 255 };                                                           // 426  // 434
}                                                                                                            // 427  // 435
                                                                                                             // 428  // 436
// `rgbToHsv`                                                                                                // 429  // 437
// Converts an RGB color value to HSV                                                                        // 430  // 438
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]                                        // 431  // 439
// *Returns:* { h, s, v } in [0,1]                                                                           // 432  // 440
function rgbToHsv(r, g, b) {                                                                                 // 433  // 441
                                                                                                             // 434  // 442
    r = bound01(r, 255);                                                                                     // 435  // 443
    g = bound01(g, 255);                                                                                     // 436  // 444
    b = bound01(b, 255);                                                                                     // 437  // 445
                                                                                                             // 438  // 446
    var max = mathMax(r, g, b), min = mathMin(r, g, b);                                                      // 439  // 447
    var h, s, v = max;                                                                                       // 440  // 448
                                                                                                             // 441  // 449
    var d = max - min;                                                                                       // 442  // 450
    s = max === 0 ? 0 : d / max;                                                                             // 443  // 451
                                                                                                             // 444  // 452
    if(max == min) {                                                                                         // 445  // 453
        h = 0; // achromatic                                                                                 // 446  // 454
    }                                                                                                        // 447  // 455
    else {                                                                                                   // 448  // 456
        switch(max) {                                                                                        // 449  // 457
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;                                                // 450  // 458
            case g: h = (b - r) / d + 2; break;                                                              // 451  // 459
            case b: h = (r - g) / d + 4; break;                                                              // 452  // 460
        }                                                                                                    // 453  // 461
        h /= 6;                                                                                              // 454  // 462
    }                                                                                                        // 455  // 463
    return { h: h, s: s, v: v };                                                                             // 456  // 464
}                                                                                                            // 457  // 465
                                                                                                             // 458  // 466
// `hsvToRgb`                                                                                                // 459  // 467
// Converts an HSV color value to RGB.                                                                       // 460  // 468
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]           // 461  // 469
// *Returns:* { r, g, b } in the set [0, 255]                                                                // 462  // 470
 function hsvToRgb(h, s, v) {                                                                                // 463  // 471
                                                                                                             // 464  // 472
    h = bound01(h, 360) * 6;                                                                                 // 465  // 473
    s = bound01(s, 100);                                                                                     // 466  // 474
    v = bound01(v, 100);                                                                                     // 467  // 475
                                                                                                             // 468  // 476
    var i = math.floor(h),                                                                                   // 469  // 477
        f = h - i,                                                                                           // 470  // 478
        p = v * (1 - s),                                                                                     // 471  // 479
        q = v * (1 - f * s),                                                                                 // 472  // 480
        t = v * (1 - (1 - f) * s),                                                                           // 473  // 481
        mod = i % 6,                                                                                         // 474  // 482
        r = [v, q, p, p, t, v][mod],                                                                         // 475  // 483
        g = [t, v, v, q, p, p][mod],                                                                         // 476  // 484
        b = [p, p, t, v, v, q][mod];                                                                         // 477  // 485
                                                                                                             // 478  // 486
    return { r: r * 255, g: g * 255, b: b * 255 };                                                           // 479  // 487
}                                                                                                            // 480  // 488
                                                                                                             // 481  // 489
// `rgbToHex`                                                                                                // 482  // 490
// Converts an RGB color to hex                                                                              // 483  // 491
// Assumes r, g, and b are contained in the set [0, 255]                                                     // 484  // 492
// Returns a 3 or 6 character hex                                                                            // 485  // 493
function rgbToHex(r, g, b, allow3Char) {                                                                     // 486  // 494
                                                                                                             // 487  // 495
    var hex = [                                                                                              // 488  // 496
        pad2(mathRound(r).toString(16)),                                                                     // 489  // 497
        pad2(mathRound(g).toString(16)),                                                                     // 490  // 498
        pad2(mathRound(b).toString(16))                                                                      // 491  // 499
    ];                                                                                                       // 492  // 500
                                                                                                             // 493  // 501
    // Return a 3 character hex if possible                                                                  // 494  // 502
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);                                       // 496  // 504
    }                                                                                                        // 497  // 505
                                                                                                             // 498  // 506
    return hex.join("");                                                                                     // 499  // 507
}                                                                                                            // 500  // 508
    // `rgbaToHex`                                                                                           // 501  // 509
    // Converts an RGBA color plus alpha transparency to hex                                                 // 502  // 510
    // Assumes r, g, b and a are contained in the set [0, 255]                                               // 503  // 511
    // Returns an 8 character hex                                                                            // 504  // 512
    function rgbaToHex(r, g, b, a) {                                                                         // 505  // 513
                                                                                                             // 506  // 514
        var hex = [                                                                                          // 507  // 515
            pad2(convertDecimalToHex(a)),                                                                    // 508  // 516
            pad2(mathRound(r).toString(16)),                                                                 // 509  // 517
            pad2(mathRound(g).toString(16)),                                                                 // 510  // 518
            pad2(mathRound(b).toString(16))                                                                  // 511  // 519
        ];                                                                                                   // 512  // 520
                                                                                                             // 513  // 521
        return hex.join("");                                                                                 // 514  // 522
    }                                                                                                        // 515  // 523
                                                                                                             // 516  // 524
// `equals`                                                                                                  // 517  // 525
// Can be called with any tinycolor input                                                                    // 518  // 526
tinycolor.equals = function (color1, color2) {                                                               // 519  // 527
    if (!color1 || !color2) { return false; }                                                                // 520  // 528
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();                               // 521  // 529
};                                                                                                           // 522  // 530
tinycolor.random = function() {                                                                              // 523  // 531
    return tinycolor.fromRatio({                                                                             // 524  // 532
        r: mathRandom(),                                                                                     // 525  // 533
        g: mathRandom(),                                                                                     // 526  // 534
        b: mathRandom()                                                                                      // 527  // 535
    });                                                                                                      // 528  // 536
};                                                                                                           // 529  // 537
                                                                                                             // 530  // 538
                                                                                                             // 531  // 539
// Modification Functions                                                                                    // 532  // 540
// ----------------------                                                                                    // 533  // 541
// Thanks to less.js for some of the basics here                                                             // 534  // 542
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>                                  // 535  // 543
                                                                                                             // 536  // 544
function desaturate(color, amount) {                                                                         // 537  // 545
    amount = (amount === 0) ? 0 : (amount || 10);                                                            // 538  // 546
    var hsl = tinycolor(color).toHsl();                                                                      // 539  // 547
    hsl.s -= amount / 100;                                                                                   // 540  // 548
    hsl.s = clamp01(hsl.s);                                                                                  // 541  // 549
    return tinycolor(hsl);                                                                                   // 542  // 550
}                                                                                                            // 543  // 551
                                                                                                             // 544  // 552
function saturate(color, amount) {                                                                           // 545  // 553
    amount = (amount === 0) ? 0 : (amount || 10);                                                            // 546  // 554
    var hsl = tinycolor(color).toHsl();                                                                      // 547  // 555
    hsl.s += amount / 100;                                                                                   // 548  // 556
    hsl.s = clamp01(hsl.s);                                                                                  // 549  // 557
    return tinycolor(hsl);                                                                                   // 550  // 558
}                                                                                                            // 551  // 559
                                                                                                             // 552  // 560
function greyscale(color) {                                                                                  // 553  // 561
    return tinycolor(color).desaturate(100);                                                                 // 554  // 562
}                                                                                                            // 555  // 563
                                                                                                             // 556  // 564
function lighten (color, amount) {                                                                           // 557  // 565
    amount = (amount === 0) ? 0 : (amount || 10);                                                            // 558  // 566
    var hsl = tinycolor(color).toHsl();                                                                      // 559  // 567
    hsl.l += amount / 100;                                                                                   // 560  // 568
    hsl.l = clamp01(hsl.l);                                                                                  // 561  // 569
    return tinycolor(hsl);                                                                                   // 562  // 570
}                                                                                                            // 563  // 571
                                                                                                             // 564  // 572
function brighten(color, amount) {                                                                           // 565  // 573
    amount = (amount === 0) ? 0 : (amount || 10);                                                            // 566  // 574
    var rgb = tinycolor(color).toRgb();                                                                      // 567  // 575
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));                             // 568  // 576
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));                             // 569  // 577
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));                             // 570  // 578
    return tinycolor(rgb);                                                                                   // 571  // 579
}                                                                                                            // 572  // 580
                                                                                                             // 573  // 581
function darken (color, amount) {                                                                            // 574  // 582
    amount = (amount === 0) ? 0 : (amount || 10);                                                            // 575  // 583
    var hsl = tinycolor(color).toHsl();                                                                      // 576  // 584
    hsl.l -= amount / 100;                                                                                   // 577  // 585
    hsl.l = clamp01(hsl.l);                                                                                  // 578  // 586
    return tinycolor(hsl);                                                                                   // 579  // 587
}                                                                                                            // 580  // 588
                                                                                                             // 581  // 589
// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.                 // 582  // 590
// Values outside of this range will be wrapped into this range.                                             // 583  // 591
function spin(color, amount) {                                                                               // 584  // 592
    var hsl = tinycolor(color).toHsl();                                                                      // 585  // 593
    var hue = (mathRound(hsl.h) + amount) % 360;                                                             // 586  // 594
    hsl.h = hue < 0 ? 360 + hue : hue;                                                                       // 587  // 595
    return tinycolor(hsl);                                                                                   // 588  // 596
}                                                                                                            // 589  // 597
                                                                                                             // 590  // 598
// Combination Functions                                                                                     // 591  // 599
// ---------------------                                                                                     // 592  // 600
// Thanks to jQuery xColor for some of the ideas behind these                                                // 593  // 601
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>                                  // 594  // 602
                                                                                                             // 595  // 603
function complement(color) {                                                                                 // 596  // 604
    var hsl = tinycolor(color).toHsl();                                                                      // 597  // 605
    hsl.h = (hsl.h + 180) % 360;                                                                             // 598  // 606
    return tinycolor(hsl);                                                                                   // 599  // 607
}                                                                                                            // 600  // 608
                                                                                                             // 601  // 609
function triad(color) {                                                                                      // 602  // 610
    var hsl = tinycolor(color).toHsl();                                                                      // 603  // 611
    var h = hsl.h;                                                                                           // 604  // 612
    return [                                                                                                 // 605  // 613
        tinycolor(color),                                                                                    // 606  // 614
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),                                               // 607  // 615
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })                                                // 608  // 616
    ];                                                                                                       // 609  // 617
}                                                                                                            // 610  // 618
                                                                                                             // 611  // 619
function tetrad(color) {                                                                                     // 612  // 620
    var hsl = tinycolor(color).toHsl();                                                                      // 613  // 621
    var h = hsl.h;                                                                                           // 614  // 622
    return [                                                                                                 // 615  // 623
        tinycolor(color),                                                                                    // 616  // 624
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),                                                // 617  // 625
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),                                               // 618  // 626
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })                                                // 619  // 627
    ];                                                                                                       // 620  // 628
}                                                                                                            // 621  // 629
                                                                                                             // 622  // 630
function splitcomplement(color) {                                                                            // 623  // 631
    var hsl = tinycolor(color).toHsl();                                                                      // 624  // 632
    var h = hsl.h;                                                                                           // 625  // 633
    return [                                                                                                 // 626  // 634
        tinycolor(color),                                                                                    // 627  // 635
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),                                                 // 628  // 636
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})                                                 // 629  // 637
    ];                                                                                                       // 630  // 638
}                                                                                                            // 631  // 639
                                                                                                             // 632  // 640
function analogous(color, results, slices) {                                                                 // 633  // 641
    results = results || 6;                                                                                  // 634  // 642
    slices = slices || 30;                                                                                   // 635  // 643
                                                                                                             // 636  // 644
    var hsl = tinycolor(color).toHsl();                                                                      // 637  // 645
    var part = 360 / slices;                                                                                 // 638  // 646
    var ret = [tinycolor(color)];                                                                            // 639  // 647
                                                                                                             // 640  // 648
    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {                               // 641  // 649
        hsl.h = (hsl.h + part) % 360;                                                                        // 642  // 650
        ret.push(tinycolor(hsl));                                                                            // 643  // 651
    }                                                                                                        // 644  // 652
    return ret;                                                                                              // 645  // 653
}                                                                                                            // 646  // 654
                                                                                                             // 647  // 655
function monochromatic(color, results) {                                                                     // 648  // 656
    results = results || 6;                                                                                  // 649  // 657
    var hsv = tinycolor(color).toHsv();                                                                      // 650  // 658
    var h = hsv.h, s = hsv.s, v = hsv.v;                                                                     // 651  // 659
    var ret = [];                                                                                            // 652  // 660
    var modification = 1 / results;                                                                          // 653  // 661
                                                                                                             // 654  // 662
    while (results--) {                                                                                      // 655  // 663
        ret.push(tinycolor({ h: h, s: s, v: v}));                                                            // 656  // 664
        v = (v + modification) % 1;                                                                          // 657  // 665
    }                                                                                                        // 658  // 666
                                                                                                             // 659  // 667
    return ret;                                                                                              // 660  // 668
}                                                                                                            // 661  // 669
                                                                                                             // 662  // 670
// Utility Functions                                                                                         // 663  // 671
// ---------------------                                                                                     // 664  // 672
                                                                                                             // 665  // 673
tinycolor.mix = function(color1, color2, amount) {                                                           // 666  // 674
    amount = (amount === 0) ? 0 : (amount || 50);                                                            // 667  // 675
                                                                                                             // 668  // 676
    var rgb1 = tinycolor(color1).toRgb();                                                                    // 669  // 677
    var rgb2 = tinycolor(color2).toRgb();                                                                    // 670  // 678
                                                                                                             // 671  // 679
    var p = amount / 100;                                                                                    // 672  // 680
    var w = p * 2 - 1;                                                                                       // 673  // 681
    var a = rgb2.a - rgb1.a;                                                                                 // 674  // 682
                                                                                                             // 675  // 683
    var w1;                                                                                                  // 676  // 684
                                                                                                             // 677  // 685
    if (w * a == -1) {                                                                                       // 678  // 686
        w1 = w;                                                                                              // 679  // 687
    } else {                                                                                                 // 680  // 688
        w1 = (w + a) / (1 + w * a);                                                                          // 681  // 689
    }                                                                                                        // 682  // 690
                                                                                                             // 683  // 691
    w1 = (w1 + 1) / 2;                                                                                       // 684  // 692
                                                                                                             // 685  // 693
    var w2 = 1 - w1;                                                                                         // 686  // 694
                                                                                                             // 687  // 695
    var rgba = {                                                                                             // 688  // 696
        r: rgb2.r * w1 + rgb1.r * w2,                                                                        // 689  // 697
        g: rgb2.g * w1 + rgb1.g * w2,                                                                        // 690  // 698
        b: rgb2.b * w1 + rgb1.b * w2,                                                                        // 691  // 699
        a: rgb2.a * p  + rgb1.a * (1 - p)                                                                    // 692  // 700
    };                                                                                                       // 693  // 701
                                                                                                             // 694  // 702
    return tinycolor(rgba);                                                                                  // 695  // 703
};                                                                                                           // 696  // 704
                                                                                                             // 697  // 705
                                                                                                             // 698  // 706
// Readability Functions                                                                                     // 699  // 707
// ---------------------                                                                                     // 700  // 708
// <http://www.w3.org/TR/AERT#color-contrast>                                                                // 701  // 709
                                                                                                             // 702  // 710
// `readability`                                                                                             // 703  // 711
// Analyze the 2 colors and returns an object with the following properties:                                 // 704  // 712
//    `brightness`: difference in brightness between the two colors                                          // 705  // 713
//    `color`: difference in color/hue between the two colors                                                // 706  // 714
tinycolor.readability = function(color1, color2) {                                                           // 707  // 715
    var c1 = tinycolor(color1);                                                                              // 708  // 716
    var c2 = tinycolor(color2);                                                                              // 709  // 717
    var rgb1 = c1.toRgb();                                                                                   // 710  // 718
    var rgb2 = c2.toRgb();                                                                                   // 711  // 719
    var brightnessA = c1.getBrightness();                                                                    // 712  // 720
    var brightnessB = c2.getBrightness();                                                                    // 713  // 721
    var colorDiff = (                                                                                        // 714  // 722
        Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +                                                // 715  // 723
        Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +                                                // 716  // 724
        Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)                                                  // 717  // 725
    );                                                                                                       // 718  // 726
                                                                                                             // 719  // 727
    return {                                                                                                 // 720  // 728
        brightness: Math.abs(brightnessA - brightnessB),                                                     // 721  // 729
        color: colorDiff                                                                                     // 722  // 730
    };                                                                                                       // 723  // 731
};                                                                                                           // 724  // 732
                                                                                                             // 725  // 733
// `readable`                                                                                                // 726  // 734
// http://www.w3.org/TR/AERT#color-contrast                                                                  // 727  // 735
// Ensure that foreground and background color combinations provide sufficient contrast.                     // 728  // 736
// *Example*                                                                                                 // 729  // 737
//    tinycolor.isReadable("#000", "#111") => false                                                          // 730  // 738
tinycolor.isReadable = function(color1, color2) {                                                            // 731  // 739
    var readability = tinycolor.readability(color1, color2);                                                 // 732  // 740
    return readability.brightness > 125 && readability.color > 500;                                          // 733  // 741
};                                                                                                           // 734  // 742
                                                                                                             // 735  // 743
// `mostReadable`                                                                                            // 736  // 744
// Given a base color and a list of possible foreground or background                                        // 737  // 745
// colors for that base, returns the most readable color.                                                    // 738  // 746
// *Example*                                                                                                 // 739  // 747
//    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"                                             // 740  // 748
tinycolor.mostReadable = function(baseColor, colorList) {                                                    // 741  // 749
    var bestColor = null;                                                                                    // 742  // 750
    var bestScore = 0;                                                                                       // 743  // 751
    var bestIsReadable = false;                                                                              // 744  // 752
    for (var i=0; i < colorList.length; i++) {                                                               // 745  // 753
                                                                                                             // 746  // 754
        // We normalize both around the "acceptable" breaking point,                                         // 747  // 755
        // but rank brightness constrast higher than hue.                                                    // 748  // 756
                                                                                                             // 749  // 757
        var readability = tinycolor.readability(baseColor, colorList[i]);                                    // 750  // 758
        var readable = readability.brightness > 125 && readability.color > 500;                              // 751  // 759
        var score = 3 * (readability.brightness / 125) + (readability.color / 500);                          // 752  // 760
                                                                                                             // 753  // 761
        if ((readable && ! bestIsReadable) ||                                                                // 754  // 762
            (readable && bestIsReadable && score > bestScore) ||                                             // 755  // 763
            ((! readable) && (! bestIsReadable) && score > bestScore)) {                                     // 756  // 764
            bestIsReadable = readable;                                                                       // 757  // 765
            bestScore = score;                                                                               // 758  // 766
            bestColor = tinycolor(colorList[i]);                                                             // 759  // 767
        }                                                                                                    // 760  // 768
    }                                                                                                        // 761  // 769
    return bestColor;                                                                                        // 762  // 770
};                                                                                                           // 763  // 771
                                                                                                             // 764  // 772
                                                                                                             // 765  // 773
// Big List of Colors                                                                                        // 766  // 774
// ------------------                                                                                        // 767  // 775
// <http://www.w3.org/TR/css3-color/#svg-color>                                                              // 768  // 776
var names = tinycolor.names = {                                                                              // 769  // 777
    aliceblue: "f0f8ff",                                                                                     // 770  // 778
    antiquewhite: "faebd7",                                                                                  // 771  // 779
    aqua: "0ff",                                                                                             // 772  // 780
    aquamarine: "7fffd4",                                                                                    // 773  // 781
    azure: "f0ffff",                                                                                         // 774  // 782
    beige: "f5f5dc",                                                                                         // 775  // 783
    bisque: "ffe4c4",                                                                                        // 776  // 784
    black: "000",                                                                                            // 777  // 785
    blanchedalmond: "ffebcd",                                                                                // 778  // 786
    blue: "00f",                                                                                             // 779  // 787
    blueviolet: "8a2be2",                                                                                    // 780  // 788
    brown: "a52a2a",                                                                                         // 781  // 789
    burlywood: "deb887",                                                                                     // 782  // 790
    burntsienna: "ea7e5d",                                                                                   // 783  // 791
    cadetblue: "5f9ea0",                                                                                     // 784  // 792
    chartreuse: "7fff00",                                                                                    // 785  // 793
    chocolate: "d2691e",                                                                                     // 786  // 794
    coral: "ff7f50",                                                                                         // 787  // 795
    cornflowerblue: "6495ed",                                                                                // 788  // 796
    cornsilk: "fff8dc",                                                                                      // 789  // 797
    crimson: "dc143c",                                                                                       // 790  // 798
    cyan: "0ff",                                                                                             // 791  // 799
    darkblue: "00008b",                                                                                      // 792  // 800
    darkcyan: "008b8b",                                                                                      // 793  // 801
    darkgoldenrod: "b8860b",                                                                                 // 794  // 802
    darkgray: "a9a9a9",                                                                                      // 795  // 803
    darkgreen: "006400",                                                                                     // 796  // 804
    darkgrey: "a9a9a9",                                                                                      // 797  // 805
    darkkhaki: "bdb76b",                                                                                     // 798  // 806
    darkmagenta: "8b008b",                                                                                   // 799  // 807
    darkolivegreen: "556b2f",                                                                                // 800  // 808
    darkorange: "ff8c00",                                                                                    // 801  // 809
    darkorchid: "9932cc",                                                                                    // 802  // 810
    darkred: "8b0000",                                                                                       // 803  // 811
    darksalmon: "e9967a",                                                                                    // 804  // 812
    darkseagreen: "8fbc8f",                                                                                  // 805  // 813
    darkslateblue: "483d8b",                                                                                 // 806  // 814
    darkslategray: "2f4f4f",                                                                                 // 807  // 815
    darkslategrey: "2f4f4f",                                                                                 // 808  // 816
    darkturquoise: "00ced1",                                                                                 // 809  // 817
    darkviolet: "9400d3",                                                                                    // 810  // 818
    deeppink: "ff1493",                                                                                      // 811  // 819
    deepskyblue: "00bfff",                                                                                   // 812  // 820
    dimgray: "696969",                                                                                       // 813  // 821
    dimgrey: "696969",                                                                                       // 814  // 822
    dodgerblue: "1e90ff",                                                                                    // 815  // 823
    firebrick: "b22222",                                                                                     // 816  // 824
    floralwhite: "fffaf0",                                                                                   // 817  // 825
    forestgreen: "228b22",                                                                                   // 818  // 826
    fuchsia: "f0f",                                                                                          // 819  // 827
    gainsboro: "dcdcdc",                                                                                     // 820  // 828
    ghostwhite: "f8f8ff",                                                                                    // 821  // 829
    gold: "ffd700",                                                                                          // 822  // 830
    goldenrod: "daa520",                                                                                     // 823  // 831
    gray: "808080",                                                                                          // 824  // 832
    green: "008000",                                                                                         // 825  // 833
    greenyellow: "adff2f",                                                                                   // 826  // 834
    grey: "808080",                                                                                          // 827  // 835
    honeydew: "f0fff0",                                                                                      // 828  // 836
    hotpink: "ff69b4",                                                                                       // 829  // 837
    indianred: "cd5c5c",                                                                                     // 830  // 838
    indigo: "4b0082",                                                                                        // 831  // 839
    ivory: "fffff0",                                                                                         // 832  // 840
    khaki: "f0e68c",                                                                                         // 833  // 841
    lavender: "e6e6fa",                                                                                      // 834  // 842
    lavenderblush: "fff0f5",                                                                                 // 835  // 843
    lawngreen: "7cfc00",                                                                                     // 836  // 844
    lemonchiffon: "fffacd",                                                                                  // 837  // 845
    lightblue: "add8e6",                                                                                     // 838  // 846
    lightcoral: "f08080",                                                                                    // 839  // 847
    lightcyan: "e0ffff",                                                                                     // 840  // 848
    lightgoldenrodyellow: "fafad2",                                                                          // 841  // 849
    lightgray: "d3d3d3",                                                                                     // 842  // 850
    lightgreen: "90ee90",                                                                                    // 843  // 851
    lightgrey: "d3d3d3",                                                                                     // 844  // 852
    lightpink: "ffb6c1",                                                                                     // 845  // 853
    lightsalmon: "ffa07a",                                                                                   // 846  // 854
    lightseagreen: "20b2aa",                                                                                 // 847  // 855
    lightskyblue: "87cefa",                                                                                  // 848  // 856
    lightslategray: "789",                                                                                   // 849  // 857
    lightslategrey: "789",                                                                                   // 850  // 858
    lightsteelblue: "b0c4de",                                                                                // 851  // 859
    lightyellow: "ffffe0",                                                                                   // 852  // 860
    lime: "0f0",                                                                                             // 853  // 861
    limegreen: "32cd32",                                                                                     // 854  // 862
    linen: "faf0e6",                                                                                         // 855  // 863
    magenta: "f0f",                                                                                          // 856  // 864
    maroon: "800000",                                                                                        // 857  // 865
    mediumaquamarine: "66cdaa",                                                                              // 858  // 866
    mediumblue: "0000cd",                                                                                    // 859  // 867
    mediumorchid: "ba55d3",                                                                                  // 860  // 868
    mediumpurple: "9370db",                                                                                  // 861  // 869
    mediumseagreen: "3cb371",                                                                                // 862  // 870
    mediumslateblue: "7b68ee",                                                                               // 863  // 871
    mediumspringgreen: "00fa9a",                                                                             // 864  // 872
    mediumturquoise: "48d1cc",                                                                               // 865  // 873
    mediumvioletred: "c71585",                                                                               // 866  // 874
    midnightblue: "191970",                                                                                  // 867  // 875
    mintcream: "f5fffa",                                                                                     // 868  // 876
    mistyrose: "ffe4e1",                                                                                     // 869  // 877
    moccasin: "ffe4b5",                                                                                      // 870  // 878
    navajowhite: "ffdead",                                                                                   // 871  // 879
    navy: "000080",                                                                                          // 872  // 880
    oldlace: "fdf5e6",                                                                                       // 873  // 881
    olive: "808000",                                                                                         // 874  // 882
    olivedrab: "6b8e23",                                                                                     // 875  // 883
    orange: "ffa500",                                                                                        // 876  // 884
    orangered: "ff4500",                                                                                     // 877  // 885
    orchid: "da70d6",                                                                                        // 878  // 886
    palegoldenrod: "eee8aa",                                                                                 // 879  // 887
    palegreen: "98fb98",                                                                                     // 880  // 888
    paleturquoise: "afeeee",                                                                                 // 881  // 889
    palevioletred: "db7093",                                                                                 // 882  // 890
    papayawhip: "ffefd5",                                                                                    // 883  // 891
    peachpuff: "ffdab9",                                                                                     // 884  // 892
    peru: "cd853f",                                                                                          // 885  // 893
    pink: "ffc0cb",                                                                                          // 886  // 894
    plum: "dda0dd",                                                                                          // 887  // 895
    powderblue: "b0e0e6",                                                                                    // 888  // 896
    purple: "800080",                                                                                        // 889  // 897
    red: "f00",                                                                                              // 890  // 898
    rosybrown: "bc8f8f",                                                                                     // 891  // 899
    royalblue: "4169e1",                                                                                     // 892  // 900
    saddlebrown: "8b4513",                                                                                   // 893  // 901
    salmon: "fa8072",                                                                                        // 894  // 902
    sandybrown: "f4a460",                                                                                    // 895  // 903
    seagreen: "2e8b57",                                                                                      // 896  // 904
    seashell: "fff5ee",                                                                                      // 897  // 905
    sienna: "a0522d",                                                                                        // 898  // 906
    silver: "c0c0c0",                                                                                        // 899  // 907
    skyblue: "87ceeb",                                                                                       // 900  // 908
    slateblue: "6a5acd",                                                                                     // 901  // 909
    slategray: "708090",                                                                                     // 902  // 910
    slategrey: "708090",                                                                                     // 903  // 911
    snow: "fffafa",                                                                                          // 904  // 912
    springgreen: "00ff7f",                                                                                   // 905  // 913
    steelblue: "4682b4",                                                                                     // 906  // 914
    tan: "d2b48c",                                                                                           // 907  // 915
    teal: "008080",                                                                                          // 908  // 916
    thistle: "d8bfd8",                                                                                       // 909  // 917
    tomato: "ff6347",                                                                                        // 910  // 918
    turquoise: "40e0d0",                                                                                     // 911  // 919
    violet: "ee82ee",                                                                                        // 912  // 920
    wheat: "f5deb3",                                                                                         // 913  // 921
    white: "fff",                                                                                            // 914  // 922
    whitesmoke: "f5f5f5",                                                                                    // 915  // 923
    yellow: "ff0",                                                                                           // 916  // 924
    yellowgreen: "9acd32"                                                                                    // 917  // 925
};                                                                                                           // 918  // 926
                                                                                                             // 919  // 927
// Make it easy to access colors via `hexNames[hex]`                                                         // 920  // 928
var hexNames = tinycolor.hexNames = flip(names);                                                             // 921  // 929
                                                                                                             // 922  // 930
                                                                                                             // 923  // 931
// Utilities                                                                                                 // 924  // 932
// ---------                                                                                                 // 925  // 933
                                                                                                             // 926  // 934
// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`                                                       // 927  // 935
function flip(o) {                                                                                           // 928  // 936
    var flipped = { };                                                                                       // 929  // 937
    for (var i in o) {                                                                                       // 930  // 938
        if (o.hasOwnProperty(i)) {                                                                           // 931  // 939
            flipped[o[i]] = i;                                                                               // 932  // 940
        }                                                                                                    // 933  // 941
    }                                                                                                        // 934  // 942
    return flipped;                                                                                          // 935  // 943
}                                                                                                            // 936  // 944
                                                                                                             // 937  // 945
// Return a valid alpha value [0,1] with all invalid values being set to 1                                   // 938  // 946
function boundAlpha(a) {                                                                                     // 939  // 947
    a = parseFloat(a);                                                                                       // 940  // 948
                                                                                                             // 941  // 949
    if (isNaN(a) || a < 0 || a > 1) {                                                                        // 942  // 950
        a = 1;                                                                                               // 943  // 951
    }                                                                                                        // 944  // 952
                                                                                                             // 945  // 953
    return a;                                                                                                // 946  // 954
}                                                                                                            // 947  // 955
                                                                                                             // 948  // 956
// Take input from [0, n] and return it as [0, 1]                                                            // 949  // 957
function bound01(n, max) {                                                                                   // 950  // 958
    if (isOnePointZero(n)) { n = "100%"; }                                                                   // 951  // 959
                                                                                                             // 952  // 960
    var processPercent = isPercentage(n);                                                                    // 953  // 961
    n = mathMin(max, mathMax(0, parseFloat(n)));                                                             // 954  // 962
                                                                                                             // 955  // 963
    // Automatically convert percentage into number                                                          // 956  // 964
    if (processPercent) {                                                                                    // 957  // 965
        n = parseInt(n * max, 10) / 100;                                                                     // 958  // 966
    }                                                                                                        // 959  // 967
                                                                                                             // 960  // 968
    // Handle floating point rounding errors                                                                 // 961  // 969
    if ((math.abs(n - max) < 0.000001)) {                                                                    // 962  // 970
        return 1;                                                                                            // 963  // 971
    }                                                                                                        // 964  // 972
                                                                                                             // 965  // 973
    // Convert into [0, 1] range if it isn't already                                                         // 966  // 974
    return (n % max) / parseFloat(max);                                                                      // 967  // 975
}                                                                                                            // 968  // 976
                                                                                                             // 969  // 977
// Force a number between 0 and 1                                                                            // 970  // 978
function clamp01(val) {                                                                                      // 971  // 979
    return mathMin(1, mathMax(0, val));                                                                      // 972  // 980
}                                                                                                            // 973  // 981
                                                                                                             // 974  // 982
// Parse a base-16 hex value into a base-10 integer                                                          // 975  // 983
function parseIntFromHex(val) {                                                                              // 976  // 984
    return parseInt(val, 16);                                                                                // 977  // 985
}                                                                                                            // 978  // 986
                                                                                                             // 979  // 987
// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1            // 980  // 988
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>   // 981  // 989
function isOnePointZero(n) {                                                                                 // 982  // 990
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;                              // 983  // 991
}                                                                                                            // 984  // 992
                                                                                                             // 985  // 993
// Check to see if string passed in is a percentage                                                          // 986  // 994
function isPercentage(n) {                                                                                   // 987  // 995
    return typeof n === "string" && n.indexOf('%') != -1;                                                    // 988  // 996
}                                                                                                            // 989  // 997
                                                                                                             // 990  // 998
// Force a hex value to have 2 characters                                                                    // 991  // 999
function pad2(c) {                                                                                           // 992  // 1000
    return c.length == 1 ? '0' + c : '' + c;                                                                 // 993  // 1001
}                                                                                                            // 994  // 1002
                                                                                                             // 995  // 1003
// Replace a decimal with it's percentage value                                                              // 996  // 1004
function convertToPercentage(n) {                                                                            // 997  // 1005
    if (n <= 1) {                                                                                            // 998  // 1006
        n = (n * 100) + "%";                                                                                 // 999  // 1007
    }                                                                                                        // 1000
                                                                                                             // 1001
    return n;                                                                                                // 1002
}                                                                                                            // 1003
                                                                                                             // 1004
// Converts a decimal to a hex value                                                                         // 1005
function convertDecimalToHex(d) {                                                                            // 1006
    return Math.round(parseFloat(d) * 255).toString(16);                                                     // 1007
}                                                                                                            // 1008
// Converts a hex value to a decimal                                                                         // 1009
function convertHexToDecimal(h) {                                                                            // 1010
    return (parseIntFromHex(h) / 255);                                                                       // 1011
}                                                                                                            // 1012
                                                                                                             // 1013
var matchers = (function() {                                                                                 // 1014
                                                                                                             // 1015
    // <http://www.w3.org/TR/css3-values/#integers>                                                          // 1016
    var CSS_INTEGER = "[-\\+]?\\d+%?";                                                                       // 1017
                                                                                                             // 1018
    // <http://www.w3.org/TR/css3-values/#number-value>                                                      // 1019
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";                                                                 // 1020
                                                                                                             // 1021
    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.        // 1022
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";                                         // 1023
                                                                                                             // 1024
    // Actual matching.                                                                                      // 1025
    // Parentheses and commas are optional, but not required.                                                // 1026
    // Whitespace can take the place of commas or opening paren                                              // 1027
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
                                                                                                             // 1030
    return {                                                                                                 // 1031
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),                                                          // 1032
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),                                                        // 1033
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),                                                          // 1034
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),                                                        // 1035
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),                                                          // 1036
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,                                          // 1037
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,                                          // 1038
        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/                           // 1039
    };                                                                                                       // 1040
})();                                                                                                        // 1041
                                                                                                             // 1042
// `stringInputToObject`                                                                                     // 1043
// Permissive string parsing.  Take in a number of formats, and output an object                             // 1044
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`                         // 1045
function stringInputToObject(color) {                                                                        // 1046
                                                                                                             // 1047
    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();                                 // 1048
    var named = false;                                                                                       // 1049
    if (names[color]) {                                                                                      // 1050
        color = names[color];                                                                                // 1051
        named = true;                                                                                        // 1052
    }                                                                                                        // 1053
    else if (color == 'transparent') {                                                                       // 1054
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };                                                   // 1055
    }                                                                                                        // 1056
                                                                                                             // 1057
    // Try to match string input using regular expressions.                                                  // 1058
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360] // 1059
    // Just return an object and let the conversion functions handle that.                                   // 1060
    // This way the result will be the same whether the tinycolor is initialized with string or object.      // 1061
    var match;                                                                                               // 1062
    if ((match = matchers.rgb.exec(color))) {                                                                // 1063
        return { r: match[1], g: match[2], b: match[3] };                                                    // 1064
    }                                                                                                        // 1065
    if ((match = matchers.rgba.exec(color))) {                                                               // 1066
        return { r: match[1], g: match[2], b: match[3], a: match[4] };                                       // 1067
    }                                                                                                        // 1068
    if ((match = matchers.hsl.exec(color))) {                                                                // 1069
        return { h: match[1], s: match[2], l: match[3] };                                                    // 1070
    }                                                                                                        // 1071
    if ((match = matchers.hsla.exec(color))) {                                                               // 1072
        return { h: match[1], s: match[2], l: match[3], a: match[4] };                                       // 1073
    }                                                                                                        // 1074
    if ((match = matchers.hsv.exec(color))) {                                                                // 1075
        return { h: match[1], s: match[2], v: match[3] };                                                    // 1076
    }                                                                                                        // 1077
    if ((match = matchers.hex8.exec(color))) {                                                               // 1078
        return {                                                                                             // 1079
            a: convertHexToDecimal(match[1]),                                                                // 1080
            r: parseIntFromHex(match[2]),                                                                    // 1081
            g: parseIntFromHex(match[3]),                                                                    // 1082
            b: parseIntFromHex(match[4]),                                                                    // 1083
            format: named ? "name" : "hex8"                                                                  // 1084
        };                                                                                                   // 1085
    }                                                                                                        // 1086
    if ((match = matchers.hex6.exec(color))) {                                                               // 1087
        return {                                                                                             // 1088
            r: parseIntFromHex(match[1]),                                                                    // 1089
            g: parseIntFromHex(match[2]),                                                                    // 1090
            b: parseIntFromHex(match[3]),                                                                    // 1091
            format: named ? "name" : "hex"                                                                   // 1092
        };                                                                                                   // 1093
    }                                                                                                        // 1094
    if ((match = matchers.hex3.exec(color))) {                                                               // 1095
        return {                                                                                             // 1096
            r: parseIntFromHex(match[1] + '' + match[1]),                                                    // 1097
            g: parseIntFromHex(match[2] + '' + match[2]),                                                    // 1098
            b: parseIntFromHex(match[3] + '' + match[3]),                                                    // 1099
            format: named ? "name" : "hex"                                                                   // 1100
        };                                                                                                   // 1101
    }                                                                                                        // 1102
                                                                                                             // 1103
    return false;                                                                                            // 1104
}                                                                                                            // 1105
                                                                                                             // 1106
return tinycolor;                                                                                            // 1107
                                                                                                             // 1108
////////////////////////////////////////////////////////////////////////////////                             // 1109
// END LIBRARY CODE                                                                                          // 1110
////////////////////////////////////////////////////////////////////////////////                             // 1111
                                                                                                             // 1112
    })();                                                                                                    // 1113
                                                                                                             // 1114
////////////////////////////////////////////////////////////////////////////////                             // 1115
// EXPORTS                                                                                                   // 1116
////////////////////////////////////////////////////////////////////////////////                             // 1117
                                                                                                             // 1118
// Meteor                                                                                                    // 1119
if (typeof Package !== 'undefined') {                                                                        // 1120
    tinycolor = _tinycolor;                                                                                  // 1121
}                                                                                                            // 1122
// AMD / RequireJS                                                                                           // 1123
else if (typeof define !== 'undefined' && define.amd) {                                                      // 1124
  define([], function () {                                                                                   // 1125
      return _tinycolor;                                                                                     // 1126
  });                                                                                                        // 1127
}                                                                                                            // 1128
// Node.js                                                                                                   // 1129
else if (typeof module !== 'undefined' && module.exports) {                                                  // 1130
  module.exports = _tinycolor;                                                                               // 1131
}                                                                                                            // 1132
// included directly via <script> tag                                                                        // 1133
else {                                                                                                       // 1134
  root.tinycolor = _tinycolor;                                                                               // 1135
}                                                                                                            // 1136
                                                                                                             // 1137
})();                                                                                                        // 1138
                                                                                                             // 1139
///////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 1148
                                                                                                                     // 1149
}).call(this);                                                                                                       // 1150
                                                                                                                     // 1151
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aramk:tinycolor'] = {
  tinycolor: tinycolor
};

})();

//# sourceMappingURL=aramk_tinycolor.js.map
