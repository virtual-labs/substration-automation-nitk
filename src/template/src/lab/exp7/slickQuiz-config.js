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
            "q": "In a transformer, if N2 is number of secondary winding N1 is the number of primary winding then, if (N2/N1) ratio is greater than 1.It is called as ________",
            "a": [
                { "option": "Step down transformer", "correct": false },
            { "option": "Step up transformer", "correct": true },
            { "option": "Isolation transformer", "correct": false },
                { "option": "All ", "correct": false }
            ],
            "correct": "<p><span>Right answer</span> Ans:Step up transformer</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step up transformer</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a transformer, if N2 is number of secondary winding N1 is the number of primary winding then, if (N2/N1) ratio is lesser than 1.It is called as ________",
            "a": [
                 { "option": "Step down transformer", "correct": true },
            { "option": "Step up transformer", "correct": false },
            { "option": "Isolation transformer", "correct": false },
                { "option": "All", "correct": false }
            //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

            "correct": "<p><span>Right answer</span> Ans:Step down transformer</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,AnsStep down transformerp>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Oil transformer usually consist of, ",
            "a": [
                { "option": "A conservator tank, buchholz relay", "correct": false },
                { "option": "Breather of dehydrating type", "correct": false },
                { "option": "Winding temperature-indicator, oil temperature indicatore", "correct": false },
                { "option": "All", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 4
            "q": "The tap changing control equipment includes _______ ",
            "a": [
              { "option": "Control and paralleling equipment", "correct": false },
                { "option": "Line drop compensator equipment used along with the current transformer to provide voltage control at a point remote from the measuring point", "correct": false },
                { "option": "Automatic voltage regulating relay", "correct": false },
                { "option": "All", "correct": true }
            // {"option": "1291",   "correct": false} // no comma here        
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		{ // Question 5
		    "q": "32 step tap changes provide ________ voltage change in each step. ",
		    "a": [
                { "option": "5/4%", "correct": false },
                { "option": "4/5%", "correct": false },
                { "option": "5/8%", "correct": true },
                { "option": "8/5%", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:5/8%</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:5/8%</p>"  // no comma here
		},
		   { // Question 6
		       "q": "Conservator is an oil-expansion tank mounted _________ on the transformer.",
		       "a": [
      { "option": "Below the highest oil point", "correct": false },
                { "option": "Ground level", "correct": false },
                { "option": "Above the highest oil point", "correct": true },
				 { "option": "Any of the them", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:Above the highest oil point</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:Above the highest oil point</p>"  // no comma here
		   },
		   { // Question 7
		       "q": "To prevent the moisture from entering the conservator, a __________ is provided that will dry the air as the breather takes place.  ",
		       "a": [
           { "option": "Low quality icon core operating at very low flex density so that the magnetizing current may be large", "correct": false },
                { "option": "Magnesium dioxide breather", "correct": false },
                { "option": "Silica gel breather", "correct": true },
				 { "option": "Both Low quality icon core operating at very low flex density so that the magnetizing current may be large and Magnesium dioxide breather", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:Silica gel breather</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:Silica gel breather</p>"  // no comma here
		   },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Advantage of using instrument Transformer is _______ ",
             "a": [
                { "option": "Standard rated instruments may be used easily", "correct": false },
                { "option": "It provides safety for operating personal", "correct": false },
                { "option": "Standard rated instruments may be used easily and It provides safety for operating personal", "correct": true },
				{ "option": "None", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Standard rated instruments may be used easily and It provides safety for operating personal</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Standard rated instruments may be used easily and It provides safety for operating personal</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "Instrument transformers are classified as: ",
            "a": [
                { "option": "Potential transformer", "correct": false },
                { "option": "Current transformer", "correct": false },
                { "option": "Both Potential transformer and Current transformer", "correct": true },
                { "option": "None", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Potential transformer and Current transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Potential transformer and Current transformer</p>" // no comma here
        },
        { // Question 10
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
		{ // Question 11
		    "q": "High magnitude alternating current can be measured by a combination of _________ and _________. ",
		    "a": [
                { "option": "Potential transformer and a low range ammeter", "correct": false },
                { "option": "Current transformer and high range ammeter", "correct": false },
				{ "option": "Current transformer and low range ammeter", "correct": true },
                { "option": "None", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Current transformer and low range ammeter</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Current transformer and low range ammeter</p>"  // no comma here
		},
		   { // Question 12
		       "q": "A current transformer must never be operated on open circuit for",
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
		   { // Question 13
		       "q": "In a power transformer, stepping down from 33kV to 11kV on load tap changes is provided along with 16 steps with 1.25% voltage changes in each step and a constant secondary voltage of 11kV is required. If the primary voltage changes from 33kV to 32kV then  ",
		       "a": [
                { "option": "The taps should be lowered 1 times", "correct": false },
                { "option": "The taps should be lowered 3 time", "correct": true },
                { "option": "The taps should be lowered 5 times", "correct": false },
                { "option": "The taps should be raised 5 times", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The taps should be lowered 3 time</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The taps should be lowered 3 time</p>"  // no comma here
		   },

        { // Question 14
            "q": "In a power transformer, stepping down from 33kV to 11kV on load tap changes is provided along with 16 steps with 1.25% voltage changes in each step and a constant secondary voltage of 11kV is required. If the primary voltage changes from 33kV to 31kV then",
            "a": [
                { "option": "The taps should be lowered 2 times", "correct": false },
                { "option": "The taps should be lowered 3 times", "correct": false },
		 { "option": "The taps should be lowered 5 times", "correct": true },
                { "option": "The taps should be lowered 7 times", "correct": false }


            // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The taps should be lowered 5 times</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The taps should be lowered 5 times</p>"  // no comma here
} // no comma here
    ]
};
