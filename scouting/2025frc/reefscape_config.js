var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024inkok", 
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
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Auto L1 Coral Scores",
      "code": "acbs",
      "type": "counter"
    },
    { "name": "Auto L2 Coral Scores",
      "code": "acss",
      "type": "counter"
    },
    { "name": "Auto L3 Coral Scores",
      "code": "acts",
      "type": "counter"
    },
    { "name": "Auto L4 Coral Scores",
      "code": "acfs",
      "type": "counter"
    },
    { "name": "Auto Processor Scores",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Auto Net Scores",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "L1 Coral Scores",
      "code": "tcbs",
      "type": "counter"
    },
    {
      "name": "L2 Coral Scores",
      "code": "css",
      "type": "counter"
    },
    { "name": "L3 Coral Scores",
      "code": "cts",
      "type": "counter"
    },
    { "name": "L4 Coral Scores",
      "code": "cfs",
      "type": "counter"
    },
    {
      "name": "Processor Scores",
      "code": "ps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "ns",
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
    },
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "s": "Shallow Cage<br>",
        "e": "Deep Cage<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Comments",
      "code": "co",
      "type": "radio",
      "choices": {
        "l": "Robot Lost Connection<br>",
        "d": "Robot Got Disabled<br>",
        "i": "Robot Died/Immobilized<br>",
        "b": "Something Broke on the Robot<br>",
        "c": "Dropped A lot of Coral (Over 3)<br>",
        "g": "Dropped A lot of Algae (Over 3)<br>",
        "w": "Played Defense Really Well (Only applies if team did play defense)<br>",
        "t": "Almost Tipped Over A Few Times (Tippy)<br>",
        "x": "None"
      },
      "defaultValue": "x"
    }
  ]
}`;
