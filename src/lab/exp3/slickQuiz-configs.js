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
            "q": "The transmission voltage in India are _____________",
            "a": [
                { "option": "400kV", "correct": false },
                  { "option": "220kV", "correct": false },
                    { "option": "132kV", "correct": false },
                { "option": "All", "correct": true }
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Transmission network is commonly known as ____________ ",
            "a": [
                { "option": "Pan", "correct": false },
                { "option": "Lock-head", "correct": false },
                { "option": "Grid", "correct": true },
				{ "option": "All", "correct": false }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Grid</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Grid</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "_________ is one of the best conductors due to its high electrical conductivity and high tensile strength for all type of transmission.",
            "a": [
                { "option": "Phosphor brown materials", "correct": false },
                { "option": "Galvanised iron", "correct": false },
                { "option": "Aluminium", "correct": false },
                { "option": "Copper", "correct": true} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Copper</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Copper</p>" // no comma here
        },
        { // Question 4
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
		{ // Question 5
		    "q": "When 1 or 2 percentage of cadmium is added to copper it __________ the tensile strength by ________ but ________ the conductivity by ________.  ",
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
		   { // Question 6
		       "q": "The advantage of using suspension type insulators over pin-type insulators is _________  ",
            "a": [
                { "option": "Cheaper in cost for operating voltage above 50kV", "correct": false },
                { "option": "Flexibility is increased with suspension insulators", "correct": false },
                { "option": "If line insulation needs to be increased, the additional insulators can be easily added to the string", "correct": false },
				 {"option": "All",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
	        { // Question 7
	            "q": "Reason for failure of insulator is _________ ",
            "a": [
           { "option": "Mechanical stress", "correct": false },
                { "option": "Short circuits", "correct": false },
                { "option": "Flash-over", "correct": false },
                { "option": "All", "correct": true }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        } // no comma here
    ]
};
