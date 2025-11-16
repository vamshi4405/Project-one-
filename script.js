 const quotes = [
            {
                text: "The only way to do great work is to love what you do.",
                author: "Steve Jobs"
            },
            {
                text: "Believe you can and you're halfway there.",
                author: "Theodore Roosevelt"
            },
            {
                text: "It always seems impossible until it's done.",
                author: "Nelson Mandela"
            },
            {
                text: "Don't watch the clock; do what it does. Keep going.",
                author: "Sam Levenson"
            },
            {
                text: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt"
            },
            {
                text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                author: "Winston Churchill"
            },
            {
                text: "The only limit to our realization of tomorrow will be our doubts of today.",
                author: "Franklin D. Roosevelt"
            },
            {
                text: "You are never too old to set another goal or to dream a new dream.",
                author: "C.S. Lewis"
            },
            {
                text: "The way to get started is to quit talking and begin doing.",
                author: "Walt Disney"
            },
            {
                text: "Your time is limited, don't waste it living someone else's life.",
                author: "Steve Jobs"
            },
            {
                text: "If you can dream it, you can do it.",
                author: "Walt Disney"
            },
            {
                text: "The harder I work, the more luck I seem to have.",
                author: "Thomas Jefferson"
            },
            {
                text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
                author: "Roy T. Bennett"
            },
            {
                text: "Be the person who never gives up.",
                author: "no author"
            },
            {
                text: "Start now; perfect later.",
                author: "no author"
            },
            {
                text: "Push yourself—no one else will do it for you.",
                author: "no author"
            },
            {
                text: "Discipline turns dreams into reality.",
                author: "no author"
            },
            {
                text: "Believe in the work, not the luck.",
                author: "no author"
            },
            {
                text: "Start where you are. Use what you have. Do what you can.",
                author: "Arthur Ashe"
            },
            {
                text: "Keep going—your future self is watching.",
                author: "no author"
            },
            {
                text: "One step today is progress forever.",
                author: "no author"
            },
            {
                text: "Start now; perfection will follow.",
                author: "no author"
            },
            {
                text: "Success is built on small daily actions.",
                author: "no author"
            },
            {
                text: "Believe in the work, not the luck.",
                author: "no author"
            },
            {
                text: "Your only limit is your consistency.",
                author: "no author"
            },
            {
                text: "One step today is progress forever.",
                author: "no author"
            },
            {
                text: "Discipline turns dreams into reality.",
                author: "no author"
            },
            {
                text: "Great things start with a simple decision to try.",
                author: "unknown"
            },
            {
                text: "Small efforts repeated daily create big change.",
                author: "unknown"
            },
            {
                text: "Your future is built by what you do today.",
                author: "unknown"
            },
            {
                text: "Stay patient—your time is coming.",
                author: "unknown"
            },
            {
                text: "Work in silence, let success be the noise.",
                author: "unknown"
            },
            {
                text: "Small wins eventually become big victories.",
                author: "unknown"
            },
            {
                text: "The best investment is in yourself.",
                author: "unknown"
            },
            {
                text: "You don’t need to be perfect—just consistent.",
                author: "unknown"
            },
            {
                text: "Nothing works unless you do.",
                author: "Maya Angelou"   // This one *does* have an author
            },
            {
                text: "Keep showing up, even on the hard days.",
                author: "unknown"
            },
            {
                text: "You’re closer than you think—don’t quit.",
                author: "unknown"
            },
            {
                text: "The only bad decision is not starting.",
                author: "unknown"
            },
            {
                text: "Every expert was once a beginner.",
                author: "Helen Hayes"
            },
            {
                text: "You grow every time you push your limits.",
                author: "unknown"
              },
              {
                text: "One good habit can change your whole life.",
                author: "unknown"
              },
              {
                text: "Success starts with self-belief.",
                author: "unknown"
              },
              {
                text: "Don’t fear failure—fear regret.",
                author: "unknown"
              },
              {
                text: "The grind may be lonely, but the results won’t be.",
                author: "unknown"
              },
              {
                text: "Progress is progress, no matter how slow.",
                author: "unknown"
              },
              {
                text: "You owe it to yourself to become your best version.",
                author: "unknown"
               },
               {
                text: "Show up now, shine later.",
                author: "unknown"
               },
               {
                text: "It’s never too late to start again.",
                author: "unknown"
               },
               {
                text: "Your grind will pay off—trust the process.",
                author: "unknown"
               },
               {
                text: "If it matters to you, you’ll find a way.",
                author: "unknown"
               },
               {
                text: "Stay consistent; your results are loading.",
                author: "unknown"
               },
               {
                text: "Every day is a new chance to get better.",
                author: "unknown"
               },
               {
                text: "Focus on progress, not perfection.",
                author: "unknown"
               },
               {
                text: "One day or day one—your choice.",
                author: "unknown"
               },
               {
                text: "Your dreams deserve your effort.",
                author: "unknown"
               },
               {
                text: "The harder you work, the luckier you become.",
                author: "Gary Player"
                },
                {
                text: "Turn discipline into your superpower.",
                author: "unknown"
                },
                {
                text: "Don’t stop until you’re proud.",
                uthor: "unknown"
                },
                {
                text: "Every page you read is a step toward a better you.",
                author: "no author"
},
{
                text: "Study not to pass exams, but to pass your limits.",
                author: "no author"
},
{
    text: "Your future begins with the chapter you open today.",
    author: "no author"
},
{
    text: "A single focused hour can change your entire semester.",
    author: "no author"
},
{
    text: "Don’t study harder—study with purpose.",
    author: "no author"
},
{
    text: "Consistency in learning becomes clarity in life.",
    author: "no author"
},
{
    text: "You grow with every concept you understand.",
    author: "no author"
},
{
    text: "One page a day is enough to build a brilliant mind.",
    author: "no author"
},
{
    text: "Education is the echo of effort.",
    author: "no author"
},
{
    text: "Your knowledge is your quiet power.",
    author: "no author"
},
                {
                text: "The secret of getting ahead is getting started.",
                author: "Mark Twain"
                }
        ];

        const quoteText = document.getElementById('quoteText');
        const quoteAuthor = document.getElementById('quoteAuthor');
        const motivateBtn = document.getElementById('motivateBtn');
        const quoteContainer = document.getElementById('quoteContainer');

        let previousIndex = -1;

        function getRandomQuote() {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * quotes.length);
            } while (randomIndex === previousIndex && quotes.length > 1);
            
            previousIndex = randomIndex;
            return quotes[randomIndex];
        }

        function displayQuote() {
            const quote = getRandomQuote();
            
            // Add fade out effect
            quoteContainer.style.opacity = '0';
            
            setTimeout(() => {
                quoteText.textContent = quote.text;
                quoteAuthor.textContent = `— ${quote.author}`;
                
                // Add fade in effect
                quoteContainer.style.opacity = '1';
                quoteContainer.classList.add('fade-in');
                
                // Remove animation class after animation completes
                setTimeout(() => {
                    quoteContainer.classList.remove('fade-in');
                }, 1000);
            }, 300);
        }

        // Add click event to button
        motivateBtn.addEventListener('click', displayQuote);

        // Display initial quote on page load
        window.addEventListener('load', () => {
            setTimeout(displayQuote, 500);
        });