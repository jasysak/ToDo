/*
  todo - To Do List Application 

  by JAS
  created 11/02/2021

  Revisions
  0.01 - Most basic functionality 
  0.02 - ?
*/

import './css/styles.css';
import { user, todoItem} from './dataModel.js'; // user not used yet

const DEFAULT_NUM_PROJ = 2; // placeholder to fill map with 'dummy' objects
const DEFAULT_NUM_TASKS_PER_PROJ = 4;
const DEFAULT_PROJECT = 'Default Project';

// temp JSON for initialization
const defaultKey = DEFAULT_PROJECT;
const defaultTask = `{"itemID":1,"projectID":2,"ownerID":3,"ownerName":"Jay","taskName":"default task","taskDesc":"Insert task item description here.","taskDueDate":"Due Date","taskPriority":"Priority"}`;

// basic clear function - for clearing any/all div display area children
function contentClear (clearElement, callback) {
  while (clearElement.firstChild) {
    clearElement.removeChild(clearElement.firstChild);
  }
  if (callback) callback();
}

// toggle modal helper function. Pass the main modal element to toggle vis/non-vis
function toggleModal(modal) {
  if (modal.classList.contains('modal-vis')) modal.classList.remove('modal-vis', 'show');
  else modal.classList.add('modal-vis', 'show');
}

function initHeader() {
  // all this does is provides [limited] functionality to the about and login links
  // in the page header. TODO - make these actually do something interesting
  let aboutModal = document.getElementById('about-modal');
  let aboutBtn = document.getElementById('about');
  let aboutDone = document.getElementById('about-done');
  aboutDone.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(aboutModal)
  });
  aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(aboutModal);
  });
// login modal - no login currently implemented
  let loginModal = document.getElementById('login-modal');
  let loginBtn = document.getElementById('login');
  let loginDone = document.getElementById('login-done');
  loginDone.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(loginModal)
  });
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(loginModal);
  });
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
        taskCell = document.createElement('div');
        taskCell.classList.add('item-cell');
        // conditional -- only display the items we want to see - Name, Desc, Due Date, Priority
        if ((_key === 'itemDesc') || (_key === 'itemDueDate') || (_key === 'itemPriority')) {
          taskCell.innerText += value[i][_key];
          _ul.appendChild(taskCell);
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
  let sidebarCell;
  let keys = Array.from(projectMap.keys());
  let outputTemp = document.getElementById('sidebar');
  if (outputTemp) contentClear(outputTemp, null);  // if a sidebar exists, clear and re-draw
  sidebarCell = document.createElement('div');
  sidebarCell.classList.add('topbar');
  sidebarCell.innerHTML += '<b><h3>Projects</h3></b>';
  outputTemp.appendChild(sidebarCell);
  for (let i = 0; i < keys.length; i++) {
    sidebarCell = document.createElement('div');
    sidebarCell.classList.add('item-sidebar');
    sidebarCell.addEventListener('click', (e) => {
      dispProjectTaskItems(keys[i])
      e.preventDefault();
    });
    sidebarCell.innerText = keys[i]; // + '_' + i;
    outputTemp.appendChild(sidebarCell);
  }
  // if no project has been selected (i.e. first run of app) then display DEFAULT_PROJECT
  // if (!document.getElementById('content-cells').firstChild) {
  //   dispProjectTaskItems(DEFAULT_PROJECT);
  // }
  sidebarCell = document.createElement('button');
  sidebarCell.innerText = '+ Add New Project';
  sidebarCell.classList.add('btn', 'btn-primary');
  // sidebarCell.id = 'add-new'; // may not need this...
  sidebarCell.addEventListener('click', (e) => {
    e.preventDefault();
    addProject();
  });
  outputTemp.appendChild(sidebarCell);
}

// add a project from sidebar selection
function addProject() {
  let targetModal = document.getElementById('add-project-modal');
  let _projectName;
  toggleModal(targetModal);
  let projectAddDone = document.getElementById('add-done');
  projectAddDone.addEventListener('click', (e) => {
    e.preventDefault();
    _projectName = document.getElementById('projName-add').value;
    toggleModal(targetModal);
    projectMap.set(_projectName, null);
    sidebar();
  }, {once: true});
}

