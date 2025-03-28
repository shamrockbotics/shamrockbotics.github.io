// TBAInterface funcitons to pull data from TheBlueAlliance.com
var teams = null;
var schedule = null;
var authKeyTOA = "T5BIrNMrmhp22ylI1QmXsbz0G5lyv3tR9gN9oLaNCE4=";
var appIDTOA = "SRB Scouting";
/**
 * Get list of teams in event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getTeamsFTC(eventCode) {
	if (authKeyTOA) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://theorangealliance.org/api/event/" + eventCode + "/teams";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-Application-Origin", appIDTOA);
		xmlhttp.setRequestHeader("X-TOA-Key", authKeyTOA);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				teams = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}

/**
 * Get schefule for event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getScheduleFTC(eventCode) {
	if (authKeyTOA) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://theorangealliance.org/api/event/" + eventCode + "/matches";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-Application-Origin", appIDTOA);
		xmlhttp.setRequestHeader("X-TOA-Key", authKeyTOA);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				schedule = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}
