const chatWidget = document.querySelector(".chat-widget");
const input = document.querySelector(".chat-widget__input");
let idTimerMessageRobot = 0;
const messagesRobot = [ //сообщения робота
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
    "До свидания",
    "1110011 1100101 1100011 1110010 1100101 1110100 111010 101001",
    "Обратитесь позже",
    "Извините мне не до вас",
    "Сейчас помогу вам",
    "Извините, все консультанты заняты",
    "Блин! - сказал слон, наступив на колобка",
    "Мы перезвоним вам позже",
    "Робот устал от общения с вами, до свидания"
]

const questionsRobot = [//вопросы робота
    "Как вам спалось?",
    "Как вам наше обслуживание?",
    "Вам помочь?",
    "Вы тут?",
    "Аууу",
    "Вас интересует наш товар?",
    "Вам всё понравилось?",
]

function getRandomArbitrary(min, max) { //рандомное число в диапазоне
    return Math.random() * (max - min) + min;
}

function questionRobot(){// интервальная функция для вопросов
    let date = new Date();
    robotMessage(date,questionsRobot);
}

function robotMessage(date,mesRobot){ // функция для отправки сообщений робота
    let hours = Number(date.getHours()) > 9 ? date.getHours() : "0"+date.getHours();
    let minutes = Number(date.getMinutes()) > 9 ? date.getMinutes() : "0"+date.getMinutes();
    const messages = document.querySelector( '.chat-widget__messages' );
    let indexMessage = Math.floor(getRandomArbitrary(0,mesRobot.length));
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
        ${mesRobot[indexMessage]}
        </div>
    </div>`;
    let msgContainer = document.querySelector(".chat-widget__messages-container");//авто скрол
    msgContainer.scrollTop = msgContainer.scrollHeight;
}

chatWidget.addEventListener("click",() => { //открываем окно чата и ставим вопросы на интервал
    
    if(!chatWidget.classList.contains("chat-widget_active")){
        chatWidget.classList.add("chat-widget_active");
        idTimerMessageRobot = setInterval(questionRobot,30000);
    }
})

input.addEventListener("keydown",(event)=> {
    if(event.code ==="Enter" && event.target.value.length != 0){ // отправка сообщений
        if([...event.target.value].every((element)=>{return element == " "})){
            event.target.value = "";
            return;
        }
        clearInterval(idTimerMessageRobot);//ощичаем интервал вопроса

        let date = new Date()
        let hours = Number(date.getHours()) > 9 ? date.getHours() : "0"+date.getHours();
        let minutes = Number(date.getMinutes()) > 9 ? date.getMinutes() : "0"+date.getMinutes();
        const messages = document.querySelector('.chat-widget__messages');
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text"> ${event.target.value} </div>
        </div>`;
        event.target.value = "";
        robotMessage(date,messagesRobot);//робот отвечает

        idTimerMessageRobot = setInterval(questionRobot,30000);//устанавливаем интервал для вопроса

        let msgContainer = document.querySelector(".chat-widget__messages-container");//авто скрол
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }
    else if(event.code === "Escape"){//закрываем чат , чистим интервал 
        chatWidget.classList.remove("chat-widget_active");
        clearInterval(idTimerMessageRobot);
        idTimerMessageRobot = null;
    }
})