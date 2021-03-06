import Layout from '../components/layout'

const teamsList = [
  {
    trible: 'Banking',
    squads: [
      {
        name: 'Limite+ / Remunera+',
        count: 6
      },
      {
        name: 'Cartão de Crédito',
        count: 6
      },
      { name: 'Boletos', count: 3 },
      { name: 'Contas a Pagar', count: 3 }
    ]
  },
  {
    trible: 'Gestão',
    squads: [
      {
        name: 'Lider', count: 6
      },
      { name: 'PO', count: 4 }
    ]
  }
]

export default function Teams() {
  return (<>

    <Card title='Noteworthy technology acquisitions 2021' details='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
      buttonText='Read more' showButton={true} />
    <Card title='Miano' details={process.env.NEXT_PUBLIC_ANALYTICS_ID} showButton={false} buttonText='oi' />
    <Card title='Miano' details='details......' showButton={true} buttonText='oi'/>

  </>
  )
}

function Card(props) {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.details}</p>

      

      {(() => {
        if(props.showButton) {
          <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {props.buttonText}
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
          </a>
        }
      })()}

    </div>
  )
}

Teams.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

