import "../styles/notifications.css";

export default function Notifications({ notification, onClose }) {
  if (!notification.message) return null;

  return (
    <div className={`notifications notifications--${notification.type}`}>
      <p>{notification.message}</p>
      <button onClick={onClose} className="notifications__close">
        &times;
      </button>
    </div>
  );
}
