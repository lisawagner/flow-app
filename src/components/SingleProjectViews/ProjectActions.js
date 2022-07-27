import { useState, useRef, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom'
// styles
import styles from './ProjectActions.module.css'

// icons
import { RiArrowDownSLine, RiPencilLine, RiDeleteBinLine } from "react-icons/ri";

const ProjectActions = ({ project }) => {
  const { deleteDocument } = useFirestore('projects')
  const [isOpen, setIsOpen] = useState(false)
  const history = useNavigate()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleDelete = () => {
    deleteDocument(project.id)
    setIsOpen(!isOpen)
    history('/projects')
  }

  return (
    <div className={styles.pHeaderBtnWrap}>
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
                  onClick={handleToggle}
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

    </div>
  )
}

export default ProjectActions