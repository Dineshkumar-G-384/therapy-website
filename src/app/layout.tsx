import '../styles/globals.css';

export const metadata = {
  title: 'Dr. Serena Blake',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='overflow-x-hiddencd'>{children}</body>
    </html>
  );
}
