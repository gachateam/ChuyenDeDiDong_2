import PushNotification, {Importance} from 'react-native-push-notification';
import NotificationHandler from './NotificationHandler';

export default class NotifService {
  constructor(onRegister, onNotification) {
    this.lastId = 0;
    this.lastChannelCounter = 0;

    this.createDefaultChannels();

    NotificationHandler.attachRegister(onRegister);
    NotificationHandler.attachNotification(onNotification);

    // Clear badge number at start
    PushNotification.getApplicationIconBadgeNumber(function (number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });

    PushNotification.getChannels(function (channels) {
      console.log(channels);
    });
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: 'sound-channel-id', // (required)
        channelName: 'Sound channel', // (required)
        channelDescription: 'A sound channel', // (optional) default: undefined.
        soundName: 'dihoc.mp3', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created =>
        console.log(`createChannel 'sound-channel-id' returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  scheduleNotif(soundName,date,title,message) {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      date: date, // in 30 secs

      /* Android Only Properties */
      channelId: 'sound-channel-id',
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: title, // (optional)
      message: message, // (required)
      allowWhileIdle: true,
      repeatTime: 10000,
      repeatType: 'day',
      soundName: soundName?soundName:'default',
      playSound: !!soundName,
      actions: ['Yes', 'No']
    });
  }

  getScheduledLocalNotifications(callback) {
    PushNotification.getScheduledLocalNotifications(callback);
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }
}
