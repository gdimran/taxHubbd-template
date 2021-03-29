// JavaScript Document
let attendeesArray=[];
let currentDis;
let allDists = [];
let fileUploaded= false;

function closeModal(id){
	let modal = document.getElementById(id);
	modal.style.display = "none";
}


function displayDist(){
	$('#distric-name').html(currentDis);
}
function errorHandler(event){
	if(evt.target.error.name=="NotReadableError"){
		alert('Can't read file!);
	}
}
function getAsText(fileToRead){
	let reader = new FileReader();

	reader.readAsText(fileToRead);
	
	reader.onerror =loadHandler;
	reader.onerror = errorHandler;
}

function handleFiles(files){
	if(window.FileReader){
		getAsText(files[0]);
		fileUploaded =true;
	}else{
		alert('FileReader not supported in browser.');
	}
}

function loadHandler(event){
	let csv = event.target.result;
	processData(csv);
	
}

function processData(csv){
	let allTextLines = csv.split(/\r\n|\n);
								 
	for (let i =0; i<allTextLines.length; i++ ){
		let row = allTextLines[i].split(';');
		
		let col = [];
		
		for(let j=0; j<row.length;j++){
			col.push(row[j]);
		}
		
		attendeesArray.push(col);
	}
}

function randomizeDist(){
	if(!fileUploaded){
		openModal('errorModal');
	}else if(attendeesArray.length===0){
		openModal('emptyList');
	}else{
		let min=0;
		let max=attendeesArray.length;
		let districIndex = Math.floor(Math.random() * (max-min+1))+min;
		
		currentDis = attendeesArray[districIndex];
		displayDist();
	}
}
