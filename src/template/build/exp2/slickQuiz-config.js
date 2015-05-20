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
            "q": "_______is used to make sure that an electrical circuit can be completely de-energized for service or maintenance",
            "a": [
                { "option": "Circuit Breaker", "correct": false },
                { "option": "Isolator", "correct": true },
                { "option": "Fuse", "correct": false },
                { "option": "None", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:Isolator</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Isolator</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The major difference between an isolator and a circuit breaker is that",
            "a": [
                { "option": "A CB is an off load device insulated to be opened only after current has been interrupted by some other after control device", "correct": false },
                { "option": "An isolator is an off load device intended to be opened only after current has been interrupted by some other control device", "correct": true },
                { "option": "Both A CB is an off load device insulated to be opened only after current has been interrupted by some other after control device and An isolator is an off load device intended to be opened only after current has been interrupted by some other control device", "correct": false },
				{ "option": "None", "correct": false }
            //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:An isolator is an off load device intended to be opened only after current has been interrupted by some other control device</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:An isolator is an off load device intended to be opened only after current has been interrupted by some other control device</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "<br><img src=\"../images/exp2/q2.jpg\"\height=200 width=200/>Consider the above diagram, GOS1, GOS2 represents isolators and CB1, CB2 represents circuit breakers. So when the transformer is required to take out for maintenance, what is the procedure: - ",
            "a": [
                { "option": "Circuit breaker is taken out first and isolators are taken out second", "correct": true },
                { "option": "Isolators are taken out first and circuit breaker is taken out second", "correct": false },
                { "option": "Both Circuit breaker is taken out first and isolators are taken out second and Isolators are taken out first and circuit breaker is taken out second are true", "correct": false },
                { "option": "None", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Circuit breaker is taken out first and isolators are taken out second</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Circuit breaker is taken out first and isolators are taken out second</p>" // no comma here
        },
        { // Question 4
            "q": "<u>Statement 1</u>: In GIS, All the live parts are fully enclosed in grounded metal enclosures. Thus, there is no danger of an electrical shock.<br><u>Statement 2</u>: In SF6-GIS, SF6 is an inert, non-flammable, non-toxic and odourless gas used as an insulation and arc-extinguishing medium. Therefore, it is safe for personal and therefore is no fire hazard.",
            "a": [
                { "option": "Statement1 is true and statement2 is false", "correct": false },
                { "option": "Statement1 is false and statement2 is true", "correct": false },
                { "option": "Statement1 and statement2 both are true", "correct": true },
                { "option": "Statement1 and statement2 both are false", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Statement1 and statement2 both are true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Statement1 and statement2 both are true</p>"  // no comma here
        },
		{ // Question 5
		    "q": "The apparatus used for switching, controlling and protecting the electrical circuit and equipment is known as",
		    "a": [
                { "option": "Control panels", "correct": false },
                { "option": "Metering panels", "correct": false },
				{ "option": "Circuit breakers", "correct": false },
                { "option": "Switchgear", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Switchgear</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Switchgear</p>"  // no comma here
		},
		   { // Question 6
		       "q": "Switchgear consist of: ",
		       "a": [
                { "option": "Switched, Fuses, CB, isolators", "correct": false },
                { "option": "Relay, control panels, metering panels", "correct": false },
                { "option": "Lightning arrestors, current transformers potential transformer etc", "correct": false },
				 { "option": "All", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:All</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
        { // Question 7
            "q": "Essential features of switchgear are",
            "a": [
                { "option": "The switchgear must be able to discriminate between faulty and healthy section", "correct": false },
                { "option": "The switchgear must be able to discriminate between faulty and healthy section", "correct": false },
		 { "option": "Provision for manual control and instruments", "correct": false },
                { "option": "All", "correct": true }


            // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
} // no comma here
    ]
};
