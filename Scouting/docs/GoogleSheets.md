<div href="top"></div>

# SRB Google Sheets

## How SRB updates and uses Google Sheets for our scouting

<details>
  <summary>Content</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#creating">Creating the Sheets</a></li>
    <li><a href="#master">The Master List</a></li>
    <li><a href="#datainfo">Data Information and Settings</a></li>
    <li><a href="#teaminfo">Team Info</a></li>
    <li><a href="#robot">Robot Data</a></li>
    <li><a href="#compare">Comparing Data</a></li>
  </ol>
</details>

<div id="description"></div>

# Description

SRB uses google sheets to store and analyze all of our scouting data. We have one main scouting labtop that has the google sheet preloaded before a competition, and at competitions all the data is entered onto that google sheet using a qr code scanner in conjunction with the scouting site. 

One of the key components of our scouting is the ability to use it offline. The google sheets uses only built in functions to compile the data. No app scripts or macros can be used due to the neccessity of being offline. 

The bulk of the google sheets are built using the two funtions QUERY and FILTER. The QUERY function is a powerful tool to search data using different criteria. The FILTER function is used for the smaller searches when not all the data is needed to be looked through

<div id="creating"></div>

# Creating/Setting Up the Google Sheets

Every year, there is a new frc competition which means the scouting software must be changed every year. The first step is either to create a new google sheet or create a copy of last year's sheet to modify. When creating the sheet make sure to name it an appropriate name and share it with everyone working on scouting.

<div id="master"></div>

# The Master Data List

The Master sheet is where all the data is entered. It stores everything and it is where everything is referenced. It is important to set this sheet up correctly in order to set up any other sheet.

![MasterSheetScreen](../resources/images/GoogleSheetImages/)

The first step when setting up this sheet is getting the columns named correctly. Each column needs the correct name that corresponds to the data inputted. To do this, the config file should be updated for this year so that the scouting website works as intended. More about that can be found [here](Updating.md). Once this is done, using the website or the config file, name the columns going down in order of what entry is listed first. For example, the first entry field is the event so the first column should be labeled event, the next is match type and so on all the way until every column is labeled. To know this is correct, use the scouting website, enter fake data and when you paste the data in, the end columns should align.

It is important to note that this sheet should not need changed. When pasting data, you can either copy and paste it in or use a qr code scanner which should automaticly paste it in after reading the qr code. Your cursor needs to be on the first column in order for the data to be pasted correcly otherwise your numbers will be off and there will be errors later down the line when the different data types don't match.

One helpful tip is to freeze the first row of the sheet so when you scroll down the sheet, the names of what each column represents is still present.

<div id="datainfo"></div>

# Data Information and Settings

The next step is the DataInfo sheet. This sheet has no functions, but is used as a key for the rest of the sheets. This is where you define what radio options mean what and what each event code means.

![DataInfoScreen](../resources/images/GoogleSheetImages/DataInfoScreen.png)

Each radio from the scouting site should have two columns to itself. One column is the letter and the other column is its corresponding option. This is also where you can define your event codes with their corresponding event names. In the case of wanting to view all events, leave event code blank; The same can be said if you want nothing to appear when none was selected where you can leave the option blank

There is a current bug with this system as all the blank letter or event code spaces must be filled for the system to work. In this example, numbers are used as a filler.

<div id="teaminfo"></div>

# Team Info

The Teams sheet is used as a reference sheet and has only one function. The first three columns are the team number, name, and location. The location is not used, however it is left in as it is pasted from [blue alliance](https://www.thebluealliance.com/events/in#teams) which does track the location. 

![TeamScreen](../resources/images/GoogleSheetImages/TeamScreen.png)

The fourth column tracks all the teams currently found in the match data. This is useful for checking if a specific team has match data or for tracking what teams have been scouted. The function used is ```=IFERROR(SORT(UNIQUE(ARRAYFORMULA(QUERY(Master!A2:S, "select E where E>0")),FALSE,FALSE)))```. This function first looks through the Master sheet using QUERY and selects the column E or all the team numbers scouted. ARRAYFORMULA converts the QUERY's output to an array where UNIQUE removes every duplicate team number. SORT sorts it least to greatest to help with searching. The last part IFERROR is used so that if there is an error or no data is found, the cell is left blank instead of creating an error.


<div id="robot"></div>

# Analyzing Robot Data

<div id="compare"></div>

# Comparing Robots



<p align="right">(<a href="#top">back to top</a>)</p>