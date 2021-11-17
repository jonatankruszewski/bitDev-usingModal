import './App.css';
import React, { useState, useEffect }
  from 'react';
import { PrimaryButton } from '@jonakru/modal.ui.button'
import { ModalConfirm } from '@jonakru/modal.ui.modal-confirm'
const App = () => {
  const [open, setOpen] = useState(false)
  const cancel = () => alert('Cancelled');
  const cnfirm = () => alert('Confirm');

  return (<>
    {open ? <PrimaryButton text="Hide modal" cb={() => setOpen(false)}></PrimaryButton> :
      <PrimaryButton text="Show modal" cb={() => setOpen(true)}></PrimaryButton>}
    <ModalConfirm show={open}
      onConfirm={cnfirm} backDrop={true} clickAway={false} onCancel={cancel}>
      <div>Hello I am a child</div>
    </ModalConfirm>

  </>
  )
}

export default App;
