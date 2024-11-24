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
- 🌓 Enhanced dark mode with smooth transitions
  - 300ms transition duration for all theme changes
  - Consistent transition timing across all components
  - Smooth background and border color transitions
  - Proper backdrop blur transitions
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
│   ├── email-verification.html  # Email verification flow
│   ├── forgot-password.html     # Password recovery
│   ├── login.html              # Main login page
│   ├── otp-verification.html    # OTP verification flow
│   ├── privacy-policy.html     # Privacy policy page
│   ├── register.html           # User registration
│   ├── reset-password.html     # Password reset flow
│   └── terms-conditions.html   # Terms and conditions
├── dist/                 # Compiled assets
│   └── output.css       # Compiled Tailwind CSS
├── js/                   # JavaScript files
│   └── app.js           # Main Alpine.js application
├── src/                  # Source files
│   └── input.css        # Tailwind directives
├── bookings.html        # Bookings management page
├── index.html           # Dashboard homepage
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md            # Project documentation
```

## Recent Improvements

### Theme System Enhancements
- Implemented smooth transitions between light and dark modes (300ms)
- Added consistent transition timing across all components
- Improved system theme preference detection
- Enhanced theme persistence with localStorage
- Applied transitions to:
  - Page backgrounds and gradients
  - Card containers and borders
  - Form elements and buttons
  - Alert messages and notifications
  - Navigation elements

### Authentication Pages
- Unified design across all authentication pages
- Consistent theme transitions in auth flows
- Improved error message styling
- Enhanced form container transitions
- Updated privacy and terms pages with smooth transitions

### Performance Optimization
- Optimized transition implementations
- Reduced redundant code
- Improved theme toggle mechanism
- Enhanced backdrop blur performance

### Component Architecture
- Modular design for reusability
- Consistent class naming conventions
- Improved component organization
- Enhanced state management
- Better error handling patterns

## Development Workflow

### Prerequisites
- Node.js 14.x or higher
- NPM 6.x or higher

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
