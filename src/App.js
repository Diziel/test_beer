import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const lazyImport = (
  filename,
) => (
  lazy(() => (
     import(`${filename}`)
  ))
)

const MainPage = lazyImport('./components/MainPage')
const SinglePage = lazyImport('./components/SinglePage')

const Loading = () => (
  <h1 className="text-center">Loading...</h1>
)

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:id" component={SinglePage} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App