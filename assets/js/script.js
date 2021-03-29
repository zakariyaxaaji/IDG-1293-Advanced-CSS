const continueButton = document.getElementById("continue-button");
const poemText = document.getElementById("poem-text");

let pageNumber = 0;
let gradPos = 100;

resetPage();

continueButton.addEventListener('click', (e) => {
    pageNumber++;
    if (pageNumber != 4) {
        gradPos -= 25;
    }

    document.getElementById("poem-text").innerHTML = ``;

    if (pageNumber <= 5) {
        updatePage();
    }
    if (pageNumber === 5) {
        continueButton.innerHTML = "Reset";
    } else if (pageNumber > 5) {
        resetPage();
    }
});

function updatePage() {
    document.body.className = `page-${pageNumber}`;
    poem["poem-" + pageNumber].forEach(line => {
        const paragraph = document.createElement("P");
        paragraph.innerHTML = line;
        poemText.appendChild(paragraph);
    });
    document.body.style.backgroundPosition = gradPos + "%";
    console.log(gradPos)
}

function resetPage() {
    pageNumber = 0;
    gradPos = 100;
    document.body.style.backgroundPosition = gradPos + "%";
    const heading = document.createElement("H1");
    heading.innerHTML = "Favourite colour";
    poemText.appendChild(heading);
    const paragraph = document.createElement("P");
    paragraph.innerHTML = "by Joni Mitchell";
    poemText.appendChild(paragraph);
    continueButton.innerHTML = "Continue";
    document.body.className = `page-0`;
}


let div = document.createElement('div');
div.className = 'apple';

let text = document.createTextNode('This is an apple');
div.appendChild(text);

document.body.appendChild(div);

/*
let img = document.createElement('img');
img.src = 'assets/ ;
document.getElementById('body') .appendChild(img);
down.innerHTML = "Image element added"


const apple = document.querySelector(".apple")
function chapter1() {
  const fall = () => apple.classList.add("ground-position")
  const spin = () => apple.classList.add("spin")
  const roll = () => apple.classList.add("right-position")
  const stop = () => apple.classList.remove("spin")
  fall()
  setTimeout(() => {
    roll()
    spin()
    setTimeout(stop, 4000)
  }, 1000)
}
*/

const poem = {
    "poem-1": [
        'I met a child a year ago',
        'Whose eyes would never see.',
        'She asked me with a timid smile,',
        '"What colour is a tree?"'
    ],
    "poem-2": [
        '"In summertime a tree is green;',
        'In autumn gold and red;',
        'In winter they are frosted white',
        'when all their leaves are shed."'
    ],
    "poem-3": [
        '"I know the sky is blue," she said.',
        '"And silver is the sand;',
        'And apples are the brightest red.',
        'What colour is a man?"'
    ],
    "poem-4": [
        '"Man is many colours child:',
        'Some are yellow, some are brown.',
        'And some are black as sightlessness,',
        'Some white as eiderdown."'
    ],
    "poem-5": [
        'She took her crayons from a box',
        'And placed them in my glove',
        'And said, "By mixing all of these',
        'Comes my favourite colour--love.”'
    ],
}