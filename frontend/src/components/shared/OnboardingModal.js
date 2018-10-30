import React from 'react'
import { Modal, Button } from 'antd'
import coinbaselogo from '../../images/coinbaselogo.svg'
import krakenlogo from '../../images/krakenlogo.svg'
import uportlogo from '../../images/uportlogo.svg'

class OnboardingModal extends React.Component {
  constructor () {
    super()
    this.state = {
      modalVisible: false
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentWillReceiveProps (np) {
    if (typeof np.hasEther !== 'undefined' && np.clickedJoin !== 'undefined') {
      this.setState({modalVisible: np.clickedJoin, getEthModal: !np.hasEther && np.clickedJoin})
    }
  }

  showModal () {
    this.setState({modalVisible: true})
  }

  handleOk (e) {
    if (this.state.getEthModal) {
      this.setState({getEthModal: false, uportModal: true})
    } else {
      this.handleCancel()
      this.props.getUport()
    }
  }

  handleCancel (e) {
    this.setState({modalVisible: false})
  }

  render () {
    let footer, image, topText, bottomText
    if (this.state.getEthModal) {
      footer = [
        <Button key='back' onClick={this.handleCancel}>Back</Button>,
        <Button style={{backgroundColor: '#A4D573'}} key='submit' type='primary' onClick={this.handleOk}>
          Continue
        </Button>
      ]
      topText = <p style={{fontSize: 14, fontFamily: 'NowAltRegular', textAlign: 'center'}}>
        It looks like you don't have any ether, the currency of the<br />ethereum blockchain. You can fund your account with th<br />following providers:
      </p>
      image = <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 21}}>
        <img src={coinbaselogo} alt='coinbase logo' />
        <img src={krakenlogo} alt='kraken logo' />
      </div>
      bottomText = <p style={{fontSize: 14, fontFamily: 'NowAltRegular', textAlign: 'center', color: '#989898', marginTop: 33}}>
        If you would like to continue without ether, the accessible functionality will be limited.
      </p>
    } else {
      footer = [
        <Button key='back' onClick={this.handleCancel}>Back</Button>,
        <Button style={{backgroundColor: '#A4D573'}} key='submit' type='primary' onClick={this.handleOk}>
        Login with uPort
        </Button>
      ]
      topText = <p style={{fontSize: 14, fontFamily: 'NowAltRegular', textAlign: 'center'}}>
        To continue, you will need to scan the QR code that is<br />displayed with your uPort app. You will receive a prompt on<br />your phone to verify your login.
      </p>
      image = <div style={{display: 'flex', justifyContent: 'center', marginTop: 23}}>
        <img src={uportlogo} alt='uport logo' />
      </div>
      bottomText = <a style={{fontSize: 14, fontFamily: 'NowAltRegular', display: 'flex', justifyContent: 'center', marginTop: 23}} href='https://www.youtube.com/watch?v=talCRzqK9-c'>
        Watch Tutorial
      </a>
    }
    return (
      <Modal
        centered
        visible={this.state.modalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={footer}
        border='none'
      >
        <div>
          {topText}
          {image}
          {bottomText}
        </div>
      </Modal>
    )
  }
}

export default OnboardingModal
