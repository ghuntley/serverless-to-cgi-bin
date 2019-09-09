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
			node.nodeValue = handleText(node.nodeValue);
			break;
	}
}

function handleText(text)
{
	return text
		.replace(/\baws lambda\b/gi, "AWS Common Gateway Interface")
		.replace(/\bserverless\b/gi, "cgi-bin")
		.replace(/\bcgi-bin architectures?\b/gi, "Common Gateway Interface architecture")
		//.replace(/\bcontainer\b/gi, "chroot")
		//.replace(/\belectron\b/gi, "JVM")
}


