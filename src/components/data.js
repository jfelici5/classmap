export const data = {
    "BA Black Studies": {
        "Main Categories": ["Introductory Course", "Five Divisional Courses", "Three Elective Courses", "One Advanced Seminar"],
        "Introductory Course": {
            "Subcategories": [],
            "Courses": [
                {
                    "code": "BLST 110", "title": "Introduction to Black Studies" 
                } 
            ]
        },
        "Five Divisional Courses": {
            "Subcategories": [],
            "Notes": "Students must choose five BLST courses from either the humanities or social sciences. These courses will determine which of the College’s divisional requirements the BLST major will satisfy. No more than two of these courses can be at the 100-level",
            "Courses": [

            ],
            "Satisfaction": 5
        },
        "Three Elective Courses": {
            "Subcategories": [],
            "Notes": "Students must choose three additional BLST courses as electives. No more than one course can be at the 100-level.",
            "Courses": [

            ],
            "Satisfaction": 3
        },
        "One Advanced Seminar": {
            "Subcategories": [],
            "Notes": "Students must choose three additional BLST courses as electives. No more than one course can be at the 100-level.",
            "Courses": [

            ],
            "Satisfaction": 3
        }
    },
    "BA American Sign Language": {
        "Main Categories": ["Core Courses", "Advanced Elective Courses"],
        "Core Courses": {
            "Subcategories": [],
            "Courses": [
                {
                    "code": "ASLA 105", "title": "Intermediate American Sign Language I"
                },
                {
                    "code": "ASLA 106", "title": "Intermediate American Sign Language II"
                },
                {
                    "code": "ASLA 203W", "title": "Advanced ASLA"
                },
                {
                    "code": "ASLA 200", "title": "Structure of Signed Languages"
                }
            
            ],
            "Satisfaction": 4
        },
        "Advanced Elective Courses": {
            "Courses": [],
            "Subcategories": ["ASLA Literature and Culture", "Cultures, Language, and History", "Other Advanced Electives"],
            "Notes": "Students are required to complete eight advanced elective courses with at least two courses in the categories of ASLA literature and culture and other advanced electives, and two-three courses in the cultures, language, and history category."
        },
        "ASLA Literature and Culture": {
            "Notes": "Select at least 2",
            "Courses": [
                {"code": "ASLA 201", "title": "Introduction to ASLA Literature"},
                {"code": "ASLA 202", "title": "History and Culture of the American Deaf Community"},
                {"code": "ASLA 205(W)", "title": "Art of Translation: ASLA and English"},
                {"code": "ASLA 250", "title": "Sociolinguistics of the American Deaf Community"}
            ],
            "Satisfaction": 2
        },
        "Cultures, Language, and History": {
            "Notes": "Select 2-3",
            "Courses": [
                {"code": "ANTH 101", "title": "Cultural Anthropology"},
                {"code": "ASLA 208", "title": "Language Development"},
                {"code": "ASLA 260", "title": "Language and Psycholinguistics"},
                {"code": "LING 110", "title": "Introduction to Linguistic Analysis"},
                {"code": "CLTR 200", "title": "Censorship/Topics In Critical Thinking"},
                {"code": "CLTR 389", "title": "Research Seminar"},
                {"code": "GSWS 105", "title": "Sex and Power"},
                {"code": "GSWS 200", "title": "History of feminism: Colloquium"},
                {"code": "GSWS 205", "title": "PHIL Foundation of Feminism"},
                {"code": "GSWS 296", "title": "International Human Rights"},
                {"code": "GSWS 218", "title": "Gender and Disability"},
                {"code": "HIST 259", "title": "History of Feminism: Colloquium"},
                {"code": "HIST 303W", "title": "International Human Rights"},
                {"code": "AAAS 207", "title": "Race, Ethnicity and American Politics"},
                {"code": "AAAS 183", "title": "Incarceration Nation"},
                {"code": "PSCI 267", "title": "Identity, Ethnicity, and Nationalism"},
                {"code": "PSCI 224", "title": "Incarceration Nation"},
                {"code": "PSCI 228", "title": "Race, Ethnicity and American Politics"},
                {"code": "RELC 183", "title": "Incarceration Nation"},
                {"code": "PHIL 171", "title": "Foundation of Feminism"},
                {"code": "PHIL 247", "title": "Philosophy of Language"},
                {"code": "PHIL 223", "title": "Social political philosophy"},
                {"code": "PHIL 226", "title": "Philosophy of Law"}
            ],
            "Satisfaction": 2
        },
        "Other Advanced Electives": {
            "Notes": "Select at least 2",
            "Courses": [
                {"code": "ASLA 110", "title": "Comparative Study of French Sign Language"},
                {"code": "ASLA 113", "title": "French Sign Language and Deaf Culture in France"},
                {"code": "ASLA 204", "title": "Theory and Practice of Sign Language Interpreting"},
                {"code": "ASLA 209", "title": "Teaching subjects through ASL"},
                {"code": "ASLA 222", "title": "ASLA Fine Art"},
                {"code": "ASLA 280", "title": "Deaf-Related Careers"},
                {"code": "BCSC 172", "title": "Development of Mind and Brain"}
            ],
            "Satisfaction": 2
        }

    },
    "BA American Studies": {
        "Main Categories": ["Introductory Courses", "American Studies Seminar", "Interactions of America", "Capstone Research",
                            "Writing Intensive Elective", "Specialization"],
        "Introductory Courses": {
            "Subcategories": ["Plus one of the following"],
            "Courses": [
                {"code": "ENGL 115", "title": "Introduction to American Literature"}
            ],
            "Satisfaction": 1
        },
        "Plus one of the following": {
            "Courses": 
                [
                    {"code": "HIST 260", "title": "American Thought I"},
                    {"code": "HIST 261", "title": "American Thought II"},
                    {"code": "HIST 262", "title": "American Culture to 1876"},
                    {"code": "HIST 263", "title": "American Culture since 1876"}
                ],
            "Satisfaction": 1
        },
        "American Studies Seminar": {
            "Subcategories": [],
            "Courses":[{"code": "AMST 200", "title": "The Idea of America"}],
            "Satisfaction": 1
        },
        "Interactions of America": {
            "Subcategories": [],
            "Notes": "At least one course that examines the interaction of America with other cultures. This requirement can be fulfilled using a capstone research, elective, or specialization course.",
            "Courses": [],
            "Satisfaction": 1
        },
        "Capstone Research": {
            "Subcategories": [],
            "Notes": "A capstone research experience consisting of one course that involves writing a major research paper, either within a departmental course or as an independent study project. This course satisfies one-half of the upper-level writing requirement. Any history course numbered 300–389 or a course in another department with a “W” designation can fulfill this requirement.",
            "Courses": [],
            "Satisfaction": 1
        },
        "Writing Intensive Elective": {
            "Subcategories": [],
            "Notes": "This elective fulfills one-half of the upper-level writing requirement. Students may choose any upper-level writing course on America, including taking an additional course in their specialization.",
            "Courses": [],
            "Satisfaction": 1
        },
        "Specialization": {
            "Subcategory Type": "choose",
            "Subcategories": ["The Arts in American Culture", "Identity and the American Nation", "American Thought and Institutions", 
            "Comparative Americas and Global Perspectives"],
            "Notes": "Students will choose five courses from one of the following specialized tracks",
            "Courses": []
        },
        "The Arts in American Culture": {
            "Courses": [
                {"code": "AAAS 229", "title": "Pause: The Politics of Race, Gender, and Sexuality in Hip Hop"},
                {"code": "AHST 103", "title": "Ways of Seeing: Art of the Americas"},
                {"code": "AHST 103", "title": "Ways of Seeing: Hollywood, Underground: American Cinema from 1968–1982"},
                {"code": "AHST 213", "title": "Race and Gender in Popular Film"},
                {"code": "AHST 214", "title": "Beyond the Boundaries: Folk, Outside, and the Visionary Arts"},
                {"code": "AHST 237", "title": "Modern Architecture and Frank Lloyd Wright"},
                {"code": "AHST 255", "title": "Arts in American Culture"},
                {"code": "AHST 256", "title": "Vernacular Architecture in the USA"},
                {"code": "AHST 259", "title": "Women, Cloth, and Culture"},
                {"code": "AHST 264", "title": "Films of the 1930s"},
                {"code": "AHST 266", "title": "African-American Visual Culture"},
                {"code": "AHST 274", "title": "Cultural History of American Architecture"},
                {"code": "AHST 276", "title": "Gender and Representation in Native American Art"},
                {"code": "AHST 280", "title": "Native American Art and Religion"},
                {"code": "AHST 281", "title": "Art and the City"},
                {"code": "AHST 284", "title": "Modern Architecture and Urbanism: LA Modern"},
                {"code": "AHST 368", "title": "Art of the Colonial Encounter"},
                {"code": "AHST 385", "title": "The Visual Culture of Heritage and Identity"},
                {"code": "ENGL 116", "title": "Intro to African-American Literature"},
                {"code": "ENGL 221", "title": "American Renaissance"},
                {"code": "ENGL 225", "title": "American Romantics"},
                {"code": "ENGL 226", "title": "American Realists"},
                {"code": "ENGL 227", "title": "American Moderns"},
                {"code": "ENGL 228", "title": "African-American Drama"},
                {"code": "ENGL 230", "title": "Studies in American Literature"},
                {"code": "ENGL 234", "title": "Modern Fiction"},
                {"code": "ENGL 243", "title": "Major Authors: Toni Morrison"},
                {"code": "ENGL 244", "title": "Contemporary American Memoir"},
                {"code": "ENGL 250", "title": "Race in American Fiction"},
                {"code": "ENGL 259", "title": "Popular Film Genres: The Gangster Film"},
                {"code": "ENGL 264", "title": "Studies in a Director: The Films of Alfred Hitchcock"},
                {"code": "ENGL 265", "title": "Issues in Film"},
                {"code": "ENGL 286", "title": "Presidential Rhetoric"},
                {"code": "ENGL 380", "title": "African-American Literature and the Archive"},
                {"code": "ENGL 380", "title": "American Detectives: Hammett, Chandler, Macdonald"},
                {"code": "FMST 213", "title": "Race and Gender in Popular Film"},
                {"code": "FMST 222", "title": "Art and the City: New York in the 1970s"},
                {"code": "HIST 262", "title": "American Culture to 1876"},
                {"code": "HIST 267", "title": "Music-Made America"},
                {"code": "HIST 302W", "title": "The Power of Print"},
                {"code": "HIST 363W", "title": "American Culture in the Great Depression and World War II"},
                {"code": "HIST 368W", "title": "American Culture at Mid-20th Century"},
                {"code": "HIST 371W", "title": "Topics in 20th-Century American Culture"},
                {"code": "HIST 372W", "title": "Topics in 20th-Century US History"},
                {"code": "MUSC 122", "title": "History of Jazz"},
                {"code": "MUSC 123", "title": "Music of Black Americans"},
                {"code": "MUSC 125", "title": "History of Rock"},
                {"code": "MUSC 127", "title": "The Blues"},
                {"code": "MUSC 132", "title": "Starmakers: Inside the Publicity Machine"},
                {"code": "MUSC 133", "title": "Musical Theater Workshop"},
                {"code": "MUSC 135", "title": "Sondheim and the Modern Musical Theater"},
                {"code": "MUSC 145", "title": "High Voltage: Heavy Metal Music and Its History"},
                {"code": "MUSC 203", "title": "Susan B. Anthony and Her World"},
                {"code": "MUSC 233", "title": "Advanced Musical Theater Workshop"},
                {"code": "RELC 151", "title": "The Blues"},
                {"code": "RELC 170", "title": "Religion and Hip Hop Culture"},
                {"code": "RELC 220", "title": "Jewish Women’s Writing"},
                {"code": "SPAN 262G", "title": "Colonial Latin American Literature"},
                {"code": "SPAN 287", "title": "Latin American Film"},
                {"code": "SPAN 287A", "title": "Mexican Film"}
            ],
            "Satisfaction": 5
        },
        "Identity and the American Nation": {
            "Courses": [
                {"code": "AAAS 229", "title": "Pause: The Politics of Race, Gender, and Sexuality in Hip Hop"},
                {"code": "AHST 214", "title": "Beyond the Boundaries: Folk, Outside, and Visionary Arts"},
                {"code": "AHST 246", "title": "Representing African-Americans in the African Imagination"},
                {"code": "AHST 259", "title": "Women, Cloth, and Culture"},
                {"code": "AHST 260", "title": "Cultural Tourism"},
                {"code": "AHST 276", "title": "Gender and Representation in Native American Art"},
                {"code": "ENGL 243", "title": "Major Authors: Toni Morrison"},
                {"code": "ENGL 244", "title": "Contemporary American Memoir"},
                {"code": "ENGL 250", "title": "Race in American Fiction"},
                {"code": "RELC 151", "title": "The Blues"},
                {"code": "RELC 153", "title": "Islam in America"},
                {"code": "RELC 155", "title": "Religion in America"},
                {"code": "RELC 157", "title": "African-American Religious History"},
                {"code": "RELC 159", "title": "Interfaith Engagement"},
                {"code": "RELC 161", "title": "New Religious Movements"},
                {"code": "RELC 167W", "title": "Speaking Stones"},
                {"code": "RELC 168", "title": "Material Life of Religion"},
                {"code": "RELC 170", "title": "Religion and Hip Hop Culture"},
                {"code": "RELC 178", "title": "Religion and American Foodways"},
                {"code": "RELC 214", "title": "Imagining the Jew"},
                {"code": "RELC 216", "title": "Jews and Multiculturalism in America"},
                {"code": "RELC 220", "title": "Jewish Women’s Writing"},
                {"code": "RELC 236", "title": "Catholicism in American Life"},
                {"code": "RELC 238", "title": "Native American Art and Religion"},
                {"code": "SPAN 206", "title": "Spanish American Cultures"},
                {"code": "SPAN 282", "title": "US Latinos/Latinas"},
                {"code": "SPAN 287", "title": "Latin American Film"},
                {"code": "SPAN 287A", "title": "Mexican Film"},
                {"code": "WMST 105", "title": "Sex and Power"},
                {"code": "ANTH 245", "title": "American Culture"},
                {"code": "ANTH 276", "title": "Gender and Representation"},
                {"code": "HIST 280/280W", "title": "Archaeology of Early America"},
                {"code": "HIST 305W", "title": "Maritime History of the Atlantic World"},
                {"code": "HIST 375W", "title": "When New York Was the Wild West"},
                {"code": "HIST 169", "title": "Introduction to African-American Studies"},
                {"code": "HIST 170", "title": "African-American History I"},
                {"code": "HIST 171", "title": "African-American History II"},
                {"code": "HIST 268", "title": "History of the American South"},
                {"code": "HIST 269", "title": "The Civil War"},
                {"code": "HIST 273", "title": "Lincoln, Douglass, and Black Freedom"},
                {"code": "HIST 274", "title": "History of Race in America"},
                {"code": "HIST 364", "title": "The Black Family in Slavery and Freedom"},
                {"code": "HIST 372W", "title": "Topics in 20th-Century US History"},
                {"code": "PSCI 121", "title": "Democracy in America"},
                {"code": "PSCI 209", "title": "Interest Groups in America"},
                {"code": "PSCI 224", "title": "African-American Politics"},
                {"code": "PSCI 225", "title": "Race and Political Representation"},
                {"code": "PSCI 226", "title": "Black Political Leadership"},
                {"code": "PSCI 228", "title": "Race and Ethnic Politics"},
                {"code": "PSCI 237", "title": "Domestic Social Policy"},
                {"code": "PSCI 241", "title": "Urban Change and City Politics"}
            ],
            "Satisfaction": 5
        },
        "American Thought and Institutions": {
            "Courses": [
                {"code": "ENGL 286", "title": "Presidential Rhetoric"},
                {"code": "PHIL 221", "title": "Philosophical Foundations of American Revolution"},
                {"code": "HIST 160", "title": "United States History to 1865"},
                {"code": "HIST 161", "title": "United States History since 1865"},
                {"code": "HIST 162", "title": "Early America, 1600–1800"},
                {"code": "HIST 164", "title": "Democratic America"},
                {"code": "HIST 165", "title": "Industrial America"},
                {"code": "HIST 166", "title": "Recent America"},
                {"code": "HIST 174", "title": "American Military History"},
                {"code": "HIST 244", "title": "China-US Relations"},
                {"code": "HIST 247", "title": "The Korean War"},
                {"code": "HIST 260", "title": "American Thought I"},
                {"code": "HIST 261", "title": "American Thought II"},
                {"code": "HIST 265", "title": "Women and Work in the Americas"},
                {"code": "HIST 269", "title": "The Civil War"},
                {"code": "HIST 270", "title": "Progressive America"},
                {"code": "HIST 271", "title": "America and the “Good War”"},
                {"code": "HIST 278", "title": "Seward Family’s Civil War"},
                {"code": "HIST 279", "title": "Seward Family in Peace and War"},
                {"code": "HIST 301W", "title": "Modernity and Modernism"},
                {"code": "HIST 362W", "title": "American Thought"},
                {"code": "HIST 365W", "title": "Topics in Early American History"},
                {"code": "HIST 367W", "title": "Topics in Revolutionary America"},
                {"code": "HIST 368W", "title": "American Culture at Mid-20th Century"},
                {"code": "HIST 372W", "title": "Topics in 20th-Century US History"},
                {"code": "HIST 373W", "title": "American Health Policy and Politics"},
                {"code": "HIST 374W", "title": "American Social Thought"},
                {"code": "HIST 375W", "title": "Benjamin Franklin’s America"},
                {"code": "NAVS 250", "title": "Sea Power and Maritime Affairs"},
                {"code": "PSCI 103", "title": "Great Debates in American Democracy"},
                {"code": "PSCI 105", "title": "Introduction to American Politics"},
                {"code": "PSCI 121", "title": "Democracy in America"},
                {"code": "PSCI 194", "title": "Rochester Politics and Places"},
                {"code": "PSCI 209", "title": "Interest Groups in America"},
                {"code": "PSCI 210", "title": "Development of the American Party System"},
                {"code": "PSCI 212", "title": "Supreme Court in US History"},
                {"code": "PSCI 213", "title": "The US Congress"},
                {"code": "PSCI 215", "title": "American Elections"},
                {"code": "PSCI 216", "title": "Legislative Politics"},
                {"code": "PSCI 218", "title": "Emergence of the Modern Congress"},
                {"code": "PSCI 222", "title": "The Presidency"},
                {"code": "PSCI 223", "title": "Constitutional Structure and Rights"},
                {"code": "PSCI 224", "title": "African-American Politics"},
                {"code": "PSCI 225", "title": "Race and Political Representation"},
                {"code": "PSCI 226", "title": "Black Political Leadership"},
                {"code": "PSCI 228", "title": "Race and Ethnic Politics"},
                {"code": "PSCI 234", "title": "Law and Politics in the US"},
                {"code": "PSCI 237", "title": "Domestic Social Policy"},
                {"code": "PSCI 240", "title": "Criminal Procedure and Constitutional Principles"},
                {"code": "PSCI 241", "title": "Urban Change and City Politics"},
                {"code": "PSCI 246", "title": "Environmental Law and Policy"},
                {"code": "PSCI 249", "title": "Sports and the American City"},
                {"code": "PSCI 275", "title": "American Foreign Policy"},
                {"code": "PSCI 291", "title": "First Amendment and Religion in America"},
                {"code": "RELC 155", "title": "Religion in America"},
                {"code": "RELC 161", "title": "New Religious Movements"}
            ],
            "Satisfaction": 5
        },
        "Comparative Americas and Global Perspectives": {
            "Courses": [
                {"code": "AHST 251", "title": "Prehistory of Ancient Peru: The Incas and Their Ancestors"},
                {"code": "AHST 246", "title": "Representing African-Americans in the African Imagination"},
                {"code": "AHST 260", "title": "Cultural Tourism"},
                {"code": "AHST 280", "title": "Native American Art and Religion"},
                {"code": "AHST 368", "title": "Art of the Colonial Encounter"},
                {"code": "AHST 385", "title": "The Visual Culture of Heritage and Identity"},
                {"code": "ANTH 264", "title": "Islam and Global Politics"},
                {"code": "ANTH 303", "title": "Advanced Topic Seminar: Migration"},
                {"code": "CLTR 250", "title": "Nabokov"},
                {"code": "ENGL 226", "title": "Black Intellectuals"},
                {"code": "ENGL 380", "title": "Literary Style"},
                {"code": "FREN 205", "title": "Francophone Cultures"},
                {"code": "FREN 239", "title": "Representing African-Americans in the African Imagination"},
                {"code": "FREN 243", "title": "Mutilated Bodies/Mutilated Discourse"},
                {"code": "FREN 247", "title": "Black Paris"},
                {"code": "FREN 271", "title": "Introduction to Francophone Literature"},
                {"code": "FREN 272", "title": "Madness and Post-Colonial Literature"},
                {"code": "FREN 273", "title": "The Francophone Novel"},
                {"code": "FREN 274", "title": "Caribbean Novel and Theory"},
                {"code": "FREN 288", "title": "French in Film: Africa, Caribbean, Quebec"},
                {"code": "HIST 154", "title": "History of Latin America through Soccer"},
                {"code": "HIST 156", "title": "Cuba from Columbus to the Present"},
                {"code": "HIST 200", "title": "Gateway to History: Pirates of the Caribbean"},
                {"code": "HIST 224", "title": "The South and the World"},
                {"code": "HIST 244", "title": "China-US Relations"},
                {"code": "HIST 255", "title": "1492 and Beyond: Identity, Culture, and Society in Colonial Latin America"},
                {"code": "HIST 305W", "title": "Maritime History of the Atlantic World"},
                {"code": "PHIL 221", "title": "Philosophical Backgrounds of the American Revolution"},
                {"code": "RELC 125", "title": "Religion, Race, Ethnicity in America"},
                {"code": "RELC 153", "title": "Islam in America"},
                {"code": "RELC 156", "title": "Religions of the African Diaspora"},
                {"code": "RELC 157", "title": "African-American Religious History"},
                {"code": "RELC 216", "title": "Jews and Multiculturalism in America"},
                {"code": "RELC 234", "title": "Cry Freedom"},
                {"code": "RELC 235", "title": "Religion and Society in Latin America"},
                {"code": "RELC 247", "title": "Islam and the Third World"},
                {"code": "SPAN 203", "title": "Origins and Empire: Reading the Early Hispanic World"},
                {"code": "SPAN 204", "title": "Coming to Terms: Spanish American Literature from Tradition to Innovation"},
                {"code": "SPAN 206", "title": "Spanish-American Cultures"},
                {"code": "SPAN 262", "title": "Topics in Spanish-American Literature"},
                {"code": "SPAN 262B", "title": "Cuba at a Crossroads"},
                {"code": "SPAN 262C", "title": "Disabling Discourse in Spanish-American Literature"},
                {"code": "SPAN 262D", "title": "Culture and Literature of the Caribbean"},
                {"code": "SPAN 262F", "title": "Spanish-American Coming-of-Ages Stories"},
                {"code": "SPAN 262G", "title": "Colonial Latin American Literature"},
                {"code": "SPAN 266", "title": "Brazilian Literature and Culture"},
                {"code": "SPAN 270", "title": "The Hispanic Short Story"},
                {"code": "SPAN 275", "title": "Marx and Freud in Latin America"},
                {"code": "SPAN 277", "title": "Mexico, DF: Global Metro"},
                {"code": "SPAN 280", "title": "The Transhispanic Supernatural"},
                {"code": "SPAN 282", "title": "US Latinos/Latinas"},
                {"code": "SPAN 287", "title": "Latin American Film"},
                {"code": "SPAN 287A", "title": "Mexican Film"},
                {"code": "SPAN 292", "title": "Politics, Portraits, Public Spaces: The Power of Photography in Spain and Spanish America"}
            ],
            "Satisfaction": 5
        }
    },
    "BA Anthropology": {
        "Main Categories": ["Required", "Theory Course", "Electives", "Senior Requirement"],
        "Required": {
            "Subcategories": [],
            "Notes": "",
            "Courses": [
                {"code": "ANTH 101", "title": "Being Human: Cultural Anthropology"},
                {"code": "ANTH 200", "title": "Anthropological Research and Methods"},
                {"code": "ANTH 204", "title": "Reading Ethnography"}
            ],
            "Satisfaction": 3
        },
        "Theory Course": {
            "Subcategories": [],
            "Notes": "",
            "Courses": [],
            "Satisfaction": 1
        },
        "Electives": {
            "Subcategories": [],
            "Courses": [],
            "Satisfaction": 5
        },
        "Senior Requirement Course": {
            "Subcategories": [],
            "Courses": [],
            "Satisfaction": 1
        }
    }


}