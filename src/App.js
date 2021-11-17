import './App.css';
import React, { useState }
  from 'react';
import { PrimaryButton } from '@jonakru/modal.ui.button'
import { Card } from '@jonakru/modal.ui.card'
import { ModalConfirm } from '@jonakru/modal.ui.modal-confirm';

const App = () => {
  const [open, setOpen] = useState(false)
  const confirm = () => alert('Confirm');

  return (<>
    {open ? <PrimaryButton text="Hide modal" cb={() => setOpen(false)}></PrimaryButton> :
      <PrimaryButton text="Show modal" cb={() => setOpen(true)}></PrimaryButton>}
    <ModalConfirm
      show={open}
      backDrop={false}
      clickAway={false}
      onConfirm={confirm}
      showCancel={false}
      closeModal={() => setOpen(false)}
    >
      <Card title={"Hello world"} subTitle={"Testing component"} text="Lorem ipsum dorom"></Card>
    </ModalConfirm>
  </>
  )
}

export default App;
