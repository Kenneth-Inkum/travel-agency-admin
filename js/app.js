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

        newBookingModal: false,
        newBooking: {
            customer: '',
            destination: '',
            date: '',
            amount: '',
            status: 'pending'
        },
        selectedStatus: 'all',
        bookings: [
            { id: 1, customer: 'John Doe', destination: 'Paris', date: '2024-02-15', status: 'confirmed', amount: 1250 },
            { id: 2, customer: 'Jane Smith', destination: 'Bali', date: '2024-03-01', status: 'pending', amount: 1800 },
            { id: 3, customer: 'Mike Johnson', destination: 'Tokyo', date: '2024-02-20', status: 'cancelled', amount: 2100 },
            { id: 4, customer: 'Sarah Wilson', destination: 'New York', date: '2024-02-28', status: 'confirmed', amount: 1500 },
            { id: 5, customer: 'David Brown', destination: 'London', date: '2024-03-05', status: 'pending', amount: 1750 }
        ],
        get filteredBookings() {
            // First apply status filter
            let filtered = this.selectedStatus === 'all'
                ? this.bookings
                : this.bookings.filter(booking => booking.status === this.selectedStatus);
            
            // Then apply search filter if there's a search term
            if (this.filterConfig.search.trim()) {
                const searchTerm = this.filterConfig.search.toLowerCase().trim();
                filtered = filtered.filter(booking => 
                    booking.customer.toLowerCase().includes(searchTerm) ||
                    booking.destination.toLowerCase().includes(searchTerm) ||
                    booking.status.toLowerCase().includes(searchTerm)
                );
            }
            
            // Finally apply sorting if a sort field is selected
            if (this.sortConfig.field) {
                filtered.sort((a, b) => {
                    const aValue = a[this.sortConfig.field];
                    const bValue = b[this.sortConfig.field];
                    
                    // Handle different data types
                    if (this.sortConfig.field === 'amount') {
                        return this.sortConfig.direction === 'asc' 
                            ? aValue - bValue 
                            : bValue - aValue;
                    } else if (this.sortConfig.field === 'date') {
                        return this.sortConfig.direction === 'asc'
                            ? new Date(aValue) - new Date(bValue)
                            : new Date(bValue) - new Date(aValue);
                    } else {
                        // String comparison for other fields
                        return this.sortConfig.direction === 'asc'
                            ? aValue.localeCompare(bValue)
                            : bValue.localeCompare(aValue);
                    }
                });
            }
            
            return filtered;
        },
        sortConfig: {
            field: null,  // 'customer', 'destination', 'date', 'amount', 'status'
            direction: 'asc' // 'asc' or 'desc'
        },

        filterConfig: {
            search: '',
            status: 'all'  // 'all', 'pending', 'confirmed', 'cancelled'
        },

        sortBookings(field) {
            if (this.sortConfig.field === field) {
                this.sortConfig.direction = this.sortConfig.direction === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortConfig.field = field;
                this.sortConfig.direction = 'asc';
            }
        },

        submitBooking() {
            // Add the new booking to the bookings array
            this.bookings.push({
                id: this.bookings.length + 1,
                ...this.newBooking,
                amount: parseFloat(this.newBooking.amount)
            });
            // Reset form and close modal
            this.newBooking = {
                customer: '',
                destination: '',
                date: '',
                amount: '',
                status: 'pending'
            };
            this.newBookingModal = false;
        },

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
            this.applyTheme();
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

            this.applyTheme();
        },

        // Apply theme with transition
        applyTheme() {
            // Add transition class before changing theme
            document.documentElement.classList.add('transition-colors', 'duration-200');
            
            // Apply dark mode
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            // Remove transition class after animation
            setTimeout(() => {
                document.documentElement.classList.remove('transition-colors', 'duration-200');
            }, 200);
        },

        // Status configurations
        statuses: {
            pending: {
                label: 'Pending',
                icon: 'fa-clock',
                color: 'text-yellow-600 dark:text-yellow-400',
                bg: 'bg-yellow-100 dark:bg-yellow-900/30'
            },
            confirmed: {
                label: 'Confirmed',
                icon: 'fa-check-circle',
                color: 'text-green-600 dark:text-green-400',
                bg: 'bg-green-100 dark:bg-green-900/30'
            },
            in_progress: {
                label: 'In Progress',
                icon: 'fa-spinner',
                color: 'text-blue-600 dark:text-blue-400',
                bg: 'bg-blue-100 dark:bg-blue-900/30'
            },
            completed: {
                label: 'Completed',
                icon: 'fa-check-double',
                color: 'text-emerald-600 dark:text-emerald-400',
                bg: 'bg-emerald-100 dark:bg-emerald-900/30'
            },
            cancelled: {
                label: 'Cancelled',
                icon: 'fa-times-circle',
                color: 'text-red-600 dark:text-red-400',
                bg: 'bg-red-100 dark:bg-red-900/30'
            }
        },

        // Update booking status
        updateBookingStatus(bookingId, newStatus) {
            const booking = this.bookings.find(b => b.id === bookingId);
            if (booking) {
                booking.status = newStatus;
                // Add notification
                this.addNotification(`Booking #${bookingId} status updated to ${this.statuses[newStatus].label}`, 'status');
            }
        },

        // Initialize
        init() {
            // Initialize dark mode
            const themePreference = localStorage.getItem('themePreference') || 'system';
            this.setTheme(themePreference);

            // Watch for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (this.themePreference === 'system') {
                    this.darkMode = e.matches;
                    this.applyTheme();
                }
            });

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
