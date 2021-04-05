const body = document.body;
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
    if (pageNumber > 5) {
        resetPage();
    }
});

function updatePage() {
    body.className = `page-${pageNumber}`;
    poem["poem-" + pageNumber].forEach(line => {
        const paragraph = document.createElement("P");
        paragraph.innerHTML = line;
        poemText.appendChild(paragraph);
    });
    body.style.backgroundPosition = gradPos + "%";
    switch (pageNumber) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            poem2();
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            continueButton.innerHTML = "Reset";
            break;
    }
}

function resetPage() {
    pageNumber = 0;
    gradPos = 100;
    body.style.backgroundPosition = gradPos + "%";
    const heading = document.createElement("H1");
    heading.innerHTML = "Favourite colour";
    poemText.appendChild(heading);
    const paragraph = document.createElement("P");
    paragraph.innerHTML = "by Joni Mitchell";
    poemText.appendChild(paragraph);
    continueButton.innerHTML = "Continue";
    body.className = `page-0`;
}

function poem2() {
    const tree = document.createElement("DIV");
    tree.className = "tree";
    const topTree = document.createElement("DIV");
    topTree.className = "topTree";
    for (i = 0; i < 30; i++) {
        const leaves = document.createElement("DIV");
        leaves.className = "leaves";
        const randomSize = getRandomInt(3);
        let size = 5;
        if (randomSize === 0) {
            size = 5;
        } else if (randomSize === 1) {
            size = 10;
        } else if (randomSize === 2) {
            size = 15;
        }
        const randomColor = getRandomInt(3);
        let color = "rgba(198, 204, 109, 0.788)";
        if (randomColor === 0) {
            color = "rgba(198, 204, 109, 0.788)";
        } else if (randomColor === 1) {
            color = "rgba(151, 185, 112, 0.76)";
        } else if (randomColor === 2) {
            color = "rgba(51, 83, 44, 0.76)";
        }
        const bottom = getRandomInt(70);
        const leftOrRight = getRandomInt(2) === 1 ? "left" : "right";
        const horizontal = getRandomInt(50);
        leaves.style = `
            height: ${size}vmin;
            width: ${size}vmin;
            top: ${bottom}%;
            ${leftOrRight}: ${horizontal}%;
            background-color: ${color};
        `;
        topTree.appendChild(leaves);
    }
    const trunk = document.createElement("DIV");
    trunk.className = "trunk";
    for (i = 0; i < 3; i++) {
        const branch = document.createElement("DIV");
        branch.className = "branch";
        trunk.appendChild(branch);
    }
    tree.appendChild(topTree);
    tree.appendChild(trunk);
    body.appendChild(tree);
    /*
    continueButton.addEventListener('click', (e) => {
        console.log("Exists page 2");
    });*/
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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