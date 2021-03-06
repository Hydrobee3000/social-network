import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validarors'
import { Input } from '../common/FormsControls/FormsControls'
import { minLengthCreator } from './../../utils/validators/validarors'
import { connect } from 'react-redux'
import { login } from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from './Login.module.css'
import { Paper } from '@material-ui/core'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const maxLength20 = maxLengthCreator(20)
const minLength4 = minLengthCreator(4)
const minLength8 = minLengthCreator(8)

const LoginForm = (props) => {
  return (
    <div className={s.login__container}>
      <Paper className={s.login__wrapper}>
        <form onSubmit={props.handleSubmit}>
          {/* <div className={s.name_field__wrapper}> */}
          <Typography className={s.name__field} variant='h4' gutterBottom component='div'>
            Login
          </Typography>
          {/* <h1>Login</h1> */}
          {/* </div> */}

          <div className={s.email__text_field}>
            <Field
              placeholder={'Email'}
              name={'email'}
              component={Input}
              label={'Email'}
              id={'outlined-basic'}
              variant={'outlined'}
              validate={[required, maxLength20, minLength4]}
            />
          </div>
          <div className={s.password__text_field}>
            <Field
              placeholder={'Password'}
              name={'password'}
              type={'password'}
              component={Input}
              label={'Password'}
              id={'outlined-basic'}
              variant={'outlined'}
              validate={[required, maxLength20, minLength8]}
            />
          </div>
          <div className={s.checkbox}>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
          </div>
          {props.captchaUrl && (
            <div className={s.captcha__container}>
              <img src={props.captchaUrl} alt='captcha' />
              <Field
                placeholder={'Symbols from image'}
                name={'captcha'}
                component={Input}
                label={'Captcha'}
                id={'outlined-basic'}
                variant={'outlined'}
                validate={[required]}
              />
            </div>
          )}
          {/* captcha */}
          {props.error && <div className={s.form__summary_error}>{props.error}</div>}
          <Button onClick={props.handleSubmit} variant='outlined' style={{ color: '#2b7a78' }}>
            Login
          </Button>
        </form>
      </Paper>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
