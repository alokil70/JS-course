export function getAuthForm() {
    return `
    <form class="mui-form" id="auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="text" id="question-input" required>
                    <label for="question-input">Введите текст</label>
                </div>

                <button
                        type="submit"
                        class="mui-btn mui-btn--raised mui-btn--primary"
                        id="btn-submit"
                >Отправить вопрос
                </button>
            </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    return fetch('http://localhost:9000/message', {
        method: 'POST',
        body: JSON.stringify({
            email, password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
