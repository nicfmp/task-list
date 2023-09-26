        let lista = document.getElementById('taskList')
        let input = document.getElementById('taskInput')
        


        function excluir() {
            lista.innerHTML = ''
        }

        function limpar() {
            input.value = ''
        }

        
        

        function adicionar() {
            let tarefa = input.value
            lista.innerHTML += `<li>${tarefa}</li>`
            limpar()
           
        }