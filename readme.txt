welcome on the best real estate app in the market ,
please follow these steps to run it :

1 - unzip the folder
2- in the root directory run >>  npm install
3- in the root directory run >>  cd ios
4- in the ios directory run >>  pod install

5- go to Google Developer Console (https://console.developers.google.com) and activate Google Maps Android API
6- In the Google Console Ensure that the "Google Maps Android API v2" is enabled.
7- Generate key for google map
8 - open AppDelegate.m in ios folder and put your google maps key >> [GMSServices provideAPIKey:@"YOUR KEY HERE"];
9 - open AndroidManifest.xml in android folder and put your google maps key >> <meta-data android:name="com.google.android.geo.API_KEY"  android:value="YOUR KEY HERE"/>

- use >>> react-native run-ios  / for iPhone
- use >>> react-native run-android  / for Android


