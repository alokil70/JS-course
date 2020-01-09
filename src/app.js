import './style.css'
import {isValid, createModal} from "./utils"
import {Question} from "./question"
import {getAuthForm} from "./auth";


const form = document.getElementById('form')
const btnModal = document.getElementById('btn-modal')
const input1 = form.querySelector('#question-input')
const btnSubmit = form.querySelector('#btn-submit')


window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
btnModal.addEventListener('click', openModal)
input1.addEventListener('input', () => {
    btnSubmit.disabled = !isValid(input1.value)
})


function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input1.value)) {
        const questionInput = {
            text: input1.value.trim(),
            date: new Date().toJSON()
        }
        btnSubmit.disabled = true
        Question.create(questionInput).then(() => {
            input1.value = ''
            input1.className = ''
            btnSubmit.disabled = false
        })


    }
}

function openModal() {
createModal('Title', getAuthForm())
}
