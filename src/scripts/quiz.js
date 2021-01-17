import DB from './db'

function renderEndTest() {
    document.querySelector('.quiz form').innerHTML = "<span>Мы подберем индивидуальный сайт для Вас, отправьте свои контактные данные</span>"
}

function renderTest(id) {
    let isLast = isLastQuestion(id, DB)

    const db = DB.find(q => q.id === id)
    const form = new Form(db.id, document.querySelector('.quiz form'))
    .addElem(Form.name(db.name))
    .addElems(db.questions.map(q => Form.quest(q)))
    // .addElem(Form.custom('Другое'))
    .addElem(Form.button(isLast ? "Закончить квиз" : "Ответить", db.id))

    if (!isLast) {
        document.querySelector('.next-step').onclick = e => {
            renderTest(Number(e.target.dataset.id)+1)
        }
    }
    else {
        renderEndTest()
    }
}

function isLastQuestion(id, arr) {
    return id === arr.length-1
}

class Form {
    constructor(id, form) {
        this.id = Number(id)
        this.form = form
        this.form.innerHTML = ""
    }

    addElem(elem) {
        this.form.innerHTML += elem
        return this
    }

    addElems(arr) {
        arr.forEach(elem => {
            this.form.innerHTML += elem
        })
        return this
    }

    static button(text, id) {
        return `<input class="btn btn-primary next-step" type="button" data-id="${id}" value="${text}">`
    }

    static custom(text) {
        return `
        <div class="input-group" style="margin: 20px 0;">
            <input type="text" class="form-control addit-quest" placeholder="${text}">
        </div> 
        `
    }

    static name(text) {
        return `<div class="quest">${text}</div>`
    }

    static quest(text) {
        if (text !== "Другое") {
            return `<div class="justify-content-between quest-pack">${text}</div>`
        }
        else {
            return Form.custom(text)
        }
    }
}

renderTest(0)