import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, MainList, Input, Button, ListItem, Paragraf, Ok, Cancel } from './style.js'

function App() {
  // js

  const [list, setList] = useState([])
  const [task, setTask] = useState('')


  function changeInput(eve) {
    setTask(eve.target.value)
  }

  function onClick() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    
    }
    
    
  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarItem(id) {

    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <MainList>
        <Input onChange={changeInput} placeholder="O que tenho que fazer..." />
        <Button onClick={onClick}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Ok onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Cancel onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (<Paragraf>Adicione suas tarefas</Paragraf>)
          }
        </ul>
      </MainList>
    </Container>

  )
}

export default App
