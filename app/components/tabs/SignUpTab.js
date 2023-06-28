import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Alert, 
  useWindowDimensions
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';

import { styles } from '../../styles/login';

import { SignUpSchema } from '../../formik/schemas';

const SignUpTab = () => {
  const { height } = useWindowDimensions();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        password: '',
        confirmPW: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit}) => (
        <ScrollView>
          <View className='p-2 bg-white' style={{ height: height }}>

            <View className='flex-row'>
              <View className='w-44 mr-1'>
                <Text className='py-2 px-1 text-lg font-bold'>First Name</Text>
                <View className={styles.textInputWrapper}>
                  {/* FIRST NAME TEXTINPUT */}
                  <TextInput 
                    className='h-10 p-2' 
                    placeholder='First Name' 
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlur={() => setFieldTouched('firstName')}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text className={styles.errorMsg}>{errors.firstName}</Text>
                  )}
                </View>
              </View>
              <View className='w-44'>
                <Text className='py-2 px-1 text-lg font-bold'>Last Name</Text>
                <View className={styles.textInputWrapper}>
                  {/* LAST NAME TEXTINPUT */}
                  <TextInput 
                    className='h-10 p-2' 
                    placeholder='Last Name'
                    value={values.lastName}
                    onChangeText={handleChange('lastName')} 
                    onBlur={() => setFieldTouched('lastName')} 
                  />
                  {touched.lastName && errors.lastName && (
                    <Text className={styles.errorMsg}>{errors.lastName}</Text>
                  )}
                </View>
              </View>
            </View>

            <View className='flex-row'>
              <View className='w-52 mr-1'>
                <Text className='py-2 px-1 text-lg font-bold'>Email</Text>
                <View className={styles.textInputWrapper}>
                  {/* EMAIL TEXTINPUT */}
                  <TextInput 
                    className='h-10 p-2' 
                    placeholder='Email'
                    autoCapitalize='none'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  {touched.email && errors.email && (
                    <Text className={styles.errorMsg}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View className='w-36'>
                <Text className='py-2 px-1 text-lg font-bold'>Phone No.</Text>
                <View className={styles.textInputWrapper}>
                  {/* PHONE NO. TEXTINPUT */}
                  <TextInput 
                    className='h-10 p-2' 
                    placeholder='Phone No.'
                    keyboardType='phone-pad'
                    value={values.phoneNo}
                    onChangeText={handleChange('phoneNo')}
                    onBlur={() => setFieldTouched('phoneNo')}
                  />
                  {touched.phoneNo && errors.phoneNo && (
                    <Text className={styles.errorMsg}>{errors.phoneNo}</Text>
                  )}
                </View>
              </View>
            </View>

            <Text className='py-2 px-1 text-lg font-bold'>Password</Text>
            <View className={styles.textInputWrapper}>
              {/* PASSWORD TEXTINPUT */}
              <TextInput 
                className='h-10 p-2' 
                placeholder='Password'
                autoCapitalize='none'
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && errors.password && (
                <Text className={styles.errorMsg}>{errors.password}</Text>
              )}
            </View>

            <Text className='py-2 px-1 text-lg font-bold'>Confirm Password</Text>
            <View className={styles.textInputWrapper}>
              {/* CONFIRM PASSWORD TEXTINPUT */}
              <TextInput 
                className='h-10 p-2' 
                placeholder='Confirm Password'
                autoCapitalize='none'
                secureTextEntry
                value={values.confirmPW}
                onChangeText={handleChange('confirmPW')}
                onBlur={() => setFieldTouched('confirmPw')}
              />
              {touched.confirmPW && errors.confirmPW && (
                <Text className={styles.errorMsg}>{errors.confirmPW}</Text>
              )}
            </View>

            <View className='flex-row items-center my-10'>
              <TouchableOpacity 
                className={isValid ? styles.btnValid : styles.btnInvalid}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}

export default SignUpTab;