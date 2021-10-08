import '../styles/globals.css'

function MyApp({ Component, pageProps, processId }) {
  return <div>process id: {processId}</div>
}

MyApp.getInitialProps = () => {
  return {
    processId: process.pid
  }
}

export default MyApp;
