import './App.css'

function App() {
  return (
    <div className='navbar'>
      <div className='option-set-one'>
        <i className='ri-menu-line'></i>
        <div className='info'>
          <strong> Item 1 of 10 </strong>
          <p> Question Id: 968 </p>
        </div>
        <div className='mark'>
          <input type='checkbox' name='check' id='checkbox' />
          <i className='ri-flag-2-line'></i>
          <p className='inline'>Mark</p>
        </div>
      </div>
      <div className='option-set-two'>
        <div className='prev'>
          <i className='ri-skip-back-line'></i>
          <p>Previous</p>
        </div>
        <div className='next'>
          <i className='ri-skip-forward-line'></i>
          <p>Next</p>
        </div>
      </div>
      <div className='option-set-three'>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
        <div className='icon'>
          <i className='ri-apps-fill'></i>
          <p>Next</p>
        </div>
      </div>
    </div>
  )
}

export default App
