# TravelPro Admin Dashboard

A modern, responsive admin dashboard template designed specifically for travel agencies. Built with TailwindCSS and Alpine.js, featuring a beautiful animated background and a clean, professional interface. This dashboard helps travel agencies manage their bookings, customers, and analytics in an efficient and user-friendly way.

## Author

**Kenneth Ekow Inkum**
- GitHub: [github.com/Kenneth-Inkum](https://github.com/Kenneth-Inkum)
- Email: [xanthosoma1989@gmail.com](mailto:xanthosoma1989@gmail.com)
- Role: Full Stack Developer
- Location: Ghana
- Portfolio: [Coming Soon]

## Features

### Authentication System
- 🔐 Secure multi-step authentication flow
- ✉️ Email verification with OTP system
- 🔄 60-second cooldown for OTP resend
- 🎨 Consistent UI across all authentication pages
- 🌓 Dark mode support for all authentication flows
- ✈️ Unique airplane-themed animations
- 📱 Fully responsive authentication pages

### Dashboard Features
- 🎨 Modern and clean UI design with professional color scheme
- 🌊 Animated background with floating shapes
- 🌓 Dark mode support for comfortable viewing
- 📱 Fully responsive layout (desktop, tablet, mobile)
- 🧩 Modular component structure
- 📊 Interactive charts and data visualization
- 🚀 Fast and lightweight implementation
- 🎯 Travel agency-specific booking management
- 📱 Mobile-first design approach
- 🔄 Real-time updates and notifications
- 📈 Advanced reporting capabilities

## Tech Stack

- HTML5
- CSS3 with Tailwind CSS v3.4.15
- Alpine.js v3.x.x - Lightweight JavaScript framework
- Font Awesome v6.4.0 - Icon library
- PostCSS with Autoprefixer
- NPM for package management

## Project Structure

```
travel-agency-admin/
├── auth/                  # Authentication related pages
│   ├── email-verification.html  # Email verification page
│   ├── forgot-password.html     # Forgot password page
│   ├── login.html              # Login page
│   ├── otp-verification.html    # OTP verification page
│   ├── register.html           # Registration page
│   └── reset-password.html      # Password reset page
├── dist/                 # Compiled CSS output
├── js/                   # JavaScript files
│   └── app.js           # Main application logic
├── src/                  # Source files
│   └── input.css        # Tailwind input CSS
├── index.html           # Main dashboard template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── README.md            # Project documentation
```

## Authentication Flow

1. **Registration**
   - User fills registration form
   - Email validation
   - Password strength requirements
   - Account creation

2. **Login**
   - Secure login with email/password
   - Remember me functionality
   - Forgot password option

3. **Forgot Password**
   - User enters registered email
   - System validates email existence
   - Initiates password reset flow

4. **Email Verification**
   - User enters their email address
   - System validates email format
   - Sends verification code to email

5. **OTP Verification**
   - 6-digit OTP input system
   - 60-second cooldown for resending OTP
   - Loading states for all actions
   - Error handling for invalid inputs

6. **Password Reset**
   - Secure password reset form
   - Password strength validation
   - Confirmation password matching

## Theme Support

- 🌞 Light Mode
- 🌙 Dark Mode
- 💻 System preference detection
- 🔄 Smooth theme transitions
- 💾 Persistent theme preference

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- NPM (v6 or higher)
- Modern web browser

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Kenneth-Inkum/travel-agency-admin.git
   cd travel-agency-admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. For production build:
   ```bash
   npm run build
   ```

## Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production

## Features Overview

### Dashboard
- Quick overview of key metrics
- Booking statistics and trends
- Revenue tracking with visual graphs
- Customer satisfaction metrics
- Recent activities feed
- Quick action buttons

### Bookings Management
- View and manage recent bookings
- Booking status tracking
- Quick actions for booking management
- Detailed booking information
- Payment status tracking
- Booking history

### Customer Management
- Comprehensive customer profiles
- Booking history and preferences
- Customer communication logs
- Customer segmentation
- Loyalty program tracking
- Custom notes and tags

### Analytics
- Interactive charts and graphs
- Booking trends analysis
- Revenue analysis with forecasting
- Customer behavior insights
- Performance metrics
- Exportable reports

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions to improve TravelPro Admin Dashboard! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- TailwindCSS team for the amazing framework
- Alpine.js team for the lightweight JS functionality
- Font Awesome for the comprehensive icon set
- The open-source community for inspiration and resources

## Support

For support, please open an issue in the GitHub repository or contact the maintainer directly.
