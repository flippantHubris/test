/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

export default class test extends Component {
  componentWillMount() {
    console.log('yo');

    user = {
"name": "react34",
  "pass": "12333323dddd",
"mail": "mail3@email.com",
"conf_mail": "mail6a@email.com",

"profile_individual": {
  "field_idv_name_first" : {
	"und": {
		"0":{"value":"Shane" }
			}
  },
  "field_idv_name_last" : {
	"und": {
		"0":{"value":"Shane" }
			}
  },
  "field_idv_city" : {
	"und": {
		"0":{"value":"Shane" }
			}
  },
  "field_idv_zip" : {
	"und": {
		"0":{"value":"666" }
			}
  },
  "field_idv_address" : {
	"und": {
		"0":{"value":"123 oh shit" }
			}
  },
 "field_idv_initials" : {
	"und": {
		"0":{"value":"fh" }
			}
  }

}
}

state = { data:[] };
    let token = {};
    axios.post('https://api.sppx.io/rest/user/token', {}).then(response => this.setState({data: response.data}));
console.log(this.state);
    //
    //
    //axios.post('https://api.sppx.io/rest/user/register', {}, headers: {'X-CSRF-Token': reponse
    // })



  //   axios({
  //     method:'post',
  //     url:'https://api.sppx.io/rest/user/token',
  //
  //
  //
  //   })
  //     .then(function (response) {
  //   console.log(response);
  // })


//     var sppx = axios.create({
//   baseURL: 'https://api.sppx.io',
//   timeout: 1000
//   //headers: {'X-CSRF-Token': 'mpF9r53RH0yrKVCnGSgx_Pgodmnmtyzrpphzrv9rzvU'
//   }
// });

//sppx.get('/rest/file').then(response => console.log(response));

  //   sppx.get('/rest/file')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
//
//   sppx.post('/rest/user/token'
// )
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('test', () => test);
