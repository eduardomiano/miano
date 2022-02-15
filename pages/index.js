import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

function Index() {

    return (
        <>
            <div>Ola mundo</div>
            <Contador />
            <Link href='/about'>
                <a>About</a>
            </Link>
        </>
    )
}

function Contador() {
    const [contador, setContador] = useState(0)

    function addCount() {
        contador += 1;
        setContador(contador);
    }

    function removeCount() {
        if (contador > 0)
            contador -= 1

        setContador(contador)
    }

    debugger

    return (
        <>
            <div>Contador: {contador}</div>
            <button onClick={addCount}>Add</button>
            <button onClick={removeCount}>Remove</button>
        </>
    )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Index;