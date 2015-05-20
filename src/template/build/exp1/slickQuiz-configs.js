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
            "q": "A circuit breaker is an automatically operated electrical switch designed to protect an electrical circuit from damage caused by ________  function of __________ is to isolate the part of the power system in case of abnormal conditions.",
            "a": [
                { "option": "Overhead", "correct": false },
                  { "option": "Short circuit", "correct": false },
                    { "option": "Both overhead and short circuit", "correct": true },
                { "option": "None", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:Both overhead and short circuit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both overhead and short circuit</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The important characteristics of the fluid used in CB are _______",
            "a": [
                { "option": "It should have good thermal and chemical stability", "correct": false },
                { "option": "It should have high dielectric strength and are extinguish ability", "correct": false },
                { "option": "Non- inflammability and high thermal conductivity", "correct": false },
				{ "option": "All", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:All</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The advantage of using oil in OCB as an arc quenching medium is:  ",
            "a": [
                { "option": "It has high dielectric strength", "correct": false },
                { "option": "As a result of decomposition of oil, it has good cooling property", "correct": false },
                { "option": "Both It has high dielectric strength and As a result of decomposition of oil, it has good cooling property", "correct": true },
                { "option": "Highly inflammable", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both It has high dielectric strength and As a result of decomposition of oil, it has good cooling property</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both It has high dielectric strength and As a result of decomposition of oil, it has good cooling property</p>" // no comma here
        },
               { // Question 4
                   "q": "SF6 circuit breaker is __________",
            "a": [
           { "option": "Expensive", "correct": false },
                { "option": "SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes", "correct": false },
                { "option": "Both Expensive and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes", "correct": true },
                { "option": "None", "correct": false }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Expensive and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Expensive and SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes</p>"  // no comma here
        } // no comma here
    ]
};
