// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Generally single phase loads having transformers have the following type of fuse as main protection.",
            "a": [
                { "option": "H type", "correct": false },
                { "option": "K type", "correct": true },
                { "option": "T type", "correct": false },
                 { "option": "Anyone of them", "correct": false }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                 "correct": "<p><span>Right answer</span> Ans:K type</p>",
                 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:K type</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Better reliability can be observed in distribution system with",
             "a": [
                { "option": "Ring type network", "correct": true },
                { "option": "Radial type network", "correct": false },
                { "option": "Same in both type of network", "correct": false },
               { "option": "All", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Ring type network</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Ring type network</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Sectionaliser can ",
            "a": [
                { "option": "Break and close on load", "correct": false },
                { "option": "Break but cannot close on load", "correct": false },
                  { "option": "Close on but cannot break load", "correct": true},
                { "option": "Neither can break or close on load", "correct": false }		
               // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Close on but cannot break load</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Close on but cannot break load</p>" // no comma here
        },
        { // Question 4
            "q": " The final operation of the recloser for a close in permanent fault is  ",
            "a": [
                { "option": "Lockout operation", "correct": true },
                {"option": "3<sup>rd</sup> reclosing time",     "correct": false},
		 { "option": "Last reclosing time", "correct": false },
		 { "option": "Last curve operating time", "correct": false }
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
		 "correct": "<p><span>Right answer</span> Ans:Lockout operation</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:Lockout operation</p>"  // no comma here
        },
       { // Question 5
           "q": "Consider 5P20 class CT ratio:1000/1, Normal rated current of 900 A. Consider a overloading of 10 % while calculating plug setting of the relay with IEC SI curve. Let the initial set TMS be 0.1. Relay settings has ranges for PSM of 50% to 200% in steps of 25% and TMS setting range of 0.1 to 1.1 in step of 0.05. The operating time for a three phase fault of 15 kA is (Hint: Calculate PS, then calculate the operating time using the curve characteristics equation) ",
            "a": [
                { "option": "0.151", "correct": false },
                { "option": "0.252", "correct": true },
		 { "option": "0.353", "correct": false },
                { "option": "0.454", "correct": false } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:0.252</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:0.252</p>"  // no comma here
        } // no comma here
    ]
};
