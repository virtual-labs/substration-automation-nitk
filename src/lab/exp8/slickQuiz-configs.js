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
            "q": "Substations generally have ",
            "a": [
                { "option": "Switching and protection equipment", "correct": false },
                { "option": "Transformers", "correct": false },
                { "option": "Control equipment", "correct": false },
				{ "option": "All", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
				"correct": "<p><span>Right answer</span> Ans:All</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A circuit breaker is an automatically operated electrical switch designed to protect an electrical circuit from damage caused by ________.",
            "a": [
                { "option": "Overhead", "correct": false },
                { "option": "Short circuit", "correct": false },
                { "option": "Both overhead and short circuit", "correct": true },
                { "option": "None", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both overhead and short circuit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both overhead and short circuit</p>" // no comma here
        },
        { // Question 4
            "q": "The important characteristics of the fluid used in Circuit Breaker are :-",
            "a": [
                { "option": "It should have good thermal and chemical stability", "correct": false },
                { "option": "It should have high dielectric strength and are extinguishing ability", "correct": false },
                  { "option": "Non- inflammability and high thermal conductivity", "correct": false },
                { "option": "All", "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		{ // Question 5
		    "q": "The advantage of using oil in Oil Circuit Breaker as an arc quenching medium is:  ",
            "a": [
                { "option": "It has high dielectric strength", "correct": false },
                { "option": "As a result of decomposition of oil, it has good cooling property", "correct": false },
				{ "option": "Both it has high dielectric strength and as a result of decomposition of oil, it has good cooling property", "correct": true },
                { "option": "Highly inflammable", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both it has high dielectric strength and as a result of decomposition of oil, it has good cooling property</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both it has high dielectric strength and as a result of decomposition of oil, it has good cooling property</p>"  // no comma here
        },
		   { // Question 6
		       "q": "SF6 circuit breaker is ________  ",
            "a": [
                { "option": "Expensive", "correct": false },
                { "option": "SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes", "correct": false },
                { "option": "Both expensive and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes", "correct": true },
				 { "option": "None", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both expensive and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both expensive and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes</p>"  // no comma here
        },
        	   { // Question 7
        	       "q": "Instrument Transformer are used because  ",
        	       "a": [
                { "option": "It is cheap", "correct": false },
                { "option": "It provides more safety", "correct": false },
                { "option": "It is not practicable to connect instruments and meters directly to the lines in high voltage circuits", "correct": false },
				 { "option": "Both It provides more safety and It is not practicable to connect instruments and meters directly to the lines in high voltage circuits", "correct": true }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both It provides more safety and It is not practicable to connect instruments and meters directly to the lines in high voltage circuits</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both It provides more safety and It is not practicable to connect instruments and meters directly to the lines in high voltage circuits</p>"  // no comma here
        	   },
        	     { // Question 8
        	         "q": "A potential transformer is a ",
        	         "a": [
                { "option": "Step up transformer", "correct": false },
                { "option": "Step down transformer", "correct": true },
                  { "option": "Both step up transformer and step down transformer", "correct": false },
                { "option": "None", "correct": false }
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step down transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step down transformer</p>"  // no comma here
        	     },
		{ // Question 9
		    "q": "A current transformer is a",
		    "a": [
               { "option": "Step up transformer", "correct": true },
                { "option": "Step down transformer", "correct": false },
                  { "option": "Both step up transformer and step down transformer", "correct": false },
                { "option": "None", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step up transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step up transformer</p>"  // no comma here

            },
        	   		{ // Question 10
        	   		    "q": "Big porcelain bushing, hollow insulators can be used up to _______ kV.",
        	   		    "a": [
               { "option": "200 kV", "correct": false},
                { "option": "400 kV", "correct": false },
                  { "option": "1000 kV", "correct": true },
                { "option": "3000 kV", "correct": false }
        	   		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:1000 kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:1000 kV</p>"  // no comma here

        	   		},
        	
        { // Question 11 - Multiple Choice, Multiple True Answers, Select All
            "q": "The use of ________ for high voltage applications is becoming more common.",
            "a": [
                { "option": "Oil", "correct": false },
                { "option": "Porcelain", "correct": false },
                { "option": "Polymer", "correct": true },
                { "option": "All", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Polymer</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Polymer</p>" // no comma here
        },
        { // Question 12
            "q": "The transformer works on principle of ___________",
            "a": [
                { "option": "Self-induction", "correct": false },
                { "option": "Mutual induction", "correct": true },
                  { "option": "Both self-induction and mutual induction", "correct": false }
              
            // {"option": "1291",   "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:Mutual induction</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:Mutual induction</p>"  // no comma here
        },
		{ // Question 13
		    "q": "DC supply __________ be used for the transformer.",
		    "a": [
                { "option": "Can", "correct": false },
                { "option": "Connect", "correct": true },
				{ "option": "Both Can and Connect", "correct": false }
          
		    // {"option": "1291",   "correct": false} // no comma here
            ],
				"correct": "<p><span>Right answer</span> Ans:Connect</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Connect</p>"  // no comma here
		},
		   { // Question 14
		       "q": "The ratio of secondary induced emf to primary induced emf is known as ___________",
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
        	   { // Question 15
        	       "q": "Current ratios are in _________ of the voltage ratio. ",
        	       "a": [
                { "option": "Direct ratio", "correct": false },
                { "option": "Inverse ratio", "correct": true },
      				 { "option": "Power ratio", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
      				 "correct": "<p><span>Right answer</span> Ans:Inverse ratio</p>",
      				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Inverse ratio</p>"  // no comma here
        	   },
        	     { // Question 16
        	         "q": "The transmission voltage in India are __________ . ",
        	         "a": [
                { "option": "400kV", "correct": false },
                { "option": "220kV", "correct": false },
                  { "option": "132kV", "correct": false },
                { "option": "All", "correct": true }
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        	     },
		{ // Question 17
		    "q": "Transmission network is commonly known as ____________",
		    "a": [
               { "option": "Pan", "correct": false },
                { "option": "Lock-head", "correct": false },
                  { "option": "Grid", "correct": true },
                { "option": "All", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Grid</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Grid</p>"  // no comma here

		},
        	   		{ // Question 18
        	   		    "q": "_________ is one of the best conductors due to its high electrical conductivity and high tensile strength for all type of transmission.",
        	   		    "a": [
               { "option": "Phosphor brown materials", "correct": false },
                { "option": "Galvanised iron", "correct": false },
                  { "option": "Aluminium", "correct": false },
                { "option": "Copper", "correct": true}
        	   		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Copper</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Copper</p>"  // no comma here

        	   		},
        	   		 { // Question 19
        	   		     "q": "Aluminium has _______ the resistivity of copper. ",
        	   		     "a": [
                { "option": "12 times", "correct": false },
                { "option": "24 times", "correct": false },
                { "option": "3 times", "correct": false},
				 { "option": "16 times", "correct": true }
        	   		     // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:16 times</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:16 times</p>"  // no comma here
        	   		 },
        	   { // Question 20
        	       "q": "When 1 or 2 percentage of cadmium is added to copper it __________ the tensile strength by ________ but ________ the conductivity by ________. ",
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
        	     { // Question 21
        	         "q": "The advantage of using suspension type insulators over pin-type insulators is _________",
        	         "a": [
                { "option": "Cheaper in cost for operating voltage above 50kV", "correct": false },
                { "option": "Flexibility is increased with suspension insulators", "correct": false },
                  { "option": "If line insulation needs to be increased, the additional insulators can be easily added to the string", "correct": false },
                { "option": "All", "correct": true }
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        	     },
		{ // Question 22
		    "q": "Reason for failure of insulator is",
		    "a": [
               { "option": "Mechanical stress", "correct": false },
                { "option": "Short circuits", "correct": false },
                  { "option": "Flash-over", "correct": false },
                { "option": "All", "correct": true}
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		},
    		{ // Question 23
    		    "q": "In double bus–bar  system ,there is a provision of a bus-bar coupling switch for transferring operation from one bus-bar to another _________",
    		    "a": [
               { "option": "True", "correct": true },
                { "option": "False", "correct": false }
    		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:True</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
    		},
	        { // Question 24
	            "q": "Lighting arrestor are installed in",
            "a": [
           { "option": "Power poles and towers", "correct": false },
                { "option": "Power transformer and circuit breakers", "correct": false },
                { "option": "Bus structures and steel superstructures in substation", "correct": false },
                { "option": "Any of the them", "correct": true}
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Any of them th</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Any of the them</p>"  // no comma here
        } // no comma here
    ]
};
