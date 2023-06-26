import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

import Header from '../home/header/Header';

import styles from '../../styles/contactus';

const ContactUs = () => {
  return (
    <View>
      <SafeAreaView>
        <Header />
        <View className={styles.container}>
          <View className={styles.contentWrapper}>

            {/* Contact Us Title */}
            <View className={styles.titleWrapper}>
              <Text className={styles.title}>Thank you for choosing Anytime!</Text>
            </View>

            {/* App/Company Statements */}
            <View className={styles.statement}>
              <Text>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh.</Text>
            </View>
            <View className={styles.statement}>
              <Text>    Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Gravida neque convallis a cras semper. Feugiat nisl pretium fusce id velit ut.</Text>
            </View>
            <View className={styles.contactInfoContainer}>
              
              {/* Emails to reach us */}
              <View className={styles.contactInfoWrapper}>
                <Text>For Business Owners:</Text>
                <Text className={styles.email}>business@anytime.com</Text>
              </View>
              <View className={styles.contactInfoWrapper}>
                <Text>Other Inquiries:</Text>
                <Text className={styles.email}>help@anytime.com</Text>
              </View>

              {/* App/Company Logo */}
              <View className={styles.logoWrapper}>
                <Text>[INSERT LOGO]</Text>
              </View>

              {/* Footer */}
              <View className={styles.footer}>
                <Text className={styles.termsConditions}>Terms & Conditions</Text>
                <Text className={styles.copyright}>Copyright © 2023 Santa Lucia LLC</Text>
              </View>

            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ContactUs;