// init

let list = document.querySelector('#my-todo')
let listDone = document.querySelector('#done')

const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']

const done = []


// 呈現資料
for (let todo of todos) {
    addItem(todo)
}

// 用滑鼠點擊增加資料
let addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', function(event) {
    let inputValue = document.querySelector('input#newTodo').value
    if (inputValue !== "") {
        addItem(inputValue)
        document.querySelector('input#newTodo').value = ""
    } else {
        // to-do: 浮現介面通知使用者     
        alert("Please enter an item name")
    }
    //console.log(event)
    //console.log(this)
})

// 用鍵盤點擊增加資料
let inputArea = document.querySelector('.form-control')

inputArea.addEventListener('keypress', function(event) {
    let inputValue = document.querySelector('input#newTodo').value

    if (event.keyCode == 13) {
        if (inputValue !== "") {
            addItem(inputValue)
            document.querySelector('input#newTodo').value = ""
        } else {
            // to-do: 浮現介面通知使用者     
            alert("Please enter an item name")
        }
    }
    //console.log(event.keyCode)

    // 以下是錯誤範例
    /*
    if(inputValue!==""){
      if(event.keyCode == 13){
        addItem(inputValue)  
      }  
    }else{
      // to-do: 浮現介面通知使用者     
      alert("Please enter an item name")
    }
    */

});

// TODO 移除項目
list.addEventListener('click', function(event) {
    //console.log(this)
    console.log(event.target)
    if (event.target.classList.contains('delete')) {
        let btn = event.target.parentElement
        btn.remove()
    }
})

// DONE 移除項目
listDone.addEventListener('click', function(event) {
    console.log(event.target)
    if (event.target.classList.contains('delete')) {
        let btn = event.target.parentElement
        btn.remove()
    }
})

// 點擊TODO到DONE區
list.addEventListener('click', function(event) {
    //console.log(this)
    //console.log(event.target)
    if (event.target.tagName === "LABEL") {
        done.push(event.target.innerHTML)
        console.log(done)
        let item = event.target.parentElement
        item.remove()

        addDone(event.target.innerText)
        console.log(event.target.parentElement)
            //event.target.classList.toggle('checked')
    }
})

// 點擊DONE回到TODO區
listDone.addEventListener('click', function(event) {
    if (event.target.tagName === "LABEL") {
        done.pop(event.target.innerHTML)
        let item = event.target.parentElement
        item.remove()

        addItem(event.target.innerText)
        console.log(event.target.parentElement)
            //event.target.classList.toggle('checked')
    }
})

// 增加TODO選項
function addItem(text) {
    let newItem = document.createElement('li')
    newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
    list.appendChild(newItem)
}

// 增加DONE選項
function addDone(text) {
    let newDone = document.createElement('li')
    newDone.innerHTML = `
    <label class="checked" for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
    listDone.appendChild(newDone)

}