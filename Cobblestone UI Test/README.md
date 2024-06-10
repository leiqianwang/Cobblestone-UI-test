UI Developer / Front End Developer Test
Test Instructions:
• Duration: Approximately 30 minutes
• Tools: A text editor or IDE of choice, and a web browser
Sections:
1. HTML/CSS (10 minutes)
• Task: Create a simple webpage layout according to provided wireframes/design 
mockups.
• Focus: Semantic HTML markup, CSS styling, responsiveness.
• Requirements: Basic layout structure, use of appropriate HTML tags, responsive design 
(mobile-first approach preferred).
**Task 1: HTML/CSS Wireframe**
---------------------------------------------------
|                                            Header                                              |
                       ---------------------------------------------------
|        Logo                                                           Navigation Links         |
                       ---------------------------------------------------
|                   |
|                                           Section                                              |
|                                        +-----------+                                           |
|                                          | Title |                                             |
|                                        +-----------+                                           |
|                                          | Paragraph |                                         |
|                                           |         |                                          |
|                                           | Image |                                            |
|                                         +-----------+                                          |
|                                                                                                |
                         ---------------------------------------------------
|                                             Form                                               |
|                          +---------------------------------------------+                       |
|                                          | Name: [ ] |                                         |                
|                                          | Email: [ ] |                                        |
|                                             | |                                                |
|                                          | [Submit] |                                          |
|                            +---------------------------------------------+                     |
                           ---------------------------------------------------

This wireframe represents a basic layout for the webpage described in Task 1. The 
header includes a logo on the left and navigation links on the right. Below the header, 
there's a section with a title, paragraph, and image. Finally, there's a form with input 
fields for name, email, and a submit button.


2. JavaScript (10 minutes)
• Task: Implement a small interactive feature or animation.
• Focus: DOM manipulation, event handling, basic JavaScript concepts.
• Requirements: Create a button that, when clicked, toggles the visibility of an element or 
triggers a simple animation (e.g., fade in/out, slide up/down). This can be integrated into 
the webpage on Section 1.


3. Problem-Solving (10 minutes)
• Task: Solve a coding problem or debugging scenario.
• Focus: Problem-solving skills, understanding of JavaScript concepts.
• Requirements: Given a small snippet of code with a bug or missing functionality, 
identify and fix the issue. Alternatively, provide a coding problem that requires 
algorithmic thinking (e.g., finding the sum of all even numbers in an array).
Submission Guidelines:
• The candidate should submit their solution files (HTML, CSS, JavaScript) or a link to an 
online code repository (e.g., GitHub).
• Each section should be clearly labeled with comments or separate files.
Evaluation Criteria:
• Correctness: The solution should meet the requirements of each task and function as 
expected.
• Code Quality: Clear, concise, and well-structured code with appropriate comments.
• Problem-Solving Approach: Assess the candidate's approach to solving problems and 
understanding of fundamental concepts.
Problem-Solving Task:
You're working on a web application where users can enter their favorite fruits in a form. The 
entered fruits are stored in an array. However, there's a bug in the code that prevents duplicate 
entries from being removed. Your task is to fix this bug.


// Original code with a bug
function removeDuplicates(fruits) {
 let uniqueFruits = [];
 for (let fruit of fruits) {
 if (!uniqueFruits.includes(fruit)) {
 uniqueFruits.push(fruit);
 }
 }
 return uniqueFruits;
}

// Example usage
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
let uniqueFruits = removeDuplicates(fruits);
console.log(uniqueFruits); // Output: ['apple', 'banana', 'orange']



Requirements:
- Fix the bug in the `removeDuplicates` function so that it correctly removes duplicate entries from 
the array of fruits.
- Ensure that the function retains the order of the original array while removing duplicates.
- Test the function with the provided example usage to ensure it produces the correct output.
Expected Output:
['apple', 'banana', 'orange']