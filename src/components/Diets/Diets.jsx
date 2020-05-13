import React from 'react';
import s from "./Diets.module.css";
import Table from './Table/Table';

const Diets = (props) =>{

    return <section class={s.add_diet}>
    <h1>You can add, customize and delete diet</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At magni debitis, tempore fugit obcaecati perspiciatis
        aliquid corporis eos non ad!</p>
        <button>CREATE NEW DIET</button>

      <Table />
</section>
}


export default Diets;