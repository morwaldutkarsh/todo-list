function addTask() {
  const task = document.getElementById("input").value;

  if (task !== "") {
    const li = document.createElement("li"); 
    li.innerText = task +" " ; 
    
    const btngroup = document.createElement("div");
    btngroup.className="btn_group";


    const deleteBtn = document.createElement("button"); 
    deleteBtn.innerText = "remove";                          
    deleteBtn.onclick = function () {
      li.remove(); 
    };


    const fornow =document.createElement("button");
    fornow.innerText="done for now ";
    fornow.onclick =function(){
      li.classList.add("strike");
    }

    btngroup.appendChild(fornow);
    btngroup.appendChild(deleteBtn); 
    li.appendChild(btngroup);
    document.getElementById("tasklist").appendChild(li); 

    document.getElementById("input").value="";

  }
}