import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

import Header from '../components/home/header/Header';

import styles from '../styles/contactus';

const ContactUs = () => {
  return (
    <View>
      <View className={styles.container}>
        <View className={styles.contentWrapper}>

          {/* Contact Us Title */}
          <View className={styles.titleWrapper}>
            <Text selectable className={styles.title}>Thank you for choosing Anytime!</Text>
          </View>

          {/* App/Company Statements */}
          <View className={styles.statement}>
            <Text selectable>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh.</Text>
          </View>
          <View className={styles.statement}>
            <Text selectable>    Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Gravida neque convallis a cras semper. Feugiat nisl pretium fusce id velit ut.</Text>
          </View>

          <View className={styles.contactInfoContainer}>
            {/* Emails to reach us */}
            <View selectable className={styles.contactInfoWrapper}>
              <Text selectable>For Business Owners:</Text>
              <Text selectable className={styles.email}>business@anytime.com</Text>
            </View>
            <View className={styles.contactInfoWrapper}>
              <Text selectable>Other Inquiries:</Text>
              <Text selectable className={styles.email}>help@anytime.com</Text>
            </View>
            {/* App/Company Logo */}
            <View className={styles.logoWrapper}>
              <Text selectable>[INSERT LOGO]</Text>
            </View>
            {/* Footer */}
            <View className={styles.footer}>
              <Text selectable className={styles.termsConditions}>Terms & Conditions</Text>
              <Text selectable className={styles.copyright}>Copyright © 2023 Santa Lucia LLC</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  )
}

export default ContactUs;