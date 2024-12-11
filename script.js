document.addEventListener('DOMContentLoaded', function() {
    const randomQuestions = [
        "spill the tea on your first kiss.",
        "What's ur fav brand?? <3",
        "have u seen breaking bad",
        "any pets?",
        "you wild for what you did",
        "how are you feeling today :)",
        "introvert or extrovert?",
        "yo stop leaving me on read",
        "would you say yes if i asked you out - A",
        "how are you feeling today :)",
        "the weirdest place you've ever gone to the bathroom?",
        "youre cute",
        "who do you miss the most",
        "the worst advice you've ever given?",
        "you a homie",
        "who do you have pinned on imessage",
        "what phone do you have?",
        "when was your first kiss?",
        "one thing you can't survive without?",
        "do you have trust issues?",
        "would you ever get with me? ~ N",
        "introvert or extrovert?",
        "worst song on spotify?",
        "celeb crush?",
        "ur fav teacher rn",
        "What's ur fav meme rn",
        "teleport anywhere in the world, where wud u go",
        "last show u binged on Netflix",
        "weirdest food combo that u actually luv",
        "the most random thing u've googled lately",
        "dream job with no money issues",
        "have any superpower, what would it be",
        "u racist?",
        "the blackest homie u ever know",
        "worst thing ever seen on ig",
        "fav way to relax after a stressful day",
        "wish u cud learn something in school but nah, what?",
        "shot-out Hitler",
        "what's ur most-used emoji",
        "who sent u the last reel on ig",
        "wet dreamz?",
        "if ain't XO leave her",
        "mention the homie who know abt u more than u",
        "funniest relationship ever known to u",
        "red-flag acc to u on women",
        "ever go on a date?",
        "mention the garbage mate in ur class",
        "worst mate for a sleep-over",
        "how double minded ur? 1-10",
        "mention ur cute girl mate",
        "bring that 707 out",
        "dare-propose her rn"
    ];

    const messageInput = document.getElementById('message-input');
    const userInput = document.getElementById('user-input');
    const randomizer = document.getElementById('randomizer');
    const peopleCount = document.getElementById('people-count');
    const sendMessageButton = document.getElementById('send-message');
    const animatedButton = document.getElementById('animated-button');

    randomizer.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * randomQuestions.length);
        messageInput.value = randomQuestions[randomIndex];
    });

    function updatePeopleCount() {
        const randomCount = Math.floor(Math.random() * 800 + 200) + 1;
        peopleCount.textContent = randomCount;
    }

    setInterval(updatePeopleCount, 1000);

    sendMessageButton.addEventListener('click', function(event) {
        if (messageInput.value.trim() === '' || userInput.value.trim() === '') {
            alert('Please Verify Your Instagram ID');
            event.preventDefault();
        }
    });

    animatedButton.addEventListener('click', function() {
        location.href="https://alansweb.website2.me"
        alert('Thank You For Using ALANSWEB');
    });

    // Initialize people count
    updatePeopleCount();
});
