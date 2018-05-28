
// check what type of method is passing as an argument
method=process.argv[2];
const json=require('./helper/json.js');
arguments=process.argv;
if(arguments.length>3)
  var key=arguments[3];// assume the user put the third argument as key
if(arguments.length>4)
  var value=arguments[4];// assume the user enter the 4th argument as value
switch (method) {
  case 'addKey':
    if(arguments.length==5)
    {
      json.addKey(key,value);
    }
    else {
      console.log('The structure you provided does not match the default format.');
      console.log('You should have the key value as the forth and fifth arguments.');
    }
    break;
    case 'updateValue':
    if(arguments.length==5)
    {
      json.updateValue(key,value);
    }
    else {
      console.log('The structure you provided does not match the default format.');
      console.log('You should have the key value as the forth and fifth arguments.');
    }
    break;
    case 'list':
      json.printList();
    break;
    case 'fetchKey':
    if(arguments.length==4)
    {
        value=arguments[3];
        json.fetchKey(value);
    }
    else {
      console.log('The structure you provided does not match the default format.');
      console.log('You should have the value as the forth argument.');
    }
    break;
    case 'fetchValue':
    if(arguments.length==4)
    {
        key=arguments[3];
        json.fetchValue(key);
    }
    else {
      console.log('The structure you provided does not match the default format.');
      console.log('You should have the key as the forth argument.');
    }
    break;
    case 'removeItem':
    if(arguments.length==4)
    {
        key=arguments[3];
        json.removeItem(key);
    }
    else {
      console.log('The structure you provided does not match the default format.');
      console.log('You should have the key as the forth argument.');
    }
    break;
  default:
    json.help();
}
