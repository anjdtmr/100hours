// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
// DID NOT ABLE TO ANSWER IT MYSELF. BUT TYPED IT A LOT OF TIMES

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree",
  () => alert("You agreed."),
  () => alert("You cancelled the execution.")
);
