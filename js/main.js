var zodiacSigns = [
{
	name: "aquarius",
	dates: "January 20 - February 18",
	traits: "Strengths: Progressive, original, independent, humanitarian Weaknesses: Runs from emotional expression, temperamental, uncompromising, aloof Aquarius likes: Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener Aquarius dislikes: Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them",
	path: "http://www.astrology-zodiac-signs.com/images/aquarius.jpg"
},
{
	name: "pisces",
	dates: "February 19 - March 20",
	traits: "Strengths: Compassionate, artistic, intuitive, gentle, wise, musical Weaknesses: Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr Pisces likes: Being alone, sleeping, music, romance, visual media, swimming, spiritual themes Pisces dislikes: Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind",
	path: "http://www.astrology-zodiac-signs.com/images/pisces.jpg"
},
{
	name: "aries",
	dates: "March 21 - April 19",
	traits:"Strengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate Weaknesses: Impatient, moody, short-tempered, impulsive, aggressive Aries likes: Comfortable clothes, taking on leadership roles, physical challenges, individual sports Aries dislikes: Inactivity, delays, work that does not use one's talents",
	path: "http://www.astrology-zodiac-signs.com/images/aries.jpg"
},
{
	name: "taurus",
	dates: "April 20 - May 20",
	traits:"Strengths: Reliable, patient, practical, devoted, responsible, stable Weaknesses: Stubborn, possessive, uncompromising Taurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands Taurus dislikes: Sudden changes, complications, insecurity of any kind, synthetic fabrics",
	path: "http://www.astrology-zodiac-signs.com/images/taurus.jpg"
},
{
	name: "gemini",
	dates: "May 21 - June 20", 
	traits: "Strengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas Weaknesses: Nervous, inconsistent, indecisive Gemini likes: Music, books, magazines, chats with nearly anyone, short trips around the town Gemini dislikes: Being alone, being confined, repetition and routine",
	path: "http://www.astrology-zodiac-signs.com/images/gemini.jpg"
},
{
	name: "cancer",
	dates: "June 21 - July 22",
	traits: "Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive Weaknesses: Moody, pessimistic, suspicious, manipulative, insecure Cancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends Cancer dislikes: Strangers, any criticism of Mom, revealing of personal life",
	path: "http://www.astrology-zodiac-signs.com/images/cancer.jpg"
},
{
	name: "leo",
	dates: "July 23- August 22",
	traits: "Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous Weaknesses: Arrogant, stubborn, self-centered, lazy, inflexible Leo likes: Theater, taking holidays, being admired, expensive things, bright colors, fun with friends Leo dislikes: Being ignored, facing difficult reality, not being treated like a king or queen",
	path: "http://www.astrology-zodiac-signs.com/images/leo.jpg"
},
{
	name: "virgo",
	dates: "August 23 - September 22",
	traits: "Strengths: Loyal, analytical, kind, hardworking, practical Weaknesses: Shyness, worry, overly critical of self and others, all work and no play Virgo likes: Animals, healthy food, books, nature, cleanliness Virgo dislikes: Rudeness, asking for help, taking center stage",
	path: "http://www.astrology-zodiac-signs.com/images/virgo.jpg"
},
{
	name: "libra",
	dates: "September 23 - October 22",
	traits:"Strengths: Cooperative,diplomatic, gracious, fair-minded, social Weaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity Libra likes: Harmony, gentleness, sharing with others, the outdoors Libra dislikes: Violence, injustice, loudmouths, conformity",
	path: "http://www.astrology-zodiac-signs.com/images/libra.jpg"
},
{
	name: "scorpio",
	dates: "October 23 - November 21",
	traits:"Strengths: Resourceful, brave, passionate, stubborn, a true friend Weaknesses: Distrusting, jealous, secretive, violent Scorpio likes: Truth, facts, being right, longtime friends, teasing, a grand passion Scorpio dislikes: Dishonesty, revealing secrets, passive people",
	path: "http://www.astrology-zodiac-signs.com/images/scorpio.jpg"
},
{
	name: "sagittarius",
	dates: "November 22 - December 21",
	traits: "Strengths: Generous, idealistic, great sense of humor Weaknesses: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic Sagittarius likes: Freedom, travel, philosophy, being outdoors Sagittarius dislikes: Clingy people, being constrained, off-the-wall theories, details",
	path: "http://www.astrology-zodiac-signs.com/images/sagittarius.jpg"
},
{
	name: "capricorn",
	dates: "December 22 - January 19",
	traits: "Strengths: Responsible, disciplined, self-control, good managers Weaknesses: Know-it-all, unforgiving, condescending, expecting the worst Capricorn likes: Family, tradition, music, understated status, quality craftsmanship Capricorn dislikes: Almost everything at some point",
	path: "http://www.astrology-zodiac-signs.com/images/capricorn.jpg"
},
];

function showSign() {
	var results = document.getElementById("results");
	var userInput = document.getElementById("userInput").value.toLowerCase();
	for(var i = 0; i < zodiacSigns.length; i++) {
		if(userInput === zodiacSigns[i].name) {

			var displayName = document.createElement("h1");
				displayName.innerText = zodiacSigns[i].name;

			var displayDate = document.createElement("h3");
				displayName.innerText = zodiacSigns[i].dates;

			var displayTraits = document.createElement("p");
				displayTraits.innerText = zodiacSigns[i].traits;

			var displayImage = document.createElement("img");
				displayImage.src = zodiacSigns[i].path;
				displayImage.alt = zodiacSigns[i].name;

				results.appendChild(displayImage);
				results.appendChild(displayName);
				results.appendChild(displayDate);
				results.appendChild(displayTraits);
		

				return;
		}; 
			
	
		
	};window.alert("you have entered invalid sign");
}; 