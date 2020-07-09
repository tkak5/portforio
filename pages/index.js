import Head from 'next/head'
import { getAllWorksData } from '../lib/works'

export async function getStaticProps() {
  const allWorksData = getAllWorksData()
  return {
    props: {
      allWorksData
    }
  }
}


export default function Home({ allWorksData }) {
  return (
    <section className="container px-5 py-24 mx-auto">
      <div>
        <p className="text-center">三輪 貴陽</p>
        <p className="text-center">1995.5.5</p>
        <a href="https://github.com/tkak5" target="blank"><p className="text-center text-blue-500">github</p></a>
      </div>
      <h1 className="p-4 text-lg font-bold text-center">ポートフォリオ</h1>
      <ul className="flex flex-wrap">
        {allWorksData.map(({id, title, category, techs, url, photo, git, comment}) => (
          <li id={id} className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="w-full object-cover object-center">
                <a href={url} target="blank"><img className="w-full h-full" src={photo}/></a>
              </div>
              <div className="p-6">
                <p className="text-lg">{category}({title})</p>
                <ul className="my-2">
                  <p className="font-bold">使っている技術</p>
                  {techs.map((tech) => (
                    <li className="">{tech}</li>
                  ))}
                </ul>
                <a target="blank" href={url} className="text-blue-500"><p>link</p></a>
                <a target="blank" href={git} className="text-blue-500"><p>source code</p></a>
                <p>{comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
    
  )
}
