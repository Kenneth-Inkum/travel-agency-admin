// Alpine.js Global Store
document.addEventListener('alpine:init', () => {
    Alpine.store('app', {
        // User preferences
        darkMode: false,
        themePreference: 'system', // 'light', 'dark', or 'system'
        sidebarOpen: false,  // Initialize as closed
        sidebarMini: false,
        userDropdownOpen: false,
        isDesktop: window.innerWidth >= 1024,
        resizeTimeout: null,

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
            if (this.isDesktop) {
                this.sidebarMini = !this.sidebarMini;
                localStorage.setItem('sidebarMini', this.sidebarMini);
            } else {
                this.sidebarOpen = !this.sidebarOpen;
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

        // Theme handler
        setTheme(preference) {
            this.themePreference = preference;
            localStorage.setItem('themePreference', preference);

            if (preference === 'system') {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                this.darkMode = isDark;
                localStorage.removeItem('darkMode');
            } else {
                this.darkMode = preference === 'dark';
                localStorage.setItem('darkMode', this.darkMode);
            }

            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        // Initialize
        init() {
            // Initialize dark mode
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleDarkMode = (e) => {
                if (this.themePreference === 'system') {
                    this.darkMode = e.matches;
                    if (this.darkMode) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                }
            };

            // Load theme preference
            const savedTheme = localStorage.getItem('themePreference') || 'system';
            this.themePreference = savedTheme;

            if (savedTheme === 'system') {
                this.darkMode = darkModeMediaQuery.matches;
            } else {
                this.darkMode = savedTheme === 'dark';
            }

            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            }

            // Listen for system dark mode changes
            darkModeMediaQuery.addEventListener('change', handleDarkMode);

            // Initialize sidebar state
            this.isDesktop = window.innerWidth >= 1024;
            const savedSidebarMini = localStorage.getItem('sidebarMini');
            if (savedSidebarMini !== null) {
                this.sidebarMini = JSON.parse(savedSidebarMini) && this.isDesktop;
            }

            let rafId = null;
            const handleResize = () => {
                const wasDesktop = this.isDesktop;
                this.isDesktop = window.innerWidth >= 1024;

                if (wasDesktop !== this.isDesktop) {
                    if (!this.isDesktop) {
                        this.sidebarOpen = false;
                        this.sidebarMini = false;
                    } else {
                        const savedMini = localStorage.getItem('sidebarMini');
                        if (savedMini !== null) {
                            this.sidebarMini = JSON.parse(savedMini);
                        }
                    }
                }
            };

            const resizeListener = () => {
                if (rafId) {
                    cancelAnimationFrame(rafId);
                }
                rafId = requestAnimationFrame(handleResize);
            };

            window.addEventListener('resize', resizeListener);

            // Initial check
            handleResize();

            // Cleanup function
            return () => {
                if (rafId) {
                    cancelAnimationFrame(rafId);
                }
                window.removeEventListener('resize', resizeListener);
                darkModeMediaQuery.removeEventListener('change', handleDarkMode);
            };
        },
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
