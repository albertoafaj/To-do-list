const DigitarTask = document.getElementsByName('digitar_tarefas')[0];
const AddTask = document.getElementsByClassName('button')[0];
const Checkbox = document.getElementsByClassName('checkbox')[0];
const MsgErro = document.getElementsByClassName('erro')[0];
// var arrayTask = [];
const Check = document.getElementsByName('check');
let idTask = 1;
DigitarTask.addEventListener("click",digitarTask); 
AddTask.addEventListener("click",addTask);

function digitarTask(){
    DigitarTask.value="";
    AddTask.disabled = false;
    
};

function addTask(){
    let t = DigitarTask.value;
    if(t==""){
        AddTask.disabled = true;
        MsgErro.style.display = 'flex';
    } else {
        let html = '<div class="task"> <input type="checkbox" name = "check" id="t'+ idTask+'"> <label for="descTask">'+t+'</ label> </div>';
        Checkbox.insertAdjacentHTML("beforeend",html);
        idTask++;
        AddTask.disabled = true;
        MsgErro.removeAttribute('style');
            }
} ;

