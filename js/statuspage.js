function statusPage()					// Create function to build Statuspage Component content
{
	var xhr = new XMLHttpRequest();			// Create XMLHttpRequest object

	xhr.onload = function() {			// When readystate changes

	// The following conditional check will not work locally - only on a server
	if(xhr.status === 200) {			// If server status was ok
		responseObject = JSON.parse(xhr.responseText);

		// BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
		var newContent = '';
		for (var i = 0; i < responseObject.components.length; i++) {			// Loop through object
			if ( responseObject.components[i].group == true && responseObject.components[i].name !== "SUPPORT : US" && responseObject.components[i].name !== "SUPPORT : Europe") {
				newContent += '<div class="event">';
				newContent += '<img src="img/' + responseObject.components[i].name + '.png" />';
				newContent += '<p><b>' + responseObject.components[i].name + '</b><br>';
				if ( responseObject.components[i].status == "operational" ) {
					newContent += '<b class="ticons ticons-check_circle" style="color: #2FCC66">operational</b>';
				} else if ( responseObject.components[i].status == "degraded_performance" ) {
					newContent += '<b class="ticons ticons-remove_circle" style="color: #F1C40F">degraded performance</b>';
				} else if ( responseObject.components[i].status == "partial_outage" ) {
					newContent += '<b class="ticons ticons-error" style="color: #E67E22">partial outage</b>';
				} else if ( responseObject.components[i].status == "major_outage" ) {
					newContent += '<b class="ticons ticons-cancel" style="color: #E74C3C">major outage</b>';
				} else {
					newContent += '<b class="ticons ticons-settings" style="color: #3498DB">under maintenance</b>';
			}
			newContent += '</div>';
		}
	}

	// Update the page with the new content
	document.getElementById('content').innerHTML = newContent;
	}
};

xhr.open('GET', 'https://4v6r9bp6f4d6.statuspage.io/api/v2/components.json', true);			// Prepare the request
xhr.send(null);                                 // Send the request
}

statusPage();
setInterval(statusPage, 60000);			//Reload JSON data every 60 seconds

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).
// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).
