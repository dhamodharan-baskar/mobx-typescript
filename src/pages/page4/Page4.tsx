import React, { useState } from 'react'
import { Page4StoreImpl } from '../../store/Page4Store'
import { observer } from 'mobx-react'

interface PageProps {
  Page4Store: Page4StoreImpl,
}

const Page4: React.FC<PageProps> = observer(({Page4Store}) => {
  const [value, setValue] = useState<string>('')
if(Page4Store){
    return (
        <div>
          <div>Deployed</div>
          <input
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            type="text"
          />
          <button
            onClick={() => {
              if (value) {
                Page4Store.addTodo(value)
              }
              setValue('')
            }}
          >
            Submit
          </button>
          <div>completed: {Page4Store.status.completed}</div>
          <div>Remaining: {Page4Store.status.remaining}</div>
    
          <ul>
            {Page4Store.todos.map((todo) => {
              return (
                <li
                  onClick={() => {
                    Page4Store.toggleTodo(todo.id)
                  }}
                >
                  [{todo.completed ? 'x' : ' '}]{todo.title}
                </li>
              )
            })}
          </ul>
        </div>
      )
} 

return <div>Backlog</div>
  
})

export default Page4;
