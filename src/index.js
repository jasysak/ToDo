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

// temp dummy const values to fill dummy/default project 
const DEFAULT_DAYS_LOOKAHEAD = 999;
const DEFAULT_NUM_PROJ = 2;
const DEFAULT_NUM_TASKS_PER_PROJ = 4;
const DEFAULT_PROJECT = 'Default Project';
// temp JSON task for initialization
const defaultTask = `{"itemID":1,"projectID":2,"ownerID":3,"ownerName":"Jay","taskName":"default task","taskDesc":"Insert task item description here.","taskDueDate":1636755209999,"taskPriority":"Priority"}`;

function contentClear (clearElement, callback) {
  while (clearElement.firstChild) {
    clearElement.removeChild(clearElement.firstChild);
  }
  if (callback) callback();
}

function toggleModal(modal) {
  if (modal.classList.contains('modal-vis')) modal.classList.remove('modal-vis', 'show');
  else modal.classList.add('modal-vis', 'show');
}

function initHeader() {
  
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

// TEMP display any Map TEMP
function showAll(displayMap) {
  let _tp, _ul, taskCell, projectTaskArray;
  let outputTemp = document.getElementById('content-cells');
  if (outputTemp.firstChild) contentClear(outputTemp, null);
  displayMap.forEach( (value, key) => { 
    _tp = document.createElement('div');
    displayTopBar(key);
    //_tp.innerText += key; // header with project name
    outputTemp.appendChild(_tp);  
    for (let i = 0; i < value.length; i++) {
      _ul = document.createElement('div');
      _ul.classList.add('item-row')
      Object.keys(value[i]).forEach(_key => {      
        taskCell = document.createElement('div');
        taskCell.classList.add('item-cell');
        if ((_key === 'taskName') || (_key === 'taskDesc') || (_key === 'taskDueDate') || (_key === 'taskPriority')) {
          taskCell.innerText += value[i][_key];
          // vary some column widths for cleaner display
          if (_key === 'taskPriority') taskCell.classList.add('col-narrow');
          if ((_key === 'taskName') || (_key === 'taskDueDate')) taskCell.classList.add('col-medium');
          if (_key === 'taskDesc') taskCell.classList.add('col-wide');
          _ul.appendChild(taskCell);
        }
      });
      outputTemp.appendChild(_ul);
    };
  });
}


function sidebarDisplay() {
  let sidebarCell, sidebarRow;
  let keys = Array.from(projectMap.keys());
  let outputTemp = document.getElementById('sidebar');
  if (outputTemp) contentClear(outputTemp, null); 
  sidebarCell = document.createElement('div');
  sidebarCell.classList.add('item-sidebar');

  sidebarCell.innerText += 'X Day Lookahead';
  sidebarCell.addEventListener('click', () => {
    lookaheadTasks (projectMap, 9999);  // seven days TEMP
  })
  outputTemp.appendChild(sidebarCell);
  sidebarCell = document.createElement('div');
  sidebarCell.classList.add('topbar');

  sidebarCell.innerHTML += '<b><h3>Projects</h3></b>';
  outputTemp.appendChild(sidebarCell);
  
  for (let i = 0; i < keys.length; i++) {
    sidebarRow = document.createElement('div');
    sidebarRow.classList.add('sidebar-row');
    sidebarCell = document.createElement('div');
    sidebarCell.classList.add('item-sidebar');
    sidebarCell.addEventListener('click', (e) => {
      dispProjectTaskItems(keys[i])  // project.getProjectTaskItems(key) ???
      e.preventDefault();
    });
    sidebarCell.innerText = keys[i];
    sidebarRow.appendChild(sidebarCell);
    
    let delBtn = document.createElement('button');
      delBtn.classList.add('btn', 'btn-secondary', 'fa', 'fa-trash');
      delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteProject(keys[i]);
      });
    sidebarRow.appendChild(delBtn);
    outputTemp.appendChild(sidebarRow);
  }
  sidebarCell = document.createElement('button');
  sidebarCell.innerText = '+ Add New Project';
  sidebarCell.classList.add('btn', 'btn-primary');
  sidebarCell.addEventListener('click', (e) => {
    e.preventDefault();
    addProject();  // project.addProject ???
  });
  outputTemp.appendChild(sidebarCell);
}

// add a project from sidebar selection
function addProject() {
  let targetModal = document.getElementById('add-project-modal');
  let projectName;
  toggleModal(targetModal);
  let projectAddDone = document.getElementById('add-done');
  projectAddDone.addEventListener('click', (e) => {
    e.preventDefault();
    projectName = document.getElementById('projName-add').value;
    toggleModal(targetModal);
    projectMap.set(projectName, null);
    sidebarDisplay();
  }, {once: true});
}

