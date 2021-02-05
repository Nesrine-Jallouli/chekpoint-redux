import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'
import {editItem} from '../JS/actions/actionTask'


class Modals extends Component {
    state={
        show:false,
        myinput:this.props.item.text
    }

  handleShow = () =>{ 
        this.setState({
            show: !this.state.show
    })};

handleChange=(e)=>{
    this.setState({
        myinput:e.target.value
    })
}

edit=()=>{
    this.props.editItem({id:this.props.item.id, text: this.state.myinput});
    this.setState({
        myinput:''
    })
}


  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit items</Modal.Title>
          </Modal.Header>
          <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={this.state.myinput}
                  onChange={this.handleChange}
                />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{this.handleShow(); this.edit()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const MapDispatchtoprops={
    editItem
}

export default connect(null, MapDispatchtoprops)(Modals)