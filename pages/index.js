import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";
import { useState } from 'react'

function Vote1() {
  console.log('1');
}
function Vote2() {
  console.log('2');
}

export default function Home() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
    <form onSubmit={handleSubmit((data)=>console.log(JSON.stringify(data)))}>
      <h2>개인 번호와 사유를 쓰세요</h2>
      <input id="ID" type="number" placeholder='ID' {...register("ID")} />
      <hr/>
      <input id="reason" type="text" placeholder='사유' {...register("reason")} />   
      <hr/>
      <yay>
        <button type="submit" onClick={Vote1}>Opt1</button>
        <button type="submit" onClick={Vote2}>Opt2</button>
      </yay>
    </form>
    </div>
  )
}