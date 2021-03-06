import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, Text as PlainText, ScrollView } from "react-native";
import { Button, Icon, Text } from "react-native-elements";
import { connect } from "react-redux";
import _ from "lodash";

import { emailInviteValidator } from "util/validator";
import Input from "components/Input";
import ImageButton from "components/ImageButton";
import {
  modifyEmailInvitations,
  sendEmailInvitations,
  updateEmailErrorMessage
} from "actions/emailInvitation";
import AddIcon from 'components/icons/AddIcon';

const mapStateToProps = state => {
  return { ...state.email_invitations, ...state.member_form };
};

class InviteOthersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  componentDidUpdate(prevProps) {
    const { invitationResponse } = this.props;
    const { modalVisible } = this.state;
    if (invitationResponse !== prevProps.invitationResponse) {
      invitationResponse === "success" ? this.setState({ modalVisible: !modalVisible }) : "";
    }
  }

  render() {
    const { instructions, renderInstructions, invitationResponse, invitations } = this.props;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, minHeight: 50}}>
          <Text h4 style={styles.heading}>
            Would you like to add any other members to your account once it has been activated?
          </Text>
        </View>
        <View style={{ flex: 5, width: '100%' }}>
        <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
          {this.renderEmails()}
          {this.renderModal()}
          {this.renderTryAgain()}
        </ScrollView>
        </View>
        <TouchableOpacity style={{ alignSelf: 'flex-end', right: 30, backgroundColor: '#fff', shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            height: 50, width: 50, marginBottom: 20, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }} onPress={this.addEmail.bind(this, "add")}>
            <AddIcon style={{ width: 45, height: 45 }}/>
        </TouchableOpacity>
        <View style={{ flex: 1, width: '100%', paddingRight: 16 }}>
          <ImageButton/>
          <Button
            style={styles.nextBtn}
            title="Next"
            fontWeight= 'bold'
            fontFamily='Avenir' 
            buttonStyle={{
              backgroundColor: "#00A68C",
              width: '100%',
              height: 50,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 25,
              // elevation: 3,
              marginBottom:5,
              zIndex:0,
            }}
            textStyle={{
              fontSize:18 ,  
              fontFamily:'Avenir',
              fontWeight:'bold'
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={this.sendEmailInvitations.bind(this, invitations)}
          /> 
          {/* <Button
            raised
            icon={{ name: "send" }}
            title="Next"
            disabled={this.checkForInvalidFields()}
            backgroundColor="#00A68C"
            containerViewStyle={styles.finishButton}
            onPress={this.sendEmailInvitations.bind(this, invitations)}
          /> */}
        </View>
        
        {/* <Icon
          raised
          name="delete"
          reverse={true}
          type="material-icon"
          color="#2096f3"
          containerStyle={styles.addButton}
          onPress={this.addEmail.bind(this, "add")}
        /> */}
      </View>
    );
  }

  renderEmails() {
    const { invitations, dispatch } = this.props;
    return _.map(invitations, invite => {
      return (
        <View key={invite.id}>
          <View style={styles.inviteContainer}>
            <Input
              value={invite.email}
              style={styles.input}
              onChangeText={this.editEmail.bind(this, "edit", invite)}
              placeholder="Email"
              onBlur={this.updateEmailErrorMessage.bind(this, invite)}
            />
            <Icon
              name="delete"
              type="material-icon"
              color="#0E3A53"
              size={30}
              onPress={this.deleteEmail.bind(this, "delete", invite)}
            />
          </View>
          <View>
            <Text style={{ alignSelf: "center", color: "red" }}>{invite.error}</Text>
          </View>
        </View>
      );
    });
  }

  updateEmailErrorMessage(invite) {
    const { dispatch } = this.props;
    dispatch(
      updateEmailErrorMessage({
        id: invite.id,
        error: this.validateValue(invite.email)
      })
    );
  }

  validateValue(value) {
    return emailInviteValidator("emailInvite", value);
  }

  renderModal() {
    const { invitationResponse, navigation, errorEmails } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={this.navigateToSignUpComplete.bind(this)}
      >
        <View style={styles.modalContainer}>
          <Text h2 style={styles.modalHeading}>
            We will contact you shortly.
          </Text>
          {this.renderErrorEmails()}
          <Button
            raised
            backgroundColor="#00A68C"
            icon={{ name: "send" }}
            title="Done"
            onPress={this.navigateToSignUpComplete.bind(this)}
          />
        </View>
      </Modal>
    );
  }

  renderErrorEmails() {
    const errorEmails = this.props.errorEmails || '';
    if (errorEmails.length != 0) {
      return (
        <View>
          <PlainText style={{ alignSelf: "center" }}>Following emails couldn't be send</PlainText>
          {this.getErrorEmails(errorEmails)}
        </View>
      );
    }
  }

  getErrorEmails(errorEmails) {
    return errorEmails.map(email => {
      return (
        <PlainText key={email} style={{ alignSelf: "center" }}>
          {email}
        </PlainText>
      );
    });
  }

  navigateToSignUpComplete() {
    const { navigation } = this.props;
    this.setState({ modalVisible: false });
    navigation.goBack();
  }

  renderTryAgain() {
    const { invitationResponse, errorMessage } = this.props;
    return invitationResponse == "failure" ? (
      <PlainText style={styles.errorMessage}>
        Seems like a network problem. Please try again later
      </PlainText>
    ) : null;
  }

  addEmail(operation, email) {
    const { dispatch } = this.props;
    dispatch(modifyEmailInvitations({ operation }));
  }

  editEmail(operation, email, updatedEmailId) {
    const { dispatch } = this.props;
    dispatch(
      modifyEmailInvitations({
        operation,
        id: email.id,
        email: updatedEmailId
      })
    );
  }

  deleteEmail(operation, email) {
    const { dispatch } = this.props;
    dispatch(
      modifyEmailInvitations({
        operation,
        id: email.id
      })
    );
  }

  checkForInvalidFields() {
    const { invitations } = this.props;
    for (let invite in invitations) {
      if (invitations[invite].error !== "") {
        return true;
      }
    }
    return false;
  }

  sendEmailInvitations(emailInvitations) {
    const { dispatch, token } = this.props;
    dispatch(sendEmailInvitations(emailInvitations, token));
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 20,
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  scrollViewContainer: {
    // width: "100%",
    // flex: 5,
    // backgroundColor: 'red'
  },
  nextBtn:{
    borderRadius: 10,
    shadowOpacity: 5, 
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5, 
    elevation: 10,
  },
  heading: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#0E3A53",
    margin: 10
  },
  addButton: {
    position: "absolute",
    bottom: 75,
    right: 15,
    alignSelf: "flex-end"
  },
  inviteContainer: {
    flexDirection: "row",
    width: "100%"
  },
  finishButton: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    width: 180
  },
  input: {
    height: 40,
    margin: 10,
    backgroundColor: "#fafafa",
    borderColor: "#eeeeee",
    borderWidth: 1,
    flex: 0.95
  },
  modalContainer: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "space-around"
  },
  modalHeading: {
    textAlign: "center"
  }
};

export default connect(mapStateToProps)(InviteOthersForm);
