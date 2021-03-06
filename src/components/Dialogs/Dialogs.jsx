import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
    values.newMessageBody = ''
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <Grid container className={s.dialogs__container}>
      <Grid className={s.dialogs__items} item xs={2}>
        {dialogsElements}
      </Grid>
      <Grid className={s.messages__container} item xs={10}>
        <Stack className={s.message__item} spacing={2}>
          {messagesElements}
        </Stack>
        <div className={s.message__send_field}>{/* <AddMessageForm onSubmit={addNewMessage} /> */}</div>
        <AppBar position='fixed' sx={{ top: 'auto', bottom: 0, backgroundColor: '#546e6d' }}>
          <Toolbar style={{ alignSelf: 'center' }}>
            <AddMessageForm onSubmit={addNewMessage} />
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  )
}

export default Dialogs
