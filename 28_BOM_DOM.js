//  BOM & DOM are window objects
//      BOM :- Browser Object Model
//      DOM :- Document Object Model 
//              represent the page content as html
//  it shows your html page in document tree model
//     WINDOW IS GLOBAL OBJECT    ---> EVERYTHING COMES UNDER THE WINDOW OBJECT
//                            ----------
//                            ! window !
//                            ---------
//                         /      !      \
//                        /       !       \
//                       /        !        \
//                     DOM       BOM      JAVASCRIPT CORE

console.log(document)
document.body.style.background = " yellow"   
//  basically you can manipulate html code use dom

// ----------------------------------------------------------------------------------------------------------------------
//      BOM :- Browser Object Model
//  represents the additonal object model provided by browser ( host environment ) for working with everything
//  except the document
//  the function prompt , alert , confirm are part of BOM
// Bom is used to redirect to the url page
location.href = " https://google.com"

