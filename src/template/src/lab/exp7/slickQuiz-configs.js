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
            "q": "The transformer works on principle of ___________ .",
            "a": [
                { "option": "Self-induction", "correct": false},
                  { "option": "Mutual induction", "correct": true },

                { "option": "Both Self-induction and Mutual induction", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:Mutual induction</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Mutual induction</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "DC supply __________ be used for the transformer. ",
            "a": [
                { "option": "Can", "correct": false },
                { "option": "Connect", "correct": true },
         				{ "option": "Both Can and Connect", "correct": false }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

         				"correct": "<p><span>Right answer</span> Ans:Connect</p>",
         				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Connect</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The ratio of secondary induced emf to primary induced emf is known as _________ .",
            "a": [
                { "option": "Voltage transform ratio", "correct": true },
                { "option": "Current ratio", "correct": false },
                { "option": "Power ratio", "correct": false },
                { "option": "All", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Voltage transform ratio</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Voltage transform ratio</p>" // no comma here
        },
        { // Question 4
            "q": "Current ratios are in _________ of the voltage ratio. ",
            "a": [
                { "option": "Direct ratio", "correct": false },
                    { "option": "Inverse ratio", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                    "correct": "<p><span>Right answer</span> Ans:Inverse ratio</p>",
                    "incorrect": "<p><span>wrong</span> It's wrong,Ans:Inverse ratio</p>"  // no comma here
        },
		{ // Question 5
		    "q": "Instrument Transformer are used because ",
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
		   { // Question 6
		       "q": "A potential transformer is a ___________  ",
            "a": [
                { "option": "Step up transformer", "correct": false },
                { "option": "Step down transformer", "correct": true },
                { "option": "Both Step up transformer and Step down transformer", "correct": false },
				 { "option": "None", "correct":false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Step down transformer</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step down transformer</p>"  // no comma here
        },
        	   { // Question 7
        	       "q": "A current transformer is a ________ ",
        	       "a": [
                 { "option": "Step up transformer", "correct": true },
                { "option": "Step down transformer", "correct": false },
                { "option": "Both Step up transformer and Step down transformer", "correct": false },
				 { "option": "None", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Step up transformer</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step up transformer</p>"  // no comma here
        	   },
        	     { // Question 8
        	         "q": "In a power transformer, stepping down from 33kV to 11kV on load tap changes is provided along with 16 steps with 1.25% voltage changes in each step and a constant secondary voltage of 11kV is required. If the primary voltage changes from 33kV to 29.5kV then ",
        	         "a": [
                { "option": "The taps should be lowered 5 times", "correct": false },
                { "option": "The taps should be lowered 6 times", "correct": false },
                  { "option": "The taps should be lowered 11 times", "correct": false },
                { "option": "The taps should be lowered 9 times", "correct": true}
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The taps should be lowered 9 times</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The taps should be lowered 9 times</p>"  // no comma here
        	     },
		{ // Question 9
		    "q": "In a power transformer, stepping down from 33kV to 11kV on load tap changes is provided along with 16 steps with 1.25% voltage changes in each step and a constant secondary voltage of 11kV is required. If the primary voltage changes from 33kV to 34kV then  ",
		    "a": [
                { "option": "The taps should be lowered 4 times", "correct": false },
                { "option": "The taps should be raised 4 times", "correct": false },
				{ "option": "The taps should be raised 2 times", "correct": true },
                { "option": "The taps should be raised 1 times", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The taps should be raised 2 times</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The taps should be raised 2 times</p>"  // no comma here
		},
		   { // Question 10
		       "q": "The current transformer ratio is not equal to the ratio of secondary to primary turns.  ",
		       "a": [
                { "option": "The above statement is false", "correct": false },
                { "option": "The above statement is false, because of the effect of magnetizing current", "correct": false },
                { "option": "The above statement is true, because of the effect of magnetizing current", "correct": true },
				 { "option": "None", "correct": false}
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:The above statement is true, because of the effect of magnetizing current</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true, because of the effect of magnetizing current</p>"  // no comma here
		   },
        	   { // Question 11
        	       "q": "Advantage of using instrument Transformer is  ",
        	       "a": [
                { "option": "Standard rated instruments may be used easily", "correct": false },
                { "option": "It provides safety for operating personal", "correct": false },
                { "option": "Both standard rated instruments may be used easily and it provides safety for operating personal", "correct": true },
				 { "option": "None", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both standard rated instruments may be used easily and it provides safety for operating personal</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both standard rated instruments may be used easily and it provides safety for operating personal</p>"  // no comma here
        	   },
	        { // Question 12
	            "q": "Potential transformers are carefully designed to ensure ",
            "a": [
           { "option": "Minimum variation of voltage ratio with load and minimum phase shift between input and output voltages", "correct": false },
                { "option": "Minimum variation of voltage ratio with load and maximum phase shift between input and output voltages", "correct": false },
                { "option": "Maximum variation of voltage ratio with load and maximum phase shift between input and output voltages", "correct": false },
                { "option": "Maximum variation of voltage ratio with load and minimum phase shift between input and output voltages", "correct": true }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Maximum variation of voltage ratio with load and minimum phase shift between input and output voltages</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Maximum variation of voltage ratio with load and minimum phase shift between input and output voltages</p>"  // no comma here
        } // no comma here
    ]
};
