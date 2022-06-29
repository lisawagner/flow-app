import { useEffect } from 'react'
import { useTitle } from '../context/TitleContext' 

const TitleWrapper = ({children, title}) => {
  const { setTitle } = useTitle()

  useEffect(() => {
    setTitle(title)
  }, [setTitle, title])
  
  return children
}

export default TitleWrapper