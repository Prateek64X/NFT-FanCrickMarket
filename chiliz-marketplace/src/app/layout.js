// /src/app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
