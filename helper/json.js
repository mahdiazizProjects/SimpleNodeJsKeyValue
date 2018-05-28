// add // NOTE: This class is used as a helper for node key/value main class.
const fs=require('fs');

// to add key/value to the list, use this function
var addKey=(key,value)=>{
  var kv={
    key,
    value
  };

var hashmap=retrieveHelper();
// check if there is any duplicate key
  var duplicateKeys=hashmap.filter((kv)=>kv.key==key);

  if(duplicateKeys.length==0)
  {
    hashmap.push(kv);
    fs.writeFileSync('keyvalues.json',JSON.stringify(hashmap));
    console.log('An item has been successfully added to the list.');
  }
  else {
    console.log('An item with same key already exist in the list.');
    console.log('If you would like to update the key use updateValue switch.');
  }

};
// to update the value of an item, use this function
var updateValue=(key,value)=>{


  var kv={
    key,
    value
  };
var hashmap=retrieveHelper();
if(hashmap.length===0)
{
  console.log('The list is empty!');
  return;
}
updateVal(key, value);
fs.writeFileSync('keyvalues.json',JSON.stringify(hashmap));

// if(updateVal.length==0){
//   console.log(`The item with the key ${key} is successfully updated`);
// }
};
// this function is a helper function for updateValue function
var updateVal = (key, value)=> {
    flagUpdate=0;
    hashmap.forEach(function(kv) {
        kv.key === key && (kv.value = value)&&(flagUpdate=1);
    });
    if(flagUpdate===0){
      console.log('No item has been updated!');
    }else {
      console.log(`The item with key ${key} has been successfully updated.`);
    }
};
// To print the list, use this function
var printList = ()=> {
    var hashmap=retrieveHelper();
    if(hashmap.length==0)
    {
      console.log('There is no item in the list.');
    }
    else
    {
      var ii=0;
      hashmap.forEach(function(kv) {
          console.log(`The key is "${kv.key}" and the value is "${kv.value}" for item ${++ii}.`);
      });
    }
};

var retrieveHelper=()=>{
  hashmap=[];
  try {
    var hashmapString=fs.readFileSync('keyvalues.json');
    hashmap=JSON.parse(hashmapString);
  } catch (e) {

  }
  return hashmap;
}
// to remove an item, use this function with the input key
var removeKey=(key)=>{

  console.log(`The item with "${key}" has been successfully removed from the list.`);
};
var addList=(list)=>{
console.log('agef');
};

var help=()=>{
  console.log('Welcome to a simple key/value app');
  console.log('To add an item in the list, please use the keyword "addKey" followed by the key and value arguments.');
  console.log('To print all the items in the list, please use the keyword "list".');
  console.log('To update an item value, please use the keyword "updateKey" followed by the key and value arguments.');
  console.log('To fetch an item key, please use the keyword "fetchKey" followed by the value argument.');
  console.log('To fetch an item value, please use the keyword "fetchValue" followed by the key argument.');
  console.log('To remove an item, please use the keyword "removeItem" followed by the key argument.');
}
var fetchKey=(value)=>{
  var hashmap=retrieveHelper();
  if(hashmap.length===0)
  {
    console.log('The list is empty!');
    return;
  }
  var flagExistance=0;
  var key=[];
  hashmap.forEach(function(kv){
    kv.value === value && (key.push(kv.key))&&(flagExistance=1);
  });
  if(flagExistance===1){
    key.forEach(function(Key){
      console.log(`The item key for "${value}" value is "${Key}".`);
    });
  }
  else {
    console.log('The item was not found!');
  }
};
var fetchValue=(key)=>{
  var hashmap=retrieveHelper();
  if(hashmap.length===0)
  {
    console.log('The list is empty!');
    return;
  }
  var flagExistance=0;
  var value;
  hashmap.forEach(function(kv){
    kv.key === key && (value=kv.value)&&(flagExistance=1);
  });
  if(flagExistance===1){

    console.log(`The item value for key "${key}" is "${value}".`);
  }
  else {
    console.log('The item was not found!');
  }
};
var removeItem=(key)=>{
  var hashmap=retrieveHelper();
  if(hashmap.length===0)
  {
    console.log('The list is empty!');
    return;
  }
  var l1=hashmap.length;
  removeHelper(hashmap,key);
  if(hashmap.length!==l1)
  {
    console.log(`The item with the key "${key}" has successfully been removed.`);
  }
  else{
    console.log('No item was removed.');
  }
  try {
    fs.writeFileSync('keyvalues.json',JSON.stringify(hashmap));
  } catch (e) {
    console.log('An error occurred during saving the keyvalues.json file');
  }
};
removeHelper=(hashmap, key)=> {
      for(var i = hashmap.length; i--;) {
          if(hashmap[i].key === key) {
              hashmap.splice(i, 1);
          }
      }
  };
module.exports={
  addKey,
  removeKey,
  addList,
  updateValue,
  printList,
  fetchKey,
  fetchValue,
  removeItem,
  help
};
