interface Notification {
  type: string;
  message: string;
}

export default function progressNotification(
  notificationType: Notification,
): void {
  console.log(`${notificationType.type}: ${notificationType.message}`);
}

// test
const notification: Notification = { type: 'email', message: 'salve salve' };
progressNotification(notification);