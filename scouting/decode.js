var config_data = {
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025-26 FTC",
  "page_title": "DECODE",
  "event_type": "ftc",
  "checkboxAs": "10",

  "prematch": [
      "prematch": [
        {
            "name": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2425-IN-CMP",
            "required": "true"
        },
        {
            "name": "Match Level",
            "code": "l",
            "type": "level",
            "choices": {
                "Q": "Quals<br>",
                "E": "Elims"
            },
            "defaultValue": "Q",
            "required": "true"
        },
        {
            "name": "Match #",
            "code": "m",
            "type": "match",
            "min": 1,
            "max": 150,
            "required": "true"
        },
        {
            "name": "Robot",
            "code": "r",
            "type": "robot",
            "choices": {
                "r1": "Red-1",
                "b1": "Blue-1<br>",
                "r2": "Red-2",
                "b2": "Blue-2<br>"
            },
            "required": "true"
        },
        {
            "name": "Team #",
            "code": "t",
            "type": "team",
            "min": 1,
            "max": 99999
        }
  "auton": [
    { "name": "Moved off Launch Line",     
     "code": "aml", 
     "type": "bool" },
    
    { "name": "Artifacts Classified",       
     "code": "aac",  
     "type": "counter" },
    
    { "name": "Artifacts Overflowed", 
     "code": "aao",  
     "type": "counter" },
    
    { "name": "Ramp Pattern Complete",      
     "code": "arp",  
     "type": "bool" },
    
    { "name": "Park in Base at End of Auto", 
     "code": "apb", 
     "type": "bool" }
  ],

  "teleop": [
    { "name": "Artifacts Classified",  "code": "tac",  "type": "counter" },
    { "name": "Artifacts Overflowed",  "code": "tao",  "type": "counter" },
    { "name": "Ramp Pattern Complete", "code": "trp",  "type": "bool" }
  ],

  "endgame": [
    { "name": "Robot in Base",         "code": "erb", "type": "bool" }
  ],

  "postmatch": [
    { "name": "Comments", "code": "co", "type": "radio",
      "choices": {
        "l": "Lost Connection",
        "d": "Disabled by Ref",
        "b": "Breakdown",
        "u": "Uphill Push",
        "x": "None"
      },
      "defaultValue": "x"
    }
  ]
};
