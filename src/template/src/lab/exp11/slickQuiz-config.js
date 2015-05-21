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
            "q": "Autoreclosers are more attractive than relays in distribution feeder protection as ",
            "a": [
                { "option": "It has inbuilt breaker", "correct": false },
            { "option": "It has more number of shot capability", "correct": false },
            { "option": "Both it has inbuilt breaker and it has more number of shot capability", "correct": true },
                { "option": "None of the above", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:Both it has inbuilt breaker and it has more number of shot capability</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both it has inbuilt breaker and it has more number of shot capability</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
              "q": "From below figure, the speed ratio of 20K and 20T fuses are respectively<br><img src=\"../images/recquiz/1.jpg\"\height=300 width=400/>",
            "a": [
                { "option": "7.55 and 14.56", "correct": false },
                { "option": "14.56 and 7.55", "correct": true },
                { "option": "13.59 and 7.12", "correct": false },
                { "option": "7.12 and 13.59", "correct": false} // no comma here
            ],

                "correct": "<p><span>Right answer</span> Ans:14.56 and 7.55</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:14.56 and 7.55</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Time interval between the autorecloser trip and the consecutive reclosing attempt is termed as ",
            "a": [
                { "option": "Reclosing time", "correct": true },
                { "option": "Lockout time", "correct": false },
                { "option": "Total operating time", "correct": false },
                { "option": "All", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Reclosing time</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Reclosing time</p>" // no comma here
        },
        { // Question 4
            "q": "Sectionalisers should have breakers (or relays with breakers) or reclosers working as a backup device. True or False? ",
            "a": [
                { "option": "True", "correct": true },
                { "option": "False", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:True</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
        },
		{ // Question 5
		    "q": "Zone of operation of the fuse is limited by ",
            "a": [
                { "option": "Minimum melting time", "correct": false },
                { "option": "Maximum clearing time", "correct": false },
                { "option": "Both minimum melting time and maximum clearing time", "correct": true },
                { "option": "None", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both minimum melting time and maximum clearing time</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both minimum melting time and maximum clearing time</p>"  // no comma here
        },
		   { // Question 6
		       "q": "Consider 5P20 class CT ratio: 1000/1, Normal rated current of 900 A. Consider a overloading of 10 % while calculating plug setting of the relay. Let the initial set TMS be 0.15. Relay settings has ranges for PSM of 50% to 200% in steps of 25% and TMS setting range of 0.1 to 1.1 in step of 0.05. The operating time for a three phase fault of 10 kA is less for  ",
            "a": [
                { "option": "IEC Normal inverse", "correct": false },
                { "option": "IEC Extreme inverse", "correct": true },
                { "option": "IEC Very inverse", "correct": false },
				 {"option": "Same in all the cases",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:IEC Extreme inverse</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:IEC Extreme inverse</p>"  // no comma here
        },
		{ // Question 7
		       "q": "Consider 5P20 class CT ratio:1000/1, Normal rated current of 900 A. Consider a overloading of 10 % while calculating plug setting of the relay with IEC EI curve. Relay settings has ranges for PSM of 50% to 200% in steps of 25% and TMS setting range of 0.1 to 1.1 in step of 0.05. For a 10 kA three phase fault, operating time is 0.242 s. TMS setting of the relay is ",
            "a": [
                { "option": "0.2", "correct": false },
                { "option": "0.25", "correct": false },
                 { "option": "0.3", "correct": true },
                {"option": "0.35",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:0.3</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:0.3</p>"  // no comma here
        },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Consider that the sectionaliser S2 is absent in the Figure 1 of demonstration/procedure. The probable count setting of the sectionaliser S3 would be <br><img src=\"../images/recquiz/2.jpg\"\height=275 width=400/> ",
             "a": [
                { "option": "1", "correct": false },
                { "option": "2", "correct": true },
                { "option": "3", "correct": false },
				{ "option": "4", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

             "correct": "<p><span>Right answer</span> Ans:2</p>",
             "incorrect": "<p><span>wrong</span> It's wrong,Ans:2</p>" // no comma here
         },
       
        { // Question 9
            "q": "After the recloser is completely locked out the sectionaliser to which first closing command is given as per the network configuration of Figure 1 is<br><img src=\"../images/recquiz/2.jpg\"\height=275 width=400/>  ",
            "a": [
                { "option": "S1", "correct": false },
                { "option": "S2", "correct": false },
                { "option": "S3", "correct": true },
				{ "option": "S4", "correct": false }


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:S3</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:S3</p>"  // no comma here
        } // no comma here
    ]
};
