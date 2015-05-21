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
            "q": "Instrument transformers are classified as: ",
            "a": [
                { "option": "Potential transformer", "correct": false },
            { "option": "Current transformer", "correct": false },
            { "option": "Both Potential transformer and Current transformer", "correct": true },
                { "option": "None", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Potential transformer and Current transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Potential transformer and Current transformer</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Potential transformers are made with",
            "a": [
                { "option": "Low quality icon core operating at very low flex density so that the magnetizing current may be large", "correct": false },
                { "option": "High quality icon core operating at very high flex density so that the magnetizing current may be large", "correct": false },
                { "option": "High quality icon core operating at very high flex density so that the magnetizing current may be very small", "correct": false },
				{ "option": "High quality icon core operating at very low flex density so that the magnetizing current may be very small", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:High quality icon core operating at very low flex density so that the magnetizing current may be very small</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:High quality icon core operating at very low flex density so that the magnetizing current may be very small</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Potential transformers are carefully designed to ensure ",
            "a": [
                { "option": "Minimum variation of voltage ratio with load and minimum phase shift between input and output voltages", "correct": true },
                { "option": "Minimum variation of voltage ratio with load and maximum phase shift between input and output voltages", "correct": false },
                { "option": "Maximum variation of voltage ratio with load and maximum phase shift between input and output voltages", "correct": false },
                { "option": "Maximum variation of voltage ratio with load and minimum phase shift between input and output voltages", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Minimum variation of voltage ratio with load and minimum phase shift between input and output voltages</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Minimum variation of voltage ratio with load and minimum phase shift between input and output voltages</p>" // no comma here
        },
        { // Question 4
            "q": "In a transformer, if N2 is number of secondary winding N1 is the number of primary winding then, if (N2/N1) ratio is lesser than 1.It is called as ________ ",
            "a": [
              { "option": "Step down transformer", "correct": true },
                { "option": "Step up transformer", "correct": false },
                { "option": "Isolation transformer", "correct": false },
                { "option": "All", "correct": false } 
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step down transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step down transformer</p>"  // no comma here
        },
		{ // Question 5
		    "q": "In an ideal transformer,  ",
            "a": [
                { "option": "There are no losses", "correct": false },
                { "option": "Windings have zero resistance", "correct": false },
                { "option": "Leakage flex is zero", "correct": false },
                { "option": "All", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		   { // Question 6
		       "q": "Oil transformer usually consist of,",
            "a": [
                { "option": "A conservator tank, buchholz relay", "correct": false },
                { "option": "Breather of dehydrating type", "correct": false },
                { "option": "Winding temperature-indicator, oil temperature indicator", "correct": false },
				 { "option": "All", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		   { // Question 7
		       "q": "32 step tap changes provide ________ voltage change in each step.",
            "a": [
           { "option": "5/4 %", "correct": false },
                { "option": "4/5 %", "correct": false },
                { "option": "5/8%", "correct": true },
				 { "option": "8/5 %", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:5/8%</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:5/8%</p>"  // no comma here
        },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Conservator is an oil-expansion tank mounted _________ on the transformer.",
             "a": [
                { "option": "Below the highest oil point", "correct": false },
                { "option": "Ground level", "correct": false },
                { "option": "Above the highest oil point", "correct": true },
				{ "option": "Any of them", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Above the highest oil point</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Above the highest oil point</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "The function of __________ is to isolate the part of the power system in case of abnormal conditions. ",
            "a": [
                { "option": "Circuit Breaker", "correct": true },
                { "option": "Isolator", "correct": false },
                { "option": "Insulator", "correct": false },
                { "option": "All", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Circuit Breaker</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Circuit Breaker</p>" // no comma here
        },
        { // Question 10
            "q": "Advantages of using Air blast Circuit breakers : ",
            "a": [
                { "option": "Current chopping", "correct": false },
                { "option": "Sensitivity to restricting voltage", "correct": false },
                { "option": "Short arc duration", "correct": true },
                { "option": "All", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Short arc duration</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Short arc duration</p>"  // no comma here
        },
		{ // Question 11
		    "q": "When low inductive current is interrupted by a Circuit breaker and the arc generating force of the Circuit breaker and is more than necessary to interrupt a low magnitude of current, the current will be interrupted before its natural zero instant. It is termed as",
		    "a": [
                { "option": "Restriking", "correct": false },
                { "option": "Recovery instant", "correct": false },
				{ "option": "Current chopping", "correct": true },
                { "option": "Arcing voltage", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Current chopping</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Current chopping</p>"  // no comma here
		},
		   { // Question 12
		       "q": "_______ is the current (r.m.s value) that a Circuit breaker is capable of breaking under specified conditions and given recovery voltage",
		       "a": [
                { "option": "Breaking capacity", "correct": true },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": false },
				 { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Breaking capacity</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Breaking capacity</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "__________ of a Circuit breaker depends upon its ability to withstand the temperature rise and the electromagnetic force effects.",
		       "a": [
           { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": true },
				 { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Short-time capacity</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Short-time capacity</p>"  // no comma here
		   },
		   { // Question 14
		       "q": "Bus bar can be arranged in _________",
		   		       "a": [
                { "option": "Single bus-bar system", "correct": false },
                { "option": "Double bus-bar system with sectionalisation", "correct": false },
                { "option": "Both Single bus-bar system and Double bus-bar system with sectionalisation", "correct": true }
		   		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Single bus-bar system and Double bus-bar system with sectionalisation</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Single bus-bar system and Double bus-bar system with sectionalisation</p>"  // no comma here
		   		   },
        { // Question 15
            "q": "The major advantage of single bus-bar system is that fault on one part of the bus–bar or system does not completely shut down the whole station.",
            "a": [
                { "option": "False", "correct": false },
                { "option": "True", "correct": true }
// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:True</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
        } // no comma here
    ]
};