// display selected project task items
// TODO update this code to allow ANY array [or map] of projects to be displayed
function dispProjectTaskItems (project) {
  let taskRow, taskCell, btn, editBtn, delBtn;
  let projectTaskArray = projectMap.get(project);  // 
  let outputTemp = document.getElementById('content-cells');
  if (outputTemp.firstChild) contentClear(outputTemp, null);

  // if (!project) project = 'Default';
  displayTopBar(project);
  
  if (projectTaskArray !== null) {
    for (let i = 0; i < projectTaskArray.length; i++) {
      taskRow = document.createElement('div');
      taskRow.classList.add('item-row')
      taskRow.id = project + '_task_' + i;
      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('col-narrow', 'item-cell');
      checkbox.addEventListener('change', (e) => {
        console.log('CHECK Checkbox listener');
        e.preventDefault();
        markTaskDone(project, i);  // TODO review/verify fn  TEST with 0
      });
      taskRow.appendChild(checkbox);
      taskCell = document.createElement('div');
      taskCell.classList.add('col-medium', 'item-cell');
      taskCell.innerText += project;
      taskRow.appendChild(taskCell);
      Object.keys(projectTaskArray[i]).forEach(_key => {      
        taskCell = document.createElement('div');
        taskCell.classList.add('item-cell');
        // this chain of if's is really lousy... go with a switch...case ???
        if ((_key === 'taskName') || (_key === 'taskDesc') || (_key === 'taskPriority')) {
          taskCell.innerText += projectTaskArray[i][_key];
          if (_key === 'taskPriority') taskCell.classList.add('col-narrow');
          if ((_key === 'taskName') || (_key === 'taskDueDate')) taskCell.classList.add('col-medium');
          if (_key === 'taskDesc') taskCell.classList.add('col-wide');
          taskRow.appendChild(taskCell);
        }
        else if (_key === 'taskDueDate') {
          taskCell.innerText += new Date(projectTaskArray[i][_key]).toDateString();
          taskCell.classList.add('col-medium');
          taskRow.appendChild(taskCell);
        }
      });
      taskCell = document.createElement('div');
      taskCell.classList.add('item-cell', 'col-last');
      editBtn = document.createElement('button');
      editBtn.classList.add('btn', 'btn-secondary', 'fa', 'fa-edit');
      editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        editTask(project, i);
      });
      taskCell.appendChild(editBtn);
      delBtn = document.createElement('button');
      delBtn.classList.add('btn', 'btn-secondary', 'fa', 'fa-trash');
      delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteTask(project, i);
      });
      taskCell.appendChild(delBtn);
      taskRow.appendChild(taskCell);
      outputTemp.appendChild(taskRow);
    };
  }
  else if (projectTaskArray === null) {
    outputTemp.innerText = 'No Tasks have been added to this project yet. Click below to add some!\n\n';
  }
  btn = document.createElement('button');
  btn.classList.add('item-cell', 'btn', 'btn-primary');
  btn.innerText = '+ Add New Task';
  // btn.id = 'add-task'; // TODO verify this is needed ???
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(project);
  }, { once: true });
  outputTemp.appendChild(btn);
} 

function addTask(projectName) {
  let targetModal = document.getElementById('add-task-modal');
  toggleModal(targetModal);
  let projectEditDone = document.getElementById('edit-done');
  document.getElementById('projName-edit').value = projectName;  // NOTE readonly in HTML
  document.getElementById('taskName-edit').value = ''
  document.getElementById('taskDesc').value = '';
  document.getElementById('taskDueDate').value = '';
  document.getElementById('taskPriority').value = '';
  projectEditDone.addEventListener('click', (e) => {
    e.preventDefault();
    let item = new todoItem;
    let projectTaskArray = projectMap.get(projectName);
    if (projectTaskArray === null) projectTaskArray = []; // for the case where it's a new project with no tasks yet
    item.itemID = projectTaskArray.length; 
    item.projectID = null; // null temp TODO
    item.ownerID = null; // null temp TODO
    item.ownerName = null; // null temp TODO
    item.taskName = document.getElementById('taskName-edit').value; 
    item.taskDesc = document.getElementById('taskDesc').value;
    item.taskDueDate = new Date(document.getElementById('taskDueDate').value);
    console.log(item.taskDueDate);
    item.taskPriority = document.getElementById('taskPriority').value;
    projectTaskArray.push(item);
    projectMap.set(projectName, projectTaskArray);
    toggleModal(targetModal);
    dispProjectTaskItems(projectName);
  }, { once: true });    
}

