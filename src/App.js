import './App.css';
import React, { useState, useEffect }
  from 'react';
import { PrimaryButton } from '@jonakru/modal.ui.button'
import { Modal } from '@jonakru/modal.ui.modal'
import { Card } from '@jonakru/modal.ui.card'
import { ModalConfirm } from '@jonakru/modal.ui.modal-confirm';

const App = () => {
  const [open, setOpen] = useState(false)
  const cancel = () => alert('Cancelled');
  const cnfirm = () => alert('Confirm');

  return (<>
    {open ? <PrimaryButton text="Hide modal" cb={() => setOpen(false)}></PrimaryButton> :
      <PrimaryButton text="Show modal" cb={() => setOpen(true)}></PrimaryButton>}
    <ModalConfirm
      show={open}
      backDrop={false}
      clickAway={false}
      onConfirm={cnfirm}
      showCancel={false}
      closeModal={() => setOpen(false)}
    >
      <Card title={"Hello world"} subTitle={"Testing component"} text="Lorem ipsum dorom"></Card>
    </ModalConfirm>
  </>
  )
}

export default App;
