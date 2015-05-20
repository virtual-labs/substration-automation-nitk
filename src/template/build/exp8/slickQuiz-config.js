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
                { "option": "Both (a) and (b)", "correct": false },
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
				 {"option": "All",      "correct": true}
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
                {"option": "All",      "correct": true}
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
                { "option": "Both increases, decreases and Decreases, increases in some cases", "correct": false },
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
                { "option": "Both tensile strength is increased and skin effect is greatly increased", "correct": false },
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
                { "option": "70 N/m2 , 6kV/cm", "correct": false },
                { "option": "700 N/m2 , 6kV/cm", "correct": false },
                { "option": "7000 N/m2 , 6kV/cm", "correct": false },
				 { "option": "7000 N/m2 , 60kV/cm", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:7000 N/m2 , 60kV/cm</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:7000 N/m2 , 60kV/cm</p>"  // no comma here
		   },
		   { // Question 20
		       "q": "Glass insulators, can be used up to _________ under normal atmospheric conditions, and in dry atmosphere, it can be used up to __________ .",
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
                { "option": "Both insulators made of glass are generally used for low voltages and insulators made of poralain can be used up to a 90kv but are rarely used on lines above 60kV", "correct": true },
                { "option": "None of the above", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both insulators made of glass are generally used for low voltages and insulators made of poralain can be used up to a 90kv but are rarely used on lines above 60kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both insulators made of glass are generally used for low voltages and insulators made of poralain can be used up to a 90kv but are rarely used on lines above 60kV</p>" // no comma here
        },
        { // Question 23
            "q": "The factor affecting the sag in overhead lines are ",
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
                { "option": "Increases ,Increases ,Increases", "correct": true },
                { "option": "Decreases ,Increases ,Decreases", "correct": false },
				{ "option": "Increases ,Decreases ,Increases", "correct": false },
                { "option": "None", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Increases ,Increases ,Increases</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Increases ,Increases ,Increases</p>"  // no comma here
		},
		   { // Question 25
		       "q": "25)	The skin effect is negligible when the supply frequency is ________ and the conductor diameter is _________.",
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
		   		   { // Question 28 - Multiple Choice, Multiple True Answers, Select Any
		   		       "q": "Usually in short transmission lines ___________",
		   		       "a": [
                { "option": "Length is less than 50km", "correct": false },
                { "option": "Operating voltage is less than 20kV", "correct": false },
                { "option": "Both length is less than 50km and operating voltage is less than 20kV", "correct": true },
				{ "option": "None", "correct": false }
		   		       //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
				"correct": "<p><span>Right answer</span> Ans:Both length is less than 50km and operating voltage is less than 20kV</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Both length is less than 50km and operating voltage is less than 20kV</p>" // no comma here
		   		   },
        { // Question 29 - Multiple Choice, Multiple True Answers, Select All
            "q": "In medium transmission lines",
            "a": [
                { "option": "Length is between 50 km and 160km", "correct": false },
                { "option": "Operating voltage is between 21kV and 100kV", "correct": false },
                { "option": "Both length is between 50 km and 160km and operating voltage is between 21kV and 100kV", "correct": true },
                { "option": "None", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both length is between 50 km and 160km and operating voltage is between 21kV and 100kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both length is between 50 km and 160km and operating voltage is between 21kV and 100kV</p>" // no comma here
        },
        { // Question 30
            "q": "In long  transmission lines",
            "a": [
                { "option": "Length is more than 160km", "correct": false },
                { "option": "Operating voltage is above 100kV", "correct": false },
                { "option": "Both length is more than 160km and operating voltage is above 100kV ", "correct": true },
                { "option": "None of the above", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both length is more than 160km and operating voltage is above 100kV </p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both length is more than 160km and operating voltage is above 100kV </p>"  // no comma here
        },
		{ // Question 31
		    "q": "In oil circuit breaker (O.C.B) the range exists between",
		    "a": [
                { "option": "75MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
                { "option": "7.5MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
                { "option": "250MVA at 2.5 kV and 5000MVA at 250kV", "correct": false },
                { "option": "25MVA at 2.5 kV and 5000MVA at 250kV", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>"  // no comma here
		},
		   { // Question 32
		       "q": "Advantages of using Air blast Circuit breakers :",
		       "a": [
                { "option": "Current chapping", "correct": false },
                { "option": "Sensitivity to restricting voltage", "correct": false },
                { "option": "Short arc duration", "correct": true },
				 { "option": "All", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:All</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
		   { // Question 33
		       "q": "In SF6 Circuit breaker",
		       "a": [
                { "option": "No risk of fire", "correct": false },
                { "option": "No reduction of dielectric strength", "correct": false },
                 { "option": "Current chopping tendency is minimized", "correct": false },
                { "option": "All", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
         { // Question 34 - Multiple Choice, Multiple True Answers, Select Any
             "q": "The voltage across the contacts during the arcing period is known as _______",
             "a": [
                { "option": "Recovery voltage", "correct": false },
                { "option": "Restriking voltage", "correct": false },
                { "option": "Arc voltage", "correct": true },
				{ "option": "All", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Arc voltage</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Arc voltage</p>" // no comma here
         },
        { // Question 35 - Multiple Choice, Multiple True Answers, Select All
            "q": "The transient voltage appearing across the contacts during arc period is called ________",
            "a": [
      { "option": "Recovery voltage", "correct": false },
                { "option": "Restriking voltage", "correct": true },
                { "option": "Arc voltage", "correct": false },
				{ "option": "All", "correct": false }
            ],
				"correct": "<p><span>Right answer</span> Ans:Restriking voltage</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Restriking voltage</p>" // no comma here
        },
        { // Question 36
            "q": "When low inductive current is interrupted by a Circuit breaker and the arc generating force of the Circuit breaker and is more than necessary to interrupt a low magnitude of current, the current will be interrupted before its natural zero instant. It is termed as",
            "a": [
                { "option": "Restriking", "correct": false },
                { "option": "Recovery instant", "correct": false },
                { "option": "Current chopping", "correct": true },
                { "option": "Arcing voltage", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Current chopping</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Current chopping</p>"  // no comma here
        },
		{ // Question 37
		    "q": "_______ is the r.m.s value of current which the Circuit breaker is capable of carrying continuously at its rated frequency under specified conditions.",
		    "a": [
                { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
				{ "option": "Short-time capacity", "correct": false },
                { "option": "None", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:None</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:None</p>"  // no comma here
		},
		   { // Question 38
		       "q": "The peak value of current (including the DC component) during first cycle of current wave after the closure of Circuit breaker is known as __________.",
		       "a": [
        { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": true },
				{ "option": "Short-time capacity", "correct": false },
                { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Making capacity</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Making capacity</p>"  // no comma here
		   },
		   { // Question 39
		       "q": "__________ is the current (r.m.s value) that a Circuit breaker is capable of breaking under specified conditions and given recovery voltage. ",
		       "a": [
     { "option": "Breaking capacity", "correct": true },
                { "option": "Making capacity", "correct": false },
				{ "option": "Short-time capacity", "correct": false },
                { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Breaking capacity</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Breaking capacity</p>"  // no comma here
		   },
		   	   { // Question 40
		   	       "q": "__________ of a Circuit breaker depends upon its ability to withstand the temperature rise and the electromagnetic force effects. ",
		   	       "a": [
                { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
				{ "option": "Short-time capacity", "correct": true },
                { "option": "None", "correct": false }
		   	       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Short-time capacity</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Short-time capacity</p>"  // no comma here
		   	   },
		   { // Question 41
		       "q": "Advantage of using instrument Transformer is",
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
		   	   { // Question 42
		   	       "q": "Instrument transformers are classified as: ",
		   	       "a": [
                { "option": "Potential transformer", "correct": false },
                { "option": "Current transformer", "correct": false },
                { "option": "Both potential transformer and current transformer", "correct": true },
                { "option": "None", "correct": false }
		   	       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both potential transformer and current transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both potential transformer and current transformer</p>"  // no comma here
		   	   },
		   	    { // Question 43 - Multiple Choice, Multiple True Answers, Select Any
		   	        "q": "Potential transformers are made with",
		   	        "a": [
                { "option": "Low quality icon core operating at very low flex density so that the magnetizing current may be large", "correct": false },
                { "option": "High quality icon core operating at very high flex density so that the magnetizing current may be large", "correct": false },
               { "option": "High quality icon core operating at very high flex density so that the magnetizing current may be very small", "correct": false },
				{ "option": "High quality icon core operating at very low flex density so that the magnetizing current may be very small", "correct": true }
		   	        //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:High quality icon core operating at very low flex density so that the magnetizing current may be very small</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:High quality icon core operating at very low flex density so that the magnetizing current may be very small</p>" // no comma here
		   	    },
        { // Question 44 - Multiple Choice, Multiple True Answers, Select All
            "q": "Potential transformers are carefully designed to ensure",
            "a": [
                { "option": "Minimum variation of voltage ratio with load and minimum phase shift between input and output voltages", "correct": true },
                { "option": "Minimum variation of voltage ratio with load and maximum phase shift between input and output voltages", "correct": false },
                { "option": "Maximum variation of voltage ratio with load and maximum phase shift between input and output voltages", "correct": false },
                { "option": "Maximum variation of voltage ratio with load and minimum phase shift between input and output voltages", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Minimum variation of voltage ratio with load and minimum phase shift between input and output voltages</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Minimum variation of voltage ratio with load and minimum phase shift between input and output voltages</p>" // no comma here
        },
        { // Question 45
            "q": "A high magnitude alternating current can be measured by a combination of _________ and_________.",
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
		{ // Question 46
		    "q": "The current transformer ratio is not equal to the ratio of secondary to primary turns.",
		    "a": [
                { "option": "The above statement is false", "correct": false },
                { "option": "The above statement is false, because of the effect of magnetizing current", "correct": false },
                { "option": "The above statement is true, because of the effect of magnetizing current", "correct": true },
                { "option": "None", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true, because of the effect of magnetizing current</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true, because of the effect of magnetizing current</p>"  // no comma here
		},
		   { // Question 47
		       "q": "_________is used to make sure that an electrical circuit can be completely de-energized for service or maintenance.",
		       "a": [
                { "option": "Circuit breaker", "correct": false },
                { "option": "Isolator", "correct": true },
                { "option": "Fuse", "correct": false },
				 { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Isolator</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Isolator</p>"  // no comma here
		   },
		   { // Question 48
		       "q": "The major difference between an isolates and a circuit broken is that",
		       "a": [
                { "option": "A Circuit Breaker is an off load device insulated to be opened only after current has been interrupted by some other after control device", "correct": false },
                { "option": "An isolator is an off load device intended to be opened only after current has been interrupted by some other control device", "correct": true },
                 { "option": "Both A Circuit Breaker is an off load device insulated to be opened only after current has been interrupted by some other after control device and An isolator is an off load device intended to be opened only after current has been interrupted by some other control device", "correct": false },
                { "option": "None", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:An isolator is an off load device intended to be opened only after current has been interrupted by some other control device</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:An isolator is an off load device intended to be opened only after current has been interrupted by some other control device</p>"  // no comma here
		   },
         { // Question 49 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Gas Insulated Switchgear (GIS) offers ",
             "a": [
                { "option": "High reliability, lower stability and maintenance free feature in much larger space compared with conventional switchgear.", "correct": false },
                { "option": "High reliability, higher safety and maintenance free feature in much larger space compared with conventional switchgear.", "correct": false },
                { "option": "High reliability, lower safety and maintenance free feature in much smaller space compared with conventional switchgear.", "correct": false },
				{ "option": "High reliability, higher safety and maintenance free feature in much smaller space compared with conventional switchgear.", "correct": true }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:High reliability, higher safety and maintenance free feature in much smaller space compared with conventional switchgear</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:High reliability, higher safety and maintenance free feature in much smaller space compared with conventional switchgear</p>" // no comma here
         },
        { // Question 50 - Multiple Choice, Multiple True Answers, Select All
            "q": "The space requirement of Gas Insulated Switchgear (GIS) can be less than ______ of the space taken up by an equivalent conventional installation.",
            "a": [
                { "option": "5%", "correct": false },
                { "option": "10%", "correct": true },
                { "option": "25%", "correct": false },
                { "option": "40%", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:10%</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:10%</p>" // no comma here
        },
        { // Question 51
            "q": "A ______ is a substation which does not contain transformers and operates only at a single voltage level.",
            "a": [
                { "option": "Transmission substation", "correct": false },
                { "option": "Switching substation", "correct": true },
                { "option": "Distribution substation", "correct": false },
                { "option": "All", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Switching substation</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Switching substation</p>"  // no comma here
        },
		   { // Question 52
		       "q": "The apparatus used for switching, controlling and protecting the electrical circuit and equipment is known as ",
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
		   { // Question 53
		       "q": "Switchgear consist of:",
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
		   { // Question 54
		       "q": "Functions of switchgear are",
		       "a": [
                { "option": "To localize the effects of faults by operation of protective equipment and so automatically disconnect faulty point from the system", "correct": false },
                { "option": "To break efficiently the short circuits without giving rise to dangerous conditions", "correct": false },
                { "option": "To facilitate the redistribution of local, inspection and maintenance on the system", "correct": false },
                { "option": "All", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
		   },
		   		   { // Question 55 - Multiple Choice, Multiple True Answers, Select Any
		   		       "q": "Essential features of switchgear are",
		   		       "a": [
                { "option": "The switchgear must be able to discriminate between faulty and healthy section", "correct": false },
                { "option": "Quick operation and complete reliability", "correct": false },
                { "option": "Provision for manual control and instruments", "correct": false },
				{ "option": "All", "correct": true }
		   		       //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
				"correct": "<p><span>Right answer</span> Ans:All</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
		   		   },
        { // Question 56 - Multiple Choice, Multiple True Answers, Select All
            "q": "__________ is a hollow insulating lines through which a conductor may pass .",
            "a": [
                { "option": "Circuit breaker", "correct": false },
                { "option": "Isolator", "correct": false },
                { "option": "Bushing", "correct": true },
                { "option": "Feeder", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Bushing</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Bushing</p>" // no comma here
        },
        { // Question 57
            "q": "Small porcelain bushing can be used up to _________",
            "a": [
                { "option": "12 kV", "correct": false },
                { "option": "24 kV", "correct": false },
                { "option": "36 kV", "correct": true },
                { "option": "98 kV", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:36 kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:36 kV</p>"  // no comma here
        },
		{ // Question 58
		    "q": "The inside of the bushing may contain __________ and the bushing is often filled with ________ to provide additional insulation.",
		    "a": [
                { "option": "Copper, mercury", "correct": false },
                { "option": "Copper ,paper", "correct": false },
                { "option": "Paper insulation, oil", "correct": true },
                { "option": "All", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Paper insulation, oil</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Paper insulation, oil</p>"  // no comma here
		},
		   { // Question 59
		       "q": "Bus bar can be arranged in ____________",
		       "a": [
                { "option": "Single bus-bar system", "correct": false },
                { "option": "Double bus-bar system with sectionalisation", "correct": false },
             	 { "option": "Both single bus-bar system and double bus-bar system with sectionalisation", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
             	 "correct": "<p><span>Right answer</span> Ans:Both single bus-bar system and double bus-bar system with sectionalisation</p>",
             	 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both single bus-bar system and double bus-bar system with sectionalisation</p>"  // no comma here
		   },
		   { // Question 60
		       "q": "The major advantage of single bus-bar system is that fault on one part of the bus–bar or system does not completely shut down the whole station.",
		       "a": [
                { "option": "False", "correct": false },
                { "option": "True", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:True</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
		   },
         { // Question 61 - Multiple Choice, Multiple True Answers, Select Any
             "q": "_________ is a device which is used to switch from one bus to the other without any interruption in power supply and without creating hazardous arcs.",
             "a": [
                { "option": "Isolator", "correct": false },
                { "option": "Circuit breaker", "correct": false },
                { "option": "Bus coupler", "correct": true },
				{ "option": "Any of the them", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Bus coupler</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Bus coupler</p>" // no comma here
         },
               { // Question 62
                   "q": "Lighting arrestor are also called as __________",
            "a": [
                { "option": "Capacitive detector ", "correct": false },
                { "option": "Charge inhibitor", "correct": false },
		 { "option": "Surge arrestor", "correct": true },
                { "option": "All", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Surge arrestor</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Surge arrestor</p>"  // no comma here
        } // no comma here
    ]
};
