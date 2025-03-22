/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "sv",
	locale: "sv-SE",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "MMM-ISS-Live",
			header: "ISS Live Stream", // With header
			position: "top_left", // Best in left region
			config: {
			  url: "https://www.youtube.com/embed/xRPjKQtRXR8?si=zi-AnQaKiuwKkaLR", // Another video stream
			}
		},
		{
			module: "calendar",
			config: 
			{
			  broadcastPastEvents: true, // <= IMPORTANT to see past events
			  maximumEntries: 1000,
			  calendars: 
				  [
				{
					url: "webcal://p31-caldav.icloud.com/published/2/MTE5NzAxMjQ5NTgxMTk3MPdv8ulqWKhSKow8nWWCW0OkcZtiYsxi3MLp19VYAXB6u7GfkIKRaYUWh3G7xrTEv8Kk7WXCpX85WWDsgEER4r4",
					name: "Icloud-Kalender", // <= RECOMMENDED to assign name
					color: "green" // <= RECOMMENDED to assign color
				},
				{
					url: "https://cal.bokatvattid.se/NEQ1MjdGMzI2OTc4UjU",
					name: "Laundry", // <= RECOMMENDED to assign name
					color: "blue" // <= RECOMMENDED to assign color
				},
				{
					url: "webcal://p179-caldav.icloud.com/published/2/MTE5NzAxMjQ5NTgxMTk3MPdv8ulqWKhSKow8nWWCW0NDFwZQ2Bs8dDWQmYO2mbYo",
					name: "Icloud-Arbete",
					color: "green"
				},
				{
					url: "webcal://p179-caldav.icloud.com/published/2/MTE5NzAxMjQ5NTgxMTk3MPdv8ulqWKhSKow8nWWCW0OAhg_XM63b0OA3HW3hWOEg",
					name: "Icloud-Hem",
					color: "white"
				},
				{
					url: "https://outlook.office365.com/owa/calendar/d765ba208a7540729c8445329981a27e@student.ju.se/3fa95881e1964d3894b6bb27fb81ac594439776407567505601/calendar.ics",
					name: "JTH",
					color: "yellow"
				}
				]
			}
		},
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			title: "",
			config: {
			  mode: "week",
			  instanceId: "basicCalendar",
			  maxEventLines: 5,
			  firstDayOfWeek: 1,
			  weekIndex: 0,
			  weeksInView: 2,
			  calendarSet: [],
			}
		},
		{
			module: "clock",
			config: {
			  // The config property is optional.
			  // See 'Configuration options' for more information.
			  showDate: false,
			},
		},
		{
			module: "weather",
			position: "top_right",
			config: {
			  // See 'Configuration options' for more information.
			  weatherProvider: "SMHI",
				type: "forecast",
				lat: 57.77352865961292,
				lon: 14.146761753970969
			},
		},
		{
			module: 'MMM-WiFiPassword',
			position: "bottom_left",
			  config: {
				//See 'Configuration options' for more information.
				network: "FBI(top secret)", 
				password: "Vamos123",
				showPassword: false,
				showAuthType: false,
				header: "Wifi",
				layoutVertical: true,
				qrSize: 75,
			  }
		  },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
