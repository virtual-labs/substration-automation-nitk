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
            "q": "In a transformer, if N2 is number of secondary winding N1 is the number of primary winding then, if (N2/N1) ratio is greater than 1.It is called as ________  ",
            "a": [
                { "option": "Step down transformer", "correct": false },
            { "option": "Step up transformer", "correct": true },
            { "option": "Isolation transformer", "correct": false },
                { "option": "All", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:Step up transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step up transformer</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a transformer, if N2 is number of secondary winding N1 is the number of primary winding then, if (N2/N1) ratio is equal to 1.It is called as ________",
            "a": [
                  { "option": "Step down transformer", "correct": false },
            { "option": "Step up transformer", "correct": false },
            { "option": "Isolation transformer", "correct": true },
                { "option": "All", "correct": false }
            ],

                "correct": "<p><span>Right answer</span> Ans:Isolation transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Isolation transformer</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The tap changing control equipment includes ________ ",
            "a": [
                { "option": "Control and paralleling equipment", "correct": false },
                { "option": "Line drop compensator equipment used along with the current transformer to provide voltage control at a point remote from the measuring point", "correct": false },
                { "option": "Automatic voltage regulating relay", "correct": false },
                { "option": "All", "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 4
            "q": "16 step tap changes provide ________ voltage change in each step.  ",
            "a": [
              { "option": "2%", "correct": false },
                { "option": "1%", "correct": false },
                { "option": "5/4%", "correct": true },
                { "option": "4/5%", "correct": false } 
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:5/4%</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:5/4%</p>"  // no comma here
        },
		{ // Question 5
		    "q": "In case of, OFF circuit taps, the transformer must be _________ before the tap changer mechanism is operated.",
            "a": [
                { "option": "Energized", "correct": false },
                { "option": "De-energized", "correct": true },
                { "option": "Both Energized and De-energized", "correct": false }
                           // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:De-energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:De-energized</p>"  // no comma here
        },
		   { // Question 6
		       "q": "Advantage of using instrument Transformer is ",
            "a": [
                { "option": "Standard rated instruments may be used easily", "correct": false },
                { "option": "It provides safety for operating personal", "correct": false },
                { "option": "Both Standard rated instruments may be used easily and It provides safety for operating personal", "correct": true },
				 { "option": "None", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both Standard rated instruments may be used easily and It provides safety for operating personal</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Standard rated instruments may be used easily and It provides safety for operating personal</p>"  // no comma here
        },
		   { // Question 7
		       "q": "Potential transformers are made with ",
            "a": [
           { "option": "Low quality icon core operating at very low flex density so that the magnetizing current may be large", "correct": false },
                { "option": "High quality icon core operating at very high flex density so that the magnetizing current may be large", "correct": false },
                { "option": "High quality icon core operating at very high flex density so that the magnetizing current may be very small", "correct": false },
				 { "option": "High quality icon core operating at very low flex density so that the magnetizing current may be very small", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:High quality icon core operating at very low flex density so that the magnetizing current may be very small</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:High quality icon core operating at very low flex density so that the magnetizing current may be very small</p>"  // no comma here
        },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "A high magnitude alternating current can be measured by a combination of _________ and_________. ",
             "a": [
                { "option": "A high magnitude alternating current can be measured by a combination of _________ and_________. ", "correct": false },
                { "option": "Current transformer and high range ammeter", "correct": false },
                { "option": "Current transformer and low range ammeter", "correct": true },
				{ "option": "None", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Current transformer and low range ammeter</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Current transformer and low range ammeter</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "The current transformer ratio is not equal to the ratio of secondary to primary turns.",
            "a": [
                { "option": "The above statement is false", "correct": false },
                { "option": "The above statement is false, because of the effect of magnetizing current", "correct": false },
                { "option": "The above statement is true, because of the effect of magnetizing current", "correct": true },
                { "option": "None", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true, because of the effect of magnetizing current</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true, because of the effect of magnetizing current</p>" // no comma here
        },
        { // Question 10
            "q": "A current transformer must never be operated on open circuit for ",
            "a": [
                { "option": "There will be no secondary m.m.f. and since the primary current (and m.m.f.) is fixed, the core flux will increase enormously. This will cause large amount of eddy current and hysteresis losses and the resulting high temperature may damage the insulation or even the core", "correct": false },
                { "option": "As the secondary side is open, a very high voltage will be induced in the multi-turn secondary and this high voltage is dangerous to both life and to the insulation", "correct": false },
                { "option": "There will be no secondary m.m.f. and since the primary current (and m.m.f.) is fixed, the core flux will increase enormously. This will cause large amount of eddy current and hysteresis losses and the resulting high temperature may damage the insulation or even the core and As the secondary side is open, a very high voltage will be induced in the multi-turn secondary and this high voltage is dangerous to both life and to the insulation", "correct": true },
                { "option": "None", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:There will be no secondary m.m.f. and since the primary current (and m.m.f.) is fixed, the core flux will increase enormously. This will cause large amount of eddy current and hysteresis losses and the resulting high temperature may damage the insulation or even the core and As the secondary side is open, a very high voltage will be induced in the multi-turn secondary and this high voltage is dangerous to both life and to the insulation</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:There will be no secondary m.m.f. and since the primary current (and m.m.f.) is fixed, the core flux will increase enormously. This will cause large amount of eddy current and hysteresis losses and the resulting high temperature may damage the insulation or even the core and As the secondary side is open, a very high voltage will be induced in the multi-turn secondary and this high voltage is dangerous to both life and to the insulation</p>"  // no comma here
        },
		{ // Question 11
		    "q": "_______ is used to make sure that an electrical circuit can be completely de-energized for service or maintenance.",
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
			   { // Question 12
		       "q": "Isolators are",
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
		   { // Question 13
		       "q": "Characteristic of high voltage rating Circuit Breaker :- ",
		   		       "a": [
                { "option": "High reliability electrically and mutually", "correct": false },
                { "option": "Capability of interrupting capacitive and inductive circuits and fault currents of all values within their rating", "correct": false },
				  { "option": "Slower time response", "correct": false },
			                { "option": "Both High reliability electrically and mutually and Capability of interrupting capacitive and inductive circuits and fault currents of all values within their rating", "correct": true }
		   		       // {"option": "1291",   "correct": false} // no comma here
            ],
			                "correct": "<p><span>Right answer</span> Ans:Both High reliability electrically and mutually and Capability of interrupting capacitive and inductive circuits and fault currents of all values within their rating</p>",
			                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both High reliability electrically and mutually and Capability of interrupting capacitive and inductive circuits and fault currents of all values within their rating</p>"  // no comma here
		   		   },
		  { // Question 14
		      "q": "In oil circuit breaker (O.C.B) the range exists between ",
		      "a": [
                { "option": "75MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
				 { "option": "7.5MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
				  { "option": "250MVA at 2.5 kV and 5000MVA at 250kV", "correct": false },
                { "option": "25MVA at 2.5 kV and 5000MVA at 250kV", "correct": true }
		   		          // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>"  // no comma here
            },
		   { // Question 15 - Multiple Choice, Multiple True Answers, Select Any
		       "q": "In SF6 Circuit breaker",
		       "a": [
                { "option": "No risk of fire", "correct": false },
				 { "option": "No reduction of dielectric strength", "correct": false },
				  { "option": "Current chopping tendency is minimized", "correct": false },
                { "option": "All", "correct": true }
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
		   		        },
        { // Question 16 - Multiple Choice, Multiple True Answers, Select All
            "q": "The voltage across the contacts during the arcing period is known as ",
            "a": [
                { "option": "Recovery voltage", "correct": false },
                { "option": "Restriking voltage", "correct": false },
                { "option": "Arc voltage", "correct": true },
                { "option": "All", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Arc voltage</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Arc voltage</p>" // no comma here
        },
        { // Question 17
            "q": "The peak value of current (including the DC component) during first cycle of current wave after the closure of Circuit breaker is known as __________ ",
            "a": [
              { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": true },
                { "option": "Short-time capacity", "correct": false },
                { "option": "None", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Making capacity</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Making capacity</p>"  // no comma here
        },
		{ // Question 18
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
		   { // Question 19
		       "q": "The major advantage of single bus-bar system is that fault on one part of the bus–bar or system does not completely shut down the whole station. ",
		       "a": [
                { "option": "False", "correct": false },
       				 { "option": "True", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:True</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
		   },
		   
		   { // Question 20
		       "q": "Bus bar can be arranged in __________ ",
		       "a": [
                { "option": "Single bus-bar system", "correct": false },
                { "option": "Double bus-bar system with sectionalisation", "correct": false },
			    { "option": "Both Single bus-bar system and Double bus-bar system with sectionalisation", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
			    "correct": "<p><span>Right answer</span> Ans:Both Single bus-bar system and Double bus-bar system with sectionalisation</p>",
			    "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Single bus-bar system and Double bus-bar system with sectionalisation</p>"  // no comma here
		   },

        { // Question 21
            "q": "_________ is a device which is used to switch from one bus to the other without any interruption in power supply and without creating hazardous arcs.",
            "a": [
                { "option": "Isolator", "correct": false },
				 { "option": "Circuit breaker", "correct": false },
				  { "option": "Bus coupler", "correct": true },
                { "option": "Any of them", "correct": false }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Bus coupler</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Bus coupler</p>"  // no comma here
        } // no comma here
    ]
};
