import { atom, Provider } from 'jotai'
import { ReactNode } from 'react'
import {loadable} from 'jotai/utils'
const state1 = atom(1)
const state2 = atom(2)
const asyncAtom = atom(async (get) => get(state1) * 10)
const dataAsyncToms = loadable(asyncAtom)
//getter atom

const ProviderComp: React.FC<any> = (Children: ReactNode & any) => {
    return (
        <Provider>
            <Children />
        </Provider>
    )
}
export {
    state1,
    state2,
    ProviderComp,
    asyncAtom,
    dataAsyncToms
}