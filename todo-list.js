const todoList = [];

        function listAdd(){
            const inputElement = document.querySelector('.input-name');
            const name = inputElement.value;
            //console.log(name);

            const inputDate = document.querySelector('.date-input');
            const dueDate = inputDate.value;

            todoList.push({
                //name:name,
                //dueDate:dueDate
                name,
                dueDate
            });
            console.log(todoList);

            inputElement.value = '';//To clear the input box

            renderTodoList();
        }

        /*
        function renderTodoList(){
            let todoListHTML = '';

            for(let i=0;i<todoList.length;i++){
                const todo = todoList[i];
                const html = `<p>${todo}</p>`;//Generating HTML using js
                todoListHTML += html;
            }
            document.querySelector('.js-todo-list').innerHTML = todoListHTML;
        }
            */
            function renderTodoList(){
                let todoListHTML = '';
    
                todoList.forEach((todoObject,index) => {
                    const name = todoObject.name;
                    const dueDate = todoObject.dueDate;
                    //const {name,dueDate} = todoObject;Shorthand property
                    const html = `
                    <div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="
                        todoList.splice(${index},1);
                        renderTodoList();
                    " class="delete-button">Delete</button>
                    `;//Generating HTML using js
                    todoListHTML += html;
                })
                document.querySelector('.js-todo-list').innerHTML = todoListHTML;
            }   