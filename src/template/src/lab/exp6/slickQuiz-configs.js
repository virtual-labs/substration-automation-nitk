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
            "q": "DC supply __________ be used for the transformer. ",
            "a": [
                { "option": "Can", "correct": false },
                  { "option": "Connect", "correct": true },
                        { "option": "Both Can and Connect", "correct": false }
            ],
                        "correct": "<p><span>Right answer</span> Ans:Connect</p>",
                        "incorrect": "<p><span>wrong</span> It's wrong,Ans:Connect</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Current ratios are in _________ of the voltage ratio.  ",
            "a": [
                { "option": "Direct ratio", "correct": false },
         				{ "option": "Inverse ratio", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

         				"correct": "<p><span>Right answer</span> Ans:Inverse ratio</p>",
         				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Inverse ratio</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The important characteristics of the fluid used in CB are :- ",
            "a": [
                { "option": "It should have good thermal and chemical stability", "correct": false },
                { "option": "It should have high dielectric strength and are extinguish ability", "correct": false },
                { "option": "Non- in flammability and high thermal conductivity", "correct": false },
                { "option": "All", "correct": true} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
        { // Question 4
            "q": "SF6 circuit breaker is ",
            "a": [
                { "option": "Expensive", "correct": false },
                { "option": "SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes", "correct": false },
                  { "option": "Both Expensiv and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes", "correct": true },
                { "option": "None", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Expensiv and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Expensiv and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes</p>"  // no comma here
        },
		{ // Question 5
		    "q": "A potential transformer is a  ",
            "a": [
                { "option": "Step up transformer", "correct": false },
                { "option": "Step down transformer", "correct": true },
				{ "option": "Both Step up transformer and Step down transformer", "correct": false },
                { "option": "None", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step down transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step down transformer</p>"  // no comma here
        },
		   { // Question 6
		       "q": "_________ is used to make sure that an electrical circuit can be completely de-energized for service or maintenance.  ",
            "a": [
                { "option": "Circuit breaker", "correct": false },
                { "option": "Isolator", "correct": true },
                { "option": "Fuse", "correct": false },
				 { "option": "None", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Isolator</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Isolator</p>"  // no comma here
        },
        	   { // Question 7
        	       "q": "Isolators are __________  ",
        	       "a": [
                { "option": "Manually operated", "correct": false },
                { "option": "Motorized", "correct": false },
                { "option": "Both Manually operated and Motorized", "correct": true },
				 { "option": "None", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both Manually operated and Motorized</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Manually operated and Motorized</p>"  // no comma here
        	   },
        	     { // Question 8
        	         "q": "In a transformer, if N2 is number of secondary winding N1 is the number of primary winding then, if (N2/N1) ratio is greater than 1.It is called as ________ ",
        	         "a": [
                            { "option": "Step up transformer", "correct": true },
                { "option": "Step down transformer", "correct": false },
				{ "option": "Isolation transformer", "correct": false },
                { "option": "None", "correct": false }
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step up transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step up transformer</p>"  // no comma here
        	     },
		{ // Question 9
		    "q": "Oil transformer usually consist of, ",
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
		   { // Question 10
		       "q": "In case of, OFF circuit taps, the transformer must be _________ before the tap changer mechanism is operated. ",
		       "a": [
                { "option": "Energized", "correct": false },
                { "option": "De-energized", "correct": true},
                { "option": "Both Energized and De-energized", "correct": false }

		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:De-energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:De-energized</p>"  // no comma here
		   },
        	   { // Question 11
        	       "q": "To prevent the moisture from entering the conservator, a __________ is provided that will dry the air as the breather takes place.",
        	       "a": [
                { "option": "Magnesium dioxide breather", "correct": false },
                { "option": "Silica gel breather", "correct": true },
                { "option": "Both Magnesium dioxide breather and Silica gel breather", "correct": false }
		
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Silica gel breather</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Silica gel breather</p>"  // no comma here
        	   },
	        { // Question 12
	            "q": "In double bus–bar system ,there is a provision of a bus-bar coupling switch for transferring operation from one bus-bar to another _________ . ",
	            "a": [
           { "option": "True", "correct": true },
                { "option": "False", "correct": false }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:True</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
        } // no comma here
    ]
};
