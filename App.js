import * as React from "react";
import { View, Text, ScrollView, Platform } from "react-native";

import { MyContext } from './src/context/index';

import Stage_one from './src/components/stage_one';
import Stage_two from './src/components/stage_two';

export default class App extends React.Component {
  static contextType = MyContext;

  render() {
    // alert(`${this.context.state.stage}`)
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#fff',
            marginTop: Platform.OS === 'ios' ? 80 : 30
          }}
        >
          {/* <Text>Who pays the bill</Text> */}
          {
            this.context.state.stage === 1 ?
              <Stage_one /> : <Stage_two />
          }
        </View>
      </ScrollView>
    );
  }

}
