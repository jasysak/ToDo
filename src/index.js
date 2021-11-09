/*
  To Do List Application 

  by JAS
  created 11/02/2021

  Revisions
  0.01 - Most basic functionality 
*/

import './css/styles.css';
import { user, todoItem} from './dataModel.js'; // user not used yet

const DEFAULT_NUM_PROJ = 2; // placeholder to fill map with 'dummy' objects
const DEFAULT_NUM_TASKS_PER_PROJ = 6;
const DEFAULT_PROJECT = 'Default Project';

// temp JSON for initialization
const defaultKey = DEFAULT_PROJECT;
const defaultTask = `{"itemID":1,"projectID":2,"ownerID":3,"ownerName":"Jay","projectName":"default","itemDesc":"Insert ToDo item description here.","itemDueDate":"Due Date","itemPriority":"Priority"}`;

// basic clear function - for clearing any/all div display area children
function contentClear (clearElement, callback) {
  while (clearElement.firstChild) {
    clearElement.removeChild(clearElement.firstChild);
  }
  if (callback) callback();
}

// toggle modal helper function. Pass the main modal element to toggle vis/non-vis
function toggleModal(modalType) {
  let modal; // the modal we want to toggle
  modal = document.getElementById(modalType); 
  if (modal.classList.contains('modal-vis')) modal.classList.remove('modal-vis');
  else modal.classList.add('modal-vis');
}

// display the entire Map to screen (also see conditional below)   NOT CURRENTLY USED
/* NOT USED !!!
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
  let _sb;
  let keys = Array.from(projectMap.keys());
  let outputTemp = document.getElementById('sidebar');
  if (outputTemp) contentClear(outputTemp, null);  // if a sidebar exists, clear and re-draw
  for (let i = 0; i < keys.length; i++) {
    _sb = document.createElement('div');
    _sb.classList.add('item-sidebar');
    _sb.addEventListener('click', (e) => {
      dispProjectTaskItems(keys[i])
      e.preventDefault();
    });
    _sb.innerText = keys[i] + '_' + i;
    outputTemp.appendChild(_sb);
  }
  // if no project has been selected (i.e. first run of app) then display DEFAULT_PROJECT
  // if (!document.getElementById('content-cells').firstChild) {
  //   dispProjectTaskItems(DEFAULT_PROJECT);
  // }
  _sb = document.createElement('div');
  _sb.innerText = '+ Add New Project';
  _sb.classList.add('item-sidebar');
  _sb.id = 'add-new'; // may not need this...
  _sb.addEventListener('click', (e) => {
    e.preventDefault();
    addProject();
  });
  outputTemp.appendChild(_sb);
}

// add a project from sidebar selection
function addProject() {
  let _projectName;
  toggleModal('add-modal');
  let _pAddDone = document.getElementById('add-done');
  _pAddDone.addEventListener('click', (e) => {
    e.preventDefault();
    _projectName = document.getElementById('projName-add').value;
    toggleModal('add-modal');
    projectMap.set(_projectName, null);
    sidebar();
  }, {once: true});
}

// display selected project task items
function dispProjectTaskItems (project) {
  let _ul, _li;
  let outputTemp = document.getElementById('content-cells');
  let _pTaskArray = projectMap.get(project);
  if (outputTemp.firstChild) contentClear(outputTemp, null);
  if (!project) project = 'Default';
  let topBar = document.getElementById('topbar');
  topBar.innerHTML = `<h3>To Do Items for ${project}</h3>`;
  if (_pTaskArray !== null) {
    for (let i = 0; i < _pTaskArray.length; i++) {
      _ul = document.createElement('div');
      _ul.classList.add('item-row')
      Object.keys(_pTaskArray[i]).forEach(_key => {      
        _li = document.createElement('div');
        _li.classList.add('item-cell');
        // TEST OK console.log(i + '   ' + value[i][_key] + '    ' + (typeof value[i][_key]) + '   ' + _key);
        // conditional -- only display the items we want to see - Name, Desc, Due Date, Priority
        if ((_key === 'itemDesc') || (_key === 'itemDueDate') || (_key === 'itemPriority')) {
          _li.innerText += _pTaskArray[i][_key];
          _ul.appendChild(_li);
        }
      })
      _ul.innerHTML += '<br>';  // more readable this way. Probably a better way to do this with HTML/CSS/etc.
      outputTemp.appendChild(_ul);
      // TODO add event listener, checkbox and/or buttons for edit and delete of each task in the list
    };
  }
  else {
    outputTemp.innerText = 'No Tasks have been added to this project yet. Click below to add some!';
  }
  // the add new task button
  _ul = document.createElement('div');
  _ul.classList.add('item-cell');
  _ul.innerText = '+ Add New Task';
  _ul.id = 'add-task'; // TODO verify this is needed ???
  _ul.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(project);
  }, { once: true });
  outputTemp.appendChild(_ul);
} 

function addTask(projName) {
  // let _itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority, callType;
  toggleModal('edit-modal');
  let _pEditDone = document.getElementById('edit-done');
  document.getElementById('projName-edit').value = projName;  // readonly in HTML
  _pEditDone.addEventListener('click', (e) => {
    e.preventDefault();
    let item = new todoItem;
    // let _pTaskArray = [];
    let _pTaskArray = projectMap.get(projName);
    if (_pTaskArray === null) _pTaskArray = []; // for the case where it's a new project with no tasks yet
    item.itemID = _pTaskArray.length; // either 0 for empty task array or the next array index value
    item.projectID = null; // null temp
    item.ownerID = null; // null temp
    item.ownerName = null; // null temp
    // item.projectName = document.getElementById('projName-edit').value; // made this readonly in HTML!
    item.itemDesc = document.getElementById('todoDesc').value;
    item.itemDueDate = document.getElementById('todoDueDate').value;
    item.itemPriority = document.getElementById('todoPriority').value;
    _pTaskArray.push(item);
    projectMap.set(projName, _pTaskArray);
    toggleModal('edit-modal');
    dispProjectTaskItems(projName);
  }, { once: true });    
}

function editTask (projName) {
  // Edit any existing task
  // TODO work in progress

  let item = new todoItem; // might need a new item object ???

  let _pTaskArray = projectMap.get(projName);
  // edit task object properties here, then re-set projectMap with new array below
  projectMap.set(projName, _pTaskArray);
          // read values from the approriate project/task ID
          // populate modal entry cells with ex. values
          // allow user to edit them in modal dialog  
          // save new values by overwriting old projectMap(projName, values[])
        
}

function markTaskDone () {
  // TODO mark a task as done, change style to reflect...but not delete it
}

function deleteTask () {
  // TODO 
  // Entirely remove task
} 

function deleteProject () {
  // TODO 
}

// functions for save/load to/from localStorage

function saveMap () {
  let projTaskArray = [];
  // TEMP fill array to build the projectMap with dummy data (defaultTask JSON)
  for (let i = 0; i < DEFAULT_NUM_TASKS_PER_PROJ; i++) {
    projTaskArray.push(JSON.parse(defaultTask));
  }
  // add TEMP array values to MAP with dummy/default project keys
  for (let i = 0; i < DEFAULT_NUM_PROJ; i++) {
    projectMap.set(DEFAULT_PROJECT, projTaskArray);
  }
  const obj = {};
  for (let [key, value] of projectMap) {
    obj[key] = value;
  }
  //TEST SEEMS OK console.log(JSON.stringify(obj));
  localStorage.setItem('pMap', JSON.stringify(obj));
}

function loadMap () {
  return new Map(Object.entries(JSON.parse(localStorage.getItem('pMap'))));
}

// main code begins here
// the following array may not need to be global. TODO - Verify/update as needed


// main MAP to contain all projects
let projectMap = new Map();

// save map with dummy values to start
saveMap();
// populate the initial map 
projectMap = loadMap();

// startup UI/UX
sidebar();

// EOF