import './styles/App.css';
import ChatWindow from './components/ChatWindow';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isShown = useSelector((state) => state.isShown)
  const details = useSelector((state) => state.details)
  const dispatch = useDispatch()

  // console.log("hello" + isShown)

  return (
    <div className='body'>
      {isShown == 0 && <button className='btn' onClick={() => dispatch({type: 'show', payload: 1})}>Enroll now!</button>}
      {isShown == 1 && <ChatWindow />}
      {isShown == 2 && <div className='final'>Your name {details[0]} aged {details[1]} has been added to student system. You may now exit.</div>}
    </div>
  )
}

export default connect()(App);