// edit and replace existing task in project
function editTask (projName, taskID) {
  let projectTaskArray = [];
  console.log('Edit Task: ' + taskID + ' from project: ' + projName);
  let pEditDone = document.getElementById('edit-done');
  let targetModal = document.getElementById('add-task-modal');
  let item = new todoItem;
  projectTaskArray = projectMap.get(projName);
  item = projectTaskArray[taskID];
  document.getElementById('projName-edit').value = projName;
  document.getElementById('taskName-edit').value = item.taskName;
  document.getElementById('taskDesc').value = item.taskDesc;
  document.getElementById('taskDueDate').value = new Date(item.taskDueDate).toDateString();
  document.getElementById('taskPriority').value = item.taskPriority;
  toggleModal(targetModal);
  pEditDone.addEventListener('click', (e) => {
    e.preventDefault();
    item.projectID = null; // null temp
    item.ownerID = null; // null temp
    item.ownerName = null; // null temp
    item.taskName = document.getElementById('taskName-edit').value; 
    item.taskDesc = document.getElementById('taskDesc').value;
    item.taskDueDate = new Date(document.getElementById('taskDueDate').value);
    console.log(item.taskDueDate);
    item.taskPriority = document.getElementById('taskPriority').value;
    projectTaskArray[taskID] = item;
    projectMap.set(projName, projectTaskArray);
    toggleModal(targetModal);
    dispProjectTaskItems(projName);
  }, { once: true });       
}

// UI only?  or class method also
function markTaskDone (project, task) {
  let taskDone = document.getElementById(project + '_task_' + task);
  if (taskDone.classList.contains('task-done')) taskDone.classList.remove('task-done');
  else taskDone.classList.add('task-done');
}

// class method
function deleteTask (project, taskID) {
  let targetModal = document.getElementById('confirm-modal');
  toggleModal(targetModal)
  let deleteDone = document.getElementById('confirm-done');
  deleteDone.addEventListener('click', (e) => {
    e.preventDefault();
    let projectTaskArray = projectMap.get(project);
    projectTaskArray.splice(taskID, 1)
    projectMap.set(project, projectTaskArray);
    toggleModal(targetModal);
    dispProjectTaskItems(project);
    
  }, { once: true } );
} 

// class method
function deleteProject (project) {
  let targetModal = document.getElementById('confirm-modal');
  toggleModal(targetModal);
  let deleteDone = document.getElementById('confirm-done');
  deleteDone.addEventListener('click', (e) => {
    e.preventDefault();
    projectMap.delete(project);
    toggleModal(targetModal);
    // TEMP clear content-items div
    contentClear(document.getElementById('content-cells'), sidebarDisplay());
  }, { once: true } );
  
}

function lookaheadTasks (projectsMap, numDaysAhead) {
  let matchedMap = new Map();
  projectsMap.forEach( (value, key) => { 
    for (let i = 0; i < value.length; i++) {
        console.log((value[i].taskDueDate - Date.now()) / 86400000);     
        if (Math.abs(((value[i].taskDueDate) - Date.now()) / 86400000) <= numDaysAhead) {
          matchedMap.set(key, value);
        }
    }
  });
  // TEMP call to showAll
  showAll(matchedMap);
}

function displayTopBar(project) {
  let taskRow, taskCell, btn, editBtn, delBtn;
  let outputTemp = document.getElementById('content-cells');
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
}
// functions for save/load to/from localStorage - TODO storage object ???
function saveMap () {
  let projTaskArray = [];
  // TEMP fill array to build the projectMap with dummy data (defaultTask JSON)
  for (let i = 0; i < DEFAULT_NUM_TASKS_PER_PROJ; i++) {
    projTaskArray.push(JSON.parse(defaultTask));
  }
  // TEMP add array values to MAP with dummy/default project keys
  for (let i = 0; i < DEFAULT_NUM_PROJ; i++) {
    projectMap.set(DEFAULT_PROJECT, projTaskArray);
  }
  const obj = {};
  for (let [key, value] of projectMap) {
    obj[key] = value;
  }
  localStorage.setItem('pMap', JSON.stringify(obj));
}

function loadMap () {
  return new Map(Object.entries(JSON.parse(localStorage.getItem('pMap'))));
}

// main code begins here
let projectMap = new Map();

// TEMP save map with dummy values to start
saveMap();
// populate the initial map 
projectMap = loadMap();

// startup UI/UX
initHeader();
sidebarDisplay();

// EOF