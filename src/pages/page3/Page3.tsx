import React, { useState } from 'react'
import { Page3StoreImpl } from '../../store/Page3Store'
import { observer } from 'mobx-react'

interface PageProps {
  Page3Store: Page3StoreImpl,
}

const Page3: React.FC<PageProps> = observer(({Page3Store}) => {
  const [value, setValue] = useState<string>('')
if(Page3Store){
    return (
        <div>
          <div>completed</div>
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
                Page3Store.addTodo(value)
              }
              setValue('')
            }}
          >
            Submit
          </button>
          <div>completed: {Page3Store.status.completed}</div>
          <div>Remaining: {Page3Store.status.remaining}</div>
    
          <ul>
            {Page3Store.todos.map((todo) => {
              return (
                <li
                  onClick={() => {
                    Page3Store.toggleTodo(todo.id)
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

export default Page3;
