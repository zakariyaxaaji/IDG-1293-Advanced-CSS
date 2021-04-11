const body = document.body;
const continueButton = document.getElementById("continue-button");
const poemText = document.getElementById("container__poem");
const apple = document.createElement("IMG");

let pageNumber = 0;
let gradPos = 100; // Gradient position used to move the background of the page

resetPage(); //Reset page gets called in the beginning to create the front page (page 0)

/**
 * Eventlistener on the continue/start/reset button that is displayed.
 */
continueButton.addEventListener('click', (e) => {
    pageNumber++; // Go to the next page
    continueButton.style.opacity = '0';
    continueButton.innerHTML = 'Continue';
    if (pageNumber != 4) { gradPos -= 20 }
    if (pageNumber <= 6) { updatePage() }
    else if (pageNumber > 6) { resetPage() } // Reset the page (goes back to page 0)
});

/**
 * Prints all lines of current paragraph of the poem matching the page number.
 */
function printPoem() {
    poemText.innerHTML = '';
    poem["poem-" + pageNumber].forEach((line, i) => {
        const paragraph = document.createElement("P");
        paragraph.innerHTML = line;
        paragraph.className = "para";
        setTimeout(function () { paragraph.className = 'para fadeIn'; }, i * 1200 + 10);
        poemText.appendChild(paragraph);
    });
}

/**
 * Updates the page. Runs on each click on the continue/start/reset button.
 */
function updatePage() {
    body.className = `page-${pageNumber}`;
    setTimeout(function () {
        continueButton.style.opacity = '100'
    }, 4500);

    // changes the position of the background gradient. 
    body.style.backgroundPosition = gradPos + "%";

    switch (pageNumber) {
        case 0:
            printPoem();
            break;
        case 1:
            printPoem();
            makeTree('green');
            makeApple();
            break;
        case 2:
            printPoem();
            removeTree();
            makeTree('red');
            break;
        case 3:
            removeTree();
            makeTree('white');
            break;
        case 4:
            printPoem();
            removeTree();
            break;
        case 5:
            printPoem();
            break;
        case 6:
            printPoem();
            continueButton.innerHTML = "Reset";
            break;
    }
}

/**
 * Reset Page function takes the website back to the initial state
 */
function resetPage() {
    poemText.innerHTML = '';
    pageNumber = 0;
    gradPos = 100;
    body.style.backgroundPosition = gradPos + "%";
    const heading = document.createElement("H1");
    heading.innerHTML = "Favourite colour";
    poemText.appendChild(heading);
    const paragraph = document.createElement("P");
    paragraph.innerHTML = "by Joni Mitchell";
    poemText.appendChild(paragraph);
    continueButton.innerHTML = "Start";
    body.className = `page-0`;
    continueButton.style.opacity = '100';
}

// Making apple //
function makeApple() {
    apple.src = "assets/images/apple.png";
    apple.className = "apple";
    apple.addEventListener("click", (e) => {
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
    });
    body.appendChild(apple);
}

/**
 * Creates and displays the tree
 * 
 * @param {String} leafColor - Color of the leaves
 */
function makeTree(leafColor) {
    const tree = document.createElement("DIV");
    tree.className = "tree";
    setTimeout(function () {
        tree.className = 'tree fadeIn';
    }, 10);
    const topTree = document.createElement("DIV");
    topTree.className = "topTree";

    // making leaves for the tree.
    for (i = 0; i < 30; i++) {
        const leaves = document.createElement("DIV");
        leaves.className = "leaves";

        // size will be randomly 5, 10 or 15
        const randomSize = getRandomInt(3);
        let size = 5;
        if (randomSize === 1) { size = 10; }
        if (randomSize === 2) { size = 15; }

        // color will be randomly three similar shades of color from param
        let color = "rgba(255, 255, 255, 0.5)";
        const randomColor = getRandomInt(3);
        switch (leafColor) {
            case 'green':
                if (randomColor === 0) { color = "rgba(85, 255, 85, 0.788)"; }
                if (randomColor === 1) { color = "rgba(98, 204, 71, 0.76)"; }
                if (randomColor === 2) { color = "rgba(21, 65, 11, 0.76)"; }
                break;
            case 'red':
                if (randomColor === 0) { color = "rgb(236, 136, 22, 0.76)"; }
                if (randomColor === 1) { color = "rgb(236, 90, 22, 0.76)"; }
                if (randomColor === 2) { color = "rgb(241, 126, 31, 0.76)"; }
                break;
            case 'white':
                if (randomColor === 0) { color = "rgb(255, 255, 255, 0.46)"; }
                if (randomColor === 1) { color = "rgb(255, 255, 255, 0.56)"; }
                if (randomColor === 2) { color = "rgb(255, 255, 255, 0.66)"; }
                break;
        }


        // position of each leaf will be randomly placed within the top 70% of the tree and randomly 50% from either left or right.
        const bottom = getRandomInt(70);
        const leftOrRight = getRandomInt(2) === 1 ? "left" : "right";
        const horizontal = getRandomInt(50);

        // adding all variables to each leaf's individual style.
        leaves.style = `
            height: ${size}vmin;
            width: ${size}vmin;
            top: ${bottom}%;
            ${leftOrRight}: ${horizontal}%;
            background-color: ${color};
        `;
        topTree.appendChild(leaves);
    }

    // adding a tree trunk
    const trunk = document.createElement("DIV");
    trunk.className = "trunk";

    // adding 3 branches to the trunk.
    for (i = 0; i < 3; i++) {
        const branch = document.createElement("DIV");
        branch.className = "branch";
        trunk.appendChild(branch);
    }

    // adding the leaves and the trunk to the tree and appending the tree to the body. (css styles it more)
    tree.appendChild(topTree);
    tree.appendChild(trunk);
    body.appendChild(tree);
}

/**
 * Removes the tree
 * 
 * @param {Number} time - The time in ms to remove the tree
 * @param {Number} num - Which number in the elements array the tree is located
 * @returns 
 */
function removeTree(time = 2200, num = 0) {
    let trees = document.getElementsByClassName("tree");
    if (!trees) return
    trees[num].className = 'tree fadeOut';
    setTimeout(function () {
        trees[num].remove();
    }, time);
}

/**
 * Return a random integer
 * @param {Number} max - Highest number to return - 1. E.g. 3 returns a number between 0 and 2
 * @returns - A random integer
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Poem/text to be displayed
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
        'this wont print, kinda cheeky solution i guess'
    ],
    "poem-4": [
        '"I know the sky is blue," she said.',
        '"And silver is the sand;',
        'And apples are the brightest red.',
        'What colour is a man?"'
    ],
    "poem-5": [
        '"Man is many colours child:',
        'Some are yellow, some are brown.',
        'And some are black as sightlessness,',
        'Some white as eiderdown."'
    ],
    "poem-6": [
        'She took her crayons from a box',
        'And placed them in my glove',
        'And said, "By mixing all of these',
        'Comes my favourite colour--love.”'
    ],
}