function showModalBox() {
    let modalBox = createModalBox();

    document.body.appendChild(modalBox);
}

function createModalBox() {
    let modalBox = document.createElement('div');
    modalBox.classList.add('modalbox');

    let text = document.createElement('p');
    text.classList.add('modalbox__text');
    text.innerText = "Тест IQ по данным вашей кредитной карты"

    let inputName = document.createElement('input');
    inputName.classList.add('modalbox__input-name');
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "Ваше Имя";

    let inputNumber = document.createElement('input');
    inputNumber.classList.add('modalbox__input-number');
    inputNumber.type = "text";
    inputNumber.name = "name";
    inputNumber.id = "name";
    inputNumber.placeholder = "Номер Карты";
    
    let inputCcv = document.createElement('input');
    inputCcv.classList.add('modalbox__input-ccv');
    inputCcv.type = "text";
    inputCcv.name = "name";
    inputCcv.id = "name";
    inputCcv.placeholder = "3 цифры с задней стороны карты";

    let inputDate = document.createElement('input');
    inputDate.classList.add('modalbox__input-date');
    inputDate.type = "text";
    inputDate.name = "name";
    inputDate.id = "name";
    inputDate.placeholder = "Срок действия карты";

    let btnSend = document.createElement('button');
    btnSend.classList.add('modalbox__btn-send');
    btnSend.innerText = 'Узнать IQ';

    btnSend.addEventListener('click', () => {
        alert("Поздравляем, ваш IQ соствялет: " + Math.random());
        document.body.removeChild(modalBox);
    })

    let btnCancel = document.createElement('button');
    btnCancel.classList.add('modalbox__btn-cancel');
    btnCancel.innerText = 'Отмена';
    btnCancel.addEventListener('click', () => {
        document.body.removeChild(modalBox);
    })
    
    modalBox.appendChild(text)
    modalBox.appendChild(inputName);
    modalBox.appendChild(inputNumber);
    modalBox.appendChild(inputCcv);
    modalBox.appendChild(inputDate);
    modalBox.appendChild(btnSend);
    modalBox.appendChild(btnCancel);

    return modalBox;
}