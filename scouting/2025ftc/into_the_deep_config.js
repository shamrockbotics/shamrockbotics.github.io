var config_data = `
{
    "dataFormat": "tsv",
    "title": "Scouting PASS 2025-FTC",
    "page_title": "Into the Deep",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2425-IN-INQ",
            "required": "true"
        },
        {
            "name": "Match Level",
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
    ],
    "auton": [
        {
            "name": "Park in Obervation Zone",
            "code": "ap",
            "type": "bool"
        },
        {
            "name": "Auto Net Zone Scores",
            "code": "anzs",
            "type": "counter"
        },
        {
            "name": "Auto Low Basket Scores",
            "code": "albs",
            "type": "counter"
        },
        {
            "name": "Auto High Basket Scores",
            "code": "ahbs",
            "type": "counter"
        },
        {
            "name": "Auto Low Chamber Scores",
            "code": "alcs",
            "type": "counter"
        },
        {
            "name": "Auto High Chamber Scores",
            "code": "ahcs",
            "type": "counter"
        },
        {
            "name": "Auto Ascent Level 1",
            "code": "aa1",
            "type": "bool"
        }
    ],
    "teleop": [
        {
            "name": "Net Zone Scores",
            "code": "tnzs",
            "type": "counter"
        },
        {
            "name": "Low Basket Scores",
            "code": "tlbs",
            "type": "counter"
        },
        {
            "name": "High Basket Scores",
            "code": "thbs",
            "type": "counter"
        },
        {
            "name": "Low Chamber Scores",
            "code": "tlcs",
            "type": "counter"
        },
        {
            "name": "High Chamber Scores",
            "code": "thcs",
            "type": "counter"
        }
    ],
    "endgame": [
        {
            "name": "Final Status",
            "code": "fs",
            "type": "radio",
            "choices": {
                "p": "Parked in Onservation Zone<br>",
                "ac1": "Ascent Level 1<br>",
                "ac2": "Ascent Level 2<br>",
                "ac3": "Ascent Level 3<br>",
                "x": "None of the above"
            },
            "defaultValue": "x"
        }
    ],
    "postmatch": [
        {
            "name": "Comments",
            "code": "co",
            "type": "radio",
            "choices": {
                "l": "Robot Lost Connection<br>",
                "d": "Robot Got Disabled<br>",
                "i": "Robot Died/Immobilized<br>",
                "b": "Something Broke on the Robot<br>",
                "n": "Dropped Alot of Samples/Specimens (Over 3)<br>",
                "w": "Played Defense Really Well (Only applies if team did play defense)<br>",
                "t": "Almost Tipped Over A Few Times (Tippy)<br>",
                "x": "None"
            },
            "defaultValue": "x"
        }
    ]
}`;