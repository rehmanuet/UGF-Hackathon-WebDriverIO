let baseUrl
if (process.env.VERSION.trim() === 'V1') {
     baseUrl = 'https://demo.applitools.com/gridHackathonV1.html'
} else if (process.env.VERSION.trim() === 'V2'){
     baseUrl = 'https://demo.applitools.com/gridHackathonV2.html'
}

exports.config = {
 
    runner: 'local',

    specs: [
        './TraditionalTest/**/*.js'
    ],

    exclude: [
    ],

    maxInstances: 10,

    capabilities: [
        {
        browserName: 'chrome',
        }
    //    ,{
    //     browserName: 'firefox',
    //     }
    //    ,{
    //     browserName: 'MicrosoftEdge',
    //     }
    
],

    logLevel: 'error',

    bail: 0,

    baseUrl: baseUrl,
   
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
  
    connectionRetryCount: 3,

    services: [
        ['selenium-standalone', {
            logPath: 'logs',
            version : "3.141.59",
    baseURL : "https://selenium-release.storage.googleapis.com",
            installArgs: {
                drivers: {
                    chrome: { version: '83.0.4103.39' },
                    firefox: { version: '0.26.0' },
                    MicrosoftEdge: { version: '83.0.478.45' }
                }
            },
            args: {
                drivers: {
                    chrome: { version: '83.0.4103.39' },
                    firefox: { version: '0.26.0' },
                    MicrosoftEdge: { version: '83.0.478.45' }
                }
            },
        }]
    ],
   
    framework: 'jasmine',

    reporters: ['spec'],
    
    jasmineNodeOpts: {
        defaultTimeoutInterval: 160000,
        expectationResultHandler: function(passed, assertion) {
        }
    },
}
