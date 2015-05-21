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
            "q": "The main function of substations are",
            "a": [
                { "option": "To receive energy transmitted at high voltage from the generating stations", "correct": false },
                  { "option": "To decrease the voltage to a value appropriate for local distribution", "correct": false },
                    { "option": "To provide switching facilities", "correct": false },
                { "option": "All", "correct": true}
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The important characteristics of the fluid used in Circuit Breaker are :-",
            "a": [
                { "option": "It should have good thermal and chemical stability", "correct": false },
                { "option": "It should have high dielectric strength and are extinguishing ability", "correct": false },
                  { "option": "Non- inflammability and high thermal conductivity", "correct": false},
                { "option": "All", "correct": true }
            ],

                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The advantage of using oil in Oil Circuit Breaker as an arc quenching medium is:  ",
            "a": [
                { "option": "It has high dielectric strength", "correct": false },
                { "option": "As a result of decomposition of oil, it has good cooling property", "correct": false },
				{ "option": "It has high dielectric strength and as a result of decomposition of oil, it has good cooling property", "correct": true },
                { "option": "Highly inflammable", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:It has high dielectric strength and as a result of decomposition of oil, it has good cooling property</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:It has high dielectric strength and as a result of decomposition of oil, it has good cooling property</p>" // no comma here
        },
        { // Question 4
            "q": "Instrument Transformer are used because  ",
            "a": [
                { "option": "It is cheap", "correct": false },
                { "option": "It provides more safety", "correct": false },
                { "option": "It is not practicable to connect instruments and meters directly to the lines in high voltage circuits", "correct": false },
				 { "option": "Both it provides more safety and it is not practicable to connect instruments and meters directly to the lines in high voltage circuits", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both it provides more safety and it is not practicable to connect instruments and meters directly to the lines in high voltage circuits</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both it provides more safety and it is not practicable to connect instruments and meters directly to the lines in high voltage circuits</p>"  // no comma here
        },
		{ // Question 5
		    "q": "A potential transformer is a ",
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
		       "q": "Big porcelain bushing, hollow insulators can be used up to _______ kV.",
		       "a": [
           { "option": "200 kV", "correct": false },
                { "option": "400 kV", "correct": false },
                { "option": "1000 kV", "correct": true },
                { "option": "3000 kV", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:1000 kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:1000 kV</p>"  // no comma here
        },
        	   { // Question 7
        	       "q": "The use of ________ for high voltage applications is becoming more common.  ",
        	       "a": [
                { "option": "Oil", "correct": false },
                { "option": "Porcelain", "correct": false },
                { "option": "Polymer", "correct": true },
				 { "option": "All", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Polymer</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Polymer</p>"  // no comma here
        	   },
        	     { // Question 8
        	         "q": "DC supply __________ be used for the transformer. ",
        	         "a": [
                { "option": "Can", "correct": false },
                { "option": "Connect", "correct": true },
                  { "option": "Both Can and Connect", "correct": false }
         
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:Connect</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:Connect</p>"  // no comma here
        	     },
		{ // Question 9
		    "q": "The ratio of secondary induced emf to primary induced emf is known as ___________ ",
		    "a": [
                { "option": "Voltage transform ratio", "correct": true },
                { "option": "Current ratio", "correct": false },
				{ "option": "Power ratio", "correct": false },
                { "option": "All", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Voltage transform ratio</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Voltage transform ratio</p>"  // no comma here

            },
        	    { // Question 10 - Multiple Choice, Multiple True Answers, Select Any
        	        "q": "The transmission voltage in India are _________ .",
        	        "a": [
           { "option": "400 kV", "correct": false },
                { "option": "220 kV", "correct": false },
                { "option": "132 kV", "correct": false },
                { "option": "All", "correct": true }
            ],
        	        "correct": "<p><span>Right answer</span> Ans:All</p>",
        	        "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        	    },
        { // Question 11 - Multiple Choice, Multiple True Answers, Select All
            "q": "Transmission network is commonly known as __________ ",
            "a": [
                { "option": "Pan", "correct": false },
                { "option": "Lock-head", "correct": false },
				{ "option": "Grid", "correct": true },
                { "option": "All", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Grid</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Grid</p>" // no comma here
        },
        { // Question 12
            "q": "_________ is one of the best conductors due to its high electrical conductivity and high tensile strength for all type of transmission. ",
            "a": [
                { "option": "Phosphor brown materials", "correct": false },
                { "option": "Galvanised iron", "correct": false },
                { "option": "Aluminium", "correct": false },
				 { "option": "Copper", "correct": true }
            // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Copper</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Copper</p>"  // no comma here
        },
		{ // Question 13
		    "q": "Aluminium has _______ the resistivity of copper.",
		    "a": [
                { "option": "12 times", "correct": false },
                { "option": "24 times", "correct": false },
                  { "option": "3 times", "correct": false },
                { "option": "16 times", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:16 times</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:16 times</p>"  // no comma here
		},
		   { // Question 14
		       "q": "When 1 or 2 percentage of cadmium is added to copper it __________ the tensile strength by ________ but ________ the conductivity by ________.",
		       "a": [
           { "option": "Decreases, 40% , Increases, 20%", "correct": false },
                { "option": "Decreases, 20% , Increases, 40%", "correct": false },
                { "option": "Increases, 40% , decreases, 17%", "correct": true },
                { "option": "Increases, 17% , decreases, 40%", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Increases, 40% , decreases, 17%</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Increases, 40% , decreases, 17%</p>"  // no comma here
		   },
        	   { // Question 15
        	       "q": "In double bus-bar  system ,there is a provision of a bus-bar coupling switch for transferring operation from one bus-bar to another _________ . ",
        	       "a": [
                { "option": "True", "correct": true },
                { "option": "False", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
        	       "correct": "<p><span>Right answer</span> Ans:True</p>",
        	       "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
        	   },
        	     { // Question 16
        	         "q": "Timers are output instructions that are internal to the programmable logic controller.",
        	         "a": [
                { "option": "The above statement is true", "correct": true },
                { "option": "The above statement is false", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true</p>"  // no comma here
        	     },
		{ // Question 17
		    "q": "In word zero, of timer element, bit 15, is the _______ ",
		    "a": [
                { "option": "Timer-timing bit", "correct": false },
                { "option": "Timer-enable bit", "correct": true },
		                { "option": "Timer-done bit", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		                "correct": "<p><span>Right answer</span> Ans:Timer-enable bit</p>",
		                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Timer-enable bit</p>"  // no comma here

		},
		     	     { // Question 18
		     	         "q": "An on-delay timer is not retentive in nature. ",
		     	         "a": [
                { "option": "The above statement is false", "correct": false },
                { "option": "The above statement is true", "correct": true }

		     	         // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true</p>"  // no comma here
		     	     },
		{ // Question 19
		    "q": "In timer element, word zero is for _______ ",
		    "a": [
                { "option": "Preset value", "correct": true },
                { "option": "Accumulated value", "correct": false },
		        { "option": "Status bits", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		        "correct": "<p><span>Right answer</span> Ans:Preset value</p>",
		        "incorrect": "<p><span>wrong</span> It's wrong,Ans:Preset value</p>"  // no comma here

		},
	        { // Question 20
	            "q": "In a default timer file, timer 3’s done bit is addressed as ________ .",
            "a": [
           { "option": "T3:4.DN", "correct": false },
                { "option": "T3:4/DN", "correct": false },
                { "option": "T4:3.DN", "correct": false },
                { "option": "T4:3/DN", "correct": true }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:T4:3/DN</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:T4:3/DN</p>"  // no comma here
        } // no comma here
    ]
};
