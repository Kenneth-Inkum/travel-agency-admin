// Alpine.js Global Store
document.addEventListener('alpine:init', () => {
    Alpine.store('app', {
        // User preferences
        darkMode: false,
        sidebarOpen: false,  // Initialize as closed
        sidebarMini: false,
        userDropdownOpen: false,

        // User data
        user: {
            name: 'John Smith',
            email: 'john.smith@travelpro.com',
            role: 'Senior Travel Agent',
            avatar: './images/avatar.jpg',
            status: 'online'
        },

        // Notifications
        notifications: [
            {
                id: 1,
                type: 'booking',
                title: 'New Booking Request',
                message: 'Sarah Johnson requested a booking for Paris tour.',
                time: '5 minutes ago',
                read: false,
                icon: 'fa-calendar-check'
            },
            {
                id: 2,
                type: 'alert',
                title: 'Flight Schedule Change',
                message: 'Flight AB123 to London has been rescheduled.',
                time: '1 hour ago',
                read: false,
                icon: 'fa-plane'
            },
            {
                id: 3,
                type: 'message',
                title: 'New Message',
                message: 'You have a new message from customer support.',
                time: '2 hours ago',
                read: true,
                icon: 'fa-envelope'
            },
            {
                id: 4,
                type: 'system',
                title: 'System Update',
                message: 'System maintenance scheduled for tonight.',
                time: '1 day ago',
                read: true,
                icon: 'fa-gear'
            }
        ],

        // Get unread notifications count
        getUnreadCount() {
            return this.notifications.filter(n => !n.read).length;
        },

        // Mark notification as read
        markAsRead(id) {
            const notification = this.notifications.find(n => n.id === id);
            if (notification) {
                notification.read = true;
            }
        },

        // Mark all notifications as read
        markAllAsRead() {
            this.notifications.forEach(n => n.read = true);
        },

        // Toggle sidebar mini mode
        toggleSidebar() {
            // Only toggle mini mode on desktop screens
            if (window.innerWidth >= 1024) { // lg breakpoint
                this.sidebarMini = !this.sidebarMini;
                localStorage.setItem('sidebarMini', JSON.stringify(this.sidebarMini));
            }
        },

        // Notification system
        addNotification(message, type = 'info') {
            this.notifications.push({
                id: Date.now(),
                message,
                type,
                read: false
            });
        },
        markNotificationAsRead(id) {
            const notification = this.notifications.find(n => n.id === id);
            if (notification) {
                notification.read = true;
            }
        },

        // Theme toggler
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        // Initialize
        init() {
            // Load dark mode preference
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode !== null) {
                this.darkMode = JSON.parse(savedDarkMode);
                if (this.darkMode) {
                    document.documentElement.classList.add('dark');
                }
            }

            // Load sidebar mini mode preference
            const savedSidebarMini = localStorage.getItem('sidebarMini');
            if (savedSidebarMini !== null) {
                this.sidebarMini = JSON.parse(savedSidebarMini);
            }

            // Set initial sidebar state based on screen size
            this.sidebarOpen = window.innerWidth >= 1024;

            // Add resize listener
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024) {
                    // On desktop, ensure sidebar is always visible
                    this.sidebarOpen = true;
                } else {
                    // On mobile/tablet, keep sidebar closed
                    this.sidebarOpen = false;
                }
            });
        }
    });
});

// Chart.js Configuration (placeholder)
const initializeCharts = () => {
    // Will be implemented when Chart.js is added
    console.log('Charts initialization placeholder');
};

// Document Ready Handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize any necessary components
    initializeCharts();
});
