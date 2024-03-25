# Updating the Software for a New Competition

## Event JSON

There are two ways of creating the file, the first would be to copy the previous year and update the entry fields, or you can create a new file. Either option works just as well.

The first step is to create a new folder and event JSON file. The file should be called something like ``` examplecompetition_config.js ```

Next within the file you have to create a variable that contains all the entry fields
```
var config_data = `
{

}
```
Next add the information for the data. This should not change much besides the title and page title names, the rest can be left alone

```
var config_data = `
{
  "dataFormat": "tsv",
  "title": "SRB Scouting 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
}
```
Change the titles to fit. The checkboxAs means that the true/false are represented as a 1 or 0

Now that you have all the information, you can create the different pages. This website is setup currently to have 5 different pages: prematch, auton, teleop, endgame, and postmatch

```
var config_data = `
{
  "dataFormat": "tsv",
  "title": "SRB Scouting 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}
```

For the prematch page, the majority of the information can be kept the same. These entry fields can be configured to be required or not. 

When creating an entry, notice how every entry has a name, code, and type. These fields are common across most entrys. Make sure that every entry has a different name and code. The type describes what input type the entry is. In the prematch page, many of the input types are different. 

```
"prematch": [
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024inpla", 
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
```

There is an optional field called ``` required ``` that can be set true to require the field to be filled before another page can be navigated to. When adding required fields, make sure to add the entry code to the list of required fields in the ``` scoutingPass.js ``` file. This can be found near the top of the file

```
    var requiredFields = ["m", "l", "r", "t"];
```

One important thing when updating is when you update for a new event, you can change the defaul value for the event entry to have the code for the upcoming event already pre-entered so no one has to change it during your event.

```
{ "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024inpla", 
      "required": "true"
    },
```

To find the event code, search for the which ever year season event list and find your event, the code should be next to it. There is no year in the event code, you have to put the current year of competition and then the event code all lowercase. For this example it is the 2024 season and the First Indiana Robotics District Plainfield Event with the event code ``` inpla ``` and the year 2024 out in front.



For updating the other pages including auton, teleop, endgame, and, postmatch, many of the entry fields are similar and only need slight modifications

For example auton and teleop are similar in appearance where they both have entrys with the counter and bool (boolean) types. These can be used to make the majority of the scoring entries.

```
"auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Auto Speaker Scores",
      "code": "ass",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    {
      "name": "Missed Amp Scores",
      "code": "mas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Amplified Speaker Scores",
      "code": "tsa",
      "type": "counter"
    },
    {
      "name": "Missed Speaker Scores",
      "code": "mss",
      "type": "counter"
    },
    { "name": "Times Amplified",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
```

Another important entry is sometimes a team may want to record where a robot can pick up from. In this case, the Pickup From entry has the type ``` radio ``` which allows a single select between different options. When creating a radio, you have to define a field called ``` choices ``` that will create all the different options. Each choice needs a letter and a name. The name is what the scout will see as the option. The letter is what the data will appear as when pasted into the google sheet. Using the letters you can create a key to decode what each letter means within the google sheet.

In the original software that was created and developed by [PWNAGE - FRC Team 2451](https://pwnagerobotics.org) the post match field had different radio entry fields for driver, speed, and defense rating. In an attempt to make robot viewing as non-opionated as possible, it was decided to only have one entry field where members could select what comment they have. This type of way to enter comments takes out the uncertianty on what people may enter if the entry field was a text box. 

Considering our use of ipads to scout, by not having the scout manually type as that was found difficult, the comments was switched to a radio, howver this can be changed back if wanted

```
"postmatch": [
    { "name": "Comments",
      "code": "co",
      "type": "radio",
      "choices": {
        "l": "Robot Lost Connection<br>",
        "d": "Robot Got Disabled<br>",
        "i": "Robot Died/Immobilized<br>",
        "b": "Something Broke on the Robot<br>",
        "n": "Dropped Alot of Notes (Over 3)<br>",
        "w": "Played Defense Really Well (Only applies if team did play defense)<br>",
        "t": "Almost Tipped Over A Few Times (Tippy)<br>",
        "x": "None"
      },
      "defaultValue": "x"
    }
  ]
```

It is important to have consistant naming conventions in the program or code you write. For example in this code, every none option for the radio uses x as the letter to signifiy that that option is none. 

Lastly when updating or creating the event JSON, you have to call it in the html file ``` index.html ``` within the Scouting folder

``` 
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0">
		<title>2024 Scout</title>
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="icon" sizes="16x16 32x32 64x64" href="favicon.ico">
		<script src="resources/js/easy.qrcode.min.js"></script>
		<script src="resources/js/TBAInterface.js"></script>
		<script src="resources/js/googleSheets.js"></script>
		<script src="resources/js/scoutingPASS.js"></script>
		<script src="2024/crescendo_config.js"></script>
		<link rel="stylesheet" href="resources/css/scoutingPASS.css">
	</head>
```


