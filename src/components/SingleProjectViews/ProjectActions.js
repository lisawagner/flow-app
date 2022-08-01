import { useState, useRef, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
// styles
import styles from './ProjectActions.module.css'

// icons
import { RiArrowDownSLine, RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
import EditProjectForm from './EditProjectForm';

const ProjectActions = ({ project }) => {
  const { deleteDocument } = useFirestore('projects')
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const projectBtnRef = useRef()
  const history = useNavigate()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleDelete = () => {
    deleteDocument(project.id)
    setIsOpen(!isOpen)
    history('/projects')
  }
  const handleEdit = ( project ) => {
    setShowModal(!showModal)
    setIsOpen(!isOpen)
    // console.log("Handling edit for: ", project);
  }

  const handleClose = () => {
    setShowModal(!showModal)
  }

  const handleClickOutside = (e) => {
    if (projectBtnRef.current && !projectBtnRef.current.contains(e.target)) {
      setIsOpen(false)
    }
    };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown",  handleClickOutside);
  }, []);

  return (
  <>
    <div className={styles.pHeaderBtnWrap} ref={projectBtnRef}>
      <div className={styles.pHeaderBtnContainer}>
        <button
          type='button'
          className={styles.pActionsBtn}
          onClick={handleToggle}
        >
          <RiArrowDownSLine />
        </button>
      </div>

      {isOpen && (
        // TODO: Extract to separate component
        <div className={styles.dropDownContainer}>
          <div className={styles.dropDownWrap}>
            <div className={styles.actionsDropdown}>

              <div >
                <button
                  className={styles.actionsItemBtn}
                  onClick={() => handleEdit(project)}
                >
                  <RiPencilLine className={styles.actionsIcon}/>
                  <span>Edit project details</span>
                </button>
              </div>

              <span className={styles.actionSpacer}></span>

              <div >
                <button
                  className={`${styles.actionsItemBtn} ${styles.delete}`}
                  onClick={handleDelete}
                  >
                    <RiDeleteBinLine className={styles.actionsIcon}/>
                    <span>Delete project</span> 
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {showModal && (
        <Modal>
          {/* <button className={styles.closeBtn} onClick={() => setShowModal(!showModal)}>X</button> */}
          <EditProjectForm project={project} onClose={handleClose}/>
        </Modal>
      )}

    </div>
  </>
  )
}

export default ProjectActions