import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info', duration = 5000) => {
    const id = Date.now();
    const notification = {
      id,
      message,
      type,
    };

    setNotifications((prev) => [...prev, notification]);

    if (duration) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  const value = useMemo(() => ({ notifications, addNotification, removeNotification }), [notifications]);
  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationList notifications={notifications} onRemove={removeNotification} />
    </NotificationContext.Provider>
  );
}

function NotificationList({ notifications, onRemove }) {
NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
NotificationList.propTypes = {
  notifications: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
            getNotificationStyles(notification.type)
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">{notification.message}</p>
            <button
              onClick={() => onRemove(notification.id)}
              className="ml-4 text-current opacity-50 hover:opacity-100 transition-opacity"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function getNotificationStyles(type) {
  const styles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return styles[type] || styles.info;
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}