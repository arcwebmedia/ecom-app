import Payment from "../../progress/payment";
import Address from "../../progress/Address";
import OrderSummary from "../../progress/orderSummary";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
const themeColor = "#fe7013";
const textColor = "#fe7013";


const Checkout = () => {
  const progressSteps = {
    borderWidth: 3,
    activeStepIconBorderColor: themeColor,
    completedProgressBarColor: themeColor,
    activeLabelColor: themeColor,
    completedStepNumColor: themeColor,
    completedStepIconColor: themeColor,
    activeStepNumColor: textColor
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ProgressSteps {...progressSteps}>
          <ProgressStep label="Address">
            <View >
              <Address/>
            </View>
          </ProgressStep>
          <ProgressStep label="Payment">
            <View >
             <Payment/>
            </View>
          </ProgressStep>
          <ProgressStep label="Summary">
            <View >
              <OrderSummary/>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  button: {
    backgroundColor: themeColor,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  buttonText: {
    color: textColor,
    fontSize: 16
  }
});
export default Checkout;
