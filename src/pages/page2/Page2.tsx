import React, { useState } from 'react'
import { Page2StoreImpl } from '../../store/Page2Store'
import { observer } from 'mobx-react'

interface PageProps {
  Page2Store: Page2StoreImpl,
}

const Page2: React.FC<PageProps> = observer(({Page2Store}) => {
  const [value, setValue] = useState<string>('')
if(Page2Store){
    return (
        <div>
          <div>In progress</div>
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
                Page2Store.addTodo(value)
              }
              setValue('')
            }}
          >
            Submit
          </button>
          <div>completed: {Page2Store.status.completed}</div>
          <div>Remaining: {Page2Store.status.remaining}</div>
    
          <ul>
            {Page2Store.todos.map((todo) => {
              return (
                <li
                  onClick={() => {
                    Page2Store.toggleTodo(todo.id)
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

export default Page2;
