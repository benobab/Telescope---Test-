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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MailChimp;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/miro_mailchimp/packages/miro_mailchimp.js                                                       //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
(function () {                                                                                              // 1
                                                                                                            // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                   //     // 4
// packages/miro:mailchimp/lib/client/mailchimp.js                                                   //     // 5
//                                                                                                   //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                     //     // 8
var subscribeMessage			= 'Get on the mailing list:',                                                 // 1   // 9
	subscribeInvalidEmail		= 'Invalid email address :(',                                                // 2   // 10
	subscribeSubscribing		= 'Subscribing...',                                                           // 3   // 11
	subscribeSuccess			= 'Oh joy! Check your inbox! :)',                                                // 4   // 12
	subscribeAlreadySubscribed	= 'Already subscribed! O.o',                                             // 5   // 13
                                                                                                     // 6   // 14
	subscribeTitle,                                                                                     // 7   // 15
	subscribeEmail,                                                                                     // 8   // 16
	subscribeButton,                                                                                    // 9   // 17
                                                                                                     // 10  // 18
	showMessage = function ( message ) {                                                                // 11  // 19
		if ( subscribeTitle ) {                                                                            // 12  // 20
			subscribeTitle.innerHTML = message;                                                               // 13  // 21
		}                                                                                                  // 14  // 22
	},                                                                                                  // 15  // 23
                                                                                                     // 16  // 24
	isValidEmailAddress = function ( emailAddress ) {                                                   // 17  // 25
		// http://stackoverflow.com/a/46181/11236                                                          // 18  // 26
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                                                                     // 20  // 28
		return re.test( emailAddress );                                                                    // 21  // 29
	},                                                                                                  // 22  // 30
                                                                                                     // 23  // 31
	validateEmailAddress = function ( updateMessage ) {                                                 // 24  // 32
		if ( subscribeEmail.value !== '' && isValidEmailAddress( subscribeEmail.value ) ) {                // 25  // 33
			subscribeButton.disabled = false;                                                                 // 26  // 34
                                                                                                     // 27  // 35
			if ( updateMessage ) {                                                                            // 28  // 36
				showMessage( subscribeMessage );                                                                 // 29  // 37
			}                                                                                                 // 30  // 38
		} else {                                                                                           // 31  // 39
			subscribeButton.disabled = true;                                                                  // 32  // 40
                                                                                                     // 33  // 41
			if ( subscribeEmail.value !== '' ) {                                                              // 34  // 42
				showMessage( subscribeInvalidEmail );                                                            // 35  // 43
			} else if ( updateMessage ) {                                                                     // 36  // 44
				showMessage( subscribeMessage );                                                                 // 37  // 45
			}                                                                                                 // 38  // 46
		}                                                                                                  // 39  // 47
	},                                                                                                  // 40  // 48
                                                                                                     // 41  // 49
	mailChimpListSubscribe = function ( email, listId ) {                                               // 42  // 50
		var mailChimp = new MailChimp( /* apiKey, options */ );                                            // 43  // 51
                                                                                                     // 44  // 52
		mailChimp.call( 'lists', 'subscribe',                                                              // 45  // 53
			{                                                                                                 // 46  // 54
				id   : listId,		// null -> defined @ server                                                      // 47  // 55
				email: {                                                                                         // 48  // 56
					email: email                                                                                    // 49  // 57
				}                                                                                                // 50  // 58
			},                                                                                                // 51  // 59
                                                                                                     // 52  // 60
			function ( error, result ) {                                                                      // 53  // 61
				if ( error ) {                                                                                   // 54  // 62
					switch ( error.error ) {                                                                        // 55  // 63
						case 232:	// 'Email_NotExists'                                                                 // 56  // 64
							showMessage( subscribeInvalidEmail );                                                         // 57  // 65
							break;                                                                                        // 58  // 66
                                                                                                     // 59  // 67
						case 214:	// 'List_AlreadySubscribed'                                                          // 60  // 68
							showMessage( subscribeAlreadySubscribed );                                                    // 61  // 69
							break;                                                                                        // 62  // 70
                                                                                                     // 63  // 71
						case 200:	// 'List_DoesNotExist'                                                               // 64  // 72
							// We shouldn't be here!                                                                      // 65  // 73
							// Oh, well, continue to default...                                                           // 66  // 74
						default:                                                                                       // 67  // 75
							showMessage( 'Error: ' + error.reason );                                                      // 68  // 76
					}                                                                                               // 69  // 77
                                                                                                     // 70  // 78
					console.error( '[MailChimp][Subscribe] Error: %o', error );                                     // 71  // 79
                                                                                                     // 72  // 80
				} else {                                                                                         // 73  // 81
                                                                                                     // 74  // 82
					console.info( '[MailChimp][Subscribe] Yo, ' + subscribeEmail.value + ', ' + subscribeSuccess ); // 75  // 83
					console.info( '[MailChimp][Subscribe] Subscriber: %o', result );                                // 76  // 84
                                                                                                     // 77  // 85
					showMessage( subscribeSuccess );                                                                // 78  // 86
				}                                                                                                // 79  // 87
                                                                                                     // 80  // 88
				subscribeEmail.disabled = false;                                                                 // 81  // 89
				validateEmailAddress( false );                                                                   // 82  // 90
			}                                                                                                 // 83  // 91
		);                                                                                                 // 84  // 92
	},                                                                                                  // 85  // 93
                                                                                                     // 86  // 94
	subscribeGo = function ( eventBubbling ) {                                                          // 87  // 95
		subscribeEmail.disabled  = true;                                                                   // 88  // 96
		subscribeButton.disabled = true;                                                                   // 89  // 97
                                                                                                     // 90  // 98
		showMessage( subscribeSubscribing );                                                               // 91  // 99
                                                                                                     // 92  // 100
		mailChimpListSubscribe( subscribeEmail.value );                                                    // 93  // 101
                                                                                                     // 94  // 102
		// Prevent Event Bubbling                                                                          // 95  // 103
		return eventBubbling;                                                                              // 96  // 104
	};                                                                                                  // 97  // 105
                                                                                                     // 98  // 106
MailChimp = function ( apiKey, options ) {                                                           // 99  // 107
	this._options = {                                                                                   // 100
		apiKey : ( apiKey ) ? apiKey : Session.get( 'MailChimp.apiKey' ),                                  // 101
		options: options                                                                                   // 102
	};                                                                                                  // 103
};                                                                                                   // 104
                                                                                                     // 105
MailChimp.prototype.call = function ( section, method, options, callback ) {                         // 106
	var mailChimpOptions = _.defaults( {}, options );                                                   // 107
                                                                                                     // 108
	switch ( section ) {                                                                                // 109
		case 'lists':                                                                                      // 110
			if ( !mailChimpOptions.id || mailChimpOptions.id === '' ) {                                       // 111
				mailChimpOptions.id = Session.get( 'MailChimp.lists.listId' );                                   // 112
			}                                                                                                 // 113
                                                                                                     // 114
			break;                                                                                            // 115
		default:                                                                                           // 116
	}                                                                                                   // 117
                                                                                                     // 118
	Meteor.call( 'MailChimp',                                                                           // 119
		this._options,                                                                                     // 120
		section,                                                                                           // 121
		method,                                                                                            // 122
		mailChimpOptions,                                                                                  // 123
		callback                                                                                           // 124
	);                                                                                                  // 125
};                                                                                                   // 126
                                                                                                     // 127
Meteor.startup( function () {                                                                        // 128
	if ( Blaze.isTemplate( Template[ 'MailChimpListSubscribe' ] ) ) {                                   // 129
		Template.MailChimpListSubscribe.rendered = function () {                                           // 130
			subscribeTitle  = this.find( '.mailchimp-message' );                                              // 131
			subscribeEmail  = this.find( '.mailchimp-email' );                                                // 132
			subscribeButton = this.find( '.mailchimp-subscribe' );                                            // 133
			subscribeButton.disabled = ( subscribeEmail.value === '' );                                       // 134
		};                                                                                                 // 135
                                                                                                     // 136
		Template.MailChimpListSubscribe.helpers({                                                          // 137
			message: function () {                                                                            // 138
				subscribeMessage = this.title || subscribeMessage;                                               // 139
                                                                                                     // 140
				return subscribeMessage;                                                                         // 141
			}                                                                                                 // 142
		});                                                                                                // 143
                                                                                                     // 144
		Template.MailChimpListSubscribe.events({                                                           // 145
			'focus .mailchimp-email, paste .mailchimp-email, cut .mailchimp-email': function ( e ) {          // 146
				Meteor.setTimeout( function ( e ) {                                                              // 147
					validateEmailAddress( true );                                                                   // 148
				}, 0 );                                                                                          // 149
			},                                                                                                // 150
                                                                                                     // 151
			'keyup .mailchimp-email': function ( e ) {                                                        // 152
				var key = e.which || e.keyCode || e.charCode;                                                    // 153
                                                                                                     // 154
				if (                                                                                             // 155
					key === 8 ||				// [Backspace]                                                                  // 156
					key === 46					// [Delete]                                                                      // 157
				) {                                                                                              // 158
					Meteor.setTimeout( function () {                                                                // 159
						validateEmailAddress( true );                                                                  // 160
					}, 0 );                                                                                         // 161
				}                                                                                                // 162
			},                                                                                                // 163
                                                                                                     // 164
			'keypress .mailchimp-email': function ( e ) {                                                     // 165
				var key = e.which || e.keyCode || e.charCode;                                                    // 166
                                                                                                     // 167
				Meteor.setTimeout( function () {                                                                 // 168
					validateEmailAddress( true );                                                                   // 169
                                                                                                     // 170
					if ( isValidEmailAddress( subscribeEmail.value  ) ) {                                           // 171
						if ( key === 13	) {		// [Return]                                                               // 172
							subscribeGo( true );                                                                          // 173
						}                                                                                              // 174
					}                                                                                               // 175
				}, 0 );                                                                                          // 176
			},                                                                                                // 177
                                                                                                     // 178
			'click .mailchimp-subscribe': function ( e ) {                                                    // 179
				validateEmailAddress( true );                                                                    // 180
                                                                                                     // 181
				if ( isValidEmailAddress( subscribeEmail.value  ) ) {                                            // 182
					subscribeGo( false );                                                                           // 183
				}                                                                                                // 184
			}                                                                                                 // 185
		});                                                                                                // 186
	}                                                                                                   // 187
});                                                                                                  // 188
                                                                                                     // 189
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 198
                                                                                                            // 199
}).call(this);                                                                                              // 200
                                                                                                            // 201
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['miro:mailchimp'] = {
  MailChimp: MailChimp
};

})();
