const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#wordstobetyped');

let startTime, endTime, totalTimeTaken;


const sentences = ['The sun cast a warm glow over the tranquil meadow wildflowers swayed gently in the breeze birds chirped happily in the trees a sense of peace and serenity enveloped the surroundings as nature displayed ',
    'Sun rises over horizon birds sing in gentle breeze rustles leaves on trees flowers bloom in riot of colors sense of peace tranquility fills air its a beautiful day to be outside and enjoy wonders of nature',
    'They told her that this was her once chance to show the world what she was made of she believed them at the time it was the big stage and she knew the world would be there to see the only one who had disagreed with this sentiment was her brother',
'The red glow of tail lights indicating another long drive home from work after an even longer 24 hour shift at the hospital the shift been horrible but the constant stream of ',
'patients entering the meant there was no downtime she had some of the regulars in tonight with new ailments they were sure were going to kill them its beauty in all its glory',
'Life is a journey we embark on filled with twists turns and unexpected detours sometimes we plan meticulously but often we find ourselves navigating the labyrinth of existence without a map or compass its in these moments of uncertainty that we truly discover our strengths ',
'capabilities pushing ourselves to go beyond what we thought possible embracing the challenges and growing with each experience we learn to adapt evolve and become resilient forging ahead with determination and a spirit that cant be easily broken',
'The sun dipped below the horizon painting the sky in hues of orange pink and purple it was a breathtaking sight one that filled the heart with awe and wonder the gentle rustling of leaves in the evening breeze provided a soothing soundtrack to the scene a feeling of tranquility',
'holding its breath in anticipation of the night ahead stars began to twinkle one by one as the velvety darkness enveloped the world in its embrace the moon emerged casting a soft silvery glow on everything it touched a sense of magic hung in the air nature own symphony of the night had begun',
'The sun gently rises painting the sky in hues of pink orange and gold a new day begins nature stirs with life as birds sing their melodious tunes flowers bloom and leaves rustle in the morning breeze a sense of tranquility fills the air',
'In a bustling city people rush through the streets cars honk and sirens wail a symphony of urban sounds the city never sleeps lights flicker in tall buildings and the aroma of diverse cuisines wafts through the streets a vibrant mosaic of cultures and experiences',
'High in the mountains a river flows its water crystal clear and icy cold it meanders through valleys and over rocks a lifeline for the surrounding ecosystem trees cling to the slopes their roots anchoring them against the elements a delicate balance of natures forces',
'The artists brush dances across the canvas strokes of color and emotion merging and flowing into a masterpiece a visual expression of thoughts and feelings a window into the artists soul creativity knows no bounds as imagination takes flight',
'As the day fades into night stars twinkle in the velvety sky a celestial display of distant worlds and galaxies the moon casts its gentle glow illuminating the world below a peaceful interlude before the cycle begins anew',
'Childrens laughter fills the playground as they swing slide and play games innocence and joy in their eyes boundless energy and curiosity a reminder of the beauty of youth and the promise of tomorrow']

// step 5

const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if (actualWords !== 0) {
        let typing_speed = (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec.`;
    } else {
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec.`;
    }
}

// step 4
const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime - startTime) / 1000.0;

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}


// step 3
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    show_sentence.innerHTML = sentences[randomNumber].toLowerCase();

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
    score.innerHTML = "";
}




// step 2
btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled', 'true');
            endTypingTest();
            break;
    }
})