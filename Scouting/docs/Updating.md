# Updating the Software for a New Competition

## Event JSON

The first step is to create a new folder and event JSON file. The file should be called something like ``` examplecompetition_config.js ```

Next within the file you have to create a variable that contains all the entry fields
```
var config_data = `
{

}
```
Next add the information for the data

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

