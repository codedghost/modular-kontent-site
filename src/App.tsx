import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AppProps } from './AppProps';
import PageComponent from './components/PageComponent/PageComponent';
import { RouteType } from './KontentTypes/Route';

function App({KontentClient}: AppProps) {
  const [routes, setRoutes] = useState<JSX.Element[]>(([]));

  useEffect(() => {
    if (Object.keys(KontentClient).length !== 0)
    {
      KontentClient.items<RouteType>().type('route')
        .depthParameter(5)
        .toPromise()
        .then((response) => {
          setRoutes(response.data.items.map((e, index) => 
              (
                <Route path={e.elements.url_fragment.value} key={index} element={<PageComponent PageContent={e.elements.page.linkedItems[0].elements} />} />
              )
            ));
        })
    }
  }, [KontentClient])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  KontentClient: {}
} as AppProps

export default App;
