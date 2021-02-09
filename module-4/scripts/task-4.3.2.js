/* 
The problem:
1. Create a program that prints details of books from a list and states whether it has been read. 
2. Create the list of books including TITLE, AUTHOR and 'already read' - ARRAY of OBJECTS.
2.If the book has been read, state 'You already read "BOOK TITLE" by AUTHOR.
3. If the book has not been read, state 'You still need to read "BOOK TITLE" by AUTHOR.

LET reading list array include multiple books.
Each book is object with properties: title, author and 'already read'.

FOR LOOP
    set book to [0] 
    break when all books looped through
    increment book by 1
IF 'already read'=== true
    print 'You already read TITLE by AUTHOR'
ELSE 
    print 'You still need to read TITLE by AUTHOR'
*/

let readingList=[{
    title:"The Bell Jar",
    author:"Sylvia Plaith",
    'already read': false
},
{ 
    title:"The Martian Chronicles",
    author:"Ray Bradbury",
    'already read':true
},
{ 
    title:"A Room with a View",
    author:"E.M. Forster",
    'already read':true
},
{ 
    title:"Company of Liars",
    author:"Karen Maitland",
    'already read':false
},
{ 
    title:"Brick Lane",
    author:"Monica Ali",
    'already read':false
}];
function readOrNot(array){
    for (let selection=0; selection<array.length; selection++){
        if (array[selection]["already read"]===true){
            console.log(`You already read ${array[selection].title} by ${array[selection].author}`);
        } else {
            console.log(`You still need to read ${array[selection].title} by ${array[selection].author}`);
        };
    };
} 
readOrNot(readingList);