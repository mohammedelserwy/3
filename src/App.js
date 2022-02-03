

import React, { Component } from 'react';
import { Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { firstPageStyles } from './components/assets/styles/Styles';
class App extends Component {
  render() {
    return (
      <View style={firstPageStyles.pageView}>
        <TouchableOpacity >
          <View style={firstPageStyles.itemView}>
            <Image source={require('./components/assets/images/iconTwo.png')} />
            <Text style={firstPageStyles.seventhText}>تخطي </Text>


          </View>
        </TouchableOpacity>

        <View style={firstPageStyles.firstView}>
          <View style={firstPageStyles.secondView}>
            <Image source={require('./components/assets/images/second.png')} />
            <Text style={firstPageStyles.firstText}> أرفع طلبك </Text>
            <Text style={firstPageStyles.secondText}>

              {`هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
           
           
          المقروء لصفحة ما سيلهي القارئ عن التركيز
           
           على الشكل الخارجي للنص`}
            </Text>
            <View style={firstPageStyles.view}>
              <View style={firstPageStyles.roundedContainerOne}></View>
              <View style={firstPageStyles.roundedContainerTwo}></View>
              <View style={firstPageStyles.roundedContainerThree}></View>

            </View>
          </View>
          <TouchableOpacity style={firstPageStyles.bottom}>
            <View style={firstPageStyles.thirdView}>
              <Text style={firstPageStyles.fifthText}>التالى</Text>
            </View>
            <View style={firstPageStyles.fourthView}>
              <Image source={require('./components/assets/images/icon.png')} />
              <Text style={firstPageStyles.sixthText}>السابق</Text>


            </View>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}
export default App;
