import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App as AppLayout } from './layouts/App'
import {store} from './common/store';
import { Provider } from 'react-redux';
import { Home } from './feautures/Home';
import { ViewReport } from './feautures/ViewReport';
import { Monitor } from './feautures/Monitor';
import { Auth } from './layouts/Auth';
import { Login } from './feautures/Auth/view/Login';
import { ApiSource } from './feautures/ApiSource/view/Index';
import { Device } from './feautures/Devices/view/Index';
import { ConfigReport } from './feautures/ConfigReport/view/Detail';
import { TagPage } from './feautures/Tag/view/Detail';
import { DataHubPage } from './feautures/DataHub/view';
import { MonitorTagPage } from './feautures/Tag/view/Monitor';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Auth><Login /></Auth>} />
          <Route path='/home' element={<AppLayout><Home /></AppLayout>} />
          <Route path='/plant/:id' element={<AppLayout><ViewReport /></AppLayout>} />
          <Route path='/monitor' element={<AppLayout><Monitor /></AppLayout>} />
          <Route path='/api-source' element={<AppLayout><ApiSource /></AppLayout>} />
          <Route path='/api-source/:id' element={<AppLayout><Device /></AppLayout>} />
          <Route path='/api-source/:id/:id' element={<AppLayout><TagPage /></AppLayout>} />
          <Route path='/api-source/:id/:id/monitor' element={<AppLayout><MonitorTagPage /></AppLayout>} />
          <Route path='/devices' element={<AppLayout><Device/></AppLayout>} />
          <Route path='/config/report' element={<AppLayout><ConfigReport /></AppLayout>} />
          <Route path='/tags' element={<AppLayout><TagPage /></AppLayout>} />
          <Route path='/data-hub' element={<AppLayout><DataHubPage /></AppLayout>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
