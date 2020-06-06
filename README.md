# igpd
Instagram private video download extension for Chrome.

Allows user to directly access the link of video displayed on private instagram pages. Currently this is done by displaying a box under the extension icon containing the direct link to the video. To use, open the instagram video, refresh the page, and click on the extension box. Copy the entire text within the new box and paste this in your address bar OR right click on highlighted text and click "Go to https//scontent...". Note: You must refresh the page to generate a new link on every video.

There are only a few "video download" extensions on the chrome web store, and I could not find any specifically for Instagram that were open source. I am new to writing extensions and this is a basic proof of concept. Current goals are to (eventually) add a button to the extension to allow for immediate download, and to not require the user to refresh after clicking off of a video and onto another one. Also, the icon will show as "active" (not black and white) for a lot of web pages but not all. It should only show as active on instagram.com.

Despite that, it is a basic extension and does not require visiting any sketchy 3rd party site, as is usually the case. 

Credit to Rob W at stackoverflow (http://stackoverflow.com/users/938089/rob-w) for his DOMtoString function.
