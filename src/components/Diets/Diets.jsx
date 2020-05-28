import React, { useState } from 'react';
import s from "./Diets.module.css";
import Table from './Table/Table';
import { AddUserForm } from '../Forms/AddUserForm';
import { EditUserForm } from '../Forms/EditUsersForm'

const Diets = (props) =>{

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Max', username: 'maxfarseer' },
  ]

  const [users, setUsers] = useState(usersData)
  // флаг editing - изначально false, функция установки флага
  const [editing, setEditing] = useState(false)
  // начальное значение для формы редактирования
  // так как мы не знаем, кто редактируется - пустые поля
  const initialFormState = { id: null, name: '', username: '' }
  // значение "текущий пользователь на редактировании" + функция установки этого значения
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }
  
  // обновление пользователя
  const updateUser = (id, updatedUser) => {
    // когда мы готовы обновить пользователя, ставим флажок editing в false
    setEditing(false)
    // и обновляем пользователя, если нашли его по id
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  // редактирование пользователя
  const editRow = user => {
    // готовы редактировать - флажок в true
    setEditing(true)
    // устанавливаем значения полей для формы редактирования
    // на основании выбранного "юзера"
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

    return <section class={s.add_diet}>
    <h1>You can add, customize and delete diet</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At magni debitis, tempore fugit obcaecati perspiciatis
        aliquid corporis eos non ad!</p>
        <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
        {/* передаем deleteUser */}
        <h2>Add user</h2>
       <AddUserForm addUser={addUser} />

      <Table users={users} editRow={editRow} deleteUser={deleteUser}/>
</section>
}


export default Diets;