// display selected project task items
// TODO update this code to allow an array of projects to be displayed instead of JUST ONE
// Another option would be to construct a second map object with those items you want to display, then
// adapt the display code below to simply display the whole map (also see commented code above)
// another idea is change project parameter to an array of projects, then iterate the below code thru the
// array to display all projects & corresponding tasks
function dispProjectTaskItems (project) {
  let taskRow, taskCell, btn, editBtn, delBtn;
  let outputTemp = document.getElementById('content-cells');
  let _pTaskArray = projectMap.get(project);
  if (outputTemp.firstChild) contentClear(outputTemp, null);
  if (!project) project = 'Default';
  let topBar = document.getElementById('topbar');
  topBar.innerHTML = `<h3>To Do Items for ${project}</h3><br>`;
  
  // create a header/label bar for table
  // col 1 - completed checkbox
  taskRow = document.createElement('div');
  taskRow.classList.add('item-row')
  taskCell = document.createElement('div');
  taskCell.classList.add('col-narrow', 'item-cell');
  taskCell.innerText = 'Mark\nDone';
  taskRow.appendChild(taskCell);

  // col 2 - project name MEDIUM
  taskCell = document.createElement('div');
  taskCell.classList.add('col-medium', 'item-cell');
  taskCell.innerText = 'Project Name';
  taskRow.appendChild(taskCell);

  // col 3 - task name MEDIUM
  taskCell = document.createElement('div');
  taskCell.classList.add('col-medium', 'item-cell');
  taskCell.innerText = 'Task Name';
  taskRow.appendChild(taskCell);

  // col 4 - task description WIDE
  taskCell = document.createElement('div');
  taskCell.classList.add('col-wide', 'item-cell');
  taskCell.innerText = 'Task Description';
  taskRow.appendChild(taskCell);
  
  // col 5 - due date MEDIUM
  taskCell = document.createElement('div');
  taskCell.classList.add('col-medium', 'item-cell');
  taskCell.innerText = 'Due Date';
  taskRow.appendChild(taskCell);
  
  // col 6 - priority NARROW
  taskCell = document.createElement('div');
  taskCell.classList.add('col-narrow', 'item-cell');
  taskCell.innerText = 'Priority';
  taskRow.appendChild(taskCell);
  outputTemp.appendChild(taskRow);

  if (_pTaskArray !== null) {
    for (let i = 0; i < _pTaskArray.length; i++) {
      taskRow = document.createElement('div');
      taskRow.classList.add('item-row')
      taskRow.id = project + '_task_' + i;
      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('col-narrow', 'item-cell');
      checkbox.addEventListener('change', (e) => {
        console.log('CHECK Checkbox listener');
        e.preventDefault();
        markTaskDone(0);  // TODO review/verify fn  TEST with 0
      });
      taskRow.appendChild(checkbox);
      // ADDED project name as first col. after checkbox
      taskCell = document.createElement('div');
      taskCell.classList.add('col-medium', 'item-cell');
      taskCell.innerText += project;
      taskRow.appendChild(taskCell);
      Object.keys(_pTaskArray[i]).forEach(_key => {      
        taskCell = document.createElement('div');
        taskCell.classList.add('item-cell');
        // TEST OK console.log(i + '   ' + value[i][_key] + '    ' + (typeof value[i][_key]) + '   ' + _key);
        // conditional -- only display the items we want to see - Task Name, Desc, Due Date, Priority
        if ((_key === 'taskName') || (_key === 'taskDesc') || (_key === 'taskDueDate') || (_key === 'taskPriority')) {
          taskCell.innerText += _pTaskArray[i][_key];
          // vary some column widths for cleaner display
          if (_key === 'taskPriority') taskCell.classList.add('col-narrow');
          if ((_key === 'taskName') || (_key === 'taskDueDate')) taskCell.classList.add('col-medium');
          if (_key === 'taskDesc') taskCell.classList.add('col-wide');
          taskRow.appendChild(taskCell);
        }
      });
      // item-cell div to hold edit/delete buttons

      // edit button first
      // editBtn = document.createElement('button');
      // editBtn.classList.add('btn', 'btn-secondary'); //, 'fa', 'fa-edit'); // font-awesome icons to add
      // editBtn.innerText = 'Edit';
      // editBtn.id = project + '_' + i; NOT NEEDED 
      // editBtn.addEventListener('click', editTask(null, null));
      // (e) => {
      //  e.preventDefault();
      //  editTask(null, null);  // TEMP null for testing only..this should be (project, i)
      //});
      // taskCell.appendChild(editBtn);
      // delete button second
      // delBtn = document.createElement('button');
      // delBtn.classList.add('btn', 'btn-secondary'); // , 'fa', 'fa-trash');
      // delBtn.innerText = 'Delete';
      // delBtn.addEventListener('click', deleteTask(null, null));
        // deleteTask(null, null); // (null, null) should be (project, i) or (project name, task ID no.)
      // });
      // taskCell.appendChild(delBtn);
      // taskRow.appendChild(taskCell);
      // taskRow.innerHTML += '<br>';  // more readable this way. Probably a better way to do this with HTML/CSS/etc.
      taskCell = document.createElement('div');
      taskCell.classList.add('item-cell', 'col-last');
      editBtn = document.createElement('button');
      editBtn.classList.add('btn', 'btn-secondary', 'fa', 'fa-edit');
      // editBtn.innerText = 'Edit';
      // btn.id = 'add-task'; // TODO verify this is needed ???
      editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        editTask(project, i);
      });
      taskCell.appendChild(editBtn);
      delBtn = document.createElement('button');
      delBtn.classList.add('btn', 'btn-secondary', 'fa', 'fa-edit');
      // editBtn.innerText = 'Edit';
      // btn.id = 'add-task'; // TODO verify this is needed ???
      delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteTask(project, i);
      });
      taskCell.appendChild(delBtn);
      taskRow.appendChild(taskCell);
      outputTemp.appendChild(taskRow);
    };
  }
  else if (_pTaskArray === null) {
    outputTemp.innerText = 'No Tasks have been added to this project yet. Click below to add some!\n\n';
  }
  // the add new task button
  btn = document.createElement('button');
  btn.classList.add('item-cell', 'btn', 'btn-primary');
  btn.innerText = '+ Add New Task';
  btn.id = 'add-task'; // TODO verify this is needed ???
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(project);
  }, { once: true });
  outputTemp.appendChild(btn);
} 

