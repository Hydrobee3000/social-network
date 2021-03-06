const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
  dialogs: [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
  ],
  messages: [
    { id: 1, message: 'Never' },
    { id: 2, message: 'Gonna' },
    { id: 3, message: 'Give You Up' },
  ],
}

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      }

    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody: any) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer
