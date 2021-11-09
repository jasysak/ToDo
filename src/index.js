/*
  To Do List Application 

  by JAS
  created 11/02/2021

  Revisions
  0.01 - Most basic functionality 
*/

import './css/styles.css';
import { user, todoItem} from './dataModel.js';

const DEFAULT_NUM_PROJ = 2; // placeholder to fill map with 'dummy' objects
const DEFAULT_NUM_TASKS_PER_PROJ = 6;
const DEFAULT_PROJECT = 'Default Project';

// temp JSON for initialization
const defaultKey = DEFAULT_PROJECT;
const defaultTask = `{"itemID":1,"projectID":2,"ownerID":3,"ownerName":"Jay","projectName":"default","itemDesc":"Insert ToDo item description here.","itemDueDate":"Due Date","itemPriority":"Priority"}`;

// basic clear function - for clearing task/item display area
function contentClear (clearElement, callback) {
  while (clearElement.firstChild) {
    clearElement.removeChild(clearElement.firstChild);
  }
  if (callback) callback();
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

// display selected project task items
function dispProjectTaskItems (project) {
  let _ul, _li;
  let outputTemp = document.getElementById('content-cells');
  if (outputTemp.firstChild) contentClear(outputTemp, null);
  if (!project) project = 'Default';
  let topBar = document.getElementById('topbar');
  topBar.innerHTML = `<h3>To Do Items for ${project}</h3>`;
  projTaskArray = projectMap.get(project);
  if (projTaskArray !== null) {
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
    if (projTaskArray === null) editProject('new', project);
    else editProject('existing', project);
  }, { once: true });
  outputTemp.appendChild(_ul);
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

function editProject(editType, projName) {
  // let _itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority, callType;
  toggleModal('edit-modal');
  let _pEditDone = document.getElementById('edit-done');
  _pEditDone.addEventListener('click', (e) => {
    e.preventDefault();
    if (editType == 'new') {  
      let item = new todoItem;
      item = JSON.parse(defaultTask);
      let _pTaskArray = [];
      _pTaskArray.push(item);
      projectMap.set(projName, _pTaskArray);
        /*
        _itemID = null;
        _projectID = null; // this needs to be an increment from last projID
        _ownerID = null; // for now. No multi-user support yet
        _ownerName = null; // see above
        _projectName = document.getElementById('projName').value;
        _itemDesc = document.getElementById('todoDesc').value;
        _itemDueDate = document.getElementById('todoDueDate').value;
        _itemPriority = document.getElementById('todoPriority').value;
        callType = 0;
        */
      }
      else if (editType == 'existing') {
        console.log('Existing project to edit tasks');
        let item = new todoItem;
        item = JSON.parse(defaultTask);
        let _pTaskArray = projectMap.get(projName);
        _pTaskArray.push(item);
        projectMap.set(projName, _pTaskArray);
        // read values from the approriate project/task ID
        // populate modal entry cells with ex. values
        // allow user to edit them in modal dialog  
        // save new values by overwriting old projectMap(projName, values[])
      }
      // addItem(_itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority); // pass item details as params here
      toggleModal('edit-modal');
      dispProjectTaskItems(projName);
    }, { once: true });    
}

function toggleModal(modalType) {
  let modal; // the modal we want to toggle
  modal = document.getElementById(modalType); 
  console.log(modal.classList);
  if (modal.classList.contains('modal-vis')) modal.classList.remove('modal-vis');
  else modal.classList.add('modal-vis');
}

// main code begins here
// the following array may not need to be global. TODO - Verify/update as needed
let projTaskArray = [];

// main MAP to contain all projects
let projectMap = new Map();

// TEMP fill array to build the projectMap with dummy data (defaultTask JSON)
for (let i = 0; i < DEFAULT_NUM_TASKS_PER_PROJ; i++) {
  projTaskArray.push(JSON.parse(defaultTask));
}

// add TEMP array values to MAP with dummy/default project keys
for (let i = 0; i < DEFAULT_NUM_PROJ; i++) {
  projectMap.set(DEFAULT_PROJECT, projTaskArray);
}

// startup UI/UX
sidebar();

// EOF