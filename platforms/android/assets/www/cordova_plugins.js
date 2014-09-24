cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.speech/SpeechRecognizer.js",
        "id": "com.phonegap.plugins.speech.SpeechRecognizer",
        "clobbers": [
            "plugins.speechrecognizer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugin.tts/www/tts.js",
        "id": "org.apache.cordova.plugin.tts.tts",
        "clobbers": [
            "navigator.tts"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.speech": "1.0.0",
    "org.apache.cordova.plugin.tts": "0.2.0"
}
// BOTTOM OF METADATA
});