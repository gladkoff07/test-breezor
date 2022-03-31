import './search.scss'

export const ListCategory = ({ category }) => {
  return (
    <div className='list-category wrapper-search__list-category'>
      {category.map((item, index) => (
        <a
          href='#'
          key={item}
          className={
            index === 0
              ? 'list-category__item list-category__item--active'
              : 'list-category__item'
          }
        >
          {item}
        </a>
      ))}
    </div>
  )
}
