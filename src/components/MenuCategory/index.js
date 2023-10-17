import './index.css'

const MenuCategory = props => {
  const {details, onMenuItemClick, isActive} = props
  const {value, id} = details
  const onCategoryClick = () => {
    onMenuItemClick(id)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className={isActive ? 'active-category-button' : 'category-button'}
        onClick={onCategoryClick}
      >
        {value}
      </button>
    </li>
  )
}

export default MenuCategory
