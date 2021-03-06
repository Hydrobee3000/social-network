import s from './FormsControls.module.css'
import TextField from '@material-ui/core/TextField'

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.form__control + ' ' + (hasError ? s.error : '')}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormControl {...props}>
      <TextField {...input} {...restProps} />
    </FormControl>
  )
}
