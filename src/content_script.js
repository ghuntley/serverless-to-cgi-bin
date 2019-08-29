walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bAWS Lambda\b/g, "AWS Common Gateway Interface");
	v = v.replace(/\bAWS lambda\b/g, "AWS Common Gateway Interface");
	v = v.replace(/\baws Lambda\b/g, "AWS Common Gateway Interface");
	v = v.replace(/\baws lambda\b/g, "AWS Common Gateway Interface");

	v = v.replace(/\bServerless\b/g, "cgi-bin");
	v = v.replace(/\bserverless\b/g, "cgi-bin");

	v = v.replace(/\bcgi-bin architecture\b/g, "Common Gateway Interface architecture");
	v = v.replace(/\bcgi-bin architectures\b/g, "Common Gateway Interface architecture");
	v = v.replace(/\bcgi-bin Architecture\b/g, "Common Gateway Interface architecture");
	v = v.replace(/\bcgi-bin Architectures\b/g, "Common Gateway Interface architecture");
	
	textNode.nodeValue = v;
}


