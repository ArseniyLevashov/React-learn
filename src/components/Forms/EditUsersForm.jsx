import React, { useState, useEffect } from 'react'
import s from "./AddUser.module.css";

const EditUserForm = props => {
  // в качестве начального аргумента передаем
  // пользователя, которого собираемся редактировать
  const [user, setUser] = useState(props.currentUser)

  // используем effect-hook
  useEffect(
    () => {
      // вызывай данную функцию
      setUser(props.currentUser)
    },
    [props] // всегда, если изменились props
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.username) return

    // вызываем updateUser
    props.updateUser(user.id, user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Day</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Date</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
       <label>weight</label>
      <input
        type="text"
        name="weight"
        value={user.weight}
        onChange={handleInputChange}
      />
       <label>Notes</label>
      <input
        type="text"
        name="Notes"
        value={user.Notes}
        onChange={handleInputChange}
      />
      <div className={s.buttons_mrg}>
        <button>Update user</button>
        <button
            /* обновляем флаг editing, будет представлен в App позже */
            onClick={() => props.setEditing(false)}
            className="button muted-button">Cancel</button>
      </div>
    </form>
  )
}

export { EditUserForm }