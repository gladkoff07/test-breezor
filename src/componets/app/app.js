import { Header } from '../header'
import { Search } from '../search/search'
import { Slider } from '../slider'
import './app.scss'

const NAME_PAGE = 'Сент_Винсент и Гренадины'

const sliderData = [
  'Испания',
  'Франция',
  'Сент Винсент и Гренадины',
  'Португалия',
  'Саудовская аравия',
  'Италия',
  'Греция',
]

const listCategory = ['Пляжи', 'Breezzor Pass', 'Впечатления', 'Маршруты']

export const App = () => {
  return (
    <div className='intro'>
      <div className='container'>
        <Header name={NAME_PAGE} />
        <Slider slides={sliderData} />
        <Search category={listCategory} />
      </div>
    </div>
  )
}
