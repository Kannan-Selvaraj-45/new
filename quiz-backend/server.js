


const express = require("express");
const cors = require("cors");

const app = express();

// Allow requests from all origins
app.use(cors());

// Define your API routes
app.get("/api/questions", (req, res) => {
  // Your route logic to fetch and send questions
  const questions = 
[
    
        {
          "id": 1,
          "question": "What is the purpose of HTML in web development?",
          "options": [
            "Styling web pages",
            "Defining data structures",
            "Programming server-side logic",
            "Creating the structure of web pages"
          ],
          "answer": "Creating the structure of web pages",
          "description": "HTML (Hypertext Markup Language) is the standard markup language for creating the structure of web pages. It defines the elements and their arrangement, allowing browsers to interpret and display content on the internet."
        },
        {
          "id": 2,
          "question": "What does CSS stand for in web development?",
          "options": [
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Scripts"
          ],
          "answer": "Cascading Style Sheets",
          "description": "CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML. It controls the presentation, layout, and design of web pages, including aspects such as colors, fonts, and spacing."
        },
        {
          "id": 3,
          "question": "Which of the following is a popular front-end JavaScript framework?",
          "options": [
            "Express.js",
            "Vue.js",
            "Django",
            "Flask"
          ],
          "answer": "Vue.js",
          "description": "Vue.js is a progressive JavaScript framework used for building user interfaces. It is commonly used on the front end to create dynamic and reactive web applications. Vue.js is known for its simplicity and flexibility."
        },
        {
          "id": 4,
          "question": "What is the purpose of a web server in web development?",
          "options": [
            "Managing databases",
            "Rendering user interfaces",
            "Storing client-side scripts",
            "Handling HTTP requests and responses"
          ],
          "answer": "Handling HTTP requests and responses",
          "description": "A web server is a software or hardware component that handles HTTP (Hypertext Transfer Protocol) requests and responses. It serves web pages to clients, manages communication between clients and servers, and facilitates the processing of dynamic content."
        },
        {
          "id": 5,
          "question": "What is the role of AJAX in web development?",
          "options": [
            "Asynchronous JavaScript and XML",
            "Advanced JSON and XML",
            "Automated JavaScript and XHTML",
            "Asynchronous JSON and XHTML"
          ],
          "answer": "Asynchronous JavaScript and XML",
          "description": "AJAX (Asynchronous JavaScript and XML) is a set of web development techniques used to create asynchronous web applications. It allows data to be retrieved from a server asynchronously in the background, enabling dynamic and responsive user interfaces."
        },
    
        {
          "id": 6,
          "question": "What does the term 'responsive design' refer to in web development?",
          "options": [
            "Designing visually appealing websites",
            "Creating mobile applications",
            "Designing websites that adapt to different screen sizes",
            "Implementing secure server configurations"
          ],
          "answer": "Designing websites that adapt to different screen sizes",
          "description": "Responsive design in web development refers to the practice of creating websites that can adapt and provide an optimal viewing experience across various devices and screen sizes, including desktops, tablets, and mobile phones."
        },
      
    
        
            {
                "id": 7,
                "question": "What is the box model in CSS?",
                "options": [
                    "A method for designing boxes in JavaScript",
                    "A model for displaying content in a browser window",
                    "A set of rules defining the visual layout of elements",
                    "A technique for creating interactive forms"
                ],
                "answer": "A set of rules defining the visual layout of elements",
                "description": "The box model in CSS describes how elements are rendered on a web page, including padding, borders, and margins around content."
            },
            {
                "id": 8,
                "question": "What is the difference between `let`, `const`, and `var` in JavaScript?",
                "options": [
                    "They are all synonyms for declaring variables",
                    "`let` and `const` are block-scoped, while `var` is function-scoped",
                    "`const` cannot be reassigned, whereas `let` and `var` can",
                    "There is no difference; they all behave identically"
                ],
                "answer": "`let` and `const` are block-scoped, while `var` is function-scoped",
                "description": "JavaScript variables declared with `let` and `const` are block-scoped, meaning they are limited to the block (enclosed by curly braces) where they are defined."
            },
            {
                "id": 9,
                "question": "What is the purpose of a RESTful API?",
                "options": [
                    "To render web pages in a responsive manner",
                    "To manage server-side databases",
                    "To provide a standardized way for clients to interact with servers",
                    "To execute JavaScript code asynchronously"
                ],
                "answer": "To provide a standardized way for clients to interact with servers",
                "description": "A RESTful API (Representational State Transfer) allows clients to perform CRUD operations (Create, Read, Update, Delete) on server resources using standard HTTP methods (GET, POST, PUT, DELETE)."
            },
            {
                "id": 10,
                "question": "What is the purpose of event bubbling in JavaScript?",
                "options": [
                    "To stop the propagation of events",
                    "To trigger events on parent elements",
                    "To handle multiple events simultaneously",
                    "To handle events in reverse order"
                ],
                "answer": "To trigger events on parent elements",
                "description": "Event bubbling is a phenomenon in JavaScript where an event triggered on a child element will bubble up and trigger the same event on its parent elements."
            },
            {
                "id": 11,
                "question": "What is the difference between `==` and `===` in JavaScript?",
                "options": [
                    "`==` performs type coercion, while `===` does not",
                    "`==` checks only for equality of values, while `===` checks for both value and type equality",
                    "`==` is for comparing numbers, while `===` is for comparing strings",
                    "`==` is used for asynchronous operations, while `===` is used for synchronous operations"
                ],
                "answer": "`==` checks only for equality of values, while `===` checks for both value and type equality",
                "description": "`==` is a loose equality operator that performs type coercion if necessary, while `===` is a strict equality operator that checks both value and type without coercion."
            },
            {
                "id": 12,
                "question": "What is a callback function in JavaScript?",
                "options": [
                    "A function that is called after a timeout",
                    "A function passed as an argument to another function to be executed later",
                    "A function used to handle errors in asynchronous code",
                    "A function used to print debug messages in the console"
                ],
                "answer": "A function passed as an argument to another function to be executed later",
                "description": "A callback function is a function that is passed as an argument to another function and is executed after a specific task completes or at a certain event occurrence."
            },
            {
                "id": 13,
                "question": "What is the purpose of the `fetch` API in JavaScript?",
                "options": [
                    "To calculate mathematical expressions",
                    "To retrieve resources from a server using HTTP requests",
                    "To modify the DOM structure of a web page",
                    "To execute SQL queries on a client-side database"
                ],
                "answer": "To retrieve resources from a server using HTTP requests",
                "description": "The `fetch` API in JavaScript is used to make asynchronous HTTP requests to fetch resources (like JSON data, images, etc.) from a server."
            },
            {
                "id": 14,
                "question": "What is the `this` keyword in JavaScript?",
                "options": [
                    "It refers to the current file in Node.js",
                    "It refers to the global object in a browser",
                    "It refers to the parent element of a DOM node",
                    "It refers to the context in which a function is executed"
                ],
                "answer": "It refers to the context in which a function is executed",
                "description": "The `this` keyword in JavaScript refers to the execution context of a function and depends on how the function is called or invoked."
            },
            {
                "id": 15,
                "question": "What is the purpose of the `map` method in JavaScript?",
                "options": [
                    "To create a new array by transforming each element of an existing array",
                    "To remove elements from an array based on a condition",
                    "To add elements to the beginning of an array",
                    "To sort the elements of an array in alphabetical order"
                ],   
                "answer": "It refers to the context in which a function is executed",
                "description": "The `this` keyword in JavaScript refers to the execution context of a function and depends on how the function is called or invoked."
            },
            {
              "id": 16,
              "question": "What is the difference between `null` and `undefined` in JavaScript?",
              "options": [
                  "`null` represents an absence of a value, while `undefined` indicates that a variable has been declared but not assigned a value",
                  "`null` is a number, while `undefined` is a string",
                  "`null` is a primitive type, while `undefined` is an object",
                  "`null` and `undefined` are interchangeable and can be used interchangeably"
              ],
              "answer": "`null` represents an absence of a value, while `undefined` indicates that a variable has been declared but not assigned a value",
              "description": "In JavaScript, `null` is explicitly assigned to indicate the absence of a value, while `undefined` is the default value assigned to a variable that has been declared but not yet assigned a value."
          },
          {
              "id": 17,
              "question": "What is the role of a constructor function in JavaScript?",
              "options": [
                  "To define the structure of an object and initialize its properties",
                  "To perform mathematical calculations",
                  "To handle asynchronous operations",
                  "To style HTML elements on a web page"
              ],
              "answer": "To define the structure of an object and initialize its properties",
              "description": "A constructor function in JavaScript is used to define and initialize objects. It serves as a blueprint for creating multiple instances of similar objects."
          },
          {
              "id": 18,
              "question": "What is the purpose of the `localStorage` object in web browsers?",
              "options": [
                  "To store session data on the server",
                  "To manage browser history",
                  "To store key-value pairs persistently on the client-side",
                  "To execute SQL queries in a database"
              ],
              "answer": "To store key-value pairs persistently on the client-side",
              "description": "The `localStorage` object in web browsers allows web applications to store key-value pairs persistently on the client-side, even after the browser is closed."
          },
          {
              "id": 19,
              "question": "What is the difference between synchronous and asynchronous JavaScript?",
              "options": [
                  "Synchronous JavaScript executes multiple tasks simultaneously, while asynchronous JavaScript executes tasks one after another",
                  "Synchronous JavaScript blocks the main thread until a task is completed, while asynchronous JavaScript allows other tasks to run without blocking the main thread",
                  "Synchronous JavaScript is used for animations, while asynchronous JavaScript is used for data fetching",
                  "There is no difference between synchronous and asynchronous JavaScript"
              ],
              "answer": "Synchronous JavaScript blocks the main thread until a task is completed, while asynchronous JavaScript allows other tasks to run without blocking the main thread",
              "description": "Synchronous JavaScript executes tasks in sequence, blocking the main thread until each task is completed. In contrast, asynchronous JavaScript allows tasks to be executed independently, allowing the main thread to continue running other tasks."
          },
          {
              "id": 20,
              "question": "What does the term 'Hoisting' refer to in JavaScript?",
              "options": [
                  "A technique for lifting heavy objects in functions",
                  "The process of moving variable and function declarations to the top of their containing scope",
                  "A method for optimizing code execution",
                  "A strategy for handling error exceptions"
              ],
              "answer": "The process of moving variable and function declarations to the top of their containing scope",
              "description": "Hoisting in JavaScript refers to the behavior of moving variable and function declarations to the top of their containing scope during the compilation phase, allowing them to be used before they are declared."
          },
          {
              "id": 21,
              "question": "What is the purpose of the `addEventListener` method in JavaScript?",
              "options": [
                  "To manipulate DOM elements directly",
                  "To register event handlers for DOM elements",
                  "To perform AJAX requests",
                  "To create animations on a web page"
              ],
              "answer": "To register event handlers for DOM elements",
              "description": "The `addEventListener` method in JavaScript is used to attach an event listener (a function) to a DOM element, allowing the execution of custom code in response to specific events (such as clicks, keypresses, etc.)."
          },
          {
              "id": 22,
              "question": "What is the purpose of the `try...catch` statement in JavaScript?",
              "options": [
                  "To execute code repeatedly based on a condition",
                  "To handle asynchronous operations",
                  "To catch and handle errors that occur during code execution",
                  "To declare variables and functions"
              ],
              "answer": "To catch and handle errors that occur during code execution",
              "description": "The `try...catch` statement in JavaScript allows developers to handle errors that may occur during code execution, preventing the application from crashing and providing a way to gracefully manage exceptions."
          },
          {
              "id": 23,
              "question": "What does the term 'DOM' stand for in web development?",
              "options": [
                  "Document Object Model",
                  "Dynamic Object Model",
                  "Data Object Model",
                  "Digital Object Model"
              ],
              "answer": "Document Object Model",
              "description": "The DOM (Document Object Model) in web development is a programming interface that represents the structure of a web page as a tree of objects, allowing scripts to dynamically access and manipulate page content."
          },
          {
              "id": 24,
              "question": "What is the purpose of the `setTimeout` function in JavaScript?",
              "options": [
                  "To add a delay before executing a function",
                  "To stop the execution of a function",
                  "To repeat a function at regular intervals",
                  "To handle AJAX requests"
              ],
              "answer": "To add a delay before executing a function",
              "description": "The `setTimeout` function in JavaScript is used to schedule the execution of a function after a specified delay (in milliseconds). It allows developers to introduce delays in code execution or create timed events."
          },
          {
            "id": 26,
            "question": "What is the purpose of JavaScript in web development?",
            "options": [
              "Styling web pages",
              "Defining data structures",
              "Enhancing interactivity",
              "Creating server-side logic"
            ],
            "answer": "Enhancing interactivity",
            "description": "JavaScript is used to add interactivity and behavior to web pages. It allows for dynamic updates, form validation, animations, and much more."
          },
          {
            "id": 27,
            "question": "What does DOM stand for in web development?",
            "options": [
              "Document Object Model",
              "Data Object Module",
              "Design Object Model",
              "Display Object Management"
            ],
            "answer": "Document Object Model",
            "description": "The DOM represents the structure of a document as a tree of objects, allowing JavaScript to interact with HTML and XML elements."
          },
          {
            "id": 28,
            "question": "What is the purpose of a CSS framework?",
            "options": [
              "To define server-side logic",
              "To create database schemas",
              "To provide pre-designed styles and layout",
              "To manage HTTP requests"
            ],
            "answer": "To provide pre-designed styles and layout",
            "description": "CSS frameworks offer pre-built styles and components to facilitate rapid web development and ensure consistent design across applications."
          },
          {
            "id": 29,
            "question": "What is a responsive web design?",
            "options": [
              "A design that responds to user input",
              "A design optimized for touch devices",
              "A design that adapts to different screen sizes",
              "A design using advanced JavaScript libraries"
            ],
            "answer": "A design that adapts to different screen sizes",
            "description": "Responsive web design aims to provide an optimal viewing experience across various devices and screen sizes by adjusting layout and content."
          },
          {
            "id": 30,
            "question": "What is the role of a back-end developer?",
            "options": [
              "Designing user interfaces",
              "Managing server-side logic and databases",
              "Creating animations and effects",
              "Testing web applications"
            ],
            "answer": "Managing server-side logic and databases",
            "description": "Back-end developers focus on server-side programming, handling databases, APIs, and business logic to support the functionality of web applications."
          },
          {
            "id": 31,
            "question": "What is the purpose of SQL in web development?",
            "options": [
              "To style web pages",
              "To manage server-side databases",
              "To create interactive user interfaces",
              "To handle client-side scripting"
            ],
            "answer": "To manage server-side databases",
            "description": "SQL (Structured Query Language) is used to manage and query databases, enabling web applications to store and retrieve data efficiently."
          },
          {
            "id": 32,
            "question": "What is the primary role of HTML5?",
            "options": [
              "To provide server-side logic",
              "To enhance client-side interactivity",
              "To define the structure of web pages",
              "To style web elements"
            ],
            "answer": "To define the structure of web pages",
            "description": "HTML5 is a markup language used to define the structure of content on the web, including text, images, and multimedia elements."
          },
          {
            "id": 33,
            "question": "What does API stand for in web development?",
            "options": [
              "Advanced Programming Interface",
              "Application Programming Interface",
              "Automated Page Interaction",
              "Advanced Parameter Injection"
            ],
            "answer": "Application Programming Interface",
            "description": "An API allows different software systems to communicate and interact with each other, enabling developers to access specific features or data."
          },
          {
            "id": 34,
            "question": "What is the purpose of version control systems like Git?",
            "options": [
              "To manage server hardware",
              "To track changes in code and collaborate on projects",
              "To optimize database performance",
              "To automate front-end testing"
            ],
            "answer": "To track changes in code and collaborate on projects",
            "description": "Version control systems like Git track changes to code, facilitate collaboration among developers, and enable rollback to previous versions."
          },
          {
            "id": 35,
            "question": "What is the role of a UX designer?",
            "options": [
              "Writing server-side scripts",
              "Optimizing database queries",
              "Designing user interfaces and experiences",
              "Managing network infrastructure"
            ],
            "answer": "Designing user interfaces and experiences",
            "description": "UX (User Experience) designers focus on creating intuitive, efficient, and enjoyable user interfaces and experiences for web applications."
          },
          {
            "id": 36,
            "question": "What is SEO?",
            "options": [
              "Server Engine Operation",
              "Structured Environment Optimization",
              "Search Engine Optimization",
              "Software Encryption Operation"
            ],
            "answer": "Search Engine Optimization",
            "description": "SEO involves strategies and techniques to improve a website's visibility and ranking on search engine results pages, increasing organic traffic."
          },
          {
            "id": 37,
            "question": "What is the purpose of a CDN (Content Delivery Network)?",
            "options": [
              "To manage client-side scripts",
              "To optimize database performance",
              "To serve web content efficiently to users worldwide",
              "To style web elements"
            ],
            "answer": "To serve web content efficiently to users worldwide",
            "description": "CDNs distribute web content across multiple servers worldwide to deliver it quickly and efficiently to users, reducing latency and improving performance."
          },
          {
            "id": 38,
            "question": "What is the purpose of unit testing?",
            "options": [
              "To design user interfaces",
              "To test individual components or functions",
              "To optimize database performance",
              "To handle server-side logic"
            ],
            "answer": "To test individual components or functions",
            "description": "Unit testing involves testing individual components or functions of code to ensure they work correctly in isolation, aiding in identifying and fixing bugs."
          },
          {
            "id": 39,
            "question": "What is the role of a front-end developer?",
            "options": [
              "Optimizing database queries",
              "Designing user interfaces and experiences",
              "Writing server-side scripts",
              "Managing network infrastructure"
            ],
            "answer": "Designing user interfaces and experiences",
            "description": "Front-end developers specialize in creating and optimizing user interfaces and experiences using HTML, CSS, and JavaScript, ensuring a responsive and visually appealing web application."
          },
          {
            "id": 40,
            "question": "What is the purpose of cross-browser testing?",
            "options": [
              "To optimize server performance",
              "To ensure compatibility and consistency across different web browsers",
              "To manage client-side scripts",
              "To enhance network security"
            ],
            "answer": "To ensure compatibility and consistency across different web browsers",
            "description": "Cross-browser testing checks whether a web application functions correctly and displays consistently across various web browsers, ensuring a positive user experience for all users."
          },
          {
            "id": 41,
            "question": "What does HTTP stand for?",
            "options": [
              "HyperText Transfer Protocol",
              "High-Tech Transfer Process",
              "HyperTransfer Text Process",
              "Home Technology Transfer Protocol"
            ],
            "answer": "HyperText Transfer Protocol",
            "description": "HTTP is the foundation of data communication on the World Wide Web, defining how messages are formatted and transmitted between web browsers and servers."
          },
          {
            "id": 42,
            "question": "What is the purpose of responsive images in web development?",
            "options": [
              "To manage server-side logic",
              "To optimize database performance",
              "To ensure images display correctly on different devices and screen sizes",
              "To style web elements"
            ],
            "answer": "To ensure images display correctly on different devices and screen sizes",
            "description": "Responsive images adapt and scale based on the device and screen size, optimizing load times and visual quality across various devices and resolutions."
          },
          {
            "id": 43,
            "question": "What is the role of a database administrator (DBA)?",
            "options": [
              "Designing user interfaces",
              "Managing and maintaining databases",
              "Writing client-side scripts",
              "Testing web applications"
            ],
            "answer": "Managing and maintaining databases",
            "description": "Database administrators are responsible for designing, implementing, and maintaining databases, ensuring data security, integrity, and performance."
          },
          {
            "id": 44,
            "question": "What is the purpose of a CSS preprocessor?",
            "options": [
              "To enhance client-side interactivity",
              "To create server-side logic",
              "To generate CSS from enhanced syntax",
              "To manage database queries"
            ],
            "answer": "To generate CSS from enhanced syntax",
            "description": "CSS preprocessors like Sass or Less allow developers to use enhanced syntax to write CSS more efficiently, which is then compiled into standard CSS for browser use."
          },
          {
            "id": 45,
            "question": "What is the role of a software architect?",
            "options": [
              "Designing user interfaces",
              "Developing front-end components",
              "Defining the overall structure and interaction of software systems",
              "Testing individual functions"
            ],
            "answer": "Defining the overall structure and interaction of software systems",
            "description": "Software architects design the high-level structure of software systems, defining components, interfaces, and interactions to ensure scalability, performance, and maintainability."
          },
          {
            "id": 46,
            "question": "What is the purpose of a cookie in web development?",
            "options": [
              "To manage server-side databases",
              "To store user data on the client-side",
              "To optimize front-end performance",
              "To create interactive user interfaces"
            ],
            "answer": "To store user data on the client-side",
            "description": "Cookies are used to store small pieces of data on the client's browser, enabling websites to remember user preferences, track sessions, and personalize content."
          },
          {
            "id": 47,
            "question": "What is the difference between HTTP and HTTPS?",
            "options": [
              "HTTP is a more secure version of HTTPS",
              "HTTP uses SSL/TLS encryption, HTTPS does not",
              "HTTP transmits data in plain text, HTTPS encrypts data",
              "There is no difference; they are interchangeable protocols"
            ],
            "answer": "HTTP transmits data in plain text, HTTPS encrypts data",
            "description": "HTTP (HyperText Transfer Protocol) transmits data in plain text, while HTTPS (HyperText Transfer Protocol Secure) encrypts data using SSL/TLS, providing secure communication over the internet."
          },
          {
            "id": 48,
            "question": "What is the purpose of a microservice architecture?",
            "options": [
              "To consolidate all services into a single monolithic application",
              "To break down applications into smaller, independent services",
              "To optimize database performance",
              "To manage client-side scripting"
            ],
            "answer": "To break down applications into smaller, independent services",
            "description": "Microservice architecture divides applications into smaller, independent services that can be deployed, updated, and scaled individually, promoting flexibility, scalability, and resilience."
          },
          {
            "id": 49,
            "question": "What is the role of a product manager?",
            "options": [
              "Optimizing database performance",
              "Defining product vision and strategy",
              "Designing user interfaces and experiences",
              "Writing server-side scripts"
            ],
            "answer": "Defining product vision and strategy",
            "description": "Product managers define the vision, strategy, and roadmap for a product, working with cross-functional teams to deliver solutions that meet user needs and business goals."
          },
          {
            "id": 50,
            "question": "What is the purpose of a CDN (Content Delivery Network)?",
            "options": [
              "To manage client-side scripts",
              "To optimize database performance",
              "To serve web content efficiently to users worldwide",
              "To style web elements"
            ],
            "answer": "To serve web content efficiently to users worldwide",
            "description": "CDNs distribute web content across multiple servers worldwide to deliver it quickly and efficiently to users, reducing latency and improving performance."
          },
          {
            "id": 51,
            "question": "Who developed the theory of relativity?",
            "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            "answer": "Albert Einstein",
            "description": "Albert Einstein developed the theory of relativity, which revolutionized our understanding of space, time, and gravity."
          },
          {
            "id": 52,
            "question": "What is the smallest country in the world?",
            "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
            "answer": "Vatican City",
            "description": "Vatican City is the smallest independent state in the world by both area and population."
          },
          {
            "id": 53,
            "question": "What is the main ingredient in guacamole?",
            "options": ["Avocado", "Tomato", "Onion", "Lime"],
            "answer": "Avocado",
            "description": "Avocado is the primary ingredient in guacamole, a popular Mexican dip."
          },
          {
            "id": 54,
            "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
            "options": ["Mars", "Venus", "Mercury", "Jupiter"],
            "answer": "Venus",
            "description": "Venus is often referred to as the 'Morning Star' when it appears in the east before sunrise, or the 'Evening Star' when it appears in the west after sunset."
          },
          {
            "id": 55,
            "question": "Who wrote 'The Great Gatsby'?",
            "options": ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "J.D. Salinger"],
            "answer": "F. Scott Fitzgerald",
            "description": "'The Great Gatsby' is a novel written by F. Scott Fitzgerald, capturing the spirit of the Jazz Age in America."
          },
          {
            "id": 56,
            "question": "What is the capital of Australia?",
            "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            "answer": "Canberra",
            "description": "Canberra is the capital city of Australia, located in the Australian Capital Territory."
          },
          {
            "id": 57,
            "question": "Who painted the Mona Lisa?",
            "options": ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
            "answer": "Leonardo da Vinci",
            "description": "The Mona Lisa was painted by Leonardo da Vinci, one of the most famous artists of the Renaissance period."
          },
          {
            "id": 58,
            "question": "Which bird is known for its ability to mimic human speech?",
            "options": ["Parrot", "Crow", "Eagle", "Pigeon"],
            "answer": "Parrot",
            "description": "Parrots are known for their intelligence and ability to mimic human speech, making them popular pets."
          },
          {
            "id": 59,
            "question": "What is the currency of Japan?",
            "options": ["Yuan", "Yen", "Won", "Dollar"],
            "answer": "Yen",
            "description": "The currency of Japan is the Japanese Yen (JPY), represented by the ¥ symbol."
          },
          {
            "id": 60,
            "question": "Which country is famous for the Taj Mahal?",
            "options": ["India", "Egypt", "Turkey", "China"],
            "answer": "India",
            "description": "The Taj Mahal, a world-renowned monument, is located in India and is considered a symbol of love and architectural beauty."
          },
          {
            "id": 61,
            "question": "What is the largest ocean on Earth?",
            "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            "answer": "Pacific Ocean",
            "description": "The Pacific Ocean is the largest and deepest ocean on Earth, covering more area than all the continents combined."
          },
          {
            "id": 62,
            "question": "Who was the first person to set foot on the moon?",
            "options": ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
            "answer": "Neil Armstrong",
            "description": "Neil Armstrong was the first human to set foot on the moon during NASA's Apollo 11 mission in 1969."
          },
          {
            "id": 63,
            "question": "Which musical instrument has black and white keys?",
            "options": ["Violin", "Flute", "Guitar", "Piano"],
            "answer": "Piano",
            "description": "The piano is a musical instrument with black and white keys that produce sounds when pressed."
          },
          {
            "id": 64,
            "question": "Who invented the telephone?",
            "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
            "answer": "Alexander Graham Bell",
            "description": "Alexander Graham Bell is credited with inventing the telephone, which revolutionized communication."
          },
          {
            "id": 65,
            "question": "Which planet is known as the 'Red Planet'?",
            "options": ["Mars", "Venus", "Jupiter", "Mercury"],
            "answer": "Mars",
            "description": "Mars is often referred to as the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface."
          },
          {
            "id": 66,
            "question": "What is the chemical symbol for gold?",
            "options": ["Go", "Ag", "Au", "Pb"],
            "answer": "Au",
            "description": "The chemical symbol for gold is Au, derived from the Latin word 'aurum'."
          },
          {
            "id": 67,
            "question": "Which country is known as the 'Land of the Rising Sun'?",
            "options": ["China", "Japan", "India", "Australia"],
            "answer": "Japan",
            "description": "Japan is often referred to as the 'Land of the Rising Sun' due to its location and historical significance."
          },
          {
            "id": 68,
            "question": "What is the tallest mountain in the world?",
            "options": ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "K2"],
            "answer": "Mount Everest",
            "description": "Mount Everest, located in the Himalayas, is the tallest mountain in the world, measured from sea level to its summit."
          },
          {
            "id": 69,
            "question": "Who painted the ceiling of the Sistine Chapel?",
            "options": ["Vincent van Gogh", "Michelangelo", "Leonardo da Vinci", "Pablo Picasso"],
            "answer": "Michelangelo",
            "description": "Michelangelo painted the iconic ceiling of the Sistine Chapel in Vatican City, showcasing his mastery of art and anatomy."
          },
          {
            "id": 70,
            "question": "Which gas is most abundant in the Earth's atmosphere?",
            "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
            "answer": "Nitrogen",
            "description": "Nitrogen is the most abundant gas in the Earth's atmosphere, making up approximately 78% of the air we breathe."
          },
          {
            "id": 71,
            "question": "What is the chemical symbol for water?",
            "options": ["H2O", "CO2", "NaCl", "O2"],
            "answer": "H2O",
            "description": "The chemical formula for water is H2O, consisting of two hydrogen atoms and one oxygen atom."
          },
          {
            "id": 72,
            "question": "Who wrote 'Romeo and Juliet'?",
            "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            "answer": "William Shakespeare",
            "description": "'Romeo and Juliet' is a tragedy written by William Shakespeare, depicting the story of two young lovers from feuding families."
          },
          {
            "id": 73,
            "question": "What is the largest mammal in the world?",
            "options": ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
            "answer": "Blue whale",
            "description": "The blue whale is the largest mammal on Earth, known for its immense size and aquatic lifestyle."
          },
          {
            "id": 74,
            "question": "Which country hosted the 2016 Summer Olympics?",
            "options": ["United States", "Brazil", "China", "Russia"],
            "answer": "Brazil",
            "description": "Brazil hosted the 2016 Summer Olympics in Rio de Janeiro, showcasing sports and culture on a global stage."
          },
          {
            "id": 75,
            "question": "What is the largest desert in the world?",
            "options": ["Gobi Desert", "Sahara Desert", "Arctic Desert", "Kalahari Desert"],
            "answer": "Sahara Desert",
            "description": "The Sahara Desert is the largest hot desert in the world, covering vast areas of North Africa."
          },
          {
            "id": 76,
            "question": "Who discovered penicillin?",
            "options": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"],
            "answer": "Alexander Fleming",
            "description": "Alexander Fleming discovered penicillin, the first widely used antibiotic that revolutionized medicine."
          },
          {
            "id": 77,
            "question": "What is the capital of Canada?",
            "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            "answer": "Ottawa",
            "description": "Ottawa is the capital city of Canada, located in the province of Ontario."
          },
          {
            "id": 78,
            "question": "Who wrote '1984'?",
            "options": ["George Orwell", "J.K. Rowling", "F. Scott Fitzgerald", "H.G. Wells"],
            "answer": "George Orwell",
            "description": "'1984' is a dystopian novel written by George Orwell, depicting a totalitarian society ruled by surveillance and control."
          },
          {
            "id": 79,
            "question": "Which organ is responsible for pumping blood throughout the body?",
            "options": ["Kidney", "Liver", "Heart", "Brain"],
            "answer": "Heart",
            "description": "The heart is a vital organ that pumps blood throughout the body, delivering oxygen and nutrients to cells."
          },
          {
            "id": 80,
            "question": "Who is known as the 'Father of Modern Physics'?",
            "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
            "answer": "Albert Einstein",
            "description": "Albert Einstein is often regarded as the 'Father of Modern Physics' for his groundbreaking contributions to the field of theoretical physics."
          },
          {
            "id": 81,
            "question": "Which country is famous for the Eiffel Tower?",
            "options": ["Germany", "Italy", "France", "Spain"],
            "answer": "France",
            "description": "The Eiffel Tower is located in Paris, France, and is an iconic symbol of the country."
          },
          {
            "id": 82,
            "question": "What is the capital of China?",
            "options": ["Shanghai", "Hong Kong", "Beijing", "Guangzhou"],
            "answer": "Beijing",
            "description": "Beijing is the capital city of China, known for its rich history, culture, and modern development."
          },
          {
            "id": 83,
            "question": "Who is the author of 'The Catcher in the Rye'?",
            "options": ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Harper Lee"],
            "answer": "J.D. Salinger",
            "description": "'The Catcher in the Rye' is a novel written by J.D. Salinger, exploring themes of alienation and teenage angst."
          },
          {
            "id": 84,
            "question": "Which continent is known as the 'Dark Continent'?",
            "options": ["Asia", "Europe", "Africa", "South America"],
            "answer": "Africa",
            "description": "Africa is often referred to as the 'Dark Continent' due to its historical mysteries and unexplored territories by early European explorers."
          },
          {
            "id": 85,
            "question": "What is the largest country by land area?",
            "options": ["United States", "Russia", "China", "Canada"],
            "answer": "Russia",
            "description": "Russia is the largest country in the world by land area, spanning across two continents: Europe and Asia."
          },
          {
            "id": 86,
            "question": "Who invented the light bulb?",
            "options": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
            "answer": "Thomas Edison",
            "description": "Thomas Edison is credited with inventing the practical incandescent light bulb, revolutionizing indoor lighting."
          },
          {
            "id": 87,
            "question": "Which language is spoken in Brazil?",
            "options": ["Spanish", "French", "Portuguese", "Italian"],
            "answer": "Portuguese",
            "description": "Portuguese is the official language of Brazil, spoken by the majority of the population."
          },
          {
            "id": 88,
            "question": "What is the chemical symbol for sodium?",
            "options": ["Sa", "So", "Sn", "Na"],
            "answer": "Na",
            "description": "The chemical symbol for sodium is Na, derived from the Latin word 'natrium'."
          },
          {
            "id": 89,
            "question": "Who wrote 'The Great Gatsby'?",
            "options": ["F. Scott Fitzgerald", "Ernest Hemingway", "J.K. Rowling", "Charles Dickens"],
            "answer": "F. Scott Fitzgerald",
            "description": "'The Great Gatsby' is a novel written by F. Scott Fitzgerald, exploring themes of wealth, love, and the American Dream."
          },
          {
            "id": 90,
            "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
            "options": ["Venus", "Mars", "Jupiter", "Mercury"],
            "answer": "Venus",
            "description": "Venus is often referred to as the 'Morning Star' or 'Evening Star' due to its visibility in the sky during certain times of the day."
          },
          {
            "id": 91,
            "question": "What is the currency of the United Kingdom?",
            "options": ["Euro", "Pound Sterling", "Dollar", "Franc"],
            "answer": "Pound Sterling",
            "description": "The currency of the United Kingdom is the Pound Sterling (£), often symbolized as GBP."
          },
          {
            "id": 92,
            "question": "Which planet is known as the 'Blue Planet'?",
            "options": ["Mars", "Venus", "Earth", "Jupiter"],
            "answer": "Earth",
            "description": "Earth is often referred to as the 'Blue Planet' due to the abundance of water that gives it a blue appearance from space."
          },
          {
            "id": 93,
            "question": "Who is the author of 'To Kill a Mockingbird'?",
            "options": ["Harper Lee", "John Steinbeck", "William Faulkner", "Toni Morrison"],
            "answer": "Harper Lee",
            "description": "'To Kill a Mockingbird' is a novel written by Harper Lee, addressing themes of racial injustice and moral growth."
          },
          {
            "id": 94,
            "question": "What is the largest continent by land area?",
            "options": ["North America", "South America", "Asia", "Europe"],
            "answer": "Asia",
            "description": "Asia is the largest continent in terms of land area, spanning across diverse regions and countries."
          },
          {
            "id": 95,
            "question": "Which element has the chemical symbol 'Fe'?",
            "options": ["Iron", "Gold", "Silver", "Copper"],
            "answer": "Iron",
            "description": "Iron is represented by the chemical symbol Fe, derived from the Latin word 'ferrum'."
          },
          {
            "id": 96,
            "question": "Who founded Microsoft?",
            "options": ["Bill Gates", "Steve Jobs", "Larry Page", "Mark Zuckerberg"],
            "answer": "Bill Gates",
            "description": "Bill Gates co-founded Microsoft, a multinational technology company known for its software products and services."
          },
          {
            "id": 97,
            "question": "What is the largest river in the world by discharge volume?",
            "options": ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
            "answer": "Amazon River",
            "description": "The Amazon River has the largest discharge volume of any river in the world, flowing through South America."
          },
          {
            "id": 98,
            "question": "Who is the author of 'Pride and Prejudice'?",
            "options": ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Charles Dickens"],
            "answer": "Jane Austen",
            "description": "'Pride and Prejudice' is a novel written by Jane Austen, exploring themes of social class, love, and morality."
          },
          {
            "id": 99,
            "question": "Which country is known as the 'Land of the Midnight Sun'?",
            "options": ["Norway", "Sweden", "Finland", "Iceland"],
            "answer": "Norway",
            "description": "Norway is often referred to as the 'Land of the Midnight Sun' due to its location above the Arctic Circle, where the sun remains visible even at midnight during summer."
          },
          {
            "id": 100,
            "question": "What is the largest species of big cat?",
            "options": ["Lion", "Tiger", "Leopard", "Cheetah"],
            "answer": "Tiger",
            "description": "The tiger is the largest species of big cat, known for its size, strength, and distinctive striped coat."
          }
          

    // Add more questions here...
];
  res.json(questions);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
