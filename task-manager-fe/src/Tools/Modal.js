import * as React from "react"
import '../Styles/Modal.css'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))
// callAll takes functions as arguments, then returns another function, which then takes in any number of arguments and calls each function in the original list of functions with those argument

const ModalContext = React.createContext()
// Initialize React Context reference for Modal

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false)
  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}
//Modal wrapper that provides the context of 'isOpen' State to its children

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}
//Wrapper for a dismiss button, clones the child element, setting the onClick to call both setIsOpen and any onClick method defined in the children

function ModalDismissAsyncButton({ children: child }) {
    const [, setIsOpen] = React.useContext(ModalContext)
    return React.cloneElement(child, {
      onClick: callAll(() =>
        child.props
          .onClick()
          .then(res => (res === "success" ? setIsOpen(false) : null))
      ),
    })
  }

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  })
}
//Same as Close button
function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  const clickHandler = event => {
      if(event.target.className === 'modal--base') {
          setIsOpen(false)
      }
    }
  if(!isOpen) return null

  return (
      <div className='modal--base' onClick={e => clickHandler(e)} {...props}>
          {props.children}
      </div>
  )
}

function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div className="modal--contents">
        <h3 style={{fontSize: '3rem'}}>{title}</h3>
        {children}
      </div>
    </ModalContentsBase>
  )
}

export { Modal,ModalContentsBase, ModalDismissButton, ModalDismissAsyncButton, ModalOpenButton, ModalContents }