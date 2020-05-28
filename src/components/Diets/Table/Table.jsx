import React, { useState } from 'react'
import s from "./Table.module.css";



function DietDataName(props) {
    return <h1>{props.name}</h1>;
}

const Table = (props) =>{
    const handleDeleteUser = id => {
    // не забываем спросить пользователя,
    // действительно ли он хочет удалить запись
    let answer = window.confirm('Are you sure?')

    if (answer) {
      props.deleteUser(id)
    }
  }
    return <section className={s.Diet_1}>
   <DietDataName name="Diet 1" />
    <p className="NameData"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        alias architecto doloremque optio amet dolores, repellat fuga minus
        adipisci cupiditate vero hic! Voluptates iste sequi magni itaque,
        sunt provident sapiente ratione ipsa! Facilis illum eveniet cupiditate?
        Magni dignissimos consequuntur totam esse eius nisi aspernatur corrupti
        iure obcaecati aliquid eaque nesciunt possimus officiis delectus quas quis
        dolorum mollitia perspiciatis, velit impedit!</p>
    <table>
        <tr className={s.first_line}>
            <th>Day</th>
            <th>Date</th>
            <th>Weight</th>
            <th>Diferent</th>
            <th className={s.note}>Notes</th>
            <th>Edit/Delete</th>
        </tr>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.weight}</td>
                    <td>{user.Different}</td>
                    <td>{user.Notes}</td>
                    <td>
                    <button onClick={() => { props.editRow(user) }}
                  className="button muted-button">Edit</button>
                    <button className="button muted-button"
                  onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={3}>No users</td>
                </tr>
            )}
    </tbody>   
    </table>
    <div className={s.flex_1}>
        <button>DELETE DIET</button>
        <button>CUSTOMIZE DIET</button>
        <button>SAVE</button>
    </div>
</section>

}

export default Table;