function addTask(projName) {
  let targetModal = document.getElementById('add-task-modal');
  // let _itemID, _projectID, _ownerID, _ownerName, _projectName, _itemDesc, _itemDueDate, _itemPriority, callType;
  toggleModal(targetModal);
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
    item.taskName = document.getElementById('taskName-edit').value; 
    item.taskDesc = document.getElementById('taskDesc').value;
    item.taskDueDate = document.getElementById('taskDueDate').value;
    item.taskPriority = document.getElementById('taskPriority').value;
    _pTaskArray.push(item);
    projectMap.set(projName, _pTaskArray);
    toggleModal(targetModal);
    dispProjectTaskItems(projName);
  }, { once: true });    
}

// edit and replace existing task in project
function editTask (projName, taskID) {
  let pTaskArray = [];
  // Edit any existing task
  // TODO work in progress
  console.log('Edit Task: ' + taskID + ' from project: ' + projName);
  let pEditDone = document.getElementById('edit-done');
  let targetModal = document.getElementById('add-task-modal');
  let item = new todoItem;
  pTaskArray = projectMap.get(projName);
  item = pTaskArray[taskID];
  document.getElementById('projName-edit').value = projName;
  document.getElementById('taskName-edit').value = item.taskName;
  document.getElementById('taskDesc').value = item.taskDesc;
  document.getElementById('taskDueDate').value = item.taskDueDate;
  document.getElementById('taskPriority').value = item.taskPriority;
  // console.log(typeof item, item);
  toggleModal(targetModal);
  pEditDone.addEventListener('click', (e) => {
    e.preventDefault();
    item.projectID = null; // null temp
    item.ownerID = null; // null temp
    item.ownerName = null; // null temp
    item.taskName = document.getElementById('taskName-edit').value; 
    item.taskDesc = document.getElementById('taskDesc').value;
    item.taskDueDate = document.getElementById('taskDueDate').value;
    item.taskPriority = document.getElementById('taskPriority').value;
    pTaskArray[taskID] = item;
    projectMap.set(projName, pTaskArray);
    toggleModal(targetModal);
    dispProjectTaskItems(projName);
  }, { once: true });       
}

function markTaskDone (project, task) {
  console.log('Mark task done for task: ' + task + ' from project: ' + project);
  // toggle corresponding taskRow text style to strikethrough
}

function deleteTask (project, task) {
  console.log('Delete task: ' + task + ' from project: ' + project);
  // delete a task with a confirmation dialog "Click OK to Delete task XXX"
} 

function deleteProject (project) {
  console.log('Delete Project: ' + project);
  // delete entire project (sidebar function)
  // make sure to have a confirm dialog
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

// main MAP to contain all projects
let projectMap = new Map();

// save map with dummy values to start
saveMap();
// populate the initial map 
projectMap = loadMap();

// startup UI/UX
initHeader();
sidebar();

// EOF