# SHAM-ROCK-BOTIC's Scouting Website
## A scouting [software](https://github.com/PWNAGERobotics/ScoutingPASS/tree/main) created by [PWNAGE - FRC Team 2451](https://pwnagerobotics.org) and modified by SHAM-ROCK-BOTICS (SRB)
<details>
  <summary>Content</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#scouting">How We Scout</a></li>
    <li><a href="#updating">How To Update</a></li>
    <li><a href="#googlesheets">Using Google Sheets</li>
  </ol>
</details>

<div id="description"></div>

# Description
[PWNAGE - FRC Team 2451](https://pwnagerobotics.org) created this scouting website and it is modified by SHAM-ROCK-BOTICS (SRB). The software consists of a user navigating to the site, entering in the match data, scanning the qr code, pasting the data into a google sheet, and compiling it in google sheets. 

Configuration is simple as it is updating a JSON file to add or remove entry fields. Some of the fields can be used for all teams and years

* Event: The event code for the event being scouted
* Level: The level of the different matches (Quals, Semis, or Finals)
* Match: The match number for the current match
* Robot: The robot alliance position, Red or Blue 1, 2, 3
* Team #: The team number of the scouted team

Some of the most common entry fields for data include
* Text: A freeform entry field
* Number: A freeform entry field that only accepts numbers
* Counter: A counter that can increased or decreased with buttons
* Radio: A single muliple choice entry between several options Ex: Floor Pickup - (ground, substation, or both)
* Checkbox: A true/false clickable entry box Ex: Crossed Auton Line (yes if checked)

The website needs only loaded on one device and can work with most devices. The data is stored on the site and then transferred via qr code to our google sheets. Once the page is loaded, a Wifi connection is not needed for the system to work.

<div id="scouting"></div>

# How We Scout

We have 6 scouts and one of them is the lead scout or there is another person who is the lead. Each scout uses an ipad that was preloaded with the website the night before the event. Each ipad is labeled and assigned with an alliance position Red or Blue 1, 2, 3. 

Scouts watch and record the match data. After the match, the lead scout takes a qr code scanner that is connected to a labtop loaded with the google sheets and scans all 6 qr codes. 

The data is automatically pasted into the google sheets and compiled from there. The scouts clear the data and wait for the next match. 

<div id="updating"></div>

# Updating the Software for a New Competition

Click [Here](docs/Updating.md) to see how to update the software


<div id="googlesheets"></div>

# Google Sheets
