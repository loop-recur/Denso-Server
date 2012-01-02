/*
 * This is a helper script for common debug javascript functionality
 */

// Sends debugging information to the javascript console
var Debugger = function (){ };
Debugger.log = function (message)
{
    try {
        console.log(message);
    }
    catch (exception) {
        return;
    }
}

// For handling syntax errors (e.g. mistyped stuff)
window.onerror = function(msg, url, line)
{
	alert(msg + ';' + url + ';' + line);
	return true;
}


// For making a string with 'px' at the end of a value
function num2Px(number)
{
	return number + "px";
}

function marginGetLeft(marginString)
{
	alert("marginString: " + marginString);
	var strSpaces = marginString.split(" ");

	if (strSpaces[0] == "auto")
	{
		alert("Margin Left is auto");
	}
	else
	{
		alert("Spaces = " + strSpaces[0]);
		return strSpaces[0].split("px");
	}
}
