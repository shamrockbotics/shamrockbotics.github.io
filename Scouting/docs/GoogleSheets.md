<div href="top"></div>

# SRB Google Sheets

## How SRB updates and uses Google Sheets for our scouting

<details>
  <summary>Content</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#creating">Creating the Sheets</a></li>
    <li><a href="#datainfo">Data Information and Settings</a></li>
    <li><a href="#teaminfo">Team Info</a></li>
    <li><a href="#master">The Master List</a></li>
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

<div id="datainfo"></div>

# Data Information and Settings

The first step with the google sheets is the DataInfo sheet. This sheet has no functions, but is used as a key for the rest of the sheets. This is where you define what radio options mean what and what each event code means.

![DataInfoScreen](../resources/images/GoogleSheetImages/DataInfoScreen.png)

Each radio from the scouting site should have two columns to itself. One column is the letter and the other column is its corresponding option. This is also where you can define your event codes with their corresponding event names. In the case of wanting to view all events, leave event code blank. 

There is a current bug with this system as all the blank letter or event code spaces must be filled for the system to work. 

<div id="teaminfo"></div>

# Team Info

<div id="master"></div>

# The Master Data List

<div id="robot"></div>

# Analyzing Robot Data

<div id="compare"></div>

# Comparing Robots



<p align="right">(<a href="#top">back to top</a>)</p>