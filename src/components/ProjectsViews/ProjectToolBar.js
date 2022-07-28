import { useState } from 'react'
import Select from "react-select";

const categories = [
  { value: 'allProjects', label: 'All Projects' },
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'personal', label: 'Personal' },
]

// TODO: Add Searchbar + functionality
// TODO: Integrate into ProjectPage
const ProjectToolBar = () => {
  const [category, setCategory] = useState('')

  return (
    <div>
      <Select
        onChange={(option) => setCategory(option)}
        options={categories}
      />
    </div>
  )
}

export default ProjectToolBar