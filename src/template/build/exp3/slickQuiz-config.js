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
            "q": "The maximum generated voltage in power generating stations in advanced countries is 33kV while that in India is _________",
            "a": [
                { "option": "6kV", "correct": false },
            { "option": "9kV", "correct": false },
            { "option": "11kV", "correct": true },
                { "option": "44kV", "correct": false }
            ],
            "correct": "<p><span>Right answer</span> Ans:11kV</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:11kV</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The transmission lines and feeders are _____________ .",
            "a": [
                { "option": "2-phase 2-wire circuit", "correct": false },
                { "option": "3-phase 3-wire circuit", "correct": true },
                { "option": "Both 2-phase 2-wire circuit and 3-phase 3-wire circuit", "correct": false },
				{ "option": "None", "correct": false }
            //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

            "correct": "<p><span>Right answer</span> Ans:3-phase 3-wire circuit</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 3-wire circuit</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The transmission lines are _____________",
            "a": [
                { "option": "3-phase 4-wire circuits", "correct": true },
                { "option": "2-phase 2-wire circuits", "correct": false },
                { "option": "3-phase 3-wire circuits", "correct": false },
                { "option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:3-phase 4-wire circuits</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 4-wire circuits</p>" // no comma here
        },
        { // Question 4
            "q": "________ are lines conductors which connect the distribution substations to the areas, to be fed by those distribution substations.",
            "a": [
                { "option": "Service mains", "correct": false },
                { "option": "Distributors", "correct": false },
                { "option": "Feeders", "correct": true },
                { "option": "None", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Feeders</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Feeders</p>"  // no comma here
        },
		{ // Question 5
		    "q": "________ are the terminals which connect the consumer’s terminals to the distributors",
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
		   { // Question 6
		       "q": "In AC-system , ",
		       "a": [
                { "option": "Electric power can be generated at high voltage", "correct": false },
                { "option": "Stepping-up and stepping down of an AC voltage can be done easily and efficiently with the help of transformers", "correct": false },
                { "option": "Transformer line construction is comparatively difficult and the amount of copper required is comparatively more", "correct": false },
				 { "option": "All", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:All</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
		   { // Question 7
		       "q": "In AC system, ",
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
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "<u>Statement 1</u>:- The best method is to use AC system for generation and distribution purpose and DC system for transmission purpose.<br><u>Statement 2</u>:- The best method is to use DC system for generation and distribution purpose and AC system for transmission purpose. ",
             "a": [
                { "option": "Statement 1 is true and Statement 2 is false", "correct": true },
                { "option": "Statement 1 is false and Statement 2 is false", "correct": false },
                { "option": "Statement 1 is false and Statement 2 is true", "correct": false },
				{ "option": "Statement 1 is false and Statement 2 is false", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

             "correct": "<p><span>Right answer</span> Ans:Statement 1 is true and Statement 2 is false</p>",
             "incorrect": "<p><span>wrong</span> It's wrong,Ans:Statement 1 is true and Statement 2 is false</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "Underground cables are rarely used for ",
            "a": [
                { "option": "Detection of fault is tough", "correct": false },
                { "option": "Installation costs are very high", "correct": false },
                { "option": "More suitable for short distance", "correct": false },
                { "option": "All", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 10
            "q": "Important component of overhead lines is ",
            "a": [
                { "option": "Conductors", "correct": false },
                { "option": "Supports and cross-arms", "correct": false },
                { "option": "Insulators", "correct": false },
                { "option": "All", "correct": true }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		{ // Question 11
		    "q": "The characteristics that conductors used for transmission and distribution should posses :",
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
		   { // Question 12
		       "q": "Hard drawing of copper __________ electrical conductivity by small amount but it ___________ the tensile strength considerably.",
		       "a": [
                { "option": "Increases, decreases", "correct": false },
                { "option": "Decreases, increases", "correct": true },
                { "option": "Both Increases, decreases and Decreases, increases in some cases", "correct": false },
				 { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:Decreases, increases</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:Decreases, increases</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "Copper conductor is ",
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
		   { // Question 14
		       "q": "Aluminium is ______________ in weight as compared to copper, but has _________ conductivity and tensile strength. ",
		       "a": [
                { "option": "Heavier, Smaller", "correct": false },
                { "option": "Heavier, Greater", "correct": false },
                { "option": "Lighter, Greater", "correct": false },
                { "option": "Lighter, Smaller", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:Lighter, Smaller</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:Lighter, Smaller</p>"  // no comma here
		   },
		   		   { // Question 15 - Multiple Choice, Multiple True Answers, Select Any
		   		       "q": "The sag in aluminium conductors is __________ the copper conductors.",
		   		       "a": [
                { "option": "Lesser than", "correct": false },
                { "option": "Equal to", "correct": false },
                { "option": "Greater than", "correct": true },
				{ "option": "2 times lesser than", "correct": false }
		   		       //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
				"correct": "<p><span>Right answer</span> Ans:Greater than</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Greater than</p>" // no comma here
		   		   },
        { // Question 16 - Multiple Choice, Multiple True Answers, Select All
            "q": "The advantages of using aluminium conductors steel reinforced  over aluminium conductor is ________",
            "a": [
                { "option": "Tensile strength is increased", "correct": true },
                { "option": "Skin effect is greatly increased", "correct": false },
                { "option": "Both Tensile strength is increased and Skin effect is greatly increased", "correct": false },
                { "option": "None of the above", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Tensile strength is increased</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Tensile strength is increased</p>" // no comma here
        },
        { // Question 17
            "q": "Choose the proper set of increases order of mechanical strength of the following line supports :",
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
		{ // Question 18
		    "q": "Characteristics of an insulator used in overhead lines are",
		    "a": [
                { "option": "It should have high electric strength", "correct": false },
                { "option": "High ratio of rapture strength to flash over voltage", "correct": false },
                { "option": "High mechanical strength", "correct": false },
                { "option": "All", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		},
		   { // Question 19
		       "q": "A good porcelain insulator has compressive strength of about _________ and dielectric strength of _________ of its thickness.",
		       "a": [
                { "option": "70 N/m<sup>2</sup> , 6kV/cm", "correct": false },
                { "option": "700 N/msup>2</sup>  , 6kV/cm", "correct": false },
                { "option": "7000 N/msup>2</sup>  , 6kV/cm", "correct": false },
				 { "option": "7000 N/msup>2</sup>  , 60kV/cm", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:7000 N/msup>2</sup>  , 60kV/cm</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:7000 N/msup>2</sup>  , 60kV/cm</p>"  // no comma here
		   },
		   { // Question 20
		       "q": "Glass insulators, can be used up to _________ under normal atmospheric conditions, and in dry atmosphere, it can be used up to __________.",
		       "a": [
                { "option": "2.5kV, 5kV", "correct": false },
                { "option": "2.5kV,250kV", "correct": false },
                 { "option": "25kV, 250kV", "correct": false },
                { "option": "25kV, 50kV", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:25kV, 50kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:25kV, 50kV</p>"  // no comma here
		   },
         { // Question 21 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Steatite is produced by mixing ___________ with small proton of ________ and ___________.",
             "a": [
                { "option": "Hydrated magnesium silicate,carbon,nitrogen", "correct": false },
                { "option": "Hydrated magnesium silicate,carbon,clay", "correct": false },
                { "option": "Hydrated magnesium silicate,nitrogen,clay", "correct": false },
				{ "option": "Hydrated magnesium silicate, clay, felspar", "correct": true }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Hydrated magnesium silicate, clay, felspar</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Hydrated magnesium silicate, clay, felspar</p>" // no comma here
         },
        { // Question 22 - Multiple Choice, Multiple True Answers, Select All
            "q": "In a pin type insulator,",
            "a": [
                { "option": "Insulators made of glass are generally used for low voltages", "correct": false },
                { "option": "Insulators made of poralain can be used up to a 90kv but are rarely used on lines above 60kV", "correct": false },
                { "option": "Both Insulators made of glass are generally used for low voltages and Insulators made of poralain can be used up to a 90kv but are rarely used on lines above 60kV", "correct": true },
                { "option": "None of the above", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Insulators made of glass are generally used for low voltages and Insulators made of poralain can be used up to a 90kv but are rarely used on lines above 60kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Insulators made of glass are generally used for low voltages and Insulators made of poralain can be used up to a 90kv but are rarely used on lines above 60kV</p>" // no comma here
        },
        { // Question 23
            "q": "The factor affecting the sag in overhead lines are",
            "a": [
                { "option": "Weight of the conductor", "correct": false },
                { "option": "Span length", "correct": false },
                { "option": "Temperature", "correct": false },
                { "option": "All", "correct": true }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		{ // Question 24
		    "q": "Due to skin effect, the total resistance of the conductor _________, as the frequency of the current ________ and also with the increases in the diameter of the conductor.",
		    "a": [
                { "option": "Increases ,Increases ,Increases", "correct": true},
                { "option": "Decreases ,Increases ,Decreases", "correct": false },
				{ "option": "Increases ,Decreases ,Increases", "correct": false },
                { "option": "None", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Increases ,Increases ,Increases</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Increases ,Increases ,Increases</p>"  // no comma here
		},
		   { // Question 25
		       "q": "The skin effect is negligible when the supply frequency is ________ and the conductor diameter is _________. ",
		       "a": [
                { "option": "High, Large", "correct": false },
                { "option": "High, Small", "correct": false },
                { "option": "Low ,Small", "correct": true },
                { "option": "Low ,Large", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Low ,Small</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Low ,Small</p>"  // no comma here
		   },
		   { // Question 26
		       "q": "The alternating magnetic flues in a conductor caused by the current flowing in a neighbouring conductor gives rise to circulating currents which cause an apparent increases in the resistance of the conductor. This phenomena is called ________ . ",
		       "a": [
                { "option": "Skin effect", "correct": false },
                { "option": "Corona effect", "correct": false },
                { "option": "Proximity effect", "correct": true },
                { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Proximity effect</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Proximity effect</p>"  // no comma here
		   },
		   	   { // Question 27
		   	       "q": "The factor which effect skin and proximity effects are ______________ ",
		   	       "a": [
                { "option": "Frequency of the current", "correct": false },
                { "option": "Permeability of the conductor material", "correct": false },
                { "option": "Size of the conductor and distance between the conductors", "correct": false },
                { "option": "All", "correct": true }
		   	       // {"option": "1291",   "correct": false} // no comma here
            ],
		   	       "correct": "<p><span>Right answer</span> Ans:All</p>",
		   	       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   	   },
		   { // Question 28
		       "q": "Usually in short transmission lines ___________",
		       "a": [
                { "option": "Length is less than 50km", "correct": false },
                { "option": "Operating voltage is less than 20kV", "correct": false },
                { "option": "Both Length is less than 50km and Operating voltage is less than 20kV", "correct": true },
                { "option": "None of the above", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Length is less than 50km and Operating voltage is less than 20kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Length is less than 50km and Operating voltage is less than 20kV</p>"  // no comma here
		   },
		   	   { // Question 29
		   	       "q": "In medium transmission lines ",
		   	       "a": [
                { "option": "Length is between 50 km and 160km", "correct": false },
                { "option": "Operating voltage is between 21kV and 100kV", "correct": false },
                { "option": "Both Length is between 50 km and 160km and Operating voltage is between 21kV and 100kV", "correct": true },
                { "option": "None", "correct": false }
		   	       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Length is between 50 km and 160km and Operating voltage is between 21kV and 100kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Length is between 50 km and 160km and Operating voltage is between 21kV and 100kV</p>"  // no comma here
		   	   },
        { // Question 30
            "q": "In long  transmission lines",
            "a": [
                { "option": "Length is more than 160km", "correct": false },
                { "option": "Operating voltage is above 100kV", "correct": false },
		 { "option": "Both Length is more than 160km and Operating voltage is above 100kV", "correct": true },
                { "option": "None", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Length is more than 160km and Operating voltage is above 100kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Length is more than 160km and Operating voltage is above 100kV</p>"  // no comma here
} // no comma here
    ]
};
