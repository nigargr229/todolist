var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");

var addTask=function(){

	var listItem=createNewTaskElement(taskInput.value);
	taskInput.value="";
}

var editTask=function(){}
var deleteTask=function(){
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);
}
var taskCompleted=function(){
		console.log("Complete Task...");
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}
var taskIncomplete=function(){
		console.log("Incomplete Task...");
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}
var ajaxRequest=function(){
	console.log("AJAX Request");
}
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");

	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	
	var deleteButton=taskListItem.querySelector("button.delete");
			deleteButton.onclick=deleteTask;
			checkBox.onchange=checkBoxEventHandler;
}

	for (var i=0; i<incompleteTaskHolder.children.length;i++){
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}
	for (var i=0; i<completedTasksHolder.children.length;i++){
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}
