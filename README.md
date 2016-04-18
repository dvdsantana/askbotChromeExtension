# ASKBot Chrome Extension
Simple Chrome extensión for ASKBot

# Setup
Configure your domain in manifest.json and scripts/popup.js file like this:

In manifest file:
"permissions": ["http://my-awesome-domain/api/v1/*"]

In scripts/popup.js:
KMapp.questionsEndPoint = 'http://my-awesome-domain/api/v1/questions/';

# Installation
To test a the extension in Chrome type “chrome://extensions” in a tab to bring up the extensions page.

Once on this page, check “Developer mode” to enable loading unpacked extensions. This will allow you to load your extension from a folder. Finally, click “Load unpacked extension” and select folder. You should immediately see the extension show up as a Browser Action with your icon in the toolbar window of the current tab.
