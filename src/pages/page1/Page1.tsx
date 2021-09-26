import React, { useState } from 'react'
import { Page1StoreImpl } from '../../store/Page1Store'
import { observer } from 'mobx-react'

interface PageProps {
  Page1Store: Page1StoreImpl,
}

const Page1: React.FC<PageProps> = observer(({Page1Store}) => {
  const [value, setValue] = useState<string>('')
if(Page1Store){
    return (
        <div>
          <div>Backlog</div>
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
                Page1Store.addTodo(value)
              }
              setValue('')
            }}
          >
            Submit
          </button>
          <div>completed: {Page1Store.status.completed}</div>
          <div>Remaining: {Page1Store.status.remaining}</div>
    
          <ul>
            {Page1Store.todos.map((todo) => {
              return (
                <li
                  onClick={() => {
                    Page1Store.toggleTodo(todo.id)
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

export default Page1;
