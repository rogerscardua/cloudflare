// https://github.com/quasarframework/quasar/discussions/8761#discussioncomment-1042529

import { QInput, QBtn } from 'quasar'

QInput.props.outlined = {
  type: QInput.props.outlined,
  default: true
}

QInput.props.dense = {
  type: QInput.props.dense,
  default: true
}
// clearable icone de limpar
QInput.props.clearable = {
  type: QInput.props.clearable,
  default: false
}

QInput.props.stackLabel = {
  type: QInput.props.stackLabel,
  default: false
}
QInput.props.hideBottomSpace = {
  type: QInput.props.hideBottomSpace,
  default: true
}
QBtn.props.color = {
  type: QBtn.props.color,
  default: 'primary'
}

QBtn.props.dense = {
  type: QBtn.props.dense,
  default: false
}
