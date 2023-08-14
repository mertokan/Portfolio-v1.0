import classNames from 'classnames'
import PropTypes from 'prop-types'
import {createElement} from 'react'

const Button = ({children, as, variant, size, ...props}) => {
  return createElement(
    as,
    {
      ...props,
      className: classNames(
        'inline-flex items-center justify-center border rounded-[50px] font-medium min-w-[170px] transition-all duration-300',
        {
          'bg-state-yellow border-state-yellow text-site-darkcolor2 hover:-translate-y-1 hover:shadow-lg hover:shadow-state-yellow/30':
            variant === 'primary',
          'border-state-yellow text-state-yellow hover:bg-state-yellow hover:text-neutral-10 hover:shadow-lg hover:shadow-state-yellow/30':
            variant === 'secondary',
          'rounded-none px-2 h-8 justify-items-start gap-3 text-blue-300 bg-primary-0 hover:bg-neutral-6 hover:bg-opacity-30 ':
            variant === 'activeTheme',

          'py-3': size === 'normal',
          'px-[3.2em] py-[0.69em]': size === 'small',
          'px-[1.5em] py-[12px]': size === 'medium',
        }
      ),
    },
    children
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'small', 'medium']),
  as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  props: PropTypes.any,
}

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'normal',
}

export default Button
