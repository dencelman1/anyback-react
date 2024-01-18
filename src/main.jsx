import ReactDOM from 'react-dom/client'
import AnyBackAdminPanel from './AnyBackAdminPanel.jsx'
import './index.scss'




var options = {
  name: 'Admin authorization',

  checkAuth: (
    result, // token
  ) => { // Promise<boolean> or boolean возвращает
    return true

  },

  auth: (login, password) => {
    // return true

    // 1
    return new Promise((res, rej) => res("myToken"))
    // return "myToken"
    return (login === 'Masha' && password === '1234')
    
    // 2
    // return Promise((res, rej) => {
    //   res(true)
    // })

    // 3
    // return Promise((res, rej) => {
    //   res("AUTH_TOKEN")
    // })

    // 4
    // return Promise((res, rej) => {
    //   rej("Error: invalid password")
    // })

  },





}


var rootElement = document.querySelector('#root');
var root = ReactDOM.createRoot(rootElement);

root.render(
  <AnyBackAdminPanel
    options={options}
  />
)

export default options;
