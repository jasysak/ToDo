/*
  To Do List Application 

  by JAS
  created 11/02/2021

  Revisions
  0.01 - PENDING 
*/

// import { library } from 'webpack';
import './css/styles.css';
import { user, todoItem} from './dataModel.js';

const DEFAULT_NUM_PROJ = 2; // placeholder to fill map with 'dummy' objects
const DEFAULT_NUM_TASKS_PER_PROJ = 10;
const DEFAULT_PROJECT = 'Default Project';

// temp JSON for initialization
const defaultKey = DEFAULT_PROJECT;
const defaultTask = `{"itemID":1,"projectID":2,"ownerID":3,"ownerName":"Jay","projectName":"default","itemDesc":"Insert ToDo item description here.","itemDueDate":"Due Date","itemPriority":"Priority"}`;

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
  
  if (document.getElementById('sidebar')) contentClear('sidebar', null);  // if a sidebar exists, clear and re-draw

  for (let i = 0; i < keys.length; i++) {
    // console.log(counter++);
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
  // add new project
  _sb = document.createElement('div');
  _sb.innerText = '+ Add New Project';
  _sb.classList.add('item-sidebar');
  _sb.id = 'add-new';
  //_sb.setAttribute();
  _sb.addEventListener('click', (e) => {
    e.preventDefault();
    addProject();
  });
  outputTemp.appendChild(_sb);


}

// display selected project items
function dispProjectTaskItems (project) {
  let _ul, _li;
  if (document.getElementById('content-cells').firstChild) contentClear('content-cells', null);
  if (!project) project = 'Default';
  let outputTemp = document.getElementById('content-cells');
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
    // console.log('No Tasks-else case');
    outputTemp.innerText = 'No Tasks have been added to this project yet. Click below to add some!';
  }
  // the "add button"
  _ul = document.createElement('div');
  _ul.classList.add('item-cell');
  _ul.innerText = '+ Add New Task';
  _ul.id = 'add-task';
  _ul.addEventListener('click', (e) => {
    e.preventDefault();
    if (projTaskArray === null) editProject('new', project);
    else editProject('existing');
  }, {once: true});
  outputTemp.appendChild(_ul);
} 

// add a project from sidebar selection
function addProject() {
  let _projectName;
  // pop a data entry/edit form
  toggleModal('add-modal');

  let _pAddDone = document.getElementById('add-done');
  _pAddDone.addEventListener('click', (e) => {
    e.preventDefault();
    _projectName = document.getElementById('projName').value;
    toggleModal('add-modal');
    projectMap.set(_projectName, null);
    sidebar();
  }, {once: true});
  
}

  // let editType = 'new';
  // editProject(editType);  // editType will be either new or exist 
  // save form contents to new map item with k=projName, v=array of opbjects from form entry properties, values

  // redisplay sidebar with new/added project included
  // alert('Not Yet Implemented');

function editProject(editType, projName) {
  // pop form with blank for new or populated for exist
    let _itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority, callType;
    // add event listener to "Done" button
    toggleModal('edit-modal');
    let _pEditDone = document.getElementById('edit-done');
    _pEditDone.addEventListener('click', (e) => {
      e.preventDefault();
      if (editType === 'new') {
        
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
      else if (editType === 'exist') {
        // read values from the approriate project/task ID
        // allowing user to edit them in modal dialog  
      }
      // addItem(_itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority); // pass item details as params here
    });
    //
    toggleModal('edit-modal');
    //
}

function toggleModal(editType) {
  let modal; // the modal we want to toggle
  if (editType === 'other') {
    modal = document.getElementById('other-modal');
  } 
  if (editType === 'add') {
    modal = document.getElementById('add-modal'); 
  }
  modal = document.getElementById(editType); 
  if (modal.classList.contains('modal-vis')) modal.classList.remove('modal-vis');
  else modal.classList.add('modal-vis');
  return;
}
// add a ToDo item to project
//
//
function addItem (_itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority) {
  console.log(_itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority);
  //

}

// main code begins here
let projTaskArray = [];
let projArray = [];

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

// startup
sidebar();