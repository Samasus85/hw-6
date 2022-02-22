
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Contents/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/Profile/NavBar';
import Navigation from './components/Contents/Navigation/Navigation';
import Dialogs from './components/Contents/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/home' element={<Content state={props.state.postPage} addPost={props.addPost}
            // postData={props.state.postPage.postData}
            />} />
            <Route path='/navigation' element={<Navigation />} />
            <Route path='/dialogs/*'
              element={<Dialogs state={props.state.messagePage} addDialog={props.addDialog}
              // dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages} 
              />}
            // render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
