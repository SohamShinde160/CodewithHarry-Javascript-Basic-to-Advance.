// Chapter_7_Practice_Set

// que1. Create a navbar & change the color of first element to red 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// que2. create a table without the tbody . now use "view page source" button to check whether it has tbody tag or not ?
//  ---> in "view page source" there is no tbody tag but in "inspect"  there is tbody tag
//  ---> "view page source" ---> shows raw data
//  --->  " inspect" ---> shows rendered data

// que3. create an element with 3 children & change color of 1st and last child to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

//  que4. write a javascript program to change the background color of all <li> tags to cyan
Array.from(document.getElementsByTagName("li")).forEach((Element) => {
    Element.style.background="red"
})

