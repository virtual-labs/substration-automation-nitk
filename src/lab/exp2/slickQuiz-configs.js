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
            "q": "Isolators are",
            "a": [
                { "option": "Manually operated", "correct": false },
                  { "option": "Motorized", "correct": false },
                    { "option": "Both Manually operated and Motorized", "correct": true },
                { "option": "None", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Manually operated and Motorized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Manually operated and Motorized</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Gas Insulated Switchgear (GIS) offers ",
            "a": [
                { "option": "High reliability, lower stability and maintenance free feature in much larger space compared with conventional switchgear", "correct": false },
                { "option": "High reliability, higher safety and maintenance free feature in much larger space compared with conventional switchgear", "correct": false },
                { "option": "High reliability, lower safety and maintenance free feature in much smaller space compared with conventional switchgear", "correct": false },
				{ "option": "High reliability, higher safety and maintenance free feature in much smaller space compared with conventional switchgear", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:High reliability, higher safety and maintenance free feature in much smaller space compared with conventional switchgear</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:High reliability, higher safety and maintenance free feature in much smaller space compared with conventional switchgear</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The space requirement of GIS can be less than ______ of the space taken up by an equivalent conventional installation.",
            "a": [
                { "option": "5%", "correct": false },
                { "option": "10%", "correct": true},
                { "option": "25%", "correct": false },
                { "option": "40%", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:10%</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:10%</p>" // no comma here
        },
               { // Question 4
                   "q": "Functions of switchgear are ",
            "a": [
           { "option": "To localize the effects of faults by operation of protective equipment and so automatically disconnect faulty point from the system", "correct": false },
                { "option": "To break efficiently the short circuits without giving rise to dangerous conditions", "correct": false },
                { "option": "To facilitate the redistribution of local, inspection and maintenance on the system", "correct": false },
                { "option": "All", "correct": true }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        } // no comma here
    ]
};
