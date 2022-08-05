import { Button, Modal, Tooltip, Form, Input, message } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createDevice } from '../../redux';
import { fetchingTableDevice } from '../../redux';
const { TextArea } = Input;
class CreateDevice extends Component {
    //const [isModalVisible, setIsModalVisible] = useState(false);
    state = {
        isModalVisible: false
    }

    showModal = () => {
        this.setState({
            isModalVisible: true
        })
    };

    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
        // this.props.fetchingTableDevice()
    };
    onFinish = (value) => {
        this.props.createDevice(value)
        this.handleOk()
    }
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };
    render() {
      console.log(this.props.devices.create.data)
      const {create} = this.props.devices
      if (create.data.code === 200) {
          return (
            <Navigate to={"/devices"}/>
          )
      }
        return (
            <>
                <Tooltip color={'blue'} title={'Create New Device'}>
                    <Button type='primary' className='btn-insert' onClick={this.showModal}>
                        Create
                    </Button>
                </Tooltip>
                <Modal title="CREATE A NEW INVERTER" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
                    <Form onFinish={this.onFinish}
                        layout="vertical"
                    >
                        <Form.Item label="SERIAL" name="serial">
                            <Input placeholder="Input SERIAL" />
                        </Form.Item>
                        <Form.Item label="MODEL" name = "model">
                            <Input placeholder="Input MODEL" />
                        </Form.Item>
                        <Form.Item label="DESCRIPTION" name = "description">
                            <TextArea placeholder="Input DESCRIPTION" />
                        </Form.Item>
                        <Form.Item label="INTERVAL" name = "interval">
                            <Input placeholder="Input INTERVAL" />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" className='btn-submit'>Submit</Button>
                            <Button className='btn-cancel' onClick={this.handleCancel}>Cancel</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        createDevice: (params) => {
            dispatch(createDevice(params))
        },
        fetchingTableDevice: () => {
            dispatch(fetchingTableDevice())
        }
        
    }
}
function mapStateToProps(state) {
    return {
        devices: state.device
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDevice)
