// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge",
        "main": "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The function of __________ is to isolate the part of the power system in case of abnormal conditions.",
            "a": [
                { "option": "Circuit Breaker", "correct": true },
            { "option": "Isolator", "correct": false },
            { "option": "Insulator", "correct": false },
                { "option": "All", "correct": false }
            ],
            "correct": "<p><span>Right answer</span> Ans:Circuit Breaker</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Circuit Breaker</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In oil circuit breaker (O.C.B) the range exists between",
            "a": [
                { "option": "75MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
                { "option": "7.5MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
                { "option": "250MVA at 2.5 kV and 5000MVA at 250kV", "correct": false },
				{ "option": "25MVA at 2.5 kV and 5000MVA at 250kV", "correct": true }
            //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

            "correct": "<p><span>Right answer</span> Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
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
        { // Question 4
            "q": "The transient voltage appearing across the contacts during arc period is called ________ ",
            "a": [
              { "option": "Recovery voltage", "correct": false },
                { "option": "Restriking voltage", "correct": true },
                { "option": "Arc voltage", "correct": false },
                { "option": "All", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Restriking voltage</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Restriking voltage</p>"  // no comma here
        },
		{ // Question 5
		    "q": "When low inductive current is interrupted by a Circuit breaker and the arc generating force of the Circuit breaker and is more than necessary to interrupt a low magnitude of current, the current will be interrupted before its natural zero instant. It is termed as ",
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
		   { // Question 6
		       "q": "_________ is the r.m.s value of current which the Circuit breaker is capable of carrying continuously at its rated frequency under specified conditions. ",
		       "a": [
                { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": false },
				 { "option": "None", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:None</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:None</p>"  // no comma here
		   },
		   { // Question 7
		       "q": "________ is the current (r.m.s value) that a Circuit breaker is capable of breaking under specified conditions and given recovery voltage. ",
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
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "The maximum generated voltage in power generating stations in advanced countries is 33kV while that in India is ________ ",
             "a": [
                { "option": "6 kV", "correct": false },
                { "option": "9kV", "correct": false },
                { "option": "11kV", "correct": true },
				{ "option": "44kV", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

             "correct": "<p><span>Right answer</span> Ans:11kV</p>",
             "incorrect": "<p><span>wrong</span> It's wrong,Ans:11kV</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "The transmission lines are _________ ",
            "a": [
                { "option": "3-phase 4-wire circuits", "correct": true },
                { "option": "2-phase 2-wire circuits", "correct": false },
                { "option": "3-phase 3-wire circuits", "correct": false },
                { "option": "None", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:3-phase 4-wire circuits</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 4-wire circuits</p>" // no comma here
        },
        { // Question 10
            "q": "_________ are the terminals which connect the consumer’s terminals to the distributors.",
            "a": [
                { "option": "Service mains", "correct": true },
                { "option": "Distributors", "correct": false },
                { "option": "Feeders", "correct": false },
                { "option": "None", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Service mains</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Service mains</p>"  // no comma here
        },
		{ // Question 11
		    "q": "In AC system,",
		    "a": [
                { "option": "There is a need to synchronize the alternators before they are put in parallel", "correct": false },
                { "option": "As a result of skin effect, the resistance of the line is increased", "correct": false },
				{ "option": "In order to avoid corona loss and also to provide adequate amount of insulation in case of overhead lines, more spacing between the conductors is required", "correct": false },
                { "option": "All", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:All</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		},
		   { // Question 12
		       "q": "Underground cables are rarely used for",
		       "a": [
                { "option": "Detection of fault is tough", "correct": false },
                { "option": "Installation costs are very high", "correct": false },
                { "option": "More suitable for short distance", "correct": false },
				 { "option": "All", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:All</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "The characteristics that conductors used for transmission and distribution should possess :  ",
		       "a": [
                { "option": "High tensile strength and low sensitivity", "correct": false },
                { "option": "Low specific gravity", "correct": false },
                { "option": "Low cost", "correct": false },
                { "option": "All", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:All</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
		   { // Question 14
		       "q": "Copper conductor is",
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
		           { // Question 15 - Multiple Choice, Multiple True Answers, Select All
		               "q": "The sag in aluminium conductors is __________ the copper conductors.",
		               "a": [
                { "option": "Lesser than", "correct": false },
                { "option": "Equal to", "correct": false },
		 { "option": "Greater than", "correct": true },
                { "option": "2 times lesser than", "correct": false }// no comma here
            ],
		               "correct": "<p><span>Right answer</span> Ans:Greater than</p>",
		               "incorrect": "<p><span>wrong</span> It's wrong,Ans:Greater than</p>"  // no comma here
		           },
        { // Question 16
            "q": "Choose the proper set of increases order of mechanical strength of the following line supports : ",
            "a": [
              { "option": "Wooden poles > steel poles > steel towers > R.C.C poles", "correct": false },
                { "option": "Wooden poles > steel towers > steel poles > R.C.C poles", "correct": false },
                { "option": "Wooden poles > steel poles  >R.C.C poles > steel towers ", "correct": true },
                { "option": "Wooden poles > R.C.C poles  >steel poles > steel towers  ", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Wooden poles > steel poles  >R.C.C poles > steel towers</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Wooden poles > steel poles  >R.C.C poles > steel towers</p>"  // no comma here
        },
		{ // Question 17
		    "q": "A good porcelain insulator has compressive strength of about _________ and dielectric strength of _________ of its thickness.",
		    "a": [
                { "option": "70 N/m<sup>2</sup> , 6kV/cm", "correct": false },
                { "option": "700 N/m<sup>2</sup> , 6kV/cm", "correct": false },
                { "option": "7000 N/m<sup>2</sup> , 6kV/cm", "correct": false},
                { "option": "7000 N/m<sup>2</sup> , 60kV/cm", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:7000 N/m<sup>2</sup> , 60kV/cm</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:7000 N/m<sup>2</sup> , 60kV/cm</p>"  // no comma here
		},
		   { // Question 18
		       "q": "Steatite is produced by mixing ___________ with small proton of ________ and ___________.",
		       "a": [
                { "option": "Hydrated magnesium silicate,carbon,nitrogen", "correct": false },
                { "option": "Hydrated magnesium silicate,carbon,clay", "correct": false },
                { "option": "Hydrated magnesium silicate,nitrogen,clay", "correct": false },
				 { "option": "Hydrated magnesium silicate, clay, felspar", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Hydrated magnesium silicate, clay, felspar</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Hydrated magnesium silicate, clay, felspar</p>"  // no comma here
		   },
		   { // Question 19
		       "q": "The factor affecting the sag in overhead lines are",
		       "a": [
           { "option": "Weight of the conductor", "correct": true },
                { "option": "Span length", "correct": false },
                { "option": "Temperature", "correct": false },
				 { "option": "All", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:All</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
         { // Question 20 - Multiple Choice, Multiple True Answers, Select Any
             "q": "The skin effect is negligible when the supply frequency is ________ and the conductor diameter is _________. ",
             "a": [
                { "option": "High, Large", "correct": false },
                { "option": "High, Small", "correct": false },
                { "option": "Low ,Small", "correct": true },
				{ "option": "Low ,Large", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Low ,Small</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Low ,Small</p>" // no comma here
         },
        { // Question 21 - Multiple Choice, Multiple True Answers, Select All
            "q": "The factor which effect skin and proximity effects are ______________ ",
            "a": [
                { "option": "Frequency of the current", "correct": false },
                { "option": "Permeability of the conductor material", "correct": false },
                { "option": "Size of the conductor and distance between the conductors", "correct": false },
                { "option": "All", "correct": true} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        
        { // Question 22
            "q": "In medium transmission lines",
            "a": [
                { "option": "Length is between 50 km and 160km", "correct": false },
                { "option": "Operating voltage is between 21kV and 100kV", "correct": false },
		 { "option": "Both Length is between 50 km and 160km and Operating voltage is between 21kV and 100kV", "correct": true },
                { "option": "None of the above", "correct": false } // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Length is between 50 km and 160km and Operating voltage is between 21kV and 100kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Length is between 50 km and 160km and Operating voltage is between 21kV and 100kV</p>"  // no comma here
} // no comma here
    ]
};
