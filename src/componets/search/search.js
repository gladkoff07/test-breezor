import { Button } from './button'
import { ListCategory } from './listCategory'
import './search.scss'
import { Icon } from '../icon'

export const Search = ({ category }) => {
  return (
    <div className='wrapper-search intro__wrapper-search'>
      <div className='wrapper-search__header'>
        Мир Breezzor огромный, исследуй его!
      </div>
      <ListCategory category={category} />
      <form className='form wrapper-search__form'>
        <div className='form__row'>
          <input
            type='text'
            placeholder='Поиск по стране, региону, городу, название пляжа'
            className='form__input'
          />
          <button className='form__button-filter'>
            <Icon name='filters' color='#434343' size={24} />
          </button>
        </div>
        <div className='form__row form__row--end'>
          <Button
            type='button'
            text='На карте'
            classNames='button button--white button--margin-right'
          />
          <Button
            type='button'
            text='Все пляжи страны'
            classNames='button button--blue'
          />
        </div>
      </form>
    </div>
  )
}
