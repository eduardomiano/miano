import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

function Index() {

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Cronograma 2022</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        BTG Pactual Empresas
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Principais Projetos
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link href='/roadmap/[...slug]' as={feature.url}>
                                <a className='hover:bg-indigo-50 p-2'>
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </dl>
                </div>

            </div>
        </div>
    )
}



function Contador() {
    let [contador, setContador] = useState(0)

    function addCount() {
        contador += 1;
        setContador(contador);
    }

    function removeCount() {
        if (contador > 0)
            contador -= 1

        setContador(contador)
    }



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

const features = [
    {
        name: 'Banking',
        description:
            'Conta corrente, Saldo Remunerado, Cheque Especial, Boletos, etc',
        icon: GlobeAltIcon,
        url: 'roadmap/4de8f2cce7208f48616d18089a7448b7fe79224a'
    },
    {
        name: 'Risco Sacado',
        description:
            'Quickfin e Integra????es de Sacados.',
        icon: ScaleIcon,
        url: 'roadmap/046b53547f74e473be48014d1628c12f8dfe5424'
    },
    {
        name: 'BTG ID',
        description: 'BTG ID e Onboarding PJ Unificado',
        icon: LightningBoltIcon,
        url: 'roadmap/78f7223ac5ef0cfc25de5eb1519586cbbb5ea1a3'

    },
    {
        name: 'Mobile',
        description:
            'Aplicativo Mobile.',
        icon: AnnotationIcon,
        url: 'roadmap/3f36db78a0c3df6bf848aba6544a6a743f349f5d'
    },
    {
        name: 'Billing Fee',
        description:
            'Billing Fee & Rebate.',
        icon: LightningBoltIcon,
        url: 'roadmap/464457f8b5f54c7454ae1b575151d807a8094e34'
    },
    {
        name: 'Credito',
        description:
            'Capital de Gito, Emprestimos, Agro e Solar.',
        icon: AnnotationIcon,
        url: 'roadmap/78f7223ac5ef0cfc25de5eb1519586cbbb5ea1a3'
    },
    {
        name: 'Developers',
        description:
            'Automa????es, Catalogo de APIs.',
        icon: LightningBoltIcon,
        url: 'roadmap/78f7223ac5ef0cfc25de5eb1519586cbbb5ea1a3'
    },
    {
        name: 'Cart??es',
        description:
            'Cart??o de Cr??dtio e D??bito.',
        icon: AnnotationIcon,
        url: 'roadmap/78f7223ac5ef0cfc25de5eb1519586cbbb5ea1a3'
    },
    {
        name: 'LATAM',
        description:
            'Chile e Colombia.',
        icon: AnnotationIcon,
        url: 'roadmap/78f7223ac5ef0cfc25de5eb1519586cbbb5ea1a3'
    },
    {
        name: 'Atendimento',
        description:
            'Portal Admin e Portal de Antedimento.',
        icon: AnnotationIcon,
        url: 'roadmap/78f7223ac5ef0cfc25de5eb1519586cbbb5ea1a3'
    },
]

export default Index;