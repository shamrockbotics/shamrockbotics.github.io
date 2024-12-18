var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "gsCol": "scouter",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "gsCol": "event",
      "type": "event",
      "defaultValue": "2022carv",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "gsCol": "level",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "gsCol": "matchNum",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "gsCol": "robot",
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
      "gsCol": "teamNum",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "gsCol": "autoStartPosition",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "gsCol": "autoScoringGrid",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Cable",
      "code": "acc",
      "gsCol": "autoCrossedCable",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "code": "acs",
      "gsCol": "autoCrossedChargingStation",
      "type": "bool"
    },
    { "name": "Mobility?",
      "code": "am",
      "gsCol": "autoMobility",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "ad",
      "gsCol": "autoDocked",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "gsCol": "cycleTimes",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tsg",
      "gsCol": "gridScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "tfc",
      "gsCol": "feedCount",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "gsCol": "wasDefended",
      "type": "bool"
    },
    { "name": "Who Defended this bot<br>(Team #)",
      "code": "who",
      "gsCol": "defenderTeamNum",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "lnk",
      "gsCol": "smartPlacement",
      "type": "bool"
    },
    { "name": "Floor Pick UP",
      "code": "fpu",
      "gsCol": "floorPickUp",
      "type": "radio",
      "choices": {
        "o": "Cone<br>",
        "u": "Cube<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "gsCol": "dockingTime",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "gsCol": "endgameStatus",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "dn",
      "gsCol": "numOfRobotsDocked",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "gsCol": "driverSkill",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
      "code": "ls",
      "gsCol": "linksScored",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "gsCol": "defenseRating",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
      "code": "sd",
      "gsCol": "swerveDrive",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "gsCol": "speedRating",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "gsCol": "diedOrImmobilized",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "gsCol": "tippy",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "code": "dc",
      "gsCol": "droppedCones",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "gsCol": "goodPartners",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "gsCol": "comments",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
