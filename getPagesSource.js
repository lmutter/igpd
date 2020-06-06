function replaceAmp(toReplace){
	while (toReplace.search("0026") != -1){
		point = toReplace.search("0026");
		toReplace = toReplace.substring(0, point - 2) + "&" + toReplace.substring(point + 4);
	}
	return toReplace;
}

function stringToLink(fullText){
	var start = fullText.search("video_url") + 12;
	var end = fullText.search("video_view_count") - 3;
	fullText = fullText.substring(start, end);
	fullText = replaceAmp(fullText);
	return fullText + "&dl=1";
}

// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    html = stringToLink(html);
    return html;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
