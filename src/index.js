/*
  To Do List Application 

  by JAS
  created 11/02/2021

  Revisions
  0.01 - PENDING 
*/
// import placeholder (not used yet)
// import { library } from 'webpack';
import './css/styles.css';
import { user, todoItem} from './dataModel.js';

const DEFAULT_NUM_PROJ = 2; // placeholder to fill map with 'dummy' objects
const DEFAULT_NUM_TASKS_PER_PROJ = 3;
const DEFAULT_PROJECT = 'Default Project';

// temp JSON for initialization
const defaultKey = DEFAULT_PROJECT;
const defaultTask = `{"itemID":1,"projectID":2,"ownerID":3,"ownerName":"Jay","projectName":"default","itemDesc":"Insert ToDo item description here.","itemDueDate":"Due Date","itemPriority":"Priority"}`;
let projTaskArray = [];
let projArray = [];
let projectMap = new Map();

// console.log(Array.isArray(projTaskArray)); //just to check
// TEMP fill array to build the projectMap with dummy data (defaultTask JSON)
for (let i = 0; i < DEFAULT_NUM_TASKS_PER_PROJ; i++) {
  projTaskArray.push(JSON.parse(defaultTask));
}

for (let i = 0; i < DEFAULT_NUM_PROJ; i++) {
  projectMap.set((defaultKey + '_' + i), projTaskArray);
}



let outputTemp = document.getElementById('content-items');
let _ul, _li, _tp;
_tp = document.createElement('div');
_tp.classList.add('item-row');

sidebar();


// basic clear function - for clearing task/item display area
function contentClear (cElement, callback) {
  // clear contents of CONTENT div/children 
  parent = document.getElementById(cElement);
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  if (callback) callback();
}

// display the entire Map to screen (also see conditional below)
// NOT CURRENTLY USED
/*
function showAll () {
  projectMap.forEach( (value, key) => { 
    _tp.innerText += key; // header with project name
    outputTemp.appendChild(_tp);  
    for (let i = 0; i < value.length; i++) {
      _ul = document.createElement('div');
      _ul.classList.add('item-row')
      Object.keys(value[i]).forEach(_key => {      
        _li = document.createElement('div');
        _li.classList.add('item-cell');
        // conditional -- only display the items we want to see - Name, Desc, Due Date, Priority
        if ((_key === 'itemDesc') || (_key === 'itemDueDate') || (_key === 'itemPriority')) {
          _li.innerText += value[i][_key];
          _ul.appendChild(_li);
        }
      })
      _ul.innerHTML += '<br>';  // more readable this way. Probably a better way to do this with HTML/CSS/etc.
      outputTemp.appendChild(_ul);
    };
  });

}
*/

// display the project names in the sidebar
// setup click event to display project details in content-cells
function sidebar() {
  let counter = 0;
  let _sb;
  let keys = Array.from(projectMap.keys());
  let outputTemp = document.getElementById('sidebar');
  
  for (let i = 0; i < keys.length; i++) {
    console.log(counter++);
    _sb = document.createElement('div');
    _sb.classList.add('item-sidebar');
    _sb.addEventListener('click', (e) => {
      dispProjectTaskItems(keys[i])
      e.preventDefault();
    });
    _sb.innerText = keys[i];
    outputTemp.appendChild(_sb);
  }
  // if no project has been selected (i.e. first run of app) then display DEFAULT_PROJECT
  // console.log(document.getElementById('content-cells').childNodes.length);
  if (!document.getElementById('content-cells').firstChild) {
    dispProjectTaskItems();
  }
}



// display selected project items
function dispProjectTaskItems (project) {

  console.log(typeof project);
  if (document.getElementById('content-cells').firstChild) contentClear('content-cells', null);
  if (!project) project = 'Default Project';
  outputTemp = document.getElementById('content-cells');
  let topBar = document.getElementById('topbar');
  topBar.innerHTML = `<h3>To Do Items for ${project}</h3>`;
  
  projTaskArray = projectMap.get(project);
  console.log(typeof projTaskArray);
  for (let i = 0; i < projTaskArray.length; i++) {
    _ul = document.createElement('div');
    _ul.classList.add('item-row')
    Object.keys(projTaskArray[i]).forEach(_key => {      
      _li = document.createElement('div');
      _li.classList.add('item-cell');
      // TEST OK console.log(i + '   ' + value[i][_key] + '    ' + (typeof value[i][_key]) + '   ' + _key);
      // conditional -- only display the items we want to see - Name, Desc, Due Date, Priority
      if ((_key === 'itemDesc') || (_key === 'itemDueDate') || (_key === 'itemPriority')) {
        _li.innerText += projTaskArray[i][_key];
        _ul.appendChild(_li);
      }
    })
    _ul.innerHTML += '<br>';  // more readable this way. Probably a better way to do this with HTML/CSS/etc.
    outputTemp.appendChild(_ul);
  };
} 

// create a new ToDo project


// add a ToDo item to project
