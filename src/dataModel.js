// PLACEHOLDER - not used for now
// create USER class 
// (initial revision to use HTML localStorage, no user DB yet)
export class user {
  constructor(userID, userName) {
    this.userID = userID;
    this.userName = userName;
    // add more properties as needed (TODO)
  }
  // add methods as needed (TODO)
} 

// create class for todo list items.
export class todoItem {
  constructor (itemID, projectID, ownerID, ownerName, taskName, taskDesc, taskDueDate, taskPriority) {
    this.itemID = itemID;
    this.projectID = projectID;
    this.ownerID = ownerID;
    this.ownerName = ownerName; // temp
    this.taskName = taskName; 
    this.taskDesc = taskDesc; 
    this.taskDueDate = taskDueDate;
    this.taskPriority = taskPriority;
    // add props. as needed
  }
  // add methods as needed
}

// class for project

//export class todoProject {
//  constructor (projectID, projectName, itemArray) {
//    this.projectID = projectID;
//    this.projectName = projectName; // temp
//  }
//}
