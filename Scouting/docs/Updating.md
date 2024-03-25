# Updating the Software for a New Competition

## Event JSON

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

There is an optional field called ``` required ``` that can be set true to require the field to be filled before another page can be navigated to.

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

