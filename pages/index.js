//function HomePage() { //this will error! thats ok
//  return <div>Welcome to Next.js!</div>
//  return <main>
//    <LineChart></LineChart>
//  </main>
//}

export default function HomePage() {
  <main>
    <LineChart />
  </main>
}

import LineChart from "./lineChart"


  // This function gets called at build time
  export async function getStaticProps() {
    // Call an external API endpoint to get perfomance data (for the vps)
    const config = require("../config.json")
    //const res = await fetch('http://',config.NetDataUrl)
    const perfomance_data = "placeholder" //await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        perfomance_data,
      },
    }
  }
  
  export default HomePage