import Icons from '../../img/sprite.svg'

export const Icon = ({ name, color, size }) => (
  <svg className={`icon icon_${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon_${name}`} />
  </svg>
)
