document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo');
    const todoList = document.getElementById('todoList');
    const allDeleteBtn = document.getElementById('allDeleteBtn');
    let keyCount = 0;

    // 새로운 할 일을 추가하는 함수
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            alert('할 일을 입력해주세요');
            return;
    
        }
        const li = document.createElement('li');
        li.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';

        const text = document.createElement('span');
        text.className = 'todo-text';
        text.textContent = todoText;

        // 체크박스 상태 변경 시 스타일 업데이트
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                text.classList.add('checked');
            } else {
                text.classList.remove('checked');
            }
        });

        // 수정 버튼 생성
        const editButton = document.createElement('button');
        const editImage = document.createElement('img');
        editImage.src = 'imgs/edit.svg';
        editImage.alt = '수정';
        editButton.appendChild(editImage);
        editButton.classList.add('edit-btn');
        
        // 수정 버튼 클릭 이벤트
        editButton.addEventListener('click', () => {
            const newText = prompt("수정해주세요", text.textContent);
            if (newText !== null && newText.trim() !== "") {
                text.textContent = newText;
            }
        });

        // 삭제 버튼 생성
        const removeButton = document.createElement('button');
        const removeImage = document.createElement('img');
        removeImage.src = 'imgs/x.svg';
        removeImage.alt = '삭제';
        removeButton.appendChild(removeImage);
        removeButton.classList.add('delete-btn');

        // 삭제 버튼 클릭 이벤트
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        // 리스트 아이템에 체크박스, 텍스트, 버튼 추가
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(editButton);
        li.appendChild(removeButton);
        todoList.appendChild(li);

        
        todoInput.value = '';
    }

    // 전체 삭제 버튼 클릭 이벤트
    allDeleteBtn.addEventListener('click', () => {
        todoList.innerHTML = "";
    });

    // 추가 버튼 클릭 이벤트
    addButton.addEventListener('click', addTodo);

    // 엔터키로 추가 기능
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
