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
            "q": "When a fluid flows over a stationary solid surface, the fluid velocity at the fluid – solid interface is?",
            "a": [
                {"option": "Zero",      "correct": true},
                {"option": "equal to free – stream velocity",     "correct": false},
                {"option": "between zero and free – stream velocity",      "correct": false}
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:empty tower velocity in packed bed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:empty tower velocity in packed bed</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " The unit of viscosity in CGS system is commonly known as Poise. The dimension of Poise is?",
            "a": [
                {"option": "g/cm.s2",               "correct": false},
                {"option": "g.cm/s",   "correct": false},
                {"option": "g.cm2/s",               "correct": false},
               {"option": "g/cm.s", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Ergun equation</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Ergun equation</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " If the equivalent length of a 90º elbow is greater than the 45º elbow, the pressure loss across the 90º elbow is ---------  the 45º elbow .",
            "a": [
                {"option": "greater than",           "correct": true},
                {"option": "lesser than",                  "correct": false},
                {"option": "same as",  "correct": false}		
               // {"option": "5",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:same as</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:same as</p>" // no comma here
        },
        { // Question 4
            "q": " The loss of pressure head for the laminar flow through pipes varies as ",
            "a": [
                {"option": "square of velocity",    "correct": false},
                {"option": "proportional to the velocity",     "correct": true},
		 {"option": "inverse of velocity",     "correct": false},
		 {"option": "	inverse of the square of velocity",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:proportional to the velocity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:proportional to the velocity</p>"  // no comma here
        },
       { // Question 5
            "q": " Reynolds number is a ratio of",
            "a": [
                {"option": "		momentum diffusivity to thermal diffusivity",    "correct": false},
                {"option": "momentum diffusivity to molecular diffusivity",     "correct": true},
		 {"option": "		inertial force to viscous force",  "correct": false},

                {"option": "		average velocity to velocity of sound",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:nonlinear</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:nonlinear</p>"  // no comma here
        } // no comma here
    ]
};
