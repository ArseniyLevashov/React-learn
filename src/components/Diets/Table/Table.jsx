import React from 'react';
import s from "./Table.module.css";

const Table = (props) =>{

    return <section className={s.Diet_1}>
    <h2>My Diet 1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
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
        </tr>
        <tr>
            <td>data</td>
            <td>data</td>
            <td>data</td>
            <td>data</td>
            <td>data</td>
        </tr>   
    </table>
    <div className={s.flex_1}>
        <button>DELETE DIET</button>
        <button>CUSTOMIZE DIET</button>
        <button>SAVE</button>
    </div>
</section>

}

export default Table;