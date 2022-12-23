
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @param  {number} number data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text==='exit\n') {
    quit();
   
  }
  else if(text.startsWith('hello')){
    hello(text);
   
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else if(text.startsWith("add")){
    add(text);
  }
  // else if(text === 'remove\n'){
  // remove_last_elt();
  // }
   else if(text.startsWith("remove")){
    remove(text);
    }

  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */

function hello(text){
  console.log(text.trim()+"!")
}
/**
 * this function is supposed to run all the commands
 */
function help(){
  console.log('help!\n' + 'hello you can write anything you want!\n' + 'quit!' +'list' +'add'+'remove')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
let list1=["aya","maryam"];
function list(){
list1.map((el)=>
  console.log(list1.indexOf(el)+1 +" "+ el));
}
/**  add the element
 * @param  {string} c 
* @returns {void}
*/
function add(text){
  list1.push(text.substring(3));
  
}

// /** 
// * @param  {string} c 
// * @returns {void}
// */
// function  remove_last_elt(){
//   list1.shift();
// }
/** 
* @param  {string} c 
* @returns {void}
*/
 function remove(text){
   if(text === "remove\n"){
    list1.splice(-1);
   }
     else if (text === 'remove1\n'){
      list1.splice(0,1);
     }
     else if (text === 'remove2\n'){
      list1.splice(1,1);
     }
 }
// The following line starts the application
startApp("Aya")
