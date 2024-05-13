import React from 'react'
import { useAtom } from 'jotai'
import { dataAsyncToms } from './state/state'
export default function Demo() {
    const asyncToms = useAtom(dataAsyncToms)
    console.log(asyncToms,55555555555)
    if (asyncToms[0].state === 'hasError') return <div>{asyncToms[0].state}</div>
    return (
        <div style={{color:'red'}}>demo----------{asyncToms[0].data}</div>
    )
}
