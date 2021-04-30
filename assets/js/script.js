const body = document.body;
const continueButton = document.getElementById("continue-button");
const poemText = document.getElementById("container__poem");
const apple = document.createElement("IMG");

let pageNumber = 0;
let gradPos = 100; // Gradient position used to move the background of the page
let isTreeWhite = false;


resetPage(); //Reset page gets called in the beginning to create the front page (page 0)
addRainbow(); // Add rainbow to HTML document. (Will not show as opacity is set to 0)

/**
 * Eventlistener on the continue/start/reset button that is displayed.
 */
continueButton.addEventListener('click', (e) => {
    // If pagenumber is 2 and the tree is not white...
    if (pageNumber === 2 && !isTreeWhite) {
        // ... Make tree white (New poem is NOT loaded)
        removeTree();
        makeTree('white');
        isTreeWhite = true;
    } else {
        pageNumber++; // Go to the next page
        continueButton.style.opacity = '0';
        continueButton.innerHTML = 'Continue';
        if (pageNumber != 4) { gradPos -= 20 }
        if (pageNumber <= 5) { updatePage() }
        else if (pageNumber > 5) { resetPage() } // Reset the page (goes back to page 0)
    }
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
    printPoem();

    body.className = `page-${pageNumber}`;
    setTimeout(function () {
        continueButton.style.opacity = '100'
    }, 4500);

    // changes the position of the background gradient. 
    body.style.backgroundPosition = gradPos + "%";

    switch (pageNumber) {
        case 0: //Will never run
            break;
        case 1:
            makeTree('green');
            makeApple();
            break;
        case 2:
            chapter2();
            removeTree();
            makeTree('red');
            break;
        case 3:
            chapter3();
            removeTree();
            break;
        case 4:
            chapter4();
            break;
        case 5:
            removeApple();
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
    isTreeWhite = false;
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
    setTimeout(() => {
        // Add animations to apple
        const fall = () => apple.classList.add("ground-position")
        const spin = () => apple.classList.add("spin")
        const roll = () => apple.classList.add("right-position")
        fall()
        setTimeout(() => {
            roll()
            spin()
        }, 1000)
    }, 1000)

    body.appendChild(apple);
}

function chapter2() {
    // Remove old chapter animation
    apple.classList.remove("right-position")

    // Apply left position
    apple.classList.add("left-position")
    setTimeout(() => {
        apple.classList.add("left-to-right-position")
        setTimeout(() => apple.classList.remove("spin"), 4500)
    }, 1000)
}

function chapter3() {
    // Remove old chapter animation
    apple.classList.remove("left-position")
    apple.classList.remove("left-to-right-position")

    // Moves apple out of screen
    apple.classList.add("right-to-off-position")
    apple.classList.add("spin")

    // Apply left position
    setTimeout(() => {
        apple.classList.remove("right-to-off-position")
        
        apple.classList.add("left-position")
        setTimeout(() => {
            apple.classList.add("left-to-right-position")
            setTimeout(() => {
                apple.classList.remove("spin")
            }, 4500)
        }, 100)
    }, 1000)

}

function chapter4() {
    // Remove old chapter animation
    apple.classList.remove("left-to-right-position")

     // Moves apple out of screen
    apple.classList.add("right-to-off-position")
    apple.classList.add("spin")

    // Apply left position
    setTimeout(() => {
        apple.classList.remove("right-to-off-position")
        
        apple.classList.add("left-position")
        setTimeout(() => {
            apple.classList.add("left-to-right-position")
            setTimeout(() => {
                apple.classList.remove("spin")
            }, 4500)
        }, 100)
    }, 1000)
}

function removeApple() {
    // Remove apple animation
    apple.classList.remove("apple")
}

function addRainbow() {
    const rainbow = document.createElement("FIGURE");
    rainbow.className = "rainbow smooth";
    body.appendChild(rainbow);
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
        leaves.className = "leaves small " + leafColor;

        // size will be randomly 5, 10 or 15
        const randomSize = getRandomInt(3);
        let size = 5;
        if (randomSize === 1) {
            size = 10;
            leaves.className = "leaves medium " + leafColor;
        }
        if (randomSize === 2) {
            size = 15;
            leaves.className = "leaves big " + leafColor;
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