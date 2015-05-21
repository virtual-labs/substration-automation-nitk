// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The function of __________ is to isolate the part of the power system in case of abnormal conditions.",
            "a": [
                { "option": "Circuit Breaker", "correct": true },
                  { "option": "Isolator", "correct": false },
                    { "option": "Insulator", "correct": false },
                { "option": "All the above", "correct": false }
            ],
            "correct": "<p><span>Right answer</span> Ans:Circuit Breaker</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Circuit Breaker</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Characteristic of high voltage rating Circuit Breaker :-",
            "a": [
                { "option": "High reliability electrically and mutually", "correct": false },
                { "option": "Capability of interrupting capacitive and inductive circuits and fault currents of all values within their rating", "correct": false },
                { "option": "Slower time response", "correct": false },
				{ "option": "Both (a) and (b)", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:Both (a) and (b)</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (a) and (b)</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "In oil circuit breaker (O.C.B) the range exists between ",
            "a": [
                {"option": "75MVA at 2.5 kV and 50000MVA at 250kV",           "correct": false},
                {"option": "7.5MVA at 2.5 kV and 50000MVA at 250kV",                  "correct": false},
                {"option": "250MVA at 2.5 kV and 5000MVA at 250kV",  "correct": false},
                {"option": "25MVA at 2.5 kV and 5000MVA at 250kV",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>" // no comma here
        },
        { // Question 4
            "q": "Advantages of using Air blast Circuit breakers :",
            "a": [
                {"option": "Current chopping",    "correct": false},
                {"option": "Sensitivity to restricting voltage",     "correct": false},
                  {"option": "Short arc duration",     "correct": true},
                {"option": "All the above",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Short arc duration</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Short arc duration</p>"  // no comma here
        },
		{ // Question 5
            "q": "Sulphur hexafluoride (SF6) ",
            "a": [
                {"option": "Is an inert gas",    "correct": false},
                {"option": "Has high dielectric strength",     "correct": false},
				{"option": "Heat transfer property is about 16 times that of air because of high density",     "correct": false},
                {"option": "All the above",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
		   { // Question 6
            "q": "In SF6 Circuit breaker ________ ",
            "a": [
                {"option": "No risk of fire",    "correct": false},
                {"option": "No reduction of dielectric strength",     "correct": false},
                {"option": "Current chopping tendency is minimized",      "correct": false},
				 {"option": "All the above",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
		   { // Question 7
            "q": "The voltage across the contacts during the arcing period is known as ______",
            "a": [
                {"option": "Recovery voltage",    "correct": false},
                {"option": "Restriking voltage",     "correct": false},
                {"option": "Arc voltage",     "correct": true},
                {"option": "All the above",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Arc voltage</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Arc voltage</p>"  // no comma here
        },
        { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The transient voltage appearing across the contacts during arc period is called ________",
            "a": [
              {"option": "Recovery voltage",    "correct": false},
                {"option": "Restriking voltage",     "correct": true},
                {"option": "Arc voltage",     "correct": false},
                {"option": "All the above",      "correct": false}
            //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

            "correct": "<p><span>Right answer</span> Ans:Restriking voltage</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Restriking voltage</p>" // no comma here
        },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "When low inductive current is interrupted by a Circuit breaker and the arc generating force of the Circuit breaker and is more than necessary to interrupt a low magnitude of current, the current will be interrupted before its natural zero instant. It is termed as ________ ",
            "a": [
                { "option": "Restriking", "correct": false },
                { "option": "Recovery instant", "correct": false },
                { "option": "Current chopping", "correct": true },
                { "option": "Arcing voltage", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Current chopping</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Current chopping</p>" // no comma here
        },
        { // Question 10
            "q": "_______ is the r.m.s value of current which the Circuit breaker is capable of carrying continuously at its rated frequency under specified condition.",
            "a": [
                { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": false },
                { "option": "None of the above", "correct": true }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:None of the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:None of the above</p>"  // no comma here
        },
		{ // Question 11
		    "q": "The peak value of current (including the DC component) during first cycle of current wave after the closure of Circuit breaker is known as __________",
		    "a": [
         { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": true },
                { "option": "Short-time capacity", "correct": false },
                { "option": "None of the above", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:Making capacity</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:Making capacity</p>"  // no comma here
		},
		   { // Question 12
		       "q": "_________ is the current (r.m.s value) that a Circuit breaker is capable of breaking under specified conditions and given recovery voltage",
		       "a": [
         { "option": "Breaking capacity", "correct": true },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": false },
                { "option": "None of the above", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:Breaking capacity</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:Breaking capacity</p>"  // no comma here
		   },
        { // Question 13
            "q": "__________ of a Circuit breaker depends upon its ability to withstand the temperature rise and the electromagnetic force effects",
            "a": [
           { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": true },
                { "option": "None of the above", "correct": false }
// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Short-time capacity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Short-time capacity</p>"  // no comma here
        } // no comma here
    ]
};
