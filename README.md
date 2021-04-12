# IDG-1293-Advanced-CSS
This github repository holds all our files for the IDG 1293 Advanced CSS Project 

Group members:
* Zakariya 
* Thomas
* Louise
* Emil

Project Description:       
      In this project we will create a single page application with a poem of our choosing where we will try to animate the text and background. The goal of our animations will be to amplify the meaning behind the poem.

Seperation of concerns:   
     Our files will be seperated into different folders to make it easier to handle different aspects of the solution. We have a folder for images, styles, and js. The different part of the styling files will have the naming scheme __nameOfYourConcern.scss and the rest of the files will use the BEM naming conventions.




BEM 
In the SCSS file, we used the common naming conventions of BEM For classes. Blocks in our code are given a normal class => .block and the children of that block will inherit its name with __ => .block__name of the element. In the instances where we used modifiers the names will be => .block__element--modifier. 

Apple animation 
For the apple animation we used both js. and CSS to develop an interactive apple. There are used keyframes to animate the apple element to fall and spin, and a timer for the duration of each animation so that they dont overlap where its not supposed to. The apple will drop from the tree to the ground when clicked on, then eventually roll over to the next screen. When the continue button is clicked, you can then see the apple rolling in a rotating motion from the left to right on the ground. For further development we will have to look at how the apple will work if the user choose to not click on the apple to create a better user experience.