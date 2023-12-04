'use client';

import { Button, Checkbox, Label, Modal, TextInput, Select, Textarea } from 'flowbite-react';
import { useRef, useState, React} from 'react';

function Component() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="fixed bottom-0 left-[96%] transform -translate-x-1/2 m-2 p-2  rounded-full">
        <svg className="w-6 h-6 text-tertiary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 18 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
        </svg>
      </Button>
      <Modal show={openModal} size="lg" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Crear nuevo posteo</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Título" />
              </div>
              <TextInput id="title"  placeholder="Mi título" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="body" value="Cuerpo del posteo" />
              </div>
              <Textarea id="body" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="body" value="Cuerpo del posteo" />
              </div>
              <Select defaultValue="global">
                <option value="global">Global</option>
                <option value="entretenimiento">Entretenimiento</option>
                <option value="deportes">Deportes</option>
          </Select>
            </div>

            <div className="w-full">
              <Button>Crear posteo</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal> 
    </>
  );
}

export default Component