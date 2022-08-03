import * as React from "react"

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
const modalBaseStyle = {
    border: '1px dashed gray',
    position: 'fixed',
    zIndex: 10,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  const clickHandler = event => {
      if(event.target.className === 'modalBase') {
          setIsOpen(false)
      }
    }
  if(!isOpen) return null

  return (
      <div className='modalBase' onClick={e => clickHandler(e)} {...props} style={modalBaseStyle}>
          {props.children}
      </div>
  )
}

const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '20px',
    zIndex: '11',
    width: '35%',
    height: '40%',
    overflow: 'auto'
}
function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div style={modalContentStyle}>
        <div css={{ display: "flex", justifyContent: "flex-end" }}>
          <ModalDismissButton>
            <button>Close</button>
          </ModalDismissButton>
        </div>
        <h1>{title}</h1>
        {children}
      </div>
    </ModalContentsBase>
  )
}

export { Modal,ModalContentsBase, ModalDismissButton, ModalDismissAsyncButton, ModalOpenButton, ModalContents }