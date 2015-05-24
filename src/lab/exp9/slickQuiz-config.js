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
            "q": "The maximum generated voltage in power generating stations in advanced countries is 33kV while that in India is _________",
            "a": [
                { "option": "6kV", "correct": false },
            { "option": "9kV", "correct": false },
            { "option": "11kV", "correct": true },
                { "option": "44kV", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:11kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:11kV</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
              "q": "The transmission lines and feeders are  _____________",
            "a": [
                { "option": "2-phase 2-wire circuits", "correct": false },
                { "option": "3-phase 3-wire circuit", "correct": true },
                { "option": "3-phase 3-wire circuits", "correct": false },
                { "option": "None of them", "correct": false} // no comma here
            ],

                "correct": "<p><span>Right answer</span> Ans:3-phase 3-wire circuit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 3-wire circuit</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The transmission lines are _____________",
            "a": [
                { "option": "3-phase 4-wire circuits", "correct": true },
                { "option": "2-phase 2-wire circuits", "correct": false },
                { "option": "3-phase 3-wire circuits", "correct": false },
                { "option": "None of them", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:3-phase 4-wire circuits</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 4-wire circuits</p>" // no comma here
        },
        { // Question 4
            "q": "Copper conductor is _____________ ",
            "a": [
                { "option": "Homogenous material", "correct": false },
                { "option": "Highly durable and has high scrap value", "correct": false },
                { "option": "It has high current density, so lesser X-sectional area of conductor is required", "correct": false },
                { "option": "All", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		{ // Question 5
		    "q": "The sag in aluminium conductors is __________ the copper conductors.",
            "a": [
                { "option": "Lesser than", "correct": false },
                { "option": "Equal to", "correct": false },
                { "option": "Greater than", "correct": true },
                { "option": "2 times lesser than", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Greater than</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Greater than</p>"  // no comma here
        },
		   { // Question 6
		       "q": "Choose the proper set of increases order of mechanical strength of the following line supports :  ",
            "a": [
                { "option": "Wooden poles > steel poles > steel towers > R.C.C poles", "correct": false },
                { "option": "Wooden poles > steel towers > steel poles > R.C.C poles", "correct": false },
                { "option": "Wooden poles > steel poles >R.C.C poles > steel towers", "correct": true },
				 {"option": "Wooden poles > R.C.C poles >steel poles > steel towers",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Wooden poles > steel poles >R.C.C poles > steel towers</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Wooden poles > steel poles >R.C.C poles > steel towers</p>"  // no comma here
        },
		{ // Question 7
		       "q": "A good porcelain insulator has compressive strength of about _________ and dielectric strength of _________ of its thickness.",
            "a": [
                { "option": "70 N/m<sup>2</sup> , 6kV/cm", "correct": false },
                { "option": "700 N/m<sup>2</sup>, 6kV/cm", "correct": false },
                 { "option": "7000 N/m<sup>2</sup> , 6kV/cm", "correct": false },
                {"option": "7000 N/m<sup>2</sup> , 60kV/cm",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:7000 N/m<sup>2</sup> , 60kV/cm</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:7000 N/m<sup>2</sup> , 60kV/cm</p>"  // no comma here
        },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Steatite is produced by mixing ___________ with small proton of ________ and ___________. ",
             "a": [
                { "option": "Hydrated magnesium silicate,carbon,nitrogen", "correct": false },
                { "option": "Hydrated magnesium silicate,carbon,clay", "correct": false },
                { "option": "Hydrated magnesium silicate,nitrogen,clay", "correct": false },
				{ "option": "Hydrated magnesium silicate, clay, feldspar", "correct": true }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Hydrated magnesium silicate, clay, feldspar</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Hydrated magnesium silicate, clay, feldspar</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "Development of 11KV/433 volts substation automation scheme using PLC for cyclic ON/OFF load control schemes",
            "a": [
                { "option": "Weight of the conductor", "correct": false },
                { "option": "Span length", "correct": false },
                { "option": "Temperature", "correct": false },
                { "option": "All", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 10
            "q": "The skin effect is negligible when the supply frequency is ________ and the conductor diameter is _________.",
            "a": [
                { "option": "High, Large", "correct": false },
                { "option": "High, Small", "correct": false },
                { "option": "Low ,Small", "correct": true },
                { "option": "Low ,Large", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Low ,Small</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Low ,Small</p>"  // no comma here
        },
		{ // Question 11
		    "q": "The factor which effect skin and proximity effects are ___________",
		    "a": [
                { "option": "Frequency of the current", "correct": false },
                { "option": "Permeability of the conductor material", "correct": false },
				{ "option": "Size of the conductor and distance between the conductors", "correct": false },
                { "option": "All", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:All</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		},
		   { // Question 12
		       "q": "In medium transmission lines ________",
		       "a": [
                { "option": "Length is between 50 km and 160km", "correct": false },
                { "option": "Operating voltage is between 21kV and 100kV", "correct": false },
                { "option": "Both length is between 50 km and 160km and operating voltage is between 21kV and 100kV", "correct": true },
				 { "option": "None of them", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both length is between 50 km and 160km and operating voltage is between 21kV and 100kV</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both length is between 50 km and 160km and operating voltage is between 21kV and 100kV</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "_______ is the r.m.s value of current which the Circuit breaker is capable of carrying continuously at its rated frequency under specified conditions.",
		       "a": [
                { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": false },
                { "option": "None of them", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:None of them</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:None of them</p>"  // no comma here
		   },
		   { // Question 14
		       "q": "Functions of switchgear are ________",
		   		       "a": [
                { "option": "To localize the effects of faults by operation of protective equipment and so automatically disconnect faulty point from the system", "correct": false },
                { "option": "To break efficiently the short circuits without giving rise to dangerous conditions", "correct": false },
                { "option": "To facilitate the redistribution of local, inspection and maintenance on the system", "correct": false },
                { "option": "All", "correct": true }
		   		       // {"option": "1291",   "correct": false} // no comma here
            ],
		   		       "correct": "<p><span>Right answer</span> Ans:All</p>",
		   		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   		   },
		
		{ // Question 15
		    "q": "Timers are __________",
		    "a": [
                { "option": "Used to delay an action", "correct": false },
                { "option": "Used to run an operation for a predetermined period of time", "correct": false },
		 { "option": "Used to record the total accumulated time of continuous or inter-mediate events", "correct": false },
                { "option": "All", "correct": true } 
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:All</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		},
		   { // Question 16
		       "q": "In word zero, of timer element, bit 13, is the _______",
		       "a": [
                { "option": "Timer-timing bit", "correct": false },
                { "option": "Timer-enable bit", "correct": false },
                { "option": "Timer-done bit", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Timer-done bit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Timer-done bit</p>"  // no comma here
		   },
		   { // Question 17
		       "q": "In an on-delay timer, the enable bit will be true when the timer-timing bit is true. Timer enable bit will be set through the transition from the timer-timing bit to the timer-done bit. Timer enable bit is set as long as there is logical continuity through all input instruction to the timer instruction, no matter the relationship between the preset value and accumulated value.",
		       "a": [
                { "option": "The above statement is true", "correct": true },
                { "option": "The above statement is true in most of the cases", "correct": false },
                { "option": "The above statement is false", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true</p>"  // no comma here
		   },
		   { // Question 18
		       "q": "In timer element, word 0 is for ________",
		       "a": [
                { "option": "Preset value", "correct": false },
                { "option": "Accumulated value", "correct": false },
                  { "option": "Status bits", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:Status bits</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:Status bits</p>"  // no comma here
		   },
		   	   { // Question 19
		   	       "q": "In timer file 11, timer 6’s timer enable bit is addressed as _______",
		   	       "a": [
                { "option": "T6:11/EN", "correct": false },
                { "option": "T6:11.EN", "correct": false },
                { "option": "T11:6.EN", "correct": false },
                { "option": "T11:6/EN", "correct": true }
		   	       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:T11:6/EN</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:T11:6/EN</p>"  // no comma here
		   	   },
        { // Question 20
            "q": "___________ instruction is used to program a time delay to begin after rung input goes false.",
            "a": [
                { "option": "On-delay timer", "correct": false },
                { "option": "Off-delay timer", "correct": true } 

// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Off-delay timer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Off-delay timer</p>"  // no comma here
        } // no comma here
    ]
};
