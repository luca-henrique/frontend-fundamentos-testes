import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const SignIn = lazy(() =>
  import('src/pages/SignIn').then(module => ({
    default: module.SignIn,
  })),
)
const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

const Home = lazy(() =>
  import('src/pages/Home/Home').then(module => ({
    default: module.Home,
  })),
)

const List = lazy(() =>
  import('src/pages/List/List').then(module => ({
    default: module.List,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route path="/404" component={GenericNotFound} />

        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />

        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
