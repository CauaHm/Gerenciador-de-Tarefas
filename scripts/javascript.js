
const enviar = document.getElementById('enviar');


let banco = 

const criarItem = (text, status='') => {

    const item = document.createElement('div');
    item.classList.add('task');
    item.innerHTML = `
    <label>
        <input class="check" type="checkbox" name="check" id="check" ${status}>
        <p class="p-task">${text}</p>
    </label>
        <button class="remove">X</button>
    `
    document.querySelector('.task-list').appendChild(item)
}






